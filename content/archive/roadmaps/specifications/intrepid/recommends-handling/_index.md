---
title: "Recommends Handling"
bookHidden: true
---

*Migrated from [Ubuntu Wiki](https://wiki.ubuntu.com/Xubuntu/Roadmap/Specifications/Intrepid/RecommendsHandling), last updated 2008-08-12.*

| **Contents** |
|---|

# Handling Recommends by Default

In Intrepid, package recommends will now be installed by default in contrast to previous releases where only package dependencies have been. This has resulted in a large number of undesired/unexpected packages being included in the Xubuntu builds which wastes spaces, causes unexpected behavior, and confuses users.

Initial surveying done on August 12th 2008 comparing the number of packages in the Hardy final desktop cd included 1008 packages where as the current build has a total of 1095 - 87 more packages. There were 832 packages removed and 919 packages added (important note: a new version counts as both a removal and an addition). A small number of these packages are most certainly caused by regular updates to packages and changes to our seeds. This makes the estimated number of new packages that are now being included due to the apt configuration policy somewhere between 70 to 80.

The below table is used to track packages which are being included but **potentially** shouldn't (not limited to packages being pulled in via recommends). It details the package name (package), how the package is being included (source), and the name of the package to be updated/solution (solution).
 
| Package | Source | Solution |
|---|---|---|
| libgnome2-0 | launchpad-integration | launchpad-integration |
