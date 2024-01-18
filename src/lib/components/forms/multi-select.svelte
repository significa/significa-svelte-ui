<script lang="ts">
  import { createSelect } from '@melt-ui/svelte';
  import Checkbox from './checkbox.svelte';
  import Icon, { type IconOptions } from '../icon.svelte';
  import type { ListboxOption } from '@melt-ui/svelte/dist/builders/listbox/types';
  import { fly } from 'svelte/transition';

  const {
    elements: { trigger, menu, option },
    states: { selectedLabel, open, selected: meltSelected },
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
  $: selected = $meltSelected;
</script>

<div class="flex flex-col gap-1">
  <button
    class="flex h-12 min-w-[220px] items-center justify-between rounded-sm border border-background-offset bg-background-panel px-5 py-2 text-sm font-semibold hover:opacity-90"
    {...$trigger}
    use:trigger
    aria-label="Food"
  >
    {$selectedLabel || 'Select'}
    <Icon icon={icon || 'chevron-down'} />
  </button>
  {#if $open}
    <div
      class="z-10 mt-5 flex max-h-[300px] flex-col overflow-y-auto rounded-sm border border-background-offset bg-background-panel px-2 py-1"
      {...$menu}
      use:menu
      transition:fly={{ y: -12 }}
    >
      {#each options as value}
        <div
          class="relative flex cursor-pointer items-center justify-between rounded-lg px-3 py-2.5 text-sm font-semibold hover:cursor-pointer hover:rounded-xs hover:bg-background-offset hover:ring-1 hover:ring-border focus:z-10"
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
