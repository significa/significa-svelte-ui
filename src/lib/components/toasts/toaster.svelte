<script lang="ts">
  import { reducedMotion } from '$lib/stores/reduced-motion';
  import clsx from 'clsx';
  import { setContext, type ComponentType, type SvelteComponentTyped } from 'svelte';
  import { flip } from 'svelte/animate';
  import { circOut } from 'svelte/easing';
  import { pausableTimeout } from './pausable-timeout';
  import { toast as toastStore } from './store';
  import type { Toast, ToastPosition, ToastSpace } from './types';

  let className: undefined | string = undefined;
  export { className as class };
  export let position: ToastPosition = 'bottom-right';
  export let gap: ToastSpace = 'md';
  export let inset: ToastSpace = 'md';
  export let component: ComponentType<SvelteComponentTyped<{ toast: Toast }>>;
  export let wrapper: undefined | { class?: string; style?: string } = undefined;

  setContext('@significa/toast', {
    position,
    gap,
    inset
  });
</script>

<div class={clsx('toasts', position, `gap-${gap}`, `inset-${inset}`, className)}>
  {#each $toastStore as { component: toastComponent, ...toast } (toast.id)}
    <div
      class={clsx('toast', toast.class || wrapper?.class)}
      use:pausableTimeout={{ ms: toast.timeout, reoccurredAt: toast.reoccurredAt }}
      on:timeout={() => toastStore.clear(toast.id)}
      animate:flip={{ duration: $reducedMotion ? 0 : 800, easing: circOut }}
      style={toast.style || wrapper?.style}
    >
      {#if toastComponent || component}
        <svelte:component
          this={toastComponent || component}
          {toast}
          on:dismiss={() => toastStore.clear(toast.id)}
        />
      {/if}
    </div>
  {/each}
</div>

<style>
  .toasts {
    pointer-events: none;
    position: fixed;
    z-index: 99999;

    display: flex;
    flex-direction: var(--toasts-flex-direction);
    align-items: var(--toasts-align-items);
    gap: var(--toasts-gap);
    inset: var(--toasts-inset);
  }

  .toasts.top-left {
    --toasts-flex-direction: column;
    --toasts-align-items: flex-start;
  }

  .toasts.top-center {
    --toasts-flex-direction: column;
    --toasts-align-items: center;
  }

  .toasts.top-right {
    --toasts-flex-direction: column;
    --toasts-align-items: flex-end;
  }

  .toasts.bottom-left {
    --toasts-flex-direction: column-reverse;
    --toasts-align-items: flex-start;
  }

  .toasts.bottom-center {
    --toasts-flex-direction: column-reverse;
    --toasts-align-items: center;
  }

  .toasts.bottom-right {
    --toasts-flex-direction: column-reverse;
    --toasts-align-items: flex-end;
  }

  .toasts.gap-sm {
    --toasts-gap: 0.5rem;
  }

  .toasts.gap-md {
    --toasts-gap: 1rem;
  }

  .toasts.gap-lg {
    --toasts-gap: 1.5rem;
  }

  .toasts.gap-xl {
    --toasts-gap: 2rem;
  }

  .toasts.inset-sm {
    --toasts-inset: 0.5rem;
  }

  .toasts.inset-md {
    --toasts-inset: 1rem;
  }

  .toasts.inset-lg {
    --toasts-inset: 1.5rem;
  }

  .toasts.inset-xl {
    --toasts-inset: 2rem;
  }

  .toast {
    pointer-events: auto;
    z-index: 2;
    max-width: 24rem;
  }
</style>
