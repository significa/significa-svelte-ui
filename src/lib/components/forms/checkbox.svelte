<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import { base } from './common';

  export let element: undefined | HTMLInputElement = undefined;

  let className: undefined | string = undefined;
  export { className as class };
  export let checked = false;
  export let indeterminate = false;
  export let error = false;
</script>

<input
  bind:this={element}
  class={twMerge(base({ error }), 'h-4 w-4 rounded-2xs checkbox-tick', className)}
  type="checkbox"
  bind:checked
  bind:indeterminate
  on:change
  on:mouseenter
  on:mouseleave
  on:click
  on:focus
  {...$$restProps}
/>
