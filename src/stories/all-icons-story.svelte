<script lang="ts">
  import Icon, { icons, type IconOptions } from '../lib/components/icon.svelte';

  let all = Object.keys(icons) as IconOptions[];
</script>

<div class="flex flex-col gap-4">
  <div class="flex flex-wrap gap-4">
    {#each all as icon}
      <Icon {icon} />
    {/each}
  </div>

  <div class="flex flex-wrap gap-4 text-error">
    {#each all as icon}
      <Icon {icon} />
    {/each}
  </div>
</div>
