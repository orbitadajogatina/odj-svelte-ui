import { tv } from "tailwind-variants";

// block w-full disabled:cursor-not-allowed disabled:opacity-50 rtl:text-right text-sm p-2.5 border border-light-surface-300 dark:border-dark-surface-600 focus:border-primary-500 focus:ring-primary-500 dark:focus:border-primary-500 dark:focus:ring-primary-500 bg-light-surface-50 text-light-surface-900 dark:bg-dark-surface-700 dark:text-white dark:placeholder-dark-surface-400 outline-none focus:ring-1 rounded-lg

export const select = tv({
  base: "block w-full",
  variants: {
    underline: {
      true: "text-light-surface-500 bg-transparent border-0 border-b-2 border-light-surface-200 appearance-none dark:text-dark-surface-400 dark:border-dark-surface-700 focus:outline-none focus:ring-0 focus:border-light-surface-200 peer !px-0",
      false: "text-light-surface-900 bg-light-surface-50 border border-light-surface-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-dark-surface-700 dark:border-dark-surface-600 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:placeholder-dark-surface-400 required:invalid:text-dark-surface-400 outline-none focus:ring-1"
    },
    size: {
      sm: "text-sm p-2",
      md: "text-sm p-2.5",
      lg: "text-base py-3 px-4"
    }
  },
  defaultVariants: {
    underline: false,
    size: "md"
  }
});
