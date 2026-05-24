---
title: "Inxi"
---

*Migrated from [Ubuntu Wiki](https://wiki.ubuntu.com/Xubuntu/Roadmap/Specifications/Utopic/Inxi).*

## Add inxi to the seed

| Overview | |
|---|---|
| **Title** | Add inxi to the seed |
| **Blueprint** | - |
| **Assignee** | - |
| **Release** | [U-cycle](https://wiki.ubuntu.com/Xubuntu/Roadmap/U) |

---
[Inxi](http://code.google.com/p/inxi/) is a system information script written in bash, supporting many [options](http://manpages.ubuntu.com/inxi).

## The cost
- Dependencies: gawk hddtemp libsensors4 libsigsegv2 lm-sensors mesa-utils
- Total installed size: 3351kB

## The benefit
- Support
    - IRC: Asking someone in #xubuntu to run *inxi -Gxxx -c0 | pastebinit* in order to get the
      graphics card, what driver it's using, what version, and some additional information would be very useful.
      Some other common options are as follows.
          - *-r* for repositories
          - *-n* / *-N* for network information
          - *-S* for general system information.
          - *-s* for sensor information.
          - *-p* / *-P* for partition data.
          - *-M* for Machine data (vendor, product, bios, etc.)
          - *-f* for CPU flags.
          - *-F* for full output.
      ...and others.  To get more detailed information, you use the `-x` or `-xx` options, and `-c [number]` to change output colors, 0 for no color.

    - Forums: This could also be quite useful on the forums, you likely wouldn't need to dump the information in a pastebin.

- Easy tool to get various information about your system.
