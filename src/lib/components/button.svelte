<script lang="ts">
  import clsx from 'clsx';
  import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';
  import Icon from './icon.svelte';
  import type { IconOptions } from './icon.svelte';
  import Spinner from './spinner.svelte';

  type Button = HTMLButtonAttributes & {
    as?: 'button';
  };
  type Anchor = HTMLAnchorAttributes & {
    as: 'a';
  };
  type Props = (Button | Anchor) & {
    variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'success';
    size?: 'md' | 'lg';
    loading?: boolean;
    icon?: IconOptions;
    arrow?: boolean;
  };
  type $$Props = Props;

  let className: $$Props['class'] = undefined;
  export { className as class };
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
  class={clsx('button', variant, size, { 'animated-icons': !!icon && !!arrow }, className)}
  {...$$restProps}
>
  <div class={clsx('inner', { loading })}>
    {#if icon}
      <Icon class="icon" {icon} />
    {/if}
    {#if $$slots.default}
      <span class="content">
        <slot />
      </span>
    {/if}
    {#if arrow}
      <Icon class="arrow" icon="arrow-right" />
    {/if}
  </div>
  {#if loading}
    <div class="spinner">
      <Spinner size={size === 'md' ? 'sm' : 'xs'} />
    </div>
  {/if}
</svelte:element>

<style lang="postcss">
  /**
    available vars:
    --button-background-color
    --button-background-color-hover
    --button-background-color-active
    --button-text-color
    --button-text-color-hover
    --button-text-color-active
    --button-border-color
    --button-border-color-hover
    --button-border-color-active
    --button-outline-color
    --button-border-radius
    --button-height
    --button-padding-inline

  */
  .button {
    all: unset;
    display: inline-flex;
    font-family: var(--font-family-sans);

    position: relative;

    cursor: pointer;

    font-size: var(--font-size-md);
    line-height: var(--line-height-none);
    font-weight: var(--font-weight-medium);
    white-space: nowrap;

    background-color: var(--button-background-color);
    color: var(--button-text-color);

    border: 1px solid var(--button-border-color, var(--button-background-color));

    border-radius: var(--button-border-radius);

    transition: all var(--transition-appearance);

    &:hover,
    &:focus-visible {
      box-shadow: 0 0 0 var(--outline-width) var(--button-outline-color, var(--color-outline));
      background-color: var(--button-background-color-hover, var(--button-background-color));
      color: var(--button-text-color-hover, var(--button-text-color));
      border-color: var(
        --button-border-color-hover,
        var(--button-border-color, var(--button-background-color))
      );
    }

    &:active {
      transform: scale(0.98);

      box-shadow: 0 0 0 var(--outline-width-active)
        var(--button-outline-color, var(--color-outline));
      background-color: var(
        --button-background-color-active,
        var(--button-background-color-hover, var(--button-background-color))
      );
      color: var(
        --button-text-color-active,
        var(--button-text-color-hover, var(--button-text-color))
      );
      border-color: var(
        --button-border-color-active,
        var(--button-border-color-hover, var(--button-border-color, var(--button-background-color)))
      );
    }

    &:disabled {
      opacity: 0.6;
      pointer-events: none;
    }

    &.primary {
      --button-background-color: var(--color-foreground);
      --button-text-color: var(--color-background);
    }

    &.secondary {
      --button-background-color: transparent;
      --button-text-color: var(--color-foreground);
      --button-border-color: var(--color-border-subtle);
      --button-border-color-hover: var(--color-border-active);
    }

    &.ghost {
      --button-background-color: transparent;
      --button-text-color: var(--color-foreground);
    }

    &.danger {
      --button-background-color: var(--color-error);
      --button-text-color: var(--color-background);
      --button-outline-color: hsl(var(--color-error-hsl) / 0.3);
    }

    &.success {
      --button-background-color: var(--color-success);
      --button-text-color: var(--color-background);
      --button-outline-color: hsl(var(--color-success-hsl) / 0.3);
    }

    &.md {
      --button-padding-inline: 20px;
      --button-height: 44px;
      --button-border-radius: var(--border-radius-md);
    }

    &.lg {
      --button-padding-inline: 24px;
      --button-height: 56px;
      --button-border-radius: var(--border-radius-lg);
    }

    &.animated-icons {
      overflow: hidden;

      & :global(.arrow) {
        position: absolute;
        right: var(--button-padding-inline);
        transform: translateX(calc(var(--button-padding-inline) + 16px));
      }

      & :global(.icon),
      & :global(.arrow) {
        transition: transform var(--transition-motion);
      }

      & .content {
        transition: transform var(--transition-motion);
      }

      &:hover,
      &:focus-visible {
        & :global(.arrow) {
          transform: translateX(0);
        }

        & :global(.icon) {
          transform: translateX(calc(var(--button-padding-inline) * -1 - 16px));
        }

        & .content {
          transform: translateX(-22px); /* 16px icon + 6px gap */
        }
      }
    }
  }

  .inner {
    width: 100%;
    box-sizing: border-box;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;

    height: var(--button-height);
    padding-inline: var(--button-padding-inline);

    & :global(.icon),
    & :global(.arrow) {
      width: 16px;
      height: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &.loading {
      opacity: 0;
    }
  }

  .spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
