<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import type { ActivityType } from '../types';

  export let activities: ActivityType[];
  export let liClass: string = 'mb-10 ml-6';
  export let spanClass: string = 'flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-neutral-900 dark:bg-blue-900';
  export let imgClass: string = 'rounded-full shadow-lg';
  export let outerDivClass: string = 'p-4 bg-white rounded-lg border border-neutral-200 shadow-xs dark:bg-neutral-700 dark:border-neutral-600';
  export let innerDivClass: string = 'justify-between items-center mb-3 sm:flex';
  export let timeClass: string = 'mb-1 text-xs font-normal text-neutral-400 sm:order-last sm:mb-0';
  export let titleClass: string = 'text-sm font-normal text-neutral-500 lex dark:text-neutral-300';
  export let textClass: string = 'p-3 text-xs italic font-normal text-neutral-500 bg-neutral-50 rounded-lg border border-neutral-200 dark:bg-neutral-600 dark:border-neutral-500 dark:text-neutral-300';

  let liCls: string = twMerge(liClass, $$props.classLi);
  let spanCls: string = twMerge(spanClass, $$props.classSpan);
  let imgCls: string = twMerge(imgClass, $$props.classImg);
  let outerDivCls: string = twMerge(outerDivClass, $$props.classOuterDiv);
  let innerDivCls: string = twMerge(innerDivClass, $$props.classInnerDiv);
  let timeCls: string = twMerge(timeClass, $$props.classTime);
  let titleCls: string = twMerge(titleClass, $$props.classTitle);
  let textCls: string = twMerge(textClass, $$props.classText);
</script>

{#each activities as { title, date, src, alt, text }}
  <li class={liCls}>
    <span class={spanCls}>
      <img class={imgCls} {src} {alt} />
    </span>
    <div class={outerDivCls}>
      <div class={innerDivCls}>
        <time class={timeCls}>{date}</time>
        <div class={titleCls}>
          {@html title}
        </div>
      </div>
      {#if text}
        <div class={textCls}>
          {@html text}
        </div>
      {/if}
    </div>
  </li>
{/each}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let activities: ActivityType[];
@prop export let liClass: string = 'mb-10 ml-6';
@prop export let spanClass: string = 'flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-neutral-900 dark:bg-blue-900';
@prop export let imgClass: string = 'rounded-full shadow-lg';
@prop export let outerDivClass: string = 'p-4 bg-white rounded-lg border border-neutral-200 shadow-xs dark:bg-neutral-700 dark:border-neutral-600';
@prop export let innerDivClass: string = 'justify-between items-center mb-3 sm:flex';
@prop export let timeClass: string = 'mb-1 text-xs font-normal text-neutral-400 sm:order-last sm:mb-0';
@prop export let titleClass: string = 'text-sm font-normal text-neutral-500 lex dark:text-neutral-300';
@prop export let textClass: string = 'p-3 text-xs italic font-normal text-neutral-500 bg-neutral-50 rounded-lg border border-neutral-200 dark:bg-neutral-600 dark:border-neutral-500 dark:text-neutral-300';
-->
