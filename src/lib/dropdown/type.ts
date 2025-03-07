import type { Snippet } from "svelte";
import type { ParamsType, TransitionFunc } from "../types";
import type { HTMLAttributes, HTMLAnchorAttributes } from "svelte/elements";

type Placement = "top" | "top-start" | "top-end" | "bottom" | "bottom-start" | "bottom-end" | "left" | "left-start" | "left-end" | "right" | "right-start" | "right-end" | undefined;

interface DropdownProps extends HTMLAttributes<HTMLDivElement> {
  children: Snippet;
  open: boolean;
  triggeredBy: string;
  position?: Placement;
  offset?: number;
  divClass?: string;
  footerClass?: string;
  headerClass?: string;
  ulClass?: string;
  transitionIn?: TransitionFunc;
  transitionInParams?: ParamsType;
  transitionOut?: TransitionFunc;
  transitionOutParams?: ParamsType;
  activeUrl?: string;
  lock?: boolean;
}

interface DropdownDividerProps extends HTMLAttributes<HTMLDivElement> {
  class?: string;
}

interface DropdownHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: Snippet;
}

interface DropdownFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: Snippet;
}

interface DropdownLiProps extends HTMLAnchorAttributes {
  children: Snippet;
  aClass?: string;
  href?: string;
  activeClass?: string;
  liClass?: string;
  custom?: boolean;
}

interface DropdownUlProps extends HTMLAttributes<HTMLUListElement> {
  children: Snippet;
}

export { type DropdownProps, type DropdownDividerProps, type DropdownLiProps, type DropdownUlProps, type DropdownHeaderProps, type DropdownFooterProps };
