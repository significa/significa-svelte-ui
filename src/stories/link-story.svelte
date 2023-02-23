<script lang="ts">
  import type { ComponentProps } from 'svelte';
  import Link from '../lib/components/link.svelte';

  type $$Props = ComponentProps<Link>;
</script>

<div>
  <Link href="#" {...$$props}>Hello world</Link>
</div>

<style>
  div :global(a) {
    font-size: var(--font-size-lg);
  }
</style>
