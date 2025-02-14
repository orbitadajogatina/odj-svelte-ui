<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import { getContext } from 'svelte';

  export let href: string | undefined = undefined;
  export let active: boolean = false;
  export let activeClass: string = 'text-blue-600 border border-neutral-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-neutral-700 dark:bg-neutral-700 dark:text-white';
  export let normalClass: string = 'text-neutral-500 bg-white hover:bg-neutral-100 hover:text-neutral-700 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-white';
  export let large: boolean = false;

  const group = getContext<boolean>('group');
  const table = getContext<boolean>('table');

  let defaultClass: string;
  $: defaultClass = twMerge(
    'flex items-center font-medium',
    large ? 'h-10 px-4 text-base' : 'h-8 px-3 text-sm',
    group ? '' : table ? 'rounded-sm' : 'rounded-lg',
    // table || 'border border-neutral-300 dark:border-neutral-700 dark:bg-neutral-800',
    table ? '' : 'border',
    active ? activeClass : normalClass,
    $$props.class
  );
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<svelte:element this={href ? 'a' : 'button'} {href} class={defaultClass} on:blur on:change on:click on:focus on:keydown on:keypress on:keyup on:mouseenter on:mouseleave on:mouseover role={href ? 'button' : undefined}>
  <slot />
</svelte:element>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let href: string | undefined = undefined;
@prop export let active: boolean = false;
@prop export let activeClass: string = 'text-blue-600 border border-neutral-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-neutral-700 dark:bg-neutral-700 dark:text-white';
@prop export let normalClass: string = 'text-neutral-500 bg-white hover:bg-neutral-100 hover:text-neutral-700 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-white';
@prop export let large: boolean = false;
-->
