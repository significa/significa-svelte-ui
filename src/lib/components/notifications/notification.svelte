<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { fly } from 'svelte/transition';
  import Button from '../button.svelte';
  import Icon from '../icon.svelte';
  import Spinner from '../spinner.svelte';
  import { pausableTimeout } from './pausable-timeout';
  import type { Notification } from './store';

  export let id: Notification['id'];
  export let message: Notification['message'];
  export let timeout: Notification['timeout'];
  export let description: Notification['description'] = undefined;
  export let type: Notification['type'] = undefined;

  const dispatch = createEventDispatcher<{ dismiss: string }>();
</script>

<div
  use:pausableTimeout={timeout}
  on:timeout={() => dispatch('dismiss', id)}
  transition:fly={{ y: 100 }}
  class="pointer-events-auto max-w-md rounded-lg border border-border bg-background-panel py-2 px-4 shadow transition-shadow hover:shadow-md"
>
  <div class="flex">
    {#if type}
      <div class="-ml-2 mr-2 flex h-9 items-center justify-center pl-2">
        {#if type === 'loading'}
          <Spinner size="xs" />
        {:else if type === 'success'}
          <Icon class="text-success" icon="check-circle" />
        {:else if type === 'error'}
          <Icon class="text-error" icon="close-circle" />
        {/if}
      </div>
    {/if}
    <div class="flex-1 p-1.5">
      <p class="text-base">{message}</p>
      {#if description}
        <p class="mt-0.5 text-base text-foreground-secondary">
          {description}
        </p>
      {/if}
    </div>
    {#if timeout === 0 && type !== 'loading'}
      <div class="ml-4 -mr-2">
        <Button
          variant="secondary"
          size="sm"
          icon="close"
          on:click={() => dispatch('dismiss', id)}
        />
      </div>
    {/if}
  </div>
</div>
