<script lang="ts">
  import { Sidebar, SidebarGroup, SidebarItem, SidebarDropdownWrapper } from "$lib";
  import { ChartOutline, GridSolid, UserSolid, EditSolid, ShoppingBagSolid } from "flowbite-svelte-icons";
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
      <SidebarDropdownWrapper label="Shop" btnClass="p-2">
        {#snippet iconSlot()}
          <ShoppingBagSolid />
        {/snippet}
        <SidebarItem label="Products" href="" />
      </SidebarDropdownWrapper>
      <SidebarDropdownWrapper label="Profile" btnClass="p-2">
        {#snippet iconSlot()}
          <UserSolid />
        {/snippet}
        <SidebarItem label="Projects" href="/" />
      </SidebarDropdownWrapper>
      <SidebarItem label="Sidebar" href="/components/sidebar">
        {#snippet iconSlot()}
          <GridSolid />
        {/snippet}
      </SidebarItem>
    </SidebarGroup>
    <SidebarGroup border>
      <SidebarDropdownWrapper label="Setting" btnClass="p-2">
        {#snippet iconSlot()}
          <EditSolid />
        {/snippet}
        <SidebarItem label="Account" href="" />
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
