<script lang="ts">
  import { type DropdownProps as Props, dropdown } from "./";
  import { autoUpdate, flip, offset as floatingUIOffset, useClick, useDismiss, useFloating, useInteractions, useRole } from "@skeletonlabs/floating-ui-svelte";
  import { fade, fly } from "svelte/transition";
  import { setContext } from "svelte";
  import { writable } from "svelte/store";

  let { children, open = $bindable(false), triggeredBy, position: placement = "bottom", offset = 8, class: className, transitionIn = fade, transitionInParams = { duration: 200 }, transitionOut = fly, transitionOutParams = { y: -5 }, activeUrl = "", lock = false, ...restProps }: Props = $props();

  const { base } = $derived(dropdown());

  // Use Floating
  let floating = $derived(
    useFloating({
      get open() {
        return open;
      },
      onOpenChange: (v) => {
        open = v;
      },
      whileElementsMounted: autoUpdate,
      placement,
      get middleware() {
        return [floatingUIOffset(offset), flip()];
      }
    })
  );

  // Interactions
  let role = $derived(useRole(floating.context));
  let behaviour = $derived(useClick(floating.context));
  let dismiss = $derived(useDismiss(floating.context));
  let interactions = $derived(useInteractions([role, behaviour, dismiss]));

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

  // Active URL
  const activeUrlStore = writable("");
  setContext("activeUrl", activeUrlStore);

  $effect(() => {
    activeUrlStore.set(activeUrl ?? "");
  });

  // Lock scroll system
  $effect(() => {
    if (open && lock) {
      const scrollWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollWidth}px`;
    } else if (lock) {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
  });
</script>

<!-- Dropdown menu -->
{#if open}
  <div bind:this={floating.elements.floating} style={floating.floatingStyles} {...interactions.getFloatingProps()} class={base({ class: className })} in:transitionIn={transitionInParams} out:transitionOut={transitionOutParams} {...restProps}>
    {@render children()}
  </div>
{/if}

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props:children: any;
@props:open: any = $bindable();
@props:triggeredBy: any;
@props:position: string;
@props:offset: number;
@props:class: string;
@props:params: any;
@props:transition: any = fly;
@props:activeUrl: any = "";
-->
