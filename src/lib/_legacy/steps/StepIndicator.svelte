<script lang="ts">
  import { twMerge, twJoin } from 'tailwind-merge';

  export let steps: string[] = ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5'];
  export let currentStep = 1;
  export let size: string = 'h-2.5';
  export let color: 'primary' | 'secondary' | 'neutral' | 'red' | 'yellow' | 'green' | 'indigo' | 'purple' | 'pink' | 'blue' | 'custom' = 'primary';
  export let glow: boolean = false;
  export let hideLabel: boolean = false;
  export let completedCustom: string = '';
  export let currentCustom: string = '';

  const completedStepColors = {
    primary: 'bg-primary-500 dark:bg-primary-900',
    secondary: 'bg-secondary-500 dark:bg-secondary-900',
    neutral: 'bg-neutral-400 dark:bg-neutral-500',
    red: 'bg-red-600 dark:bg-red-900',
    yellow: 'bg-yellow-400 dark:bg-yellow-600',
    green: 'bg-green-500 dark:bg-green-900',
    indigo: 'bg-indigo-500 dark:bg-indigo-900',
    purple: 'bg-purple-500 dark:bg-purple-900',
    pink: 'bg-pink-500 dark:bg-pink-900',
    blue: 'bg-blue-500 dark:bg-blue-900',
    custom: completedCustom
  };
  const currentStepColors = {
    primary: 'bg-primary-800 dark:bg-primary-400',
    secondary: 'bg-secondary-800 dark:bg-secondary-400',
    neutral: 'bg-neutral-700 dark:bg-neutral-200',
    red: 'bg-red-900 dark:bg-red-500',
    yellow: 'bg-yellow-600 dark:bg-yellow-400',
    green: 'bg-green-800 dark:bg-green-400',
    indigo: 'bg-indigo-800 dark:bg-indigo-400',
    purple: 'bg-purple-800 dark:bg-purple-400',
    pink: 'bg-pink-800 dark:bg-pink-400',
    blue: 'bg-blue-800 dark:bg-blue-400',
    custom: currentCustom
  };
</script>

<div {...$$restProps} class={twMerge('space-y-2 dark:text-white', $$props.class)}>
  {#if !hideLabel}
    <h3 class="text-base font-semibold">{steps[currentStep - 1]}</h3>
  {/if}
  <div class={twJoin('flex justify-between gap-2 w-full', size)}>
    {#each steps as step, i}
      {#if i === currentStep - 1}
        <div class="relative w-full h-full">
          <div class={twJoin('relative w-full h-full rounded-xs', currentStepColors[color])} />
          {#if glow}
            <div class={twJoin('absolute -inset-1 rounded-xs blur-sm opacity-30 dark:opacity-25', currentStepColors[color])} />
          {/if}
        </div>
      {:else if i < currentStep - 1}
        <div class={twJoin('w-full h-full rounded-xs', completedStepColors[color])} />
      {:else}
        <div class="w-full h-full rounded-xs bg-neutral-200 dark:bg-neutral-700" />
      {/if}
    {/each}
  </div>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let steps: string[] = ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5'];
@prop export let currentStep = 1;
@prop export let size: string = 'h-2.5';
@prop export let color: 'primary' | 'secondary' | 'neutral' | 'red' | 'yellow' | 'green' | 'indigo' | 'purple' | 'pink' | 'blue' | 'custom' = 'primary';
@prop export let glow: boolean = false;
@prop export let hideLabel: boolean = false;
@prop export let completedCustom: string = '';
@prop export let currentCustom: string = '';
-->
