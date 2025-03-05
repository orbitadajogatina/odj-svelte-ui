import { tv } from "tailwind-variants";

export const navbar = tv({
  slots: {
    base: "z-50 bg-light-surface-100/80 dark:bg-dark-surface-900/80 backdrop-blur-lg text-light-surface-700 dark:text-dark-surface-400 border-light-surface-300 dark:border-dark-surface-600 border-b px-2 sm:px-4 py-2.5 w-full",
    container: "mx-auto flex flex-wrap items-center justify-between",
    toggleButton: "inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 mr-2 text-sm focus:outline-hidden text-light-surface-500 focus-visible:ring-light-surface-400 dark:focus-visible:ring-dark-surface-400 active:bg-light-surface-300 dark:active:bg-dark-surface-700/30 hover:bg-light-surface-200 dark:hover:bg-dark-surface-700/40 dark:hover:text-dark-surface-400",
    menuContainer: "w-full",
    activeLink: "block py-2 px-3 text-white bg-primary-700 rounded-sm dark:text-white",
    inactiveLink: "block py-2 px-3 text-light-surface-900 rounded-sm hover:bg-light-surface-100 dark:text-white dark:hover:bg-dark-surface-700 dark:hover:text-white"
  },
  variants: {
    fluid: {
      true: {
        container: "w-full"
      },
      false: {
        container: "container"
      }
    },
    breakPoint: {
      md: {
        container: "max-w-(--breakpoint-xl)",
        toggleButton: "md:hidden",
        menuContainer: "md:block md:w-auto"
      },
      lg: {
        container: "max-w-(--breakpoint-xl)",
        toggleButton: "lg:hidden",
        menuContainer: "lg:block lg:w-auto"
      },
      xl: {
        container: "max-w-(--breakpoint-xl)",
        toggleButton: "xl:hidden",
        menuContainer: "xl:block xl:w-auto"
      },
      xxl: {
        container: "w-full",
        toggleButton: "2xl:hidden",
        menuContainer: "2xl:block 2xl:w-auto"
      }
    },
    navStatus: {
      true: {
        menuContainer: "block"
      },
      false: {
        menuContainer: "hidden"
      }
    }
  },
  defaultVariants: {
    fluid: false,
    breakPoint: "md",
    navStatus: false
  }
});

export const navUl = tv({
  base: "bg-light-surface-200 dark:bg-dark-surface-800 text-light-surface-700 dark:text-dark-surface-400 rounded-xl border border-light-surface-300 dark:border-dark-surface-700 divide-light-surface-100 dark:divide-dark-surface-700 flex flex-col gap-2 p-2 mt-2 rtl:space-x-reverse",
  variants: {
    breakPoint: {
      md: "dark:md:bg-transparent md:bg-transparent md:text-sm md:font-medium md:border-0 md:mt-0 md:flex-row md:items-center md:gap-8 md:p-0",
      lg: "dark:lg:bg-transparent lg:bg-transparent lg:text-sm lg:font-medium lg:border-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8 lg:p-0",
      xl: "dark:xl:bg-transparent xl:bg-transparent xl:text-sm xl:font-medium xl:border-0 xl:mt-0 xl:flex-row xl:items-center xl:gap-8 lg:p-0",
      xxl: "dark:2xl:bg-transparent 2xl:bg-transparent 2xl:text-sm 2xl:font-medium 2xl:border-0 2xl:mt-0 2xl:flex-row 2xl:items-center 2xl:gap-8 2xl:p-0"
    }
  }
});

export const navbrand = tv({
  slots: {
    base: "flex items-center space-x-3 rtl:space-x-reverse",
    span: "self-center whitespace-nowrap text-2xl font-semibold text-primary-900 dark:text-white sm:text-3xl"
  }
});

export const navLi = tv({
  slots: {
    base: "list-none",
    link: "block py-2 px-4 rounded-lg text-light-surface-700 hover:text-light-surface-800 dark:text-dark-surface-400 dark:hover:text-white hover:bg-light-surface-50 dark:hover:bg-dark-surface-700 transition-all"
  },
  variants: {
    active: {
      true: {
        link: "bg-primary-700 hover:bg-primary-800 dark:hover:bg-primary-800 text-white hover:text-white dark:text-white"
      }
    },
    breakPoint: {
      md: {
        link: "md:p-0 md:hover:text-dark-surface-900 md:dark:hover:text-white md:hover:bg-transparent md:dark:hover:bg-transparent md:border-0"
      },
      lg: {
        link: "lg:p-0 lg:hover:text-dark-surface-900 lg:dark:hover:text-white lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:border-0"
      },
      xl: {
        link: "xl:p-0 xl:hover:text-dark-surface-900 xl:dark:hover:text-white xl:hover:bg-transparent xl:dark:hover:bg-transparent xl:border-0"
      },
      xxl: {
        link: "2xl:p-0 2xl:hover:text-dark-surface-900 2xl:dark:hover:text-white 2xl:hover:bg-transparent 2xl:dark:hover:bg-transparent 2xl:border-0"
      }
    }
  },
  compoundVariants: [
    {
      active: true,
      breakPoint: "md",
      class: {
        link: "md:bg-transparent md:text-primary-700 md:dark:text-primary-600 md:hover:text-primary-900 md:dark:hover:text-primary-500 md:font-medium md:p-0"
      }
    },
    {
      active: true,
      breakPoint: "lg",
      class: {
        link: "lg:bg-transparent lg:text-primary-700 lg:dark:text-primary-600 lg:hover:text-primary-900 lg:dark:hover:text-primary-500 lg:font-medium lg:p-0"
      }
    },
    {
      active: true,
      breakPoint: "xl",
      class: {
        link: "xl:bg-transparent xl:text-primary-700 xl:dark:text-primary-600 xl:hover:text-primary-900 xl:dark:hover:text-primary-500 xl:font-medium xl:p-0"
      }
    },
    {
      active: true,
      breakPoint: "xxl",
      class: {
        link: "2xl:bg-transparent 2xl:text-primary-700 2xl:dark:text-primary-6002 xl:hover:text-primary-900 2xl:dark:hover:text-primary-500 2xl:font-medium 2xl:p-0"
      }
    }
  ],
  defaultVariants: {
    breakPoint: "md",
    active: false
  }
});

export const navcontainer = tv({
  base: "mx-0 flex flex-wrap justify-between items-center max-w-none",
  variants: {
    fluid: {
      true: "w-full",
      false: "container"
    }
  }
});

export const navhamburger = tv({
  base: "inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-light-surface-500 hover:bg-light-surface-100 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-light-surface-200 dark:text-dark-surface-400 dark:hover:bg-dark-surface-700 dark:focus-visible:ring-dark-surface-600",
  variants: {
    breakPoint: {
      md: "md:hidden",
      lg: "lg:hidden",
      xl: "xl:hidden",
      xxl: "2xl:hidden"
    }
  }
});
