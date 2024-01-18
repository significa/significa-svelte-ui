<script lang="ts">
  import MultiSelect from '$lib/components/forms/multi-select.svelte';
  import type { ListboxOption } from '@melt-ui/svelte/dist/builders/listbox/types';
  const options = ['Caramel', 'Chocolate', 'Strawberry', 'Cookies & Cream'];

  let selected: ListboxOption<string>[] | undefined;
</script>

<MultiSelect {options} bind:selected selectedLabel="Select a label" />
