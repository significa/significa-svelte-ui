<script lang="ts">
  import type { HTMLAnchorAttributes, HTMLAttributes } from 'svelte/elements';
  import Icon from './icon.svelte';

  import { cva } from 'class-variance-authority';
  import { twMerge } from 'tailwind-merge';

  const tag = cva(
    `
    border
    border-border
    rounded-full

    inline-flex
    items-center
    justify-center

    outline-none
    whitespace-nowrap

    py-2
    px-3
    
    font-sans
    text-sm
    font-medium
    leading-tight
    `,
    {
      variants: {
        link: {
          true: `
            cursor-pointer

            transition-all

            hover:bg-background-offset

            focus-visible:border-border-active
            focus-visible:ring-2
            
            active:text-foreground-secondary
          `
        }
      }
    }
  );

  type Span = HTMLAttributes<HTMLSpanElement> & {
    href?: undefined;
  };
  type Anchor = HTMLAnchorAttributes & {
    href: string;
  };
  type Props = (Span | Anchor) & {
    label: string;
  };
  type $$Props = Props;

  export let href: $$Props['href'] = undefined;
  export let label: $$Props['label'];
</script>

<svelte:element
  this={href ? 'a' : 'span'}
  on:click
  on:mouseenter
  on:mouseleave
  on:keydown
  on:keyup
  on:keypress
  {href}
  {...$$restProps}
  class={twMerge(tag({ link: !!href }), $$restProps.class)}
>
  {label}
  {#if href}
    <Icon class="ml-2 text-foreground-secondary" icon="chevron" />
  {/if}
</svelte:element>
