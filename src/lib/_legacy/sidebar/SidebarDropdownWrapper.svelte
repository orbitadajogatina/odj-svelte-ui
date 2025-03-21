<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import { fade, blur, fly, slide } from 'svelte/transition';
  import type { TransitionTypes, TransitionParamTypes } from '../types';

  export let btnClass: string = 'flex items-center p-2 w-full text-base font-normal text-neutral-900 rounded-lg transition duration-75 group hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700';
  export let label: string = '';
  export let spanClass: string = 'flex-1 ml-3 text-left whitespace-nowrap';
  export let ulClass: string = 'py-2 space-y-2';
  export let transitionType: TransitionTypes = 'slide';
  export let transitionParams: TransitionParamTypes = {};

  // make a custom transition function that returns the desired transition
  const multiple = (node: HTMLElement, params: any) => {
    switch (transitionType) {
      case 'blur':
        return blur(node, params);
      case 'fly':
        return fly(node, params);
      case 'fade':
        return fade(node, params);
      default:
        return slide(node, params);
    }
  };

  export let isOpen = false;
  const handleDropdown = () => {
    isOpen = !isOpen;
  };
</script>

<li>
  <button {...$$restProps} on:click={() => handleDropdown()} type="button" class={twMerge(btnClass, $$props.class)} aria-controls="sidebar-dropdown">
    <slot name="icon" />
    <span class={spanClass}>{label}</span>
    {#if isOpen}
      {#if $$slots.arrowup}
        <slot name="arrowup" />
      {:else}
        <svg class="w-3 h-3 text-neutral-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
        </svg>
      {/if}
    {:else if $$slots.arrowdown}
      <slot name="arrowdown" />
    {:else}
      <svg class="w-3 h-3 text-neutral-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
      </svg>
    {/if}
  </button>
  {#if isOpen}
    <ul class={ulClass} transition:multiple={transitionParams}>
      <slot />
    </ul>
  {/if}
</li>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let btnClass: string = 'flex items-center p-2 w-full text-base font-normal text-neutral-900 rounded-lg transition duration-75 group hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700';
@prop export let label: string = '';
@prop export let spanClass: string = 'flex-1 ml-3 text-left whitespace-nowrap';
@prop export let ulClass: string = 'py-2 space-y-2';
@prop export let transitionType: TransitionTypes = 'slide';
@prop export let transitionParams: TransitionParamTypes = {};
@prop export let isOpen = false;
-->
