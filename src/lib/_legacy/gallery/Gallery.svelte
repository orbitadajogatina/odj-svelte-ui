<script lang="ts">
  import type { ImgType } from '$lib/_legacy/types';
  import { twMerge } from 'tailwind-merge';

  export let items: ImgType[] = [];
  export let imgClass: string = 'h-auto max-w-full rounded-lg';

  $: divClass = twMerge('grid', $$props.class);

  function init(node: HTMLElement) {
    if (getComputedStyle(node).gap === 'normal') node.style.gap = 'inherit';
  }
</script>

<div {...$$restProps} class={divClass} use:init>
  {#each items as item}
    <slot {item}>
      <div><img src={item.src} alt={item.alt} class={twMerge(imgClass, $$props.classImg)} /></div>
    </slot>
  {:else}
    <slot item={items[0]} />
  {/each}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let items: ImgType[] = [];
@prop export let imgClass: string = 'h-auto max-w-full rounded-lg';
-->
