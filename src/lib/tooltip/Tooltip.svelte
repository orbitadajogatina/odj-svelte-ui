<script lang="ts">
  import { tooltip } from "./theme";
  import type { TooltipProps } from ".";
  import { FloatingArrow, arrow, autoUpdate, flip, offset as floatingUIOffset, useDismiss, useFloating, useHover, useInteractions, useRole } from "@skeletonlabs/floating-ui-svelte";
  import { fade } from "svelte/transition";

  let { children, color = "default", arrow: showArrow = false, offset = 8, triggeredBy, position: placement = "top", class: className, arrowClass, open = $bindable(false), transition = fade, transitionOptions = { duration: 200 }, ...restProps }: TooltipProps = $props();

  let arrowElement: HTMLElement | null = $state(null);

  let { base, arrowBase } = $derived(tooltip({ color }));

  // State
  let elemArrow: HTMLElement | null = $state(null);

  // Use Floating
  let floating = $derived(
    useFloating({
      whileElementsMounted: autoUpdate,
      get open() {
        return open;
      },
      onOpenChange: (v) => {
        open = v;
      },
      placement,
      get middleware() {
        return [floatingUIOffset(offset), flip(), elemArrow && arrow({ element: elemArrow })];
      }
    })
  );

  // Interactions
  let role = $derived(useRole(floating.context, { role: "tooltip" }));
  let hover = $derived(useHover(floating.context, { move: false }));
  let dismiss = $derived(useDismiss(floating.context));
  let interactions = $derived(useInteractions([role, hover, dismiss]));

  // Get elements
  $effect(() => {
    let triggerElement = document.querySelector(triggeredBy);
    if (!triggerElement) return;

    floating.elements.reference = triggerElement;

    // Assign the props to the element
    Object.entries(interactions.getReferenceProps()).forEach(([key, value]) => {
      (triggerElement as any)[key] = value;
    });
  });
</script>

{#if open}
  <div role="tooltip" bind:this={floating.elements.floating} style={floating.floatingStyles} {...interactions.getFloatingProps()} transition:transition={transitionOptions} {...restProps} class={base({ className })}>
    {@render children()}
    {#if showArrow}
      <FloatingArrow bind:ref={arrowElement} context={floating.context} class={arrowBase({ className: arrowClass })} />
    {/if}
  </div>
{/if}

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props:children: any;
@props:color: any = "default";
@props:arrow: any = false;
@props:offset: number = 8;
@props:triggeredBy: any;
@props:position: string = "top";
@props:class: string;
@props:arrowClass: string;
@props:open: boolean = false;
@props:transition: any = "fade";
@props:transitionOptions: object = { duration: 200 };
-->
