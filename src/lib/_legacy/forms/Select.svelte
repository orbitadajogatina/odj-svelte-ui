<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import type { SelectOptionType } from '../types';

  export let items: SelectOptionType<any>[] = [];
  export let value: any = undefined;
  export let placeholder: string = 'Choose option ...';
  export let underline: boolean = false;
  export let size: 'sm' | 'md' | 'lg' = 'md';

  export let defaultClass: string = 'text-neutral-900 bg-neutral-50 border border-neutral-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500';

  export let underlineClass: string = 'text-neutral-500 bg-transparent border-0 border-b-2 border-neutral-200 appearance-none dark:text-neutral-400 dark:border-neutral-700 focus:outline-hidden focus:ring-0 focus:border-neutral-200 peer';

  const common = 'block w-full';
  const sizes = {
    sm: 'text-sm p-2',
    md: 'text-sm p-2.5',
    lg: 'text-base py-3 px-4'
  };

  let selectClass: string;
  $: selectClass = twMerge(common, underline ? underlineClass : defaultClass, sizes[size], underline && 'px-0!', $$props.class);
</script>

<select {...$$restProps} bind:value class={selectClass} on:change on:contextmenu on:input>
  {#if placeholder}
    <option disabled selected value="">{placeholder}</option>
  {/if}

  {#each items as { value, name }}
    <option {value}>{name}</option>
  {:else}
    <slot />
  {/each}
</select>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let items: SelectOptionType<any>[] = [];
@prop export let value: any = undefined;
@prop export let placeholder: string = 'Choose option ...';
@prop export let underline: boolean = false;
@prop export let size: 'sm' | 'md' | 'lg' = 'md';
@prop export let defaultClass: string = 'text-neutral-900 bg-neutral-50 border border-neutral-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500';
@prop export let underlineClass: string = 'text-neutral-500 bg-transparent border-0 border-b-2 border-neutral-200 appearance-none dark:text-neutral-400 dark:border-neutral-700 focus:outline-hidden focus:ring-0 focus:border-neutral-200 peer';
-->
