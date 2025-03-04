import { tv } from "tailwind-variants";

const avatar = tv({
  base: "relative flex items-center justify-center box-content bg-light-surface-100 dark:bg-dark-surface-600 text-light-surface-600 dark:text-dark-surface-300",
  variants: {
    cornerStyle: {
      rounded: "rounded-sm",
      circular: "rounded-full"
    },
    border: {
      true: "border-2 border-light-surface-300 dark:border-dark-surface-500",
      false: ""
    },
    stacked: {
      true: "border-2 -ms-4 border-white dark:border-dark-surface-800",
      false: ""
    },
    size: {
      xs: "w-6 h-6",
      sm: "w-8 h-8",
      md: "w-10 h-10",
      lg: "w-20 h-20",
      xl: "w-36 h-36"
    }
  },
  defaultVariants: {
    cornerStyle: "circular",
    border: false,
    stacked: false,
    size: "md"
  }
});

const fallback = tv({
  base: "relative flex items-center justify-center box-content bg-light-surface-100 dark:bg-dark-surface-600 text-light-surface-600 dark:text-dark-surface-300 uppercase",
  variants: {
    cornerStyle: {
      rounded: "rounded-sm",
      circular: "rounded-full"
    },
    border: {
      true: "border-2 border-light-surface-300 dark:border-dark-surface-500",
      false: ""
    },
    stacked: {
      true: "border-2 -ms-4 border-white dark:border-dark-surface-800",
      false: ""
    },
    size: {
      xs: "w-6 h-6",
      sm: "w-8 h-8",
      md: "w-10 h-10",
      lg: "w-20 h-20",
      xl: "w-36 h-36"
    }
  },
  defaultVariants: {
    cornerStyle: "circular",
    border: false,
    stacked: false,
    size: "md"
  }
});

export { avatar, fallback };
