import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";

type TooltipColorType = "primary" | "secondary" | "gray" | "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose" | "default" | undefined;
type Placement = "top" | "top-start" | "top-end" | "bottom" | "bottom-start" | "bottom-end" | "left" | "left-start" | "left-end" | "right" | "right-start" | "right-end" | undefined;

interface TooltipProps extends HTMLAttributes<HTMLDivElement> {
  children: Snippet;
  triggeredBy: string;
  position?: Placement;
  color?: TooltipColorType;
  arrow?: boolean;
  offset?: number;
  open?: boolean;
  arrowClass?: string;
  transition?: any;
  transitionOptions?: object;
}

export { type TooltipProps };
