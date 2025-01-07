<script lang="ts">
  import type { SizeType } from '$lib/elements/types';
  import { twMerge } from 'tailwind-merge';
  import { getContext } from 'svelte';
  import { clampSize } from '$lib/elements/forms/Input.svelte';

  export let size: 'sm' | 'md' | 'lg' | undefined = undefined;

  // tinted if put in component having its own background
  let background: boolean = getContext('background');

  let group: { size: SizeType } = getContext('group');

  const borderClasses = {
    base: 'border-neutral-300 dark:border-neutral-600',
    tinted: 'border-neutral-300 dark:border-neutral-500'
  };

  const darkBgClasses = {
    base: 'dark:bg-neutral-600 dark:text-neutral-400',
    tinted: 'dark:bg-neutral-500 dark:text-neutral-300'
  };

  const divider = {
    base: 'dark:border-r-neutral-700 dark:last:border-r-neutral-600',
    tinted: 'dark:border-r-neutral-600 dark:last:border-r-neutral-500'
  };

  const textSizes = { sm: 'sm:text-xs', md: 'text-sm', lg: 'sm:text-base' };
  const prefixPadding = { sm: 'px-2', md: 'px-3', lg: 'px-4' };

  // size: explicit, inherited, default
  $: _size = size || clampSize(group?.size) || 'md';

  $: divClass = twMerge(textSizes[_size], prefixPadding[_size], background ? borderClasses['tinted'] : borderClasses['base'], 'text-neutral-500 bg-neutral-200', background ? darkBgClasses.tinted : darkBgClasses.base, background ? divider.tinted : divider.base, 'inline-flex items-center border-t border-b first:border-l border-r', 'first:rounded-l-lg last:rounded-r-lg', $$props.class);
</script>

<div {...$$restProps} class={divClass}>
  <slot />
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let size: 'sm' | 'md' | 'lg' | undefined = undefined;
-->
