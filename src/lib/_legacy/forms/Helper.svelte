<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  export let helperClass: string = 'text-xs font-normal text-neutral-500 dark:text-neutral-300';
  export let color: 'neutral' | 'green' | 'red' | 'disabled' = 'neutral';
  const colorClasses = {
    neutral: 'text-neutral-900 dark:text-neutral-300',
    green: 'text-green-700 dark:text-green-500',
    red: 'text-red-700 dark:text-red-500',
    disabled: 'text-neutral-400 dark:text-neutral-500'
  };
</script>

<p {...$$restProps} class={twMerge(helperClass, colorClasses[color], $$props.class)}>
  <slot />
</p>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let helperClass: string = 'text-xs font-normal text-neutral-500 dark:text-neutral-300';
@prop export let color: 'neutral' | 'green' | 'red' | 'disabled' = 'neutral';
-->
