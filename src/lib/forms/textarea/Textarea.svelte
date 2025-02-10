<script lang="ts">
  import { type TextareaProps as Props, textarea } from ".";

  let { header, footer, value = $bindable(), divClass, innerClass, headerClass, footerClass, disabled, class: className, cols, autoexpand = false, maxRows = 15, ...restProps }: Props = $props();

  let hasHeader = !!header;
  let hasFooter = !!footer;
  let wrapped: boolean = $state(false);
  if (header || footer) {
    wrapped = true;
  } else {
    wrapped = false;
  }

  const { base, wrapper, innerWrapper, headerCls, footerCls } = $derived(textarea({ wrapped, hasHeader, hasFooter, cols: !!cols }));
  
  function expandTextarea(this: HTMLTextAreaElement) {
    if (!autoexpand) return;

    // Get the element
    const textarea = this;

    // Set required styles for this to function properly.
    textarea.style.setProperty('resize', 'none');
    textarea.style.setProperty('min-height', '0');
    textarea.style.setProperty('max-height', 'none');
    textarea.style.setProperty('height', 'auto');

    // Set rows attribute to number of lines in content

    // Reset rows attribute to get accurate scrollHeight
    textarea.setAttribute('rows', '1');

    // Get the computed values object reference
    const cs = getComputedStyle(textarea);

    // Force content-box for size accurate line-height calculation
    // Remove scrollbars, lock width (subtract inline padding and inline border widths)
    // and remove inline padding and borders to keep width consistent (for text wrapping accuracy)
    const inline_padding = parseFloat(cs['padding-left']) + parseFloat(cs['padding-right']);
    const inline_border_width = parseFloat(cs['border-left-width']) + parseFloat(cs['border-right-width']);
    textarea.style.setProperty('overflow', 'hidden', 'important');
    textarea.style.setProperty('width', (parseFloat(cs['width']) - inline_padding - inline_border_width) + 'px');
    textarea.style.setProperty('box-sizing', 'content-box');
    textarea.style.setProperty('padding-inline', '0');
    textarea.style.setProperty('border-width', '0');
    
    // Get the base line height, and top / bottom padding.
    const block_padding = parseFloat(cs['padding-top']) + parseFloat(cs['padding-bottom']);
    const line_height =
      // If line-height is not explicitly set, use the computed height value (ignore padding due to content-box)
      cs['line-height'] === 'normal' ? parseFloat(cs['height'])
      // Otherwise (line-height is explicitly set), use the computed line-height value.
      : parseFloat(cs['line-height']);

    // Get the scroll height (rounding to be safe to ensure cross browser consistency)
    const scroll_height = Math.round(textarea.scrollHeight);

    // Undo overflow, width, border-width, box-sizing & inline padding overrides
    textarea.style.removeProperty('width');
    textarea.style.removeProperty('box-sizing');
    textarea.style.removeProperty('padding-inline');
    textarea.style.removeProperty('border-width');
    textarea.style.removeProperty('overflow');

    // Subtract block_padding from scroll_height and divide that by our line_height to get the row count.
    // Round to nearest integer as it will always be within ~.1 of the correct whole number.
    const rows = Math.round((scroll_height - block_padding) / line_height);

    // Set the calculated rows attribute (limited by maxRows)
    textarea.setAttribute("rows", "" + Math.min(rows, Math.abs(maxRows)));
  }
</script>

<div class={wrapper({ class: divClass })}>
  {#if header}
    <div class={headerCls({ class: headerClass })}>
      {@render header()}
    </div>
  {/if}
  <div class={innerWrapper({ class: innerClass })}>
    <textarea bind:value {disabled} {...restProps} class={base({ className })} oninput={expandTextarea}></textarea>
  </div>
  {#if footer}
    <div class={footerCls({ class: footerClass })}>
      {@render footer()}
    </div>
  {/if}
</div>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: header: any;
@props:footer: any;
@props:value: any = $bindable();
@props:divClass: any;
@props:innerClass: any;
@props:headerClass: any;
@props:footerClass: any;
@props:disabled: any;
@props:class: string;
@props:cols: any;
-->
