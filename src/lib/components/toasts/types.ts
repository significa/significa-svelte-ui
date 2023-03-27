import type { ComponentType } from 'svelte';

export type Toast = {
  id: string;
  message: string;
  timeout: number;
  description?: string;
  createdAt?: number;
  reoccurredAt?: number;
  type?: 'loading' | 'success' | 'error';
  class?: string;
  style?: string;
  component?: ComponentType;
};

export type ToastPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';
