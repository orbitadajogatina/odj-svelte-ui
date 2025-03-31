<script lang="ts">
  import { Indicator } from "$lib";
  import { onMount } from "svelte";
  import { type AvatarProps as Props, avatar, fallback as fallbackTheme } from ".";

  let { children, src, href, target, cornerStyle = "circular", border = false, stacked = false, dot, class: className, alt, size = "md", onclick, fallback, fallbackClass: fallbackClassName, placeholderClass, ...restProps }: Props = $props();

  dot = dot && { placement: "top-right", color: "red", size: "lg", ...dot };

  let avatarClass = $derived(
    avatar({
      cornerStyle,
      border,
      stacked,
      size,
      className
    })
  );
  let fallbackClass = $derived(
    fallbackTheme({
      cornerStyle,
      border,
      stacked,
      size,
      className: fallbackClassName
    })
  );

  let imageState: "loading" | "loaded" | "error" = $state("loading");
  onMount(() => {
    const img = new Image();
    if (!src) return;

    img.src = src;
    imageState = "loading";

    img.onload = () => {
      imageState = "loaded";
    };
    img.onerror = () => {
      imageState = "error";
    };
  });
</script>

{#if !src || !!href || children || dot}
  <svelte:element this={href ? "a" : "div"} role={href ? undefined : "button"} {onclick} {href} {target} {...restProps} class={avatarClass}>
    {#if src}
      {#if fallback && imageState !== "loaded"}
        <div class={fallbackClass}>
          {@render fallback()}
        </div>
      {:else}
        <img {alt} {src} class={cornerStyle === "circular" ? "rounded-full" : "rounded-sm"} />
      {/if}
    {:else if children}
      {@render children()}
    {:else}
      <svg class="h-full w-full {placeholderClass} {cornerStyle === 'circular' ? 'rounded-full' : 'rounded-sm'}" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M8 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
      </svg>
    {/if}
    {#if dot}
      <Indicator border offset={cornerStyle === "circular" ? true : false} {...dot} />
    {/if}
  </svelte:element>
{:else if fallback && imageState !== "loaded"}
  <div class={fallbackClass}>
    {@render fallback()}
  </div>
{:else}
  <img {alt} {src} {...restProps} class={avatarClass} />
{/if}

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props:children: any;
@props:fallback: any;
@props:src: any;
@props:href: any;
@props:target: any;
@props:cornerStyle: any = "circular";
@props:border: any = false;
@props:stacked: any = false;
@props:dot: any;
@props:class: string;
@props:fallbackClass: string;
@props:alt: any;
@props:size: any = "md";
@props:onclick: any;
-->
