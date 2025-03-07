<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import type { PsizeType, PweightType } from '../types';

  export let color: string = 'text-neutral-900 dark:text-white';
  export let height: 'normal' | 'relaxed' | 'loose' = 'normal';
  export let align: 'left' | 'center' | 'right' = 'left';
  export let justify: boolean = false;
  export let italic: boolean = false;
  export let firstupper: boolean = false;
  export let upperClass: string = 'first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-neutral-900 dark:first-letter:text-neutral-100 first-letter:mr-3 first-letter:float-left';
  export let opacity: number | undefined = undefined;
  export let whitespace: 'normal' | 'nowrap' | 'pre' | 'preline' | 'prewrap' = 'normal';
  export let size: PsizeType = 'base';
  export let space: 'tighter' | 'tight' | 'normal' | 'wide' | 'wider' | 'widest' | undefined = undefined;
  export let weight: PweightType = 'normal';

  const sizes = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
    '5xl': 'text-5xl',
    '6xl': 'text-6xl',
    '7xl': 'text-7xl',
    '8xl': 'text-8xl',
    '9xl': 'text-9xl'
  };
  const weights = {
    thin: 'font-thin',
    extralight: 'font-extralight',
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    extrabold: 'font-extrabold',
    black: 'font-black'
  };
  const spaces = {
    tighter: 'tracking-tighter',
    tight: 'tracking-tight',
    normal: 'tracking-normal',
    wide: 'tracking-wide',
    wider: 'tracking-wider',
    widest: 'tracking-widest'
  };

  const heights = {
    normal: 'leading-normal',
    relaxed: 'leading-relaxed',
    loose: 'leading-loose'
  };

  const aligns = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  const whitespaces = {
    normal: 'whitespace-normal',
    nowrap: 'whitespace-nowrap',
    pre: 'whitespace-pre',
    preline: 'whitespace-pre-line',
    prewrap: 'whitespace-pre-wrap'
  };

  let colorAndopacity = color
    .split(' ')
    .map((element) => element.trim())
    .map((element) => element + '/' + String(opacity))
    .join(' ');

  let classP = twMerge(size && sizes[size], (opacity && colorAndopacity) || (color && color), height && heights[height], weight && weights[weight], space && spaces[space], align && aligns[align], justify && 'text-justify', italic && 'italic', firstupper && upperClass, whitespace && whitespaces[whitespace], $$props.class);
</script>

<p {...$$restProps} class={classP}>
  <slot />
</p>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let color: string = 'text-neutral-900 dark:text-white';
@prop export let height: 'normal' | 'relaxed' | 'loose' = 'normal';
@prop export let align: 'left' | 'center' | 'right' = 'left';
@prop export let justify: boolean = false;
@prop export let italic: boolean = false;
@prop export let firstupper: boolean = false;
@prop export let upperClass: string = 'first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-neutral-900 dark:first-letter:text-neutral-100 first-letter:mr-3 first-letter:float-left';
@prop export let opacity: number | undefined = undefined;
@prop export let whitespace: 'normal' | 'nowrap' | 'pre' | 'preline' | 'prewrap' = 'normal';
@prop export let size: PsizeType = 'base';
@prop export let space: 'tighter' | 'tight' | 'normal' | 'wide' | 'wider' | 'widest' | undefined = undefined;
@prop export let weight: PweightType = 'normal';
-->
