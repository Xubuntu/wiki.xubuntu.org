# Xubuntu 17.04 (Zesty Zapus)

**\_\_DRAFT RELEASE NOTE \_\_**

Xubuntu 17.04 will be supported for 9 months.

Several Xfce panel plugins and applications have been ported to GTK+ 3,
paving the way for improved theming and further development. Core Xfce
libraries exo and libxfce4ui have also been updated with full GTK+ 3
support, the latter adding support for Glade development in Xubuntu with
the installation of libxfce4ui-glade. The Greybird and Numix themes have
also been refreshed with improved support for the toolkit.

Camera functionality has been restored in Mugshot, Parole introduced a
new mini mode and improvements for network streams, and a number of
welcome fixes have made their way into Thunar and Ristretto. *Simon
Tatham\'s Portable Puzzle Collection*
([sgt-puzzles](https://launchpad.net/ubuntu/+source/sgt-puzzles)), an
addicting collection of logic games, has been included along with the
new *SGT Puzzles Collection*
([sgt-launcher](https://launchpad.net/ubuntu/+source/sgt-launcher)).

This release is based on the 4.10.x Linux release series. LibreOffice
5.3 includes a number of fixes and introduces new experimental interface
options. Firefox 52 and Thunderbird 45 are included.

For new installs a swap file will be used instead of a swap partition.

See the main Ubuntu [Release Note](https://wiki.ubuntu.com/ZestyZapus/ReleaseNotes) for more general
issues and updates.

## Notable Issues

### Installer Issues

-    System encryption password set before setting keyboard locale
    ([1047384](https://bugs.launchpad.net/ubuntu/+source/ubiquity/+bug/1047384))

### General Issues

-   Parole Media Player
    -   Parole progress bar lag
        ([1667786](https://bugs.launchpad.net/ubuntu/+source/parole/+bug/1667786))
    -   Parole crashes while fast forwarding with the playback slider
        ([1374887](https://bugs.launchpad.net/ubuntu/+source/parole/+bug/1374887))
    -   Parole Clear History (Open Location) crashes
        ([1214541](https://bugs.launchpad.net/ubuntu/+source/parole/+bug/1214514))
    -   Parole Clear History (Open Recent) clears global history
        ([1681886](https://bugs.launchpad.net/ubuntu/+source/parole/+bug/1681886))

```{=html}
<!-- -->
```
-   Thunar File Manager
    -   Thunar occasionally hangs after file changes
        ([13481](https://bugzilla.xfce.org/show_bug.cgi?id=13481) /
        [13472](https://bugzilla.xfce.org/show_bug.cgi?id=13472))
    -   Thunar occasionally doesn\'t refresh window
        ([13364](https://bugzilla.xfce.org/show_bug.cgi?id=13364))

```{=html}
<!-- -->
```
-   Xfce Indicator Plugin: Label missing from \"Clear Known Indicators\"
    dialog
    ([1644971](https://bugs.launchpad.net/ubuntu/+source/xfce4-indicator-plugin/+bug/1644917))
-   SGT Puzzles Collection: Menu bar grayed out
    ([1670610](https://bugs.launchpad.net/ubuntu/+source/sgt-launcher/+bug/1670610))

## Changes and Bug Fixes

-   Thunar 1.6.11
    -   Fixes to various crashes while renaming,copying bugs

```{=html}
<!-- -->
```
-   xubuntu-default-settings
    -   New file templates included - OpenDocument Writer, OpenDocument
        Spreadsheet

```{=html}
<!-- -->
```
-   xfce4-taskmanager
    -   New release includes ability to click on window to select
        process

```{=html}
<!-- -->
```
-   xfce4-notifyd
    -   New release includes persistence support.

```{=html}
<!-- -->
```
-   sgt-launcher
    -   New launcher for Simon Tatham\'s Portable Puzzle Collection

### Changelogs

#### Changes post-16.10 release

-   mugshot
    ([changelog](http://changelogs.ubuntu.com/changelogs/pool/universe/m/mugshot/mugshot_0.3.2-0ubuntu1/changelog))
-   parole
    ([changelog](http://changelogs.ubuntu.com/changelogs/pool/universe/p/parole/parole_0.9.1-0ubuntu1/changelog))
-   thunar
    ([changelog](http://changelogs.ubuntu.com/changelogs/pool/universe/t/thunar/thunar_1.6.11-1/changelog))
-   xfdesktop4
    ([changelog](http://changelogs.ubuntu.com/changelogs/pool/universe/x/xfdesktop4/xfdesktop4_4.12.3-2ubuntu2/changelog))
-   xfce4-whiskermenu-plugin
    ([changelog](http://changelogs.ubuntu.com/changelogs/pool/universe/x/xfce4-whiskermenu-plugin/xfce4-whiskermenu-plugin_2.1.1-0ubuntu1/changelog))
-   xubuntu-default-settings
    ([changelog](http://changelogs.ubuntu.com/changelogs/pool/universe/x/xubuntu-default-settings/xubuntu-default-settings_17.04.0/changelog))
-   exo
    ([changelog](http://changelogs.ubuntu.com/changelogs/pool/universe/e/exo/exo_0.11.2-1/changelog))

#### Major application versions

-   catfish
    ([changelog](http://changelogs.ubuntu.com/changelogs/pool/universe/c/catfish/catfish_1.4.2-0ubuntu1/changelog))
-   menulibre
    ([changelog](http://changelogs.ubuntu.com/changelogs/pool/universe/m/menulibre/menulibre_2.1.3-0ubuntu1/changelog))
-   mousepad
    ([changelog](http://changelogs.ubuntu.com/changelogs/pool/universe/m/mousepad/mousepad_0.4.0-4ubuntu1/changelog))
-   xfpanel-switch
    ([changelog](http://changelogs.ubuntu.com/changelogs/pool/universe/x/xfpanel-switch/xfpanel-switch_1.0.4-0ubuntu1/changelog))
-   xfwm4
    ([changelog](http://changelogs.ubuntu.com/changelogs/pool/universe/x/xfwm4/xfwm4_4.12.4-0ubuntu1/changelog))
-   xfce4-power-manager
    ([changelog](http://changelogs.ubuntu.com/changelogs/pool/universe/x/xfce4-power-manager/xfce4-power-manager_1.4.4-4ubuntu2/changelog))
-   xubuntu-artwork
    ([changelog](http://changelogs.ubuntu.com/changelogs/pool/universe/x/xubuntu-artwork/xubuntu-artwork_17.04/changelog))
-   xubuntu-default-settings
    ([changelog](http://changelogs.ubuntu.com/changelogs/pool/universe/x/xubuntu-default-settings/xubuntu-default-settings_17.04.0/changelog))
-   xubuntu-docs
    ([changelog](http://changelogs.ubuntu.com/changelogs/pool/universe/x/xubuntu-docs/xubuntu-docs_17.04/changelog))
-   xubuntu-meta
    ([changelog](https://launchpad.net/ubuntu/+source/xubuntu-meta/+changelog))

#### Other Application Versions

-   blueman
    ([changelog](http://changelogs.ubuntu.com/changelogs/pool/universe/b/blueman/blueman_2.0.4-1ubuntu2/changelog))
-   gtk-theme-config
    ([changelog](http://changelogs.ubuntu.com/changelogs/pool/universe/g/gtk-theme-config/gtk-theme-config_1.2.1-0ubuntu1/changelog))
-   gtk2-engines-xfce
    ([changelog](http://changelogs.ubuntu.com/changelogs/pool/universe/g/gtk2-engines-xfce/gtk2-engines-xfce_3.2.0-2/changelog))
-   lightdm-gtk-greeter-settings
    [changelog](http://changelogs.ubuntu.com/changelogs/pool/universe/l/lightdm-gtk-greeter-settings/lightdm-gtk-greeter-settings_1.2.1-2/changelog)
-   lightdm-gtk-greeter
    ([changelog](http://changelogs.ubuntu.com/changelogs/pool/universe/l/lightdm-gtk-greeter/lightdm-gtk-greeter_2.0.1-2ubuntu4/changelog))
-   orage
    ([changelog](http://changelogs.ubuntu.com/changelogs/pool/universe/o/orage/orage_4.12.1-3/changelog))
-   pavucontrol
    ([changelog](http://changelogs.ubuntu.com/changelogs/pool/universe/p/pavucontrol/pavucontrol_3.0-3build1/changelog))
-   xfburn
    ([changelog](http://changelogs.ubuntu.com/changelogs/pool/universe/x/xfburn/xfburn_0.5.4-1/changelog))
-   xfce4-cpugraph-plugin
    ([changelog](http://changelogs.ubuntu.com/changelogs/pool/universe/x/xfce4-cpugraph-plugin/xfce4-cpugraph-plugin_1.0.5-1build1/changelog))
-   xfce4-dict
    ([changelog](http://changelogs.ubuntu.com/changelogs/pool/universe/x/xfce4-dict/xfce4-dict_0.7.2-1/changelog))
-   xfce4-notes-plugin
    ([changelog](http://changelogs.ubuntu.com/changelogs/pool/universe/x/xfce4-notes-plugin/xfce4-notes-plugin_1.8.1-1/changelog))
-   xfce4-weather-plugin
    ([changelog](http://changelogs.ubuntu.com/changelogs/pool/universe/x/xfce4-weather-plugin/xfce4-weather-plugin_0.8.9-1/changelog))
