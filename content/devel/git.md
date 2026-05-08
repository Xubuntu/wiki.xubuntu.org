---
title: "Git Workflow"
---

The Xubuntu team uses Git for all version-controlled projects. While
Launchpad's Git support is still relatively young, it is robust.
Furthermore, Git is one of the world's most common version control
systems (VCS) and is used upstream: both in Debian and Xfce.

If this is your first time working with Git, the Xfce Wiki has a great
guide for getting started and some typical use cases.\
<https://docs.xfce.org/contribute/dev/git/start>

***Please note that this change has nothing to do with GitHub and recent
related news. GitHub is a different service than Launchpad with the only
similarity being the usage of the Git VCS.***

# Why Git?

Xubuntu and its various projects have used Bazaar since the beginning.
Bazaar has served us well in the past, but there are several compelling
reasons for us to transition. And the Xubuntu 18.10 cycle is the perfect
time for us to move.

-   **Consistent Workflow:** Git is now used by both all of our
    upstreams. Debian, Xfce, and Shimmer Project all use Git. Upstream
    contributions become easier with a familiar process.
-   **Familiarity:** Git is one of the most popular version control
    systems for open source projects. New contributors are more likely
    to have used Git in previous projects.
-   **Development Activity:** Git continues to be actively maintained
    and supported, with regular releases and bug fixes. The last Bazaar
    release was over two years ago.
-   **Application Support:** Many applications provide support for Git
    in one way or another. [Thunar's VCS
    plugin](https://goodies.xfce.org/projects/thunar-plugins/thunar-vcs-plugin)
    and Geany's [GeanyVC](https://plugins.geany.org/geanyvc.html)
    plugin provide addon support for managing Git repositories.
    [Atom](https://atom.io/) and [Visual Studio Code](https://code.visualstudio.com/), two of the most popular IDEs
    available for Linux, have native support for Git.

# Setting Up Git

## Launchpad

Git identifies repositories using URLs. Unlike Bazaar, there is no
built-in abbreviation for repositories hosted on Launchpad, but it is
very easy to add such a thing yourself. Edit `~/.gitconfig` and add
these lines, where USER is your Launchpad username:

    [url "git+ssh://USER@git.launchpad.net/"]
            insteadof = lp:

This allows you to type `git clone lp:REPOSITORY` and keeps the bzr and
git workflows consistent.

# Managing Launchpad Projects

At the time of writing (May 2018), Launchpad does not have full support
for git for its project management features. The following features are
not fully implemented. There are ways to work around some of these
shortcomings, as described below.

## Linking Series to Git Branches

This is currently not possible. Series only help to identify which code
branches are associated with each version lines. Instead, consider
pushing each version line as a separate branch in your project.

## Translation Imports & Exports

Launchpad does not currently support automatic synchronization to/from
Git branches. Instead, you can create an git-to-bzr code import, and
import translations from this Bazaar branch. You can periodically
download the translations for a project and sync them manually.

# Examples

We'll use Xubuntu Documentation
([lp:xubuntu-docs](https://code.launchpad.net/xubuntu-docs)) for our
examples.

## Cloning a Repository

    git clone lp:xubuntu-docs # Requires the configuration outlined above in "Setting up Git"
    cd xubuntu-docs

## Making Changes

    # Make a change to Makefile
    git status # Shows changed files
    git diff # Shows changes to files
    git add Makefile # Adds a single file to be committed
    # or
    git add -u # Adds all changed files to be committed
    git commit -m "Some makefile changes"
    git push # Pushes the commit to the repository

## Pushing to a Branch

Say you have some changes you want want to have merged. Instead of
pushing directly to the main repository, you can instead push your own
branch. In the below example, you tell git about your new "remote"
where you are going to be pushing your commits. In this example we will
use the following names:

-   "myfeaturebranch" as the name of our new branch.
-   "myremote" as the name of our new remote repository.
-   "myusername" as our Launchpad username.
-   Replace these as necessary.

    git checkout -b myfeaturebranch # Creates a new branch and switches to it
    git remote add myremote lp:~myusername/xubuntu-docs/myfeaturebranch # Adds the remote repository location
    git push --set-upstream myremote myfeaturebranch

## Merging a Branch

    # clone your branch
    git clone lp:lightdm-gtk-greeter
    cd lightdm-gtk-greeter

    # fetch the remote branch
    git remote add remotename https://git.launchpad.net/~username/lightdm-gtk-greeter
    git fetch remotename
    git merge remotename/master

    # push the merge
    git push

# Git Repositories

## Xubuntu Team Projects

-   [Xubuntu Artwork](https://code.launchpad.net/xubuntu-artwork)
-   [Xubuntu Community Artwork](https://code.launchpad.net/xubuntu-community-artwork)
-   [Xubuntu Default Settings](https://code.launchpad.net/xubuntu-default-settings)
-   [Xubuntu Documentation](https://code.launchpad.net/xubuntu-docs)
-   [Xubuntu Seeds](https://code.launchpad.net/~xubuntu-dev/ubuntu-seeds/+git/xubuntu)

## Xubuntu Applications

-   [Catfish File Search](https://code.launchpad.net/catfish-search)
-   [LightDM GTK+
    Greeter](https://code.launchpad.net/lightdm-gtk-greeter)
-   [LightDM GTK+ Greeter
    Settings](https://code.launchpad.net/lightdm-gtk-greeter-settings)
-   [MenuLibre](https://code.launchpad.net/menulibre)
-   [Mugshot](https://code.launchpad.net/mugshot)
-   [SGT Puzzles Collection](https://code.launchpad.net/sgt-launcher)
-   [Xfce Panel Switch](https://code.launchpad.net/xfpanel-switch)

## Packages Maintained By Xubuntu

-   [libmpris2client](https://code.launchpad.net/~xubuntu-dev/+git/libmpris2client)
-   [xfce4-hamster-plugin](https://code.launchpad.net/~xubuntu-dev/+git/xfce4-hamster-plugin)
-   [xfce4-soundmenu-plugin](https://code.launchpad.net/~xubuntu-dev/+git/xfce4-soundmenu-plugin)
-   [xfdashboard](https://code.launchpad.net/~xubuntu-dev/+git/xfdashboard)

## Related Links

-   [Debian Salsa: Python App Packaging Team
    (PAPT)](https://salsa.debian.org/python-team/applications)
-   [Debian Salsa: Xfce](https://salsa.debian.org/xfce-team)
-   [GNOME GitLab](https://gitlab.gnome.org/GNOME)
-   [MATE on GitHub](https://github.com/mate-desktop)
-   [Xfce Git Repository Browser](https://git.xfce.org/)
-   [Xfce: Git User
    Repositories](https://docs.xfce.org/contribute/dev/git/userrepos)
