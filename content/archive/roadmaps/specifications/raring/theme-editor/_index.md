---
title: "Theme Editor"
---

*Migrated from [Ubuntu Wiki](https://wiki.ubuntu.com/Xubuntu/Roadmap/Specifications/Raring/ThemeEditor), last updated 2013-05-09.*

## Implement a tool to configure GTK theme colors
| | |
|---|---|
| **Title** | Configure GTK theme |
| **Source** | [gtk-theme-config](http://github.com/satya164/gtk-theme-config) |
| **Assignee** | Satyajit Sahoo |

## Detailed specification

The tool allows anyone to change some basic elements of a GTK theme easily (both GTK2 and GTK3) with a simple interface.

Currently, it has the following features,

- Customize selection background color
- Customize Xfce panel, Gnome panel and Unity panel
- Customize menu colors

![gtk-theme-config.png](/archive/roadmaps/specifications/raring/theme-editor/gtk-theme-config.png)

The toggle switches just turn off recoloring the respective widgets without loosing the saved color. All color customization can be reset with a click with the "Revert" button.
