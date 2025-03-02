import { tv } from "tailwind-variants";

// peer inline-flex size-[25px] items-center justify-center rounded-md border border-muted bg-foreground transition-all duration-150 ease-in-out active:scale-98 data-[state=unchecked]:border-border-input data-[state=unchecked]:bg-background data-[state=unchecked]:hover:border-dark-40

// w-4 h-4 bg-light-surface-100 border-light-surface-300 dark:ring-offset-dark-surface-800 focus-visible:ring-2 me-2 rounded-sm
export const checkbox = tv({
  slots: {
    base: "mr-2 my-auto appearance-none size-4 shrink-0 cursor-default rounded-sm transition-colors duration-150 bg-light-surface-100 dark:bg-dark-surface-700 border border-light-surface-300 dark:border-dark-surface-600 hover:border-light-surface-400 focus-visible:ring-2 focus-visible:ring-white outline-hidden disabled:opacity-50",
    label: "flex items-center disabled:opacity-50 transition-all duration-150"
  },
  variants: {
    color: {
      // primary, secondary, gray, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
      primary: {
        base: "text-primary-600"
      },
      secondary: {
        base: "text-secondary-600"
      },
      gray: {
        base: "text-gray-600"
      },
      red: {
        base: "text-red-600"
      },
      orange: {
        base: "text-orange-600"
      },
      amber: {
        base: "text-amber-600"
      },
      yellow: {
        base: "text-yellow-400"
      },
      lime: {
        base: "text-lime-700"
      },
      green: {
        base: "text-green-600"
      },
      emerald: {
        base: "text-emerald-600"
      },
      teal: {
        base: "text-teal-600"
      },
      cyan: {
        base: "text-cyan-600"
      },
      sky: {
        base: "text-sky-600"
      },
      blue: {
        base: "text-blue-700"
      },
      indigo: {
        base: "text-indigo-700"
      },
      violet: {
        base: "text-violet-600"
      },
      purple: {
        base: "text-purple-600"
      },
      fuchsia: {
        base: "text-fuchsia-600"
      },
      pink: {
        base: "text-pink-600"
      },
      rose: {
        base: "text-rose-600"
      }
    },
    tinted: {
      true: { base: "dark:bg-light-surface-600 dark:border-dark-surface-500" },
      false: { base: "dark:bg-light-surface-700 dark:border-dark-surface-600" }
    },
    custom: {
      true: { base: "sr-only peer" }
    },
    rounded: {
      true: { base: "rounded-sm" }
    },
    inline: {
      true: {
        label: "inline-flex",
        false: "flex items-center"
      }
    }
  },
  defaultVariants: {
    color: "primary"
  }
});
