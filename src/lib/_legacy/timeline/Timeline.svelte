<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import { setContext } from 'svelte';
  export let order: 'default' | 'vertical' | 'horizontal' | 'activity' | 'group' = 'default';

  setContext('order', order);
  let olClasses = {
    group: 'p-5 mb-4 bg-neutral-50 rounded-lg border border-neutral-100 dark:bg-neutral-800 dark:border-neutral-700',
    horizontal: 'sm:flex',
    activity: 'relative border-l border-neutral-200 dark:border-neutral-700',
    vertical: 'relative border-l border-neutral-200 dark:border-neutral-700',
    default: 'relative border-l border-neutral-200 dark:border-neutral-700'
  };
</script>

<ol class={twMerge(olClasses[order], $$props.class)}>
  <slot />
</ol>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let order: 'default' | 'vertical' | 'horizontal' | 'activity' | 'group' = 'default';
-->
