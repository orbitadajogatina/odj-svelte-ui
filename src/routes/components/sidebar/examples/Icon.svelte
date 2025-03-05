<script lang="ts">
  import { Sidebar, SidebarGroup, SidebarItem, SidebarDropdownWrapper } from "$lib";
  import { ChartOutline, ChevronDoubleUpOutline, ChevronDoubleDownOutline, ShoppingBagSolid } from "flowbite-svelte-icons";
  import PlusPlaceholder from "../../../utils/PlusPlaceholder.svelte";
  import { page } from "$app/stores";
  let activeUrl = $state($page.url.pathname);
  $effect(() => {
    activeUrl = $page.url.pathname;
  });
</script>

<div class="relative">
  <Sidebar {activeUrl} position="absolute">
    <SidebarGroup>
      <SidebarItem label="Dashboard">
        {#snippet iconSlot()}
          <ChartOutline />
        {/snippet}
      </SidebarItem>
      <SidebarDropdownWrapper label="E-commerce">
        {#snippet iconSlot()}
          <ShoppingBagSolid />
        {/snippet}
        {#snippet arrowup()}
          <ChevronDoubleUpOutline class="h-6 w-6" />
        {/snippet}
        {#snippet arrowdown()}
          <ChevronDoubleDownOutline class="h-6 w-6" />
        {/snippet}
        <SidebarItem label="Sidebar" href="/components/sidebar" />
        <SidebarItem label="Billing" />
        <SidebarItem label="Invoice" />
      </SidebarDropdownWrapper>
    </SidebarGroup>
  </Sidebar>

  <div class="h-96 overflow-auto px-4 md:ml-64">
    <div class="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700">
      <PlusPlaceholder colnum={3} rownum={1} />
      <PlusPlaceholder />
      <PlusPlaceholder colnum={2} rownum={2} />
      <PlusPlaceholder />
      <PlusPlaceholder colnum={2} rownum={2} />
    </div>
  </div>
</div>
