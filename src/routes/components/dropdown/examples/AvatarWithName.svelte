<script lang="ts">
  import { Button, Dropdown, DropdownHeader, DropdownFooter, DropdownUl, DropdownLi, Avatar } from "$lib";
  import { page } from "$app/stores";
  let activeUrl = $state($page.url.pathname);
  $effect(() => {
    activeUrl = $page.url.pathname;
  });
  let dropdownAvatarStatus = $state(false);
</script>

<div class="flex h-80 items-start justify-center">
  <Button id="avatarWithName" pill color="light" class="p-1!">
    <Avatar src="/images/profile-picture-3.webp" class="me-2" />
    Bonnie Green
  </Button>
  <Dropdown {activeUrl} open={dropdownAvatarStatus} triggeredBy="#avatarWithName">
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
