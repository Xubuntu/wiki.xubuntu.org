---
title: "Daily Upstream Builds Xfce"
---

*Migrated from [Ubuntu Wiki](https://wiki.ubuntu.com/Xubuntu/Roadmap/Specifications/Karmic/daily-upstream-builds-xfce), last updated 2012-03-25.*

Specifications for this cycle : 
# Daily upstream builds of Xfce
*** Perform daily upstream package builds of Xfce trunk for testing & debugging   ***

- **Launchpad entry**: [daily-upstream-builds-xfce](https://blueprints.launchpad.net/xubuntu-desktop/+spec/daily-upstream-builds-xfce)
- **Release target**: Karmic
- **Contributors**: [LaunchpadHome:CodySomerville](https://launchpad.net/~cody-somerville)
- **Field of the spec**: Team Infrastructure

## Summary

The goal is to take the trunk of Xfce (only core components for now) every night and attempt to build two sets of debian packages: relatively unmodified (as close as vanilla upstream as possible) and patched as normal (modified with our usual set of patches). 

## Rationale

This will provide us with a number of benefits which include, but are not limited to, the following:

1. Early detection of problems, issues, and concerns
1. Easier to help test the latest and greatest Xfce
1. Easier to test if a bug has been fixed already or not
1. Easier to determine if a bug is our fault or really a bug upstream

## Use cases

- Jenny, an Xfce developer, asks Zelda to test some changes she made to xfce4-mixer's slider controls the other day. Zelda easily installs the xfce4-mixer from the PPA and finds that she can no longer move the sliders to change the volume after setting them to max. Zelda removes the xfce4-mixer from the PPA and re-installs the latest version from the Xubuntu after sharing a laugh about the bug with Jenny.
- Zorro wants to help contribute to Xubuntu/Xfce via testing/QA so he enables the PPA in Software Sources. Since Zorro gets the latest from trunk every day, he is able to keep up with development and helps make Xubuntu/Xfce better by helping spot bugs and problems early. 
- Wayne, a Xubuntu developer, is trying to debug a tricky issue that seems to be only affecting Xubuntu users. Wayne uses the packages from the two PPAs (vanilla vs. Xubuntu) and determines the issue is with an old Xubuntu patch (or really is in Xfce).
- Zippy has the nightly build PPAs enabled but a change in the source code upstream makes the packages fail to build. No one has gotten around to fixing the issue for awhile and when Zippy reports the issue to Xfce developers the Xfce developers get frustrated.

## The specification
### Design

We'll use launchpad's ability to import remote GIT branches into launchpad hosted bzr branches. They will be marked as trunk of their respective launchpad project.

A team will be created to own the two bzr branches per Xfce component (vanilla vs. xubuntu) and two PPAs that will host the packages of the respective bzr branches (again, vanilla vs. xubuntu). Initially, we'll start with the Xubuntu packages.  

Since we'll be building GIT, we'll need to patch the rules file to call autogen.sh and make distcheck before configuration begins and the control file to depend on xfce4-dev-tools plus other misc packages (like libtool). These changes will be maintained in a branch called "grumpy" and will continuously merge in applicable updates from the branch containing the packaging for the current development release of Xubuntu.

The `bzr-builder` tool will be used to automate the preparation and upload of each Xfce component to the PPAs for the launchpad buildds to build. The tool will probably initially be hosted/ran on my machine but we'll naturally want to get more permanent hosting somewhere more reliable.

The `bzr-builder` tool uses recipes to construct a working directory to build the source package from. These recipes will be maintained in a bzr branch located at [lp:~xubuntu-xfce-daily-builds/+junk/recipes](https://code.launchpad.net/~xubuntu-xfce-daily-builds/+junk/recipes) For more details, see <https://wiki.ubuntu.com/DailyBuilds/BzrBuilder> 

### Notes on the implementation

/!\ **All imports recreated to point at git. Some may still be waiting in queue for initial import.** /!\

#### Session

| **Component Name** | **Launchpad Product** | **Upstream Code Import** | **Nightly Builds** |
|---|---|---|---|
| [xfwm4](http://www.xfce.org/projects/xfwm4/) | [xfwm4](https://launchpad.net/xfwm4) | [lp:xwfm4](https://code.launchpad.net/~vcs-imports/xfwm4/trunk) | [ppa:xubuntu-xfce-daily-builds/ppa](https://launchpad.net/~xubuntu-xfce-daily-builds/+archive/ppa/+packages?field.name_filter=xfce4-session&field.status_filter=published&field.series_filter=any) {OK} |
| [xfce4-panel](http://www.xfce.org/projects/xfce4-panel/) | [xfce4-panel](https://launchpad.net/xfce4-panel) | [lp:xfce4-panel](https://code.launchpad.net/~vcs-imports/xfce4-panel/trunk) | {X} |
| [xfdesktop](http://www.xfce.org/projects/xfdesktop/) | [xfdesktop](https://launchpad.net/xfdesktop) | [lp:xfdesktop](https://code.launchpad.net/~vcs-imports/xfdesktop/trunk) | {X} |
| [xfce4-session](http://www.xfce.org/projects/xfce4-session/) | [xfce4-session](https://launchpad.net/xfce4-session) | [lp:xfce4-session](https://code.launchpad.net/~vcs-imports/xfce4-session/trunk) | {X} |
| [xfce4-settings](http://www.xfce.org/projects/xfce4-settings/) | [xfce4-settings](https://launchpad.net/xfce4-settings) | [lp:xfce4-settings](https://code.launchpad.net/~vcs-imports/xfce4-settings/trunk) | {X} |
| [xfconf](http://www.xfce.org/projects/xfconf/) | [xfconf](https://launchpad.net/xfconf) - {X} Need NCommander to change maintainer to xubuntu-team | [lp:xfconf](https://code.launchpad.net/~vcs-imports/xfconf/trunk) {X} | {X} |

#### Libraries

| **Component Name** | **Launchpad Product** | **Upstream Code Import** | **Nightly Builds** |
|---|---|---|---|
| [exo](http://www.xfce.org/projects/exo/) | [exo](https://launchpad.net/exo) | [lp:exo](https://code.launchpad.net/~vcs-imports/exo/trunk) | {X} |
| [xfce-gtk-engine](http://www.xfce.org/projects#art) | [gtk2-engines-xfce](https://launchpad.net/gtk2-engines-xfce) | [lp:gtk2-engines-xfce](https://code.launchpad.net/~vcs-imports/gtk2-engines-xfce/trunk) | {X} |
| [xfce-utils](http://www.xfce.org/projects/xfce-utils/) | [xfce4-utils](https://launchpad.net/xfce4-utils) | [lp:xfce4-utils](https://code.launchpad.net/~vcs-imports/xfce4-utils/trunk) | {X} |
| [xfce4-dev-tools](http://foo-projects.org/~benny/projects/xfce4-dev-tools/) | [xfce4-dev-tools](https://launchpad.net/xfce4-dev-tools) | [lp:xfce4-dev-tools](https://code.launchpad.net/~vcs-imports/xfce4-dev-tools/trunk) | {X} |
| [libxfcegui4](http://www.xfce.org/projects/libraries/) | [libxfcegui4](https://launchpad.net/libxfcegui4) | [lp:libxfcegui4](https://code.launchpad.net/~vcs-imports/libxfcegui4/trunk) | {X} |
| [libxfce4ui](http://www.xfce.org/projects/libraries/) | [libxfce4ui](https://launchpad.net/libxfce4ui) | [lp:libxfce4ui](https://code.launchpad.net/~vcs-imports/libxfce4ui/trunk) | {X} |
| [libxfce4util](http://www.xfce.org/projects/libraries/) | [libxfce4util](https://launchpad.net/libxfce4util) | [lp:libxfce4util](https://code.launchpad.net/~vcs-imports/libxfce4util/trunk) | {X} |
| [libxfce4menu](http://www.xfce.org/projects/libraries/) | [libxfce4menu](https://launchpad.net/libxfce4menu) | [lp:libxfce4menu](https://code.launchpad.net/~vcs-imports/libxfce4menu/trunk) | {X} |
| [thunar-vfs](http://thunar.xfce.org) | [thunar-vfs](https://launchpad.net/thunar-vfs) | [lp:thunar-vfs](https://code.launchpad.net/~vcs-imports/thunar-vfs/trunk) | {X} |

#### Applications

| **Component Name** | **Launchpad Product** | **Upstream Code Import** | **Nightly Builds** |
|---|---|---|---|
| [xfce4-appfinder](http://www.xfce.org/projects/xfce4-appfinder/) | [xfce4-appfinder](https://launchpad.net/xfce4-appfinder) | [lp:xfce4-appfinder](https://code.launchpad.net/~vcs-imports/xfce4-appfinder/trunk) | {X} |
| [thunar](http://www.xfce.org/projects/thunar/) | [thunar](https://launchpad.net/thunar) | [lp:thunar](https://code.launchpad.net/~vcs-imports/thunar/trunk) | {X} |
| [xfce4-mixer](http://www.xfce.org/projects/xfce4-mixer/) | [xfce4-mixer](https://launchpad.net/xfce4-mixer) | [lp:xfce4-mixer](https://code.launchpad.net/~vcs-imports/xfce4-mixer/trunk) | {X} |
| [orage](http://www.xfce.org/projects/orage/) | [orage](https://launchpad.net/orage) | [lp:orage](https://code.launchpad.net/~vcs-imports/orage/trunk) | {X} |
| [mousepad](http://www.xfce.org/projects/mousepad/) | [mousepad](https://launchpad.net/mousepad) | [lp:mousepad](https://code.launchpad.net/~vcs-imports/mousepad/trunk) | {X} |
| [Terminal](http://www.xfce.org/projects/terminal/) | [xfce4-terminal](https://launchpad.net/xfce4-terminal) {X} - owned by _deepfire | [lp:xfce4-terminal](https://code.launchpad.net/~vcs-imports/xfce4-terminal/trunk) | {X} |
| [Ristretto](http://www.xfce.org/projects/ristretto/) | [ristretto](https://launchpad.net/ristretto) | [lp:ristretto](https://code.launchpad.net/~vcs-imports/ristretto/trunk) | {X} |
| [xfce4-power-manager](http://goodies.xfce.org/projects/applications/xfce4-power-manager) | [xfce4-power-manager](https://launchpad.net/xfce4-power-manager) | [lp:xfce4-power-manager](https://code.launchpad.net/~vcs-imports/xfce4-power-manager/trunk) | {X} |
| [xfce4-volumed](https://launchpad.net/xfce4-volumed) | [xfce4-volumed](https://launchpad.net/xfce4-volumed) | [lp:xfce4-volumed](https://code.launchpad.net/~vcs-imports/xfce4-volumed/trunk) | {X} |

### Extra maintenance work after the spec

- The tool will need to be maintained to ensure it keeps running.
- We'll need to maintain the debian packaging used to build the packages (mitigated by the magic of bzr)
- We'll need to update all the imports once Xfce switches to git
- We'll need to poke launchpad developers to fix any import failures if they occur
