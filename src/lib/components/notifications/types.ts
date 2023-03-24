import type { ComponentType } from 'svelte';

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

export type Position =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';
