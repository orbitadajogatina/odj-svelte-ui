<script lang="ts">
  import { twMerge } from 'tailwind-merge';

  export let div: string = 'relative mx-auto border-neutral-800 dark:border-neutral-800 bg-neutral-800 border-[14px] rounded-[2.5rem] h-[454px] max-w-[341px] md:h-[682px] md:max-w-[512px]';
  export let slot: string = 'rounded-[2rem] overflow-hidden h-[426px] md:h-[654px] bg-white dark:bg-neutral-800';
  export let leftTop: string = 'h-[32px] w-[3px] bg-neutral-800 dark:bg-neutral-800 absolute -left-[17px] top-[72px] rounded-l-lg';
  export let leftMid: string = 'h-[46px] w-[3px] bg-neutral-800 dark:bg-neutral-800 absolute -left-[17px] top-[124px] rounded-l-lg';
  export let leftBot: string = 'h-[46px] w-[3px] bg-neutral-800 dark:bg-neutral-800 absolute -left-[17px] top-[178px] rounded-l-lg';
  export let right: string = 'h-[64px] w-[3px] bg-neutral-800 dark:bg-neutral-800 absolute -right-[17px] top-[142px] rounded-r-lg';
</script>

<div class={twMerge(div, $$props.class)}>
  <div class={twMerge(leftTop, $$props.classLeftTop)} />
  <div class={twMerge(leftMid, $$props.classLeftMid)} />
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
@prop export let div: string = 'relative mx-auto border-neutral-800 dark:border-neutral-800 bg-neutral-800 border-[14px] rounded-[2.5rem] h-[454px] max-w-[341px] md:h-[682px] md:max-w-[512px]';
@prop export let slot: string = 'rounded-[2rem] overflow-hidden h-[426px] md:h-[654px] bg-white dark:bg-neutral-800';
@prop export let leftTop: string = 'h-[32px] w-[3px] bg-neutral-800 dark:bg-neutral-800 absolute -left-[17px] top-[72px] rounded-l-lg';
@prop export let leftMid: string = 'h-[46px] w-[3px] bg-neutral-800 dark:bg-neutral-800 absolute -left-[17px] top-[124px] rounded-l-lg';
@prop export let leftBot: string = 'h-[46px] w-[3px] bg-neutral-800 dark:bg-neutral-800 absolute -left-[17px] top-[178px] rounded-l-lg';
@prop export let right: string = 'h-[64px] w-[3px] bg-neutral-800 dark:bg-neutral-800 absolute -right-[17px] top-[142px] rounded-r-lg';
-->
