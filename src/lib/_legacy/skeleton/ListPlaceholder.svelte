<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  export let divClass: string = 'p-4 space-y-4 max-w-md rounded border border-neutral-200 divide-y divide-neutral-200 shadow animate-pulse dark:divide-neutral-700 md:p-6 dark:border-neutral-700';
</script>

<div role="status" class={twMerge(divClass, $$props.class)}>
  <div class="flex justify-between items-center">
    <div>
      <div class="h-2.5 bg-neutral-300 rounded-full dark:bg-neutral-600 w-24 mb-2.5" />
      <div class="w-32 h-2 bg-neutral-200 rounded-full dark:bg-neutral-700" />
    </div>
    <div class="h-2.5 bg-neutral-300 rounded-full dark:bg-neutral-700 w-12" />
  </div>
  <div class="flex justify-between items-center pt-4">
    <div>
      <div class="h-2.5 bg-neutral-300 rounded-full dark:bg-neutral-600 w-24 mb-2.5" />
      <div class="w-32 h-2 bg-neutral-200 rounded-full dark:bg-neutral-700" />
    </div>
    <div class="h-2.5 bg-neutral-300 rounded-full dark:bg-neutral-700 w-12" />
  </div>
  <div class="flex justify-between items-center pt-4">
    <div>
      <div class="h-2.5 bg-neutral-300 rounded-full dark:bg-neutral-600 w-24 mb-2.5" />
      <div class="w-32 h-2 bg-neutral-200 rounded-full dark:bg-neutral-700" />
    </div>
    <div class="h-2.5 bg-neutral-300 rounded-full dark:bg-neutral-700 w-12" />
  </div>
  <div class="flex justify-between items-center pt-4">
    <div>
      <div class="h-2.5 bg-neutral-300 rounded-full dark:bg-neutral-600 w-24 mb-2.5" />
      <div class="w-32 h-2 bg-neutral-200 rounded-full dark:bg-neutral-700" />
    </div>
    <div class="h-2.5 bg-neutral-300 rounded-full dark:bg-neutral-700 w-12" />
  </div>
  <div class="flex justify-between items-center pt-4">
    <div>
      <div class="h-2.5 bg-neutral-300 rounded-full dark:bg-neutral-600 w-24 mb-2.5" />
      <div class="w-32 h-2 bg-neutral-200 rounded-full dark:bg-neutral-700" />
    </div>
    <div class="h-2.5 bg-neutral-300 rounded-full dark:bg-neutral-700 w-12" />
  </div>
  <span class="sr-only">Loading...</span>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let divClass: string = 'p-4 space-y-4 max-w-md rounded border border-neutral-200 divide-y divide-neutral-200 shadow animate-pulse dark:divide-neutral-700 md:p-6 dark:border-neutral-700';
-->
