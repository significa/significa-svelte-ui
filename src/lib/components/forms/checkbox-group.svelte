<script lang="ts">
  import Checkbox from './checkbox.svelte';

  // eslint-disable-next-line no-undef
  type T = $$Generic<string>;

  export let element: undefined | HTMLInputElement = undefined;

  export let group: T[] = [];
  export let value: T;
  export let error = false;
</script>

<Checkbox
  bind:element
  {error}
  checked={group.includes(value)}
  on:change={() => {
    if (group.includes(value)) {
      group = group.filter((el) => el !== value);
    } else {
      group = [...group, value];
    }
  }}
  {...$$restProps}
/>
