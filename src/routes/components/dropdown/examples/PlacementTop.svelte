<script lang="ts">
  import { Button, Dropdown, DropdownUl, DropdownLi } from "$lib";
  import { ChevronUpOutline } from "flowbite-svelte-icons";
  import { page } from "$app/stores";
  let activeUrl = $state($page.url.pathname);
  $effect(() => {
    activeUrl = $page.url.pathname;
  });
  let dropdownTopStatus = $state(false);
</script>

<div class="flex h-[200px] items-end justify-center">
  <Button id="dropdownTop">Dropdown top<ChevronUpOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>
  <Dropdown {activeUrl} open={dropdownTopStatus} triggeredBy="#dropdownTop" transitionOutParams={{ y: 5 }} position="top">
    <DropdownUl>
      <DropdownLi href="/">Dashboard</DropdownLi>
      <DropdownLi href="/components/drawer">Drawer</DropdownLi>
      <DropdownLi href="/components/dropdown">Dropdown</DropdownLi>
      <DropdownLi href="/components">Alert</DropdownLi>
    </DropdownUl>
  </Dropdown>
</div>
