<script lang="ts">
  import { twMerge } from 'tailwind-merge';

  export let aClass: string = 'flex items-center p-2 pl-11 w-full text-base font-normal text-neutral-900 rounded-lg transition duration-75 group hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700';
  export let href: string = '';
  export let label: string = '';
  export let activeClass: string = 'flex items-center p-2 pl-11 text-base font-normal text-neutral-900 bg-neutral-200 dark:bg-neutral-700 rounded-lg dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-700';
  export let active: boolean = false;
</script>

<li>
  <a {...$$restProps} {href} on:blur on:click on:focus on:keydown on:keypress on:keyup on:mouseenter on:mouseleave on:mouseover class={twMerge(active ? activeClass : aClass, $$props.class)}>
    {label}
  </a>
</li>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let aClass: string = 'flex items-center p-2 pl-11 w-full text-base font-normal text-neutral-900 rounded-lg transition duration-75 group hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700';
@prop export let href: string = '';
@prop export let label: string = '';
@prop export let activeClass: string = 'flex items-center p-2 pl-11 text-base font-normal text-neutral-900 bg-neutral-200 dark:bg-neutral-700 rounded-lg dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-700';
@prop export let active: boolean = false;
-->
