// Search results page: loads search-index.json, matches with Fuse.js,
// filters by section and highlights matches.
// Index entries: t = title, d = description, s = section, h = href, x = summary.

const page = document.querySelector("[data-search-page]");
const titleEl = page.querySelector("[data-search-title]");
const countEl = page.querySelector("[data-search-count]");
const chipsEl = page.querySelector("[data-search-chips]");
const resultsEl = page.querySelector("[data-search-results]");
const emptyEl = page.querySelector("[data-search-empty]");

const query = (new URLSearchParams(location.search).get("q") || "").trim();
let filter = "";
let results = [];

const escapeHTML = (s) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

// Wrap each query word found in `text` with <mark>.
function highlight(text, words) {
  const safe = escapeHTML(text);
  if (!words.length) return safe;
  const re = new RegExp("(" + words.map((w) => escapeHTML(w).replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|") + ")", "gi");
  return safe.replace(re, "<mark>$1</mark>");
}

// A short excerpt of `text` around the first match.
function excerpt(text, words, size = 180) {
  const lower = text.toLowerCase();
  let at = -1;
  for (const w of words) {
    const i = lower.indexOf(w.toLowerCase());
    if (i !== -1 && (at === -1 || i < at)) at = i;
  }
  if (at === -1 || text.length <= size) return text.slice(0, size) + (text.length > size ? "…" : "");
  const start = Math.max(0, at - 50);
  return (start > 0 ? "…" : "") + text.slice(start, start + size) + (start + size < text.length ? "…" : "");
}

function plural(n) {
  return n === 1 ? "1 page" : `${n} pages`;
}

function render() {
  const words = query.split(/\s+/).filter(Boolean);
  const shown = filter ? results.filter((r) => r.s === filter) : results;

  // Chips: All + one per section that has hits.
  const counts = new Map();
  results.forEach((r) => counts.set(r.s, (counts.get(r.s) || 0) + 1));
  chipsEl.replaceChildren();
  if (results.length) {
    const chip = (label, value, n) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "wiki-chip";
      b.textContent = `${label} ${n}`;
      b.setAttribute("aria-pressed", String(filter === value));
      b.addEventListener("click", () => { filter = value; render(); });
      chipsEl.append(b);
    };
    chip("All", "", results.length);
    [...counts.keys()].filter(Boolean).sort().forEach((s) => chip(s, s, counts.get(s)));
  }

  resultsEl.innerHTML = shown.map((r) => {
    const trail = ["Wiki", r.s].filter(Boolean).join(" › ");
    const desc = r.d || excerpt(r.x, words);
    return `<a class="wiki-result" href="${escapeHTML(r.h)}">` +
      `<span class="wiki-result-trail">${escapeHTML(trail)}</span>` +
      `<span class="wiki-result-title">${highlight(r.t, words)}</span>` +
      (desc ? `<span class="wiki-result-desc">${highlight(desc, words)}</span>` : "") +
      `</a>`;
  }).join("");

  countEl.textContent = plural(shown.length);
  emptyEl.hidden = results.length > 0;
}

async function run() {
  if (!query) {
    countEl.textContent = "Type a word in the search field above.";
    return;
  }
  titleEl.textContent = `Results for “${query}”`;
  document.title = `Results for “${query}” ‹ ${document.title.split(" ‹ ").pop()}`;
  countEl.textContent = "Searching…";

  const index = await (await fetch(page.dataset.index)).json();
  const fuse = new Fuse(index, {
    keys: [
      { name: "t", weight: 3 },
      { name: "d", weight: 2 },
      { name: "x", weight: 1 },
    ],
    ignoreLocation: true,
    threshold: 0.3,
    minMatchCharLength: 2,
  });
  results = fuse.search(query).map((r) => r.item);
  render();
}

window.addEventListener("DOMContentLoaded", run);
