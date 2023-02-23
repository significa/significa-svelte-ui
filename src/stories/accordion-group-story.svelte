<script lang="ts">
  import AccordionGroup from '../lib/components/accordion-group.svelte';
  import Accordion from '../lib/components/accordion.svelte';
</script>

<section>
  <AccordionGroup expanded="abc">
    {#each ['abc', 'def'] as id}
      <Accordion {id}>
        <div slot="header" let:expanded>
          <header><span>Accordion Header</span>{expanded ? '-' : '+'}</header>
        </div>
        <div class="content">
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
    {/each}
  </AccordionGroup>
</section>

<style>
  section {
    --accordion-border-radius: 0;
  }

  header {
    width: 400px;
    padding: 10px;
    border-bottom: 1px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  p {
    margin: 0;
  }

  .content {
    padding: 10px;
  }
</style>
