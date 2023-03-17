<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import { checkbox } from './common';

  type T = $$Generic<string>;

  let className: undefined | string = undefined;
  export { className as class };

  export let group: undefined | T = undefined;
  export let value: undefined | T = undefined;
</script>

<input
  class={twMerge(checkbox(), 'rounded-full', className)}
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
