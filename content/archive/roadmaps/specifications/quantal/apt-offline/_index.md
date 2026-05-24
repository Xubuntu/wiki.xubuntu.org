---
title: "Specifications — Quantal — Apt Offline"
---

*Migrated from [Ubuntu Wiki](https://wiki.ubuntu.com/Xubuntu/Roadmap/Specifications/Quantal/AptOffline).*

## Including apt-offline on LiveCD

| Overview | |
|---|---|
| **Title** | Include apt-offline by default on LiveCD to improve package access in bandwidth challenged use scenarios |
| **Blueprint** | - |
| **Assignee** | - |
| **Release** | Quantal Quetzal |

## Detailed specification

Users in bandwidth-challenged scenarios are presented with a chicken-and-egg problem in terms of updating repositories.  Nothing in the basic minimum package list let alone included within xubuntu-desktop provides a way to execute the equivalent of "apt-get update" on a separate machine.  The upstream apt-offline package, which also has the associated apt-offline-gui Qt-based wrapper, allows for not just repository scans separate from a machine but also package download and load.

Inclusion of this relatively small tool on the LiveCD in addition to being something installed connected with xubuntu-desktop would avoid chicken-and-egg problems by allowing from the outset the ability to update machines regardless of connectivity status.  This would broaden access to Xubuntu in a way that would bridge digital divides through allowing community cooperation in updating machines.  This also serves the purpose of improving end-user security by removing a lack of Internet connection from being an excuse for not patching one's system.
