# Xubuntu 24.04 Release Notes

**Welcome to the Xubuntu 24.04 \"Noble Numbat\" release notes!**

Xubuntu 24.04 will be released on Thursday, April 25, 2024, and will be
supported for three years until April 2027. For general information and
the latest updates for Xubuntu 24.04, check out the [release page](https://xubuntu.org/release/24-04) on xubuntu.org.

To beta test Xubuntu 24.04, first take a look at the *Installer Issues*
section below. Then, visit the [download page](https://cdimage.ubuntu.com/xubuntu/releases/24.04/beta/) for
either Xubuntu Minimal or Xubuntu Desktop.

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
            `libva-wayland2` package.
    -   Poor performance and audio stuttering in some virtual machines,
        including VMware and VirtualBox
        -   In these instances, you will need to either [adjust your configuration](https://gitlab.freedesktop.org/pipewire/pipewire/-/wikis/Troubleshooting#stuttering-audio-in-virtual-machine)
            (recommended) or replace PipeWire with PulseAudio

## Ubuntu Common Release Notes

The main Ubuntu [Release Notes](https://discourse.ubuntu.com/t/noble-numbat-release-notes/39890)
covers both many of the other packages we carry and more issues common
to every Ubuntu flavor.

## Major Updates

-   Snap Store (`snap:snap-store`) replaces GNOME Software
    -   `gdebi` is included for Debian package support
-   `snap:snapd-desktop-integration` is included for better snap package
    support
-   Firmware Updater (`snap:firmware-updater`) is included to support
    firmware updates with LVFS
-   Thunderbird is now distributed as a Snap package
-   Ubiquity is replaced by the Flutter-based Ubuntu Installer

## Appearance Updates

## Hardware Support

## Updates

*Significant package and version updates. For full package changelogs,
see the [Changelogs](#Changelogs) section below.*

### Application Stack

-   GNOME 46
-   GTK 2.24.33 / 3.24.41 / 4.14.1
-   MATE 1.26
-   Xfce 4.18

### Subsystems

-   BlueZ 5.72
-   CUPS 2.4.7
-   Mesa 24.0.3
-   Poppler 24.02.0
-   PulseAudio 16.1
-   xdg-desktop-portal 1.18.2

### Themes

-   elementary-xfce 0.19
-   Greybird 3.23.3

### Applications

#### Xfce

-   Catfish 4.16.4
-   Exo 4.18.0
-   Gigolo 0.5.3
-   Mousepad 0.6.1
-   Ristretto 0.13.1
-   Thunar File Manager 4.18.8
-   Xfce Application Finder 4.18.0
-   Xfce Clipman Plugin 1.6.5
-   Xfce Netload Plugin 1.4.1
-   Xfce Panel 4.18.4
-   Xfce PulseAudio Plugin 0.4.8
-   Xfce Screenshooter 1.10.5
-   Xfce Settings 4.18.4
-   Xfce Systemload Plugin 1.3.2
-   Xfce Task Manager 1.5.7
-   Xfce Whisker Menu Plugin 2.8.3

#### MATE

-   Atril 1.26.2
-   Engrampa 1.26.2
-   MATE Calculator 1.26.0

#### GNOME

-   GNOME Disk Usage Analyzer 46.0
-   GNOME Disk Utility 46.0
-   GNOME Mines 40.1
-   GNOME Sudoku 46.0
-   Rhythmbox 3.4.7
-   Simple Scan 46.0

#### Everything Else

-   Blueman 2.3.5
-   Firefox 124.0.2 (snap)
-   GIMP 2.10.36
-   LibreOffice 24.2.2
-   Pipewire 1.0.4
-   Snapd 2.62
-   SGT Launcher 0.2.8
-   Thunderbird 115.9.0 (snap)

## Changelogs

### Xubuntu/Other Packages

-   apturl
    ([changelog](https://launchpad.net/ubuntu/noble/+source/apturl/+changelog))
-   atril
    ([changelog](https://launchpad.net/ubuntu/noble/+source/atril/+changelog))
-   baobab
    ([changelog](https://launchpad.net/ubuntu/noble/+source/baobab/+changelog))
-   blueman
    ([changelog](https://launchpad.net/ubuntu/noble/+source/blueman/+changelog))
-   elementary-xfce
    ([changelog](https://launchpad.net/ubuntu/noble/+source/elementary-xfce/+changelog))
-   engrampa
    ([changelog](https://launchpad.net/ubuntu/noble/+source/engrampa/+changelog))
-   gimp
    ([changelog](https://launchpad.net/ubuntu/noble/+source/gimp/+changelog))
-   gnome-disk-utility
    ([changelog](https://launchpad.net/ubuntu/noble/+source/gnome-disk-utility/+changelog))
-   gtk2-engines-xfce
    ([changelog](https://launchpad.net/ubuntu/noble/+source/gtk2-engines-xfce/+changelog))
-   hexchat
    ([changelog](https://launchpad.net/ubuntu/noble/+source/hexchat/+changelog))
-   lightdm-gtk-greeter
    ([changelog](https://launchpad.net/ubuntu/noble/+source/lightdm-gtk-greeter/+changelog))
-   lightdm-gtk-greeter-settings
    ([changelog](https://launchpad.net/ubuntu/noble/+source/lightdm-gtk-greeter-settings/+changelog))
-   mate-calc
    ([changelog](https://launchpad.net/ubuntu/noble/+source/mate-calc/+changelog))
-   menulibre
    ([changelog](https://launchpad.net/ubuntu/noble/+source/menulibre/+changelog))
-   mugshot
    ([changelog](https://launchpad.net/ubuntu/noble/+source/mugshot/+changelog))
-   pavucontrol
    ([changelog](https://launchpad.net/ubuntu/noble/+source/pavucontrol/+changelog))
-   rhythmbox
    ([changelog](https://launchpad.net/ubuntu/noble/+source/rhythmbox/+changelog))
-   pipewire
    ([changelog](https://launchpad.net/ubuntu/noble/+source/pipewire/+changelog))
-   sgt-launcher
    ([changelog](https://launchpad.net/ubuntu/noble/+source/sgt-launcher/+changelog))
-   shimmer-themes
    ([changelog](https://launchpad.net/ubuntu/noble/+source/shimmer-themes/+changelog))
-   syncaptic
    ([changelog](https://launchpad.net/ubuntu/noble/+source/synaptic/+changelog))
-   xcape
    ([changelog](https://launchpad.net/ubuntu/noble/+source/xcape/+changelog))
-   xubuntu-artwork
    ([changelog](https://launchpad.net/ubuntu/noble/+source/xubuntu-artwork/+changelog))
-   xubuntu-core
    ([changelog](https://launchpad.net/ubuntu/noble/+source/xubuntu-meta/+changelog))
-   xubuntu-default-settings
    ([changelog](https://launchpad.net/ubuntu/noble/+source/xubuntu-default-settings/+changelog))
-   xubuntu-desktop
    ([changelog](https://launchpad.net/ubuntu/noble/+source/xubuntu-meta/+changelog))
-   xubuntu-docs
    ([changelog](https://launchpad.net/ubuntu/noble/+source/xubuntu-docs/+changelog))
-   xubuntu-meta
    ([changelog](https://launchpad.net/ubuntu/noble/+source/xubuntu-meta/+changelog))
-   xubuntu-wallpapers
    ([changelog](https://launchpad.net/ubuntu/noble/+source/xubuntu-artwork/+changelog))

### Xfce Core

-   exo
    ([changelog](https://launchpad.net/ubuntu/noble/+source/exo/+changelog))
-   libxfce4ui
    ([changelog](https://launchpad.net/ubuntu/noble/+source/libxfce4ui/+changelog))
-   libxfce4util
    ([changelog](https://launchpad.net/ubuntu/noble/+source/libxfce4util/+changelog))
-   thunar
    ([changelog](https://launchpad.net/ubuntu/noble/+source/thunar/+changelog))
-   thunar-volman
    ([changelog](https://launchpad.net/ubuntu/noble/+source/thunar-volman/+changelog))
-   tumbler
    ([changelog](https://launchpad.net/ubuntu/noble/+source/tumbler/+changelog))
-   xfce4-appfinder
    ([changelog](https://launchpad.net/ubuntu/noble/+source/xfce4-appfinder/+changelog))
-   xfce4-panel
    ([changelog](https://launchpad.net/ubuntu/noble/+source/xfce4-panel/+changelog))
-   xfce4-panel-profiles
    ([changelog](https://launchpad.net/ubuntu/noble/+source/xfce4-panel-profiles/+changelog))
-   xfce4-power-manager
    ([changelog](https://launchpad.net/ubuntu/noble/+source/xfce4-power-manager/+changelog))
-   xfce4-session
    ([changelog](https://launchpad.net/ubuntu/noble/+source/xfce4-session/+changelog))
-   xfce4-settings
    ([changelog](https://launchpad.net/ubuntu/noble/+source/xfce4-settings/+changelog))
-   xfconf
    ([changelog](https://launchpad.net/ubuntu/noble/+source/xfconf/+changelog))
-   xfdesktop4
    ([changelog](https://launchpad.net/ubuntu/noble/+source/xfdesktop4/+changelog))
-   xfwm4
    ([changelog](https://launchpad.net/ubuntu/noble/+source/xfwm4/+changelog))

### Xfce Applications

-   catfish
    ([changelog](https://launchpad.net/ubuntu/noble/+source/catfish/+changelog))
-   gigolo
    ([changelog](https://launchpad.net/ubuntu/noble/+source/gigolo/+changelog))
-   mousepad
    ([changelog](https://launchpad.net/ubuntu/noble/+source/mousepad/+changelog))
-   parole
    ([changelog](https://launchpad.net/ubuntu/noble/+source/parole/+changelog))
-   ristretto
    ([changelog](https://launchpad.net/ubuntu/noble/+source/ristretto/+changelog))
-   xfburn
    ([changelog](https://launchpad.net/ubuntu/noble/+source/xfburn/+changelog))
-   xfce4-notifyd
    ([changelog](https://launchpad.net/ubuntu/noble/+source/xfce4-notifyd/+changelog))
-   xfce4-screensaver
    ([changelog](https://launchpad.net/ubuntu/noble/+source/xfce4-screensaver/+changelog))
-   xfce4-screenshooter
    ([changelog](https://launchpad.net/ubuntu/noble/+source/xfce4-screenshooter/+changelog))
-   xfce4-taskmanager
    ([changelog](https://launchpad.net/ubuntu/noble/+source/xfce4-taskmanager/+changelog))
-   xfce4-terminal
    ([changelog](https://launchpad.net/ubuntu/noble/+source/xfce4-terminal/+changelog))

### Xfce Panel Plugins

-   xfce4-clipman-plugin
    ([changelog](https://launchpad.net/ubuntu/noble/+source/xfce4-clipman-plugin/+changelog))
-   xfce4-cpugraph-plugin
    ([changelog](https://launchpad.net/ubuntu/noble/+source/xfce4-cpugraph-plugin/+changelog))
-   xfce4-dict
    ([changelog](https://launchpad.net/ubuntu/noble/+source/xfce4-dict/+changelog))
-   xfce4-indicator-plugin
    ([changelog](https://launchpad.net/ubuntu/noble/+source/xfce4-indicator-plugin/+changelog))
-   xfce4-mailwatch-plugin
    ([changelog](https://launchpad.net/ubuntu/noble/+source/xfce4-mailwatch-plugin/+changelog))
-   xfce4-netload-plugin
    ([changelog](https://launchpad.net/ubuntu/noble/+source/xfce4-netload-plugin/+changelog))
-   xfce4-notes-plugin
    ([changelog](https://launchpad.net/ubuntu/noble/+source/xfce4-notes-plugin/+changelog)
-   xfce4-places-plugin
    ([changelog](https://launchpad.net/ubuntu/noble/+source/xfce4-places-plugin/+changelog))
-   xfce4-pulseaudio-plugin
    ([changelog](https://launchpad.net/ubuntu/noble/+source/xfce4-pulseaudio-plugin/+changelog))
-   xfce4-quicklauncher-plugin
    ([changelog](https://launchpad.net/ubuntu/noble/+source/xfce4-quicklauncher-plugin/+changelog))
-   xfce4-statusnotifier-plugin
    ([changelog](https://launchpad.net/ubuntu/noble/+source/xfce4-statusnotifier-plugin/+changelog))
-   xfce4-systemload-plugin
    ([changelog](https://launchpad.net/ubuntu/noble/+source/xfce4-systemload-plugin/+changelog))
-   xfce4-verve-plugin
    ([changelog](https://launchpad.net/ubuntu/noble/+source/xfce4-verve-plugin/+changelog))
-   xfce4-weather-plugin
    ([changelog](https://launchpad.net/ubuntu/noble/+source/xfce4-weather-plugin/+changelog))
-   xfce4-whiskermenu-plugin
    ([changelog](https://launchpad.net/ubuntu/noble/+source/xfce4-whiskermenu-plugin/+changelog))
-   xfce4-xkb-plugin
    ([changelog](https://launchpad.net/ubuntu/noble/+source/xfce4-xkb-plugin/+changelog))

### Thunar Plugins

-   thunar-archive-plugin
    ([changelog](https://launchpad.net/ubuntu/noble/+source/thunar-archive-plugin/+changelog))
-   thunar-media-tags-plugin
    ([changelog](https://launchpad.net/ubuntu/noble/+source/thunar-media-tags-plugin/+changelog))
