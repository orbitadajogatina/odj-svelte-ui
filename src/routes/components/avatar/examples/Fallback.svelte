<script lang="ts">
  import { Avatar } from "$lib";
</script>

<div class="flex h-10 justify-center">
  <Avatar alt="JL" src="/images/profile-picture-1.webp">
    {#snippet fallback()}
      <span>JL</span>
    {/snippet}
  </Avatar>
</div>
