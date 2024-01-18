<script lang="ts">
  import { createSelect } from '@melt-ui/svelte';
  import Checkbox from './checkbox.svelte';
  import Icon, { type IconOptions } from '../icon.svelte';
  import type { ListboxOption } from '@melt-ui/svelte/dist/builders/listbox/types';
  import { fly } from 'svelte/transition';

  const {
    elements: { trigger, menu, option },
    states: { open, selected: meltSelected },
    helpers: { isSelected }
  } = createSelect<string, true>({
    forceVisible: true,
    positioning: {
      placement: 'bottom',
      fitViewport: true,
      sameWidth: true
    },
    multiple: true
  });

  export let icon: undefined | IconOptions = undefined;
  export let options: string[] = [];
  export let selected: ListboxOption<string>[] | undefined = [];
  export let selectedLabel: undefined | string = '';
  $: selected = $meltSelected;
</script>

<div class="flex flex-col gap-1">
  <button
    class="flex h-12 min-w-[220px] items-center justify-between rounded-sm border border-background-offset bg-background-panel px-5 py-2 text-sm font-semibold hover:opacity-90 hover:transition-all focus:border-border-active focus:outline-none focus:ring-4 focus:ring-outline focus:transition-all"
    {...$trigger}
    use:trigger
  >
    {selectedLabel || 'Select'}
    <Icon icon={icon || 'chevron-down'} />
  </button>
  {#if $open}
    <div
      class="z-10 mt-1 flex max-h-[300px] flex-col overflow-y-auto rounded-sm border border-background-offset bg-background-panel p-2"
      {...$menu}
      use:menu
      transition:fly={{ y: -12, duration: 150 }}
    >
      {#each options as value}
        <div
          class="relative flex cursor-pointer items-center justify-between rounded-xs px-3 py-2.5 text-sm font-semibold hover:cursor-pointer hover:bg-background-offset hover:ring-1 hover:ring-border hover:transition-all focus:z-10 data-[highlighted]:bg-background-offset data-[highlighted]:ring-1 data-[highlighted]:ring-border data-[highlighted]:transition-all"
          {...$option({ value, label: value })}
          use:option
        >
          {value}
          <Checkbox class="cursor-pointer" checked={$isSelected(value)} />
        </div>
      {/each}
    </div>
  {/if}
</div>
