<script lang="ts">
  import Label from "../label/Label.svelte";
  import { type CheckboxProps as Props, checkbox } from ".";

  let { children, aria_describedby, color = "primary", custom, inline, tinted, rounded, group = $bindable([]), choices = [], checked = $bindable(false), classLabel, indeterminate, class: className, disabled = false, ...restProps }: Props = $props();

  const { base, label } = $derived(checkbox({ color, tinted, custom, rounded, inline }));
</script>

<style> 
  [type="checkbox"]:checked {
    background-image: url("data:image/svg+xml,%3csvg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 12'%3e %3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M1 5.917 5.724 10.5 15 1.5'/%3e %3c/svg%3e");
    background-color: currentColor;
    border-color: transparent;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 0.55em 0.55em;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  .dark [type="radio"]:checked {
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");
    background-size: 1em 1em;
  }

  [type="checkbox"]:indeterminate {
    background-image: url("data:image/svg+xml,%3csvg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 12'%3e %3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M0.5 6h14'/%3e %3c/svg%3e");
    background-color: currentColor;
    border-color: transparent;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 0.55em 0.55em;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
</style>

{#if choices.length > 0}
  {#each choices as { value, checkboxLabel }, i}
    <Label class={label({ class: classLabel })} for={`checkbox-${i}`} {disabled}>
      {checkboxLabel}
      <input id={`checkbox-${i}`} type="checkbox" {value} bind:group {disabled} {...restProps} class={base({ class: className })} />
      {#if children}
        {@render children()}
      {/if}
    </Label>
  {/each}
{:else}
  <Label class={label({ class: classLabel })} {disabled}>
    <input type="checkbox" bind:checked aria-describedby={aria_describedby} {indeterminate} {disabled} {...restProps} class={base({ class: className })} />
    {#if children}
      {@render children()}
    {/if}
  </Label>
{/if}

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children: any;
@props:aria_describedby: any;
@props:color: any = "primary";
@props:custom: any;
@props:inline: any;
@props:tinted: any;
@props:rounded: any;
@props:group: any = $bindable([]);
@props:choices: any = [];
@props:checked: any = $bindable(false);
@props:classLabel: any;
@props:indeterminate: any;
@props:class: string;
-->
