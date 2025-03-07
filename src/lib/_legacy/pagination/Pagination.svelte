<script lang="ts">
  import { twMerge, twJoin } from 'tailwind-merge';
  import { createEventDispatcher, setContext } from 'svelte';
  import type { LinkType } from '../types';
  import PaginationItem from './PaginationItem.svelte';

  export let pages: LinkType[] = [];
  export let activeClass: string = 'text-blue-600 border border-neutral-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-neutral-700 dark:bg-neutral-700 dark:text-white';
  export let normalClass: string = 'text-neutral-500 bg-white hover:bg-neutral-100 hover:text-neutral-700 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-white';
  export let ulClass: string = 'inline-flex -space-x-px items-center';
  export let table: boolean = false;
  export let large: boolean = false;
  export let ariaLabel: string = 'Page navigation';

  const dispatch = createEventDispatcher();

  setContext<boolean>('group', true);
  setContext<boolean>('table', table);

  const previous = () => {
    dispatch('previous');
  };
  const next = () => {
    dispatch('next');
  };
</script>

<nav aria-label={ariaLabel}>
  <ul class={twMerge(ulClass, table && 'divide-x dark divide-neutral-700 dark:divide-neutral-700', $$props.class)}>
    <li>
      <PaginationItem {large} on:click={previous} {normalClass} class={table ? 'rounded-l' : 'rounded-l-lg'}>
        <slot name="prev">Previous</slot>
      </PaginationItem>
    </li>
    {#each pages as { name, href, active }}
      <li>
        <PaginationItem {large} {active} {activeClass} {normalClass} {href} on:blur on:change on:click on:focus on:keydown on:keypress on:keyup on:mouseenter on:mouseleave on:mouseover>
          {name}
        </PaginationItem>
      </li>
    {/each}
    <li>
      <PaginationItem {large} on:click={next} {normalClass} class={table ? 'rounded-r' : 'rounded-r-lg'}>
        <slot name="next">Next</slot>
      </PaginationItem>
    </li>
  </ul>
</nav>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let pages: LinkType[] = [];
@prop export let activeClass: string = 'text-blue-600 border border-neutral-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-neutral-700 dark:bg-neutral-700 dark:text-white';
@prop export let normalClass: string = 'text-neutral-500 bg-white hover:bg-neutral-100 hover:text-neutral-700 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-white';
@prop export let ulClass: string = 'inline-flex -space-x-px items-center';
@prop export let table: boolean = false;
@prop export let large: boolean = false;
@prop export let ariaLabel: string = 'Page navigation';
-->
