<script lang="ts">
  import { cva, type VariantProps } from 'class-variance-authority';
  import type { HTMLAttributes } from 'svelte/elements';
  import { twMerge } from 'tailwind-merge';

  const spinner = cva(
    `
    relative

    animate-spin

    before:absolute
    before:left-0
    before:top-0
    before:block
    before:h-full
    before:w-full
    before:rounded-full
    before:border-inherit
    before:opacity-20
    
    after:left-0
    after:top-0
    after:block
    after:h-full
    after:w-full
    after:rounded-full
    after:border-transparent
    after:border-t-inherit
    `,
    {
      variants: {
        size: {
          xs: `
            w-4
            h-4
            before:border-[3px]
            after:border-[3px]
          `,
          sm: `
            w-5
            h-5
            before:border-4
            after:border-4
          `,
          md: `
            w-6
            h-6
            before:border-4
            after:border-4
          `,
          lg: `
            w-8
            h-8
            before:border-4
            after:border-4
          `
        }
      }
    }
  );

  interface $$Props extends HTMLAttributes<HTMLSpanElement>, VariantProps<typeof spinner> {}

  export let size: $$Props['size'] = 'sm';
</script>

<div
  aria-label="loading"
  role="progressbar"
  {...$$restProps}
  class={twMerge(spinner({ size }), $$restProps.class)}
/>
