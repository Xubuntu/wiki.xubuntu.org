---
title: "Wiki Editing Guide"
description: "How pages are stored, how to edit them on GitHub, and how to preview changes locally."
---

Every page on this wiki is a Markdown file in the [wiki.xubuntu.org repository](https://github.com/Xubuntu/wiki.xubuntu.org) on GitHub. Changes go through pull requests, so a team member reviews each edit before it goes live.

## Editing a page

1. Open the page and click **Edit this page**.
2. Choose **Open in GitHub editor**. If you don't have write access, GitHub forks the repository for you.
3. Make your change, describe it in a sentence, and open a pull request.

Once the pull request is merged, the site rebuilds automatically and the change appears in the page's **History** tab.

To see the Markdown behind a page without editing it, use the **Source** tab.

## Adding a page

On a section's index page, use **New page in {Section}** to create a file in that section's folder. Name the file in lowercase with hyphens, for example `content/devel/release-checklist.md`. The file name becomes the page's address.

Start the file with front matter:

```yaml
---
title: "Release Checklist"
description: "One sentence that says what the page is for."
---
```

- `title` is shown as the page heading and in the navigation.
- `description` is optional. It appears under the title, in section listings and in search results.
- `bookHidden: true` keeps a page out of the sidebar and section listings, which suits long archives such as meeting logs.

Section index pages (`_index.md`) also take an `icon` with the name of a [Phosphor icon](https://phosphoricons.com/) that ships with the theme, and an optional `weight` to change the order of the section tabs.

## Writing tips

- Use `##` headings for the main parts of a page. They make up the **On this page** list.
- Link to other wiki pages with relative links, such as `[ISO testing](/qa/isotesting/)`.
- Start a quote with `**Note:**` to show it as a callout:

> **Note:** Callouts are for information readers shouldn't miss.

## Previewing locally

You need [Hugo](https://gohugo.io/) (extended edition). The README in the repository explains how to set it up, including a ready-made distrobox. Then run:

```sh
python3 scripts/gen-history.py   # optional: builds the History pages
hugo server
```

Open `http://localhost:1313/` to see the site. It reloads as you save.
