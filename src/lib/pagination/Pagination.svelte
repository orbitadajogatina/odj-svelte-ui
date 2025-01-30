<script lang="ts">
  import { setContext } from "svelte";
  import { type PaginationProps as Props, pagination, PaginationItem } from ".";

  let { pages = [], previous, next, prevContent, nextContent, table, size, ariaLabel, ...restProps }: Props = $props();

  setContext("group", true);
  setContext("table", table);
  setContext("size", size);

  const paginationClass = $derived(pagination({ table, size }));
</script>

<nav aria-label={ariaLabel}>
  <ul class={paginationClass}>
    {#if typeof previous === "function"}
      <li {...restProps} class="shrink-0">
        <PaginationItem {size} onclick={() => previous()} class={table ? "rounded-none rounded-l" : "rounded-none  rounded-s-lg"}>
          {#if prevContent}
            {@render prevContent()}
          {:else}
            Previous
          {/if}
        </PaginationItem>
      </li>
    {/if}
    <div class="grid grid-flow-col auto-cols-[minmax(2.5rem,1fr)] overflow-x-auto">
      {#each pages as { name, href, active }, index}
        <li {...restProps}>
          <PaginationItem {size} {active} {href} class={active || index == 0 || pages[index - 1]?.active ? "" : "border-l-0"}>
            {name}
          </PaginationItem>
        </li>
      {/each}
    </div>
    {#if typeof next === "function"}
      <li {...restProps} class="shrink-0">
        <PaginationItem {size} onclick={() => next()} class={table ? "rounded-none rounded-r" : "rounded-none rounded-e-lg"}>
          {#if nextContent}
            {@render nextContent()}
          {:else}
            Next
          {/if}
        </PaginationItem>
      </li>
    {/if}
  </ul>
</nav>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: pages: any = [];
@props:previous: any;
@props:next: any;
@props:prevContent: any;
@props:nextContent: any;
@props:table: any;
@props:size: any;
@props:ariaLabel: any;
-->
