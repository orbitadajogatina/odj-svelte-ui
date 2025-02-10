<script lang="ts">
  import Spinner from "../spinner/Spinner.svelte";
  import { getContext } from "svelte";
  import type { SizeType } from "$lib/types";
  import { type ButtonProps as Props, button } from ".";

  const group: SizeType = getContext("group");

  let { children, pill = false, outline = false, size = group ? "sm" : "md", href, type = "button", color = group ? (outline ? "dark" : "alternative") : "primary", shadow = false, tag = "button", disabled, class: className, loading = false, ...restProps }: Props = $props();

  let disabledValueBeforeLoading:boolean|undefined = $state(disabled);
  $effect(() => { 
    if (loading) {
      disabled = true;
    } else {
      disabled = disabledValueBeforeLoading;
    }
  })
  const base = $derived(button({ color, size, disabled, pill, group: !!group, outline, shadow, className }));
</script>

{#snippet defaultOrLoadingWrapper()}
  {#if loading}
    <div class="w-full text-center relative">
      <Spinner size="4" {color} class="absolute inset-0 m-auto"/>
      <div class="invisible">
        {@render children()}
      </div>
    </div>
  {:else}
    {@render children()}
  {/if}
{/snippet}

{#if href}
  <a {href} {...restProps} class={base} role="button">
    {@render defaultOrLoadingWrapper()}
  </a>
{:else if tag === "button"}
  <button {type} {...restProps} class={base} {disabled}>
    {@render defaultOrLoadingWrapper()}
  </button>
{:else}
  <svelte:element this={tag} {...restProps} class={base}>
    {@render defaultOrLoadingWrapper()}
  </svelte:element>
{/if}

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children: any;
@props:pill: any = false;
@props:outline: any = false;
@props:size: any = group ? "sm" : "md";
@props:href: any;
@props:type: any = "button";
@props:color: any = group ? (outline ? "dark" : "alternative") : "primary";
@props:shadow: any = false;
@props:tag: any = "button";
@props:disabled: any;
@props:class: string;
-->
