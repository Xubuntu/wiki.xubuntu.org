---
title: "Settings Manager Apps"
---

*Migrated from [Ubuntu Wiki](https://wiki.ubuntu.com/Xubuntu/Roadmap/Specifications/Quantal/SettingsManagerApps), last updated 2012-08-25.*

## Specification title

| Overview |  |
|---|---|
| **Title** | Add more applications to Settings manager |
| **Blueprint** | [https://blueprints.launchpad.net/ubuntu/+spec/other-q-xubuntu-settings-manager-launchers](https://blueprints.launchpad.net/ubuntu/+spec/other-q-xubuntu-settings-manager-launchers) |
| **Assignee** | Unit193, community |
| **Release** | [Quantal Quetzal](/archive/roadmaps/goals/quantal/) |

## Detailed specification

Applications that we should think of adding to Settings manager.

### Personal

| **Item** | **Command** | **Information** |
|---|---|---|
| Compiz Settings | compizconfig-settings-manager | Don't add! |
| Main Menu | alacarte | alacarte.desktop, alacarte |
| Qt4 Settings | qtconfig-qt4 | qtconfig-qt4.desktop, qt4-qtconfig |
| Ubuntu One | ubuntuone-installer | ubuntuone-installer.desktop, ubuntuone-installer |
| Wine Configuration | wine-winecfg | wine-winecfg.desktop, wine1.x |
| IBus | ibus | ibus-setup.desktop, ibus |
| Language Support | language-selector | language-selector.desktop, language-selector-gnome |

### Hardware
| **Item** | **Command** | **Information** |
|---|---|---|
| Network Connections | nm-connection-editor | nm-connection-editor.desktop, network-manager-gnome |
| Bluetooth Manager | blueman-manager | blueman-manager.desktop, blueman |

### System
| **Item** | **Command** | **Information** |
|---|---|---|
| Software Sources (and Additional Drivers) | software-properties-gtk | software-properties-gtk.desktop, software-properties-gtk |
| Time and Date | time | time.desktop, gnome-time-admin |
| Users and Groups | users | users.desktop, gnome-system-tools |

## Comments

- I'm wondering if we should try to drop the settings-submenu, replace it with a simple settings-manager launcher and try to keep everything there. -- Simon Steinbeiß
    - +1 -- knome
- I think this spec should list the category of each item too, otherwise all stuff will end up in "Other". -- Lionel
    - +1 -- Simon
