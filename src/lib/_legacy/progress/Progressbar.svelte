<script lang="ts">
  import { cubicOut } from 'svelte/easing';
  import { tweened } from 'svelte/motion';
  import type { EasingFunction } from 'svelte/transition';
  import { twMerge, twJoin } from 'tailwind-merge';

  export let progress: string | number = '45';
  export let precision: number = 0
  export let tweenDuration: number = 400;
  export let animate: boolean = false;
  export let size: string = 'h-2.5';
  export let labelInside: boolean = false;
  export let labelOutside: string = '';
  export let easing: EasingFunction = cubicOut;
  export let color: 'primary' | 'blue' | 'neutral' | 'red' | 'green' | 'yellow' | 'purple' | 'indigo' = 'primary';
  export let labelInsideClass: string = 'text-primary-100 text-xs font-medium text-center p-0.5 leading-none rounded-full';
  export let divClass: string = 'w-full bg-neutral-200 rounded-full dark:bg-neutral-700';

  const _progress = tweened(0, {
    duration: animate ? tweenDuration : 0,
    easing
  });

  // let barColor: string;
  const barColors = {
    primary: 'bg-primary-600',
    blue: 'bg-blue-600',
    neutral: 'bg-neutral-600 dark:bg-neutral-300',
    red: 'bg-red-600 dark:bg-red-500',
    green: 'bg-green-600 dark:bg-green-500',
    yellow: 'bg-yellow-400',
    purple: 'bg-purple-600 dark:bg-purple-500',
    indigo: 'bg-indigo-600 dark:bg-indigo-500'
  };

  $: _progress.set(Number(progress));
</script>

{#if labelOutside}
  <div {...$$restProps} class={twMerge('flex justify-between mb-1', $$props.classLabelOutside)}>
    <span class="text-base font-medium text-blue-700 dark:text-white">{labelOutside}</span>
    <span class="text-sm font-medium text-blue-700 dark:text-white">{progress}%</span>
  </div>
{/if}
<div class={twMerge(divClass, size, $$props.class)}>
  {#if labelInside}
    <div class={twJoin(labelInsideClass, barColors[color])} style="width: {$_progress}%">
      {$_progress.toFixed(precision)}%
    </div>
  {:else}
    <div class={twJoin(barColors[color], size, 'rounded-full')} style="width: {$_progress}%" />
  {/if}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let progress: string | number = '45';
@prop export let precision: number = 0
  export let tweenDuration: number = 400;
@prop export let animate: boolean = false;
@prop export let size: string = 'h-2.5';
@prop export let labelInside: boolean = false;
@prop export let labelOutside: string = '';
@prop export let easing: EasingFunction = cubicOut;
@prop export let color: 'primary' | 'blue' | 'neutral' | 'red' | 'green' | 'yellow' | 'purple' | 'indigo' = 'primary';
@prop export let labelInsideClass: string = 'text-primary-100 text-xs font-medium text-center p-0.5 leading-none rounded-full';
@prop export let divClass: string = 'w-full bg-neutral-200 rounded-full dark:bg-neutral-700';
-->
