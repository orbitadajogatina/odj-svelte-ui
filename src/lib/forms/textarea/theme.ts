import { tv } from "tailwind-variants";

export const textarea = tv({
  slots: {
    base: "block text-sm bg-inherit dark:bg-inherit focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
    wrapper: "",
    innerWrapper: "",
    headerCls: "py-2 px-3 border-light-surface-200 dark:border-dark-surface-500",
    footerCls: "py-2 px-3 border-light-surface-200 dark:border-dark-surface-500"
  },
  variants: {
    cols: {
      false: {
        base: "w-full",
        wrapper: "w-full"
      }
    },
    wrapped: {
      false: { 
        base: "text-sm p-2.5 border border-light-surface-300 dark:border-dark-surface-600 focus:border-primary-500 focus:ring-primary-500 dark:focus:border-primary-500 dark:focus:ring-primary-500 bg-light-surface-50 text-light-surface-900 dark:bg-dark-surface-700 dark:text-white dark:placeholder-dark-surface-400 focus:ring-1 rounded-lg" 
      },
      true: { 
        base: "focus:ring-0 border-0 px-0", 
        wrapper: "rounded-lg bg-light-surface-50 dark:bg-dark-surface-600 text-light-surface-900 dark:placeholder-light-surface-400 dark:text-white border-light-surface-300 dark:border-dark-surface-600",
        innerWrapper: "py-2 px-4 bg-white dark:bg-dark-surface-800" 
      }
    },
    hasHeader: {
      true: {
        headerCls: "border-b"
      },
      false: {
        innerWrapper: "rounded-t-lg"
      }
    },
    hasFooter: {
      true: {
        footerCls: "border-t"
      },
      false: {
        innerWrapper: "rounded-b-lg"
      }
    }
  }
});
