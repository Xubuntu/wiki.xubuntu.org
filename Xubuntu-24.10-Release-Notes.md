# Xubuntu 24.10 Release Notes

**Welcome to the Xubuntu 24.10 \"Oracular Oriole\" BETA release notes!**

Xubuntu 24.10 will be released on was released on Thursday, October 10,
2024, and will be supported for nine months until July 2025. For general
information and the latest updates for Xubuntu 24.10, check out the
[release page](https://xubuntu.org/release/24-10) on xubuntu.org.

-   [Known Issues](#known_issues)
-   [Ubuntu Common Release Notes](#ubuntu_common_release_notes)
-   [Major Updates](#major_updates)
-   [Updates](#updates)
-   [Changelogs](#changelogs)

## Known Issues

### Installer Issues

-   GRUB menu not displayed for dual-boot system installation
    ([2060624](https://bugs.launchpad.net/ubuntu/+source/grub2/+bug/2060624))
-   Installer may select two root (/) partitions
    ([2060896](https://bugs.launchpad.net/subiquity/+bug/2060896))
-   No shutdown prompt after installation
    ([1944519](https://bugs.launchpad.net/ubuntu/+source/casper/+bug/1944519))

```{=html}
<!-- -->
```
        * However, you should be able to press the Enter key to continue with the reboot.
    * OEM installation is not available.
        * It is under active development and will be ready in time for 24.04.1

### General Issues

-   Xfce Pulseaudio Plugin:
    -   Multiple notifications displayed if multiple Pulseaudio plugins
        added to panel
        ([1769775](https://bugs.launchpad.net/ubuntu/+source/xfce4-pulseaudio-plugin/+bug/1769775))
-   Virtual Machines:
    -   Xorg crashes after logging in or switching users on some virtual
        machines, including QEMU/GNOME Boxes and Virtualbox
        ([1861609](https://bugs.launchpad.net/ubuntu/+source/xorg-server/+bug/1861609))
        -   You may be able to resolve this issue by removing the
            `apt:libva-wayland2` package.
    -   Poor performance and audio stuttering in some virtual machines,
        including VMware and VirtualBox
        -   In these instances, you will need to either [adjust your configuration](https://gitlab.freedesktop.org/pipewire/pipewire/-/wikis/Troubleshooting#stuttering-audio-in-virtual-machine)
            (recommended) or replace PipeWire with PulseAudio

## Ubuntu Common Release Notes

The main Ubuntu [Release Notes](https://discourse.ubuntu.com/t/oracular-oriole-release-notes/44878)
covers both many of the other packages we carry and more issues common
to every Ubuntu flavor.

## Major Updates

### Xfce 4.19

Xfce 4.19 is under heavy development and is expected to be finalized in
the coming months, culminating in the release of Xfce 4.20. Xubuntu
24.10 ships with some Xfce 4.19 components for an early look at the next
generation of Xfce applications.

### Common with Ubuntu

### Additional Updates

## Appearance Updates

## Hardware Support

## Updates

*Significant package and version updates. For full package changelogs,
see the [Changelogs](#Changelogs) section below.*

### Application Stack

-   GNOME 48
-   GTK 2.24.33 / 3.24.43 / 4.16.1
-   MATE 1.26
-   Xfce 4.18 & 4.19

### Subsystems

-   BlueZ 5.77
-   CUPS 2.4.10
-   Mesa 24.2.2
-   Poppler 24.08.0
-   xdg-desktop-portal 1.18.4

### Themes

-   elementary-xfce 0.19
-   Greybird 3.23.3

### Applications

#### Xfce

-   Catfish 4.18.0
-   Exo 4.19.0
-   Gigolo 0.5.3
-   Mousepad 0.6.2
-   Ristretto 0.13.2
-   Thunar File Manager 4.19.3
-   Xfce Application Finder 4.19.2
-   Xfce Clipman Plugin 1.6.6
-   Xfce Netload Plugin 1.4.1
-   Xfce Panel 4.19.3
-   Xfce PulseAudio Plugin 0.4.8
-   Xfce Screenshooter 1.11.1
-   Xfce Settings 4.19.2
-   Xfce Systemload Plugin 1.3.2
-   Xfce Task Manager 1.5.7
-   Xfce Whisker Menu Plugin 2.8.3

#### MATE

-   Atril 1.26.2
-   Engrampa 1.26.2
-   MATE Calculator 1.26.0

#### GNOME

-   GNOME Disk Usage Analyzer 47.0
-   GNOME Disk Utility 46.1
-   GNOME Mines 40.1
-   GNOME Sudoku 47.0
-   Rhythmbox 3.4.7
-   Simple Scan 46.0

#### Everything Else

-   Blueman 2.4.3
-   Firefox 130.0.1 (snap)
-   GIMP 2.10.38
-   LibreOffice 24.8.1
-   Pipewire 1.2.3
-   Snapd 2.65.3
-   SGT Launcher 0.2.8
-   Thunderbird 128.2.2 (snap)

## Changelogs

### Xubuntu/Other Packages

-   apturl
    ([changelog](https://launchpad.net/ubuntu/oracular/+source/apturl/+changelog))
-   atril
    ([changelog](https://launchpad.net/ubuntu/oracular/+source/atril/+changelog))
-   baobab
    ([changelog](https://launchpad.net/ubuntu/oracular/+source/baobab/+changelog))
-   blueman
    ([changelog](https://launchpad.net/ubuntu/oracular/+source/blueman/+changelog))
-   elementary-xfce
    ([changelog](https://launchpad.net/ubuntu/oracular/+source/elementary-xfce/+changelog))
-   engrampa
    ([changelog](https://launchpad.net/ubuntu/oracular/+source/engrampa/+changelog))
-   gimp
    ([changelog](https://launchpad.net/ubuntu/oracular/+source/gimp/+changelog))
-   gnome-disk-utility
    ([changelog](https://launchpad.net/ubuntu/oracular/+source/gnome-disk-utility/+changelog))
-   gtk2-engines-xfce
    ([changelog](https://launchpad.net/ubuntu/oracular/+source/gtk2-engines-xfce/+changelog))
-   hexchat
    ([changelog](https://launchpad.net/ubuntu/oracular/+source/hexchat/+changelog))
-   lightdm-gtk-greeter
    ([changelog](https://launchpad.net/ubuntu/oracular/+source/lightdm-gtk-greeter/+changelog))
-   lightdm-gtk-greeter-settings
    ([changelog](https://launchpad.net/ubuntu/oracular/+source/lightdm-gtk-greeter-settings/+changelog))
-   mate-calc
    ([changelog](https://launchpad.net/ubuntu/oracular/+source/mate-calc/+changelog))
-   menulibre
    ([changelog](https://launchpad.net/ubuntu/oracular/+source/menulibre/+changelog))
-   mugshot
    ([changelog](https://launchpad.net/ubuntu/oracular/+source/mugshot/+changelog))
-   pavucontrol
    ([changelog](https://launchpad.net/ubuntu/oracular/+source/pavucontrol/+changelog))
-   rhythmbox
    ([changelog](https://launchpad.net/ubuntu/oracular/+source/rhythmbox/+changelog))
-   pipewire
    ([changelog](https://launchpad.net/ubuntu/oracular/+source/pipewire/+changelog))
-   sgt-launcher
    ([changelog](https://launchpad.net/ubuntu/oracular/+source/sgt-launcher/+changelog))
-   shimmer-themes
    ([changelog](https://launchpad.net/ubuntu/oracular/+source/shimmer-themes/+changelog))
-   syncaptic
    ([changelog](https://launchpad.net/ubuntu/oracular/+source/synaptic/+changelog))
-   xcape
    ([changelog](https://launchpad.net/ubuntu/oracular/+source/xcape/+changelog))
-   xubuntu-artwork
    ([changelog](https://launchpad.net/ubuntu/oracular/+source/xubuntu-artwork/+changelog))
-   xubuntu-core
    ([changelog](https://launchpad.net/ubuntu/oracular/+source/xubuntu-meta/+changelog))
-   xubuntu-default-settings
    ([changelog](https://launchpad.net/ubuntu/oracular/+source/xubuntu-default-settings/+changelog))
-   xubuntu-desktop
    ([changelog](https://launchpad.net/ubuntu/oracular/+source/xubuntu-meta/+changelog))
-   xubuntu-docs
    ([changelog](https://launchpad.net/ubuntu/oracular/+source/xubuntu-docs/+changelog))
-   xubuntu-meta
    ([changelog](https://launchpad.net/ubuntu/oracular/+source/xubuntu-meta/+changelog))
-   xubuntu-wallpapers
    ([changelog](https://launchpad.net/ubuntu/oracular/+source/xubuntu-artwork/+changelog))

### Xfce Core

-   exo
    ([changelog](https://launchpad.net/ubuntu/oracular/+source/exo/+changelog))
-   libxfce4ui
    ([changelog](https://launchpad.net/ubuntu/oracular/+source/libxfce4ui/+changelog))
-   libxfce4util
    ([changelog](https://launchpad.net/ubuntu/oracular/+source/libxfce4util/+changelog))
-   thunar
    ([changelog](https://launchpad.net/ubuntu/oracular/+source/thunar/+changelog))
-   thunar-volman
    ([changelog](https://launchpad.net/ubuntu/oracular/+source/thunar-volman/+changelog))
-   tumbler
    ([changelog](https://launchpad.net/ubuntu/oracular/+source/tumbler/+changelog))
-   xfce4-appfinder
    ([changelog](https://launchpad.net/ubuntu/oracular/+source/xfce4-appfinder/+changelog))
-   xfce4-panel
    ([changelog](https://launchpad.net/ubuntu/oracular/+source/xfce4-panel/+changelog))
-   xfce4-panel-profiles
    ([changelog](https://launchpad.net/ubuntu/oracular/+source/xfce4-panel-profiles/+changelog))
-   xfce4-power-manager
    ([changelog](https://launchpad.net/ubuntu/oracular/+source/xfce4-power-manager/+changelog))
-   xfce4-session
    ([changelog](https://launchpad.net/ubuntu/oracular/+source/xfce4-session/+changelog))
-   xfce4-settings
    ([changelog](https://launchpad.net/ubuntu/oracular/+source/xfce4-settings/+changelog))
-   xfconf
    ([changelog](https://launchpad.net/ubuntu/oracular/+source/xfconf/+changelog))
-   xfdesktop4
    ([changelog](https://launchpad.net/ubuntu/oracular/+source/xfdesktop4/+changelog))
-   xfwm4
    ([changelog](https://launchpad.net/ubuntu/oracular/+source/xfwm4/+changelog))

### Xfce Applications

-   catfish
    ([changelog](https://launchpad.net/ubuntu/oracular/+source/catfish/+changelog))
-   gigolo
    ([changelog](https://launchpad.net/ubuntu/oracular/+source/gigolo/+changelog))
-   mousepad
    ([changelog](https://launchpad.net/ubuntu/oracular/+source/mousepad/+changelog))
-   parole
    ([changelog](https://launchpad.net/ubuntu/oracular/+source/parole/+changelog))
-   ristretto
    ([changelog](https://launchpad.net/ubuntu/oracular/+source/ristretto/+changelog))
-   xfburn
    ([changelog](https://launchpad.net/ubuntu/oracular/+source/xfburn/+changelog))
-   xfce4-notifyd
    ([changelog](https://launchpad.net/ubuntu/oracular/+source/xfce4-notifyd/+changelog))
-   xfce4-screensaver
    ([changelog](https://launchpad.net/ubuntu/oracular/+source/xfce4-screensaver/+changelog))
-   xfce4-screenshooter
    ([changelog](https://launchpad.net/ubuntu/oracular/+source/xfce4-screenshooter/+changelog))
-   xfce4-taskmanager
    ([changelog](https://launchpad.net/ubuntu/oracular/+source/xfce4-taskmanager/+changelog))
-   xfce4-terminal
    ([changelog](https://launchpad.net/ubuntu/oracular/+source/xfce4-terminal/+changelog))

### Xfce Panel Plugins

-   xfce4-clipman-plugin
    ([changelog](https://launchpad.net/ubuntu/oracular/+source/xfce4-clipman-plugin/+changelog))
-   xfce4-cpugraph-plugin
    ([changelog](https://launchpad.net/ubuntu/oracular/+source/xfce4-cpugraph-plugin/+changelog))
-   xfce4-dict
    ([changelog](https://launchpad.net/ubuntu/oracular/+source/xfce4-dict/+changelog))
-   xfce4-indicator-plugin
    ([changelog](https://launchpad.net/ubuntu/oracular/+source/xfce4-indicator-plugin/+changelog))
-   xfce4-mailwatch-plugin
    ([changelog](https://launchpad.net/ubuntu/oracular/+source/xfce4-mailwatch-plugin/+changelog))
-   xfce4-netload-plugin
    ([changelog](https://launchpad.net/ubuntu/oracular/+source/xfce4-netload-plugin/+changelog))
-   xfce4-notes-plugin
    ([changelog](https://launchpad.net/ubuntu/oracular/+source/xfce4-notes-plugin/+changelog))
-   xfce4-places-plugin
    ([changelog](https://launchpad.net/ubuntu/oracular/+source/xfce4-places-plugin/+changelog))
-   xfce4-pulseaudio-plugin
    ([changelog](https://launchpad.net/ubuntu/oracular/+source/xfce4-pulseaudio-plugin/+changelog))
-   xfce4-quicklauncher-plugin
    ([changelog](https://launchpad.net/ubuntu/oracular/+source/xfce4-quicklauncher-plugin/+changelog))
-   xfce4-statusnotifier-plugin
    ([changelog](https://launchpad.net/ubuntu/oracular/+source/xfce4-statusnotifier-plugin/+changelog))
-   xfce4-systemload-plugin
    ([changelog](https://launchpad.net/ubuntu/oracular/+source/xfce4-systemload-plugin/+changelog))
-   xfce4-verve-plugin
    ([changelog](https://launchpad.net/ubuntu/oracular/+source/xfce4-verve-plugin/+changelog))
-   xfce4-weather-plugin
    ([changelog](https://launchpad.net/ubuntu/oracular/+source/xfce4-weather-plugin/+changelog))
-   xfce4-whiskermenu-plugin
    ([changelog](https://launchpad.net/ubuntu/oracular/+source/xfce4-whiskermenu-plugin/+changelog))
-   xfce4-xkb-plugin
    ([changelog](https://launchpad.net/ubuntu/oracular/+source/xfce4-xkb-plugin/+changelog))

### Thunar Plugins

-   thunar-archive-plugin
    ([changelog](https://launchpad.net/ubuntu/oracular/+source/thunar-archive-plugin/+changelog))
-   thunar-media-tags-plugin
    ([changelog](https://launchpad.net/ubuntu/oracular/+source/thunar-media-tags-plugin/+changelog))
