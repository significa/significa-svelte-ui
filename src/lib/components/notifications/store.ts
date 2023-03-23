import { writable } from 'svelte/store';

export type Notification = {
  id: string;
  message: string;
  timeout: number;
  description?: string;
  type?: 'loading' | 'success' | 'error';
};

type NotificationParams = Omit<Notification, 'id' | 'timeout'> & {
  id?: string;
  timeout?: number;
};

type PromiseNotificationParams = Pick<NotificationParams, 'id'> & {
  loading: Pick<NotificationParams, 'message' | 'description'>;
  success: Pick<NotificationParams, 'message' | 'description' | 'timeout'>;
  error: Pick<NotificationParams, 'message' | 'description' | 'timeout'>;
};

const createNotificationsStore = () => {
  const { subscribe, set, update } = writable<Notification[]>([]);

  const add = (params: NotificationParams) => {
    const id = params.id || crypto.randomUUID();

    update((prev) => {
      const rest = prev.filter((n) => n.id !== id);
      const timeout = params.timeout || params.type === 'error' ? 5000 : 2000;

      return [...rest, { id, timeout, ...params }];
    });

    return id;
  };

  const replace = (id: string, params: NotificationParams) =>
    update((prev) => prev.map((n) => (n.id === id ? { ...n, ...params } : n)));

  const remove = (id: string) => update((prev) => prev.filter((n) => n.id !== id));

  function promise<T>(promise: Promise<T>, params: PromiseNotificationParams) {
    const id = add({ ...params.loading, type: 'loading', timeout: 0 });

    promise
      .then(() => {
        replace(id, {
          timeout: params.success.timeout || 2000,
          ...params.success,
          type: 'success'
        });
      })
      .catch(() => {
        replace(id, { timeout: params.error.timeout || 5000, ...params.error, type: 'error' });
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
