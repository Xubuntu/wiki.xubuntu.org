## Testing your Xubuntu installation.

There are actually two types of testing, known as \'exploratory\' and
\'static\' testing. Both are sumarised below (if you really want to know
more, see the main contributor
[docs](http://docs.xubuntu.org/contributors/)), but a first time tester
might find starting off with exploratory testing the best route into
testing.

    -Exploratory Testing
    -Static Testing

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

Should you find bugs, or anything you think we should know, please
report back to us. [Here\'s](https://wiki.xubuntu.org/qa/report) how.

#### 2. \'Static\' Testing

This is testing in its purest form -- you get the ISO and test the OS
without installing anything or changing anything to your main system -
the ISO remains \'static\'.

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
(zsync only downloads the bits that have changed)

This type of testing is mostly needed during community testing weeks,
when the Xubuntu QA team puts out a call for testers on the [development mailing list](https://lists.ubuntu.com/mailman/listinfo/xubuntu-devel)
and the [social media outlets](https://xubuntu.org/contact/).

Although often done in a virtual machine, you can just as well static
test on hardware; dual-booting for example would require just a small
partition on your hard drive.

Should you find bugs, or anything you think we should know, please
report back to us. [Here\'s](https://wiki.xubuntu.org/qa/report) how.
