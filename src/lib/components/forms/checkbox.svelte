<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import { checkbox } from './common';

  let className: undefined | string = undefined;
  export { className as class };
  export let checked = false;
  export let indeterminate = false;
</script>

<input
  class={twMerge(checkbox(), className)}
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
