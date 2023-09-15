<script lang="ts">
  import Icon from './icon.svelte';
  import type { IconOptions } from './icon.svelte';
  import { twMerge } from 'tailwind-merge';
  import { cva, type VariantProps } from 'class-variance-authority';

  const circleButton = cva(
    '[& > *]:pointer-events-none flex items-center justify-center rounded-full bg-foreground text-background outline-none transition-all hover:opacity-80 focus-visible:ring-4 active:scale-95',
    {
      variants: {
        size: {
          xs: 'h-6 w-6',
          sm: 'h-8 w-8',
          md: 'h-10 w-10',
          lg: 'h-12 w-12'
        }
      }
    }
  );

  let className: undefined | string = undefined;
  export { className as class };
  export let as: undefined | 'a' | 'button' = 'button';
  export let icon: IconOptions;
  export let size: VariantProps<typeof circleButton>['size'] = 'md';
</script>

<svelte:element
  this={as}
  role="button"
  tabindex={0}
  on:click
  on:mouseenter
  on:mouseleave
  on:keydown
  on:keyup
  on:keypress
  on:focus
  on:blur
  class={twMerge(circleButton({ size }), className)}
  {...$$restProps}
>
  <Icon class="pointer-events-none" {icon} />
</svelte:element>
