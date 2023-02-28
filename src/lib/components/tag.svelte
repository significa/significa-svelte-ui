<script lang="ts">
  import clsx from 'clsx';
  import type { HTMLAnchorAttributes, HTMLAttributes } from 'svelte/elements';
  import Icon from './icon.svelte';

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

  let className: $$Props['class'] = undefined;
  export { className as class };

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
  class={clsx('tag', { link: !!href }, className)}
  {...$$restProps}
>
  {label}
  {#if href}
    <Icon icon="chevron" />
  {/if}
</svelte:element>

<style lang="postcss">
  .tag {
    all: unset;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    padding: 8px 12px;
    border-radius: var(--border-radius-full);

    font-size: var(--font-size-sm);
    line-height: var(--line-height-normal);
    font-weight: var(--font-weight-medium);
    letter-spacing: var(--letter-spacing-wide);
    white-space: nowrap;

    border: 1px solid var(--color-border);
    background-color: var(--color-background);

    &.link {
      cursor: pointer;

      transition: all var(--transition-appearance);

      & :global([data-icon]) {
        margin-left: 0.5rem;
        color: var(--color-foreground-secondary);
      }

      @media (hover: hover) {
        &:hover {
          background-color: var(--color-background-offset);
        }
      }

      &:active {
        color: var(--color-foreground-secondary);
      }

      &:focus-visible {
        border-color: var(--color-border-active);
        box-shadow: 0 0 0 var(--outline-width-active) var(--color-outline);
      }
    }
  }
</style>
