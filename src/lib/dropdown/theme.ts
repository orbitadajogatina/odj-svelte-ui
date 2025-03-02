import { tv } from "tailwind-variants";

export const dropdown = tv({
  slots: {
    base: "z-10 w-max mt-2 rounded-xl shadow-lg bg-white dark:bg-dark-surface-700 text-light-surface-700 dark:text-dark-surface-200 border border-light-surface-200 dark:border-dark-surface-600 divide-y divide-light-surface-100 dark:divide-dark-surface-600 overflow-hidden",
    backdrop: "fixed top-0 start-0 w-full h-full"
  }
});

export const dropdowndivider = tv({
  base: "my-1 h-px bg-light-surface-200 dark:bg-dark-surface-600"
});

export const dropdownHeader = tv({
  base: "px-4 py-3 rounded-t-xl text-sm text-light-surface-900 dark:text-white"
});

export const dropdownFooter = tv({
  base: "overflow-hidden rounded-b-xl"
});

export const dropdownli = tv({
  slots: {
    anchor: "cursor-pointer flex flex-row gap-3 items-center py-2 px-3 rounded-lg text-sm hover:bg-light-surface-200/70 dark:hover:bg-dark-surface-600 hover:text-light-surface-900 dark:hover:text-white",
    activeAnchor: "cursor-pointer flex flex-row gap-3 items-center py-2 px-3 rounded-lg text-sm bg-primary-700 dark:bg-primary-600 text-white dark:text-white hover:bg-primary-800 dark:hover:bg-primary-700"
  }
});

export const dropdownul = tv({
  base: "p-1 flex flex-col"
});
