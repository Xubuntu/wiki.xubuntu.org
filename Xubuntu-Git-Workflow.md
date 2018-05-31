# Xubuntu Git Workflow

The Xubuntu team uses Git for all version-controlled projects. While
Launchpad\'s Git support is still relatively young, it is still very
effective. Furthermore, Git is one of the world\'s most common version
control systems (VCS) and is used upstream: both in Debian and Xfce.

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
for git for it\'s project management features.

✓
