<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  export let kbdClass: string = 'text-xs font-semibold text-neutral-800 bg-neutral-100 border border-neutral-200 rounded-lg dark:bg-neutral-600 dark:text-neutral-100 dark:border-neutral-500';
</script>

<kbd class={twMerge(kbdClass, $$props.class)}>
  <slot />
</kbd>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let kbdClass: string = 'text-xs font-semibold text-neutral-800 bg-neutral-100 border border-neutral-200 rounded-lg dark:bg-neutral-600 dark:text-neutral-100 dark:border-neutral-500';
-->
