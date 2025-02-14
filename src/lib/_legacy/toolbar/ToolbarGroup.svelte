<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import type { Writable } from 'svelte/store';
  import { getContext } from 'svelte';
  export let divClass: string = 'flex items-center space-x-1 sm:pr-4 sm:pl-4 sm:first:pl-0 sm:last:pr-0';

  const options: Writable<boolean> = getContext('toolbar');
  if (options) $options = true;
</script>

<div class={twMerge(divClass, $$props.class)}>
  <slot />
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let divClass: string = 'flex items-center space-x-1 sm:pr-4 sm:pl-4 sm:first:pl-0 sm:last:pr-0';
-->
