<script lang="ts">
  import clsx from 'clsx';
  import type { ComponentType } from 'svelte';
  import { flip } from 'svelte/animate';
  import { circOut } from 'svelte/easing';
  import Notification from './notification.svelte';
  import { pausableTimeout } from './pausable-timeout';
  import { notifications } from './store';
  import type { Position } from './types';

  let className: undefined | string = undefined;
  export { className as class };
  export let position: Position = 'bottom-right';
  export let gap: 'sm' | 'md' | 'lg' | 'xl' = 'md';
  export let inset: 'sm' | 'md' | 'lg' | 'xl' = 'md';
  export let defaultParams:
    | undefined
    | {
        class?: string;
        style?: string;
        component?: ComponentType;
      } = undefined;
</script>

<div class={clsx('notifications', position, `gap-${gap}`, `inset-${inset}`, className)}>
  {#each $notifications as { component, ...notification } (notification.id)}
    <div
      class={clsx('notification', notification.class || defaultParams?.class)}
      use:pausableTimeout={{ ms: notification.timeout, reoccuredAt: notification.reoccuredAt }}
      on:timeout={() => notifications.remove(notification.id)}
      animate:flip={{ duration: 800, easing: circOut }}
      style={notification.style || defaultParams?.style}
    >
      {#if component || defaultParams?.component}
        <svelte:component
          this={component || defaultParams?.component}
          {position}
          {notification}
          on:dismiss={({ detail: id }) => notifications.remove(id)}
        />
      {:else}
        <Notification
          {position}
          {notification}
          on:dismiss={({ detail: id }) => notifications.remove(id)}
        />
      {/if}
    </div>
  {/each}
</div>

<style>
  .notifications {
    pointer-events: none;
    position: fixed;
    z-index: 99999;

    display: flex;
    flex-direction: var(--notifications-flex-direction);
    align-items: var(--notifications-align-items);
    gap: var(--notifications-gap);
    inset: var(--notifications-inset);
  }

  .notifications.top-left {
    --notifications-flex-direction: column;
    --notifications-align-items: flex-start;
  }

  .notifications.top-center {
    --notifications-flex-direction: column;
    --notifications-align-items: center;
  }

  .notifications.top-right {
    --notifications-flex-direction: column;
    --notifications-align-items: flex-end;
  }

  .notifications.bottom-left {
    --notifications-flex-direction: column-reverse;
    --notifications-align-items: flex-start;
  }

  .notifications.bottom-center {
    --notifications-flex-direction: column-reverse;
    --notifications-align-items: center;
  }

  .notifications.bottom-right {
    --notifications-flex-direction: column-reverse;
    --notifications-align-items: flex-end;
  }

  .notifications.gap-sm {
    --notifications-gap: 0.5rem;
  }

  .notifications.gap-md {
    --notifications-gap: 1rem;
  }

  .notifications.gap-lg {
    --notifications-gap: 1.5rem;
  }

  .notifications.gap-xl {
    --notifications-gap: 2rem;
  }

  .notifications.inset-sm {
    --notifications-inset: 0.5rem;
  }

  .notifications.inset-md {
    --notifications-inset: 1rem;
  }

  .notifications.inset-lg {
    --notifications-inset: 1.5rem;
  }

  .notifications.inset-xl {
    --notifications-inset: 2rem;
  }

  .notification {
    pointer-events: auto;
    z-index: 2;
    max-width: 24rem;
  }
</style>
