<script lang="ts">
  import { slide } from "svelte/transition";
  import { type ArxivItem } from "./utils";
  export let item: ArxivItem;
  let abstractOpen = false;
</script>

<div class="my-4">
  <div>
    <a class="text-cyan-800 underline" href={item.link}>{item.title}</a>
  </div>
  <div>{item.authors}</div>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div
    class="text-cyan-800 cursor-pointer flex text-sm no-underline"
    on:click={() => {
      abstractOpen = !abstractOpen;
    }}
  >
    abstract ({abstractOpen ? "-" : "+"})
  </div>
  {#if abstractOpen}
    <div class="text-xs" transition:slide>
      {item.abstract}
    </div>
  {/if}
</div>
