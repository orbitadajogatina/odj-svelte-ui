<script lang="ts">
  import { Rating } from "$lib";
  import Button from "$lib/buttons/Button.svelte";

  let random = $state(5);
</script>

<Rating total={5} size={30} rating={random / 2} />
<Rating total={5} size={30} rating={random} iconProps={{ onclick: (event) => alert(event.currentTarget.getAttribute("data-icon-index")) }} />

<Button class="mt-2" onclick={() => (random = Math.random() * 5)}>Randomize</Button>
