<script lang="ts">
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
            border-border
            hover:border-border-active
            focus-visible:border-border-active
            active:border-border-active
            border
          `,
          ghost: ''
        },
        size: {
          sm: `
            h-9
            rounded-sm
            px-3
          `,
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

  let className: undefined | string = undefined;
  export { className as class };
  export let disabled: undefined | boolean = undefined;
  export let as: undefined | 'button' | 'a' = 'button';
  export let variant: undefined | VariantProps<typeof button>['variant'] = 'primary';
  export let size: undefined | VariantProps<typeof button>['size'] = 'md';
  export let loading: undefined | VariantProps<typeof button>['loading'] = false;
  export let icon: undefined | IconOptions = undefined;
  export let arrow: undefined | boolean = false;
</script>

<svelte:element
  this={as}
  on:click
  on:mouseenter
  on:mouseleave
  on:keydown
  on:keyup
  on:keypress
  {disabled}
  class={twMerge(button({ variant, size, loading }), className)}
  {...$$restProps}
>
  {#if icon}
    <Icon
      class={clsx(
        icon &&
          arrow && [
            'transition-all',
            'duration-300',
            'ease-motion',
            'group-hover:-translate-x-10',
            'group-focus-visible:-translate-x-10'
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
            'transition-all',
            'duration-300',
            'ease-motion',
            size === 'md' && 'group-hover:-translate-x-5',
            'group-focus-visible:-translate-x-5',
            size === 'lg' && 'group-hover:-translate-x-6',
            'group-focus-visible:-translate-x-6'
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
            'absolute',
            'translate-x-10',
            'transition-all',
            'duration-300',
            'ease-motion',
            'group-hover:-translate-x-0',
            'group-focus-visible:-translate-x-0',
            size === 'md' && 'right-5',
            size === 'lg' && 'right-6'
          ]
      )}
      icon="arrow-right"
    />
  {/if}
  {#if loading}
    <div
      class={clsx(
        'btn-spinner',
        'absolute',
        'left-1/2',
        'top-1/2',
        '-translate-x-1/2',
        '-translate-y-1/2'
      )}
    >
      <Spinner size={size === 'lg' ? 'sm' : 'xs'} />
    </div>
  {/if}
</svelte:element>
