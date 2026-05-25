---
title: "Quantal"
bookHidden: true
---

*Migrated from [Ubuntu Wiki](https://wiki.ubuntu.com/Xubuntu/Roadmap/Goals/Quantal), last updated 2012-08-26.*

# Xubuntu Development Roadmap

## Roadmap for Quantal Quetzal
This page is to serve as a development roadmap for the next version of Xubuntu.
[Click here to see the current status of development.](http://status.ubuntu.com/ubuntu-quantal/group/topic-quantal-flavor-xubuntu.html)

### Phases of development

| **Phase** | **Deadline** |
|---|---|
| **Brainstorming and finding assignees** | **End of Week 19**, UDS Q |
| **Approving blueprints** | **End of Week 20** |
| **Finalizing blueprints and specifications** | **May 31**, FeatureDefinitionFreeze |
| **▶ (Further discussion and) implementing** | **Ubuntu freezes**, Aug 23 and later |
| *Read more about [the phases](https://wiki.ubuntu.com/Xubuntu/StrategyDocument#Designing_a_release) on our Strategy Document.* | |

### New features, major bugs, improvements to community
Note that any items with no assignee will not be driven, and most probably won't make it to the release.

<!--
  Please use a #ededed and #fafafa rowstyles alternately so readability stays.
  See existing rows for example.
  Please don't edit the importance column yourself.
  It will be set by the Project Lead or the concerned Team Lead.
-->
| **Item** | **Assignee** | **Importance** | **Links** |
|---|---|---|---|
| Review the Strategy Document | Pasi Lallinaho, community | Essential | **[Blueprint](https://blueprints.launchpad.net/ubuntu/+spec/other-q-xubuntu-review-strategy-document)**  [Old Strategy Document](https://wiki.ubuntu.com/Xubuntu/StrategyDocument)  [New Strategy Document (reviewing)](http://strategydoc.knome.fi/) |
| Review the QA procedures | Janne Jokitalo, Pasi Lallinaho | Essential | **[Blueprint](https://blueprints.launchpad.net/ubuntu/+spec/other-q-xubuntu-qa-procedures)** |
| Include Xfce 4.10 | Lionel Le Folgoc, Micah Gersten | Essential | **[Blueprint](https://blueprints.launchpad.net/ubuntu/+spec/other-q-xubuntu-xfce-410)** |
| Refresh the offline documentation | Pasi Lallinaho, community | High | **[Blueprint](https://blueprints.launchpad.net/ubuntu/+spec/other-q-xubuntu-refresh-offline-documentation)** |
| New Plymouth theme | madnick | High | **[Blueprint](https://blueprints.launchpad.net/ubuntu/+spec/other-q-xubuntu-new-plymouth)** |
| New LightDM theme | madnick | High | **[Blueprint](https://blueprints.launchpad.net/ubuntu/+spec/other-q-xubuntu-new-lightdm)** |
| Analyze and optimize boot times | Janne Jokitalo, Pasi Lallinaho, testers | High | **[Blueprint](https://blueprints.launchpad.net/ubuntu/+spec/other-q-xubuntu-optimize-boot)** |
| Website improvements | Pasi Lallinaho, Elizabeth Krumbach | Medium | **[Blueprint](https://blueprints.launchpad.net/ubuntu/+spec/other-q-xubuntu-website-improvements)**, [Specification](/archive/roadmaps/specifications/quantal/website-improvements/) |
| Review terminal theme | Simon Steinbeiß, Pasi Lallinaho | Medium | **[Blueprint](https://blueprints.launchpad.net/ubuntu/+spec/other-q-xubuntu-terminal-theme)**, [Specification](/archive/roadmaps/specifications/quantal/terminal-theme-review/) |
| Albatross theme facelift | Simon Steinbeiß, Pasi Lallinaho | Medium | **[Blueprint](https://blueprints.launchpad.net/ubuntu/+spec/other-q-xubuntu-albatross-facelift)** |
| Improve Bluebird theme | Simon Steinbeiß, Markus Klinga | Medium | **[Blueprint](https://blueprints.launchpad.net/ubuntu/+spec/other-q-xubuntu-improve-bluebird)** |
| Rethink elementary-xfce icons concept | Simon Steinbeiß | Medium | **[Blueprint](https://blueprints.launchpad.net/ubuntu/+spec/other-q-xubuntu-elementary-xfce)** |
| Explore possibilities of desktop search | Sean Davis, Simon Steinbeiß | Medium | **[Blueprint](https://blueprints.launchpad.net/ubuntu/+spec/other-q-xubuntu-desktop-search)** |
| Add more launchers to Settings manager | Unit193, community | Medium | **[Blueprint](https://blueprints.launchpad.net/ubuntu/+spec/other-q-xubuntu-settings-manager-launchers)**, [Specification](/archive/roadmaps/specifications/quantal/settings-manager-apps/) |
| Xubuntu marketing initiatives | Elizabeth Krumbach, community | Medium | **[Blueprint](https://blueprints.launchpad.net/ubuntu/+spec/other-q-xubuntu-marketing)**, [Marketing wikipage](https://wiki.ubuntu.com/Xubuntu/Marketing) |
| Implement Keyboard-Shortcuts overlay/window | Sean Davis, Simon Steinbeiß | Low | **[Blueprint](https://blueprints.launchpad.net/ubuntu/+spec/other-q-xubuntu-shortcuts-overlay)**, [Specification](/archive/roadmaps/specifications/quantal/keyboard-shortcuts-overlay/) |
| Ubiquity application sets | Janne Jokitalo | Low | **[Blueprint](https://blueprints.launchpad.net/ubuntu/+spec/other-q-xubuntu-application-sets)** |
| Umbrella blueprint for appearance blueprints | **[Blueprint](https://blueprints.launchpad.net/ubuntu/+spec/other-q-xubuntu-appearance)**, [Panel layout spec](/archive/roadmaps/specifications/quantal/default-panel-layout/) | | |
| **Ideas that are postponed for now** | | | |
| Ship [apt-offline](http://apt-offline.alioth.debian.org/) by default | - | - | [Specification](/archive/roadmaps/specifications/quantal/apt-offline/) |
| Add optimum partitioning option to install options | - | - | - |
| Add DVD support to Xubuntu restricted extras | - | - | - |
| New Panel Plug in: Disk access monitor | - | - | - |

### Changes on default applications
*Items in this group (usually) need comprehensive ***application comparisons***. An assignee for each "group"/type of application should take up the task, ideally more than one to make it less subjective/one-sided.*

<!-- Please use a #ededed and #fafafa rowstyles alternately so readability stays. -->
<!-- See existing rows for example. -->
| **Application group** | **Proposed (Current)** | **Assignee** | **Importance** | **Links** |
|---|---|---|---|---|
| Package manager | Lubuntu Software Center? (USC, Synaptic) | Pasi Lallinaho, Simon Steinbeiß | High | - |
| Monitor management | Improve xfce4-display-dialog | GridCube | Medium | - |
| Media player | Listen, DeadBeef? (gmusicbrowser) | GridCube | Medium | [Specifications](/archive/roadmaps/specifications/quantal/default-media-player/) |
| Backup App | Deja Dup, ? (-) | - | Medium | - |
| Video player | Improve Parole | - | Low | - |
| Webcam Application | Cheese? | GridCube | Low | [Specifications](/archive/roadmaps/specifications/quantal/webcam-application/) |
| Menu manager | MenuLibre, LXMenueditor, (Alacarte) | - | Low | - |
| Terminal | Sakura | - | Low | - |
| Image editor | ? (GIMP) | - | Low | - |
