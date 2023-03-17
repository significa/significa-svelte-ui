<script lang="ts">
  import type { VariantProps } from 'class-variance-authority';
  import { twMerge } from 'tailwind-merge';
  import { input } from './common';

  let className: undefined | string = undefined;
  export { className as class };

  export let size: VariantProps<typeof input>['size'] = 'md';
  export let error = false;
</script>

<input class={twMerge(input({ size, error }), className)} {...$$restProps} />
