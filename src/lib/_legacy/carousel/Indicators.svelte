<script lang="ts">
  import Indicator from '$lib/_legacy/indicators/Indicator.svelte';
  import { getContext } from 'svelte';
  import type { Writable } from 'svelte/store';
  import { twMerge } from 'tailwind-merge';
  import type { State } from './Carousel.svelte';

  export let activeClass = 'opacity-100';
  export let inactiveClass = 'opacity-60';

  const state = getContext<Writable<State>>('state');
</script>

<div class={twMerge('flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2', $$props.class)}>
  {#each $state.images as _, idx}
    {@const selected = $state.index === idx}
    <button on:click={() => ($state.index = idx)}>
      <slot {Indicator} {selected} index={idx}>
        <Indicator class={twMerge('bg-neutral-100 hover:bg-neutral-300', selected ? activeClass : inactiveClass)} />
      </slot>
    </button>
  {/each}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let activeClass = 'opacity-100';
@prop export let inactiveClass = 'opacity-60';
-->
