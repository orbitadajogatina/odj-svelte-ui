<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import type { BlockQuoteType } from '../types';

  export let border: boolean = false;
  export let italic: boolean = true;
  export let borderClass: string = 'border-l-4 border-neutral-300 dark:border-neutral-500';
  export let bgClass: string = 'bg-neutral-50 dark:bg-neutral-800';
  export let bg: boolean = false;
  export let baseClass: string = 'font-semibold text-neutral-900 dark:text-white';
  export let alignment: 'left' | 'center' | 'right' = 'left';
  export let size: BlockQuoteType = 'lg';
  let alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };
  const sizes = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
    '5xl': 'text-5xl',
    '6xl': 'text-6xl',
    '7xl': 'text-7xl',
    '8xl': 'text-8xl',
    '9xl': 'text-9xl'
  };
</script>

<blockquote {...$$restProps} class={twMerge(baseClass, alignmentClasses[alignment], sizes[size], bg && bgClass, border && borderClass, italic && 'italic', $$props.class)}>
  <slot />
</blockquote>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let border: boolean = false;
@prop export let italic: boolean = true;
@prop export let borderClass: string = 'border-l-4 border-neutral-300 dark:border-neutral-500';
@prop export let bgClass: string = 'bg-neutral-50 dark:bg-neutral-800';
@prop export let bg: boolean = false;
@prop export let baseClass: string = 'font-semibold text-neutral-900 dark:text-white';
@prop export let alignment: 'left' | 'center' | 'right' = 'left';
@prop export let size: BlockQuoteType = 'lg';
-->
