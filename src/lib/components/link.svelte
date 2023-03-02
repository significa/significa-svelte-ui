<script lang="ts">
  import type { HTMLAnchorAttributes } from 'svelte/elements';
  import { twMerge } from 'tailwind-merge';

  type $$Props = HTMLAnchorAttributes;
</script>

<a
  {...$$restProps}
  class={twMerge(
    `
    rounded-3xs

    bg-gradient-to-r
    from-[var(--link-underline-color)]
    to-[var(--link-underline-color)]
    bg-[size:0_var(--link-underline-width)]
    bg-[100%_100%]
    bg-no-repeat

    outline-none

    transition-[background-size]
    duration-300
    ease-smooth

    hover:bg-[size:100%_var(--link-underline-width)]
    hover:bg-[0_100%]

    focus-visible:ring-2
    `,
    $$restProps.class
  )}
  href={$$props.href}
>
  <slot />
</a>

<style lang="postcss">
  a {
    --link-underline-color: var(--underline-color, hsl(var(--color-foreground-tertiary)));
    --link-underline-width: var(--underline-width, 2px);
  }
</style>
