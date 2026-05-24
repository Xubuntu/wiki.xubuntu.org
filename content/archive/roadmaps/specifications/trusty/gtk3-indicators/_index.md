---
title: "Instructions on how to get Gtk3 indicators in a Gtk2 Xfce-Panel"
---

*Migrated from [Ubuntu Wiki](https://wiki.ubuntu.com/Xubuntu/Roadmap/Specifications/Trusty/Gtk3Indicators).*

# Instructions on how to get Gtk3 indicators in a Gtk2 Xfce-Panel

**Note:** These instructions are a work-in-progress and will (hopefully) change in the next feek weeks/months as things consolidate.

## Installation

Download and install Trusty daily - you can install to a VM such as VirtualBox if you wish.

<http://cdimage.ubuntu.com/xubuntu/daily-live/current/>

### 1. Install PPA's

`sudo apt-get update && sudo apt-get upgrade`
`sudo add-apt-repository ppa:xubuntu-dev/xfce-4.12`
`sudo add-apt-repository ppa:noskcaj/indicator-gtk3`
`sudo add-apt-repository ppa:shimmerproject/daily`

### 2. Update and upgrade

`sudo apt-get update`
`sudo apt-get dist-upgrade`

### 3. Install Gtk3 indicators

`sudo apt-get install indicator-bluetooth indicator-datetime indicator-keyboard indicator-messages indicator-network indicator-power indicator-printers indicator-session indicator-sound indicator-sync`

`sudo apt-get purge indicator-sound-gtk2 indicator-application-gtk2`

## Usage

Logout and then login.

## Known Issues

**NOTE: If you are affected by bugs that are NOT listed below, please report them as normal. Otherwise, we are aware and don't need them reporting again**

### indicator-datetime config panel
You can't access it unless you are running Unity. This affects gnome-classic too. Now that [Ubuntu-Desktop will have it's own control center](https://lists.ubuntu.com/archives/ubuntu-desktop/2013-December/004360.html) this bug can hopefully get fixed. [#1074314](https://bugs.launchpad.net/ubuntu/+source/indicator-datetime/+bug/1074314)

### Indicators may fail to load
Indicators are currently in the middle of a change from DBus activation to Upstart, and may fail
to load until this change is completed. As a workaround, put "INDICATOR_ALLOW_NO_WATCHERS=yes" in /etc/environment and reboot. [#1185565](https://bugs.launchpad.net/indicator-network/+bug/1185565)

### Play button animation incomplete when launching a media player from the sound menu
Minor visual glitch. [#1231796](https://bugs.launchpad.net/indicator-sound/+bug/1231796)

### Gtk3 indicator background turns transparent/black occasionally
This bug can occur if the panel style is set to 'none (use system style)' and alpha to 100. [Xfce Bug #10658](https://bugzilla.xfce.org/show_bug.cgi?id=10658) (Fix available)

## Fixed Issues

### Various indicators have no menu
This isn't specific to any DE. Test case affects Unity too. [#1203888](https://bugs.launchpad.net/ubuntu/+source/libdbusmenu/+bug/1203888/) (fixed in saucy and trusty)

### Datetime/Session indicators sometimes don't load at startup
Affects other sessions. [#1239710](https://bugs.launchpad.net/ubuntu/+source/indicator-datetime/+bug/1239710) (fixed is saucy and trusty)
