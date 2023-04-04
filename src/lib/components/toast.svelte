<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import Button from './button.svelte';
  import Icon from './icon.svelte';
  import Spinner from './spinner.svelte';
  import Transitions from './toasts/transitions.svelte';
  import type { Toast, ToastPosition } from './toasts/types';

  export let toast: Toast;
  export let position: ToastPosition;

  const dispatch = createEventDispatcher<{ dismiss: undefined }>();
</script>

<Transitions {toast} {position}>
  <div
    role={toast.type === 'error' ? 'alert' : 'status'}
    aria-live="polite"
    class="rounded-lg border border-border bg-background-panel px-4 py-2 shadow transition-shadow hover:shadow-md"
  >
    <div class="flex">
      {#if toast.type}
        <div class="-ml-2 mr-2 flex h-9 items-center justify-center pl-2">
          {#if toast.type === 'loading'}
            <Spinner size="xs" />
          {:else if toast.type === 'success'}
            <Icon class="text-success" icon="check-circle" />
          {:else if toast.type === 'error'}
            <Icon class="text-error" icon="close-circle" />
          {/if}
        </div>
      {/if}
      <div class="flex-1 p-1.5">
        <p class="text-base">{toast.message}</p>
        {#if toast.description}
          <p class="mt-0.5 text-base text-foreground-secondary">
            {toast.description}
          </p>
        {/if}
      </div>
      {#if toast.timeout === 0 && toast.type !== 'loading'}
        <div class="-mr-2 ml-4">
          <Button variant="secondary" size="sm" icon="close" on:click={() => dispatch('dismiss')} />
        </div>
      {/if}
    </div>
  </div>
</Transitions>
