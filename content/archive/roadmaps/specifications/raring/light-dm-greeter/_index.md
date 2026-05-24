---
title: "Light DM Greeter"
---

*Migrated from [Ubuntu Wiki](https://wiki.ubuntu.com/Xubuntu/Roadmap/Specifications/Raring/LightDM-Greeter), last updated 2013-05-09.*

This is a short specification of what could be improved in the lightdm-gtk-greeter and what design it could feature.
It will show a few mockups and describe the functionality the gtk-greeter should gain.

There's also another (collaborative) effort with folks from Lubuntu to improve the greeter: [link](https://wiki.ubuntu.com/frankbooth/lightdm-gtk-greeter)

[Launchpad Project](https://launchpad.net/lightdm-gtk-switcher)

## Features
  - Show clock/date
  - Integrate accessibility menu and shutdown/restart menu into login-box and drop top panel
  - Lock the screen
  - Correctly scale the wallpaper/background
  - Better multi-monitor support (as laid out [here](/archive/roadmaps/specifications/quantal/multiple-monitors/))

## Screen Lock (Postponed)
**Todo list**:
  - find which dbus call is used to lock the session with lightdm (cf. <http://bazaar.launchpad.net/~lightdm-team/lightdm/trunk/view/head:/tests/src/test-session.c#L45>)
    - There is a command that does this, gdmflexiserver
    - This command does the dbus call as such
      - dbus-send --system --type=method_call --print-reply --dest=org.freedesktop.DisplayManager $XDG_SEAT_PATH org.freedesktop.DisplayManager.Seat.SwitchToGreeter
        - Neither Seat.SwitchToGreeter, nor Seat.Lock or Session.Lock seem to really lock the session, instead lightdm gets respawned at tty9.
  - update action plugin from xfce4-panel (cf. <http://git.xfce.org/xfce/xfce4-panel/tree/plugins/actions/actions.c#n963,> probably not needed, xflock4 is called)
  - update xflock4 (cf. <http://git.xfce.org/xfce/xfce4-session/tree/scripts/xflock4>)
  - update xfce4-power-manager (cf. <http://git.xfce.org/xfce/xfce4-power-manager/tree/common/xfpm-common.c#n82,> add a call to xflock4 first)
  - test?

## The Plan
- Modify xflock4 and run tests
  - Panel > Action Buttons **(Done)**
  - xflock4 from Terminal **(Done)**
  - Power Manager > Suspend
- Modify the greeter so that certain widgets are not shown (or are insensitive) when used as a lock screen.
  - User Selection combobox
  - Session combobox
  - Language combobox
- Add a *Switch User* button

## Mockups
  - Here's an interesting mockup taken from Debian's artwork contest, entitled [7th-element](http://wiki.debian.org/DebianArt/Themes/7th-element).
    [![](/archive/roadmaps/specifications/raring/light-dm-greeter/greeter-7th-element.png)](/archive/roadmaps/specifications/raring/light-dm-greeter/greeter-7th-element.png)
