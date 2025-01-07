<script lang="ts">
  import generateId from '$lib/elements/utils/generateId';

  export let fillPercent: number = 100;
  export let fillColor: string = '#F5CA14';
  export let strokeColor: string = '#F5CA14';
  export let size: string = "1.2rem";
  export let ariaLabel: string = 'star';
  export let id: string = generateId();
  export let role = 'img';
</script>

<svg width={size} height={size} {...$$restProps} class={$$props.class} aria-label={ariaLabel} viewBox="0 0 512 512" {role} on:click>
  <defs>
    <linearGradient {id}>
      {#if fillPercent !== 100}
        <stop offset="0%" stop-color={fillColor} />
        <stop offset="{fillPercent}%" stop-color={fillColor} />
        <stop offset="{fillPercent}%" stop-color="transparent" />
        <stop offset="100%" stop-color="transparent" />
      {:else}
        <stop offset="0%" stop-color={fillColor} />
        <stop offset="100%" stop-color={fillColor} />
      {/if}
    </linearGradient>
  </defs>
  <!-- <g fill="url(#{id})" stroke={strokeColor} stroke-width="2">
    <polygon
      points="165.000, 185.000, 188.511, 197.361, 184.021, 171.180, 
    203.042, 152.639, 176.756, 148.820, 165.000, 125.000, 
    153.244, 148.820, 126.958, 152.639, 145.979, 171.180,
    141.489, 197.361, 165.000, 185.000" />
  </g> -->
  <path fill="url(#{id})" stroke={strokeColor} stroke-width="15" d="M394,480a16,16,0,0,1-9.39-3L256,383.76,127.39,477a16,16,0,0,1-24.55-18.08L153,310.35,23,221.2A16,16,0,0,1,32,192H192.38l48.4-148.95a16,16,0,0,1,30.44,0l48.4,149H480a16,16,0,0,1,9.05,29.2L359,310.35l50.13,148.53A16,16,0,0,1,394,480Z"></path>
</svg>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let fillPercent: number = 100;
@prop export let fillColor: string = '#F5CA14';
@prop export let strokeColor: string = '#F5CA14';
@prop export let size: number = 24;
@prop export let ariaLabel: string = 'star';
@prop export let id: string = generateId();
@prop export let role = 'img';
-->
