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
    ([1047384](https://launchpad.net/bugs/1047384))

### General Issues

-   Parole Media Player
    -   Parole progress bar lag
        ([1667786](https://launchpad.net/bugs/1667786))
    -   Parole crashes while fast forwarding with the playback slider
        ([1374887](https://launchpad.net/bugs/1374887))
    -   Parole Clear History (Open Location) crashes
        ([1214541](https://launchpad.net/bugs/1214514))
    -   Parole Clear History (Open Recent) clears global history
        ([1681886](https://launchpad.net/bugs/1681886))

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
-   SGT Puzzles Collection: Menu bar grayed out
    ([1670610](https://launchpad.net/bugs/1670610))
-   Xfce Indicator Plugin: Label missing from \"Clear Known Indicators\"
    dialog ([1644971](https://launchpad.net/bugs/1644917))

## Changes and Bug Fixes

-   thunar
    -   Fixes to various issues related to copying and renaming

```{=html}
<!-- -->
```
-   parole
    -   New release includes \"mini mode\" and improved streaming
        support

```{=html}
<!-- -->
```
-   xfce4-notifyd
    -   New release includes \"do not disturb\" mode, notification
        muting, persistence support

```{=html}
<!-- -->
```
-   xfce4-taskmanager
    -   New release includes ability to click on window to select
        process

```{=html}
<!-- -->
```
-   xubuntu-default-settings
    -   New file templates included - OpenDocument Writer, OpenDocument
        Spreadsheet
    -   Improved QT5 application appearance (requires installation of
        `qt5-style-plugins`)

```{=html}
<!-- -->
```
-   sgt-launcher
    -   New launcher for Simon Tatham\'s Portable Puzzle Collection

### Changelogs

#### Changes post-16.10 release

-   exo
    ([changelog](https://launchpad.net/ubuntu/zesty/+source/exo/+changelog))
-   lightdm-gtk-greeter-settings
    ([changelog](https://launchpad.net/ubuntu/zesty/+source/lightdm-gtk-greeter-settings/+changelog))
-   mugshot
    ([changelog](https://launchpad.net/ubuntu/zesty/+source/mugshot/+changelog))
-   orage
    ([changelog](https://launchpad.net/ubuntu/zesty/+source/orage/+changelog))
-   parole
    ([changelog](https://launchpad.net/ubuntu/zesty/+source/parole/+changelog))
-   thunar
    ([changelog](https://launchpad.net/ubuntu/zesty/+source/thunar/+changelog))
-   xfce4-dict
    ([changelog](https://launchpad.net/ubuntu/zesty/+source/xfce4-dict/+changelog))
-   xfce4-weather-plugin
    ([changelog](https://launchpad.net/ubuntu/zesty/+source/xfce4-weather-plugin/+changelog))
-   xfce4-whiskermenu-plugin
    ([changelog](https://launchpad.net/ubuntu/zesty/+source/xfce4-whiskermenu-plugin/+changelog))
-   xfdesktop4
    ([changelog](https://launchpad.net/ubuntu/zesty/+source/xfdesktop4/+changelog))
-   xfwm4
    ([changelog](https://launchpad.net/ubuntu/zesty/+source/xfwm4/+changelog))
-   xubuntu-artwork
    ([changelog](https://launchpad.net/ubuntu/zesty/+source/xubuntu-artwork/+changelog))
-   xubuntu-default-settings
    ([changelog](https://launchpad.net/ubuntu/zesty/+source/xubuntu-default-settings/+changelog))
-   xubuntu-docs
    ([changelog](https://launchpad.net/ubuntu/zesty/+source/xubuntu-docs/+changelog))
-   xubuntu-meta
    ([changelog](https://launchpad.net/ubuntu/zesty/+source/xubuntu-meta/+changelog))

#### Major application versions

-   catfish
    ([changelog](https://launchpad.net/ubuntu/zesty/+source/catfish/+changelog))
-   menulibre
    ([changelog](https://launchpad.net/ubuntu/zesty/+source/menulibre/+changelog))
-   mousepad
    ([changelog](https://launchpad.net/ubuntu/zesty/+source/mousepad/+changelog))
-   xfce4-power-manager
    ([changelog](https://launchpad.net/ubuntu/zesty/+source/xfce4-power-manager/+changelog))
-   xfpanel-switch
    ([changelog](https://launchpad.net/ubuntu/zesty/+source/xfpanel-switch/+changelog))
-   xfwm4
    ([changelog](https://launchpad.net/ubuntu/zesty/+source/xfwm4/+changelog))
-   xubuntu-artwork
    ([changelog](https://launchpad.net/ubuntu/zesty/+source/xubuntu-artwork/+changelog))
-   xubuntu-default-settings
    ([changelog](https://launchpad.net/ubuntu/zesty/+source/xubuntu-default-settings/+changelog))
-   xubuntu-docs
    ([changelog](https://launchpad.net/ubuntu/zesty/+source/xubuntu-docs/+changelog))
-   xubuntu-meta
    ([changelog](https://launchpad.net/ubuntu/zesty/+source/xubuntu-meta/+changelog))

#### Other Application Versions

-   blueman
    ([changelog](https://launchpad.net/ubuntu/zesty/+source/blueman/+changelog))
-   gtk-theme-config
    ([changelog](https://launchpad.net/ubuntu/zesty/+source/gtk-theme-config/+changelog))
-   gtk2-engines-xfce
    ([changelog](https://launchpad.net/ubuntu/zesty/+source/gtk2-engines-xfce/+changelog))
-   lightdm-gtk-greeter-settings
    ([changelog](https://launchpad.net/ubuntu/zesty/+source/lightdm-gtk-greeter-settings/+changelog))
-   lightdm-gtk-greeter
    ([changelog](https://launchpad.net/ubuntu/zesty/+source/lightdm-gtk-greeter/+changelog))
-   orage
    ([changelog](https://launchpad.net/ubuntu/zesty/+source/orage/+changelog))
-   pavucontrol
    ([changelog](https://launchpad.net/ubuntu/zesty/+source/pavucontrol/+changelog))
-   xfburn
    ([changelog](https://launchpad.net/ubuntu/zesty/+source/xfburn/+changelog))
-   xfce4-cpugraph-plugin
    ([changelog](https://launchpad.net/ubuntu/zesty/+source/xfce4-cpugraph-plugin/+changelog))
-   xfce4-dict
    ([changelog](https://launchpad.net/ubuntu/zesty/+source/xfce4-dict/+changelog))
-   xfce4-notes-plugin
    ([changelog](https://launchpad.net/ubuntu/zesty/+source/xfce4-notes-plugin/+changelog))
-   xfce4-weather-plugin
    ([changelog](https://launchpad.net/ubuntu/zesty/+source/xfce4-weather-plugin/+changelog))
