<script lang="ts">
  import { Accordion, AccordionItem } from "$lib";
</script>

<Accordion activeClass="bg-purple-100 dark:bg-purple-800 text-light-surface-900 dark:text-white" inactiveClass="hover:bg-purple-50 dark:hover:bg-purple-800 text-light-surface-800 dark:text-dark-surface-200">
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
</Accordion>
