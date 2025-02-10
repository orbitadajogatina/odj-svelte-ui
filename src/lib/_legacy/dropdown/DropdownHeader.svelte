<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import DropdownDivider from './DropdownDivider.svelte';
  export let divClass: string = 'py-2 px-4 text-neutral-700 dark:text-white rounded-t-lg';
  export let dividerClass: string = '';
  export let divider: boolean = true;
  export let href: string = '';
</script>

{#if href}
  <a {href} {...$$restProps} class={twMerge(divClass + ' block cursor-pointer', $$props.class)}>
    <slot />
  </a>
{:else}
  <div {...$$restProps} class={twMerge(divClass, $$props.class)}>
    <slot />
  </div>
{/if}
{#if divider}
  <DropdownDivider class={dividerClass} />
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let divClass: string = 'py-2 px-4 text-neutral-700 dark:text-white';
@prop export let divider: boolean = true;
-->
