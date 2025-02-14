<script lang="ts">
  import { twMerge } from 'tailwind-merge';

  export let divClass: string = 'overflow-y-auto p-2 bg-neutral-100 rounded-sm dark:bg-neutral-850';
</script>

<div {...$$restProps} class={twMerge(divClass, $$props.class)}>
  <slot />
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let divClass: string = 'overflow-y-auto py-4 px-3 bg-neutral-50 rounded-sm dark:bg-neutral-800';
-->
