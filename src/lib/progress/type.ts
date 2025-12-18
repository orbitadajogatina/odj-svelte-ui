import type { HTMLAttributes } from "svelte/elements";
import type { EasingFunction } from "svelte/transition";

type ColorType = "primary" | "secondary" | "surface" | "gray" | "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose" | undefined;

interface ProgressbarProps extends HTMLAttributes<HTMLDivElement> {
  progress?: string | number;
  precision?: number;
  tweenDuration?: number;
  animate?: boolean;
  size?: string;
  labelInside?: boolean;
  labelOutside?: string;
  easing?: EasingFunction;
  color?: ColorType;
  div2Class?: string;
  oustsideSpanClass?: string;
  oustsideProgressClass?: string;
  labeloutsidedivClass?: string;
  divClass?: string;
}

interface ProgressRadialProps extends HTMLAttributes<HTMLDivElement> {
  progress?: string | number;
  precision?: number;
  tweenDuration?: number;
  animate?: boolean;
  size?: string;
  radius?: number;
  thickness?: number;
  startingPosition?: "top" | "right" | "bottom" | "left";
  labelInside?: boolean;
  labelOutside?: string;
  easing?: EasingFunction;
  color?: ColorType;
  baseClass?: string;
  labelClass?: string;
  backgroundClass?: string;
  foregroundClass?: string;
  outsideClass?: string;
  spanClass?: string;
  progressClass?: string;
}

export { type ProgressbarProps, type ProgressRadialProps };
