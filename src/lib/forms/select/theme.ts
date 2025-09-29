import { tv } from "tailwind-variants";

// block w-full disabled:cursor-not-allowed disabled:opacity-50 rtl:text-right text-sm p-2.5 border border-light-surface-300 dark:border-dark-surface-600 focus:border-primary-500 focus:ring-primary-500 dark:focus:border-primary-500 dark:focus:ring-primary-500 bg-light-surface-50 text-light-surface-900 dark:bg-dark-surface-700 dark:text-white dark:placeholder-dark-surface-400 outline-hidden focus:ring-1 rounded-lg

export const select = tv({
  base: "block w-full disabled:cursor-not-allowed disabled:opacity-50",
  variants: {
    underline: {
      true: "text-light-surface-500 bg-transparent border-0 border-b-2 border-light-surface-200 appearance-none dark:text-dark-surface-400 dark:border-dark-surface-700 focus:outline-hidden focus:ring-0 focus:border-light-surface-200 peer px-0!",
      false: "text-light-surface-900 bg-light-surface-50 border border-light-surface-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-dark-surface-700 dark:border-dark-surface-600 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:placeholder-dark-surface-400 required:invalid:text-dark-surface-400 outline-hidden focus:ring-1"
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

export const multiselect = tv({
  slots: {
    outerDiv: "!text-light-surface-900 !bg-light-surface-50 !border !border-light-surface-300 !rounded-lg !outline-none focus-within:!ring-1 focus-within:!ring-primary-500 focus-within:!border-primary-500 dark:!bg-dark-surface-700 dark:!border-dark-surface-600 dark:!placeholder-dark-surface-400 dark:!text-white dark:focus-within:!ring-primary-500 dark:focus-within:!border-primary-500 !px-2 !py-1 !min-h-[2.7rem]",
    ulOptions: "!bg-white dark:!bg-dark-surface-700 !max-h-40",
    ulSelected: "!flex !gap-1.5 !mx-2",
    liSelected: "!border-light-surface-200 dark:!border-dark-surface-700 !divide-light-surface-200 dark:!divide-dark-surface-700 !font-medium !text-xs !text-light-surface-800 dark:!text-dark-surface-300 !rounded !bg-light-surface-200 dark:!bg-dark-surface-600 !py-1 !px-2 !m-0",
    input: "placeholder:!text-light-surface-400"
  }
});
