import { tv } from "tailwind-variants";

export const tabs = tv({
  slots: {
    base: "flex space-x-2 rtl:space-x-reverse",
    content: "rounded-lg mt-2",
    divider: "h-px bg-light-surface-200 dark:bg-dark-surface-700",
    active: "p-4 text-primary-600 bg-light-surface-100",
    inactive: "p-4 text-light-surface-500",
    slider: ""
  },
  variants: {
    tabStyle: {
      full: {
        base: "relative p-1 rounded-xl divide-none bg-light-surface-200 dark:bg-dark-surface-800 space-x-0 z-0",
        active: "rounded-lg relative z-20 p-2 w-full text-light-surface-800 dark:text-dark-surface-100 bg-transparent",
        inactive: "rounded-lg relative z-20 p-2 w-full text-light-surface-600 dark:text-dark-surface-400 bg-transparent",
        slider: "absolute rounded-lg transition-all duration-200 bg-white dark:bg-dark-surface-700 h-[80%] top-1/2 -translate-y-1/2 z-0"
      },
      pill: {
        active: "py-3 px-4 text-white bg-primary-600 rounded-lg border border-primary-600",
        inactive: "py-3 px-4 text-light-surface-500 rounded-lg hover:text-light-surface-900 hover:bg-light-surface-100 dark:text-dark-surface-400 dark:hover:bg-dark-surface-800 dark:hover:text-white border border-light-surface-200 dark:border-dark-surface-900"
      },
      underline: {
        base: "-mb-px relative",
        active: "text-primary-600 dark:text-primary-500 bg-transparent hover:border-light-surface-300 border-b-2 border-transparent",
        inactive: "hover:text-light-surface-700 dark:hover:text-dark-surface-300 text-light-surface-500 dark:text-dark-surface-400 bg-transparent hover:border-light-surface-300 border-b-2 border-transparent",
        slider: "absolute bottom-0 transition-all duration-200 border-b-2 border-primary-600 dark:border-primary-500 m-0! z-10"
      },
      none: {
        active: "dark:bg-dark-surface-800 dark:text-primary-500 rounded-t-lg",
        inactive: "hover:text-light-surface-600 hover:bg-light-surface-50 dark:text-dark-surface-400 dark:hover:bg-dark-surface-800 dark:hover:text-dark-surface-300 rounded-t-lg"
      }
    },
    hasDivider: {
      true: {}
    }
  },
  compoundVariants: [
    {
      tabStyle: ["pill"],
      hasDivider: true,
      class: {
        divider: "hidden"
      }
    }
  ],
  defaultVariants: {
    tabStyle: "none",
    hasDivider: true
  }
});

export const tabItem = tv({
  slots: {
    base: "group focus-within:z-10",
    button: "inline-block text-sm font-medium text-center disabled:cursor-not-allowed",
    content: "hidden"
  },
  variants: {
    open: {
      true: {
        button: "active"
      }
    },
    disabled: {
      true: {
        button: "cursor-not-allowed"
      }
    },
    tabStyle: {
      full: {
        base: "flex-1"
      },
      pill: {},
      underline: {},
      none: {}
    }
  },
  compoundVariants: [
    {
      open: true,
      class: {
        button: "" // We'll merge this with activeClasses from context
      }
    },
    {
      open: false,
      class: {
        button: "" // We'll merge this with inactiveClasses from context
      }
    }
  ],
  defaultVariants: {
    open: false,
    disabled: false
  }
});
