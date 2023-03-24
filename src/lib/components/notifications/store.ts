import { writable } from 'svelte/store';
import type { NotificationType } from './types';

type NotificationParams = Omit<NotificationType, 'id' | 'timeout'> & {
  id?: string;
  timeout?: number;
};

type PromiseNotificationParams = Pick<
  NotificationParams,
  'id' | 'class' | 'style' | 'component'
> & {
  loading: Pick<NotificationParams, 'message' | 'description'>;
  success: Pick<NotificationParams, 'message' | 'description' | 'timeout'>;
  error: Pick<NotificationParams, 'message' | 'description' | 'timeout'>;
};

const getTimeout = (timeout: NotificationParams['timeout'], type: NotificationParams['type']) => {
  return timeout || type === 'error' ? 5000 : 2000;
};

const createNotificationsStore = () => {
  const { subscribe, set, update } = writable<NotificationType[]>([]);

  const add = (params: NotificationParams) => {
    const id = params.id || crypto.randomUUID();

    update((prev) => {
      if (prev.some((n) => n.id === id)) {
        return prev.map((n) => (n.id === id ? { ...n, ...params, reoccuredAt: Date.now() } : n));
      }

      return [
        ...prev,
        { id, timeout: getTimeout(params.timeout, params.type), ...params, createdAt: Date.now() }
      ];
    });

    return id;
  };

  const replace = (id: string, params: NotificationParams) =>
    update((prev) => prev.map((n) => (n.id === id ? { ...n, ...params } : n)));

  function promise<T>(promise: Promise<T>, params: PromiseNotificationParams) {
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
    success: (params: Omit<NotificationParams, 'type'>) => add({ ...params, type: 'success' }),
    error: (params: Omit<NotificationParams, 'type'>) => add({ ...params, type: 'error' }),
    loading: (params: Omit<NotificationParams, 'type'>) => add({ ...params, type: 'loading' }),
    promise,
    update,
    clear: (id: string) => update((prev) => prev.filter((n) => n.id !== id)),
    clearAll: () => set([])
  };

  // return the 'add' function with all the other methods as properties
  return Object.assign(add, methods) as typeof add & typeof methods;
};

export const notifications = createNotificationsStore();
