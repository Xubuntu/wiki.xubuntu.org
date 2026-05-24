---
title: "Autopilot"
---

*Migrated from [Ubuntu Wiki](https://wiki.ubuntu.com/Xubuntu/Roadmap/Specifications/Utopic/Autopilot).*

## Specification title

| Overview | |
|---|---|
| **Title** | Autopilot |
| **Blueprint** | [http://blueprint.uri/](http://blueprint.uri/) |
| **Assignee** | lderan, elfy, xubuntu-qa |
| **Release** | [U-cycle](https://wiki.ubuntu.com/Xubuntu/Roadmap/Goals/U) |

## Detailed specification

The detailed specification should go here.

Areas covered in the specification should be the following (where applicable):
- **Summary:** Use of Autopilot to test our packages.
- **Rationale:** Increased testing of packages, using autopilot should also free up testing cycles for more specific testing by testers

- **Notes on issues that need solving** Including autopilot testing will need help from Community QA Lead
- **Discussion on the specification**

List of current packages/versions/toolkits and ability to use autopilot.

| Application | Version | Toolkit | Test Exists | Works(*) | Fails(**) |
|---|---|---|---|---|---|
| Gnumeric | 1.12.9 | GTK3 | | Y | |
| Doc Viewer | 3.10.3 | GTK3 | Y | | |
| Abiword | 3.0.0 | GTK3/DBUS | | Y | |
| Transmission | 2.82 | GTK3 | | Y | |
| Catfish | 1.0.2 | GTK3 | | Y | |
| Parole | 0.6.0 | GTK3/DBUS | | Y | |
| Web browser | 28.0 | GTK2 | Y | | |
| Mail Reader | 24.2.0 | GTK2 | | | X |
| Settings Manager | | | | Y | |
| Run Program / App Finder (xfce4-appfinder) | 4.11.0-1 | GTK2 | | | X |
| Archive Manager | | | | | X |
| Calc | | | | Y | |
| Character Map | | | | Y | |
| File Manager | 1.6.3 | GTK2/DBUS | | | X |
| Mousepad | 0.3.0 | GTK2 | | | X |
| Notes | 1.7.7 | GTK2 | | | X |
| Onboard | | | | | X |
| Orage | 4.10.0 | GTK2/XFCE | | Y | |
| Screenshot | 1.8.1 | GTK2 | | Y | |
| Terminal | 0.6.3 | GTK2/DBUS? | Y | | |
| Xfburn | 0.5.0 | GTK2/XFCE | | Y | |
| Mines | | | | Y | |
| Sudoku | | | | | X |
| Gimp | 2.8.10 | GTK2 | | | X |
| Ristretto | 0.6.3 | GTK2/XFCE | | Y | |
| Simple Scan | 3.11.91 | GTK3 | | Y | |
| Pidgin | 2.10.9 | GTK2 | | | X |
| XChat | 2.8.8 | GTK2/DBUS | | Y | |
| gmusicbrowser | 1.1.12 | GTK2 | | Y | |
| Pavucontrol | | | | Y | |
| Dictionary | 0.7.0 | GTK2 | | Y | |
| Orage Calendar | | | | | X |
| Orage Globaltime | | | | Y | |
| Gigolo | 0.4.2 | GTK2 | | X | |
| Task Manager | 1.0.1 | GTK2 | | Y | |

- Autopilot runs with no error
** Autopilot runs and returns error (failing to load autopilot module, fails after specifying Gtk)
*** Requires -i Gtk to run
