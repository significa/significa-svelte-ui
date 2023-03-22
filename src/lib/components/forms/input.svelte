<script lang="ts">
  import type { VariantProps } from 'class-variance-authority';
  import { twMerge } from 'tailwind-merge';
  import { base, input } from './common';

  export let element: undefined | HTMLInputElement = undefined;

  let className: undefined | string = undefined;
  export { className as class };

  export let size: VariantProps<typeof input>['size'] = 'md';
  export let error = false;
  export let value = '';
</script>

<input
  bind:this={element}
  bind:value
  on:change
  on:mouseenter
  on:mouseleave
  on:click
  on:focus
  class={twMerge(base({ error }), input({ size }), className)}
  {...$$restProps}
/>
