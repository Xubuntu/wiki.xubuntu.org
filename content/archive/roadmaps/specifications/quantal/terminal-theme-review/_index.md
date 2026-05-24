---
title: "Terminal Theme Review"
---

*Migrated from [Ubuntu Wiki](https://wiki.ubuntu.com/Xubuntu/Roadmap/Specifications/Quantal/TerminalThemeReview), last updated 2012-08-23.*

## Specification title

| Overview | |
|---|---|
| **Title** | Review terminal theme |
| **Blueprint** | [https://blueprints.launchpad.net/ubuntu/+spec/other-q-xubuntu-terminal-theme](https://blueprints.launchpad.net/ubuntu/+spec/other-q-xubuntu-terminal-theme) |
| **Assignee** | Simon Steinbeiß, Pasi Lallinaho |
| **Release** | [Quantal Quetzal](https://wiki.ubuntu.com/Xubuntu/Roadmap/Goals/Quantal) |

## Detailed specification

The terminal theme review should consist of at least:
- Default font
  - Liberation Mono? More crisp than Droid, bolded text works well with small sizes
- Color scheme
  - Get more feedback about the color scheme
  - Review with certain applications: vim, mutt, ...
  - Review existing color-schemes (e.g. <http://ethanschoonover.com/solarized>)
      - [Solarized for xfce4-terminal](https://github.com/sgerrand/xfce4-terminal-colors-solarized/blob/master/dark/terminalrc)

### Color definitions for terminalrc

```
ColorForeground=#b333b333b333
ColorBackground=#133319992666
ColorCursor=#0f0f49499999
TabActivityColor=#262656568080
ColorSelectionUseDefault=FALSE
ColorSelection=#08f50a3d0ccd
ColorPalette2=#a66600004555
ColorPalette3=#10a4a666428f
ColorPalette4=#cccc44440000
ColorPalette5=#121239397878
ColorPalette7=#00008000aaaa
ColorPalette9=#33334ccc8000
ColorPalette10=#ffff59999eee
ColorPalette11=#5555ffff8e37
ColorPalette12=#d554ffff5555
ColorPalette13=#55558e38ffff
ColorPalette15=#4cccc000e666
ColorPalette16=#d999d999d999
```
