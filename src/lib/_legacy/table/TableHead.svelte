<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import { getContext } from 'svelte';

  export let theadClass: string = 'text-xs uppercase';
  export let defaultRow: boolean = true;

  let color: 'blue' | 'green' | 'red' | 'yellow' | 'purple' | 'default' | 'custom';
  color = getContext('color');
  let noborder: boolean = getContext('noborder');
  let striped: boolean = getContext('striped');
  let defaultBgColor = noborder || striped ? '' : 'bg-neutral-50 dark:bg-neutral-700';
  const bgColors = {
    default: defaultBgColor,
    blue: 'bg-blue-600',
    green: 'bg-green-600',
    red: 'bg-red-600',
    yellow: 'bg-yellow-600',
    purple: 'bg-purple-600',
    custom: ''
  };

  let textColor = color === 'default' ? 'text-neutral-700 dark:text-neutral-400' : color === 'custom' ? '' : 'text-white  dark:text-white';
  let borderColors = striped ? '' : color === 'default' ? 'border-neutral-700' : color === 'custom' ? '' : `border-${color}-400`;

  $: theadClassfinal = twMerge(theadClass, textColor, striped && borderColors, bgColors[color], $$props.class);
</script>

<thead {...$$restProps} class={theadClassfinal}>
  {#if defaultRow}
    <tr>
      <slot />
    </tr>
  {:else}
    <slot />
  {/if}
</thead>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let theadClass: string = 'text-xs uppercase';
@prop export let defaultRow: boolean = true;
-->
