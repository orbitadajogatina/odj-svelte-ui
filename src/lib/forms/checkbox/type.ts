import type { Snippet } from "svelte";
import type { HTMLInputAttributes } from "svelte/elements";

type CheckboxItem = {
  value: string;
  checkboxLabel?: string;
  isChecked?: boolean;
};

type ColorType = "primary" | "secondary" | "gray" | "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose" | undefined;

interface CheckboxProps extends HTMLInputAttributes {
  children?: Snippet;
  aria_describedby?: string;
  color?: ColorType;
  custom?: boolean;
  inline?: boolean;
  tinted?: boolean;
  rounded?: boolean;
  group?: (string | number)[];
  choices?: CheckboxItem[];
  classLabel?: string;
  indeterminate?: boolean;
  disabled?: boolean;
  class?: string;
}

export { type CheckboxProps, type CheckboxItem, type ColorType };
