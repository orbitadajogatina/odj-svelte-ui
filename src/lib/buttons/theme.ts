import { tv } from "tailwind-variants";

export const button = tv({
  base: "text-center font-medium inline-flex items-center justify-center active:brightness-[0.85]",
  variants: {
    color: {
      // "primary" | "dark" | "alternative" | "light" | "secondary" | "gray" | "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose"
      // text-white bg-primary-700 hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700
      primary: "text-white bg-primary-700 hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700 focus-visible:ring-primary-300 dark:focus-visible:ring-primary-800",
      dark: "text-white bg-dark-surface-800 hover:bg-dark-surface-900 dark:bg-dark-surface-800 dark:hover:bg-dark-surface-700 focus-visible:ring-dark-surface-300 dark:focus-visible:ring-dark-surface-700",
      alternative: "text-light-surface-900 bg-white border border-light-surface-200 hover:bg-light-surface-100 dark:text-light-surface-400 hover:text-primary-700 focus-visible:text-primary-700 dark:focus-visible:text-white dark:hover:text-white dark:hover:bg-dark-surface-700 dark:bg-dark-surface-800 dark:border-dark-surface-600 dark:hover:border-dark-surface-600 focus-visible:ring-dark-surface-200 dark:focus-visible:ring-dark-surface-700",
      light: "text-light-surface-900 bg-white border border-light-surface-300 hover:bg-light-surface-100 dark:bg-dark-surface-800 dark:text-white dark:border-dark-surface-600 dark:hover:bg-dark-surface-700 dark:hover:border-dark-surface-600 focus-visible:ring-light-surface-200 dark:focus-visible:ring-dark-surface-700",
      secondary: "text-white bg-secondary-700 hover:bg-secondary-800 dark:bg-secondary-600 dark:hover:bg-secondary-700 focus-visible:ring-secondary-300 dark:focus-visible:ring-secondary-800",
      gray: "text-white bg-gray-700 hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-700 focus-visible:ring-gray-300 dark:focus-visible:ring-gray-800",
      red: "text-white bg-red-700 hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700 focus-visible:ring-red-300 dark:focus-visible:ring-red-900",
      orange: "text-white bg-orange-700 hover:bg-orange-800 dark:bg-orange-600 dark:hover:bg-orange-700 focus-visible:ring-orange-300 dark:focus-visible:ring-orange-900",
      amber: "text-white bg-amber-700 hover:bg-amber-800 dark:bg-amber-600 dark:hover:bg-amber-700 focus-visible:ring-amber-300 dark:focus-visible:ring-amber-900",
      yellow: "text-white bg-yellow-400 hover:bg-yellow-500 focus-visible:ring-yellow-300 dark:focus-visible:ring-yellow-900",
      lime: "text-white bg-lime-700 hover:bg-lime-800 dark:bg-lime-600 dark:hover:bg-lime-700 focus-visible:ring-lime-300 dark:focus-visible:ring-lime-800",
      green: "text-white bg-green-700 hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-700 focus-visible:ring-green-300 dark:focus-visible:ring-green-800",
      emerald: "text-white bg-emerald-700 hover:bg-emerald-800 dark:bg-emerald-600 dark:hover:bg-emerald-700 focus-visible:ring-emerald-300 dark:focus-visible:ring-emerald-800",
      teal: "text-white bg-teal-700 hover:bg-teal-800 dark:bg-teal-600 dark:hover:bg-teal-700 focus-visible:ring-teal-300 dark:focus-visible:ring-teal-800",
      cyan: "text-white bg-cyan-700 hover:bg-cyan-800 dark:bg-cyan-600 dark:hover:bg-cyan-700 focus-visible:ring-cyan-300 dark:focus-visible:ring-cyan-800",
      sky: "text-white bg-sky-700 hover:bg-sky-800 dark:bg-sky-600 dark:hover:bg-sky-700 focus-visible:ring-sky-300 dark:focus-visible:ring-sky-800",
      blue: "text-white bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus-visible:ring-blue-300 dark:focus-visible:ring-blue-800",
      indigo: "text-white bg-indigo-700 hover:bg-indigo-800 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus-visible:ring-indigo-300 dark:focus-visible:ring-indigo-800",
      violet: "text-white bg-violet-700 hover:bg-violet-800 dark:bg-violet-600 dark:hover:bg-violet-700 focus-visible:ring-violet-300 dark:focus-visible:ring-violet-800",
      purple: "text-white bg-purple-700 hover:bg-purple-800 dark:bg-purple-600 dark:hover:bg-purple-700",
      fuchsia: "text-white bg-fuchsia-700 hover:bg-fuchsia-800 dark:bg-fuchsia-600 dark:hover:bg-fuchsia-700",
      pink: "text-white bg-pink-700 hover:bg-pink-800 dark:bg-pink-600 dark:hover:bg-pink-700",
      rose: "text-white bg-rose-700 hover:bg-rose-800 dark:bg-rose-600 dark:hover:bg-rose-700"
    },
    size: {
      xs: "px-3 py-2 text-xs",
      sm: "px-4 py-2 text-sm",
      md: "px-5 py-2.5 text-sm",
      lg: "px-5 py-3 text-base",
      xl: "px-6 py-3.5 text-base"
    },
    group: {
      true: "focus-visible:ring-2 focus-visible:z-10",
      false: "focus-visible:ring-4 focus-visible:outline-none"
    },
    outline: {
      true: "border !bg-transparent"
    },
    shadow: {
      true: "shadow-lg"
    },
    disabled: {
      true: "cursor-not-allowed opacity-50"
    },
    pill: {
      true: "rounded-full"
    },
    checked: {
      true: "",
      false: ""
    }
  },
  compoundVariants: [
    // {
    //   outline: true,
    //   class: 'border dark:border-gray-900'
    // },
    // dark, alternative, light
    // primary, secondary, gray, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
    {
      shadow: true,
      color: "dark",
      class: "shadow-dark-surface-500/50 dark:shadow-dark-surface-800/80"
    },
    {
      shadow: true,
      color: "alternative",
      class: "shadow-light-surface-500/50 dark:shadow-dark-surface-800/80"
    },
    {
      shadow: true,
      color: "light",
      class: "shadow-light-surface-500/50 dark:shadow-dark-surface-800/80"
    },
    {
      shadow: true,
      color: "primary",
      class: "shadow-primary-500/50 dark:shadow-primary-800/80"
    },
    {
      shadow: true,
      color: "secondary",
      class: "shadow-secondary-500/50 dark:shadow-secondary-800/80"
    },
    {
      shadow: true,
      color: "gray",
      class: "shadow-gray-500/50 dark:shadow-gray-800/80"
    },
    {
      shadow: true,
      color: "red",
      class: "shadow-red-500/50 dark:shadow-red-800/80"
    },
    {
      shadow: true,
      color: "orange",
      class: "shadow-orange-500/50 dark:shadow-orange-800/80"
    },
    {
      shadow: true,
      color: "amber",
      class: "shadow-amber-500/50 dark:shadow-amber-800/80"
    },
    {
      shadow: true,
      color: "yellow",
      class: "shadow-yellow-500/50 dark:shadow-yellow-800/80"
    },
    {
      shadow: true,
      color: "lime",
      class: "shadow-lime-500/50 dark:shadow-lime-800/80"
    },
    {
      shadow: true,
      color: "green",
      class: "shadow-green-500/50 dark:shadow-green-800/80"
    },
    {
      shadow: true,
      color: "emerald",
      class: "shadow-emerald-500/50 dark:shadow-emerald-800/80"
    },
    {
      shadow: true,
      color: "teal",
      class: "shadow-teal-500/50 dark:shadow-teal-800/80"
    },
    {
      shadow: true,
      color: "cyan",
      class: "shadow-cyan-500/50 dark:shadow-cyan-800/80"
    },
    {
      shadow: true,
      color: "sky",
      class: "shadow-sky-500/50 dark:shadow-sky-800/80"
    },
    {
      shadow: true,
      color: "blue",
      class: "shadow-blue-500/50 dark:shadow-blue-800/80"
    },
    {
      shadow: true,
      color: "indigo",
      class: "shadow-indigo-500/50 dark:shadow-indigo-800/80"
    },
    {
      shadow: true,
      color: "violet",
      class: "shadow-violet-500/50 dark:shadow-violet-800/80"
    },
    {
      shadow: true,
      color: "purple",
      class: "shadow-purple-500/50 dark:shadow-purple-800/80"
    },
    {
      shadow: true,
      color: "fuchsia",
      class: "shadow-fuchsia-500/50 dark:shadow-fuchsia-800/80"
    },
    {
      shadow: true,
      color: "pink",
      class: "shadow-pink-500/50 dark:shadow-pink-800/80"
    },
    {
      shadow: true,
      color: "rose",
      class: "shadow-rose-500/50 dark:shadow-rose-800/80"
    },
    {
      outline: true,
      color: "dark",
      class: "text-dark-surface-900 hover:text-white border border-dark-surface-800 hover:!bg-dark-surface-900 dark:border-dark-surface-600 dark:hover:text-white dark:hover:!bg-dark-surface-600"
    },
    {
      outline: true,
      color: "alternative",
      class: "text-light-surface-900 hover:text-white border hover:!bg-primary-800 dark:border-neutral-600 dark:hover:text-white dark:hover:!bg-neutral-600"
    },
    {
      outline: true,
      color: "light",
      class: "text-light-surface-900 bg-white dark:border-dark-surface-600 dark:hover:text-white dark:text-dark-surface-400 hover:!bg-light-surface-100 hover:dark:!bg-dark-surface-600"
    },
    {
      outline: true,
      color: "primary",
      class: "text-primary-700 hover:text-white border-primary-700 hover:!bg-primary-800 dark:border-primary-500 dark:text-primary-500 dark:hover:text-white dark:hover:!bg-primary-600"
    },
    { 
      outline: true,
      color: "secondary", 
      class: "text-secondary-700 hover:text-white border-secondary-700 hover:!bg-secondary-800 dark:border-secondary-500 dark:text-secondary-500 dark:hover:text-white dark:hover:!bg-secondary-600" 
    },
    { 
      outline: true,
      color: "gray", 
      class: "text-gray-700 hover:text-white border-gray-700 hover:!bg-gray-800 dark:border-gray-500 dark:text-gray-500 dark:hover:text-white dark:hover:!bg-gray-600" 
    },
    { 
      outline: true,
      color: "red", 
      class: "text-red-700 hover:text-white border-red-700 hover:!bg-red-800 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:!bg-red-600" 
    },
    { 
      outline: true,
      color: "orange", 
      class: "text-orange-700 hover:text-white border-orange-700 hover:!bg-orange-800 dark:border-orange-500 dark:text-orange-500 dark:hover:text-white dark:hover:!bg-orange-600" 
    },
    { 
      outline: true,
      color: "amber", 
      class: "text-amber-700 hover:text-white border-amber-700 hover:!bg-amber-800 dark:border-amber-500 dark:text-amber-500 dark:hover:text-white dark:hover:!bg-amber-600" 
    },
    { 
      outline: true,
      color: "yellow", 
      class: "text-yellow-700 hover:text-white border-yellow-700 hover:!bg-yellow-800 dark:border-yellow-500 dark:text-yellow-500 dark:hover:text-white dark:hover:!bg-yellow-600" 
    },
    { 
      outline: true,
      color: "lime", 
      class: "text-lime-700 hover:text-white border-lime-700 hover:!bg-lime-800 dark:border-lime-500 dark:text-lime-500 dark:hover:text-white dark:hover:!bg-lime-600" 
    },
    { 
      outline: true,
      color: "green", 
      class: "text-green-700 hover:text-white border-green-700 hover:!bg-green-800 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:!bg-green-600" 
    },
    { 
      outline: true,
      color: "emerald", 
      class: "text-emerald-700 hover:text-white border-emerald-700 hover:!bg-emerald-800 dark:border-emerald-500 dark:text-emerald-500 dark:hover:text-white dark:hover:!bg-emerald-600" 
    },
    { 
      outline: true,
      color: "teal", 
      class: "text-teal-700 hover:text-white border-teal-700 hover:!bg-teal-800 dark:border-teal-500 dark:text-teal-500 dark:hover:text-white dark:hover:!bg-teal-600" 
    },
    { 
      outline: true,
      color: "cyan", 
      class: "text-cyan-700 hover:text-white border-cyan-700 hover:!bg-cyan-800 dark:border-cyan-500 dark:text-cyan-500 dark:hover:text-white dark:hover:!bg-cyan-600" 
    },
    { 
      outline: true,
      color: "sky", 
      class: "text-sky-700 hover:text-white border-sky-700 hover:!bg-sky-800 dark:border-sky-500 dark:text-sky-500 dark:hover:text-white dark:hover:!bg-sky-600" 
    },
    { 
      outline: true,
      color: "blue", 
      class: "text-blue-700 hover:text-white border-blue-700 hover:!bg-blue-800 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:!bg-blue-600" 
    },
    { 
      outline: true,
      color: "indigo", 
      class: "text-indigo-700 hover:text-white border-indigo-700 hover:!bg-indigo-800 dark:border-indigo-500 dark:text-indigo-500 dark:hover:text-white dark:hover:!bg-indigo-600" 
    },
    { 
      outline: true,
      color: "violet", 
      class: "text-violet-700 hover:text-white border-violet-700 hover:!bg-violet-800 dark:border-violet-500 dark:text-violet-500 dark:hover:text-white dark:hover:!bg-violet-600" 
    },
    { 
      outline: true,
      color: "purple", 
      class: "text-purple-700 hover:text-white border-purple-700 hover:!bg-purple-800 dark:border-purple-500 dark:text-purple-500 dark:hover:text-white dark:hover:!bg-purple-600" 
    },
    { 
      outline: true,
      color: "fuchsia", 
      class: "text-fuchsia-700 hover:text-white border-fuchsia-700 hover:!bg-fuchsia-800 dark:border-fuchsia-500 dark:text-fuchsia-500 dark:hover:text-white dark:hover:!bg-fuchsia-600" 
    },
    { 
      outline: true,
      color: "pink", 
      class: "text-pink-700 hover:text-white border-pink-700 hover:!bg-pink-800 dark:border-pink-500 dark:text-pink-500 dark:hover:text-white dark:hover:!bg-pink-600" },
    { 
      outline: true,
      color: "rose", 
      class: "text-rose-700 hover:text-white border-rose-700 hover:!bg-rose-800 dark:border-rose-500 dark:text-rose-500 dark:hover:text-white dark:hover:!bg-rose-600" },
    {
      color: "alternative",
      group: true,
      class: "dark:bg-dark-surface-700 dark:text-white dark:border-dark-surface-700 dark:hover:border-dark-surface-600 dark:hover:bg-dark-surface-600"
    },
    {
      color: "alternative",
      group: true,
      class: "dark:bg-transparent dark:border-dark-surface-600 dark:hover:border-dark-surface-700"
    },
    {
      outline: true,
      color: "dark",
      group: true,
      class: "bg-dark-surface-900 border-dark-surface-800 dark:border-white dark:bg-dark-surface-600"
    },
    {
      outline: true,
      color: "dark",
      group: true,
      class: "dark:text-dark-surface-400 dark:border-dark-surface-700"
    },
    {
      outline: true,
      group: true,
      class: "[&:not(:first-child)]:-ms-px"
    },
    {
      color: "alternative",
      group: true,
      class: "[&:not(:first-child)]:-ms-px"
    },
    {
      color: "light",
      group: true,
      class: "[&:not(:first-child)]:-ms-px"
    },
    {
      group: true,
      pill: true,
      class: "rounded-none first:rounded-s-full last:rounded-e-full"
    },
    {
      group: true,
      pill: false,
      class: "rounded-none first:rounded-s-lg last:rounded-e-lg"
    },
    {
      group: false,
      pill: true,
      class: "rounded-full"
    },
    {
      group: false,
      pill: false,
      class: "rounded-lg"
    }
  ]
});

export const gradientButton = tv({
  slots: {
    base: "inline-flex items-center justify-center transition-all duration-75 ease-in text-white bg-gradient-to-r ",
    outlineWrapper: "inline-flex items-center justify-center w-full !border-0"
  },
  variants: {
    color: {
      blue: {
        base: "from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-blue-300 dark:focus:ring-blue-800"
      },
      green: {
        base: "from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-green-300 dark:focus:ring-green-800"
      },
      cyan: { base: "text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-cyan-300 dark:focus:ring-cyan-800" },
      teal: { base: "text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-teal-300 dark:focus:ring-teal-800" },
      lime: { base: "text-dark-surface-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-lime-300 dark:focus:ring-lime-800" },
      red: { base: "text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-red-300 dark:focus:ring-red-800" },
      pink: { base: "text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-pink-300 dark:focus:ring-pink-800" },
      purple: { base: "text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-purple-300 dark:focus:ring-purple-800" },
      purpleToBlue: { base: "text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800" },
      cyanToBlue: { base: "text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-cyan-300 dark:focus:ring-cyan-800" },
      greenToBlue: { base: "text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-green-200 dark:focus:ring-green-800" },
      purpleToPink: { base: "text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-purple-200 dark:focus:ring-purple-800" },
      pinkToOrange: { base: "text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-pink-200 dark:focus:ring-pink-800" },
      tealToLime: { base: "text-dark-surface-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l focus:ring-lime-200 dark:focus:ring-teal-700" },
      redToYellow: { base: "text-dark-surface-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-red-100 dark:focus:ring-red-400" }
    },
    outline: {
      true: {
        base: "p-0.5",
        outlineWrapper: "bg-white !text-dark-surface-900 dark:bg-dark-surface-900 dark:!text-white hover:bg-transparent hover:!text-inherit group-hover:!bg-opacity-0 group-hover:!text-inherit"
      }
    },
    pill: {
      true: {
        base: "rounded-full",
        outlineWrapper: "rounded-full"
      },
      false: {
        base: "rounded-lg",
        outlineWrapper: "rounded-lg"
      }
    },
    shadow: {
      true: {
        base: "shadow-lg"
      }
    },
    group: {
      true: "rounded-none",
      false: ""
    },
    disabled: {
      true: { base: "opacity-50 cursor-not-allowed" }
    }
  },
  compoundVariants: [
    {
      shadow: true,
      color: "blue",
      class: { base: "shadow-blue-500/50 dark:shadow-blue-800/80" }
    },
    {
      shadow: true,
      color: "green",
      class: { base: "shadow-green-500/50 dark:shadow-green-800/80" }
    },
    {
      shadow: true,
      color: "cyan",
      class: { base: "shadow-cyan-500/50 dark:shadow-cyan-800/80" }
    },
    {
      shadow: true,
      color: "teal",
      class: { base: "shadow-teal-500/50 dark:shadow-teal-800/80" }
    },
    {
      shadow: true,
      color: "lime",
      class: { base: "shadow-lime-500/50 dark:shadow-lime-800/80" }
    },
    {
      shadow: true,
      color: "red",
      class: { base: "shadow-red-500/50 dark:shadow-red-800/80" }
    },
    {
      shadow: true,
      color: "pink",
      class: { base: "shadow-pink-500/50 dark:shadow-pink-800/80" }
    },
    {
      shadow: true,
      color: "purple",
      class: { base: "shadow-purple-500/50 dark:shadow-purple-800/80" }
    },
    {
      shadow: true,
      color: "purpleToBlue",
      class: { base: "shadow-blue-500/50 dark:shadow-blue-800/80" }
    },
    {
      shadow: true,
      color: "cyanToBlue",
      class: { base: "shadow-cyan-500/50 dark:shadow-cyan-800/80" }
    },
    {
      shadow: true,
      color: "greenToBlue",
      class: { base: "shadow-green-500/50 dark:shadow-green-800/80" }
    },
    {
      shadow: true,
      color: "purpleToPink",
      class: { base: "shadow-purple-500/50 dark:shadow-purple-800/80" }
    },
    {
      shadow: true,
      color: "pinkToOrange",
      class: { base: "shadow-pink-500/50 dark:shadow-pink-800/80" }
    },
    {
      shadow: true,
      color: "tealToLime",
      class: { base: "shadow-lime-500/50 dark:shadow-teal-800/80" }
    },
    {
      shadow: true,
      color: "redToYellow",
      class: { base: "shadow-red-500/50 dark:shadow-red-800/80" }
    },
    {
      group: true,
      pill: true,
      class: "first:rounded-s-full last:rounded-e-full"
    },
    {
      group: true,
      pill: false,
      class: "first:rounded-s-lg last:rounded-e-lg"
    }
  ]
});
