<script lang="ts">
  import { Dropzone } from "$lib";

  let value = $state<string[]>([]);

  const dropHandle = (event: DragEvent) => {
    if (event.dataTransfer?.items) {
      const newFiles = Array.from(event.dataTransfer.items)
        .filter((item) => item.kind === "file")
        .map((item) => item.getAsFile())
        .filter((file): file is File => file !== null)
        .map((file) => file.name);
      value = [...value, ...newFiles];
      console.log("Dropped files:", value); // Debugging
    } else if (event.dataTransfer?.files) {
      const newFiles = Array.from(event.dataTransfer.files).map((file) => file.name);
      value = [...value, ...newFiles];
      console.log("Dropped files:", value); // Debugging
    }
  };

  const handleChange = (event: Event) => {
    console.log("onChange event triggered!"); // Check if the event is firing
    const target = event.target as HTMLInputElement;
    const files = target.files;
    console.log("Files in input:", files); // Check if files are being captured

    if (files) {
      const newFiles = Array.from(files).map((file) => file.name);
      console.log("Selected file names:", newFiles); // Log file names
      value = [...value, ...newFiles]; // Update your state with file names
    }
  };

  const showFiles = (files: string[]): string => {
    if (files.length === 1) return files[0];
    let concat = files.join(", ");
    // if (concat.length > 40) {
    //   concat = concat.slice(0, 40) + "...";
    // }
    return concat;
  };
</script>

<Dropzone multiple id="dropzone" ondrop={dropHandle} onchange={handleChange} ondragover={() => console.log('dropping...')}>
  <svg aria-hidden="true" class="mb-3 h-10 w-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
  {#if value.length === 0}
    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span></p>
    <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
  {:else}
    <p>{showFiles(value)}</p>
  {/if}
</Dropzone>
