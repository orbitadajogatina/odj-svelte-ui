<script lang="ts">
  import { Tabs, TabItem } from "$lib";
  import { UserCircleFlowbite, GridFlowbite, AdjustmentsVerticalFlowbite, ClipboardFlowbite } from "svelte-animated-icons";
</script>

<Tabs tabStyle="underline">
  <TabItem open>
    {#snippet titleSlot()}
      <div class="flex items-center gap-2">
        <UserCircleFlowbite />
        Profile
      </div>
    {/snippet}
    <p class="text-sm text-gray-500 dark:text-gray-400">
      <b>Profile:</b>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </TabItem>
  <TabItem>
    {#snippet titleSlot()}
      <div class="flex items-center gap-2">
        <GridFlowbite />
        Dashboard
      </div>
    {/snippet}
    <p class="text-sm text-gray-500 dark:text-gray-400">
      <b>Dashboard:</b>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </TabItem>
  <TabItem>
    {#snippet titleSlot()}
      <div class="flex items-center gap-2">
        <AdjustmentsVerticalFlowbite />
        Settings
      </div>
    {/snippet}
    <p class="text-sm text-gray-500 dark:text-gray-400">
      <b>Settings:</b>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </TabItem>
  <TabItem>
    {#snippet titleSlot()}
      <div class="flex items-center gap-2">
        <ClipboardFlowbite />
        Contacts
      </div>
    {/snippet}
    <p class="text-sm text-gray-500 dark:text-gray-400">
      <b>Contacts:</b>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </TabItem>
</Tabs>
