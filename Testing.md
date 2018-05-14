## Testing

## Step 2: Testing your Xubuntu installation.

As was mentioned in the previous step, now that you\'ve
[installed](https://wiki.xubuntu.org/qa/installing) Xubuntu, you have
already tested the installation and this very valuable testing needs to
be reported via the [Iso Tracker](http://iso.qa.ubuntu.com/), more info
about which you will see on the Step 3: Reporting back page that follows

There are actually two types of testing:

    -Exploratory Testing
    -Static Testing

Both types of testing are only summarised below, but a lot more details
can be found in the [quality assurance chapters](https://docs.xubuntu.org/contributors/qa.html) of the
[contributors docs](https://docs.xubuntu.org/contributors/).

Deciding which type of testing is best for you is dependent on the type
of installation that you can do; installing Xubuntu as the main
Operating System is best suited to exploratory testing - with the
remaining installation options becoming more suited to static testing as
you move down through the 4 alternatives listed on the [Install the Xubuntu Development version](https://wiki.xubuntu.org/qa:installing)
page.

If in doubt it is perhaps best to start with exploratory testing with
Xubuntu installed as your main OS, or as \'dual boot\' option alongside
your existing OS.

#### 1. \'Exploratory\' Testing

This type of testing holds the greatest value for the Xubuntu
Development Team. The way to find bugs in applications is for you to use
them.

You just do what you do during your normal use of Xubuntu.

After you have installed Xubuntu, install all your favourite extra apps
and then carrying on using it until the release cycle ends.

It\'s important to keep Xubuntu up to date every day (e.g. using the
software updater), to make sure that you don\'t see and report bugs that
have already been fixed.

Although at the beginning of the release cycle using a VM may well be
fine, later on installing as the main OS or dual-booting are preferred
since they are closer to the \'real life\' case.

#### Report Back

Should you find bugs, or anything you think the Development Team should
know, please move on to Step 3 and [report back](https://wiki.xubuntu.org/qa/report).

#### 2. \'Static\' Testing

This is testing in its purest form -- you get and install the ISO and
test it without installing anything or changing anything to your main
system - the ISO remains \'static\'.

Static testing means that you check that Xubuntu installs without
problems and that the pre-installed apps work. Actually, each of the
different installation methods shown in the following example need to be
tested, as you can see on the Ubuntu QA tracker (e.g. these
[testcases](http://iso.qa.ubuntu.com/qatracker/milestones/384/builds/170373/testcases)
for Bionic Beaver), but you can choose which ones you want to help with.

Then the next day (or the next time you test) you download the latest
Daily ISO and again test the OS without installing anything or changing
anything to your main system. Instead of re-downloading the whole ISO
each time you can use
[Zsync](https://help.ubuntu.com/community/ZsyncCdImage) to update it
(zsync only downloads the bits that have changed).

This type of testing is mostly needed during community testing weeks,
when the Xubuntu QA team puts out a call for testers on the [development mailing list](https://lists.ubuntu.com/mailman/listinfo/xubuntu-devel)
and the [social media outlets](https://xubuntu.org/contact/).

Although often done in a virtual machine, you can just as well static
test on hardware; dual-booting for example would require just a small
partition on your hard drive.

#### Report Back

Should you find bugs, or anything you think the Development Team should
know, please move on to Step 3 and [report back](https://wiki.xubuntu.org/qa/report).
