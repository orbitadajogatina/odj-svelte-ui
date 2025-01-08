import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
import CloseButton from "./CloseButton.svelte";
import { tv } from "tailwind-variants";

const closeButtonVariants = tv({
  base: "focus:outline-none whitespace-normal",
  variants: {
    // primary, secondary, gray, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
    color: {
      primary: "text-primary-500 focus-visible:ring-primary-400 active:bg-primary-300 dark:active:bg-primary-800/10 hover:bg-primary-200 dark:hover:bg-primary-800/20 dark:hover:text-primary-400",
      secondary: "text-secondary-500 focus-visible:ring-secondary-400 active:bg-secondary-300 dark:active:bg-secondary-800/10 hover:bg-secondary-200 dark:hover:bg-secondary-800/20 dark:hover:text-secondary-400",
      surface: "text-light-surface-500 focus-visible:ring-light-surface-400 dark:focus-visible:ring-dark-surface-400 active:bg-light-surface-300 dark:active:bg-dark-surface-800/10 hover:bg-light-surface-200 dark:hover:bg-dark-surface-800/20 dark:hover:text-dark-surface-400",
      gray: "text-gray-500 focus-visible:ring-gray-400 active:bg-gray-300 dark:active:bg-gray-800/10 hover:bg-gray-200 dark:hover:bg-gray-800/20 dark:hover:text-gray-400",
      red: "text-red-500 focus-visible:ring-red-400 active:bg-red-300 dark:active:bg-red-800/10 hover:bg-red-200 dark:hover:bg-red-800/20 dark:hover:text-red-400",
      orange: "text-orange-500 focus-visible:ring-orange-400 active:bg-orange-300 dark:active:bg-orange-800/10 hover:bg-orange-200 dark:hover:bg-orange-800/20 dark:hover:text-orange-400",
      amber: "text-amber-500 focus-visible:ring-amber-400 active:bg-amber-300 dark:active:bg-amber-800/10 hover:bg-amber-200 dark:hover:bg-amber-800/20 dark:hover:text-amber-400",
      yellow: "text-yellow-500 focus-visible:ring-yellow-400 active:bg-yellow-300 dark:active:bg-yellow-800/10 hover:bg-yellow-200 dark:hover:bg-yellow-800/20 dark:hover:text-yellow-400",
      lime: "text-lime-500 focus-visible:ring-lime-400 active:bg-lime-300 dark:active:bg-lime-800/10 hover:bg-lime-200 dark:hover:bg-lime-800/20 dark:hover:text-lime-400",
      green: "text-green-500 focus-visible:ring-green-400 active:bg-green-300 dark:active:bg-green-800/10 hover:bg-green-200 dark:hover:bg-green-800/20 dark:hover:text-green-400",
      emerald: "text-emerald-500 focus-visible:ring-emerald-400 active:bg-emerald-300 dark:active:bg-emerald-800/10 hover:bg-emerald-200 dark:hover:bg-emerald-800/20 dark:hover:text-emerald-400",
      teal: "text-teal-500 focus-visible:ring-teal-400 active:bg-teal-300 dark:active:bg-teal-800/10 hover:bg-teal-200 dark:hover:bg-teal-800/20 dark:hover:text-teal-400",
      cyan: "text-cyan-500 focus-visible:ring-cyan-400 active:bg-cyan-300 dark:active:bg-cyan-800/10 hover:bg-cyan-200 dark:hover:bg-cyan-800/20 dark:hover:text-cyan-400",
      sky: "text-sky-500 focus-visible:ring-sky-400 active:bg-sky-300 dark:active:bg-sky-800/10 hover:bg-sky-200 dark:hover:bg-sky-800/20 dark:hover:text-sky-400",
      blue: "text-blue-500 focus-visible:ring-blue-400 active:bg-blue-300 dark:active:bg-blue-800/10 hover:bg-blue-200 dark:hover:bg-blue-800/20 dark:hover:text-blue-400",
      indigo: "text-indigo-500 focus-visible:ring-indigo-400 active:bg-indigo-300 dark:active:bg-indigo-800/10 hover:bg-indigo-200 dark:hover:bg-indigo-800/20 dark:hover:text-indigo-400",
      violet: "text-violet-500 focus-visible:ring-violet-400 active:bg-violet-300 dark:active:bg-violet-800/10 hover:bg-violet-200 dark:hover:bg-violet-800/20 dark:hover:text-violet-400",
      purple: "text-purple-500 focus-visible:ring-purple-400 active:bg-purple-300 dark:active:bg-purple-800/10 hover:bg-purple-200 dark:hover:bg-purple-800/20 dark:hover:text-purple-400",
      fuchsia: "text-fuchsia-500 focus-visible:ring-fuchsia-400 active:bg-fuchsia-300 dark:active:bg-fuchsia-800/10 hover:bg-fuchsia-200 dark:hover:bg-fuchsia-800/20 dark:hover:text-fuchsia-400",
      pink: "text-pink-500 focus-visible:ring-pink-400 active:bg-pink-300 dark:active:bg-pink-800/10 hover:bg-pink-200 dark:hover:bg-pink-800/20 dark:hover:text-pink-400",
      rose: "text-rose-500 focus-visible:ring-rose-400 active:bg-rose-300 dark:active:bg-rose-800/10 hover:bg-rose-200 dark:hover:bg-rose-800/20 dark:hover:text-rose-400"
    },
    size: {
      xs: "m-0.5 rounded-sm focus-visible:ring-1 p-0.5",
      sm: "m-0.5 rounded focus-visible:ring-1 p-0.5",
      md: "m-0.5 rounded-lg focus-visible:ring-2 p-1.5",
      lg: "m-0.5 rounded-lg focus-visible:ring-2 p-2.5"
    }
  },
  defaultVariants: {
    color: "surface",
    size: "md"
  },
  slots: {
    svg: ""
  },
  compoundVariants: [
    {
      size: "xs",
      class: {
        svg: "w-3 h-3"
      }
    },
    {
      size: "sm",
      class: {
        svg: "w-3.5 h-3.5"
      }
    },
    {
      size: ["md", "lg"],
      class: {
        svg: "w-5 h-5"
      }
    }
  ]
});

type ColorType = "primary" | "secondary" | "surface" | "gray" | "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose" | undefined;
type SizeType = "md" | "xs" | "sm" | "lg" | undefined;

interface CloseButtonProps {
  color?: ColorType;
  onclick?: () => void;
  name?: string;
  ariaLabel?: string;
  size?: SizeType;
  href?: string;
  class?: string;
}

export { CloseButton, closeButtonVariants, type CloseButtonProps };
