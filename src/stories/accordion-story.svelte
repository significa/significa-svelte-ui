<script lang="ts">
  import Accordion from '../lib/components/accordion.svelte';
</script>

<Accordion>
  <div slot="header" let:expanded let:attributes let:onClick>
    <button {...attributes} on:click={onClick}>Accordion Header {expanded ? '-' : '+'}</button>
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
