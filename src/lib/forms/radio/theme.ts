import { tv } from "tailwind-variants";

export const radio = tv({
  slots: {
    input: "mr-2 my-auto appearance-none size-4 shrink-0 cursor-default rounded-full transition-all duration-150 bg-light-surface-100 dark:bg-dark-surface-700 border border-light-surface-300 dark:border-dark-surface-600 hover:border-light-surface-400 checked:border-5 checked:bg-white focus-visible:ring-2 focus-visible:ring-white outline-hidden disabled:opacity-50",
    label: "flex items-center disabled:opacity-50 transition-all duration-150"
  },
  variants: {
    color: {
      // primary, secondary, gray, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
      primary: {
        input: "checked:border-primary-600 hover:checked:border-primary-600"
      },
      secondary: {
        input: "checked:border-secondary-600 hover:checked:border-secondary-600"
      },
      gray: {
        input: "checked:border-gray-600 hover:checked:border-gray-600"
      },
      red: { input: "checked:border-red-600 hover:checked:border-red-600" },
      orange: {
        input: "checked:border-orange-500 hover:checked:border-orange-500"
      },
      amber: {
        input: "checked:border-amber-600 hover:checked:border-amber-600"
      },
      yellow: {
        input: "checked:border-yellow-400 hover:checked:border-yellow-400"
      },
      lime: {
        input: "checked:border-lime-600 hover:checked:border-lime-600"
      },
      green: {
        input: "checked:border-green-600 hover:checked:border-green-600"
      },
      emerald: {
        input: "checked:border-emerald-600 hover:checked:border-emerald-600"
      },
      teal: {
        input: "checked:border-teal-600 hover:checked:border-teal-600"
      },
      cyan: {
        input: "checked:border-cyan-600 hover:checked:border-cyan-600"
      },
      sky: { input: "checked:border-sky-600 hover:checked:border-sky-600" },
      blue: {
        input: "checked:border-blue-600 hover:checked:border-blue-600"
      },
      indigo: {
        input: "checked:border-indigo-600 hover:checked:border-indigo-600"
      },
      violet: {
        input: "checked:border-violet-600 hover:checked:border-violet-600"
      },
      purple: {
        input: "checked:border-purple-600 hover:checked:border-purple-600"
      },
      fuchsia: {
        input: "checked:border-fuchsia-600 hover:checked:border-fuchsia-600"
      },
      pink: {
        input: "checked:border-pink-600 hover:checked:border-pink-600"
      },
      rose: {
        input: "checked:border-rose-600 hover:checked:border-rose-600"
      }
    },
    custom: {
      true: { input: "sr-only! peer" }
    }
  },
  defaultVariants: {
    color: "primary"
  }
});
