import { writable } from 'svelte/store';
import type { Toast } from './types';

type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

type Params = Omit<PartialBy<Toast, 'id' | 'timeout'>, 'createdAt' | 'reoccurredAt'>;

type PromiseParams = Pick<Params, 'id' | 'class' | 'style' | 'component'> & {
  loading: Pick<Params, 'message' | 'description'>;
  success: Pick<Params, 'message' | 'description' | 'timeout'>;
  error: Pick<Params, 'message' | 'description' | 'timeout'>;
};

const getTimeout = (timeout: Params['timeout'], type: Params['type']) => {
  return timeout || type === 'error' ? 5000 : 2000;
};

const createToastStore = () => {
  const { subscribe, set, update } = writable<Toast[]>([]);

  const add = (params: Params) => {
    const id = params.id || crypto.randomUUID();

    update((prev) => {
      if (prev.some((n) => n.id === id)) {
        return prev.map((n) => (n.id === id ? { ...n, ...params, reoccurredAt: Date.now() } : n));
      }

      return [
        ...prev,
        { id, timeout: getTimeout(params.timeout, params.type), ...params, createdAt: Date.now() }
      ];
    });

    return id;
  };

  const replace = (id: string, params: Params) =>
    update((prev) => prev.map((n) => (n.id === id ? { ...n, ...params } : n)));

  function promise<T>(promise: Promise<T>, params: PromiseParams) {
    const id = add({ ...params, ...params.loading, type: 'loading', timeout: 0 });

    promise
      .then(() => {
        replace(id, {
          timeout: getTimeout(params.success.timeout, 'success'),
          ...params.success,
          type: 'success'
        });
      })
      .catch(() => {
        replace(id, {
          timeout: getTimeout(params.error.timeout, 'error'),
          ...params.error,
          type: 'error'
        });
      });

    return id;
  }

  const methods = {
    subscribe,
    success: (params: Omit<Params, 'type'>) => add({ ...params, type: 'success' }),
    error: (params: Omit<Params, 'type'>) => add({ ...params, type: 'error' }),
    loading: (params: Omit<Params, 'type'>) => add({ ...params, type: 'loading' }),
    promise,
    update,
    clear: (id: string) => update((prev) => prev.filter((n) => n.id !== id)),
    clearAll: () => set([])
  };

  // return the 'add' function with all the other methods as properties
  return Object.assign(add, methods) as typeof add & typeof methods;
};

export const toast = createToastStore();
