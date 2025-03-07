<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import AvatarPlaceholder from './Placeholder.svelte';
  import Indicator from '$lib/_legacy/indicators/Indicator.svelte';

  export let src: string = '';
  export let href: string | undefined = undefined;
  export let rounded: boolean = false;
  export let border: boolean = false;
  export let stacked: boolean = false;
  export let dot: object | undefined = undefined;
  export let alt: string = '';
  export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';

  $: dot = dot && { placement: 'top-right', color: 'neutral', size: 'lg', ...dot };

  const sizes = {
    xs: 'w-6 h-6',
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-20 h-20',
    xl: 'w-28 h-28 md:w-36 md:h-36'
  };

  let avatarClass: string;
  $: avatarClass = twMerge(rounded ? 'rounded-sm' : 'rounded-full', border && 'p-1 ring-2 ring-neutral-50 dark:ring-neutral-800', sizes[size], stacked && 'border-2 -ml-4 border-white dark:border-neutral-800', 'bg-neutral-50 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300', $$props.class);
</script>

{#if !src || !!href || $$slots.default || dot}
  <svelte:element this={href ? 'a' : 'div'} {href} {...$$restProps} class="relative flex justify-center items-center {avatarClass}">
    {#if src}
      <img {alt} {src} class={rounded ? 'rounded-sm' : 'rounded-full'} />
    {:else}
      <slot><AvatarPlaceholder {rounded} {size} {border} class={twMerge($$props.classPlaceholder)} /></slot>
    {/if}
    {#if dot}
      <Indicator border offset={rounded} {...dot} />
    {/if}
  </svelte:element>
{:else}
  <img {alt} {src} {...$$restProps} class={avatarClass} />
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let src: string = '';
@prop export let href: string | undefined = undefined;
@prop export let rounded: boolean = false;
@prop export let border: boolean = false;
@prop export let stacked: boolean = false;
@prop export let dot: object | undefined = undefined;
@prop export let alt: string = '';
@prop export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
-->
