<script lang="ts" context="module">
  import type { HTMLAttributes } from 'svelte/elements';
  import arrowRight from './icons/arrow-right.svg?raw';
  import chapters from './icons/chapters.svg?raw';
  import check from './icons/check.svg?raw';
  import chevron from './icons/chevron.svg?raw';
  import close from './icons/close.svg?raw';
  import expand from './icons/expand.svg?raw';
  import handbook from './icons/handbook.svg?raw';
  import info from './icons/info.svg?raw';
  import link from './icons/link.svg?raw';

  export const icons = {
    'arrow-right': arrowRight,
    chapters,
    check,
    chevron,
    close,
    expand,
    handbook,
    info,
    link
  };

  export type IconOptions = keyof typeof icons;
</script>

<script lang="ts">
  interface $$Props extends HTMLAttributes<HTMLDivElement> {
    icon: IconOptions;
  }

  export let icon: $$Props['icon'];
</script>

<i data-icon={icon} aria-hidden="true" {...$$restProps}>
  {@html icons[icon]}
</i>
