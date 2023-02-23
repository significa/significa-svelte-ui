<script lang="ts">
  import type { HTMLAnchorAttributes } from 'svelte/elements';

  type $$Props = HTMLAnchorAttributes;
</script>

<a {...$$restProps} href={$$props.href} class={$$props.class}>
  <slot />
</a>

<style lang="postcss">
  /* 
    available vars:
    --link-color
    --link-underline-color
    --link-underline-width
   */

  a {
    text-decoration: none;
    outline: none;

    color: var(--link-color, inherit);

    background-repeat: no-repeat;
    background-position: 100% 100%;
    background-size: 0 var(--link-underline-width, 2px);
    background-image: linear-gradient(
      var(--link-underline-color, var(--color-foreground-tertiary)),
      var(--link-underline-color, var(--color-foreground-tertiary))
    );

    transition: box-shadow var(--transition-appearance), background-size var(--transition-smooth);

    border-radius: 1px;
    &:focus-visible {
      box-shadow: 0 0 0 var(--outline-width) var(--color-outline);
    }

    @media (hover: hover) {
      &:hover {
        background-position: 0 100%;
        background-size: 100% var(--link-underline-width, 2px);
      }
    }
  }
</style>
