# Xubuntu Git Workflow

The Xubuntu team uses Git for all version-controlled projects. While
Launchpad\'s Git support is still relatively young, it is still very
effective. Furthermore, Git is one of the world\'s most common version
control systems (VCS) and is used upstream: both in Debian and Xfce.

If this is your first time working with Git, the Xfce Wiki has a great
guide for getting started and some typical use cases.\
<https://docs.xfce.org/contribute/dev/git/start>

## Setting Up Git

### Launchpad

Git identifies repositories using URLs. Unlike Bazaar, there is no
built-in abbreviation for repositories hosted on Launchpad, but it is
very easy to add such a thing yourself. Edit `~/.gitconfig` and add
these lines, where USER is your Launchpad username:

    [url "git+ssh://USER@git.launchpad.net/"]
            insteadof = lp:

This allows you to type `git clone lp:REPOSITORY` and keeps the bzr and
git workflows consistent.

## Managing Launchpad Projects

At the time of writing (May 2018), Launchpad does not have full support
for git for it\'s project management features. The following features
are not fully implemented. There are ways to work around some of these
shortcomings, as described below.

### Linking Series to Git Branches

This is currently not possible. There is not much functionality lost
here.

### Translation Imports & Exports

Launchpad does not currently support automatic synchronization to/from
Git branches. Instead, you can create an git-to-bzr code import, and
import translations from this Bazaar branch. You can periodically
download the translations for a project and sync them manually.

## Git Repositories

### Xubuntu Team Projects

-   [Xubuntu Artwork](https://code.launchpad.net/xubuntu-artwork)
-   [Xubuntu Community Artwork](https://code.launchpad.net/xubuntu-community-artwork)
-   [Xubuntu Default Settings](https://code.launchpad.net/xubuntu-default-settings)
-   [Xubuntu Documentation](https://code.launchpad.net/xubuntu-docs)
-   [Xubuntu Seeds](https://code.launchpad.net/~xubuntu-dev/ubuntu-seeds/+git/xubuntu)

### Xubuntu Applications

-   [Catfish File Search](https://code.launchpad.net/catfish-search)
-   [LightDM GTK+
    Greeter](https://code.launchpad.net/lightdm-gtk-greeter)
-   [LightDM GTK+ Greeter
    Settings](https://code.launchpad.net/lightdm-gtk-greeter-settings)
-   [MenuLibre](https://code.launchpad.net/menulibre)
-   [Mugshot](https://code.launchpad.net/mugshot)
-   [SGT Puzzles Collection](https://code.launchpad.net/sgt-launcher)
-   [Xfce Panel Switch](https://code.launchpad.net/xfpanel-switch)

### Packages Maintained By Xubuntu

-   [libmpris2client](https://code.launchpad.net/~xubuntu-dev/+git/libmpris2client)
-   [xfce4-hamster-plugin](https://code.launchpad.net/~xubuntu-dev/+git/xfce4-hamster-plugin)
-   [xfce4-soundmenu-plugin](https://code.launchpad.net/~xubuntu-dev/+git/xfce4-soundmenu-plugin)
-   [xfdashboard](https://code.launchpad.net/~xubuntu-dev/+git/xfdashboard)

### Related Links

-   [Debian Salsa: Python App Packaging Team
    (PAPT)](https://salsa.debian.org/python-team/applications)
-   [Debian Salsa: Xfce](https://salsa.debian.org/xfce-team)
-   [GNOME GitLab](https://gitlab.gnome.org/GNOME)
-   [MATE on GitHub](https://github.com/mate-desktop)
-   [Xfce Git Repository Browser](https://git.xfce.org/)
-   [Xfce: Git User
    Repositories](https://docs.xfce.org/contribute/dev/git/userrepos)
