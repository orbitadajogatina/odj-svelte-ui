<script lang="ts" context="module">
  export type SidebarType = {
    activeClass: string;
    nonActiveClass: string;
  };
</script>

<script lang="ts">
  import { setContext } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import { writable } from 'svelte/store';

  const activeUrlStore = writable('');

  export let activeUrl: string = '';
  export let asideClass: string = 'w-64';
  export let nonActiveClass: string = 'flex items-center p-2 text-base font-normal text-neutral-700 rounded-lg dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-600 dark:hover:text-neutral-200';
  export let activeClass: string = 'flex items-center p-2 text-base font-normal text-neutral-800 bg-neutral-300 dark:text-neutral-300 dark:bg-neutral-700 rounded-lg dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-600';
  export let ariaLabel: string = 'Sidebar';

  setContext<SidebarType>('sidebarContext', { activeClass, nonActiveClass });

  $: {
    activeUrlStore.set(activeUrl);
  }
  setContext('activeUrl', activeUrlStore);
</script>

<aside {...$$restProps} class={twMerge(asideClass, $$props.class)} aria-label={ariaLabel}>
  <slot />
</aside>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let activeUrl: string = '';
@prop export let asideClass: string = 'w-64';
@prop export let nonActiveClass: string = 'flex items-center p-2 text-base font-normal text-neutral-900 rounded-lg dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-700';
@prop export let activeClass: string = 'flex items-center p-2 text-base font-normal text-neutral-900 bg-neutral-200 dark:bg-neutral-700 rounded-lg dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-700';
@prop export let ariaLabel: string = 'Sidebar';
-->
