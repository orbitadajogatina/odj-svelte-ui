<script lang="ts">
  import { writable, get } from "svelte/store";
  import { setContext } from "svelte";
  import { type TabsProps as Props, type TabCtxType, tabs } from ".";

  let { children, tabStyle = "none", ulClass, contentClass, sliderClass, divider = true, ...restProps }: Props = $props();

  const { base, content, divider: dividerClass, slider } = $derived(tabs({ tabStyle, hasDivider: divider }));

  // Generate a unique ID for the tab panel
  const panelId = `tab-panel-${crypto.randomUUID()}`;

  const ctx: TabCtxType = {
    get tabStyle() {
      return tabStyle;
    },
    selected: writable<HTMLElement>(),
    panelId, // Add panelId to the context
    currentTab: writable<string>()
  };

  let dividerBool = $derived(["full", "pill"].includes(tabStyle) ? false : divider);

  setContext("ctx", ctx);

  function init(node: HTMLElement) {
    const destroy = ctx.selected.subscribe((x: HTMLElement) => {
      if (x) node.replaceChildren(x);
    });
    return { destroy };
  }

  function updateUnderlineSlider(id:string) {
    if (['underline', 'full'].includes(tabStyle)) {
      const slider = document.querySelector(`#slider-${panelId}`) as HTMLElement;
      const selectedTab = document.querySelector(`#${id}`) as HTMLElement;

      if (slider && selectedTab) {
        slider.style.width = `${selectedTab.offsetWidth}px`;
        slider.style.left = `${selectedTab.offsetLeft}px`;
      }
    }
  }

  $effect(() => {
    ctx.currentTab.subscribe((id) => {
      updateUnderlineSlider(id);
    });
  });
</script>

<svelte:window onresize={() => updateUnderlineSlider(get(ctx.currentTab))}/>

<ul {...restProps} class={base({ class: ulClass })}>
  {@render children()}
  {#if ['underline', 'full'].includes(tabStyle)}
    <li class={slider({ class: sliderClass })} id="slider-{panelId}" role="presentation"></li>
  {/if}
</ul>
{#if dividerBool}
  <div class={dividerClass()}></div>
{/if}
<div id={panelId} class={content({ class: contentClass })} role="tabpanel" aria-labelledby={panelId} use:init></div>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children: any;
@props:tabStyle: any = "none";
@props:ulClass: any;
@props:contentClass: any;
@props:divider: any = true;
-->
