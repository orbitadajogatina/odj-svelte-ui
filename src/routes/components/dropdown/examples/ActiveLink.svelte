<script lang="ts">
  import { Button, Dropdown, DropdownUl, DropdownLi } from "$lib";
  import { ChevronDownOutline } from "flowbite-svelte-icons";
  import { page } from "$app/stores";
  let activeUrl = $state($page.url.pathname);
  $effect(() => {
    activeUrl = $page.url.pathname;
  });
  let dropdownBStatus = $state(false);
</script>

<div class="flex h-48 items-start justify-center">
  <Button id="activeLink">
    Dropdown
    <ChevronDownOutline class="ms-2 h-5 w-5 text-white dark:text-white" />
  </Button>
</div>

<Dropdown {activeUrl} open={dropdownBStatus} triggeredBy="#activeLink">
  <DropdownUl>
    <DropdownLi href="/">Dashboard</DropdownLi>
    <DropdownLi href="/components/dropdown">Dropdown</DropdownLi>
    <DropdownLi href="/components/footer">Footer</DropdownLi>
    <DropdownLi href="/components/alert">Alert</DropdownLi>
  </DropdownUl>
</Dropdown>