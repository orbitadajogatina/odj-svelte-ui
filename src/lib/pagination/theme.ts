import { tv } from "tailwind-variants";

export const paginationItem = tv({
  base: "flex items-center font-medium justify-center",
  variants: {
    size: {
      default: "h-8 px-3 text-sm",
      large: "h-10 px-4 text-base"
    },
    active: {
      true: "text-primary-600 border border-light-surface-300 bg-primary-50 hover:bg-primary-100 hover:text-primary-700 dark:border-dark-surface-700 dark:bg-dark-surface-700 dark:text-white",
      false: "text-light-surface-500 bg-white hover:bg-light-surface-100 hover:text-light-surface-700 dark:bg-dark-surface-800 dark:border-dark-surface-700 dark:text-dark-surface-400 dark:hover:bg-dark-surface-700 dark:hover:text-white"
    },
    group: {
      true: "",
      false: "rounded-lg"
    },
    table: {
      true: "rounded",
      false: "border"
    }
  },
  compoundVariants: [
    {
      group: false,
      table: false,
      class: "rounded-lg"
    }
  ],
  defaultVariants: {
    size: "default",
    active: false,
    group: false,
    table: false
  }
});

export const pagination = tv({
  base: "flex flex-row items-start -space-x-px rtl:space-x-reverse",
  variants: {
    table: {
      true: "divide-x rtl:divide-x-reverse dark divide-light-surface-700 dark:divide-dark-surface-700",
      false: ""
    },
    size: {
      default: "",
      large: ""
    }
  },
  defaultVariants: {
    table: false,
    size: "default"
  }
});
