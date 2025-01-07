<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  export let divClass: string = 'p-4 max-w-sm rounded border border-neutral-200 shadow animate-pulse md:p-6 dark:border-neutral-700';
</script>

<div role="status" class={twMerge(divClass, $$props.class)}>
  <div class="h-2.5 bg-neutral-200 rounded-full dark:bg-neutral-700 w-32 mb-2.5" />
  <div class="mb-10 w-48 h-2 bg-neutral-200 rounded-full dark:bg-neutral-700" />
  <div class="flex items-baseline mt-4 space-x-6">
    <div class="w-full h-72 bg-neutral-200 rounded-t-lg dark:bg-neutral-700" />
    <div class="w-full h-56 bg-neutral-200 rounded-t-lg dark:bg-neutral-700" />
    <div class="w-full h-72 bg-neutral-200 rounded-t-lg dark:bg-neutral-700" />
    <div class="w-full h-64 bg-neutral-200 rounded-t-lg dark:bg-neutral-700" />
    <div class="w-full h-80 bg-neutral-200 rounded-t-lg dark:bg-neutral-700" />
    <div class="w-full h-72 bg-neutral-200 rounded-t-lg dark:bg-neutral-700" />
    <div class="w-full h-80 bg-neutral-200 rounded-t-lg dark:bg-neutral-700" />
  </div>
  <span class="sr-only">Loading...</span>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let divClass: string = 'p-4 max-w-sm rounded border border-neutral-200 shadow animate-pulse md:p-6 dark:border-neutral-700';
-->
