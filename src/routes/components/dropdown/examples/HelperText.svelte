<script lang="ts">
  import { Button, Dropdown, DropdownUl, DropdownLi, Checkbox, Helper } from "$lib";
  import { ChevronDownOutline } from "flowbite-svelte-icons";
  let dropdownHelperStatus = $state(false);
</script>

<div class="relative flex h-72 items-start justify-center">
  <Button id="dropdownHelper">Dropdown helper text<ChevronDownOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>
  <Dropdown open={dropdownHelperStatus} triggeredBy="#dropdownHelper" class="w-64 overflow-y-auto text-sm">
    <DropdownUl>
      <DropdownLi aClass="block cursor-default">
        <Checkbox>Enable notifications</Checkbox>
        <Helper class="ps-6">Some helpful instruction goes over here.</Helper>
      </DropdownLi>
      <DropdownLi aClass="block cursor-default">
        <Checkbox>Enable 2FA auth</Checkbox>
        <Helper class="ps-6">Some helpful instruction goes over here.</Helper>
      </DropdownLi>
      <DropdownLi aClass="block cursor-default">
        <Checkbox checked>Subscribe newsletter</Checkbox>
        <Helper class="ps-6">Some helpful instruction goes over here.</Helper>
      </DropdownLi>
    </DropdownUl>
  </Dropdown>
</div>
