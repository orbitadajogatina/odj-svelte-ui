<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import { getContext } from 'svelte';

  export let color: 'blue' | 'green' | 'red' | 'yellow' | 'purple' | 'default' | 'custom' = getContext('color');

  const colors = {
    default: 'bg-white dark:bg-neutral-800 dark:border-neutral-700',
    blue: 'bg-blue-500 border-blue-400',
    green: 'bg-green-500 border-green-400',
    red: 'bg-red-500 border-red-400',
    yellow: 'bg-yellow-500 border-yellow-400',
    purple: 'bg-purple-500 border-purple-400',
    custom: ''
  };

  const hoverColors = {
    default: 'hover:bg-neutral-50 dark:hover:bg-neutral-600',
    blue: 'hover:bg-blue-400',
    green: 'hover:bg-green-400',
    red: 'hover:bg-red-400',
    yellow: 'hover:bg-yellow-400',
    purple: 'hover:bg-purple-400',
    custom: ''
  };

  const stripColors = {
    default: 'odd:bg-white even:bg-neutral-50 dark:odd:bg-neutral-800 dark:even:bg-neutral-700',
    blue: 'odd:bg-blue-800 even:bg-blue-700 dark:odd:bg-blue-800 dark:even:bg-blue-700',
    green: 'odd:bg-green-800 even:bg-green-700 dark:odd:bg-green-800 dark:even:bg-green-700',
    red: 'odd:bg-red-800 even:bg-red-700 dark:odd:bg-red-800 dark:even:bg-red-700',
    yellow: 'odd:bg-yellow-800 even:bg-yellow-700 dark:odd:bg-yellow-800 dark:even:bg-yellow-700',
    purple: 'odd:bg-purple-800 even:bg-purple-700 dark:odd:bg-purple-800 dark:even:bg-purple-700',
    custom: ''
  };

  let trClass: string;
  $: trClass = twMerge([!getContext('noborder') && 'border-b last:border-b-0', colors[color], getContext('hoverable') && hoverColors[color], getContext('striped') && stripColors[color], $$props.class]);
</script>

<tr {...$$restProps} class={trClass} on:click on:contextmenu on:dblclick>
  <slot />
</tr>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let color: 'blue' | 'green' | 'red' | 'yellow' | 'purple' | 'default' | 'custom' = getContext('color');
-->
