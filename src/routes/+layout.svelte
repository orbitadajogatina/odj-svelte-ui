<script lang="ts">
  import { RunesMetaTags, deepMerge } from "runes-meta-tags";
  import { Runatics } from "runatics";
  import { page } from "$app/stores";
  import "../app.pcss";
  import Footer from "./utils/Footer.svelte";
  import { Navbar, NavLi, NavBrand, NavUl, uiHelpers, Darkmode, Sidebar, SidebarGroup, SidebarItem, SidebarDropdownWrapper, Drawer, Button } from "$lib";
  import GitHub from "./utils/GitHub.svelte";
  import Docs from "./utils/icons/Quote.svelte";
  import DynamicCodeBlockStyle from "./utils/DynamicCodeBlockStyle.svelte";

  let nav = uiHelpers();
  let navStatus = $state(false);
  let toggleNav = nav.toggle;
  let closeNav = nav.close;
  let activeUrl = $state($page.url.pathname);
  const hasPath = (key: string) => activeUrl.includes(key);
  let pageStatus = $derived(hasPath("pages"));
  let componentStatus = $derived(hasPath("components"));

  const drawer = uiHelpers();
  let drawerStatus = $state(false);
  const closeDrawer = drawer.close;

  let isLargeScreen = $state(false);
  function checkScreenSize() {
    isLargeScreen = window.innerWidth >= 1024;
  }

  $effect(() => {
    navStatus = nav.isOpen;
    drawerStatus = drawer.isOpen;
    activeUrl = $page.url.pathname;
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
    // pageStatus = hasPath("pages");
    // componentStatus = hasPath("components");
  });

  let navClass = "w-full divide-gray-200 border-gray-200 bg-gray-50 dark_bg_theme text-gray-500 dark:divide-gray-700 dark:border-gray-700 dark:transparent dark:text-gray-400 sm:px-4";
  let { children, data } = $props();

  // meta tags
  let metaTags = $state($page.data.pageMetaTags ? deepMerge($page.data.layoutMetaTags, $page.data.pageMetaTags) : data.layoutMetaTags);

  $effect(() => {
    metaTags = $page.data.pageMetaTags ? deepMerge($page.data.layoutMetaTags, $page.data.pageMetaTags) : data.layoutMetaTags;
    activeUrl = $page.url.pathname;
    $inspect("activeUrl in layout: ", activeUrl);
  });
</script>

<RunesMetaTags {...metaTags} />

<header class="sticky top-0 z-50">
  <Navbar {toggleNav} {closeNav} {navStatus} fluid div2Class="ml-auto w-full" divClass="max-w-full">
    {#snippet brand()}
      <NavBrand siteName="OdJ Svelte UI" spanClass="text-xl sm:text-3xl">
        <img width="30" src="/images/svelte-icon.png" class="h-6 w-5 sm:h-10 sm:w-8" alt="svelte icon" />
      </NavBrand>
    {/snippet}

    <div class="flex flex-row items-center">
      <div class="ml-auto flex items-center space-x-2 md:order-1">
        <DynamicCodeBlockStyle class="mr-4 hidden sm:block" />
        <a class="inline-block whitespace-normal rounded-lg p-1 hover:bg-gray-100 hover:text-gray-900 focus:outline-hidden focus:ring-0 focus:ring-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" href="https://svelte-5-ui-lib.codewithshin.com" aria-label="Original Docs" target="_blank">
          <Docs width=20 height=20/>
        </a>
        <a class="inline-block whitespace-normal rounded-lg p-1 hover:bg-gray-100 hover:text-gray-900 focus:outline-hidden focus:ring-0 focus:ring-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" href="https://github.com/orbitadajogatina/odj-svelte-ui" aria-label="View project on GitHub" target="_blank">
          <GitHub class="hidden sm:block" tabindex={0} />
        </a>
        <Darkmode class="hidden sm:block" />
      </div>
      <NavUl class="md:space-x-6 lg:space-x-8" {activeUrl}>
        <NavLi href="/pages/coverage">Coverage</NavLi>
        <NavLi href="/pages/about">About</NavLi>
        <NavLi class="sm:hidden" href="https://github.com/shinokada/svelte-5-ui-lib">Repo</NavLi>
      </NavUl>
      <div class="mt-4 flex justify-end space-x-4 sm:hidden"><DynamicCodeBlockStyle /> <Darkmode class="sm:hidden" /></div>
    </div>
  </Navbar>
</header>
<div class="lg:flex" id="sidebar">
  {#snippet sidebarComponents()}
    <Sidebar {activeUrl} isSingle breakpoint="none" divClass="bg-transparent dark:bg-transparent lg:bg-light-surface-100 lg:dark:bg-dark-surface-800" class="lg:top-[62px]">
      <SidebarGroup>
        <SidebarDropdownWrapper spanClass="font-bold" label="GETTING STARTED" isOpen={pageStatus} svgClass="me-4">
          <SidebarItem label="About" href="/pages/about" />
          <SidebarItem label="Coverage" href="/pages/coverage" />
        </SidebarDropdownWrapper>
        <SidebarDropdownWrapper spanClass="font-bold" label="COMPONENTS" isOpen={componentStatus} svgClass="me-4">
          <SidebarItem label="Accordion" href="/components/accordion" />
          <SidebarItem label="Alert" href="/components/alert" />
          <SidebarItem label="Avatar" href="/components/avatar" />
          <SidebarItem label="Badge" href="/components/badge" />
          <SidebarItem label="Banner" href="/components/banner" />
          <SidebarItem label="Bottom navigation" href="/components/bottom-navigation" />
          <SidebarItem label="Breadcrumb" href="/components/breadcrumb" />
          <SidebarItem label="Button" href="/components/button" />
          <SidebarItem label="Button group" href="/components/button-group" />
          <SidebarItem label="Card" href="/components/card" />
          <SidebarItem label="Carousel" href="/components/carousel" />
          <SidebarItem label="Darkmode" href="/components/darkmode" />
          <SidebarItem label="Device mockup" href="/components/device-mockup" />
          <SidebarItem label="Drawer" href="/components/drawer" />
          <SidebarItem label="Dropdown" href="/components/dropdown" />
          <SidebarItem label="Footer" href="/components/footer" />
          <SidebarItem label="Gallery" href="/components/gallery" />
          <SidebarItem label="Indicators" href="/components/indicators" />
          <SidebarItem label="Kbd" href="/components/kbd" />
          <SidebarItem label="List group" href="/components/list-group" />
          <SidebarItem label="Mega menu" href="/components/mega-menu" />
          <SidebarItem label="Modal" href="/components/modal" />
          <SidebarItem label="Navbar" href="/components/navbar" />
          <SidebarItem label="Pagination" href="/components/pagination" />
          <SidebarItem label="Popover" href="/components/popover" />
          <SidebarItem label="Progress" href="/components/progress" />
          <SidebarItem label="Rating" href="/components/rating" />
          <SidebarItem label="Sidebar" href="/components/sidebar" />
          <SidebarItem label="Skeleton" href="/components/skeleton" />
          <SidebarItem label="Speed dial" href="/components/speed-dial" />
          <SidebarItem label="Spinner" href="/components/spinner" />
          <SidebarItem label="Tab" href="/components/tabs" />
          <SidebarItem label="Table" href="/components/table" />
          <SidebarItem label="Timeline" href="/components/timeline" />
          <SidebarItem label="Toast" href="/components/toast" />
          <SidebarItem label="Tooltip" href="/components/tooltip" />
          <SidebarItem label="Video" href="/components/video" />
        </SidebarDropdownWrapper>
        <SidebarDropdownWrapper spanClass="font-bold" label="FORMS" isOpen={hasPath("forms")} svgClass="me-4">
          <SidebarItem label="Checkbox" href="/forms/checkbox" />
          <SidebarItem label="File input" href="/forms/file-input" />
          <SidebarItem label="Floating label" href="/forms/floating-label" />
          <SidebarItem label="Input field" href="/forms/input-field" />
          <SidebarItem label="Label" href="/forms/label" />
          <SidebarItem label="Radio" href="/forms/radio" />
          <SidebarItem label="Range" href="/forms/range" />
          <SidebarItem label="Search input" href="/forms/search-input" />
          <SidebarItem label="Select" href="/forms/select" />
          <SidebarItem label="Textarea" href="/forms/textarea" />
          <SidebarItem label="Toggle" href="/forms/toggle" />
        </SidebarDropdownWrapper>
        <SidebarDropdownWrapper spanClass="font-bold" label="TYPOGRAPHY" isOpen={hasPath("typography")} svgClass="me-4">
          <SidebarItem label="Blockquote" href="/typography/blockquote" />
          <SidebarItem label="Heading/Mark" href="/typography/heading" />
          <SidebarItem label="HR" href="/typography/hr" />
          <SidebarItem label="Image" href="/typography/image" />
          <SidebarItem label="Layout" href="/typography/layout" />
          <SidebarItem label="Link" href="/typography/link" />
          <SidebarItem label="List" href="/typography/list" />
          <SidebarItem label="Paragraph" href="/typography/paragraph" />
          <SidebarItem label="Span" href="/typography/span" />
        </SidebarDropdownWrapper>
        <SidebarDropdownWrapper spanClass="font-bold" label="PLUGINS" svgClass="me-4">
          <SidebarItem label="Chart" href="/plugins/chart" />
        </SidebarDropdownWrapper>
      </SidebarGroup>
    </Sidebar>
  {/snippet}
  {#if isLargeScreen}
    {@render sidebarComponents()}
  {:else}
    <Drawer {drawerStatus} {closeDrawer} class="w-64">
      {@render sidebarComponents()}
    </Drawer>
  {/if}
  <main class="mx-auto min-w-0 max-w-7xl flex-auto px-8 pb-20 lg:static lg:max-h-full lg:overflow-visible lg:pl-72">
    <Button color="light" class="w-full mt-2 lg:hidden" onclick={drawer.toggle}>Open components list</Button>
    <div id="mainContent">
      {@render children()}
    </div>
  </main>
</div>
<Footer />
