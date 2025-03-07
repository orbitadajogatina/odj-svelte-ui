<script lang="ts">
  import { Button, Dropdown, DropdownUl, DropdownLi } from "$lib";
  import { ChevronDownOutline } from "flowbite-svelte-icons";
  import { page } from "$app/stores";
  let activeUrl = $state($page.url.pathname);
  $effect(() => {
    activeUrl = $page.url.pathname;
  });
  let dropdownBottomStatus = $state(false);
</script>

<div class="flex h-[360px] items-start justify-center">
  <Button id="dropdownBottom">Dropdown bottom<ChevronDownOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>
  <Dropdown {activeUrl} triggeredBy="#dropdownBottom" open={dropdownBottomStatus}>
    <DropdownUl>
      <DropdownLi href="/">Dashboard</DropdownLi>
      <DropdownLi href="/components/drawer">Drawer</DropdownLi>
      <DropdownLi href="/components/dropdown">Dropdown</DropdownLi>
      <DropdownLi href="/components">Alert</DropdownLi>
    </DropdownUl>
  </Dropdown>
</div>
