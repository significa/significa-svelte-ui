<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import Button from '../button.svelte';
  import Icon from '../icon.svelte';
  import Spinner from '../spinner.svelte';
  import type { NotificationType } from './store';

  export let notification: NotificationType;

  const dispatch = createEventDispatcher<{ dismiss: string }>();
</script>

<div
  class="rounded-lg border border-border bg-background-panel py-2 px-4 shadow transition-shadow hover:shadow-md"
>
  <div class="flex">
    {#if notification.type}
      <div class="-ml-2 mr-2 flex h-9 items-center justify-center pl-2">
        {#if notification.type === 'loading'}
          <Spinner size="xs" />
        {:else if notification.type === 'success'}
          <Icon class="text-success" icon="check-circle" />
        {:else if notification.type === 'error'}
          <Icon class="text-error" icon="close-circle" />
        {/if}
      </div>
    {/if}
    <div class="flex-1 p-1.5">
      <p class="text-base">{notification.message}</p>
      {#if notification.description}
        <p class="mt-0.5 text-base text-foreground-secondary">
          {notification.description}
        </p>
      {/if}
    </div>
    {#if notification.timeout === 0 && notification.type !== 'loading'}
      <div class="ml-4 -mr-2">
        <Button
          variant="secondary"
          size="sm"
          icon="close"
          on:click={() => dispatch('dismiss', notification.id)}
        />
      </div>
    {/if}
  </div>
</div>
