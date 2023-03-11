<script lang="ts">
  import Icon from './icon.svelte';
  import type { IconOptions } from './icon.svelte';
  import { twMerge } from 'tailwind-merge';

  let className: undefined | string = undefined;
  export { className as class };
  export let as: undefined | 'a' | 'button' = 'button';
  export let icon: IconOptions;
</script>

<svelte:element
  this={as}
  on:click
  on:mouseenter
  on:mouseleave
  on:keydown
  on:keyup
  on:keypress
  class={twMerge(
    '[& > *]:pointer-events-none flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background outline-none transition-all hover:opacity-80 focus-visible:ring-4 active:scale-95',
    className
  )}
  {...$$restProps}
>
  <Icon class="pointer-events-none" {icon} />
</svelte:element>
