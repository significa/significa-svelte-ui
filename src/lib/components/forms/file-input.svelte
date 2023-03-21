<script lang="ts">
  import type { VariantProps } from 'class-variance-authority';
  import { twMerge } from 'tailwind-merge';
  import { base, input } from './common';

  let className: undefined | string = undefined;
  export { className as class };
  export let files: undefined | FileList = undefined;
  export let multiple = false;

  export let size: VariantProps<typeof input>['size'] = 'md';
  export let error = false;
</script>

<input
  type="file"
  bind:files
  {multiple}
  class={twMerge(base({ error }), input({ size }), 'file-button', className)}
  {...$$restProps}
/>
