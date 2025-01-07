<script lang="ts">
  import { twMerge } from 'tailwind-merge';

  export let solid: boolean = false;
  export let navClass: string = 'flex';
  export let solidClass: string = 'flex px-5 py-3 text-neutral-700 border border-neutral-200 rounded-lg bg-neutral-50 dark:bg-neutral-800 dark:border-neutral-700';
  export let olClass: string = 'inline-flex items-center space-x-1 md:space-x-3';
  export let ariaLabel: string = 'Breadcrumb'; 
  let classNav: string = solid ? solidClass : navClass;
</script>

<nav aria-label={ariaLabel} {...$$restProps} class={twMerge(classNav, $$props.class)}>
  <ol class={twMerge(olClass, $$props.classOl)}>
    <slot />
  </ol>
</nav>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let solid: boolean = false;
@prop export let navClass: string = 'flex';
@prop export let solidClass: string = 'flex px-5 py-3 text-neutral-700 border border-neutral-200 rounded-lg bg-neutral-50 dark:bg-neutral-800 dark:border-neutral-700';
@prop export let olClass: string = 'inline-flex items-center space-x-1 md:space-x-3';
@prop export let ariaLabel: string = 'Breadcrumb';
-->
