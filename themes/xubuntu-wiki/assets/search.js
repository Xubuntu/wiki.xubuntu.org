// Search results page, backed by Pagefind (https://pagefind.app/).
// The index is built after Hugo by `pagefind --site public`. Pages opt in with
// data-pagefind-body and carry a "section" filter, which drives the chips.

const page = document.querySelector("[data-search-page]");
const titleEl = page.querySelector("[data-search-title]");
const countEl = page.querySelector("[data-search-count]");
const chipsEl = page.querySelector("[data-search-chips]");
const resultsEl = page.querySelector("[data-search-results]");
const moreEl = page.querySelector("[data-search-more]");
const emptyEl = page.querySelector("[data-search-empty]");
const unavailableEl = page.querySelector("[data-search-unavailable]");

const PAGE_SIZE = 20;
const query = (new URLSearchParams(location.search).get("q") || "").trim();

let pagefind = null;
let sectionCounts = {};
let total = 0;
let filter = "";
let hits = [];
let shown = 0;

const escapeHTML = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

const plural = (n) => (n === 1 ? "1 page" : `${n} pages`);

function renderChips() {
  chipsEl.replaceChildren();
  if (!total) return;
  const chip = (label, value, n) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "wiki-chip";
    b.textContent = `${label} ${n}`;
    b.setAttribute("aria-pressed", String(filter === value));
    b.addEventListener("click", () => {
      if (filter === value) return;
      filter = value;
      runSearch();
    });
    chipsEl.append(b);
  };
  chip("All", "", total);
  Object.keys(sectionCounts)
    .filter((s) => sectionCounts[s] > 0)
    .sort()
    .forEach((s) => chip(s, s, sectionCounts[s]));
}

// Pagefind excerpts are HTML-escaped text with <mark> around matches.
function resultHTML(r) {
  const section = (r.filters && r.filters.section && r.filters.section[0]) || "";
  const trail = ["Wiki", section].filter(Boolean).join(" › ");
  const title = (r.meta && r.meta.title) || r.url;
  return `<a class="wiki-result" href="${escapeHTML(r.url)}">` +
    `<span class="wiki-result-trail">${escapeHTML(trail)}</span>` +
    `<span class="wiki-result-title">${escapeHTML(title)}</span>` +
    (r.excerpt ? `<span class="wiki-result-desc">${r.excerpt}</span>` : "") +
    `</a>`;
}

async function showMore() {
  moreEl.disabled = true;
  const batch = await Promise.all(hits.slice(shown, shown + PAGE_SIZE).map((h) => h.data()));
  resultsEl.insertAdjacentHTML("beforeend", batch.map(resultHTML).join(""));
  shown += batch.length;
  moreEl.hidden = shown >= hits.length;
  moreEl.disabled = false;
}

async function runSearch() {
  const options = filter ? { filters: { section: filter } } : {};
  const search = await pagefind.search(query, options);
  if (!search) return; // superseded by a newer search
  hits = search.results;
  shown = 0;
  resultsEl.replaceChildren();
  countEl.textContent = plural(hits.length);
  renderChips();
  emptyEl.hidden = total > 0;
  await showMore();
}

async function init() {
  if (!query) {
    countEl.textContent = "Type a word in the search field above.";
    return;
  }
  titleEl.textContent = `Results for “${query}”`;
  document.title = `Results for “${query}” ‹ ${document.title.split(" ‹ ").pop()}`;
  countEl.textContent = "Searching…";

  try {
    pagefind = await import(page.dataset.pagefind);
  } catch (e) {
    countEl.textContent = "";
    unavailableEl.hidden = false;
    return;
  }
  await pagefind.options({ baseUrl: page.dataset.base, excerptLength: 30 });
  // Load the filter index up front; otherwise searches return no per-section counts.
  await pagefind.filters();

  // Unfiltered counts per section, for the chips.
  const all = await pagefind.search(query);
  total = all.results.length;
  sectionCounts = (all.filters && all.filters.section) || {};
  await runSearch();
}

moreEl.addEventListener("click", showMore);
window.addEventListener("DOMContentLoaded", init);
