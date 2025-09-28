<script lang="ts">
  import { Accordion, AccordionItem } from "$lib";
</script>

<Accordion>
  <AccordionItem>
    {#snippet header()}
      Header 1-1
    {/snippet}
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
  </AccordionItem>
  <AccordionItem>
    {#snippet header()}
      Header 1-2
    {/snippet}
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
  </AccordionItem>
</Accordion>
