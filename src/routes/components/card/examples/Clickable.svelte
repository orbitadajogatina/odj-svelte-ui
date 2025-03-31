<script lang="ts">
  import { Card } from "$lib";
</script>

<div class="flex justify-center">
  <Card clickable onclick={() => alert('click!')} class="max-w-[250px]">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Click me!</h5>
    <p class="font-normal leading-tight text-gray-700 dark:text-gray-400">Click me!!!!</p>
  </Card>
</div>
