<script lang="ts">
  import { twMerge } from 'tailwind-merge';

  export let color: string = 'text-neutral-500 dark:text-neutral-400';
  export let secondaryClass: string = 'font-semibold';
</script>

<small {...$$restProps} class={twMerge(color, secondaryClass, $$props.class)}>
  <slot />
</small>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let color: string = 'text-neutral-500 dark:text-neutral-400';
@prop export let secondaryClass: string = 'font-semibold';
-->
