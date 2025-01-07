<script lang="ts">
  import { twMerge } from 'tailwind-merge';

  export let value: string = '';
  export let files: FileList | undefined = undefined;
  export let defaultClass: string = 'flex flex-col justify-center items-center w-full h-64 bg-neutral-50 rounded-lg border-2 border-neutral-300 border-dashed cursor-auto dark:hover:bg-bray-800 dark:bg-neutral-700 hover:bg-neutral-100 dark:border-neutral-600 dark:hover:border-neutral-500 dark:hover:bg-neutral-600';

  let input: HTMLInputElement;

  function keydown(ev: KeyboardEvent) {
    if ([' ', 'Enter'].includes(ev.key)) {
      ev.preventDefault();
      input.click();
    }
  }
</script>

<button class={twMerge(defaultClass, $$props.class)} on:keydown={keydown} on:focus on:blur on:mouseenter on:mouseleave on:mouseover on:dragenter on:dragleave on:dragover on:drop type="button">
  <label class="flex flex-col items-center cursor-pointer" tabIndex="0">
    <slot/>
    <input {...$$restProps} bind:value bind:files bind:this={input} on:change on:click type="file" class="hidden" />
  </label>
</button>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let value: string = '';
@prop export let files: FileList | undefined = undefined;
@prop export let defaultClass: string = 'flex flex-col justify-center items-center w-full h-64 bg-neutral-50 rounded-lg border-2 border-neutral-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-neutral-700 hover:bg-neutral-100 dark:border-neutral-600 dark:hover:border-neutral-500 dark:hover:bg-neutral-600';
-->
