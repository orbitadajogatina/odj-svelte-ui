<script context="module" lang="ts">
  import { writable, type Writable } from 'svelte/store';

  export interface TabCtxType {
    activeClasses: string;
    inactiveClasses: string;
    selected: Writable<HTMLElement>;
  }
</script>

<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import { setContext } from 'svelte';

  export let style: 'full' | 'pill' | 'underline' | 'none' = 'none';
  export let defaultClass: string = 'flex flex-wrap space-x-2';
  export let contentClass: string = 'p-2 bg-neutral-50 rounded-lg dark:bg-neutral-800 mt-2';
  export let divider: boolean = true;
  export let activeClasses: string = 'p-2 text-primary-600 bg-neutral-100 rounded-t-lg dark:bg-neutral-800 dark:text-primary-500';
  export let inactiveClasses: string = 'p-2 text-neutral-500 rounded-t-lg hover:text-neutral-600 hover:bg-neutral-50 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-300';

  // styles
  const styledActiveClasses = {
    full: 'p-4 w-full group-first:rounded-l-lg group-last:rounded-r-lg text-neutral-900 bg-neutral-100 focus:ring-4 focus:ring-primary-300 focus:outline-hidden dark:bg-neutral-700 dark:text-white',
    pill: 'py-3 px-4 text-white bg-primary-600 rounded-lg',
    underline: 'p-4 text-primary-600 border-b-2 border-primary-600 dark:text-primary-500 dark:border-primary-500',
    none: ''
  };

  const styledInactiveClasses = {
    full: 'p-4 w-full group-first:rounded-l-lg group-last:rounded-r-lg text-neutral-500 dark:text-neutral-400 bg-white hover:text-neutral-700 hover:bg-neutral-50 focus:ring-4 focus:ring-primary-300 focus:outline-hidden dark:hover:text-white dark:bg-neutral-800 dark:hover:bg-neutral-700',
    pill: 'py-3 px-4 text-neutral-500 rounded-lg hover:text-neutral-900 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white',
    underline: 'p-4 border-b-2 border-transparent hover:text-neutral-600 hover:border-neutral-300 dark:hover:text-neutral-300 text-neutral-500 dark:text-neutral-400',
    none: ''
  };

  const ctx: TabCtxType = {
    activeClasses: styledActiveClasses[style] || activeClasses,
    inactiveClasses: styledInactiveClasses[style] || inactiveClasses,
    selected: writable<HTMLElement>()
  };

  $: divider = ['full', 'pill'].includes(style) ? false : divider;

  setContext('ctx', ctx);

  function init(node: HTMLElement) {
    const destroy = ctx.selected.subscribe((x: HTMLElement) => {
      if (x) node.replaceChildren(x);
    });

    return { destroy };
  }

  $: ulClass = twMerge(defaultClass, style === 'underline' && '-mb-px', $$props.class);
</script>

<ul class={ulClass}>
  <slot {style} />
</ul>
{#if divider}
  <slot name="divider">
    <div class="h-px bg-neutral-200 dark:bg-neutral-700" />
  </slot>
{/if}
<div class={contentClass} role="tabpanel" aria-labelledby="id-tab" use:init />

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let style: 'full' | 'pill' | 'underline' | 'none' = 'none';
@prop export let defaultClass: string = 'flex flex-wrap space-x-2';
@prop export let contentClass: string = 'p-4 bg-neutral-50 rounded-lg dark:bg-neutral-800 mt-4';
@prop export let divider: boolean = true;
@prop export let activeClasses: string = 'p-4 text-primary-600 bg-neutral-100 rounded-t-lg dark:bg-neutral-800 dark:text-primary-500';
@prop export let inactiveClasses: string = 'p-4 text-neutral-500 rounded-t-lg hover:text-neutral-600 hover:bg-neutral-50 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-300';
-->
