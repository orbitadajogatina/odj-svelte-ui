import { tv } from "tailwind-variants";

export const toggle = tv({
  slots: {
    span: "me-3 shrink-0 bg-light-surface-200 rounded-full peer-focus-visible:ring-4 peer-checked:after:translate-x-full peer-checked:rtl:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:bg-white after:border-light-surface-300 after:border after:rounded-full after:transition-all dark:bg-dark-surface-600 dark:border-dark-surface-500 relative cursor-pointer",
    label: "flex items-center",
    input: "w-4 h-4 bg-light-surface-100 border-light-surface-300 dark:ring-offset-dark-surface-800 focus:ring-2 rounded-sm dark:bg-dark-surface-700 dark:border-dark-surface-600 sr-only peer"
  },
  variants: {
    disabled: {
      true: {
        span: "cursor-not-allowed",
        label: "cursor-not-allowed opacity-50"
      }
    },
    checked: {
      true: "",
      false: ""
    },
    color: {
      // primary, secondary, gray, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
      primary: {
        span: "peer-focus-visible:ring-primary-300 dark:peer-focus-visible:ring-primary-800 peer-checked:bg-primary-600"
      },
      secondary: {
        span: "peer-focus-visible:ring-secondary-300 dark:peer-focus-visible:ring-secondary-800 peer-checked:bg-secondary-600"
      },
      gray: {
        span: "peer-focus-visible:ring-gray-300 dark:peer-focus-visible:ring-gray-800 peer-checked:bg-gray-500"
      },
      red: {
        span: "peer-focus-visible:ring-red-300 dark:peer-focus-visible:ring-red-800 peer-checked:bg-red-600"
      },
      orange: {
        span: "peer-focus-visible:ring-orange-300 dark:peer-focus-visible:ring-orange-800 peer-checked:bg-orange-500"
      },
      amber: {
        span: "peer-focus-visible:ring-amber-300 dark:peer-focus-visible:ring-amber-800 peer-checked:bg-amber-600"
      },
      yellow: {
        span: "peer-focus-visible:ring-yellow-300 dark:peer-focus-visible:ring-yellow-800 peer-checked:bg-yellow-400"
      },
      lime: {
        span: "peer-focus-visible:ring-lime-300 dark:peer-focus-visible:ring-lime-800 peer-checked:bg-lime-500"
      },
      green: {
        span: "peer-focus-visible:ring-green-300 dark:peer-focus-visible:ring-green-800 peer-checked:bg-green-600"
      },
      emerald: {
        span: "peer-focus-visible:ring-emerald-300 dark:peer-focus-visible:ring-emerald-800 peer-checked:bg-emerald-600"
      },
      teal: {
        span: "peer-focus-visible:ring-teal-300 dark:peer-focus-visible:ring-teal-800 peer-checked:bg-teal-600"
      },
      cyan: {
        span: "peer-focus-visible:ring-cyan-300 dark:peer-focus-visible:ring-cyan-800 peer-checked:bg-cyan-600"
      },
      sky: {
        span: "peer-focus-visible:ring-sky-300 dark:peer-focus-visible:ring-sky-800 peer-checked:bg-sky-600"
      },
      blue: {
        span: "peer-focus-visible:ring-blue-300 dark:peer-focus-visible:ring-blue-800 peer-checked:bg-blue-600"
      },
      indigo: {
        span: "peer-focus-visible:ring-indigo-300 dark:peer-focus-visible:ring-indigo-800 peer-checked:bg-indigo-600"
      },
      violet: {
        span: "peer-focus-visible:ring-violet-300 dark:peer-focus-visible:ring-violet-800 peer-checked:bg-violet-600"
      },
      purple: {
        span: "peer-focus-visible:ring-purple-300 dark:peer-focus-visible:ring-purple-800 peer-checked:bg-purple-600"
      },
      fuchsia: {
        span: "peer-focus-visible:ring-fuchsia-300 dark:peer-focus-visible:ring-fuchsia-800 peer-checked:bg-fuchsia-600"
      },
      pink: {
        span: "peer-focus-visible:ring-pink-300 dark:peer-focus-visible:ring-pink-800 peer-checked:bg-pink-600"
      },
      rose: {
        span: "peer-focus-visible:ring-rose-300 dark:peer-focus-visible:ring-rose-800 peer-checked:bg-rose-600"
      }
    },
    size: {
      small: {
        span: "w-9 h-5 after:top-[2px] after:start-[2px] after:h-4 after:w-4"
      },
      default: {
        span: "w-11 h-6 after:top-0.5 after:start-[2px] after:h-5 after:w-5"
      },
      large: {
        span: "w-13 h-7 after:top-0.5 after:start-[2px] after:h-6 after:w-6"
      }
    }
  },
  defaultVariants: {
    color: "primary"
  }
});
