<script lang="ts">
  import { Button, Dropdown, DropdownUl, DropdownLi } from "$lib";
  import { ChevronRightOutline } from "flowbite-svelte-icons";
  import { page } from "$app/stores";
  let activeUrl = $state($page.url.pathname);
  $effect(() => {
    activeUrl = $page.url.pathname;
  });
  let dropdownRightStatus = $state(false);
</script>

<div class="flex h-[160px] items-center justify-center">
  <Button id="dropdownRight">Dropdown right<ChevronRightOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>
  <Dropdown {activeUrl} open={dropdownRightStatus} triggeredBy="#dropdownRight" transitionOutParams={{ x: -5 }} position="right">
    <DropdownUl>
      <DropdownLi href="/">Dashboard</DropdownLi>
      <DropdownLi href="/components/drawer">Drawer</DropdownLi>
      <DropdownLi href="/components/dropdown">Dropdown</DropdownLi>
      <DropdownLi href="/components">Alert</DropdownLi>
    </DropdownUl>
  </Dropdown>
</div>
