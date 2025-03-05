<script lang="ts">
  import { Sidebar, SidebarGroup, SidebarItem } from "$lib";
  import { ChartOutline, GridSolid, MailBoxSolid, UserSolid } from "flowbite-svelte-icons";
  import { page } from "$app/stores";
  let activeUrl = $state($page.url.pathname);
  import PlusPlaceholder from "../../../utils/PlusPlaceholder.svelte";
  $effect(() => {
    activeUrl = $page.url.pathname;
  });
</script>

<div class="relative">
  <Sidebar {activeUrl} position="absolute">
    <SidebarGroup>
      <SidebarItem label="Without Icon" spanClass="" />
      <SidebarItem label="Dashboard" href="/">
        {#snippet iconSlot()}
          <ChartOutline />
        {/snippet}
      </SidebarItem>
      <SidebarItem label="Kanban" href="/">
        {#snippet iconSlot()}
          <GridSolid />
        {/snippet}
        {#snippet subtext()}
          <span class="ms-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">Pro</span>
        {/snippet}
      </SidebarItem>
      <SidebarItem label="Inbox" href="/">
        {#snippet iconSlot()}
          <MailBoxSolid />
        {/snippet}
        {#snippet subtext()}
          <span class="bg-primary-200 text-primary-600 dark:bg-primary-900 dark:text-primary-200 ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full p-3 text-sm font-medium">3</span>
        {/snippet}
      </SidebarItem>
      <SidebarItem label="Sidebar" href="/components/sidebar">
        {#snippet iconSlot()}
          <UserSolid />
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
