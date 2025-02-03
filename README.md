# OdJ Svelte UI

This is a fork from [Flowbite for Svelte 5 with Runes](https://svelte-5-ui-lib.codewithshin.com/). I just made some changes that fits better my taste.

- [Original Docs](https://svelte-5-ui-lib.codewithshin.com/)

## Differences to Flowbite
- Some components have the design slightly different:
  - All components: instead of using focus-within, uses focus-visible;
  - Forms: When focus, border slightly thicker;
  - The `Tooltip` is completely different;
  - Some small design changes on `Alert`, `Button`, `Textarea`, `Pagination`, `Modal`;
  - New `Tabs` styles;

- You can choose the "background" color instead of using the hard-coded `gray` color. You have to choose your colors defining `light-surface` and `dark-surface` on `tailwind.config.js`.

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

export default {
  content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/odj-svelte-ui/**/*.{html,js,svelte,ts}'],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        primary: { 50: '#FFF5F2', 100: '#FFF1EE', 200: '#FFE4DE', 300: '#FFD5CC', 400: '#FFBCAD', 500: '#FE795D', 600: '#EF562F', 700: '#EB4F27', 800: '#CC4522', 900: '#A5371B' },
        secondary: { "50": "#f0f9ff", "100": "#e0f2fe", "200": "#bae6fd", "300": "#7dd3fc", "400": "#38bdf8", "500": "#0ea5e9", "600": "#0284c7", "700": "#0369a1", "800": "#075985", "900": "#0c4a6e" },
        "light-surface": colors.gray,
        "dark-surface": colors.gray
      }
    }
  },
} as Config;
```

## License

MIT
