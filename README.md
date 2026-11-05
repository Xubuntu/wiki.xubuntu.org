# wiki.xubuntu.org

Source repository for the [Xubuntu team wiki](https://wiki.xubuntu.org/), a Hugo-based static site where Xubuntu contributors coordinate development, track project decisions, and archive meeting logs.

## Editing content

All wiki content lives in the [`content/`](content/) directory as Markdown (`.md`) files. If you want to fix a typo, update a page, or add new content:

1. Fork this repository on GitHub.
2. Edit or add a Markdown file under `content/`.
3. Open a pull request against the `main` branch.

You can also click **Edit this page** on any wiki page to jump straight to the file on GitHub. The [Wiki Editing Guide](content/editing.md) covers front matter (`title`, `description`, section `icon`s) and writing conventions.

### Content sections

| Section | Path | Purpose |
|---|---|---|
| Archive | `content/archive/` | Historical records, past leaders, and release roadmaps |
| Development | `content/devel/` | Developer references: Git workflow, GTK, PPAs |
| Documentation | `content/doc/` | Docs team information and contributor guides |
| Marketing | `content/marketing/` | Marketing projects, materials, and licenses |
| Meetings | `content/meetings/` | Current meeting agenda and archive of past meetings |
| Proposals | `content/proposals/` | Active and past proposals |
| Quality Assurance | `content/qa/` | ISO testing, QA runthrough guides, tester resources |
| Website | `content/website/` | Website team docs, social media, and related sites |

## Running the site locally

You will need [Hugo](https://gohugo.io/) (extended edition) installed. Clone the repo with submodules:

```sh
git clone --recurse-submodules https://github.com/Xubuntu/wiki.xubuntu.org.git
cd wiki.xubuntu.org
hugo server
```

Then open `http://localhost:1313/` in your browser. Changes to Markdown files are reflected immediately.

If you cloned without `--recurse-submodules`, fetch the themes with:

```sh
git submodule update --init
```

### Using distrobox

If you use [distrobox](https://distrobox.it/), a manifest is provided to spin up an Ubuntu 24.04 container with the exact Hugo extended and Pagefind versions used by CI ([`distrobox.ini`](distrobox.ini)):

```sh
distrobox assemble create --file distrobox.ini
distrobox enter wiki-xubuntu-org
git submodule update --init
hugo server
```

On subsequent runs:

```sh
distrobox enter wiki-xubuntu-org
hugo server
```

### Search

Search is powered by [Pagefind](https://pagefind.app/), which indexes the built site after Hugo runs (CI does this on every deploy). `hugo server` doesn't build the index, so the search page shows a notice instead of results. To preview search locally, build the site and let Pagefind serve it:

```sh
hugo --baseURL http://localhost:1414/ && pagefind --site public --serve
```

Then open `http://localhost:1414/`. Pagefind is installed in the distrobox; elsewhere, use `npx pagefind` or a [release binary](https://github.com/Pagefind/pagefind/releases). Pages opt into the index through `data-pagefind-body` in the theme's layouts, so generated pages (search, sitemap, history) stay out of results.

### Page history

Each page's **History** view is built from `data/history.json`, which `scripts/gen-history.py` generates from the Git log (CI runs it before every build). Locally the file is optional: without it, History links point to GitHub. To preview the history pages, run:

```sh
python3 scripts/gen-history.py
hugo server
```

## Repository structure

```
content/        Wiki pages (Markdown)
  history/        Content adapter that builds /history/<page>/ from data/history.json
data/           Generated history data (not committed)
scripts/        Build helpers (gen-history.py)
layouts/        Section-specific templates and shortcodes
themes/         Hugo themes
  xubuntu-wiki/   Site theme: templates, styles, fonts, images, favicon
  hugo-redirect/  Redirect support (git submodule)
hugo.toml       Site configuration
```

## License

Except where otherwise noted, content on this wiki is licensed under
[CC Attribution-Noncommercial-Share Alike 4.0 International](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.en).
