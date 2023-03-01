<script lang="ts">
  import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';
  import Icon from './icon.svelte';
  import type { IconOptions } from './icon.svelte';
  import Spinner from './spinner.svelte';
  import { cva, type VariantProps } from 'class-variance-authority';
  import clsx from 'clsx';
  import { twMerge } from 'tailwind-merge';

  const button = cva(
    `
    group
    relative

    inline-flex
    items-center
    justify-center
    gap-1.5

    overflow-hidden
    whitespace-nowrap

    text-md
    font-medium
    leading-none

    outline-none

    transition-all

    hover:ring-4
    focus-visible:ring-4

    active:scale-[0.98]
    active:ring-2

    disabled:pointer-events-none
    disabled:opacity-60
    `,
    {
      variants: {
        variant: {
          primary: `
            bg-foreground
            text-background
          `,
          secondary: `
            text-foreground
            border-border-subtle
            hover:border-border-active
            focus-visible:border-border-active
            active:border-border-active
            border
          `,
          ghost: ''
        },
        size: {
          md: `
            h-11
            rounded-md
            px-5
          `,
          lg: `
            h-14
            rounded-lg
            px-6
          `
        },
        loading: {
          true: `[&>*:not(.btn-spinner)]:opacity-0`
        }
      }
    }
  );

  type Button = HTMLButtonAttributes & {
    as?: 'button';
  };
  type Anchor = HTMLAnchorAttributes & {
    as: 'a';
  };
  type Props = (Button | Anchor) &
    VariantProps<typeof button> & {
      icon?: IconOptions;
      arrow?: boolean;
    };
  type $$Props = Props;

  export let as: $$Props['as'] = 'button';
  export let variant: $$Props['variant'] = 'primary';
  export let size: $$Props['size'] = 'md';
  export let loading: $$Props['loading'] = false;
  export let icon: $$Props['icon'] = undefined;
  export let arrow: $$Props['arrow'] = false;
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
  class={twMerge(button({ variant, size, loading }), $$restProps.class)}
>
  {#if icon}
    <Icon
      class={clsx(
        icon &&
          arrow && [
            `
            transition-all
            duration-300
            ease-motion
            group-hover:-translate-x-10
            group-focus-visible:-translate-x-10
            `
          ]
      )}
      {icon}
    />
  {/if}
  {#if $$slots.default}
    <span
      class={clsx(
        icon &&
          arrow && [
            `
            transition-all
            duration-300
            ease-motion
            `,
            size === 'md' &&
              `
              group-hover:-translate-x-5
              group-focus-visible:-translate-x-5
              `,
            size === 'lg' &&
              `
              group-hover:-translate-x-6
              group-focus-visible:-translate-x-6
              `
          ]
      )}
    >
      <slot />
    </span>
  {/if}
  {#if arrow}
    <Icon
      class={clsx(
        icon &&
          arrow && [
            `
            absolute
            translate-x-10
            transition-all
            duration-300
            ease-motion
            group-hover:-translate-x-0
            group-focus-visible:-translate-x-0
            `,
            size === 'md' && `right-5`,
            size === 'lg' && `right-6`
          ]
      )}
      icon="arrow-right"
    />
  {/if}
  {#if loading}
    <div
      class="
        btn-spinner
        absolute
        left-1/2
        top-1/2
        -translate-x-1/2
        -translate-y-1/2
      "
    >
      <Spinner size={size === 'lg' ? 'sm' : 'xs'} />
    </div>
  {/if}
</svelte:element>
