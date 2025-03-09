import { tv } from "tailwind-variants";

export const sidebar = tv({
  slots: {
    base: "top-0 left-0 z-10 min-w-full",
    div: "overflow-y-auto p-2 rounded-xl bg-light-surface-100 dark:bg-dark-surface-800",
    active: "cursor-pointer flex items-center p-2 rounded-lg text-base font-normal text-light-surface-900 dark:text-white bg-light-surface-300 dark:bg-dark-surface-700 hover:bg-light-surface-300/50 dark:hover:bg-dark-surface-600",
    nonactive: "cursor-pointer flex items-center p-2 rounded-lg text-base font-normal text-light-surface-700 dark:text-dark-surface-400 hover:bg-light-surface-300/50 dark:hover:bg-dark-surface-600 hover:text-light-surface-800 dark:hover:text-dark-surface-200"
  },
  variants: {
    position: {
      fixed: { base: "fixed" },
      absolute: { base: "absolute" },
      static: { base: "static" }
    },
    breakpoint: {
      none: { base: "min-w-64 h-full", div: "h-full sm:rounded-none" },
      sm: { base: "sm:min-w-64 sm:h-full", div: "sm:h-full sm:rounded-none" },
      md: { base: "md:min-w-64 md:h-full", div: "md:h-full md:rounded-none" },
      lg: { base: "lg:min-w-64 lg:h-full", div: "lg:h-full lg:rounded-none" },
      xl: { base: "xl:min-w-64 xl:h-full", div: "xl:h-full xl:rounded-none" },
      "2xl": { base: "2xl:min-w-64 2xl:h-full", div: "2xl:h-full 2xl:rounded-none" }
    }
  }
});

export const sidebargroup = tv({
  slots: {
    base: "flex flex-row gap-2"
  },
  variants: {
    breakpoint: {
      none: { base: "flex-col" },
      sm: { base: "sm:flex-col" },
      md: { base: "md:flex-col" },
      lg: { base: "lg:flex-col" },
      xl: { base: "xl:flex-col" },
      "2xl": { base: "2xl:flex-col" }
    },
    border: {
      true: "pt-4 mt-4 border-t border-light-surface-200 dark:border-dark-surface-700"
    }
  }
});

export const sidebarcta = tv({
  slots: {
    base: "p-4 mt-2 bg-primary-50 rounded-lg dark:bg-primary-900",
    div: "flex items-center mb-3",
    span: "bg-primary-100 text-primary-800 text-sm font-semibold me-2 px-2.5 py-0.5 rounded-sm dark:bg-primary-200 dark:text-primary-900"
  }
});

export const sitebarbrand = tv({
  slots: {
    base: "flex items-center px-2 my-2",
    img: "h-6 me-3 sm:h-7",
    span: "self-center text-xl font-semibold whitespace-nowrap dark:text-white"
  }
});

export const sidebardropdownwrapper = tv({
  slots: {
    base: "",
    btn: "group w-full cursor-pointer flex items-center p-2 rounded-lg text-base font-normal text-light-surface-700 dark:text-dark-surface-400 hover:bg-light-surface-300/50 dark:hover:bg-dark-surface-600 hover:text-light-surface-800 dark:hover:text-dark-surface-200",
    span: "flex-1 ms-3 text-left whitespace-nowrap",
    svg: "h-3 w-3 text-light-surface-700 dark:text-dark-surface-400 group-hover:text-light-surface-800 dark:group-hover:text-dark-surface-200",
    ul: "py-2 space-y-2"
  }
});
