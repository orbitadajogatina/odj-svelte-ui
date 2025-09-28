<script lang="ts">
  import type { SizeType } from "$lib/types";
  import { twMerge } from "tailwind-merge";
  import { getContext } from "svelte";
  import { clampSize } from "$lib";
  import { type InputAddonProps as Props } from ".";

  let { children, class: className, size, ...restProps }: Props = $props();
  let background: boolean = getContext("background");
  let group: { size: SizeType } = getContext("group");

  const borderClasses = {
    base: "border-light-surface-300 dark:border-dark-surface-600",
    tinted: "border-light-surface-300 dark:border-dark-surface-500"
  };

  const darkBgClasses = {
    base: "dark:bg-dark-surface-600 dark:text-dark-surface-400",
    tinted: "dark:bg-dark-surface-500 dark:text-dark-surface-300"
  };

  const divider = {
    base: "dark:border-e-dark-surface-700 dark:last:border-e-dark-surface-600",
    tinted: "dark:border-e-dark-surface-600 dark:last:border-e-dark-surface-500"
  };

  const textSizes = { sm: "sm:text-xs", md: "text-sm", lg: "sm:text-base" };
  const prefixPadding = { sm: "px-2", md: "px-3", lg: "px-4" };

  // size: explicit, inherited, default
  let _size = size || clampSize(group?.size) || "md";

  let divClass: string = twMerge(textSizes[_size], prefixPadding[_size], "text-light-surface-500 bg-light-surface-200", background ? darkBgClasses.tinted : darkBgClasses.base, background ? divider.tinted : divider.base, background ? borderClasses["tinted"] : borderClasses["base"], "inline-flex items-center border", group && "not-first:-ms-px", "first:rounded-s-lg last:rounded-e-lg", className);
</script>

<div {...restProps} class={divClass}>
  {@render children()}
</div>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children: any;
@props:class: string;
@props:size: any;
-->
