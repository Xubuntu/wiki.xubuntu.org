---
title: "Specifications — Precise — Default Shortcut Keys"
---

*Migrated from [Ubuntu Wiki](https://wiki.ubuntu.com/Xubuntu/Roadmap/Specifications/Precise/DefaultShortcutKeys).*

## Rethink default shortcut keys

| Overview | |
|---|---|
| **Title** | Rethink default shortcut keys |
| **Blueprint** | [https://blueprints.launchpad.net/ubuntu/+spec/other-p-xubuntu-default-shortcuts](https://blueprints.launchpad.net/ubuntu/+spec/other-p-xubuntu-default-shortcuts) |
| **Assignee** | Sysi, ochosi, knome |
| **Release** | Precise Pangolin |

## Detailed specification

| Shortcut keys to be added or changed | |
|---|---|
| **Application/Action** | **Shortcut** |
| Firefox (via exo-open) | Super W (Web) |
| Thunderbird (via exo-open) | Super M (Mail) |
| Thunar (via exo-open) | Super F (Files) |
| Terminal (via exo-open) | Super T (Terminal) |
| Appfinder | Super R (Run) |
| Leafpad/Mousepad | Super E (Editor) |
| Gmusicbrowser | Super 1 |
| Pidgin | Super 2 |
| Abiword | Super 3 |
| Gnumeric | Super 4 |
| Fill window horizontally | Alt F5 |
| Fill window vertically | Alt F6 |
| Fill window (H+V) | Alt F7 |
| Stick window | Alt F8 (was: Alt F6) |
| Move window | None (was: Alt F7) |
| Resize window | None (was: Alt F8) |

## Obsolete/superseded specification

### Additions to default application shortcuts

**Alt F1** for main menu `xfce4-popup-applicationsmenu` 

### Changes to default window manager shortcuts

| Comparison table of shortcut keys | | |
|---|---|---|
| **Action** | **Default shortcut** | **Suggested shortcut** |
| Close window | Alt F4 | Super Q |
| Maximize window | Alt F10 | Super B |
| Hide window | Alt F9 | Super H |
| Move window | Alt F7 | Super M |
| Resize window | Alt F8 | Super R |
| Stick window | Alt F6 | Super S |
| Raise window | Alt Shift !PageUp | Super !PageUp |
| Lower window | Alt Shift !PageDown | Super !PageDown |
| Toggle above | Alt F12 | Super A |
| Toggle fullscreen | Alt F11 | Super F |
| Move window to previous workspace | Alt Ctrl Home | Super Home |
| Move window to next workspace | Alt Ctrl End | Super End |
| Move window to workspace 1 | Alt Ctrl KP1 | Super KP1 |
| Move window to workspace 2 | Alt Ctrl KP2 | Super KP2 |
| Show desktop | Alt Ctrl D | Super D |
| Add workspace | Alt Insert | Super Insert |
| Delete last workspace | Alt Delete | Super Delete |

### Comments

- Rationale for **Super** instead of **Alt**? --- knome
- Not all Xubuntu users know English well. Good rationale for spreading out the shortcuts all over the keyboard rather than trying to group them, even if the shortcut key wouldn't make sense? --- knome

- In my ignorant opinion, this proposed changes make not sense at all, why would we want to spread the shortcuts all over the keyboar using random letters to do stuff, and using the Super key? i know that the vast mayority of today keyboards have them, but many old ones do not. Why taking the shortcuts from alt? This really just dont make any sense. The only shortcut i think its needed to be add, is binding xfce4-popup-menu to the Super key, this wont harm those without a Super key and will bastly help those with it. --- GridCube

### Application Shortcuts
#### Rationale
The key idea is to provide shortcuts for the most commonly used applications by default. Those users that don't use keyboard-shortcuts at all probably won't discover them (so it won't hurt anyone), those who do might appreciate it.
The main problem I see is developing a consistent scheme of naming/setting the shortcuts. Obviously using the first letter of the name of an application doesn't always work (e.g. Thunderbird and Terminal conflict), also in some cases it might make sense to use something else (e.g. Appfinder > Super R(un) ). Adding some documentation for that might make sense, but in general it's easy enough for the user to change this (go to Settings Manager > Keyboard > Application Shortcuts). So I think in a first step it should be decided whether we generally want this and in a second step the list of applications should be decided upon and then the shortcuts should be set.
--- ochosi

#### Proposed Shortcuts
| Proposed list of application shortcut keys | |
|---|---|
| **Application** | **Proposed shortcut** |
| Firefox | Super W(eb) |
| Thunderbird | Super M(ail) |
| Terminal | Super T |
| Appfinder | Super R(un) |
| Leafpad/Mousepad | Super E(ditor) |
| Gmusicbrowser | Super G |
#### Comments (App Shortcuts)
  - Should exo-default-browser/mailreader be used instead of Thunderbird and Firefox? --- ochosi
    - I'd say yes for that, and especially in that case, the Firefox shortcut should be Super W(eb). Also, what about Super A(udio) for Gmusicbrowser too? --- knome
