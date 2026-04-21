<script lang="ts">
  import { type BadgeProps as Props, badge } from "./index";
  import { CloseButton } from "$lib";
  import { fade } from "svelte/transition";
  import type { ParamsType } from "$lib/types";

  let { children, icon, badgeStatus = $bindable(true), color = "primary", large = false, dismissable = false, class: className, border, href, target, rounded, transition = fade, params, aClass, onclick, ...restProps }: Props = $props();

  const { base, hrefClass } = $derived(badge({ color, size: large ? "large" : "small", border, rounded }));
  // $inspect('badgeStatus: ', badgeStatus);
</script>

{#if badgeStatus}
  <svelte:element this={href ? "a" : "div"} {href} {target} {...restProps} transition:transition={params as ParamsType} class={[base({ className }), href && hrefClass({ class: aClass })]}>
    {@render children()}
    {#if dismissable}
      {#if icon}
        <button
          type="button"
          class="text-primary-500 hover:bg-primary-200 focus:ring-primary-400 dark:hover:bg-primary-800 dark:hover:text-primary-300 m-0.5 ms-1.5 -me-1.5 rounded-sm p-0.5 whitespace-normal focus:ring-1 focus:outline-hidden"
          aria-label="Remove badge"
          onclick={() => {
            badgeStatus = false;
          }}
        >
          <span class="sr-only">Remove badge</span>
          {@render icon()}
        </button>
      {:else if onclick}
        <CloseButton class="ms-1.5 -me-1.5" {color} size={large ? "sm" : "xs"} ariaLabel="Remove badge" {onclick} />
      {:else}
        <CloseButton
          class="ms-1.5 -me-1.5"
          {color}
          size={large ? "sm" : "xs"}
          ariaLabel="Remove badge"
          onclick={() => {
            badgeStatus = false;
          }}
        />
      {/if}
    {/if}
  </svelte:element>
{/if}

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children: any;
@props:icon: any;
@props:badgeStatus: any = $bindable(true);
@props:color: any = "primary";
@props:large: any = false;
@props:dismissable: any = false;
@props:class: string;
@props:border: any;
@props:href: any;
@props:target: any;
@-props:rounded-sm: any;
@props:transition: any = fade;
@props:params: any;
@props:aClass: any;
@props:onclick: any;
-->
