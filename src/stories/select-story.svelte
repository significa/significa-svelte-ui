<script lang="ts">
  import Select from '$lib/components/forms/select.svelte';
  import type { ComponentProps } from 'svelte';

  type T = $$Generic<string>;

  type $$Props = ComponentProps<Select<T>> & {
    disabled?: boolean;
  };
</script>

<Select value="" {...$$restProps}>
  <option value="" disabled>Select your option</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</Select>
