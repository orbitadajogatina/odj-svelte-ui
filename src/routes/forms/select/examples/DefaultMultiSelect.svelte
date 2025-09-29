<script lang="ts">
  import { Label, MultiSelect } from "$lib";
  import type { Option } from "svelte-multiselect";

  const options: Option[] = [
    { label: "Hello", value: "hello" },
    { label: "World", value: "world" },
    { label: "!", value: "exclamation" }
  ];
  let value: Option | Option[] | null | undefined = $state(null);
</script>

<div class="h-48 space-y-1">
  <Label for="sentence">Make a sentence</Label>
  <MultiSelect id="sentence" {options} bind:value />
  <textarea class="mt-2 font-mono w-full h-32" readonly>{JSON.stringify(value, null, 2)}</textarea>
</div>
