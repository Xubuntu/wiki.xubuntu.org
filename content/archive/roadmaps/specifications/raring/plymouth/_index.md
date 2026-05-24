---
title: "Specifications — Raring — Plymouth"
---

*Migrated from [Ubuntu Wiki](https://wiki.ubuntu.com/Xubuntu/Roadmap/Specifications/Raring/Plymouth).*

## Specification
Improve Xubuntu's current plymouth bootscreen. There are a few features we should implement, such as proper wallpaper scaling, and we should probably revisit the boot animation.

#### Features
- Proper wallpaper scaling ([Look here](http://brej.org/blog/?p=197) for how it could be done)
- Implement circular animation instead of the misleading progressbar (pulsing, a spinner etc.) (Again, [look here](http://brej.org/blog/?p=197))
- Use a symlink to Xubuntu's current wallpaper instead of shipping it inside the theme (unless we want xubuntu's plymouth theme to function independantly as well -> look at packaging recommends and depends)
