# Xubuntu 17.10 Release Notes

## Notable Changes

### Appearance Updates

      * Client side decorations (CSD) now consume much less space with the Greybird GTK+ theme.
      * New device, mimetype, and monochrome panel icons have been included with the elementary-xfce icon theme.
      * The new wallpaper adds a refreshing touch of green to the desktop.

### Application Updates

      * GNOME Font Viewer is now included by default. This application simplifies viewing and installing fonts.
      * LibreOffice 5.3 -> 5.4
      * Firefox 52 -> 56
      * Thunderbird 45.8 -> 52.4
      * Numerous Xfce and other components have been updated.

### Technical Updates

      * The Xfce Dictionary, Genmon Plugin, and Mount Plugin have been ported to GTK+ 3.  
      * Exo's GTK+ 3 support has been further improved.
      * Tumbler has been ported to GDBus and the Clipman plugin has been ported to GtkApplication.
      * Python 3.5 -> 3.6
      * GTK+ 3.24 -> 3.26. GTK+ 3.26 includes support for Unicode 10.0.0 and support for color Emoji.

## Updates from the Ubuntu Desktop Team

We usually link directly to the Ubuntu release notes, but there are
several significant improvements that affect all flavors and our users.

### Accelerated Video Playback (Intel)

The Ubuntu Desktop team has been hard at work to get accelerated video
playback working out of the box \[1, 2, 3, 6\]. Intel users may also see
some performance improvements in Parole Media Player since it shares the
GStreamer backend. Chromium users might also see some performance
improvements \[3, 4\].

See this page for more information.
<https://wiki.ubuntu.com/IntelQuickSyncVideo>

### Bluetooth and USB Audio

There's been a number of changes to BlueZ and PulseAudio this cycle
which should make Bluetooth and USB audio devices work much better by
default \[2, 4, 5\].

### Driverless Printing

Driverless printing has been added to Ubuntu. This provides support for
most modern printers: IPP Everywhere, Apple AirPrint, Mopria, PCLm, and
Wifi Direct as supported. Other printers can still be added from the
Printers dialog \[5, 6\].

## Notable Issues

### Installer Issues

-    System encryption password set before setting keyboard locale
    ([1047384](https://launchpad.net/bugs/1047384))
    -   **Workround:** Start the installation with the correct keymap.
        ([Use F3](https://help.ubuntu.com/community/BootOptions#Changing_the_CD.27s_Default_Boot_Options))
        to set your keymap *before* booting to Try or Install Xubuntu
        from that menu.

```{=html}
<!-- -->
```
-   Keyboard layout issues noted in Ubuntu or other flavours during
    installation:
    -   Keyboard layout not applied when layout is selected
        ([1719908](https://bugs.launchpad.net/ubuntu/+source/ubiquity/+bug/1719908))
    -   Auto-selected keyboard layout no longer matches chosen region
        ([1706859](https://bugs.launchpad.net/ubuntu/+source/ubiquity/+bug/1706859))

### General Issues

-   Network indicators
    -   Currently at times the panel could show 2 network icons, this
        appears to be a race condition which we have not been able to
        rectify in time for release. While this is an appearance issue
        only as far as we know, you can if you wish restart networking,
        the affected plugin or the panel. This fixes the issue in your
        running session but does not prevent the issue from
        re-appearing.

```{=html}
<!-- -->
```
-   Parole Media Player
    -   Parole progress bar lag
        ([1667786](https://launchpad.net/bugs/1667786))
    -   Parole crashes while fast forwarding with the playback slider
        ([1374887](https://launchpad.net/bugs/1374887))
    -   Parole Clear History (Open Location) crashes
        ([1214541](https://launchpad.net/bugs/1214514))
    -    Play button inactive
        <https://bugs.launchpad.net/parole/+bug/1705243>

```{=html}
<!-- -->
```
-   Thunar: Restoring non-empty folders spawns warning - leaves copy
    behind
    ([1687075](https://bugs.launchpad.net/ubuntu/+source/thunar/+bug/1687075))
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

## Changelogs

### Xubuntu/Other Packages

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

### Xfce Core

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

### Xfce Applications

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

### Xfce Panel Plugins

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

\[1\]
<https://insights.ubuntu.com/2017/07/07/ubuntu-desktop-weekly-update-july-7-2017/>\
\[2\]
<https://insights.ubuntu.com/2017/07/14/ubuntu-desktop-weekly-update-july-14-2017/>\
\[3\]
<https://insights.ubuntu.com/2017/07/28/ubuntu-desktop-weekly-update-july-28-2017/>\
\[4\]
<https://insights.ubuntu.com/2017/08/11/ubuntu-desktop-weekly-update-august-11-2017/>\
\[5\]
<https://insights.ubuntu.com/2017/08/25/ubuntu-desktop-weekly-update-august-25-2017/>\
\[6\]
<https://insights.ubuntu.com/2017/09/08/ubuntu-desktop-weekly-update-september-8-2017/>
