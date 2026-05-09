# wiki.xubuntu.org

Source repository for the [Xubuntu team wiki](https://wiki.xubuntu.org/), a Hugo-based static site where Xubuntu contributors coordinate development, track project decisions, and archive meeting logs.

## Editing content

All wiki content lives in the [`content/`](content/) directory as Markdown (`.md`) files. If you want to fix a typo, update a page, or add new content:

1. Fork this repository on GitHub.
2. Edit or add a Markdown file under `content/`.
3. Open a pull request against the `main` branch.

You can also click **Edit this page** at the bottom of any wiki page to jump straight to the file on GitHub.

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

## Repository structure

```
content/        Wiki pages (Markdown)
layouts/        Custom Hugo templates
assets/         Custom SCSS styles
static/         Static assets (favicon)
themes/         Hugo themes (git submodules)
hugo.toml       Site configuration
```

## License

Except where otherwise noted, content on this wiki is licensed under
[CC Attribution-Noncommercial-Share Alike 4.0 International](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.en).
