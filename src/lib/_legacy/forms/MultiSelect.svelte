<script lang="ts">
  import Badge from '$lib/_legacy/badge/Badge.svelte';
  import CloseButton from '$lib/_legacy/utils/CloseButton.svelte';
  import { twMerge } from 'tailwind-merge';
  import type { FormSizeType, SelectOptionType } from '../types';

  export let items: SelectOptionType<any>[] = [];
  export let value: (string | number)[] = [];
  export let size: FormSizeType = 'md';
  export let dropdownClass: string = '';

  let selectItems: SelectOptionType<any>[] = items.filter((x) => value.includes(x.value));
  let show: boolean = false;

  const sizes = {
    sm: 'px-2 py-1 min-h-[2.4rem]',
    md: 'px-2 py-1 min-h-[2.7rem]',
    lg: 'px-4 py-2 min-h-[3.2rem]'
  };

  // Container
  const multiSelectClass: string = 'relative flex items-center gap-1.5 text-neutral-900 bg-neutral-50 border border-neutral-300 rounded-lg outline-hidden focus:ring-1 focus:ring-primary-500 focus:border-primary-500 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500';

  // Dropdown
  let multiSelectDropdown: string;
  $: multiSelectDropdown = twMerge('absolute z-50 p-1 flex flex-col gap-1 max-h-64 bg-white border border-neutral-300 dark:bg-neutral-700 dark:border-neutral-600 start-0 top-[calc(100%+0.5rem)] rounded-lg cursor-pointer overflow-y-auto w-full', dropdownClass);

  // Items (dropdown)
  const itemsClass: string = 'py-2 px-3 rounded-lg text-neutral-600 hover:text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:text-neutral-300 dark:hover:bg-neutral-600';
  // Selected items (dropdown)
  const itemsSelectClass: string = 'bg-neutral-100 text-black hover:text-black dark:text-white dark:bg-neutral-600 dark:hover:text-white';

  const selectOption = (select: SelectOptionType<any>) => {
    if (value.includes(select.value)) {
      clearThisOption(select);
    } else {
      if (!value.includes(select.value)) value = [...value, select.value];
    }
  };

  const clearAll = (e: MouseEvent) => {
    e.stopPropagation();
    value = [];
  };

  const clearThisOption = (select: SelectOptionType<any>) => {
    if (value.includes(select.value)) {
      value = value.filter((o) => o !== select.value);
    }
  };

  function create_custom_event(type: string, detail: any, { bubbles = false, cancelable = false } = {}) {
    return new CustomEvent(type, { detail, bubbles, cancelable });
  }

  function init(node: HTMLSelectElement, value: any) {
    const inital = value; // hack for below
    return {
      update: (value: any) => {
        selectItems = items.filter((x) => value.includes(x.value));
        // avoid initial event emitting
        if (value !== inital) {
          node.dispatchEvent(create_custom_event('input', selectItems));
          node.dispatchEvent(create_custom_event('change', selectItems));
        }
      }
    };
  }
</script>

<!-- Hidden select for form submission -->
<select use:init={value} {...$$restProps} {value} hidden multiple on:change on:input>
  {#each items as { value, name }}
    <option {value}>{name}</option>
  {/each}
</select>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:click={() => (show = !show)} tabindex="0" on:keydown={() => (show = !show)} on:focusout={() => (show = false)} role="listbox" class={'multiSelect ' + twMerge(multiSelectClass, sizes[size], $$props.class)}>
  <span class="flex gap-1 my-1 flex-wrap">
    {#if selectItems.length}
      {#each selectItems as item (item.name)}
        <slot {item} clear={() => clearThisOption(item)}>
          <Badge color="dark" class="bg-neutral-200 dark:bg-neutral-600" large={size === 'lg'} dismissable params={{ duration: 100 }} on:close={() => clearThisOption(item)}>
            {item.name}
          </Badge>
        </slot>
      {/each}
    {/if}
  </span>
  <div class="flex ms-auto gap-0.5 items-center">
    {#if selectItems.length}
      <CloseButton {size} on:click={clearAll} color="none" class="p-0 focus:ring-neutral-400" />
    {/if}
    <div class="w-[1px] bg-neutral-300 dark:bg-neutral-600" />
    <svg class="cursor-pointer h-3 w-3 ms-1 text-neutral-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={show ? 'm1 5 4-4 4 4' : 'm9 1-4 4-4-4'} />
    </svg>
  </div>

  {#if show}
    <div on:click|stopPropagation role="presentation" class={multiSelectDropdown}>
      {#each items as item (item.name)}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div on:click={() => selectOption(item)} role="presentation" class={twMerge(itemsClass, selectItems.includes(item) && itemsSelectClass)}>
          {item.name}
        </div>
      {/each}
    </div>
  {/if}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let items: SelectOptionType<any>[] = [];
@prop export let value: (string | number)[] = [];
@prop export let size: FormSizeType = 'md';
@prop export let dropdownClass: string = '';
-->