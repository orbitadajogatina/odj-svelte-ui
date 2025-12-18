<script lang="ts">
  import { cubicOut } from "svelte/easing";
  import { Tween } from "svelte/motion";
  import { twMerge } from "tailwind-merge";
  import { progressRadial } from ".";
  import type { ProgressRadialProps as Props } from ".";

  let {
    progress = 45,
    radius = 42,
    startingPosition = "top",
    precision = 0,
    tweenDuration = 400,
    animate = false,
    size = "h-24 w-24",
    thickness = 4,
    labelInside = false,
    labelOutside = "",
    easing = cubicOut,
    color = "primary",

    baseClass,
    labelClass,
    backgroundClass,
    foregroundClass,
    outsideClass,
    spanClass,
    progressClass,

    class: className,
    ...restProps
  }: Props = $props();

  const _progress = new Tween(0, {
    duration: animate ? tweenDuration : 0,
    easing
  });

  const { base, label, background, foreground, outside, span, progressCls } = $derived(
    progressRadial({
      color,
      labelInside
    })
  );

  $effect(() => {
    _progress.set(Number(progress));
  });

  const circumference = $derived(2 * Math.PI * radius);

  const strokeDashoffset = $derived(circumference - (_progress.current / 100) * circumference);

  const rotationAngle = $derived(startingPosition === "top" ? -90 : startingPosition === "right" ? 0 : startingPosition === "bottom" ? 90 : startingPosition === "left" ? 180 : -90);

  const formattedProgress = $derived(_progress.current.toFixed(precision));
</script>

<div class="flex flex-col items-center">
  {#if labelOutside}
    <div
      class={outside({
        class: outsideClass
      })}
    >
      <span
        class={span({
          class: spanClass
        })}
      >
        {labelOutside}
      </span>

      <span
        class={progressCls({
          class: progressClass
        })}
      >
        {formattedProgress}%
      </span>
    </div>
  {/if}

  <div {...restProps} class={twMerge(base({ class: baseClass }), size, className?.toString())}>
    <svg viewBox="0 0 100 100" class="h-full w-full" style="transform: rotate({rotationAngle}deg)">
      <circle
        cx="50"
        cy="50"
        r={radius}
        fill="none"
        stroke-width={thickness}
        class={background({
          class: backgroundClass
        })}
      />

      <circle
        cx="50"
        cy="50"
        r={radius}
        fill="none"
        stroke-width={thickness}
        stroke-dasharray={circumference}
        stroke-dashoffset={strokeDashoffset}
        stroke-linecap="round"
        class={foreground({
          class: foregroundClass
        })}
      />
    </svg>

    {#if labelInside}
      <div
        class={label({
          class: labelClass
        })}
      >
        {formattedProgress}%
      </div>
    {/if}
  </div>
</div>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Type
ProgressRadialProps

## Props
@prop progress = 45
@prop radius = 42
@prop startingPosition = "top"
@prop precision = 0
@prop tweenDuration = 400
@prop animate = false
@prop size = "h-24 w-24"
@prop thickness = 4
@prop labelInside = false
@prop labelOutside = ""
@prop easing = cubicOut
@prop color = "primary"

## Class overrides
@prop baseClass
@prop labelClass
@prop backgroundClass
@prop foregroundClass
@prop outsideClass
@prop spanClass
@prop progressClass

@prop class: className
@prop ...restProps
-->
