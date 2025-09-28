<script lang="ts">
  import { Accordion, AccordionItem } from "$lib";
</script>

<Accordion accordionStyle="card">
  <AccordionItem>
    {#snippet header()}
      Header 2-1
    {/snippet}
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
  </AccordionItem>
  <AccordionItem>
    {#snippet header()}
      Header 2-2
    {/snippet}
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
  </AccordionItem>
  <AccordionItem>
    {#snippet header()}
      Header 2-2
    {/snippet}
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
  </AccordionItem>
</Accordion>
