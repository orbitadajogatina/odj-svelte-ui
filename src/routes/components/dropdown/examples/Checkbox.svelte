<script lang="ts">
  import { Button, Dropdown, DropdownUl, DropdownLi, Checkbox } from "$lib";
  import { ChevronDownOutline } from "flowbite-svelte-icons";
  let dropdownCheckboxStatus = $state(false);
</script>

<div class="flex h-72 items-start justify-center">
  <Button id="dropdownCheckbox">Dropdown checkbox<ChevronDownOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>
  <Dropdown open={dropdownCheckboxStatus} triggeredBy="#dropdownCheckbox">
    <DropdownUl>
      <DropdownLi liClass="rounded-sm p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
        <Checkbox>Robert Gouth</Checkbox>
      </DropdownLi>
      <DropdownLi liClass="rounded-sm p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
        <Checkbox>Jese Leos</Checkbox>
      </DropdownLi>
      <DropdownLi liClass="rounded-sm p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
        <Checkbox checked>Bonnie Green</Checkbox>
      </DropdownLi>
      <DropdownLi liClass="rounded-sm p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
        <Checkbox>Jese Leos</Checkbox>
      </DropdownLi>
      <DropdownLi liClass="rounded-sm p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
        <Checkbox>Robert Gouth</Checkbox>
      </DropdownLi>
      <DropdownLi liClass="rounded-sm p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
        <Checkbox>Bonnie Green</Checkbox>
      </DropdownLi>
    </DropdownUl>
  </Dropdown>
</div>
