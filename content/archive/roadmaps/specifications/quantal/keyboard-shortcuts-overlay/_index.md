---
title: "Keyboard Shortcuts Overlay"
---

*Migrated from [Ubuntu Wiki](https://wiki.ubuntu.com/Xubuntu/Roadmap/Specifications/Quantal/KeyboardShortcutsOverlay).*

## Specification title

| Overview | |
|---|---|
| **Title** | Implement Keyboard-Shortcuts overlay/window |
| **Blueprint** | [https://blueprints.launchpad.net/ubuntu/+spec/other-q-xubuntu-shortcuts-overlay](https://blueprints.launchpad.net/ubuntu/+spec/other-q-xubuntu-shortcuts-overlay) |
| **Assignee** | Sean Davis, Simon Steinbeiß |
| **Release** | [Quantal Quetzal](https://wiki.ubuntu.com/Xubuntu/Roadmap/Goals/Quantal) |

## Detailed specification

### Rationale
In this section we'll briefly outline what the KSO is and why and how it could help to improve the current situation of keyboard shortcuts.

#### What is the Keyboard-Shortcuts Overlay?
Ubuntu introduced an interesting small goody in the Precise-cycle, namely a keyboard-shortcuts overlay. This can easily be triggered by holding the Super-Key a bit longer. It shows an overlay (i.e. semi-transparent window without window-decoration) that displays an overview over the most important keyboard shortcuts. This gives users quick access to something that is usually only for power-users and I think it could improve the workflow of Xubuntu users as well.

#### Keyboard Shortcuts in Xubuntu/Xfce (currently)
Currently keyboard shortcuts can easily be accessed in two settings-dialogs, window-manager settings > keyboard and keyboard-settings > applications.
Personally I think it's a pity that these shortcuts are spread over two very different places, even if the type of shortcuts differ by category. It's just not very discoverable at first.

#### How this could be improved
Obviously one way of fixing this would be to create one place in the settings-manager where all keyboard-shortcuts can be accessed and edited. The Keyboard-Shortcut Overlay could help by providing an overview and theoretically it could contain links to the respective dialogs for editing an existing shortcut.

### Implementation
This section will contain more practical stuff that concern the implementation of the KSO directly.
#### Technical Stuff
- How the keyboard-shortcuts can be queried via xfconf-query.
- How to create an overlay that has some transparency/alpha and now window-borders. Look at other applications.
- Fallback-mode for people without compositing, what could that look like?
- Show user-defined keyboard shortcuts as well, or show only our specialized set?

#### Categories
The KSO in Unity uses the following categories: Launcher, Dash, HUD & Menubar, Switching, Workspaces, Windows.
Xubuntu does not have the first three, but does have application specific shortcuts.  I propose the following categories:
- Applications (Open the Menu, Firefox, Thunderbird, Thunar, etc.)
- Switching
- Workspaces
- Windows

#### Screenshots/Current look in Unity
![Keyboard Shortcuts Overlay in Unity (Precise)](/archive/roadmaps/specifications/quantal/keyboard-shortcuts-overlay/shortcut-hints-overlay-unity.png)[Keyboard Shortcuts Overlay in Unity (Precise)](/archive/roadmaps/specifications/quantal/keyboard-shortcuts-overlay/shortcut-hints-overlay-unity.png)
#### Mockups for Xubuntu
![Current Python Implementation](/archive/roadmaps/specifications/quantal/keyboard-shortcuts-overlay/CurrentPythonImplementation.png)
[Current Python Implementation](/archive/roadmaps/specifications/quantal/keyboard-shortcuts-overlay/CurrentPythonImplementation.png) -- 
<https://launchpad.net/xfce4-keyboard-overlay>
