**These release notes are a work in progress and are not indicative of
the final release.**

# (DRAFT) Xubuntu 20.04 Release Notes

### Installer Issues

-   System doesn\'t boot after installation - Legacy mode / 2 disks
    ([1847898](https://bugs.launchpad.net/ubuntu/+source/ubiquity/+bug/1847898))
-   grub-installer chooses which drive to install to with no user input
    ([964331](https://bugs.launchpad.net/ubuntu/+source/grub-installer/+bug/964331))

### General Issues

-   GNOME Font Viewer: Crashes in the live environment
    ([1845362](https://bugs.launchpad.net/ubuntu/+source/gnome-font-viewer/+bug/1845362))
-   Xfce Pulseaudio Plugin: Multiple notifications displayed if multiple
    Pulseaudio plugins added to panel
    ([1769775](https://bugs.launchpad.net/ubuntu/+source/xfce4-pulseaudio-plugin/+bug/1769775))
-   Xfce Settings Daemon: Sometimes does not run after logging in,
    resulting in appearance and configuration issues
    ([1870641](https://bugs.launchpad.net/ubuntu/+source/xfce4-settings/+bug/1870641))

### Ubuntu Generic Release Notes

The main Ubuntu [Release Notes](https://wiki.ubuntu.com/FocalFossa/ReleaseNotes) covers both many
of the other packages we carry and more generic issues.

## Major Updates

### Xubuntu Community Wallpaper Contest

Xubuntu hosted a community wallpaper contest from February 28 through
March 13, 2020. [6 winners were selected](https://xubuntu.org/news/xubuntu-20-04-community-wallpaper-contest-winners/)
from a total 237 submissions. The selection was based on a team vote.
Thank you to everyone for your submissions!

![](images/releases/20.04/wallpaper-contest-winners.png)

### Greybird Dark Theme

Xubuntu 20.04 ships with a brand new optional theme, **Greybird-dark**.
To switch from the default **Greybird** to **Greybird-dark**, open your
Settings Manager and:

-   Click \"Appearance\". Select \"Greybird-dark\".
-   Click \"All Settings\".
-   Click \"Window Manager\". Select \"Greybird-dark\".

![](images/releases/20.04/greybird-dark.png)

  ---------------------------------------------------------------------------------------------
   *Greybird-dark makes your entire desktop darker while still maintaining a usable contrast.*
  ---------------------------------------------------------------------------------------------

### Desktop Integration

![](images/releases/20.04/packages.png)

  ----------------------------------------------------------
   *gedit installed as a Debian package, Snap, and Flatpak*
  ----------------------------------------------------------

#### Snaps

Our desktop themes **Greybird**, **Greybird-dark**, and
**elementary-xfce** are now included in the gtk-common-themes snap. When
using any of these themes, you can expect snap packages to fit in
perfectly with the rest of your desktop. Snaps work out of the box on
Xubuntu, and can be installed with the included GNOME Software.

#### Flatpaks

**Greybird** and **Greybird-dark** are available to install on Flathub!
If you use Flatpaks on your system, you can install our themes and enjoy
a consistent desktop experience with the following commands.

`flatpak install org.gtk.Gtk3theme.Greybird`\
`flatpak install org.gtk.Gtk3theme.Greybird-dark`

## Other Updates

### Python 2

With Python 2 now officially End of Life as of January 1, 2020, Ubuntu
and its various flavors are no longer shipping Python 2. Xubuntu
includes only Python 3.8 as of 20.04.

### Apt Offline

**apt-offline** is no longer included in Xubuntu 20.04. Until February,
it [depended on Python 2](https://bugs.launchpad.net/ubuntu/+source/xubuntu-meta/+bug/1848755)
and was thus removed from the Xubuntu and Ubuntu Studio seeds.

### Pidgin Libnotify Plugin

**pidgin-libnotify** is no longer included in the Ubuntu repositories
and has thus been removed from Xubuntu.

## Changelogs

### Xubuntu/Other Packages

-   apturl
    ([changelog](https://launchpad.net/ubuntu/focal/+source/apturl/+changelog))
-   atril
    ([changelog](https://launchpad.net/ubuntu/focal/+source/atril/+changelog))
-   blueman
    ([changelog](https://launchpad.net/ubuntu/focal/+source/blueman/+changelog))
-   elementary-xfce
    ([changelog](https://launchpad.net/ubuntu/focal/+source/elementary-xfce/+changelog))
-   engrampa
    ([changelog](https://launchpad.net/ubuntu/focal/+source/engrampa/+changelog))
-   gimp
    ([changelog](https://launchpad.net/ubuntu/focal/+source/gimp/+changelog))
-   gtk2-engines-xfce
    ([changelog](https://launchpad.net/ubuntu/focal/+source/gtk2-engines-xfce/+changelog))
-   lightdm-gtk-greeter
    ([changelog](https://launchpad.net/ubuntu/focal/+source/lightdm-gtk-greeter/+changelog))
-   lightdm-gtk-greeter-settings
    ([changelog](https://launchpad.net/ubuntu/focal/+source/lightdm-gtk-greeter-settings/+changelog))
-   mate-calc
    ([changelog](https://launchpad.net/ubuntu/focal/+source/mate-calc/+changelog))
-   menulibre
    ([changelog](https://launchpad.net/ubuntu/focal/+source/menulibre/+changelog))
-   mugshot
    ([changelog](https://launchpad.net/ubuntu/focal/+source/mugshot/+changelog))
-   pavucontrol
    ([changelog](https://launchpad.net/ubuntu/focal/+source/pavucontrol/+changelog))
-   sgt-launcher
    ([changelog](https://launchpad.net/ubuntu/focal/+source/sgt-launcher/+changelog))
-   shimmer-themes
    ([changelog](https://launchpad.net/ubuntu/focal/+source/shimmer-themes/+changelog))
-   xubuntu-artwork
    ([changelog](https://launchpad.net/ubuntu/focal/+source/xubuntu-artwork/+changelog))
-   xubuntu-core
    ([changelog](https://launchpad.net/ubuntu/focal/+source/xubuntu-meta/+changelog))
-   xubuntu-default-settings
    ([changelog](https://launchpad.net/ubuntu/focal/+source/xubuntu-default-settings/+changelog))
-   xubuntu-desktop
    ([changelog](https://launchpad.net/ubuntu/focal/+source/xubuntu-meta/+changelog))
-   xubuntu-docs
    ([changelog](https://launchpad.net/ubuntu/focal/+source/xubuntu-docs/+changelog))
-   xubuntu-meta
    ([changelog](https://launchpad.net/ubuntu/focal/+source/xubuntu-meta/+changelog))
-   xubuntu-wallpapers
    ([changelog](https://launchpad.net/ubuntu/focal/+source/xubuntu-artwork/+changelog))

### Xfce Core

-   exo
    ([changelog](https://launchpad.net/ubuntu/focal/+source/exo/+changelog))
-   libxfce4ui
    ([changelog](https://launchpad.net/ubuntu/focal/+source/libxfce4ui/+changelog))
-   libxfce4util
    ([changelog](https://launchpad.net/ubuntu/focal/+source/libxfce4util/+changelog))
-   thunar
    ([changelog](https://launchpad.net/ubuntu/focal/+source/thunar/+changelog))
-   thunar-volman
    ([changelog](https://launchpad.net/ubuntu/focal/+source/thunar-volman/+changelog))
-   tumbler
    ([changelog](https://launchpad.net/ubuntu/focal/+source/tumbler/+changelog))
-   xfce4-appfinder
    ([changelog](https://launchpad.net/ubuntu/focal/+source/xfce4-appfinder/+changelog))
-   xfce4-panel
    ([changelog](https://launchpad.net/ubuntu/focal/+source/xfce4-panel/+changelog))
-   xfce4-panel-profiles
    ([changelog](https://launchpad.net/ubuntu/focal/+source/xfce4-panel-profiles/+changelog))
-   xfce4-power-manager
    ([changelog](https://launchpad.net/ubuntu/focal/+source/xfce4-power-manager/+changelog))
-   xfce4-session
    ([changelog](https://launchpad.net/ubuntu/focal/+source/xfce4-session/+changelog))
-   xfce4-settings
    ([changelog](https://launchpad.net/ubuntu/focal/+source/xfce4-settings/+changelog))
-   xfconf
    ([changelog](https://launchpad.net/ubuntu/focal/+source/xfconf/+changelog))
-   xfdesktop4
    ([changelog](https://launchpad.net/ubuntu/focal/+source/xfdesktop4/+changelog))
-   xfwm4
    ([changelog](https://launchpad.net/ubuntu/focal/+source/xfwm4/+changelog))

### Xfce Applications

-   catfish
    ([changelog](https://launchpad.net/ubuntu/focal/+source/catfish/+changelog))
-   mousepad
    ([changelog](https://launchpad.net/ubuntu/focal/+source/mousepad/+changelog))
-   parole
    ([changelog](https://launchpad.net/ubuntu/focal/+source/parole/+changelog))
-   ristretto
    ([changelog](https://launchpad.net/ubuntu/focal/+source/ristretto/+changelog))
-   xfburn
    ([changelog](https://launchpad.net/ubuntu/focal/+source/xfburn/+changelog))
-   xfce4-notifyd
    ([changelog](https://launchpad.net/ubuntu/focal/+source/xfce4-notifyd/+changelog))
-   xfce4-screensaver
    ([changelog](https://launchpad.net/ubuntu/focal/+source/xfce4-screensaver/+changelog))
-   xfce4-screenshooter
    ([changelog](https://launchpad.net/ubuntu/focal/+source/xfce4-screenshooter/+changelog))
-   xfce4-taskmanager
    ([changelog](https://launchpad.net/ubuntu/focal/+source/xfce4-taskmanager/+changelog))
-   xfce4-terminal
    ([changelog](https://launchpad.net/ubuntu/focal/+source/xfce4-terminal/+changelog))

### Xfce Panel Plugins

-   xfce4-cpugraph-plugin
    ([changelog](https://launchpad.net/ubuntu/focal/+source/xfce4-cpugraph-plugin/+changelog))
-   xfce4-dict
    ([changelog](https://launchpad.net/ubuntu/focal/+source/xfce4-dict/+changelog))
-   xfce4-indicator-plugin
    ([changelog](https://launchpad.net/ubuntu/focal/+source/xfce4-indicator-plugin/+changelog))
-   xfce4-mailwatch-plugin
    ([changelog](https://launchpad.net/ubuntu/focal/+source/xfce4-mailwatch-plugin/+changelog))
-   xfce4-netload-plugin
    ([changelog](https://launchpad.net/ubuntu/focal/+source/xfce4-netload-plugin/+changelog))
-   xfce4-notes-plugin
    ([changelog](https://launchpad.net/ubuntu/focal/+source/xfce4-notes-plugin/+changelog)
-   xfce4-places-plugin
    ([changelog](https://launchpad.net/ubuntu/focal/+source/xfce4-places-plugin/+changelog))
-   xfce4-pulseaudio-plugin
    ([changelog](https://launchpad.net/ubuntu/focal/+source/xfce4-pulseaudio-plugin/+changelog))
-   xfce4-quicklauncher-plugin
    ([changelog](https://launchpad.net/ubuntu/focal/+source/xfce4-quicklauncher-plugin/+changelog))
-   xfce4-statusnotifier-plugin
    ([changelog](https://launchpad.net/ubuntu/focal/+source/xfce4-statusnotifier-plugin/+changelog))
-   xfce4-systemload-plugin
    ([changelog](https://launchpad.net/ubuntu/focal/+source/xfce4-systemload-plugin/+changelog))
-   xfce4-verve-plugin
    ([changelog](https://launchpad.net/ubuntu/focal/+source/xfce4-verve-plugin/+changelog))
-   xfce4-weather-plugin
    ([changelog](https://launchpad.net/ubuntu/focal/+source/xfce4-weather-plugin/+changelog))
-   xfce4-whiskermenu-plugin
    ([changelog](https://launchpad.net/ubuntu/focal/+source/xfce4-whiskermenu-plugin/+changelog))
-   xfce4-xkb-plugin
    ([changelog](https://launchpad.net/ubuntu/focal/+source/xfce4-xkb-plugin/+changelog))

### Thunar Plugins

-   thunar-archive-plugin
    ([changelog](https://launchpad.net/ubuntu/focal/+source/thunar-archive-plugin/+changelog))
-   thunar-media-tags-plugin
    ([changelog](https://launchpad.net/ubuntu/focal/+source/thunar-media-tags-plugin/+changelog))
