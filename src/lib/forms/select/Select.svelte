<script lang="ts" generics="T">
  import { type SelectProps as Props, select as selectCls } from ".";

  let { children, items, value = $bindable(), underline, size = "md", class: className, placeholder = "Choose option...", ...restProps }: Props<T> = $props();

  const selectStyle = $derived(selectCls({ underline, size, className }));
</script>

<select {...restProps} bind:value class={selectStyle}>
  {#if placeholder}
    <option disabled selected value={undefined}>{placeholder}</option>
  {/if}

  {#if items}
    {#each items as { value, name }}
      <option {value} class="text-dark-surface-950 required:invalid:text-dark-surface-400 dark:text-white">{name}</option>
    {/each}
  {/if}

  {#if children}
    {@render children()}
  {/if}
</select>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: 
-->
