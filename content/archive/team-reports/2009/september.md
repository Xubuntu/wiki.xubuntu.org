---
title: "September 2009"
date: 2009-09-01
bookHidden: true
---

*Migrated from [Ubuntu Wiki](https://wiki.ubuntu.com/Xubuntu/TeamReports/09/September), last updated 2009-10-01.*

**Xubuntu team report for September 2009**

#### Packaging, Development, & Testing

- Cody regenerated the Xubuntu metapackage.
- Lionel updated xubuntu-default-settings to provide default.desktop desktop session file to correctly set system wide default session.
- Lionel uploaded a new upstream bugfix release of xfce4-volumed.
- Lionel patched xfce4-power-manager to fix a segfault in xfpm_session_set_client_id.
- Lionel fixed LP #412659 by updating the xubuntu-artwork package to increase the alternative priority of the xubuntu usplash theme so that the xubuntu theme is preferred over the ubuntu one.
- Lionel updated xubuntu-default-settings to improve integration with new gdm and readd a shortcut for xfce4-popup-menu (LP: #424282).
- Lionel fixed LP #195649 by patching exo to fix failure to eject video cd/dvd & data cd/dvd using hardware button.
- Cody added xfce4-volumed to xubuntu desktop seed.
- Cody removed thunar-tpa (trash panel applet) from default session as part of the [xubuntu-karmic-session-slim-down](https://blueprints.launchpad.net/xubuntu-desktop/+spec/xubuntu-karmic-session-slim-down) specification.
- SiDi patched xfce4-power-manager to use custom notification icons as part of the notify-osd spec

#### Artwork and marketing
- Pasi and SiDi worked with James Schriver and MadsRH to make the new GTK theme and mockups for Xsplash
- Pasi and Jim did the new documentation startpage
- Pasi worked extensively with Karmic release artwork (GDM, wallpaper and overall look)
