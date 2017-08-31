##### Xubuntu 17.10 Release Notes

# Xubuntu 17.10 (Artful Aardvark)

***[DRAFT RELEASE NOTE]***

\*\* NOTE: \*\*

This is `pre-Release` version. Xubuntu pre-releases are **`NOT`**
recommended for:

-   Regular users who are not aware of pre-release issues
-   Anyone who needs a stable system
-   Anyone uncomfortable running a possibly frequently broken system
-   Anyone in a production environment with data or workflows that need
    to be reliable

Xubuntu pre-releases are recommended for:

-   Regular users who want to help us test by finding, reporting, and/or
    fixing bugs
-   Xubuntu developers

## Notable Issues

### Installer Issues

-    System encryption password set before setting keyboard locale
    ([1047384](https://launchpad.net/bugs/1047384))
    -   **Workround:** Start the installation with the correct keymap.
        ([Use F3](https://help.ubuntu.com/community/BootOptions#Changing_the_CD.27s_Default_Boot_Options))
        to set your keymap *before* booting to Try or Install Xubuntu
        from that menu.

### General Issues

-   Parole Media Player
    -   Parole progress bar lag
        ([1667786](https://launchpad.net/bugs/1667786))
    -   Parole crashes while fast forwarding with the playback slider
        ([1374887](https://launchpad.net/bugs/1374887))
    -   Parole Clear History (Open Location) crashes
        ([1214541](https://launchpad.net/bugs/1214514))

```{=html}
<!-- -->
```
-   tap-to-click not working,
    ([1686081](https://bugs.launchpad.net/ubuntu/+source/xorg/+bug/1686081))
    (xserver-xorg-input-synaptics not installed, can edit libinput.conf)
-   SGT Puzzles Collection: Menu bar grayed out
    ([1670610](https://launchpad.net/bugs/1670610))
-   SGT Puzzles Collection: Clicking on the Preferences option on the
    main menu does nothing
    ([1686667](https://bugs.launchpad.net/ubuntu/+source/sgt-launcher/+bug/1686667))
-   Xfce Indicator Plugin: Label missing from \"Clear Known Indicators\"
    dialog ([1644971](https://launchpad.net/bugs/1644917))
-   Checkboxes for hidden/visible indicators not working properly
    ([1311685](https://bugs.launchpad.net/ubuntu/+source/xfce4-indicator-plugin/+bug/1311685))
-   Terminal border doubles when more than 1 tab
    ([1683857](https://bugs.launchpad.net/ubuntu/+source/greybird-gtk-theme/+bug/1683857))
-   Software gives GDBUS.Error:org.freedesktop.Dbus.Error.ServiceUnkown
    Error message
    ([1713009](https://bugs.launchpad.net/ubuntu/+source/gnome-software/+bug/1713009))
-   gnome-software fails to run on i386
    ([1708998](https://bugs.launchpad.net/ubuntu/+source/gnome-software/+bug/1708998))
    NOTE:Fix Released

## Changes and Bug Fixes

#### 17.10 Changes

Packages seeing changes between 17.04 & 17.10:

-   apt-offline
-   blueman
-   catfish
-   exo
-   gnome-system-tools
-   gtk-theme-config
-   inxi
-   libxfcegui4
-   lightdm-gtk-greeter
-   parole
-   pavucontrol
-   pidgin-otr
-   sgt-puzzles
-   thunar
-   thunar-dropbox-plugin
-   tumbler
-   xfce4-clipman-plugin
-   xfce4-dict
-   xfce4-eyes-plugin
-   xfce4-genmon-plugin
-   xfce4-mount-plugin
-   xfce4-notifyd
-   xfce4-pulseaudio-plugin
-   xfce4-terminal
-   xfce4-whiskermenu-plugin
-   xfdesktop4
-   xubuntu-artwork
-   xubuntu-meta

### Changelogs

#### Xubuntu/Other Packages

-   blueman
    ([changelog](https://launchpad.net/ubuntu/artful/+source/blueman/+changelog))
-   gtk-theme-config
    ([changelog](https://launchpad.net/ubuntu/artful/+source/gtk-theme-config/+changelog))
-   gtk2-engines-xfce
    ([changelog](https://launchpad.net/ubuntu/artful/+source/gtk2-engines-xfce/+changelog))
-   lightdm-gtk-greeter
    ([changelog](https://launchpad.net/ubuntu/artful/+source/lightdm-gtk-greeter/+changelog))
-   lightdm-gtk-greeter-settings
    ([changelog](https://launchpad.net/ubuntu/artful/+source/lightdm-gtk-greeter-settings/+changelog))
-   menulibre
    ([changelog](https://launchpad.net/ubuntu/artful/+source/menulibre/+changelog))
-   mugshot
    ([changelog](https://launchpad.net/ubuntu/artful/+source/mugshot/+changelog))
-   pavucontrol
    ([changelog](https://launchpad.net/ubuntu/artful/+source/pavucontrol/+changelog))
-   sgt-launcher
    ([changelog](https://launchpad.net/ubuntu/artful/+source/sgt-launcher/+changelog))
-   shimmer-themes
    ([changelog](https://launchpad.net/ubuntu/artful/+source/shimmer-themes/+changelog))
-   xfce4-volumed
    ([changelog](https://launchpad.net/ubuntu/artful/+source/xfce4-volumed/+changelog))
-   xfpanel-switch
    ([changelog](https://launchpad.net/ubuntu/artful/+source/xfpanel-switch/+changelog))
-   xubuntu-artwork
    ([changelog](https://launchpad.net/ubuntu/artful/+source/xubuntu-artwork/+changelog))
-   xubuntu-core
    ([changelog](https://launchpad.net/ubuntu/artful/+source/xubuntu-core/+changelog))
-   xubuntu-default-settings
    ([changelog](https://launchpad.net/ubuntu/artful/+source/xubuntu-default-settings/+changelog))
-   xubuntu-desktop
    ([changelog](https://launchpad.net/ubuntu/artful/+source/xubuntu-desktop/+changelog))
-   xubuntu-docs
    ([changelog](https://launchpad.net/ubuntu/artful/+source/xubuntu-docs/+changelog))
-   xubuntu-icon-theme
    ([changelog](https://launchpad.net/ubuntu/artful/+source/xubuntu-icon-theme/+changelog))
-   xubuntu-meta
    ([changelog](https://launchpad.net/ubuntu/artful/+source/xubuntu-meta/+changelog))
-   xubuntu-wallpapers
    ([changelog](https://launchpad.net/ubuntu/artful/+source/xubuntu-wallpapers/+changelog))

#### Xfce Core

-   exo
    ([changelog](https://launchpad.net/ubuntu/artful/+source/exo/+changelog))
-   thunar
    ([changelog](https://launchpad.net/ubuntu/artful/+source/thunar/+changelog))
-   xfce4-appfinder
    ([changelog](https://launchpad.net/ubuntu/artful/+source/xfce4-appfinder/+changelog))
-   xfce4-panel
    ([changelog](https://launchpad.net/ubuntu/artful/+source/xfce4-panel/+changelog))
-   xfce4-power-manager
    ([changelog](https://launchpad.net/ubuntu/artful/+source/xfce4-power-manager/+changelog))
-   xfce4-session
    ([changelog](https://launchpad.net/ubuntu/artful/+source/xfce4-session/+changelog))
-   xfce4-settings
    ([changelog](https://launchpad.net/ubuntu/artful/+source/xfce4-settings/+changelog))
-   xfconf
    ([changelog](https://launchpad.net/ubuntu/artful/+source/xfconf/+changelog))
-   xfdesktop4
    ([changelog](https://launchpad.net/ubuntu/artful/+source/xfdesktop4/+changelog))
-   xfwm4
    ([changelog](https://launchpad.net/ubuntu/artful/+source/xfwm4/+changelog))

#### Xfce Applications

-   catfish
    ([changelog](https://launchpad.net/ubuntu/artful/+source/catfish/+changelog))
-   mousepad
    ([changelog](https://launchpad.net/ubuntu/artful/+source/mousepad/+changelog))
-   orage
    ([changelog](https://launchpad.net/ubuntu/artful/+source/orage/+changelog))
-   parole
    ([changelog](https://launchpad.net/ubuntu/artful/+source/parole/+changelog))
-   xfburn
    ([changelog](https://launchpad.net/ubuntu/artful/+source/xfburn/+changelog))
-   xfce4-notifyd
    ([changelog](https://launchpad.net/ubuntu/artful/+source/xfce4-notifyd/+changelog))
-   xfce4-screenshooter
    ([changelog](https://launchpad.net/ubuntu/artful/+source/xfce4-screenshooter/+changelog))
-   xfce4-taskmanager
    ([changelog](https://launchpad.net/ubuntu/artful/+source/xfce4-taskmanager/+changelog))
-   xfce4-terminal
    ([changelog](https://launchpad.net/ubuntu/artful/+source/xfce4-terminal/+changelog))

#### Xfce Panel Plugins

-   xfce4-cpugraph-plugin
    ([changelog](https://launchpad.net/ubuntu/artful/+source/xfce4-cpugraph-plugin/+changelog))
-   xfce4-dict
    ([changelog](https://launchpad.net/ubuntu/artful/+source/xfce4-dict/+changelog))
-   xfce4-indicator-plugin
    ([changelog](https://launchpad.net/ubuntu/artful/+source/xfce4-indicator-plugin/+changelog))
-   xfce4-mailwatch-plugin
    ([changelog](https://launchpad.net/ubuntu/artful/+source/xfce4-mailwatch-plugin/+changelog))
-   xfce4-netload-plugin
    ([changelog](https://launchpad.net/ubuntu/artful/+source/xfce4-netload-plugin/+changelog))
-   xfce4-notes-plugin
    ([changelog](https://launchpad.net/ubuntu/artful/+source/xfce4-notes-plugin/+changelog)
-   xfce4-places-plugin
    ([changelog](https://launchpad.net/ubuntu/artful/+source/xfce4-places-plugin/+changelog))
-   xfce4-quicklauncher-plugin
    ([changelog](https://launchpad.net/ubuntu/artful/+source/xfce4-quicklauncher-plugin/+changelog))
-   xfce4-systemload-plugin
    ([changelog](https://launchpad.net/ubuntu/artful/+source/xfce4-systemload-plugin/+changelog))
-   xfce4-verve-plugin
    ([changelog](https://launchpad.net/ubuntu/artful/+source/xfce4-verve-plugin/+changelog))
-   xfce4-weather-plugin
    ([changelog](https://launchpad.net/ubuntu/artful/+source/xfce4-weather-plugin/+changelog))
-   xfce4-whiskermenu-plugin
    ([changelog](https://launchpad.net/ubuntu/artful/+source/xfce4-whiskermenu-plugin/+changelog))
-   xfce4-xkb-plugin
    ([changelog](https://launchpad.net/ubuntu/artful/+source/xfce4-xkb-plugin/+changelog))
