---
title: "Development Roadmap for 18.04"
weight: 40
---

# Decided

-   Replace xfce4-volumed and indicator-sound with
    xfce4-pulseaudio-plugin
-   Replace (or complement) xfce4-indicator-plugin with
    xfce4-statusnotifier-plugin
-   Determine which xfce 4.13/4.14 components we want to support for 3
    years

# Blueprint left over from Xubuntu 17.10

-   xfce4-keyboard-overlay: Port to vala or integrate with Xfce,
    Consider for inclusion
    -   I no longer feel like this would be a huge benefit
-   parole: New PackageKit plugin installer
    -   This could be worthwhile, but development could be given to a
        new contributor
-   xfce4-pulseaudio-plugin: Possibly replace indicator-sound
    -   We\'ll be doing this for 18.04
-   Integrate the Pidgin theme
    -   Pretty low priority, requires several changes to Pidgin
-   Update appstream metadata for GUI applications
    -   Should probably create a checklist for the items maintained by
        our team and review
-   Review xubuntu-core patches
    -   Let\'s refresh these and get some eyes on them

# Ideas

-   Compton works really well and eliminates screen tearing. Is this
    something we\'re interested in investigating for 18.04? Pros/Cons?
-   Trim some fonts added late in the Artful cycle
-   Split the packaging for elementary-xfce
