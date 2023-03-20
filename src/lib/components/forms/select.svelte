<script lang="ts">
  import type { VariantProps } from 'class-variance-authority';
  import { twMerge } from 'tailwind-merge';
  import { base, input } from './common';

  type T = $$Generic<string>;

  let className: undefined | string = undefined;
  export { className as class };

  export let size: VariantProps<typeof input>['size'] = 'md';
  export let error = false;
  export let value: undefined | T = undefined;
</script>

<select
  bind:value
  on:change
  on:mouseenter
  on:mouseleave
  on:click
  on:focus
  class={twMerge(base({ error }), input({ size }), 'select-chevron', className)}
  {...$$restProps}
>
  <slot />
</select>
