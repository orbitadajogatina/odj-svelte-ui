<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  export let divClass: string = 'animate-pulse';
</script>

<div role="status" class={twMerge(divClass, $$props.class)}>
  <div class="h-2.5 bg-neutral-300 rounded-full dark:bg-neutral-700 max-w-[640px] mb-2.5 mx-auto" />
  <div class="h-2.5 mx-auto bg-neutral-300 rounded-full dark:bg-neutral-700 max-w-[540px]" />
  <div class="flex justify-center items-center mt-4">
    <svg class="mr-2 w-10 h-10 text-neutral-200 dark:text-neutral-700" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
    </svg>
    <div class="w-20 h-2.5 bg-neutral-200 rounded-full dark:bg-neutral-700 mr-3" />
    <div class="w-24 h-2 bg-neutral-200 rounded-full dark:bg-neutral-700" />
  </div>
  <span class="sr-only">Loading...</span>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let divClass: string = 'animate-pulse';
-->
