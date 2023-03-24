<script lang="ts">
  import FloatingSelect from '$lib/components/forms/floating-select.svelte';
  import type { ComponentProps } from 'svelte';

  type T = $$Generic<string>;

  type $$Props = ComponentProps<FloatingSelect<T>> & {
    disabled?: boolean;
  };

  export let label: $$Props['label'];
</script>

<FloatingSelect {label} {...$$restProps}>
  <option value="" disabled>Select your option</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</FloatingSelect>
