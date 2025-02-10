<script lang="ts">
  import { twMerge } from 'tailwind-merge';

  export let rounded: boolean = false;
  export let border: boolean = false;
  export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';

  const sizes = {
    xs: 'w-6 h-6',
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-20 h-20',
    xl: 'w-28 h-28 md:w-36 md:h-36'
  };

  const borderedSizes = {
    xs: 'w-6 h-6',
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
    xl: 'w-22 h-22 md:w-26 md:h-26'
  };

  let svgClass: string = twMerge('text-neutral-400 bg-neutral-100 dark:bg-neutral-600', rounded ? 'rounded' : 'rounded-full', border ? borderedSizes[size] : sizes[size], $$props.class);
</script>

<svg class={svgClass} fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
</svg>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let rounded: boolean = false;
@prop export let border: boolean = false;
@prop export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
-->
