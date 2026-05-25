---
title: "Langpacks Spec"
bookHidden: true
---

*Migrated from [Ubuntu Wiki](https://wiki.ubuntu.com/Xubuntu/Roadmap/Specifications/Dapper/LangpacksSpec), last updated 2012-07-17.*

##(see the SpecSpec for an explanation)

- **Launchpad Entry**: <https://launchpad.net/distros/ubuntu/+spec/xubuntu-langpacks>
- **Created**: 2006-06-11 by JaniMonoses
- **Contributors**:
- **Packages affected**: 

## Summary
This is about the language packages that provide translations for Xubuntu apps

## Rationale

In Dapper Xubuntu translations are split between the base langpacks (Xfce core) as they are not too heavy, and the gnome langpacks as some traditionally Gnome apps are installed by default in Xubuntu.

We need to see if having dedicated Xubuntu langpacks has more benefits than drawbacks.
The apps that are in Xubuntu default install and in Gnome language packs are:
  - evince
  - gnumeric
  - update-manager
and possibly more for edgy

Pros:
      - does not increase base langpacks size (even if it's not too much)
      - Xubuntu users do not need the full gnome-langpacks for the few gnome apps

Cons:
      - a new set of language packs which could mean maintenance overhead
      -  extra packages needed for a default gnome install if some translations move out

Hmm, now that it's written down it looks like the Cons are weighing more, no need to complicate this.

## Use cases

## Scope

## Design

## Implementation

### Code

### Data preservation and migration

## Outstanding issues

## BoF agenda and discussion

---
CategorySpec
