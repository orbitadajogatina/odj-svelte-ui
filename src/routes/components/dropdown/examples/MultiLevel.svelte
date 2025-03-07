<script lang="ts">
  import { sineIn } from "svelte/easing";
  import { Button, Dropdown, DropdownUl, DropdownLi, uiHelpers } from "$lib";
  import { ChevronDownOutline, ChevronRightOutline } from "flowbite-svelte-icons";
  let dropdownMultiLevelStatus = $state(false);
  let dropdownMultiLevelStatus2 = $state(false);
</script>

<div class="flex h-60 items-start justify-center">
  <Button id="dropdownMultiLevel">
    Dropdown
    <ChevronDownOutline class="ms-2 h-5 w-5 text-white dark:text-white" />
  </Button>
  <Dropdown open={dropdownMultiLevelStatus} triggeredBy="#dropdownMultiLevel" class="overflow-visible">
    <DropdownUl>
      <DropdownLi href="/">Dashboard</DropdownLi>
      <DropdownLi id="dropdownMultiLevel2">Dropdown<ChevronRightOutline class="text-primary-700 ms-2 h-6 w-6 dark:text-white" /></DropdownLi>
      <Dropdown open={dropdownMultiLevelStatus2} triggeredBy="#dropdownMultiLevel2" position="right-start" offset={10} transitionOutParams={{ x: 5 }}>
        <DropdownUl class="z-100">
          <DropdownLi href="/">Home</DropdownLi>
          <DropdownLi href="/components/footer">Footer</DropdownLi>
          <DropdownLi href="/components/alert">Alert</DropdownLi>
        </DropdownUl>
      </Dropdown>
      <DropdownLi href="/components/drawer">Drawer</DropdownLi>
      <DropdownLi href="/components/footer">Footer</DropdownLi>
      <DropdownLi href="/components/button">Button</DropdownLi>
    </DropdownUl>
  </Dropdown>
</div>
