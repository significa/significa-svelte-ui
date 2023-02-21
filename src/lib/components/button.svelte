<script lang="ts">
  import clsx from 'clsx';
  import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';

  type Button = HTMLButtonAttributes & {
    as: 'button';
  };
  type Anchor = HTMLAnchorAttributes & {
    as: 'a';
  };
  type Props = (Button | Anchor) & {
    variant: 'primary' | 'secondary';
    size: 'small' | 'medium';
  };
  type $$Props = Props;

  export let as: $$Props['as'] = 'button';
  export let variant: $$Props['variant'] = 'primary';
  export let size: $$Props['size'] = 'medium';
</script>

<svelte:element this={as} {...$$restProps} class={clsx({ variant, size, class: $$props.class })}>
  <slot />
</svelte:element>
