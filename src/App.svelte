<script lang="ts">
  import { onMount } from "svelte";
  import {
    cacheFetch,
    type ArxivItem,
    xmlToEntries,
    bustCache,
    setTargetArea,
    getTargetArea,
  } from "./utils";
  import Publication from "./Publication.svelte";

  import TailwindCss from "./TailwindCSS.svelte";

  let arxivItems: ArxivItem[] = [];
  let state: "loading" | "loaded" | "error" = "loading";
  let error: string | null = null;
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
    cacheFetch()
      .then((text) => {
        state = "loaded";
        arxivItems = xmlToEntries(text);
      })
      .catch((e) => {
        state = "error";
        error = e.message;
      });
  onMount(() => buildFeed());
  $: groups = arxivItems.reduce((acc, item) => {
    acc[item.date] = (acc[item.date] || []).concat(item);
    return acc;
  }, {});
  $: days = Object.keys(groups).sort().reverse();

  let menuOpen = false;
  const fields = {
    "cs.PL": { long: "Programming Languages", short: "PL" },
    "cs.HC": { long: "Human-Computer Interaction", short: "HCI" },
  };
  $: targetArea = getTargetArea();
</script>

<TailwindCss />

<main class="w-full h-full flex flex-col items-center">
  <nav class="w-full bg-black text-white px-2 py-1 text-2xl">
    <div class="flex flex-row justify-between">
      <button
        on:click={() => {
          menuOpen = !menuOpen;
        }}
      >
        {fields[targetArea].short} Reader
      </button>
      <button
        on:click={() => {
          state = "loading";
          bustCache().then(buildFeed);
        }}
      >
        Hard Refresh
      </button>
    </div>
    {#if menuOpen}
      <div class="flex flex-col">
        {#each Object.keys(fields) as field}
          <button
            on:click={() => {
              setTargetArea(field);
              targetArea = field;
              state = "loading";
              bustCache().then(buildFeed);
              menuOpen = false;
            }}
          >
            {fields[field].long}
          </button>
        {/each}
      </div>
    {/if}
  </nav>
  {#if state === "loading"}
    <h1
      class="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black"
    >
      LOADING
    </h1>
  {:else if state === "error"}
    <h1 class="text-5xl font-black text-red-500">{error}</h1>
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
