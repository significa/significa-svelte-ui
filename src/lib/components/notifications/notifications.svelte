<script lang="ts">
  import clsx from 'clsx';
  import type { ComponentType } from 'svelte';
  import { flip } from 'svelte/animate';
  import { circInOut, circOut } from 'svelte/easing';
  import NotificationWrapper from './notification-wrapper.svelte';
  import Notification from './notification.svelte';
  import { pausableTimeout } from './pausable-timeout';
  import { notifications } from './store';

  function bounds(value: number, [outMin, outMax]: [number, number], [inMin, inMax] = [0, 1]) {
    return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
  }

  function animate(
    node: HTMLElement,
    params: { direction: 'in' | 'out'; position: typeof position }
  ) {
    const { height: h } = node.getBoundingClientRect();
    const style = getComputedStyle(node);
    const transform = style.transform === 'none' ? '' : style.transform;

    return {
      duration: params.direction === 'in' ? 300 : 200,
      easing: params.direction === 'in' ? circInOut : circOut,
      css: (t: number) => {
        return `
          ${params.direction === 'out' ? 'z-index: 1;' : ''}
          transform-origin: ${params.position?.startsWith('top') ? 'top' : 'bottom'};
          transform: ${transform} scale(${bounds(t, [0.6, 1])}) translateY(${
          params.direction === 'out'
            ? bounds(t, [params.position?.startsWith('top') ? h * -1 : h, 0])
            : '0'
        }px);
          opacity: ${t}
        `;
      }
    };
  }

  let className: undefined | string = undefined;
  export { className as class };
  export let position:
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right' = 'bottom-right';
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
      in:animate={{ direction: 'in', position }}
      out:animate={{ direction: 'out', position }}
      animate:flip={{ duration: 800, easing: circOut }}
      style={notification.style || defaultParams?.style}
    >
      <NotificationWrapper {notification}>
        {#if component || defaultParams?.component}
          <svelte:component
            this={component || defaultParams?.component}
            {notification}
            on:dismiss={({ detail: id }) => notifications.remove(id)}
          />
        {:else}
          <Notification {notification} on:dismiss={({ detail: id }) => notifications.remove(id)} />
        {/if}
      </NotificationWrapper>
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
