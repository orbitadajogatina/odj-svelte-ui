<script context="module" lang="ts">
  import { writable, type Writable } from 'svelte/store';

  export interface AccordionCtxType {
    flush: boolean;
    activeClass: string;
    inactiveClass: string;
    selected?: Writable<object>;
    classActive?: string;
    classInactive?: string;
  }
</script>

<script lang="ts">
  import Frame from '$lib/elements/utils/Frame.svelte';
  import { twMerge } from 'tailwind-merge';
  import { setContext, type ComponentProps } from 'svelte';

  interface $$Props extends ComponentProps<Frame> {
    multiple?: boolean;
    flush?: boolean;
    activeClass?: string;
    inactiveClass?: string;
    defaultClass?: string;
    classActive?: string;
    classInactive?: string;
  }

  export let multiple: boolean = false;
  export let flush: boolean = false;
  export let activeClass: string = 'bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white focus:ring-4 focus:ring-neutral-200 dark:focus:ring-neutral-800';
  export let inactiveClass: string = 'text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 hover:dark:bg-neutral-800';
  export let defaultClass: string = 'text-neutral-500 dark:text-neutral-400';

  const ctx: AccordionCtxType = {
    flush,
    activeClass: twMerge(activeClass, $$props.classActive),
    inactiveClass: twMerge(inactiveClass, $$props.classInactive),
    selected: multiple ? undefined : writable()
  };

  setContext<AccordionCtxType>('ctx', ctx);

  let frameClass: string;
  $: frameClass = twMerge(defaultClass, $$props.class);
</script>

<Frame {...$$restProps} class={frameClass} color="none">
  <slot />
</Frame>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let multiple: boolean = false;
@prop export let flush: boolean = false;
@prop export let activeClass: string = 'bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white focus:ring-4 focus:ring-neutral-200 dark:focus:ring-neutral-800';
@prop export let inactiveClass: string = 'text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 hover:dark:bg-neutral-800';
@prop export let defaultClass: string = 'text-neutral-500 dark:text-neutral-400';
-->
