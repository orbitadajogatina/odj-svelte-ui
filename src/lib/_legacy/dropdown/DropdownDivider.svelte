<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  export let divClass: string = 'my-1 h-px bg-neutral-100 dark:bg-neutral-600';
</script>

<div {...$$restProps} class={twMerge(divClass, $$props.class)} />

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let divClass: string = 'my-1 h-px bg-neutral-100 dark:bg-neutral-600';
-->
