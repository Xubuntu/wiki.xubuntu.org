// Xubuntu Wiki: theme toggle, search shortcuts, phone menu, article views,
// edit dialog, history commit selection and the active TOC entry.

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

// Theme ---------------------------------------------------------------------
const root = document.documentElement;
$$("[data-theme-toggle]").forEach((btn) => {
  const sync = () => {
    const dark = root.getAttribute("data-theme") === "dark";
    btn.setAttribute("aria-pressed", String(dark));
  };
  sync();
  btn.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("wiki-theme", next); } catch (e) { /* private mode */ }
    sync();
  });
});

// Search shortcuts ----------------------------------------------------------
const searchRow = $("#wiki-search-row");
const searchToggle = $("[data-search-toggle]");
const isVisible = (el) => el && el.offsetParent !== null;

function setSearchRow(open) {
  if (!searchRow || !searchToggle) return;
  searchRow.hidden = !open;
  searchToggle.setAttribute("aria-expanded", String(open));
  if (open) $("input", searchRow).focus();
}
searchToggle?.addEventListener("click", () => setSearchRow(searchRow.hidden));

// Prefill the search fields on the results page.
const q = new URLSearchParams(location.search).get("q");
if (q && $("[data-search-page]")) {
  $$('input[name="q"]').forEach((i) => { i.value = q; });
}

document.addEventListener("keydown", (e) => {
  if (e.key !== "/" || e.ctrlKey || e.metaKey || e.altKey) return;
  const t = e.target;
  if (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName)) return;
  const desktop = $("[data-search-input]");
  e.preventDefault();
  if (isVisible(desktop)) {
    desktop.focus();
    desktop.select();
  } else {
    setSearchRow(true);
  }
});

// Phone menu drawer ---------------------------------------------------------
const drawer = $("#wiki-drawer");
let drawerReturn = null;

function setDrawer(open) {
  if (!drawer) return;
  drawer.hidden = !open;
  $$("[data-menu-open]").forEach((b) => b.setAttribute("aria-expanded", String(open)));
  document.body.style.overflow = open ? "hidden" : "";
  if (open) {
    drawerReturn = document.activeElement;
    $(".wiki-drawer-top [data-menu-close]", drawer)?.focus();
  } else if (drawerReturn) {
    drawerReturn.focus();
    drawerReturn = null;
  }
}
$$("[data-menu-open]").forEach((b) => b.addEventListener("click", () => setDrawer(true)));
$$("[data-menu-close]").forEach((b) => b.addEventListener("click", () => setDrawer(false)));
drawer?.addEventListener("click", (e) => {
  if (e.target.closest("a")) setDrawer(false);
});
drawer?.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    setDrawer(false);
    return;
  }
  if (e.key !== "Tab") return;
  // Keep focus inside the drawer while it is open.
  const items = $$("a, button", drawer).filter(isVisible);
  const first = items[0];
  const last = items[items.length - 1];
  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault();
    first.focus();
  }
});
matchMedia("(min-width: 760px)").addEventListener("change", (m) => {
  if (m.matches) {
    setDrawer(false);
    setSearchRow(false);
  }
});

// Article Read / Source views -----------------------------------------------
const viewTabs = $$("[data-view]");
viewTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    viewTabs.forEach((t) => {
      const on = t === tab;
      t.classList.toggle("active", on);
      t.setAttribute("aria-selected", String(on));
      const panel = document.getElementById(t.getAttribute("aria-controls"));
      if (panel) panel.hidden = !on;
    });
  });
});

// Edit dialog ---------------------------------------------------------------
const dialog = $("#wiki-edit-dialog");
if (dialog && typeof dialog.showModal === "function") {
  $$("[data-edit-open]").forEach((a) => {
    a.addEventListener("click", (e) => {
      if (e.ctrlKey || e.metaKey || e.shiftKey || e.button !== 0) return;
      e.preventDefault();
      dialog.showModal();
    });
  });
  $$("[data-edit-close]", dialog).forEach((b) => b.addEventListener("click", () => dialog.close()));
  // Clicks on the backdrop land on the <dialog> element itself.
  dialog.addEventListener("click", (e) => {
    if (e.target === dialog) dialog.close();
  });
}

// History: select a commit ---------------------------------------------------
const commits = $$("[data-commit]");
commits.forEach((btn) => {
  btn.addEventListener("click", () => {
    commits.forEach((b) => {
      const on = b === btn;
      b.classList.toggle("active", on);
      b.setAttribute("aria-selected", String(on));
      const panel = document.getElementById(b.getAttribute("aria-controls"));
      if (panel) panel.hidden = !on;
    });
    if (matchMedia("(max-width: 759px)").matches) {
      document.getElementById(btn.getAttribute("aria-controls"))?.scrollIntoView({ block: "start" });
    }
  });
});

// Active "On this page" entry -----------------------------------------------
const tocLinks = $$("[data-toc] a");
if (tocLinks.length && "IntersectionObserver" in window) {
  const byId = new Map();
  tocLinks.forEach((a) => {
    const id = decodeURIComponent(a.hash.slice(1));
    const h = document.getElementById(id);
    if (h) byId.set(h, a);
  });
  const visible = new Set();
  const setActive = () => {
    let target = null;
    for (const h of byId.keys()) {
      if (visible.has(h)) { target = h; break; }
    }
    if (!target) {
      // Nothing in view: use the last heading above the viewport.
      for (const h of byId.keys()) {
        if (h.getBoundingClientRect().top < 0) target = h;
      }
    }
    if (!target) target = byId.keys().next().value;
    tocLinks.forEach((a) => a.classList.toggle("active", byId.get(target) === a));
  };
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => (en.isIntersecting ? visible.add(en.target) : visible.delete(en.target)));
    setActive();
  }, { rootMargin: "0px 0px -60% 0px" });
  byId.forEach((_, h) => io.observe(h));
}
