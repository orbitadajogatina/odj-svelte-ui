<script lang="ts">
  import type { ToolbarButtonType } from '../types';
  import { getContext } from 'svelte';
  import { twMerge } from 'tailwind-merge';

  const background = getContext('background');

  export let color: ToolbarButtonType = 'default';
  export let name: string | undefined = undefined;
  export let ariaLabel: string | undefined = undefined;
  export let size: 'xs' | 'sm' | 'md' | 'lg' = 'md';
  export let href: string | undefined = undefined;

  const colors = {
    dark: 'text-neutral-500 hover:text-neutral-900 hover:bg-neutral-200 dark:text-neutral-400 dark:hover:text-white dark:hover:bg-neutral-600',
    neutral: 'text-neutral-500 focus-visible:ring-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-900 dark:hover:text-neutral-300',
    red: 'text-red-500 focus-visible:ring-red-400 hover:bg-red-200 dark:hover:bg-red-900 dark:hover:text-red-300',
    yellow: 'text-yellow-500 focus-visible:ring-yellow-400 hover:bg-yellow-200 dark:hover:bg-yellow-900 dark:hover:text-yellow-300',
    green: 'text-green-500 focus-visible:ring-green-400 hover:bg-green-200 dark:hover:bg-green-900 dark:hover:text-green-300',
    indigo: 'text-indigo-500 focus-visible:ring-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-900 dark:hover:text-indigo-300',
    purple: 'text-purple-500 focus-visible:ring-purple-400 hover:bg-purple-200 dark:hover:bg-purple-900 dark:hover:text-purple-300',
    pink: 'text-pink-500 focus-visible:ring-pink-400 hover:bg-pink-200 dark:hover:bg-pink-900 dark:hover:text-pink-300',
    blue: 'text-blue-500 focus-visible:ring-blue-400 hover:bg-blue-200 dark:hover:bg-blue-900 dark:hover:text-blue-300',
    primary: 'text-primary-500 focus-visible:ring-primary-400 hover:bg-primary-200 dark:hover:bg-primary-900 dark:hover:text-primary-300',
    default: 'focus-visible:ring-neutral-400'
  };

  const sizing = {
    xs: 'm-0.5 rounded-sm focus-visible:ring-1 p-0.5',
    sm: 'm-0.5 rounded focus-visible:ring-1 p-0.5',
    md: 'm-0.5 rounded-lg focus-visible:ring-2 p-1.5',
    lg: 'm-0.5 rounded-lg focus-visible:ring-2 p-2.5'
  };

  let buttonClass: string;
  $: buttonClass = twMerge('focus:outline-none whitespace-normal', sizing[size], colors[color], color === 'default' && (background ? 'hover:bg-neutral-100 dark:hover:bg-neutral-600' : 'hover:bg-neutral-100 dark:hover:bg-neutral-700'), $$props.class);

  const svgSizes = {
    xs: 'w-3 h-3',
    sm: 'w-3.5 h-3.5',
    md: 'w-5 h-5',
    lg: 'w-5 h-5'
  };
</script>

{#if href}
  <a {href} {...$$restProps} class={buttonClass} aria-label={ariaLabel ?? name}>
    {#if name}<span class="sr-only">{name}</span>{/if}
    <slot svgSize={svgSizes[size]} />
  </a>
{:else}
  <button on:click type="button" {...$$restProps} class={buttonClass} aria-label={ariaLabel ?? name}>
    {#if name}<span class="sr-only">{name}</span>{/if}
    <slot svgSize={svgSizes[size]} />
  </button>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let color: ToolbarButtonType = 'default';
@prop export let name: string | undefined = undefined;
@prop export let ariaLabel: string | undefined = undefined;
@prop export let size: 'xs' | 'sm' | 'md' | 'lg' = 'md';
@prop export let href: string | undefined = undefined;
-->
