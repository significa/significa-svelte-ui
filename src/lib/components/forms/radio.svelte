<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import { base } from './common';

  type T = $$Generic<string>;

  export let element: undefined | HTMLInputElement = undefined;

  let className: undefined | string = undefined;
  export { className as class };

  export let group: undefined | T = undefined;
  export let value: undefined | T = undefined;
  export let error = false;
</script>

<input
  bind:this={element}
  class={twMerge(base({ error }), 'h-4 w-4 rounded-full checkbox-tick', className)}
  type="radio"
  bind:group
  {value}
  on:change
  on:mouseenter
  on:mouseleave
  on:click
  on:focus
  {...$$restProps}
/>
