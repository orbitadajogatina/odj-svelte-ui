<script lang="ts">
  import { twMerge } from 'tailwind-merge';

  export let btnClass: string = 'text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-hidden focus:ring-4 focus:ring-neutral-200 dark:focus:ring-neutral-700 rounded-lg text-sm p-2.5';
  export let size: 'sm' | 'md' | 'lg' = 'md';
  export let ariaLabel: string = 'Dark mode';

  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  const toggleTheme = () => {
    const isDark = window.document.documentElement.classList.toggle('dark');
    localStorage.setItem('color-theme', isDark ? 'dark' : 'light');
  };
</script>

<svelte:head>
  <script>
    if ('color-theme' in localStorage) {
      // explicit preference - overrides author's choice
      localStorage.getItem('color-theme') === 'dark' ? window.document.documentElement.classList.add('dark') : window.document.documentElement.classList.remove('dark');
    } else {
      // browser preference - does not overrides
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) window.document.documentElement.classList.add('dark');
    }
  </script>
</svelte:head>

<button on:click={toggleTheme} aria-label={ariaLabel} type="button" {...$$restProps} class={twMerge(btnClass, $$props.class)}>
  <span class="hidden dark:block">
    <slot name="lightIcon">
      <svg class={sizes[size]} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1
  0 100-2H3a1 1 0 000 2h1z"
          fill-rule="evenodd"
          clip-rule="evenodd" />
      </svg>
    </slot>
  </span>
  <span class="block dark:hidden">
    <slot name="darkIcon">
      <svg class={sizes[size]} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
      </svg>
    </slot>
  </span>
</button>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let btnClass: string = 'text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-hidden focus:ring-4 focus:ring-neutral-200 dark:focus:ring-neutral-700 rounded-lg text-sm p-2.5';
@prop export let size: 'sm' | 'md' | 'lg' = 'md';
@prop export let ariaLabel: string = 'Dark mode';
-->
