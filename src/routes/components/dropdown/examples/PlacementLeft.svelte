<script lang="ts">
  import { Button, Dropdown, DropdownUl, DropdownLi } from "$lib";
  import { ChevronLeftOutline } from "flowbite-svelte-icons";
  import { page } from "$app/stores";
  let activeUrl = $state($page.url.pathname);
  $effect(() => {
    activeUrl = $page.url.pathname;
  });
  let dropdownLeftStatus = $state(false);
</script>

<div class="flex h-[160px] items-center justify-center">
  <Button id="closeDropdown"><ChevronLeftOutline class="me-2 h-6 w-6 text-white dark:text-white" />Dropdown left</Button>
  <Dropdown {activeUrl} open={dropdownLeftStatus} triggeredBy="#closeDropdown" transitionOutParams={{ x: 5 }} position="left">
    <DropdownUl>
      <DropdownLi href="/">Dashboard</DropdownLi>
      <DropdownLi href="/components/drawer">Drawer</DropdownLi>
      <DropdownLi href="/components/dropdown">Dropdown</DropdownLi>
      <DropdownLi href="/components">Alert</DropdownLi>
    </DropdownUl>
  </Dropdown>
</div>
