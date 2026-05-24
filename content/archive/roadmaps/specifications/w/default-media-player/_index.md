---
title: "Specifications — W — Default Media Player"
---

*Migrated from [Ubuntu Wiki](https://wiki.ubuntu.com/Xubuntu/Roadmap/Specifications/W/DefaultMediaPlayer).*

## Desired Features

Here we do a simple comparison of some known and popular media players for linux, most of them are in the repos, the set of minimal desired functions are:

- Having a functional media library
- Having the ability to handle large libraries
- Having a separated playlist (or queue) from the media library
- Having the ability to search the media library without affecting the playing list
- Having the ability to browse/play all albums by artist
- Having the ability to browse/play all artists on album
- Having a sensible default sort order (artist, album, disc, track)
- Having the ability to search the playing list to rapidly jump to a song
- Having the possibility to save playlist to share them or backup them
- Having the possibility of playing podcasts or other streams formats
- Having MPRIS support (for sound indicator integration)

Other considered characteristics are the installed size, toolkit and presence in the repos.

Note: I have only regularly used Rythmbox and Banshee. Rows for other players reflect what I was able to figure out in the first 15 minutes - 1 hour attempting to use them, and may be incorrect. They should however reflect the new user "out of box" experience rather well - ali1234.

The "Import Time" test was the time taken to import a 53GB library with 7184 tracks, 676 artists, and 793 albums; totalling 23 days, 4 hours, 28 minutes of music. The test was performed using an Acer Aspire One netbook with Intel(R) Atom(TM) CPU N270 @ 1.60GHz, 1.5GB RAM, and 120GB HDD. As such it reflects a medium-sized library on low-end hardware. The system was rebooted between tests to prevent disk cache affecting results.

| | Audacious | Banshee | Decibel | Exaile | gmusicbrowser | QuodLibet | Rhythmbox |
|---|---|---|---|---|---|---|---|
| Music Library | (./) | (./) | (./) | (./) | (./) | (./) | (./) |
| Import Time | [2m 41s](https://youtu.be/CBLOib29EYM) | [10m 2s](https://youtu.be/xNgg2QTr4ME) | [2m 55s](https://youtu.be/obKPmP_OhNs) | [5m 45s](https://youtu.be/_SzcEuTjxG8) | [23m 27s](https://youtu.be/8mXhP7dTa1k) | [9m 40s](https://youtu.be/inNugS-AatU) | [13m 18s](https://youtu.be/GpzkJjuVMoA) |
| Separate Playlist | (./) | (./) | (./) | (./) | (./) | (./) | (./) |
| Search without Playing | {X} | (./) | {X} | (./) | (./) | (./) | (./) |
| Browse Albums by Artist | {X} | (./) | (./) | (./) | (./) | (./) | (./) |
| Browse Artists by Album | {X} | (./) | {X} | {X} | {X} | (./) | (./) |
| Sensible Sort | {X} | (./) | {X} | {X} | (./) | (./) | (./) |
| Jump to Song | {X} | [#1437023](http://pad.lv/1437023) | {X} | (./) | {X} | (./) | [#1437020](http://pad.lv/1437020) |
| Save Playlists | (./) | (./) | (./) | (./) | {X} | (./) | (./) |
| Internet Radio Streams | {X} | (./) | {X} | (./) | {X} | (./) | (./) |
| Podcasts | {X} | (./) | {X} | (./) | {X} | (./) | (./) |
| MPRIS 2.0 Support | (./) | (./) | {X} | {X} | (./) | (./) | (./) |
| In Repository | (./) | (./) | (./) | (./) | (./) | (./) | (./) |
| Toolkit | Gtk+ | Gtk+ | Gtk+ | Gtk+ | Gtk+ | Gtk+ | Gtk+ |
| Language | ? | Mono | ? | ? | ? | Python | C |
