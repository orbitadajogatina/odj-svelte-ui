<script lang="ts">
  import { type DropdownProps as Props, dropdown } from "./";
  import { fly } from "svelte/transition";
  import type { ParamsType } from "$lib/types";
  import { setContext } from "svelte";
  import { writable } from "svelte/store";

  let { children, dropdownStatus = $bindable(), closeDropdown, class: className, backdropClass, params = { y: -5 }, transition = fly, activeUrl = "", lock = true, ...restProps }: Props = $props();

  const { base, backdrop } = $derived(dropdown());
  const activeUrlStore = writable("");
  setContext("activeUrl", activeUrlStore);

  $effect(() => {
    activeUrlStore.set(activeUrl ?? "");
  });

  $effect(() => {
    if (dropdownStatus && lock) {
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
{#if dropdownStatus}
  <div {...restProps} class={base({ class: className })} transition:transition={params as ParamsType}>
    {@render children()}
  </div>

  <div role="presentation" class={backdrop({ class: backdropClass })} onclick={closeDropdown}></div>
{/if}

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children: any;
@props:dropdownStatus: any = $bindable();
@props:closeDropdown: any;
@props:class: string;
@props:backdropClass: any;
@props:params: any;
@props:transition: any = fly;
@props:activeUrl: any = "";
-->
