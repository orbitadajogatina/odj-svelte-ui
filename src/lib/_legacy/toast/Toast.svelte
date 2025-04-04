<script lang="ts">
  import { createEventDispatcher, type ComponentProps } from 'svelte';
  import Frame from '../utils/Frame.svelte';
  import { twMerge } from 'tailwind-merge';
  import CloseButton from '../utils/CloseButton.svelte';
  import { fade } from 'svelte/transition';
  import type { Dismissable } from '$lib/_legacy/types';

  // propagate props type from underying Frame
  interface $$Props extends ComponentProps<Frame>, Dismissable {
    color?: 'primary' | 'neutral' | 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'orange' | 'none';
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'none';
    open?: boolean;
    divClass?: string;
    defaultIconClass?: string;
    extraIconClass?: string;
    contentClass?: string;
  }

  export let dismissable: boolean = true;
  export let color: 'primary' | 'neutral' | 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'orange' | 'none' = 'primary';
  export let position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'none' = 'none';
  export let open: boolean = true;
  export let divClass: string = 'w-full max-w-xs p-4 text-neutral-500 bg-white shadow-sm dark:text-neutral-400 dark:bg-neutral-800 gap-3';
  export let defaultIconClass: string = 'w-8 h-8';
  export let contentClass: string = 'w-full text-sm font-normal';
  export let align: boolean = true;

  const dispatch = createEventDispatcher();
  $: dispatch(open ? 'open' : 'close');

  const positions = {
    'top-left': 'absolute top-5 left-5',
    'top-right': 'absolute top-5 right-5',
    'bottom-left': 'absolute bottom-5 left-5',
    'bottom-right': 'absolute bottom-5 right-5',
    none: ''
  };

  function close(e: MouseEvent) {
    e.stopPropagation();
    open = false;
  }

  let finalDivClass: string;
  $: finalDivClass = twMerge('flex', align ? 'items-center' : 'items-start', divClass, positions[position], $$props.class);

  const colors = {
    primary: 'text-primary-500 bg-primary-100 dark:bg-primary-800 dark:text-primary-200',
    neutral: 'text-neutral-500 bg-neutral-100 dark:bg-neutral-700 dark:text-neutral-200',
    red: 'text-red-500 bg-red-100 dark:bg-red-800 dark:text-red-200',
    yellow: 'text-yellow-500 bg-yellow-100 dark:bg-yellow-800 dark:text-yellow-200',
    green: 'text-green-500 bg-green-100 dark:bg-green-800 dark:text-green-200',
    blue: 'text-blue-500 bg-blue-100 dark:bg-blue-800 dark:text-blue-200',
    indigo: 'text-indigo-500 bg-indigo-100 dark:bg-indigo-800 dark:text-indigo-200',
    purple: 'text-purple-500 bg-purple-100 dark:bg-purple-800 dark:text-purple-200',
    orange: 'text-orange-500 bg-orange-100 dark:bg-orange-700 dark:text-orange-200',
    none: ''
  };

  let iconClass: string;
  $: iconClass = twMerge('inline-flex items-center justify-center shrink-0', colors[color], defaultIconClass);

  const clsBtnExtraClass = '-mx-1.5 -my-1.5 text-neutral-400 hover:text-neutral-900 focus:ring-neutral-300! hover:bg-neutral-100 dark:text-neutral-500 dark:hover:text-white dark:hover:bg-neutral-700';
</script>

{#if open}
  <Frame rounded transition={fade} color="none" {...$$restProps} class={finalDivClass} role="alert">
    {#if $$slots.icon}
      <Frame rounded color="none" class={iconClass}>
        <slot name="icon" />
      </Frame>
    {/if}

    <div class={contentClass}>
      <slot />
    </div>

    {#if dismissable}
      <slot name="close-button" {close}>
        <CloseButton class={clsBtnExtraClass} on:click={close} />
      </slot>
    {/if}
  </Frame>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let dismissable: boolean = true;
@prop export let color: 'primary' | 'neutral' | 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'orange' | 'none' = 'primary';
@prop export let position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'none' = 'none';
@prop export let open: boolean = true;
@prop export let divClass: string = 'w-full max-w-xs p-4 text-neutral-500 bg-white shadow-sm dark:text-neutral-400 dark:bg-neutral-800 gap-3';
@prop export let defaultIconClass: string = 'w-8 h-8';
@prop export let contentClass: string = 'w-full text-sm font-normal';
@prop export let align: boolean = true;
-->
