<script lang="ts">
  import { onMount } from "svelte";
  import { cacheFetch, type ArxivItem, xmlToEntries, bustCache } from "./utils";
  import Publication from "./Publication.svelte";

  import TailwindCss from "./TailwindCSS.svelte";

  let arxivItems: ArxivItem[] = [];
  let loading: Boolean = true;
  const dayMap = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const monthMap = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dev",
  ];
  const buildFeed = () =>
    cacheFetch().then((text) => {
      loading = false;
      arxivItems = xmlToEntries(text);
    });
  onMount(() => buildFeed());
  $: groups = arxivItems.reduce((acc, item) => {
    acc[item.date] = (acc[item.date] || []).concat(item);
    return acc;
  }, {});
  $: days = Object.keys(groups).sort().reverse();
</script>

<TailwindCss />

<main class="w-full h-full flex flex-col items-center">
  <nav
    class="w-full bg-black text-white flex flex-row justify-between px-2 py-1 text-2xl"
  >
    <div>HCI Reader</div>
    <button
      on:click={() => {
        loading = true;
        bustCache().then(buildFeed);
      }}
    >
      Hard Refresh
    </button>
  </nav>
  {#if loading}
    <h1
      class="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black"
    >
      LOADING
    </h1>
  {:else}
    <div class="w-full flex flex-col px-2 py-8">
      {#each days as day}
        <h1 class="text-5xl bolder">
          {dayMap[new Date(day).getDay() + 2]}, {monthMap[
            new Date(day).getMonth()
          ]}
          {new Date(day).getDate() + 2}
        </h1>
        <div>
          {#each groups[day] as item}<Publication {item} />{/each}
        </div>
      {/each}
    </div>
  {/if}
</main>
