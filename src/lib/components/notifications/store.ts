import type { ComponentType } from 'svelte';
import { writable } from 'svelte/store';

export type NotificationType = {
  id: string;
  message: string;
  timeout: number;
  description?: string;
  createdAt?: number;
  reoccuredAt?: number;
  type?: 'loading' | 'success' | 'error';
  class?: string;
  style?: string;
  component?: ComponentType;
};

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

  const remove = (id: string) => update((prev) => prev.filter((n) => n.id !== id));

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

  return {
    subscribe,
    add,
    promise,
    update,
    remove,
    clearAll: () => set([])
  };
};

export const notifications = createNotificationsStore();
