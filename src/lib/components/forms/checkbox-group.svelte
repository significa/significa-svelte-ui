<script lang="ts">
  import Checkbox from './checkbox.svelte';

  type T = $$Generic<string>;

  export let group: T[] = [];
  export let value: T;
  export let error = false;
</script>

<Checkbox
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
>
  <slot />
</Checkbox>
