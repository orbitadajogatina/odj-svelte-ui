<script lang="ts">
  import { twMerge } from 'tailwind-merge';

  export let ulClass: string = 'space-y-2';
  export let borderClass: string = 'pt-4 mt-4 border-t border-neutral-200 dark:border-neutral-700';
  export let border: boolean = false;

  if (border) {
    ulClass += ' ' + borderClass;
  }
</script>

<ul {...$$restProps} class={twMerge(ulClass, $$props.class)}>
  <slot />
</ul>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let ulClass: string = 'space-y-2';
@prop export let borderClass: string = 'pt-4 mt-4 border-t border-neutral-200 dark:border-neutral-700';
@prop export let border: boolean = false;
-->