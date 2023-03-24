<script lang="ts">
  import Label from '$lib/components/forms/label.svelte';
  import type { ComponentProps } from 'svelte';

  type $$Props = ComponentProps<Label>;
</script>

<Label {...$$restProps}>Hello world</Label>
