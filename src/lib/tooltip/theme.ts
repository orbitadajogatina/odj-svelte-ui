import { tv } from "tailwind-variants";

export const tooltip = tv({
  slots: {
    base: "absolute py-1.5 px-3 border rounded-lg shadow-md text-sm z-50 pointer-events-none",
    arrowBase: "absolute"
  },
  variants: {
    color: {
      default: {
        base: "bg-light-surface-100 text-light-surface-800 border-light-surface-300 dark:border-light-surface-700 dark:text-white dark:bg-dark-surface-800",
        arrowBase: "fill-light-surface-300 dark:fill-dark-surface-700"
      },
      primary: {
        base: "bg-primary-600 text-white border-primary-800",
        arrowBase: "fill-primary-800"
      },
      secondary: {
        base: "bg-secondary-600 text-white border-secondary-800",
        arrowBase: "fill-secondary-800"
      },
      gray: {
        base: "bg-gray-600 text-white border-gray-800",
        arrowBase: "fill-gray-800"
      },
      red: {
        base: "bg-red-600 text-white border-red-800",
        arrowBase: "fill-red-800"
      },
      orange: {
        base: "bg-orange-600 text-white border-orange-800",
        arrowBase: "fill-orange-800"
      },
      amber: {
        base: "bg-amber-600 text-white border-amber-800",
        arrowBase: "fill-amber-800"
      },
      yellow: {
        base: "bg-yellow-600 text-white border-yellow-800",
        arrowBase: "fill-yellow-800"
      },
      lime: {
        base: "bg-lime-600 text-white border-lime-800",
        arrowBase: "fill-lime-800"
      },
      green: {
        base: "bg-green-600 text-white border-green-800",
        arrowBase: "fill-green-800"
      },
      emerald: {
        base: "bg-emerald-600 text-white border-emerald-800",
        arrowBase: "fill-emerald-800"
      },
      teal: {
        base: "bg-teal-600 text-white border-teal-800",
        arrowBase: "fill-teal-800"
      },
      cyan: {
        base: "bg-cyan-600 text-white border-cyan-800",
        arrowBase: "fill-cyan-800"
      },
      sky: {
        base: "bg-sky-600 text-white border-sky-800",
        arrowBase: "fill-sky-800"
      },
      blue: {
        base: "bg-blue-600 text-white border-blue-800",
        arrowBase: "fill-blue-800"
      },
      indigo: {
        base: "bg-indigo-600 text-white border-indigo-800",
        arrowBase: "fill-indigo-800"
      },
      violet: {
        base: "bg-violet-600 text-white border-violet-800",
        arrowBase: "fill-violet-800"
      },
      purple: {
        base: "bg-purple-600 text-white border-purple-800",
        arrowBase: "fill-purple-800"
      },
      fuchsia: {
        base: "bg-fuchsia-600 text-white border-fuchsia-800",
        arrowBase: "fill-fuchsia-800"
      },
      pink: {
        base: "bg-pink-600 text-white border-pink-800",
        arrowBase: "fill-pink-800"
      },
      rose: {
        base: "bg-rose-800 text-white border-rose-900",
        arrowBase: "fill-rose-900"
      }
    },
    position: {
      top: {},
      "top-start": {},
      "top-end": {},
      bottom: {},
      "bottom-start": {},
      "bottom-end": {},
      left: {},
      "left-start": {},
      "left-end": {},
      right: {},
      "right-start": {},
      "right-end": {}
    }
  },
  defaultVariants: {
    color: "default"
  }
});
