import { get, set, del } from "idb-keyval";
const cacheKey = "arxiv-query-cache";
const cacheCheckKey = "arxiv-query-cache-key";
export async function cacheFetch() {
  const prev = await get(cacheKey);
  const key = await get(cacheCheckKey);
  if (!prev || !key) {
    const result = await query();
    set(cacheKey, result);
    set("arxiv-query-cache-key", new Date().toString());
    return result;
  }

  const delta = new Date().getTime() - new Date(key).getTime();
  const days = Math.floor(delta / 1000 / 60 / 60 / 24);

  if (days < 1) {
    return prev;
  }

  const result = await query();
  set(cacheKey, result);
  set("arxiv-query-cache-key", new Date().toString());
  return result;
}

export function getTargetArea(): string {
  const area = localStorage.getItem("simpleReaderTargetArea");
  if (area) {
    return area;
  }
  return "cs.HC";
}

export function setTargetArea(area: string): void {
  localStorage.setItem("simpleReaderTargetArea", area);
}

export async function bustCache() {
  await del(cacheCheckKey);
  await del(cacheKey);
}

const query = () =>
  fetch(
    `https://export.arxiv.org/api/query?search_query=cat:${getTargetArea()}&sortBy=submittedDate&sortOrder=descending&start=0&max_results=100`
  ).then((x) => x.text());

export type ArxivItem = {
  authors: string;
  abstract: string;
  title: string;
  date: string;
  link: string;
};

export function xmlToEntries(text: string): ArxivItem[] {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(text, "text/xml");
  const doc = xmlDoc.firstChild as any as Document;
  const entries = [...doc.children].filter((x) => x.tagName === "entry");
  return entries.map((entry) => {
    const getValues = (key: string) =>
      [...entry.getElementsByTagName(key)]
        .map((x) => x.innerHTML)
        .join(", ")
        .trim();

    const link = [...entry.getElementsByTagName("link")].map((x) =>
      x.getAttribute("href")
    )[0];
    return {
      authors: getValues("name"),
      abstract: getValues("summary"),
      title: getValues("title"),
      date: getValues("updated").split("T")[0],
      link,
    };
  });
}
