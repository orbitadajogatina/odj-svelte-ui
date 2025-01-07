<script lang="ts">
  import { twMerge } from 'tailwind-merge';

  export let color: 'neutral' | 'green' | 'red' | 'disabled' = 'neutral';
  export let defaultClass: string = 'text-sm font-medium block';
  export let show: boolean = true;

  let node: HTMLLabelElement;

  const colorClasses = {
    neutral: 'text-neutral-900 dark:text-neutral-300',
    green: 'text-green-700 dark:text-green-500',
    red: 'text-red-700 dark:text-red-500',
    disabled: 'text-neutral-400 dark:text-neutral-500'
  };

  // function checkDisabled(node: HTMLLabelElement) {
  $: {
    const control: HTMLInputElement = node?.control as HTMLInputElement;
    color = control?.disabled ? 'disabled' : color;
  }

  $: labelClass = twMerge(defaultClass, colorClasses[color], $$props.class);
</script>

{#if show}
  <!-- svelte-ignore a11y-label-has-associated-control -->
  <label bind:this={node} {...$$restProps} class={labelClass} on:click><slot /></label>
{:else}
  <slot />
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let color: 'neutral' | 'green' | 'red' | 'disabled' = 'neutral';
@prop export let defaultClass: string = 'text-sm font-medium block';
@prop export let show: boolean = true;
-->
