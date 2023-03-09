<script lang="ts" context="module">
  import type { HTMLAttributes } from 'svelte/elements';

  const files = import.meta.glob('./icons/*.svg', { as: 'raw', eager: true });

  export const icons = Object.entries(files).reduce((acc, [path, file]) => {
    const name = path.replace('./icons/', '').replace('.svg', '');
    acc[name] = file;
    return acc;
  }, {} as Record<string, string>);

  export type IconOptions =
    | '3dots'
    | 'arrow-down'
    | 'arrow-left'
    | 'arrow-right'
    | 'arrow-up'
    | 'attachment'
    | 'browser'
    | 'chapters'
    | 'check-circle'
    | 'check'
    | 'chevron-right'
    | 'chevron'
    | 'circle-arrow-down'
    | 'circle-arrow-right'
    | 'close-circle'
    | 'close'
    | 'comparison'
    | 'document'
    | 'egg'
    | 'expand'
    | 'hamburger'
    | 'handbook'
    | 'home'
    | 'info'
    | 'link'
    | 'moon'
    | 'pause'
    | 'pdf'
    | 'play'
    | 'sun'
    | 'theme';
</script>

<script lang="ts">
  interface $$Props extends HTMLAttributes<HTMLDivElement> {
    icon: IconOptions;
  }

  export let icon: $$Props['icon'];
</script>

{#if icons[icon]}
  <i data-icon={icon} aria-hidden="true" {...$$restProps}>
    {@html icons[icon]}
  </i>
{/if}
