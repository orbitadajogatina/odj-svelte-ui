<script lang="ts">
  import Star from './Star.svelte';
  import { twMerge } from 'tailwind-merge';
  import generateId from '../utils/generateId.js';
  import type { ComponentType } from 'svelte';

  export let divClass: string = 'flex items-center';
  export let size: number = 24;
  export let total: number = 5;
  export let rating: number = 4;
  export let partialId: string = 'partialStar' + generateId();
  export let icon: ComponentType = Star;
  export let count: boolean = false;
  export let iconProps: object;

  // generate unique id for full star and neutral star
  const fullStarId: string = generateId();
  const neutralStarId: string = generateId();
  let fullStars: number = Math.floor(rating);
  let rateDiffence = rating - fullStars;
  let percentRating = Math.round(rateDiffence * 100);
  let neutralStars: number = total - (fullStars + Math.ceil(rateDiffence));
  // console.log(fullStars, neutralStars, rateDiffence, percentRating)
</script>

<div class={twMerge(divClass, $$props.class)}>
  {#if count}
    <svelte:component this={icon} fillPercent={100} {size} {...iconProps}/>
    <p class="ml-2 text-sm font-bold text-neutral-900 dark:text-white">{rating}</p>
    <slot />
  {:else}
    {#each Array(fullStars) as star}
      <svelte:component this={icon} {size} fillPercent={100} id={fullStarId} {...iconProps}/>
    {/each}
    {#if percentRating}
      <svelte:component this={icon} {size} fillPercent={percentRating} id={partialId} {...iconProps}/>
    {/if}
    {#each Array(neutralStars) as star}
      <svelte:component this={icon} {size} fillPercent={0} id={neutralStarId} {...iconProps}/>
    {/each}
    {#if $$slots.text}
      <slot name="text" />
    {/if}
  {/if}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let divClass: string = 'flex items-center';
@prop export let size: number = 24;
@prop export let total: number = 5;
@prop export let rating: number = 4;
@prop export let partialId: string = 'partialStar' + generateId();
@prop export let icon: ComponentType = Star;
@prop export let count: boolean = false;
-->
