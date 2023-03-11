<script lang="ts">
  import type { ComponentProps } from 'svelte';
  import TextButton from '../lib/components/text-button.svelte';

  type $$Props = ComponentProps<TextButton>;
</script>

<TextButton {...$$restProps}>Hello world</TextButton>
