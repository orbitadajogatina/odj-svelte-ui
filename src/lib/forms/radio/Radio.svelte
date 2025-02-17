<script lang="ts" generics="T">
  import Label from "../label/Label.svelte";
  import { type RadioProps as Props, radio } from ".";

  let { children, aria_describedby, labelClass, color = "primary", group = $bindable<T>(), value = $bindable<T>(), inputClass, custom = false, disabled = false, ...restProps }: Props<T> = $props();

  const { input, label } = $derived(radio({ color, custom }));
</script>

<Label class={label({ class: labelClass })} {disabled}>
  <input type="radio" bind:group {value} aria-describedby={aria_describedby} {disabled} aria-checked={group === value} class={input({ class: inputClass })} {...restProps} />
  {@render children()}
</Label>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: 
-->
