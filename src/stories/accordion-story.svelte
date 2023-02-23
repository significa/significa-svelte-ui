<script lang="ts">
  import Accordion from '../lib/components/accordion.svelte';
</script>

<Accordion>
  <div slot="header" let:expanded>
    <p>Accordion Header {expanded ? '-' : '+'}</p>
  </div>
  <div>
    <p>Accordion Content</p>
    <p>Accordion Content</p>
    <p>Accordion Content</p>
    <p>Accordion Content</p>
    <p>Accordion Content</p>
    <p>Accordion Content</p>
    <p>Accordion Content</p>
    <p>Accordion Content</p>
    <p>Accordion Content</p>
    <p>Accordion Content</p>
  </div>
</Accordion>

<style>
  p {
    margin: 0;
  }
</style>
