<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  interface Sizes {
    [key: string]: string;
  }

  const sizes: Sizes = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    xxl: 'max-w-2xl'
  };

  export let divClass: string = 'space-y-2.5 animate-pulse';
  export let size: keyof Sizes = 'sm';
  $: outDivclass = twMerge(sizes[size], divClass, $$props.class);
</script>

<div role="status" class={outDivclass}>
  <div class="flex items-center space-x-2 w-full">
    <div class="h-2.5 bg-neutral-200 rounded-full dark:bg-neutral-700 w-32" />
    <div class="h-2.5 bg-neutral-300 rounded-full dark:bg-neutral-600 w-24" />
    <div class="h-2.5 bg-neutral-300 rounded-full dark:bg-neutral-600 w-full" />
  </div>
  <div class="flex items-center space-x-2 w-11/12">
    <div class="h-2.5 bg-neutral-200 rounded-full dark:bg-neutral-700 w-full" />
    <div class="h-2.5 bg-neutral-300 rounded-full dark:bg-neutral-600 w-full" />
    <div class="h-2.5 bg-neutral-300 rounded-full dark:bg-neutral-600 w-24" />
  </div>
  <div class="flex items-center space-x-2 w-9/12">
    <div class="h-2.5 bg-neutral-300 rounded-full dark:bg-neutral-600 w-full" />
    <div class="h-2.5 bg-neutral-200 rounded-full dark:bg-neutral-700 w-80" />
    <div class="h-2.5 bg-neutral-300 rounded-full dark:bg-neutral-600 w-full" />
  </div>
  <div class="flex items-center space-x-2 w-11/12">
    <div class="h-2.5 bg-neutral-200 rounded-full dark:bg-neutral-700 w-full" />
    <div class="h-2.5 bg-neutral-300 rounded-full dark:bg-neutral-600 w-full" />
    <div class="h-2.5 bg-neutral-300 rounded-full dark:bg-neutral-600 w-24" />
  </div>
  <div class="flex items-center space-x-2 w-10/12">
    <div class="h-2.5 bg-neutral-300 rounded-full dark:bg-neutral-600 w-32" />
    <div class="h-2.5 bg-neutral-300 rounded-full dark:bg-neutral-600 w-24" />
    <div class="h-2.5 bg-neutral-200 rounded-full dark:bg-neutral-700 w-full" />
  </div>
  <div class="flex items-center space-x-2 w-8/12">
    <div class="h-2.5 bg-neutral-300 rounded-full dark:bg-neutral-600 w-full" />
    <div class="h-2.5 bg-neutral-200 rounded-full dark:bg-neutral-700 w-80" />
    <div class="h-2.5 bg-neutral-300 rounded-full dark:bg-neutral-600 w-full" />
  </div>
  <span class="sr-only">Loading...</span>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let divClass: string = 'space-y-2.5 animate-pulse';
@prop export let size: keyof Sizes = 'sm';
-->
