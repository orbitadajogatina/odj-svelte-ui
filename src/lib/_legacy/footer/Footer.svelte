<script lang="ts">
  import { twMerge } from 'tailwind-merge';

  export let footerType: 'sitemap' | 'default' | 'logo' | 'socialmedia' = 'default';

  let footerClass = twMerge(footerType === 'sitemap' && 'bg-neutral-800', footerType === 'socialmedia' && 'p-4 bg-white sm:p-6 dark:bg-neutral-800', footerType === 'logo' && 'p-4 bg-white rounded-lg shadow-sm md:px-6 md:py-8 dark:bg-neutral-800', footerType === 'default' && 'p-4 bg-white rounded-lg shadow-sm md:flex md:items-center md:justify-between md:p-6 dark:bg-neutral-800', $$props.class);
</script>

<footer {...$$restProps} class={footerClass}>
  <slot />
</footer>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let footerType: 'sitemap' | 'default' | 'logo' | 'socialmedia' = 'default';
-->
