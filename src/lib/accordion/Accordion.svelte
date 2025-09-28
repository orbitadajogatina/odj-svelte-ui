<script lang="ts">
  import { setContext } from "svelte";
  import { type AccordionProps as Props, accordion } from "./";

  let { children, accordionStyle = "none", activeClass, inactiveClass, isSingle = true, class: className, ...restProps }: Props = $props();

  const ctx = {
    accordionStyle,
    activeClass,
    inactiveClass,
    isSingle
  };

  setContext("ctx", ctx);

  const base = $derived(accordion({ accordionStyle, className }));
</script>

<div {...restProps} class={base}>
  {@render children()}
</div>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children: any;
@props:flush: any;
@props:activeClass: any;
@props:inactiveClass: any;
@props:isSingle: any = true;
@props:class: string;
-->
