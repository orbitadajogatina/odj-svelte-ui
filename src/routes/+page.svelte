<script lang="ts">
  import { P, A } from "$lib";
  import HighlightCompo from "./utils/HighlightCompo.svelte";
  import H1 from "./utils/H1.svelte";
  import H2 from "./utils/H2.svelte";
  import H3 from "./utils/H3.svelte";
  const modules = import.meta.glob("./md/*.md", {
    query: "?raw",
    import: "default",
    eager: true
  });

  import { removeHyphensAndCapitalize } from "./utils/helpers";
  const name = __NAME__;
  const version = __VERSION__;
  const githuburl = __GITHUBURL__;
</script>

<H1><a class="hover:underline dark:text-primary-500" href={githuburl}>{removeHyphensAndCapitalize(name)}: v{version}</a></H1>

<P>Svelte 5 UI Lib is a UI library built from scratch to leverage Svelte 5's runes system, creating smooth, reactive components.</P>

<H2>Installation</H2>

<H3>Svelte 5 Runes</H3>
<P>Installing Svelte 5:</P>

<HighlightCompo class="mb-8" codeLang="js" code={modules["./md/install-svelte.md"] as string} />

<H3>Installing Svelte-5-Ui-Lib</H3>
<P>Install `svelte-5-ui-lib` and update dependencies:</P>

<HighlightCompo class="mb-8" codeLang="sh" code={modules["./md/svelte-5-ui-lib.md"] as string} />

<H3>Tailwind</H3>
<P>Add the following to tailwind.config.js:</P>

<H3>SVG Icons</H3>
<P>If you are using any icons from <A href="https://svelte-svg-icons.codewithshin.com/">Svelte SVG Icon Sets</A>, you need to update the content in tailwind.config.js. For example, if you are using Flowbite-Svelte-Icons and Svelte-Animated-Icons:</P>

<HighlightCompo class="mb-8" codeLang="js" code={modules["./md/svg-icons.md"] as string} />

<HighlightCompo class="mb-8" codeLang="json" code={modules["./md/tailwind-config.md"] as string} />
