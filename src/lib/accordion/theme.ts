import { tv } from "tailwind-variants";

export const accordion = tv({
  base: "w-full text-light-surface-500 dark:text-dark-surface-400",
  variants: {
    accordionStyle: {
      none: "space-y-2",
      outlined: "space-y-2",
      card: "space-y-2",
      flush: "group"
    }
  }
});

export const accordionitem = tv({
  slots: {
    base: "border-light-surface-300 dark:border-dark-surface-800",
    button: "w-full flex items-center flex-row justify-between font-medium text-left px-4 py-3 outline-none rounded-lg focus-visible:ring-4 focus-visible:ring-dark-surface-400 focus-visible:dark:ring-dark-surface-600",
    content: "text-light-surface-700 dark:text-dark-surface-300 px-4 pb-3",
    active: "text-light-surface-900 dark:text-white",
    inactive: "text-light-surface-800 dark:text-dark-surface-200"
  },
  variants: {
    accordionStyle: {
      none: {
        base: "rounded-lg border-1",
        active: "bg-light-surface-100 dark:bg-dark-surface-800",
        inactive: "hover:bg-light-surface-50 dark:hover:bg-dark-surface-800"
      },
      outlined: {
        base: "rounded-lg border-1"
      },
      card: {
        base: "rounded-lg border-1 drop-shadow-sm",
        active: "bg-light-surface-100 dark:bg-dark-surface-900",
        inactive: "bg-light-surface-100 dark:bg-dark-surface-900"
      },
      flush: {
        base: "first:border-0 border-t py-0",
        button: "px-0",
        content: "px-0"
      }
    }
  },
  defaultVariants: {
    accordionStyle: "none",
    open: false
  }
});
