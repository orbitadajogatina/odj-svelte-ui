<script lang="ts">
  import { twMerge } from 'tailwind-merge';

  export let div: string = 'relative mx-auto border-neutral-800 dark:border-neutral-800 bg-neutral-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]';
  export let slot: string = 'rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-neutral-800';
  export let top: string = 'h-[32px] w-[3px] bg-neutral-800 dark:bg-neutral-800 absolute -left-[17px] top-[72px] rounded-l-lg';
  export let leftTop: string = 'h-[46px] w-[3px] bg-neutral-800 dark:bg-neutral-800 absolute -left-[17px] top-[124px] rounded-l-lg';
  export let leftBot: string = 'h-[46px] w-[3px] bg-neutral-800 dark:bg-neutral-800 absolute -left-[17px] top-[178px] rounded-l-lg';
  export let right: string = 'h-[64px] w-[3px] bg-neutral-800 dark:bg-neutral-800 absolute -right-[17px] top-[142px] rounded-r-lg';
</script>

<div class={twMerge(div, $$props.class)}>
  <div class={twMerge(top, $$props.classTop)} />
  <div class={twMerge(leftTop, $$props.classLeftTop)} />
  <div class={twMerge(leftBot, $$props.classLeftBot)} />
  <div class={twMerge(right, $$props.classRight)} />
  <div class={twMerge(slot, $$props.classSlot)}>
    <slot />
  </div>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let div: string = 'relative mx-auto border-neutral-800 dark:border-neutral-800 bg-neutral-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]';
@prop export let slot: string = 'rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-neutral-800';
@prop export let top: string = 'h-[32px] w-[3px] bg-neutral-800 dark:bg-neutral-800 absolute -left-[17px] top-[72px] rounded-l-lg';
@prop export let leftTop: string = 'h-[46px] w-[3px] bg-neutral-800 dark:bg-neutral-800 absolute -left-[17px] top-[124px] rounded-l-lg';
@prop export let leftBot: string = 'h-[46px] w-[3px] bg-neutral-800 dark:bg-neutral-800 absolute -left-[17px] top-[178px] rounded-l-lg';
@prop export let right: string = 'h-[64px] w-[3px] bg-neutral-800 dark:bg-neutral-800 absolute -right-[17px] top-[142px] rounded-r-lg';
-->
