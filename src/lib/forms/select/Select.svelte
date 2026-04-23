<script lang="ts" generics="T">
  import { browser } from "$app/environment";
  import { type SelectProps as Props, select as selectCls } from ".";

  let { children, items, value = $bindable(), underline, size = "md", class: className, placeholder = "Choose option...", placeholderValue = undefined, disableCustomSelect = false, ...restProps }: Props<T> = $props();

  const customSelect = $derived(browser ? !disableCustomSelect && CSS.supports("appearance: base-select") : !disableCustomSelect);
  const selectStyle = $derived(selectCls({ underline, size, customSelect, className }));
</script>

<select class={selectStyle} class:custom-select={customSelect} bind:value {...restProps}>
  {#if customSelect}
    <!-- svelte-ignore node_invalid_placement_ssr -->
    <button class="flex w-full items-center gap-2.5 justify-between min-w-0" aria-label="Select Picker">
      <selectedcontent class="truncate"></selectedcontent>
      <span class="picker transition-rotate duration-400 shrink-0">
        <svg class="text-light-surface-800 size-3 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
        </svg>
      </span>
    </button>
  {/if}

  {#if placeholder}
    <option disabled selected value={placeholderValue} class={[customSelect && "flex flex-row items-center gap-3 rounded-lg rounded-md px-3 py-2 text-sm"]}>{placeholder}</option>
  {/if}

  {#if items}
    {#each items as { value, name }}
      <option {value} class={["text-dark-surface-950 required:invalid:text-dark-surface-400 dark:text-white", customSelect && "hover:bg-light-surface-200/70 dark:hover:bg-dark-surface-600 hover:text-light-surface-900 flex cursor-pointer flex-row items-center gap-3 rounded-lg rounded-md px-3 py-2 text-sm dark:hover:text-white"]}>
        {name}
      </option>
    {/each}
  {/if}

  {#if children}
    {@render children()}
  {/if}
</select>

<style>
  select.custom-select {
    &,
    &::picker(select) {
      appearance: base-select;
    }

    &::picker-icon {
      display: none;
    }
    .picker {
      rotate: 180deg;
      :open & {
        rotate: 0deg;
      }
    }

    &::picker(select) {
      border-radius: var(--radius-lg);
      padding: calc(var(--spacing) * 1);
      margin-block: 0.5rem;
      border: none;
      box-shadow:
        0 10px 15px -3px rgba(0, 0, 0, 0.1),
        0 4px 6px -2px rgba(0, 0, 0, 0.05); /* shadow-lg */
      background-color: #ffffff;
      color: var(--color-light-surface-700);
      border: 1px solid var(--color-light-surface-200);
    }

    :global(.dark &::picker(select)) {
      background-color: var(--color-dark-surface-700);
      color: var(--color-dark-surface-200);
      border-color: var(--color-dark-surface-600);
    }

    &:has(option:disabled:checked) button {
      color: var(--color-light-surface-700);

      :global(.dark) & {
        color: var(--color-dark-surface-400);
      }
    }
  }
</style>
