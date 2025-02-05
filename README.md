# OdJ Svelte UI

This is a fork from [Flowbite for Svelte 5 with Runes](https://svelte-5-ui-lib.codewithshin.com/). I just made some changes that fits better my taste.

- [Original Docs](https://svelte-5-ui-lib.codewithshin.com/)

## Differences to Flowbite
- You can choose the "background" color instead of using the hard-coded `gray` color. You have to choose your colors defining `light-surface` and `dark-surface` on `tailwind.config.js`.
- Some components have the design slightly different:
  - All components: instead of using focus-within, uses focus-visible;
  - Forms: When focus, border slightly thicker;
  - `Alert` has new colors;
  - `Button` has a new design for some variations and a response when clicked;
  - `Textarea` is fixed;
  - `Pagination` respect max-width;
  - `Modal` title has a better size, improved default animations with control of backdrop's animations and removed the outdated divider;
  - `Label` now has `space-y-1` by default
- `Tabs` styles are fixed and introduced underline animations and a complete modern redesign for "Full" style;
- The `Tooltip` component received a rework;
- `Modal` has <kbd>Esc</kbd> to close again;

## Installation

Install `svelte`, `tailwindcss`, and `odj-svelte-ui`, update dependencies and install the latest:

```sh
npx sv create myapp // select to install tailwindcss
cd myapp
pnpm install
pnpm run dev
pnpm i -D odj-svelte-ui
```

Add the following to tailwind.config.js:

```js
import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/odj-svelte-ui/**/*.{html,js,svelte,ts}'],
  darkMode: 'selector',
  theme: {
    extend: {
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
        "dark-surface": colors.gray
      }
    }
  },
} as Config;
```

## License

MIT
