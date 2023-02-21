<script lang="ts" context="module">
  import type { HTMLAttributes } from 'svelte/elements';
  import arrowRight from './icons/arrow-right.svg?raw';
  import chapters from './icons/chapters.svg?raw';
  import chevron from './icons/chevron.svg?raw';
  import close from './icons/close.svg?raw';
  import expand from './icons/expand.svg?raw';
  import link from './icons/link.svg?raw';

  export const icons = {
    'arrow-right': arrowRight,
    chapters,
    chevron,
    close,
    expand,
    link
  };

  export type IconOptions = keyof typeof icons;
</script>

<script lang="ts">
  interface $$Props extends HTMLAttributes<HTMLDivElement> {
    icon: IconOptions;
    class?: string;
  }

  export let icon: $$Props['icon'];
</script>

<i data-icon={icon} class={$$props.class} aria-hidden {...$$restProps}>
  {@html icons[icon]}
</i>
