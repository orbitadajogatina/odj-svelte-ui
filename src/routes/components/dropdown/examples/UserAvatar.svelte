<script lang="ts">
  import { Dropdown, DropdownUl, DropdownLi, DropdownHeader, DropdownFooter, Avatar } from "$lib";
  import { page } from "$app/stores";
  let activeUrl = $state($page.url.pathname);
  $effect(() => {
    activeUrl = $page.url.pathname;
  });
  let dropdownUserStatus = $state(false);
</script>

<div class="flex h-72 items-start justify-center">
  <Avatar id="dropdownUser2" src="/images/profile-picture-3.webp" dot={{ color: "green" }} />

  <div class="relative">
    <Dropdown {activeUrl} open={dropdownUserStatus} triggeredBy="#dropdownUser2" class="absolute -left-[110px] top-[40px]">
      <DropdownHeader class="px-4 py-2">
        <span class="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
        <span class="block truncate text-sm font-medium">name@flowbite.com</span>
      </DropdownHeader>
      <DropdownUl>
        <DropdownLi href="/">Dashboard</DropdownLi>
        <DropdownLi href="/components/drawer">Drawer</DropdownLi>
        <DropdownLi href="/components/dropdown">Dropdown</DropdownLi>
        <DropdownLi href="/components">Alert</DropdownLi>
      </DropdownUl>
      <DropdownFooter class="px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">Sign out</DropdownFooter>
    </Dropdown>
  </div>
</div>
