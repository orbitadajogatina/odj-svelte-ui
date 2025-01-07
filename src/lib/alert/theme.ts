import { tv } from "tailwind-variants";

const alert = tv({
  base: "p-4 gap-3 text-sm",
  variants: {
    color: {
      // primary, secondary, gray, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
      primary: "bg-primary-100 dark:bg-primary-800/10 text-primary-800 dark:text-primary-400",
      secondary: "bg-secondary-100 dark:bg-secondary-800/10 text-secondary-800 dark:text-secondary-400",
      gray: "bg-gray-100 dark:bg-gray-800/10 text-gray-800 dark:text-gray-400",
      red: "bg-red-100 dark:bg-red-800/10 text-red-800 dark:text-red-400",
      orange: "bg-orange-100 dark:bg-orange-800/10 text-orange-800 dark:text-orange-400",
      amber: "bg-amber-100 dark:bg-amber-800/10 text-amber-800 dark:text-amber-400",
      yellow: "bg-yellow-100 dark:bg-yellow-800/10 text-yellow-800 dark:text-yellow-400",
      lime: "bg-lime-100 dark:bg-lime-800/10 text-lime-800 dark:text-lime-400",
      green: "bg-green-100 dark:bg-green-800/10 text-green-800 dark:text-green-400",
      emerald: "bg-emerald-100 dark:bg-emerald-800/10 text-emerald-800 dark:text-emerald-400",
      teal: "bg-teal-100 dark:bg-teal-800/10 text-teal-800 dark:text-teal-400",
      cyan: "bg-cyan-100 dark:bg-cyan-800/10 text-cyan-800 dark:text-cyan-400",
      sky: "bg-sky-100 dark:bg-sky-800/10 text-sky-800 dark:text-sky-400",
      blue: "bg-blue-100 dark:bg-blue-800/10 text-blue-800 dark:text-blue-400",
      indigo: "bg-indigo-100 dark:bg-indigo-800/10 text-indigo-800 dark:text-indigo-400",
      violet: "bg-violet-100 dark:bg-violet-800/10 text-violet-800 dark:text-violet-400",
      purple: "bg-purple-100 dark:bg-purple-800/10 text-purple-800 dark:text-purple-400",
      fuchsia: "bg-fuchsia-100 dark:bg-fuchsia-800/10 text-fuchsia-800 dark:text-fuchsia-400",
      pink: "bg-pink-100 dark:bg-pink-800/10 text-pink-800 dark:text-pink-400",
      rose: "bg-rose-100 dark:bg-rose-800/10 text-rose-800 dark:text-rose-400"
    },
    rounded: {
      true: "rounded-lg"
    },
    border: {
      true: "border"
    },
    icon: {
      true: "flex items-center"
    },
    dismissable: {
      true: "flex items-center"
    }
  },
  compoundVariants: [
    // primary, secondary, gray, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
    {
      border: true,
      color: "primary",
      class: "border-primary-500 dark:border-primary-200 divide-primary-500 dark:divide-primary-200"
    },
    {
      border: true,
      color: "secondary",
      class: "border-secondary-500 dark:border-secondary-200 divide-secondary-500 dark:divide-secondary-200"
    },
    {
      border: true,
      color: "gray",
      class: "border-gray-300 dark:border-gray-800 divide-gray-300 dark:divide-gray-800"
    },
    {
      border: true,
      color: "red",
      class: "border-red-300 dark:border-red-800 divide-red-300 dark:divide-red-800"
    },
    {
      border: true,
      color: "orange",
      class: "border-orange-300 dark:border-orange-800 divide-orange-300 dark:divide-orange-800"
    },
    {
      border: true,
      color: "amber",
      class: "border-amber-300 dark:border-amber-800 divide-amber-300 dark:divide-amber-800"
    },
    {
      border: true,
      color: "yellow",
      class: "border-yellow-300 dark:border-yellow-800 divide-yellow-300 dark:divide-yellow-800"
    },
    {
      border: true,
      color: "lime",
      class: "border-lime-300 dark:border-lime-800 divide-lime-300 dark:divide-lime-800"
    },
    {
      border: true,
      color: "green",
      class: "border-green-300 dark:border-green-800 divide-green-300 dark:divide-green-800"
    },
    {
      border: true,
      color: "emerald",
      class: "border-emerald-300 dark:border-emerald-800 divide-emerald-300 dark:divide-emerald-800"
    },
    {
      border: true,
      color: "teal",
      class: "border-teal-300 dark:border-teal-800 divide-teal-300 dark:divide-teal-800"
    },
    {
      border: true,
      color: "cyan",
      class: "border-cyan-300 dark:border-cyan-800 divide-cyan-300 dark:divide-cyan-800"
    },
    {
      border: true,
      color: "sky",
      class: "border-sky-300 dark:border-sky-800 divide-sky-300 dark:divide-sky-800"
    },
    {
      border: true,
      color: "blue",
      class: "border-blue-300 dark:border-blue-800 divide-blue-300 dark:divide-blue-800"
    },
    {
      border: true,
      color: "indigo",
      class: "border-indigo-300 dark:border-indigo-800 divide-indigo-300 dark:divide-indigo-800"
    },
    //  violet, purple, fuchsia, pink, rose
    {
      border: true,
      color: "violet",
      class: "border-violet-300 dark:border-violet-800 divide-violet-300 dark:divide-violet-800"
    },
    {
      border: true,
      color: "purple",
      class: "border-purple-300 dark:border-purple-800 divide-purple-300 dark:divide-purple-800"
    },
    {
      border: true,
      color: "fuchsia",
      class: "border-fuchsia-300 dark:border-fuchsia-800 divide-fuchsia-300 dark:divide-fuchsia-800"
    },
    {
      border: true,
      color: "pink",
      class: "border-pink-300 dark:border-pink-800 divide-pink-300 dark:divide-pink-800"
    },
    {
      border: true,
      color: "rose",
      class: "border-rose-300 dark:border-rose-800 divide-rose-300 dark:divide-rose-800"
    }
  ],
  defaultVariants: {
    color: "primary",
    rounded: true
  }
});

export { alert };
