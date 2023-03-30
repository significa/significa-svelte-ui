<script lang="ts">
  import type { VariantProps } from 'class-variance-authority';
  import { twMerge } from 'tailwind-merge';
  import { base, input } from './common';

  export let element: undefined | HTMLInputElement = undefined;

  let className: undefined | string = undefined;
  export { className as class };
  export let files: undefined | FileList = undefined;
  export let multiple = false;

  export let size: VariantProps<typeof input>['size'] = 'md';
  export let error = false;
</script>

<input
  bind:this={element}
  type="file"
  bind:files
  {multiple}
  on:change
  on:mouseenter
  on:mouseleave
  on:click
  on:focus
  on:blur
  class={twMerge(base({ error }), input({ size }), 'file-button', className)}
  {...$$restProps}
/>
