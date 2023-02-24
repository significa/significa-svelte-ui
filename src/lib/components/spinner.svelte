<script lang="ts">
  import clsx from 'clsx';
  import type { HTMLAttributes } from 'svelte/elements';

  interface $$Props extends HTMLAttributes<HTMLSpanElement> {
    size?: 'xs' | 'sm';
  }

  let className: $$Props['class'] = undefined;
  export { className as class };

  export let size: $$Props['size'] = 'sm';
</script>

<div
  aria-label="loading"
  role="progressbar"
  class={clsx({ xs: size === 'xs', sm: size === 'sm' }, className)}
/>

<style lang="postcss">
  /* 
    available vars:
    --spinner-size
    --spinner-width
   */

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  div {
    height: var(--spinner-size);
    width: var(--spinner-size);
    position: relative;

    &:before,
    &:after {
      animation: spin 1s linear infinite;
      content: '';
      display: block;
      box-sizing: border-box;
      position: absolute;
      top: 0;
      left: 0;
      height: var(--spinner-size);
      width: var(--spinner-size);
      border-width: var(--spinner-width);
      border-style: solid;
      border-radius: 100%;
    }

    &:before {
      border-color: inherit;
      opacity: 0.2;
    }

    &:after {
      border-color: transparent;
      border-top-color: inherit;
      opacity: 0.8;
    }

    &.xs {
      --spinner-size: 1rem;
      --spinner-width: 2px;
    }

    &.sm {
      --spinner-size: 1.2rem;
      --spinner-width: 3px;
    }
  }
</style>
