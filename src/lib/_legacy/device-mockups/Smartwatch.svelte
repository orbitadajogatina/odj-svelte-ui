<script lang="ts">
  import { twMerge } from 'tailwind-merge';

  export let div: string = 'relative mx-auto bg-neutral-800 dark:bg-neutral-700 rounded-t-[2.5rem] h-[63px] max-w-[133px]';
  export let slot: string = 'rounded-[2rem] overflow-hidden h-[193px] w-[188px]';
  export let rightTop: string = 'h-[41px] w-[6px] bg-neutral-800 dark:bg-neutral-800 absolute -right-[16px] top-[40px] rounded-r-lg';
  export let rightBot: string = 'h-[32px] w-[6px] bg-neutral-800 dark:bg-neutral-800 absolute -right-[16px] top-[88px] rounded-r-lg';
  export let top: string = 'relative mx-auto border-neutral-900 dark:bg-neutral-800 dark:border-neutral-800 border-[10px] rounded-[2.5rem] h-[213px] w-[208px]';
  export let bot: string = 'relative mx-auto bg-neutral-800 dark:bg-neutral-700 rounded-b-[2.5rem] h-[63px] max-w-[133px]';
</script>

<div class={twMerge(div, $$props.class)} />
<div class={twMerge(top, $$props.classTop)}>
  <div class={twMerge(rightTop, $$props.classRightTop)} />
  <div class={twMerge(rightBot, $$props.classRightBot)} />
  <div class={twMerge(slot, $$props.classSlot)}>
    <slot />
  </div>
</div>
<div class={twMerge(bot, $$props.classBot)} />

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let div: string = 'relative mx-auto bg-neutral-800 dark:bg-neutral-700 rounded-t-[2.5rem] h-[63px] max-w-[133px]';
@prop export let slot: string = 'rounded-[2rem] overflow-hidden h-[193px] w-[188px]';
@prop export let rightTop: string = 'h-[41px] w-[6px] bg-neutral-800 dark:bg-neutral-800 absolute -right-[16px] top-[40px] rounded-r-lg';
@prop export let rightBot: string = 'h-[32px] w-[6px] bg-neutral-800 dark:bg-neutral-800 absolute -right-[16px] top-[88px] rounded-r-lg';
@prop export let top: string = 'relative mx-auto border-neutral-900 dark:bg-neutral-800 dark:border-neutral-800 border-[10px] rounded-[2.5rem] h-[213px] w-[208px]';
@prop export let bot: string = 'relative mx-auto bg-neutral-800 dark:bg-neutral-700 rounded-b-[2.5rem] h-[63px] max-w-[133px]';
-->
