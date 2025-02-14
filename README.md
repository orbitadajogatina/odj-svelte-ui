# OdJ Svelte UI

This is a fork from [Flowbite for Svelte 5 with Runes](https://svelte-5-ui-lib.codewithshin.com/). I just made some changes that fits better my taste.

- [Original Docs](https://svelte-5-ui-lib.codewithshin.com/)

## Differences to Flowbite
- Migration to Tailwind v4;
- You can choose the "background" color instead of using the hard-coded `gray` color. You have to choose your colors defining `light-surface` and `dark-surface` on `app.css`;
- Some components have the design slightly different:
  - All components: instead of using focus-within, uses focus-visible;
  - Forms: When focus, border slightly thicker;
  - `Alert` has new colors;
  - `Button` has a new design for some variations and a response when clicked;
  - `Textarea` is fixed;
  - `Pagination` respect max-width;
  - `Modal` title has a better size, improved default animations with control of backdrop's animations and removed the outdated divider;
  - `Label` now has `space-y-1` by default;
  - `Input:Search` has a better X button for Chromium browsers;
- `Tabs` styles are fixed and introduced underline animations and a complete modern redesign for "Full" style;
- The `Tooltip` component received a rework;
- `Modal` has <kbd>Esc</kbd> to close again;
- `Button` has now a built-in loading state and can be controlled by the `loading` prop;
- `Textarea` can autoexpand as user type, control this by `autoexpand` and `maxRows` props;

## Installation

Install `svelte`, `tailwindcss`, and `odj-svelte-ui`, update dependencies and install the latest:

```sh
bunx sv create myapp // select to install tailwindcss
cd myapp
bun install
bun i -D odj-svelte-ui
bun dev
```

Add the following to app.css:
> 💡 TIP: Get colors' codes [here](https://tailwindcss.com/docs/colors#default-color-palette-reference).

```js
@import 'tailwindcss';

@custom-variant dark (&:where(.dark, .dark *));

@theme {
  --color-primary-50: #fff5f2;
  --color-primary-100: #fff1ee;
  --color-primary-200: #ffe4de;
  --color-primary-300: #ffd5cc;
  --color-primary-400: #ffbcad;
  --color-primary-500: #fe795d;
  --color-primary-600: #ef562f;
  --color-primary-700: #eb4f27;
  --color-primary-800: #cc4522;
  --color-primary-900: #a5371b;

  --color-secondary-50: #eff6ff;
  --color-secondary-100: #dbeafe;
  --color-secondary-200: #bfdbfe;
  --color-secondary-300: #93c5fd;
  --color-secondary-400: #60a5fa;
  --color-secondary-500: #3b82f6;
  --color-secondary-600: #2563eb;
  --color-secondary-700: #1d4ed8;
  --color-secondary-800: #1e40af;
  --color-secondary-900: #1e3a8a;
  --color-secondary-950: #172554;

  --color-light-surface-50: #f9fafb;
  --color-light-surface-100: #f3f4f6;
  --color-light-surface-200: #e5e7eb;
  --color-light-surface-300: #d1d5db;
  --color-light-surface-400: #9ca3af;
  --color-light-surface-500: #6b7280;
  --color-light-surface-600: #4b5563;
  --color-light-surface-700: #374151;
  --color-light-surface-800: #1f2937;
  --color-light-surface-900: #111827;
  --color-light-surface-950: #030712;

  --color-dark-surface-50: #f9fafb;
  --color-dark-surface-100: #f3f4f6;
  --color-dark-surface-200: #e5e7eb;
  --color-dark-surface-300: #d1d5db;
  --color-dark-surface-400: #9ca3af;
  --color-dark-surface-500: #6b7280;
  --color-dark-surface-600: #4b5563;
  --color-dark-surface-700: #374151;
  --color-dark-surface-800: #1f2937;
  --color-dark-surface-900: #111827;
  --color-dark-surface-950: #030712;
}

@layer base {
  *,
  ::after,
  ::before,
  ::backdrop,
  ::file-selector-button {
    border-color: var(--color-gray-200, currentColor);
  }

  button:not(:disabled),
  [role="button"]:not(:disabled) {
    cursor: pointer;
  }
}
```

## License

MIT
