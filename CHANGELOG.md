# Changelog

## 0.4.0 (2025-12-18)

### Features

- (ProgressRadial) New ProgressRadial component;

### Changes

- (Helper) Fixed colors.
- (Progress) Fixed bases colors and added `secondary` and `surface` colors.
- (Select) Placeholder value option should be undefined

## 0.3.0 (2025-09-28)

### Features

- (MultiSelect) New MultiSelect component;
- (Accordion) New design and 4 options to the new prop `accordionStyle`: `none`, `flush`, `outlined` and `cards`;

### Changes

- Updated packages;
- (InputAddon) Fixed colors.

## 0.2.6 (2025-04-19)

### Changes

- (Cards) Making rounded-xl the default round;

## 0.2.5 (2025-03-30)

### Changes

- (Cards) Fixed colors and new `clickable` prop;

## 0.2.4 (2025-03-11)

### Bug Fixes & Changes

- (Dropzone) Events are working now and fixed colors;
- (Toggle) Fixed colors;

## 0.2.3 (2025-03-09)

### Changes

- (uiHelpers) Add initial value to uiHelpers function, from [#47](https://github.com/shinokada/svelte-5-ui-lib/pull/47).
- (Nav & MegaMenu) Uncommented $inspect is now commented
- (Sidebar) Wrong border-radius on div when it's acting like tabs

## 0.2.2 (2025-03-07)

### Changes

- (Dropdown) New strategy to show `Dropdown`. See the docs.

## 0.2.1 (2025-03-04)

### Features

- (Header) New design;
- (Toggle) Focus is visible only with keyboard;
- (Dropdown) Modern design and `lock` prop to lock page scroll;
- (DropdownLi) Added `custom` prop if you want to take full control;
- (Avatar) Added fallback when image is loading or error and new border look;
- (Sidebar) Can not be opened or closed anymore. If you want this behaviour, this component should be inside the `Drawer` component. On mobile, `Sidebar` will look like tabs. And a lot of design tweaks has been made;
- (SidebarButton) Has been removed. Please use the `Drawer` component to maintain the old sidebar behaviour.

## 0.2.0 (2025-02-17)

### Features

- Migration to Tailwind v4;
- (Radio) Animated and new design;
- (Label) Added `default` color variant using `dark-surface` and `light-surface`;
- (Label) Added `disabled` prop.

### Bug Fixes & Changes

- (Select) Missing `disabled` classes.

## 0.1.1 (2025-02-11)

### Features

- (Buttons) New `loading` prop to disable the button and show a Spinner;
- (Textarea) New `autoexpand` prop to resize the element as the user type.

### Bug Fixes & Changes

- (Tabs) Wrong slider position and size when parent changes width;
- (Input:search) Better color of the X;
- (Button) Wrong colors on outlined light and alternative variations;
- (Legacy Components) My old modifications to the old Flowbite (Svelte 3) are now under `_legacy` instead of `elements`.
