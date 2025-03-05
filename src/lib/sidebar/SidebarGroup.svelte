<script lang="ts">
  import { type SidebarGroupProps as Props, sidebargroup, type SidebarCtxType } from ".";
  import { getContext } from "svelte";

  const context = getContext<SidebarCtxType>("sidebarContext") ?? {};

  let { children, class: className, border = false, ...restProps }: Props = $props();
  const { base } = $derived(sidebargroup({ breakpoint: context.breakpoint, border }));
</script>

<ul {...restProps} class={base({ className })}>
  {@render children()}
</ul>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children: any;
@props:class: string = "space-y-2";
@props:border:boolean = false;
-->
