import { tv } from "tailwind-variants";

export const modal = tv({
  slots: {
    base: "fixed top-0 start-0 end-0 h-modal md:inset-0 md:h-full z-50 w-full p-4 flex pointer-events-none",
    div: "flex relative w-full max-h-full",
    content: "w-full text-light-surface-800 dark:text-dark-surface-300 bg-white dark:bg-dark-surface-800 pointer-events-auto",
    backdrop: "fixed inset-0 z-50 bg-light-surface-900/50 dark:bg-light-surface-900/80 pointer-events-auto",
    header: "flex justify-between items-center pt-4 px-4 rounded-t-xl",
    footer: "flex items-center p-4 space-x-3 rtl:space-x-reverse rounded-b-xl border-t border-light-surface-300 dark:border-dark-surface-600 ",
    body: "p-4 space-y-4 flex-1 overflow-y-auto overscroll-contain",
    closeBtn: "absolute top-3 end-2.5",
    h3: "text-xl font-semibold text-light-surface-900 dark:text-white p-0"
  },
  variants: {
    // position: {
    //   fixed: { base: 'fixed' },
    //   absolute: { base: 'absolute' }
    // },
    position: {
      "top-left": { base: "justify-start items-start" },
      "top-center": { base: "justify-center items-start" },
      "top-right": { base: "justify-end items-start" },
      "center-left": { base: "justify-start items-center" },
      center: { base: "justify-center items-center" },
      "center-right": { base: "justify-end items-center" },
      "bottom-left": { base: "justify-start items-end" },
      "bottom-center": { base: "justify-center items-end" },
      "bottom-right": { base: "justify-end items-end" },
      default: { base: "justify-center items-center" }
    },
    size: {
      xs: { div: "max-w-md" },
      sm: { div: "max-w-lg" },
      md: { div: "max-w-2xl" },
      lg: { div: "max-w-4xl" },
      xl: { div: "max-w-7xl" }
    },
    backdrop: {
      true: { backdrop: "bg-light-surface-900/75 dark:bg-dark-surface-900/75" }
    },
    rounded: {
      true: { content: "rounded-xl" }
    },
    shadow: {
      true: { content: "shadow-md" }
    }
  }
});
