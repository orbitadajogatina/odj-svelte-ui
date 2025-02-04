import type { Config } from "tailwindcss";
import colors from 'tailwindcss/colors';

export default {
  content: ["./src/**/*.{html,js,svelte,ts}", "./node_modules/flowbite-svelte-icons/**/*.{html,js,svelte,ts}", "./node_modules/svelte-animated-icons/**/*.{html,js,svelte,ts}"],

  darkMode: "selector",

  theme: {
    extend: {
      zIndex: {
        "100": "100"
      },
      colors: {
        primary: {
          50: '#FFF5F2',
          100: '#FFF1EE',
          200: '#FFE4DE',
          300: '#FFD5CC',
          400: '#FFBCAD',
          500: '#FE795D',
          600: '#EF562F',
          700: '#EB4F27',
          800: '#CC4522',
          900: '#A5371B'
        },
        secondary: colors.blue,
        "light-surface": colors.gray,
        "dark-surface": colors.gray,
      }
    }
  }
} as Config;
