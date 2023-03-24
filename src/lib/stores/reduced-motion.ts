import { browser } from '$app/environment';
import { readable } from 'svelte/store';

export const reducedMotion = readable(
  browser ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false,
  (set) => {
    const updateMotionPreference = (event: MediaQueryListEvent) => set(event.matches);

    const mediaQueryList = window.matchMedia('(prefers-reduced-motion: reduce)');
    mediaQueryList.addEventListener('change', updateMotionPreference);

    return () => mediaQueryList.removeEventListener('change', updateMotionPreference);
  }
);
