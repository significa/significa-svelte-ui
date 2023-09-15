<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import type { IconOptions } from './icon.svelte';
  import Icon from './icon.svelte';

  let className: undefined | string = undefined;
  export { className as class };
  export let as: undefined | 'a' | 'button' = 'button';
  export let iconLeft: undefined | IconOptions = undefined;
  export let iconRight: undefined | IconOptions = undefined;
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
  class={twMerge(
    'inline-flex items-center gap-2 rounded-xs outline-none transition-opacity hover:opacity-80 focus-visible:ring-4 active:opacity-70',
    className
  )}
  {...$$restProps}
>
  {#if iconLeft}<Icon icon={iconLeft} />{/if}
  <span><slot /></span>
  {#if iconRight}<Icon icon={iconRight} />{/if}
</svelte:element>
