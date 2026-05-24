---
title: "Specifications — Quantal — Webcam Application"
---

*Migrated from [Ubuntu Wiki](https://wiki.ubuntu.com/Xubuntu/Roadmap/Specifications/Quantal/WebcamApplication).*

## Default Webcam Application
| Overview | |
|---|---|
| **Title** | Default Webcam Aplication |
| **Blueprint** | |
| **Assignee** | Grid*'*'Cube |

## Detailed specification

As most, if not all, current notebooks, netbooks and portable computers today come with embedded webcams, and how common they are to acquire its only rational that a modern operative system should include programs for:
- take pictures and video
- use video conference software

As its supposed that pidgin is able to do video conference (never could make it work myself, probably needs both users to be using pidgin) the software that its not included by default is one that gives users the ability to take pictures and video from their cameras.

## Desired Features

It should be able to take pictures and video. Save into shareable formats. 

| Desired Set of features an behaviors | | | | | |
|---|---|---|---|---|---|
| Software | Pictures format | Video format | in the repos | toolkit | note |
| **Cheese** | JPEG | WEBM | yes | gtk | |
| **Camorama** | JPEG,PNG | none | yes | gtk | |
| **kamerka** | ? | ? | ? | QT4 | |
| **Kamoso** | ? | ? | ? | QT4 | |

There are other but they are terminal applications.

## Conclussion

As its easy to see, Cheese its the only program currently in the repositories that has all the needed features, its gtk and easy to use.
