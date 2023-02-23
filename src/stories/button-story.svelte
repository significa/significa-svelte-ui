<script lang="ts">
  import Button from '$lib/components/button.svelte';
  import type { ComponentProps } from 'svelte';

  type $$Props = ComponentProps<Button> & {
    label?: string;
  };

  export let label: $$Props['label'] = undefined;
</script>

<div data-theme="light">
  {#if label}
    <Button {...$$props}>{label}</Button>
  {:else}
    <Button {...$$props} />
  {/if}
</div>
<div data-theme="dark">
  {#if label}
    <Button {...$$props}>{label}</Button>
  {:else}
    <Button {...$$props} />
  {/if}
</div>
<div data-theme="yellow">
  {#if label}
    <Button {...$$props}>{label}</Button>
  {:else}
    <Button {...$$props} />
  {/if}
</div>

<style>
  div {
    padding: 20px;
  }
</style>
