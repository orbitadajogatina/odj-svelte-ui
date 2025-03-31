<script lang="ts">
  import { card, type CardProps as Props } from ".";
  import type { HTMLAttributes, HTMLAnchorAttributes, HTMLButtonAttributes } from "svelte/elements";

  let { children, href, color = "default", horizontal = false, shadow = "md", reverse = false, img, padding = "lg", size = "sm", clickable, class: className, imgClass, contentClass, ...restProps }: Props = $props();

  const { base, image, content } = $derived(
    card({
      size,
      color,
      shadow,
      padding,
      horizontal,
      reverse,
      href: !!href || !!clickable
    })
  );

  /* eslint-disable  @typescript-eslint/no-explicit-any */
  const commonProps: Record<string, any> = $derived({
    class: base({ class: className }),
    ...restProps
  });

  const anchorProps: HTMLAnchorAttributes = $derived({
    ...commonProps,
    href
  });

  const buttonProps: HTMLButtonAttributes = $derived({
    ...commonProps
  });

  const divProps: HTMLAttributes<HTMLDivElement> = $derived({
    ...commonProps
  });
</script>

{#snippet childSlot()}
  {#if img}
    <img class={image({ class: imgClass })} src={img.src} alt={img.alt} />
    <div class={content({ class: contentClass })}>
      {@render children()}
    </div>
  {:else}
    <div class={content({ class: contentClass })}>
      {@render children()}
    </div>
  {/if}
{/snippet}

{#if href}
  <a {...anchorProps}>
    {@render childSlot()}
  </a>
{:else if clickable}
  <button {...buttonProps}>
    {@render childSlot()}
  </button>
{:else}
  <div {...divProps}>
    {@render childSlot()}
  </div>
{/if}

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children: any;
@props:href: any;
@props:color: any = "gray";
@props:horizontal: any = false;
@props:shadow: any = "md";
@props:reverse: any = false;
@props:img: any;
@props:padding: any = "lg";
@props:size: any = "sm";
@props:class: string;
@props:imgClass: any;
@props:contentClass: any;
-->
