<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  export let ulClass: string = 'text-neutral-600 dark:text-neutral-400';
</script>

<ul class={twMerge(ulClass, $$props.class)}>
  <slot />
</ul>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let ulClass: string = 'text-neutral-600 dark:text-neutral-400';
-->
