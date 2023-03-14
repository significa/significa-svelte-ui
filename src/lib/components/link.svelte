<script lang="ts">
  import { twMerge } from 'tailwind-merge';

  let className: undefined | string = undefined;
  export { className as class };
  export let href: undefined | string = undefined;
  export let active: undefined | boolean = false;
</script>

<a
  class={twMerge(
    `
    bg-gradient-to-r
    from-[var(--link-underline-color)]
    to-[var(--link-underline-color)]
    bg-[size:0_var(--link-underline-width)]
    bg-[100%_100%]
    bg-no-repeat

    outline-none

    transition-[background-size]
    delay-100
    duration-300
    ease-smooth

    hover:bg-[size:100%_var(--link-underline-width)]
    hover:bg-[0_100%]

    focus-visible:opacity-60
    `,
    active
      ? 'pointer-events-none bg-[size:100%_var(--link-underline-width)] bg-[0_100%] text-foreground-secondary'
      : '',
    className
  )}
  {href}
  {...$$restProps}
>
  <slot />
</a>

<style lang="postcss">
  a {
    --link-underline-color: var(--underline-color, hsl(var(--color-foreground-tertiary)));
    --link-underline-width: var(--underline-width, 0.2ch);
  }
</style>
