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
    | 'arrow-right'
    | 'chapters'
    | 'check'
    | 'chevron'
    | 'close'
    | 'comparison'
    | 'expand'
    | 'handbook'
    | 'info'
    | 'link';
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
