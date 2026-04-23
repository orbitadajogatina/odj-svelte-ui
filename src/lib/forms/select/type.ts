import type { Snippet } from "svelte";
import type { MultiSelectProps as MultiSelectParameters } from "svelte-multiselect";
import type { HTMLSelectAttributes } from "svelte/elements";

type SelectSize = "sm" | "md" | "lg";

type SelectOptionType<T> = {
  name: string | number;
  value: T;
};

interface SelectProps<T> extends Omit<HTMLSelectAttributes, "size"> {
  children?: Snippet;
  items?: SelectOptionType<T>[];
  underline?: boolean;
  size?: SelectSize;
  placeholder?: string;
  placeholderValue?: any;
  disableCustomSelect?: boolean;
}

interface MultiSelectProps<T> extends MultiSelectParameters {
  outerDivClass?: string;
  ulOptionsClass?: string;
  liOptionsClass?: string;
  ulSelectedClass?: string;
  liSelectedClass?: string;
  inputClass?: string;
}

export { type SelectProps, type SelectOptionType, type MultiSelectProps, type SelectSize };
