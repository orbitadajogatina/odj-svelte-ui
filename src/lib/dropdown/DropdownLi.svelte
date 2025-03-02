<script lang="ts">
  import { getContext } from "svelte";
  import { type DropdownLiProps as Props, dropdownli } from "./";

  let { aClass, children, href, activeClass, liClass, custom = false, ...restProps }: Props = $props();

  const activeUrlStore = getContext("activeUrl") as { subscribe: (callback: (value: string) => void) => void };
  let sidebarUrl = $state("");
  activeUrlStore.subscribe((value) => {
    sidebarUrl = value;
  });
  let active = $state(false);
  $effect(() => {
    active = sidebarUrl ? href === sidebarUrl : false;
  });

  const { anchor, activeAnchor } = $derived(dropdownli());
</script>

<li class={liClass}>
  {#if href}
    <a {href} {...restProps} class={active ? activeAnchor({ class: activeClass }) : anchor({ class: aClass })}>
      {@render children()}
    </a>
  {:else if custom}
    <button {...restProps} class={active ? activeAnchor({ class: activeClass }) : anchor({ class: aClass })}>
      {@render children()}
    </button>
  {:else}
    <a {href} {...restProps} class={active ? activeAnchor({ class: activeClass }) : anchor({ class: aClass })}>
      {@render children()}
    </a>
  {/if}
</li>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: aClass: any;
@props:children: any;
@props:href: any;
@props:activeClass: any;
@props:liClass: any;
@props:custom: boolean;
-->
