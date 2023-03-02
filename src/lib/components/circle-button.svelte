<script lang="ts">
  import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';
  import Icon from './icon.svelte';
  import type { IconOptions } from './icon.svelte';
  import { twMerge } from 'tailwind-merge';

  type Button = HTMLButtonAttributes & {
    as?: 'button';
  };
  type Anchor = HTMLAnchorAttributes & {
    as: 'a';
  };
  type Props = (Button | Anchor) & {
    icon: IconOptions;
  };
  type $$Props = Props;

  export let as: $$Props['as'] = 'button';
  export let icon: $$Props['icon'];
</script>

<svelte:element
  this={as}
  on:click
  on:mouseenter
  on:mouseleave
  on:keydown
  on:keyup
  on:keypress
  {...$$restProps}
  class={twMerge(
    'w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center [& > *]:pointer-events-none outline-none hover:opacity-80 focus-visible:ring-4 active:scale-95 transition-all',
    $$restProps.class
  )}
>
  <Icon class="pointer-events-none" {icon} />
</svelte:element>
