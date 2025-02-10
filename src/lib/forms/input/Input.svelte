<script lang="ts">
  import type { SizeType } from "$lib/types";
  import { getContext } from "svelte";
  import { CloseButton } from "$lib";
  import { type InputProps as Props, input, clampSize, type InputValue } from ".";

  let { children, left, right, value = $bindable<InputValue>(), clearable = false, size, color = "default", class: className, classLeft, classRight, divClass, classSearchInputXButton, ...restProps }: Props<InputValue> = $props();

  // tinted if put in component having its own background
  let background: boolean = getContext("background");

  let group: { size: SizeType } = getContext("group");
  let isGroup = !!group;
  let _size = $derived(size || clampSize(group?.size) || "md");
  const _color = $derived(color === "default" && background ? "tinted" : color);

  const { base, input: inputCls, left: leftCls, right: rightCls, searchInputXButton } = $derived(input({ size: _size, color: _color, group: isGroup, class: className }));

  const clearAll = () => {
    value = undefined;
  };
  
  let colorForSearchInputXButton:string = $state('');
  let referenceToGetColorID = 'getColor-' + crypto.randomUUID();
  $effect(() => {
    color;
    const el = document.querySelector("#" + referenceToGetColorID);
    if (el) {
      const computedColor = getComputedStyle(el).color;
      colorForSearchInputXButton = computedColor;
    }
  });
</script>

{#if restProps.type === 'search'}
  <span class={searchInputXButton({ class: classSearchInputXButton })} id={referenceToGetColorID}></span>
{/if}

<style>
  [type="search"]::-webkit-search-cancel-button {
    -webkit-appearance: none;
    background-color: var(--color);
    -webkit-mask-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23777'><path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'/></svg>");
    background-size: 20px 20px;
    height: 20px;
    width: 20px;
  }
</style>

{#snippet inputContent()}
  {#if left}
    <div class={leftCls({ class: classLeft })}>
      {@render left()}
    </div>
  {/if}
  {#if children}
    {@render children({ ...restProps, class: inputCls() })}
  {:else}
    <input {...restProps} style="--color: {colorForSearchInputXButton};" bind:value class={inputCls({ class: className })} />
  {/if}
  {#if right}
    <div class={rightCls({ class: classRight })}>
      {@render right()}
    </div>
  {/if}
  {#if clearable && value && `${value}`.length > 0}
    <CloseButton {size} onclick={clearAll} class={rightCls({ class: classRight })} />
  {/if}
{/snippet}

{#if group}
  {@render inputContent()}
{:else if right || left}
  <div class={base({ class: divClass })}>
    {@render inputContent()}
  </div>
{:else}
  {@render inputContent()}
{/if}

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: 
-->
