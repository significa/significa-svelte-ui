<script lang="ts" context="module">
  const files = import.meta.glob('./icons/*.svg', { as: 'raw', eager: true });

  export const icons = Object.entries(files).reduce((acc, [path, file]) => {
    const name = path.replace('./icons/', '').replace('.svg', '');
    acc[name] = file;
    return acc;
  }, {} as Record<string, string>);

  export type IconOptions =
    | '3dots'
    | 'arrow-down'
    | 'arrow-external'
    | 'arrow-left'
    | 'arrow-right'
    | 'arrow-up'
    | 'attachment'
    | 'browser'
    | 'chapters'
    | 'check-circle'
    | 'check'
    | 'chevron-right'
    | 'chevron-down'
    | 'circle-arrow-down'
    | 'circle-arrow-right'
    | 'close-circle'
    | 'close'
    | 'comparison'
    | 'configuration'
    | 'copy'
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
    | 'theme'
    | 'trash';
</script>

<script lang="ts">
  let className: undefined | string = undefined;
  export { className as class };
  export let icon: IconOptions;
</script>

{#if icons[icon]}
  <i data-icon={icon} aria-hidden="true" class={className} {...$$restProps}>
    <!-- eslint-disable-next-line svelte/no-at-html-tags -->
    {@html icons[icon]}
  </i>
{/if}
