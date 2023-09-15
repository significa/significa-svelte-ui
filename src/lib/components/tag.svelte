<script lang="ts">
  import Icon from './icon.svelte';

  import { cva } from 'class-variance-authority';
  import { twMerge } from 'tailwind-merge';

  const tag = cva(
    `
    border
    border-border
    rounded-full

    inline-flex
    items-center
    justify-center

    outline-none
    whitespace-nowrap

    py-2
    px-3
    
    font-sans
    text-sm
    font-medium
    leading-none
    `,
    {
      variants: {
        active: {
          true: `
          bg-foreground-tertiary/20
          `
        },
        interactable: {
          true: `
            cursor-pointer

            transition-all

            hover:bg-foreground-tertiary/10

            focus-visible:border-border-active
            focus-visible:ring-2
            
            active:text-foreground-secondary
          `
        }
      }
    }
  );

  let className: undefined | string = undefined;
  export { className as class };
  export let href: undefined | string = undefined;
  export let active: undefined | boolean = undefined;
  export let label: string;
</script>

<svelte:element
  this={href ? 'a' : typeof active === 'boolean' ? 'button' : 'span'}
  role="button"
  tabindex={0}
  on:click
  on:mouseenter
  on:mouseleave
  on:keydown
  on:keyup
  on:keypress
  {href}
  class={twMerge(tag({ interactable: !!href || typeof active === 'boolean', active }), className)}
  {...$$restProps}
>
  <span>
    {label}
  </span>
  {#if href}
    <Icon class="ml-2 text-foreground-tertiary" icon="chevron-right" />
  {/if}
</svelte:element>
