<script lang="ts">
  import type { ComponentProps } from 'svelte';
  import Popper from '../utils/Popper.svelte';
  import { twMerge } from 'tailwind-merge';

  // propagate props type from underlying Frame
  interface $$Props extends ComponentProps<Popper> {
    type?: 'dark' | 'light' | 'auto' | 'custom';
    defaultClass?: string;
  }

  export let type: 'dark' | 'light' | 'auto' | 'custom' = 'dark';
  export let defaultClass: string = 'py-2 px-3 text-sm font-medium';

  const types = {
    dark: 'bg-neutral-900 text-white dark:bg-neutral-700',
    light: 'border-neutral-200 bg-white text-neutral-900',
    auto: ' bg-white text-neutral-900 dark:bg-neutral-700 dark:text-white border-neutral-200 dark:border-neutral-700',
    custom: ''
  };

  let toolTipClass: string;
  $: {
    if ($$restProps.color) type = 'custom';
    else $$restProps.color = 'none';

    if (['light', 'auto'].includes(type)) $$restProps.border = true;
    toolTipClass = twMerge('tooltip', defaultClass, types[type], $$props.class);
  }
</script>

<Popper rounded shadow {...$$restProps} class={toolTipClass} on:show>
  <slot />
</Popper>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let type: 'dark' | 'light' | 'auto' | 'custom' = 'dark';
@prop export let defaultClass: string = 'py-2 px-3 text-sm font-medium';
-->
