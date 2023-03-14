import { writable } from 'svelte/store';

type EscapeEntry = { id: string; callback: (e: KeyboardEvent) => void };

const store = writable<EscapeEntry[]>([], () => {
  const handler = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      store.update((entries) => {
        const entry = entries.pop();
        if (entry?.callback) entry.callback(e);
        return entries;
      });
    }
  };

  window.addEventListener('keydown', handler);

  return () => {
    window.removeEventListener('keydown', handler);
  };
});

export const escapeKey = (_: HTMLElement, { id, callback }: EscapeEntry) => {
  const unsubscribe = store.subscribe((entries) => entries);

  store.update((entries) => {
    if (entries.some((entry) => entry.id === id)) return entries;

    return [...entries, { id, callback }];
  });

  return {
    destroy() {
      store.update((entries) => entries.filter((entry) => entry.id !== id));
      unsubscribe();
    }
  };
};
