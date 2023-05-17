<script lang="ts">
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';

  /* you can provide an id to start with a specific accordion expanded */
  /* you'll also need to provide the same id to the accordion */
  export let expanded: string | null = null;

  /* we use a store to make the context reactive */
  const expandedWritable = writable<string | null>(expanded);
  /* sync the store with the prop */
  $: expandedWritable.set(expanded);

  setContext('accordion-group-expanded', expandedWritable);
</script>

<slot />
