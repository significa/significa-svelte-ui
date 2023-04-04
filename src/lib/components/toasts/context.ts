import { getContext, hasContext } from 'svelte';
import type { ToastPosition, ToastSpace } from './types';

export const getToasterContext = () => {
  if (hasContext('@significa/toast')) {
    return getContext<{ position: ToastPosition; gap: ToastSpace; inset: ToastSpace }>(
      '@significa/toast'
    );
  }
};
