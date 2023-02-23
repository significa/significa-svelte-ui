<script lang="ts">
  import Button from '$lib/components/button.svelte';
  import '../lib/styles/index.css';

  let loading = false;
</script>

<h1>Significa UI</h1>
<div data-theme="light">
  <Button variant="primary" size="md" icon="handbook" arrow {loading}>Hello world</Button>
  <Button variant="secondary" size="md" icon="handbook" arrow {loading}>Hello world</Button>
  <Button variant="primary" size="md" arrow {loading}>Hello world</Button>
  <Button variant="secondary" size="md" arrow {loading}>Hello world</Button>
  <Button variant="primary" size="md" icon="handbook" {loading}>Hello world</Button>
  <Button variant="secondary" size="md" icon="handbook" {loading}>Hello world</Button>
</div>
<div data-theme="dark">
  <Button variant="primary" size="md" icon="handbook" arrow {loading}>Hello world</Button>
  <Button variant="secondary" size="md" icon="handbook" arrow {loading}>Hello world</Button>
  <Button variant="primary" size="md" arrow {loading}>Hello world</Button>
  <Button variant="secondary" size="md" arrow {loading}>Hello world</Button>
  <Button variant="primary" size="md" icon="handbook" {loading}>Hello world</Button>
  <Button variant="secondary" size="md" icon="handbook" {loading}>Hello world</Button>
</div>
<div data-theme="yellow">
  <Button variant="primary" size="md" icon="handbook" arrow {loading}>Hello world</Button>
  <Button variant="secondary" size="md" icon="handbook" arrow {loading}>Hello world</Button>
  <Button variant="primary" size="md" arrow {loading}>Hello world</Button>
  <Button variant="secondary" size="md" arrow {loading}>Hello world</Button>
  <Button variant="primary" size="md" icon="handbook" {loading}>Hello world</Button>
  <Button variant="secondary" size="md" icon="handbook" {loading}>Hello world</Button>
</div>

<style>
  div {
    padding: 20px;
    display: flex;
    gap: 10px;
  }

  :global(body) {
    font-family: var(--font-family-sans);
  }
</style>
