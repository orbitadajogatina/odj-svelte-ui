import type { Snippet } from "svelte";
import type { HTMLLabelAttributes } from "svelte/elements";
import { type ColorName } from "$lib/types";

interface LabelProps extends HTMLLabelAttributes {
  children: Snippet;
  color?: ColorName | "disabled" | "default";
  show?: boolean;
  class?: string;
  for?: string;
}

export { type LabelProps };
