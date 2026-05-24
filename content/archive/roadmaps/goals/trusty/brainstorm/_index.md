---
title: "Brainstorm"
---

*Migrated from [Ubuntu Wiki](https://wiki.ubuntu.com/Xubuntu/Roadmap/Goals/Trusty/Brainstorm), last updated 2014-03-12.*

## Brainstorming and discussion

### Development
- Increase the amount of developers/uploaders
    - [skellat] Pursue full packageset permissions or only package-specific permissions
- GTK3 indicator support
    - Patch indicators to support Xfce components as indicator-sound does (e.g. indicator-power, indicator-datetime, session-menu etc.)
- New applications in the repositories/seed: [MenuLibre](http://launchpad.net/menulibre), [Mugshot](http://launchpad.net/mugshot)
    - [skellat] Anything else that can be cherry-picked from Debian?
    - (noskcaj) Certain 4.11 components are going to land in Experimental instead of Unstable which will block them making it into Testing for autosync
        - (micahg) We will only take the 4.11 components that support the GTK 3 indicator stack or the ones that were previously approved as minimal risk and desired, anything else needs to wait as we don't want to be stuck with a hodge podge of unsupportable stuff for the LTS
    - Status/Health Check with Xfce as to 4.12.  Landing for LTS or not?
- Working locking with light-locker (get rid of xscreensaver for good)
- [unit193] Create a new installable "xubuntu-core" metapackage via adding to the seed configuration file found under <https://launchpad.net/ubuntu-seeds> once the T seeds are created by Colin Watson
    - [skellat] Do we want this solely as a metapackage or do we want to generate a downloadable image with product manifest too?
- Investigate xfce4-whiskermenu-plugin
    - For general information, check [the developer's blog](http://gottcode.wordpress.com/category/open-source/whisker-menu/) or this [wiki](http://wiki.ubuntuusers.de/Whisker_Menu) (in german)
- Investigate if we can still get python3 only on the iso
- See/ask if we can apply GRUB_DISTRIBUTOR=Xubuntu
- Support Xfce with finishing/releasing 4.12
- Consider including xfdesktop4.11 (is already to be found in the xubuntu-dev 4.12 PPA)
- Consider dropping the bottom launcher panel in lieu of e.g. whiskermenu

### Artwork, community, marketing, website...
- Community wallpapers package
- Finalize and publish the website theme refresh
- Update Wikipedia and other major sites with relevant/up-to-date information
- Communicate more towards users; more blog articles by the team members and guest writers
- Better social media presence (more administrators per outlet?)
    - Contact the reddit.com/r/xubuntu admins
- Separate process-related stuff from Strategy Document
- Do we want to promote 64-bit images by default?
    - <https://lists.ubuntu.com/archives/ubuntu-release/2013-September/002539.html>
- Improve reporting
    - Weekly reports for the release team and monthly team reports
    - Ways to make reporting and gathering reports easier? (lderan: meetingology fixes)
    - <https://lists.ubuntu.com/archives/ubuntu-release/2012-December/002115.html>

### Documentation
- Keep documentation up-to-date with new applications
- Expand documentation?
    - [skellat] Include section on signing Ubuntu Code of Conduct
    - [skellat] Look at what can be adapted from Ubuntu Manual for re-use
- Cooperate further with Ubuntu Documentation Project umbrella organization

### QA
- Automated testing
    - Image testing - aimed at first 'milestone' 
    - Package testing - what apps do we want testing at a minumum, (anyone in 'team' that can move that on)
- Manual testing
    - Images - dependent on automated; at least for milestone testing (including upgrade tests)
    - Packages - base on general cadence testing? roll our own? (if the latter then input from all needed)
- Change to post install tests - new tests to replace current - new software post-install and new hardware post-install
- New apps etc. (indicators for instance) testing - information needed for people to install to test. Sufficient time to allow for testing.
- Use social media outlets to call for testing in addition to -devel list (- also include the -user list at milestones). How much leadtime to get that out onto social media - who to ping.
- Use xubuntu.org for more QA blog articles. Especially just prior to milestone testing
- <http://pad.ubuntu.com/SdHxBbkLTO>

### New Ideas

- Investigate xfce4-power-manager-plugins for inclussion.
- Investigate [qpaeq](http://cgit.freedesktop.org/pulseaudio/pulseaudio/plain/src/utils/qpaeq) a system wide pulseaudio equalizer (something that Ubuntustudio might be interested as well?) [relevant link](http://www.webupd8.org/2013/03/install-pulseaudio-with-built-in-system.html)
- Update the minimum recommended amount of ram to 1GB. [rationale](https://wiki.ubuntu.com/GridCube/rationales/new_ram)
- Investigate integrating Ubuntu One file syncing by default 
    - [http://askubuntu.com/questions/15710/ubuntu-one-for-xfce-or-xubuntu](http://askubuntu.com/questions/15710/ubuntu-one-for-xfce-or-xubuntu)
