---
title: "Specifications — Saucy — Autopilot Testing"
---

*Migrated from [Ubuntu Wiki](https://wiki.ubuntu.com/Xubuntu/Roadmap/Specifications/Saucy/AutopilotTesting).*

## Specification title

| Overview | |
|---|---|
| **Title** | Autopilot testing |
| **Blueprint** | Not yet available |
| **Assignee** | Jackson Doak, Victor Elorza, David James |
| **Release** | [SS](https://wiki.ubuntu.com/Xubuntu/Roadmap/Goals/S) |

## Detailed specification

The detailed specification should go here.

Areas covered in the specification should be the following (where applicable):
- **Summary:** A short summary what the specification is about.
- **Rationale:** Why should this change be done?
- **Use cases:** Which use cases this addresses?
- **Detailed application comparison** between new/old, based on the guidelines specified in the [Xubuntu Strategy Document](https://wiki.ubuntu.com/Xubuntu/StrategyDocument), including, but not limited to: integration, usability, performance and features
- **Notes on design, implementation and maintenance work**
- **Notes on issues that need solving** by upstream, Xubuntu team and others
- **Discussion on the specification**
- **Check for which applications appear to work with Autopilot**

Checked directly against ALL menu items in default install. (30/05/13)

| | Test Exists | Works(*) | Fails(**) | |
|---|---|---|---|---|
| Web browser | Y | | | |
| Mail Reader | | | X | |
| Settings Manager | | Y | | |
| Run Program | | Y | | |
| App Finder | | Y | | |
| Archive Manager | | | X | |
| Calc | | Y | | |
| Catfish | | Y | | |
| Character Map | | Y | | |
| File Manager | | | X | |
| Mousepad | | Y | | |
| Notes | | | X | |
| Onboard | | | X | |
| Orage | | Y | | |
| Screenshot | | Y | | |
| Terminal | Y | | | |
| Xfburn | | Y | | |
| Mines | | Y | | |
| Sudoku | | | X | |
| Doc Viewer | Y | | | |
| Gimp | | | X | |
| gThumb | | Y | | |
| Ristretto | | Y | | |
| Simple Scan | | Y | | |
| Pidgin | | | X | |
| Thunderbird | | Y | | |
| Transmission | | Y | | |
| XChat | | Y | | |
| gmusicbrowser | | Y | | |
| Parole | | Y | | |
| Pavucontrol | | Y | | |
| Abiword | | Y | | |
| Dictionary | | Y | | |
| Gnumeric | | Y | | |
| Orage Calendar | | | X | |
| Orage Globaltime | | Y | | |
| Gigolo | | | X | |
| IBus | | Y | | *** |
| Task Manager | | Y | | |

- Autopilot runs with no error
** Autopilot runs and returns error (failing to load autopilot module, fails after specifying Gtk)
*** Requires -i Gtk to run
