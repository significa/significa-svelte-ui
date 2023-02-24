<script lang="ts">
  import clsx from 'clsx';
  import type { HTMLInputAttributes } from 'svelte/elements';

  interface $$Props extends HTMLInputAttributes {
    label: string;
    error?: boolean;
  }

  export let label: $$Props['label'];
  export let error: $$Props['error'] = false;
</script>

<div class={clsx({ error }, $$props.class)}>
  <input id={$$props.id} placeholder={label} {...$$restProps} />
  <label for={$$props.id}>
    {label}
  </label>
</div>

<style lang="postcss">
  div {
    --input-padding-inline: 20px;
    --input-background-color: var(--color-background-offset);
    --input-border-radius: var(--border-radius-md);
    --input-border-color: var(--color-border-subtle);
    --input-border-color-active: var(--color-border-active);
    --input-outline-color: var(--color-outline);
    --input-label-color: var(--color-foreground-secondary);

    position: relative;
    width: 100%;
    height: 56px;

    font-size: var(--font-size-md);
    font-weight: var(--font-weight-medium);
    letter-spacing: var(--letter-spacing-wide);
    line-height: var(--line-height-none);

    &.error {
      --input-border-color: hsl(var(--color-error-hsl) / 0.5);
      --input-border-color-active: hsl(var(--color-error-hsl) / 0.5);
      --input-outline-color: hsl(var(--color-error-hsl) / 0.3);
      --input-label-color: var(--color-error);
    }
  }

  input {
    all: unset;

    box-sizing: border-box;
    width: 100%;
    height: 100%;

    background-color: var(--color-background-offset);
    border-radius: var(--border-radius-lg);
    padding-inline: var(--input-padding-inline);
    border: 1px solid var(--input-border-color);

    &::placeholder {
      color: transparent;
    }

    &:not(:placeholder-shown) {
      color: var(--color-foreground);

      padding-top: 12px;

      & ~ label {
        top: 12px;
        transform: translateY(0);
        font-size: var(--font-size-xs);
      }
    }

    transition: all var(--transition-appearance);

    @media (hover: hover) {
      &:hover:not(:disabled):not(:focus) {
        border-color: var(--input-border-color-active);
        box-shadow: 0 0 0 var(--outline-width) var(--input-outline-color);
      }
    }

    &:focus {
      border-color: var(--input-border-color-active);
      box-shadow: 0 0 0 var(--outline-width-active) var(--input-outline-color);
    }

    &:disabled {
      &,
      & ~ label {
        opacity: 0.6;
      }
    }
  }

  label {
    color: var(--input-label-color);

    position: absolute;
    left: var(--input-padding-inline);
    top: 50%;
    transform: translateY(-50%);

    transition: all var(--transition-motion);

    pointer-events: none;
  }
</style>
