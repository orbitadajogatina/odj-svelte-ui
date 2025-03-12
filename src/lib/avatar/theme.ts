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
      xs: "size-6",
      sm: "size-8",
      md: "size-10",
      lg: "size-20",
      xl: "size-36"
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
      xs: "size-6",
      sm: "size-8",
      md: "size-10",
      lg: "size-20",
      xl: "size-36"
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
