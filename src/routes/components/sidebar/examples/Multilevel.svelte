<script lang="ts">
  import { Sidebar, SidebarGroup, SidebarItem, SidebarDropdownWrapper } from "$lib";
  import { ChartOutline, GridSolid, MailBoxSolid, UserSolid, ArrowRightToBracketOutline, EditSolid, ShoppingBagSolid } from "flowbite-svelte-icons";
  import PlusPlaceholder from "../../../utils/PlusPlaceholder.svelte";
  import { page } from "$app/stores";
  let activeUrl = $state($page.url.pathname);
  const spanClass = "flex-1 ms-2 whitespace-nowrap";
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
        <SidebarItem label="Sidebar" href="/components/sidebar" spanClass="ms-8" />
        <SidebarItem label="Billing" spanClass="ms-8" />
        <SidebarItem label="Invoice" spanClass="ms-8" />
      </SidebarDropdownWrapper>
      <SidebarItem label="Kanban" {spanClass} href="/">
        {#snippet iconSlot()}
          <GridSolid />
        {/snippet}
        {#snippet subtext()}
          <span class="ms-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">Pro</span>
        {/snippet}
      </SidebarItem>
      <SidebarItem label="Inbox" {spanClass} href="/">
        {#snippet iconSlot()}
          <MailBoxSolid />
        {/snippet}
        {#snippet subtext()}
          <span class="ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-primary-200 p-3 text-sm font-medium text-primary-600 dark:bg-primary-900 dark:text-primary-200">3</span>
        {/snippet}
      </SidebarItem>
      <SidebarItem label="Users">
        {#snippet iconSlot()}
          <UserSolid />
        {/snippet}
      </SidebarItem>
      <SidebarItem label="Sign In">
        {#snippet iconSlot()}
          <ArrowRightToBracketOutline />
        {/snippet}
      </SidebarItem>
      <SidebarItem label="Sign Up">
        {#snippet iconSlot()}
          <EditSolid />
        {/snippet}
      </SidebarItem>
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
