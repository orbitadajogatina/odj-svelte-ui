<script lang="ts">
  import type { ComponentProps } from 'svelte';
  import Popper from '../utils/Popper.svelte';

  // propagate props type from underlying Frame
  interface $$Props extends ComponentProps<Popper> {
    title?: string;
    defaultClass?: string;
  }

  export let title: string = '';
  export let defaultClass: string = 'py-2 px-3';
</script>

<Popper activeContent border shadow rounded {...$$restProps} class="dark:border-neutral-600! {$$props.class}" on:show>
  {#if $$slots.title || title}
    <div class="py-2 px-3 bg-neutral-100 rounded-t-md border-b border-neutral-200 dark:border-neutral-600 dark:bg-neutral-700">
      <slot name="title">
        <h3 class="font-semibold text-neutral-900 dark:text-white">{title}</h3>
      </slot>
    </div>
  {/if}
  <div class={defaultClass}>
    <slot />
  </div>
</Popper>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let title: string = '';
@prop export let defaultClass: string = 'py-2 px-3';
-->
