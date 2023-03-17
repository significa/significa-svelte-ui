<script lang="ts">
  import type { VariantProps } from 'class-variance-authority';
  import { twMerge } from 'tailwind-merge';
  import { input, select } from './common';

  let className: undefined | string = undefined;
  export { className as class };

  export let size: VariantProps<typeof input>['size'] = 'md';
  export let error = false;
</script>

<select class={twMerge(select({ size, error }), className)} {...$$restProps}>
  <slot />
</select>
