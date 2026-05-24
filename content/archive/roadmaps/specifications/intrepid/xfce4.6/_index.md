---
title: "Intrepid & Xfce 4.6"
---

*Migrated from [Ubuntu Wiki](https://wiki.ubuntu.com/Xubuntu/Roadmap/Specifications/Intrepid/Xfce4.6).*

| **Contents** |
|---|

# Intrepid & Xfce 4.6

This page describes our plans for Xfce 4.6 during the Intrepid release cycle.

Currently 4.5.80 (4.6beta) is being packaged in the xubuntu-dev PPA. Current notes so far

## xfconf
New Package, replaces xfce-mcs.
    - Missing manpages for binary
    - Affected by the libtool --as-needed bug

## xfce4-mixer

- Upstream rewrote to use gstreamer vs. alsa/oss directly.
- Needs patches ported (code has internally redone to the point that a rewrite is needed).

## xfce4-panel
- missing manpages

## xfce-session
- binary-without-manpage

## xfce4-settings
- Missing manpages
- Missing Debian menu files (?)

## xfdesktop4
- Xubuntu specific menu options need to be added (Important)
- Lintian is NOT happy (desktop file warnings), need to discuss how to fix
- Need to determine proper course of action w.r.t. to desktop files issue (see [Xfdesktop4DesktopFilesIssue])
