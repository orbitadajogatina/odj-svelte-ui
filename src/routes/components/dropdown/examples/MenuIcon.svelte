<script lang="ts">
  import { sineIn } from "svelte/easing";
  import { Dropdown, DropdownUl, DropdownLi, uiHelpers } from "$lib";
  import { DotsVerticalOutline } from "flowbite-svelte-icons";
  import { page } from "$app/stores";
  let activeUrl = $state($page.url.pathname);
  $effect(() => {
    activeUrl = $page.url.pathname;
  });
  let dropdownIconStatus = $state(false);
</script>

<div class="flex h-40 items-start justify-center">
  <DotsVerticalOutline id="dropdownIcon" class="dots-menu dark:text-white" />
  <Dropdown {activeUrl} open={dropdownIconStatus} triggeredBy="#dropdownIcon" position="bottom-end">
    <DropdownUl>
      <DropdownLi href="/">Dashboard</DropdownLi>
      <DropdownLi href="/components/drawer">Drawer</DropdownLi>
      <DropdownLi href="/components/dropdown">Dropdown</DropdownLi>
      <DropdownLi href="/components">Alert</DropdownLi>
    </DropdownUl>
  </Dropdown>
</div>
