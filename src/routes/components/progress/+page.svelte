<script lang="ts">
  import { Progressbar, ProgressRadial, progressbar, Button, Label, Radio, type RadioColorType, type ProgressbarProps } from "$lib";
  import { sineOut } from "svelte/easing";
  import HighlightCompo from "../../utils/HighlightCompo.svelte";
  import CodeWrapper from "../../utils/CodeWrapper.svelte";
  import H1 from "../../utils/H1.svelte";
  import H2 from "../../utils/H2.svelte";
  // for Props table
  import CompoAttributesViewer from "../../utils/CompoAttributesViewer.svelte";
  const dirName = "progress";
  const exampleModules = import.meta.glob("./examples/*.svelte", {
    query: "?raw",
    import: "default",
    eager: true
  }) as Record<string, string>;

  let progress = $state("45");
  const progressSizes = [
    { size: "h-4", class: "" },
    { size: "h-6", class: "p-2" },
    { size: "h-8", class: "p-3" },
    { size: "h-10", class: "p-4" }
  ];

  function updateProgressSize(selectedSize: string): void {
    const newSize = progressSizes.find((size) => size.size === selectedSize);
    if (newSize) {
      progressSize = newSize;
    }
  }

  let progressSize = $state(progressSizes[0]);

  // const sizes = [ 'h-4 ', 'h-6', 'h-8', 'h-10'];
  // let progressSize = $state('h-4');
  const colors = Object.keys(progressbar.variants.color);
  let progressColor: ProgressbarProps["color"] = $state("primary");
  let labelInside = $state(false);
  const changeLabelInside = () => {
    labelInside = !labelInside;
  };
  let { labelContent = $bindable("Svelte-5-Ui-Lib") } = $props();
  const changeLabelContent = () => {
    labelContent = labelContent === "Svelte-5-Ui-Lib" ? "" : "Svelte-5-Ui-Lib";
  };
  let animation = $state(false);
  let tweenDuration: number | undefined = $state();
  let easing: typeof sineOut | undefined = $state();
  const changeAnimation = () => {
    animation = !animation;
    if (animation) {
      tweenDuration = 1500;
      easing = sineOut;
    } else {
      tweenDuration = undefined;
      easing = undefined;
    }
  };
  $inspect("tweenDuration", tweenDuration, "animation", animation);
  // const randomize = () => {
  //   progress = `${Math.round(Math.random() * 100)}`
  // }

  // code generator
  let generatedCode = $derived(
    (() => {
      let props = [];
      // progress
      props.push(` progress="${progress}"`);
      if (progressColor !== "primary") props.push(` color="${progressColor}"`);
      if (labelInside) props.push(" labelInside");
      if (labelContent !== "") props.push(` labelOutside="${labelContent}"`);
      if (progressSize.size !== "h-4") props.push(` size="${progressSize.size}"`);
      // Add div2Class prop if not empty
      if (progressSize.class !== "") {
        props.push(` div2Class="${progressSize.class}"`);
      }
      if (animation) {
        props.push(" animate");
        props.push(" precision={0}");
        props.push(" tweenDuration={1500}");
        props.push(" easing={sineOut}");
      }

      const propsString = props.length > 0 ? props.map((prop) => `\n  ${prop}`).join("") + "\n" : "";

      return `<Progressbar${propsString} />`;
    })()
  );

  let radialProgress = $state("45");
  let radialSize = $state("h-24 w-24");
  let radialThickness = $state(4);
  let radialRadius = $state(42);
  let radialStartingPosition = $state<"top" | "right" | "bottom" | "left">("top");
  let radialLabelInside = $state(false);
  let radialLabelOutside = $state("");
  let radialColor: ProgressbarProps["color"] = $state("primary");
  let radialAnimation = $state(false);
  const radialSizes = ["h-16 w-16", "h-20 w-20", "h-24 w-24", "h-32 w-32"];
</script>

<H1>Progress bar</H1>

<H2>Setup</H2>
<HighlightCompo code={exampleModules[`./examples/Setup.svelte`] as string} />

<H2>Interactive Progressbar Builder</H2>
<CodeWrapper>
  <div class="my-4 h-16">
    {#if animation}
      <Progressbar {progress} size={progressSize.size} color={progressColor} labelOutside={labelContent} {labelInside} div2Class={progressSize.class} animate {tweenDuration} {easing} />
    {:else}
      <Progressbar {progress} size={progressSize.size} color={progressColor} labelOutside={labelContent} {labelInside} div2Class={progressSize.class} />
    {/if}
  </div>
  <div class="mb-4 flex flex-wrap space-x-2">
    <Label class="mb-4 w-full font-bold">Size</Label>
    {#each progressSizes as size}
      <Radio labelClass="w-24 my-1" name="progress_size" bind:group={progressSize.size} value={size.size} onchange={() => updateProgressSize(size.size)}>{size.size}</Radio>
    {/each}
  </div>
  <div class="flex flex-wrap space-x-2">
    <Label class="mb-4 w-full font-bold">Color</Label>
    {#each colors as color}
      <Radio labelClass="w-24 my-1" name="interactive_progress_color" bind:group={progressColor} color={color as RadioColorType} value={color}>{color}</Radio>
    {/each}
  </div>
  <div class="flex flex-wrap justify-center gap-2 md:justify-start">
    <Button class="w-48" onclick={changeLabelContent}>{labelContent ? "Remove outlise label" : "Add outside label"}</Button>
    <Button class="w-48" color="purple" onclick={changeLabelInside}>{labelInside ? "Remove inside label" : "Add inside label"}</Button>
    <Button class="w-48" color="red" onclick={changeAnimation}>{animation ? "No animation" : "Animation"}</Button>
    <Button class="w-48" color="emerald" onclick={() => (progress = `${Math.round(Math.random() * 100)}`)}>Randomize</Button>
  </div>
  {#snippet codeblock()}
    <HighlightCompo code={generatedCode} />
  {/snippet}
</CodeWrapper>

<H2>Interactive ProgressRadial Builder</H2>

<CodeWrapper>
  <div class="my-6 flex justify-center">
    <ProgressRadial progress={radialProgress} size={radialSize} radius={radialRadius} thickness={radialThickness} startingPosition={radialStartingPosition} color={radialColor} labelInside={radialLabelInside} labelOutside={radialLabelOutside} animate={radialAnimation} />
  </div>

  <div class="mb-4 flex flex-wrap gap-2">
    <Label class="w-full font-bold">Color</Label>
    {#each colors as color}
      <Radio name="radial_color" bind:group={radialColor} color={color as RadioColorType} value={color}>
        {color}
      </Radio>
    {/each}
  </div>

  <div class="mb-4 flex flex-wrap gap-2">
    <Label class="w-full font-bold">Starting position</Label>
    {#each ["top", "right", "bottom", "left"] as pos}
      <Radio name="radial_position" bind:group={radialStartingPosition} value={pos}>
        {pos}
      </Radio>
    {/each}
  </div>

  <div class="mb-4 flex flex-wrap gap-2">
    <Label class="w-full font-bold">Size</Label>
    {#each radialSizes as size}
      <Radio name="radial_size" bind:group={radialSize} value={size}>
        {size}
      </Radio>
    {/each}
  </div>

  <div class="mb-4">
    <Label class="mb-2 block font-bold">
      Radius: {radialRadius}
    </Label>

    <input type="range" min="20" max="48" step="1" bind:value={radialRadius} class="w-full" />
  </div>

  <div class="mb-4">
    <Label class="mb-2 block font-bold">
      Thickness: {radialThickness}
    </Label>

    <input type="range" min="1" max="12" step="1" bind:value={radialThickness} class="w-full" />
  </div>

  <div class="flex flex-wrap gap-2">
    <Button class="w-48" onclick={() => (radialLabelInside = !radialLabelInside)}>
      {radialLabelInside ? "Remove inside label" : "Add inside label"}
    </Button>

    <Button class="w-48" onclick={() => (radialLabelOutside = radialLabelOutside ? "" : "Example")}>
      {radialLabelOutside ? "Remove outside label" : "Add outside label"}
    </Button>

    <Button class="w-48" color="emerald" onclick={() => (radialProgress = `${Math.round(Math.random() * 100)}`)}>Randomize</Button>
  </div>

  {#snippet codeblock()}
    <HighlightCompo
      code={`<ProgressRadial
  progress="${radialProgress}"
  size="${radialSize}"
  radius={${radialRadius}}
  thickness={${radialThickness}}
  startingPosition="${radialStartingPosition}"
  color="${radialColor}"
  ${radialLabelInside ? "labelInside" : ""}
  ${radialLabelOutside ? `labelOutside="${radialLabelOutside}"` : ""}
/>`}
    />
  {/snippet}
</CodeWrapper>

<H2>Component data</H2>
<CompoAttributesViewer {dirName} />
