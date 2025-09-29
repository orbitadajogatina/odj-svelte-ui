<script lang="ts" generics="T">
  import MultiSelect from "svelte-multiselect";
  import { type MultiSelectProps as Props, multiselect } from ".";

  let {
    outerDivClass,
    ulOptionsClass,
    ulSelectedClass,
    liSelectedClass,
    inputClass,

    activeIndex = $bindable(null),
    activeOption = $bindable(null),
    form_input = $bindable(null),
    input = $bindable(null),
    invalid = $bindable(false),
    matchingOptions = $bindable([]),
    open = $bindable(false),
    options = $bindable(),
    outerDiv = $bindable(null),
    searchText = $bindable(``),
    maxSelect = null,
    selected = $bindable(options?.filter((opt) => opt instanceof Object && opt?.preselected).slice(0, maxSelect ?? undefined) ?? []),
    value = $bindable(null),

    ...restProps
  }: Props<T> = $props();
  const { outerDiv: outerDivCls, ulOptions, ulSelected, liSelected, input: inputCls } = $derived(multiselect());
</script>

<MultiSelect bind:selected bind:value bind:searchText bind:open bind:activeIndex bind:activeOption bind:invalid bind:input bind:outerDiv bind:form_input bind:options bind:matchingOptions {...restProps} outerDivClass={outerDivCls({ className: outerDivClass })} ulOptionsClass={ulOptions({ class: ulOptionsClass })} ulSelectedClass={ulSelected({ class: ulSelectedClass })} liSelectedClass={liSelected({ class: liSelectedClass })} inputClass={inputCls({ class: inputClass })} --sms-remove-btn-hover-color="white" />
