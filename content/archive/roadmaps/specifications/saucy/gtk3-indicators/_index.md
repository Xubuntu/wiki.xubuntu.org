---
title: "Gtk3 Indicators"
bookHidden: true
---

*Migrated from [Ubuntu Wiki](https://wiki.ubuntu.com/Xubuntu/Roadmap/Specifications/Saucy/Gtk3Indicators), last updated 2013-11-22.*

# Instructions on how to get Gtk3 indicators in a Gtk2 Xfce-Panel

## Installation

### Step 1: Install dependencies
`sudo apt-get build-dep xfce4-panel libxfce4ui xfce4-indicator-plugin`
`sudo apt-get install git xfce4-dev-tools gtk-doc-tools libindicator3-dev libido3-0.1-dev`

### Step 2: xfce4-panel

`git clone git://git.xfce.org/xfce/xfce4-panel`
`cd xfce4-panel`
`git checkout andrzejr/wrapper3`
`./autogen.sh --enable-gtk3`
*# (above you can add --prefix=/usr if you're not afraid of reinstalling your xfce4-panel with "sudo apt-get install xfce4-panel --reinstall")*
`make`
`sudo make install`
`sudo ldconfig # (to update libraries)`
`cd ..`

### Step 3: libxfce4ui

`git clone git://git.xfce.org/xfce/libxfce4ui`
`cd libxfce4ui`
`./autogen.sh --enable-gtk3`
`make`
`sudo make install`
`sudo ldconfig`
`cd ..`

### Step 4: xfce4-indicator-panel

`git clone git://git.xfce.org/panel-plugins/xfce4-indicator-plugin`
`cd xfce4-indicator-plugin`
`./autogen.sh`
*# (if you used --prefix=/usr before, use it again here)*
`make`
`sudo make install`
`cd ..`

### Gtk3 Indicators

`sudo apt-get install indicator-power indicator-bluetooth indicator-datetime indicator-keyboard indicator-printers indicator-sound indicator-sync indicator-messages`
`sudo apt-get purge indicator-sound-gtk2 indicator-application-gtk2`

## Usage

Run `xfce4-panel --restart` and your panel might look half-empty.
Be sure to either backup your config (~/.config/xfce4/..) or be ready to recreate your panel by hand.
The first time you run it you might get crashes because gtk2 indicator backends are still running. You can ignore this.

## Known Issues

### indicator-datetime config panel
You can't access it unless you are running Unity. This affects gnome-classic too. [#1074314](https://bugs.launchpad.net/ubuntu/+source/indicator-datetime/+bug/1074314)

### Various indicators have no menu
This isn't specific to any DE. Test case affects Unity too. [#1203888](https://bugs.launchpad.net/ubuntu/+source/glipper/+bug/1203888/) (fixed in saucy and trusty.)

### Datetime/Session indicators sometimes don't load at startup
Affects other sessions. [#1239710](https://bugs.launchpad.net/ubuntu/+source/indicator-datetime/+bug/1239710) (fix is in proposed.)
