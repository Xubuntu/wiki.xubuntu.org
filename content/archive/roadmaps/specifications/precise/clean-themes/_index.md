---
title: "Specifications — Precise — Clean Themes"
---

## Clean theme and wallpaper lists

| Overview | |
|---|---|
| **Title** | Clean theme and wallpaper lists |
| **Blueprint** | [https://blueprints.launchpad.net/ubuntu/+spec/other-p-xubuntu-cleanthemes](https://blueprints.launchpad.net/ubuntu/+spec/other-p-xubuntu-cleanthemes) |
| **Assignee** | Pasi Lallinaho (knome) |
| **Release** | Precise Pangolin |

## Todo
- xfwm and GTK
  - Move the Shimmer Project themes to shimmer-themes
  - Add shimmer-themes as dependency/recommends for murrine-themes
  - Ship shimmer-themes and xfwm4 by default, drop all others
  - Write a blog article

## Done
- Wallpapers
  - Remove all xfce-* -wallpapers from xfdesktop

## Comments
- For simplicity, decided to keep xfwm4 and the new shimmer-themes package, and remove all others from default installation. We lose Clearlooks, NOX and the Windows-like themes by default, but we can always tell people to go install the packages that install those. Themes in the xfwm4 package will be stripped down for Xfce 4.10, until that some unnecessary themes stay. --- knome
