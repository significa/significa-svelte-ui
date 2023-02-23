<script lang="ts">
  import Button from '$lib/components/button.svelte';
  import type { ComponentProps } from 'svelte';

  type $$Props = ComponentProps<Button>;
</script>

<div data-theme="light">
  <Button {...$$props}>Hello world</Button>
</div>
<div data-theme="dark">
  <Button {...$$props}>Hello world</Button>
</div>
<div data-theme="yellow">
  <Button {...$$props}>Hello world</Button>
</div>

<style>
  div {
    padding: 20px;
  }
</style>
