<script lang="ts">
  import { setContext } from "svelte";
  import { writable } from "svelte/store";
  import { type SidebarProps as Props, sidebar, type SidebarCtxType } from ".";

  let { children, isSingle = true, breakpoint = "md", position = "fixed", divClass, ariaLabel, nonActiveClass, activeClass, activeUrl = "", class: className, ...restProps }: Props = $props();

  const activeUrlStore = writable("");
  setContext("activeUrl", activeUrlStore);
  $effect(() => {
    activeUrlStore.set(activeUrl);
  });

  const { base, active, nonactive, div } = $derived(sidebar({ breakpoint, position }));

  let sidebarCtx: SidebarCtxType = {
    get activeClass() {
      return active({ class: activeClass });
    },
    get nonActiveClass() {
      return nonactive({ class: nonActiveClass });
    },
    isSingle,
    breakpoint
  };

  setContext("sidebarContext", sidebarCtx);
</script>

<aside {...restProps} class={base({ className })} aria-label={ariaLabel}>
  <div class={div({ class: divClass })}>
    {@render children()}
  </div>
</aside>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children: any;
@props:isSingle: any = true;
@props:breakpoint: any = "md";
@props:position: any = "fixed";
@props:divClass: any;
@props:ariaLabel: any;
@props:nonActiveClass: any;
@props:activeClass: any;
@props:activeUrl: any = "";
@props:class: string;
-->
