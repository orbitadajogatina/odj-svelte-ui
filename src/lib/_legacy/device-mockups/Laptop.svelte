<script lang="ts">
  import { twMerge } from 'tailwind-merge';

  export let div: string = 'relative mx-auto border-neutral-800 dark:border-neutral-800 bg-neutral-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]';
  export let inner: string = 'rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-neutral-800';
  export let bot: string = 'relative mx-auto bg-neutral-900 dark:bg-neutral-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]';
  export let botCen: string = 'absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-neutral-800';
</script>

<div class={twMerge(div, $$props.class)}>
  <div class={twMerge(inner, $$props.classInner)}>
    <slot />
  </div>
</div>

<div class={twMerge(bot, $$props.classBot)}>
  <div class={twMerge(botCen, $$props.classBotCen)} />
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let div: string = 'relative mx-auto border-neutral-800 dark:border-neutral-800 bg-neutral-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]';
@prop export let inner: string = 'rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-neutral-800';
@prop export let bot: string = 'relative mx-auto bg-neutral-900 dark:bg-neutral-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]';
@prop export let botCen: string = 'absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-neutral-800';
-->
