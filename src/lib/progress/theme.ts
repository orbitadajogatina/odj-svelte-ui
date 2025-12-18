import { tv } from "tailwind-variants";

export const progressbar = tv({
  slots: {
    base: "w-full bg-light-surface-200 rounded-full dark:bg-dark-surface-700",
    labelInsideDiv: "text-primary-100 text-xs font-medium text-center leading-none rounded-full",
    insideDiv: "rounded-full",
    outsideDiv: "mb-1 flex justify-between",
    oustsideSpan: "text-base font-medium text-blue-700 dark:text-white",
    outsideProgress: "text-sm font-medium text-blue-700 dark:text-white"
  },
  variants: {
    color: {
      // 'primary' | 'gray' | 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose'
      primary: {
        labelInsideDiv: "bg-primary-600",
        insideDiv: "bg-primary-600"
      },
      secondary: {
        labelInsideDiv: "bg-secondary-600",
        insideDiv: "bg-secondary-600"
      },
      surface: {
        labelInsideDiv: "bg-light-surface-600 dark:bg-dark-surface-300",
        insideDiv: "bg-light-surface-600 dark:bg-dark-surface-300"
      },
      gray: {
        labelInsideDiv: "bg-gray-600 dark:bg-gray-300",
        insideDiv: "bg-gray-600 dark:bg-gray-300"
      },
      red: {
        labelInsideDiv: "bg-red-600 dark:bg-red-500",
        insideDiv: "bg-red-600 dark:bg-red-500"
      },
      orange: {
        labelInsideDiv: "bg-orange-600 dark:bg-orange-500",
        insideDiv: "bg-orange-600 dark:bg-orange-500"
      },
      amber: {
        labelInsideDiv: "bg-amber-600 dark:bg-amber-500",
        insideDiv: "bg-amber-600 dark:bg-amber-500"
      },
      yellow: {
        labelInsideDiv: "bg-yellow-400",
        insideDiv: "bg-yellow-400"
      },
      lime: {
        labelInsideDiv: "bg-lime-600 dark:bg-lime-500",
        insideDiv: "bg-lime-600 dark:bg-lime-500"
      },
      green: {
        labelInsideDiv: "bg-green-600 dark:bg-green-500",
        insideDiv: "bg-green-600 dark:bg-green-500"
      },
      emerald: {
        labelInsideDiv: "bg-emerald-600 dark:bg-emerald-500",
        insideDiv: "bg-emerald-600 dark:bg-emerald-500"
      },
      teal: {
        labelInsideDiv: "bg-teal-600 dark:bg-teal-500",
        insideDiv: "bg-teal-600 dark:bg-teal-500"
      },
      cyan: {
        labelInsideDiv: "bg-cyan-600 dark:bg-cyan-500",
        insideDiv: "bg-cyan-600 dark:bg-cyan-500"
      },
      sky: {
        labelInsideDiv: "bg-sky-600 dark:bg-sky-500",
        insideDiv: "bg-sky-600 dark:bg-sky-500"
      },
      blue: {
        labelInsideDiv: "bg-blue-600",
        insideDiv: "bg-blue-600"
      },
      indigo: {
        labelInsideDiv: "bg-indigo-600 dark:bg-indigo-500",
        insideDiv: "bg-indigo-600 dark:bg-indigo-500"
      },
      violet: {
        labelInsideDiv: "bg-violet-600 dark:bg-violet-500",
        insideDiv: "bg-violet-600 dark:bg-violet-500"
      },
      purple: {
        labelInsideDiv: "bg-purple-600 dark:bg-purple-500",
        insideDiv: "bg-purple-600 dark:bg-purple-500"
      },
      fuchsia: {
        labelInsideDiv: "bg-fuchsia-600 dark:bg-fuchsia-500",
        insideDiv: "bg-fuchsia-600 dark:bg-fuchsia-500"
      },
      pink: {
        labelInsideDiv: "bg-pink-600 dark:bg-pink-500",
        insideDiv: "bg-pink-600 dark:bg-pink-500"
      },
      rose: {
        labelInsideDiv: "bg-rose-600 dark:bg-rose-500",
        insideDiv: "bg-rose-600 dark:bg-rose-500"
      }
    },
    labelInside: {
      true: "",
      false: ""
    }
  },
  compoundVariants: [
    {
      labelInside: true,
      class: {
        base: "text-primary-100 text-xs font-medium text-center leading-none rounded-full",
        labelInsideDiv: "p-0.5"
      }
    },
    {
      labelInside: false,
      class: { base: "rounded-full" }
    }
  ],
  defaultVariants: {
    color: "primary",
    labelInside: false
  }
});

export const progressRadial = tv({
  slots: {
    base: "relative inline-flex",
    label: "absolute inset-0 flex items-center justify-center text-sm font-medium",
    background: "opacity-25",
    foreground: "transition-all",
    outside: "flex flex-col items-center mb-2 text-center",
    span: "text-base font-medium",
    progressCls: "text-sm font-medium ml-1"
  },
  variants: {
    color: {
      primary: {
        background: "stroke-primary-600",
        foreground: "stroke-primary-600"
      },
      secondary: {
        background: "stroke-secondary-600",
        foreground: "stroke-secondary-600"
      },
      surface: {
        background: "stroke-light-surface-600 dark:stroke-dark-surface-300",
        foreground: "stroke-light-surface-600 dark:stroke-dark-surface-300"
      },
      gray: {
        background: "stroke-gray-600 dark:stroke-gray-300",
        foreground: "stroke-gray-600 dark:stroke-gray-300"
      },
      red: {
        background: "stroke-red-600 dark:stroke-red-500",
        foreground: "stroke-red-600 dark:stroke-red-500"
      },
      orange: {
        background: "stroke-orange-600 dark:stroke-orange-500",
        foreground: "stroke-orange-600 dark:stroke-orange-500"
      },
      amber: {
        background: "stroke-amber-600 dark:stroke-amber-500",
        foreground: "stroke-amber-600 dark:stroke-amber-500"
      },
      yellow: {
        background: "stroke-yellow-400",
        foreground: "stroke-yellow-400"
      },
      lime: {
        background: "stroke-lime-600 dark:stroke-lime-500",
        foreground: "stroke-lime-600 dark:stroke-lime-500"
      },
      green: {
        background: "stroke-green-600 dark:stroke-green-500",
        foreground: "stroke-green-600 dark:stroke-green-500"
      },
      emerald: {
        background: "stroke-emerald-600 dark:stroke-emerald-500",
        foreground: "stroke-emerald-600 dark:stroke-emerald-500"
      },
      teal: {
        background: "stroke-teal-600 dark:stroke-teal-500",
        foreground: "stroke-teal-600 dark:stroke-teal-500"
      },
      cyan: {
        background: "stroke-cyan-600 dark:stroke-cyan-500",
        foreground: "stroke-cyan-600 dark:stroke-cyan-500"
      },
      sky: {
        background: "stroke-sky-600 dark:stroke-sky-500",
        foreground: "stroke-sky-600 dark:stroke-sky-500"
      },
      blue: {
        background: "stroke-blue-600",
        foreground: "stroke-blue-600"
      },
      indigo: {
        background: "stroke-indigo-600 dark:stroke-indigo-500",
        foreground: "stroke-indigo-600 dark:stroke-indigo-500"
      },
      violet: {
        background: "stroke-violet-600 dark:stroke-violet-500",
        foreground: "stroke-violet-600 dark:stroke-violet-500"
      },
      purple: {
        background: "stroke-purple-600 dark:stroke-purple-500",
        foreground: "stroke-purple-600 dark:stroke-purple-500"
      },
      fuchsia: {
        background: "stroke-fuchsia-600 dark:stroke-fuchsia-500",
        foreground: "stroke-fuchsia-600 dark:stroke-fuchsia-500"
      },
      pink: {
        background: "stroke-pink-600 dark:stroke-pink-500",
        foreground: "stroke-pink-600 dark:stroke-pink-500"
      },
      rose: {
        background: "stroke-rose-600 dark:stroke-rose-500",
        foreground: "stroke-rose-600 dark:stroke-rose-500"
      }
    },
    labelInside: {
      true: {}
    }
  }
});
