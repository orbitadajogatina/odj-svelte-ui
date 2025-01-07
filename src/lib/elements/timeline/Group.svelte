<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  export let divClass: string = 'p-5 mb-4 bg-neutral-50 rounded-lg border border-neutral-100 dark:bg-neutral-800 dark:border-neutral-700';
  export let timeClass: string = 'text-lg font-semibold text-neutral-900 dark:text-white';
  export let date: Date | string;
  export let olClass: string = 'mt-3 divide-y divider-neutral-200 dark:divide-neutral-700';
  let divCls: string = twMerge(divClass, $$props.classDiv);
  let timeCls: string = twMerge(timeClass, $$props.classTime);
  let olCls: string = twMerge(olClass, $$props.classOl);
</script>

<div class={divCls}>
  <time class={timeCls}>{date}</time>
  <ol class={olCls}>
    <slot />
  </ol>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let divClass: string = 'p-5 mb-4 bg-neutral-50 rounded-lg border border-neutral-100 dark:bg-neutral-800 dark:border-neutral-700';
@prop export let timeClass: string = 'text-lg font-semibold text-neutral-900 dark:text-white';
@prop export let date: Date | string;
@prop export let olClass: string = 'mt-3 divide-y divider-neutral-200 dark:divide-neutral-700';
-->
