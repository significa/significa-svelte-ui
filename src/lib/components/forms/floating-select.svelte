<script lang="ts">
  import { getRandomId } from '$lib/utils/get-random-id';

  import { twMerge } from 'tailwind-merge';
  import { base, input } from './common';
  import FloatingLabel from './floating-label.svelte';

  type T = $$Generic<string>;

  export let element: undefined | HTMLSelectElement = undefined;

  let className: undefined | string = undefined;
  export { className as class };

  export let label: string;
  export let id: string = getRandomId();
  export let error = false;
  export let value: undefined | T = undefined;
</script>

<div class={twMerge('relative', className)}>
  <select
    bind:this={element}
    bind:value
    on:change
    on:mouseenter
    on:mouseleave
    on:click
    on:focus
    on:blur
    {id}
    class={twMerge(
      base({ error }),
      input({ size: 'lg' }),
      'peer select-chevron',
      value ? 'pb-2 pt-6' : 'text-transparent'
    )}
    {...$$restProps}
  >
    <slot />
  </select>
  <FloatingLabel for={id} resting={!value} {error}>{label}</FloatingLabel>
</div>
