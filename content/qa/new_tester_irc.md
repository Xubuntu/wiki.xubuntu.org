---
title: "New Tester IRC Session"
weight: 40
---

#\'s are in place to trigger meetingology - do not change.

IRC Session Transcript

**#startmeeting Xubuntu testers session**

**#chair akxwi-dave**

Lets make a start - we\'ll be running through the situations I listed on
the mail, they run from the simpler side of testing to the more
interesting :) But first, a couple of things to run through before we
start properly.

The Xubuntu development tracker has a QA status tab, if there is
anything that QA need to make testers aware of urgently, it will be on
the notice board - <https://dev.xubuntu.org/#tab-qa>

Testing shouldn\'t be too onerous - do as little or as much as you can
find the time for, all of it is appreciated by the whole Xubuntu team.

That said, being noticed by us can lead to invitations to Xubuntu QA and
from there it is possible to get invited into Xubuntu Team where you get
to be involved in the future of Xubuntu as a whole. For example, you get
a vote in those mails you might have seen which start with \[TEAM\]

===============

**#topic Testing and verifying SRU bugfixes**

First off we\'ll look at testing fixes that are targeted at released and
still supported release(s)

For this you will need to be running whichever supported version the SRU
is aimed at. We\'ll use an example - and let\'s use a fairly recent
one - bug 1512120

You can see from that bug at comment 83
<https://bugs.launchpad.net/ubuntu/+source/thunar/+bug/1512120/comments/83>

that updated packages for both 16.04 and 16.10 were uploaded to the
proposed repositories. To test the fix (and this applies to all SRUs)
you need to enable that repository and then update the package list,
either by using the Reload button or in a terminal with apt.

Once updated, you can reinstall the package (thunar) and test the new
version against the testcase which should be present in the first
comment of the SRU bug report.

Whether the patch fixes the bug for you, add a comment to the bug,
mentioning which version you tested (dpkg -l \'package\' ) and where
(for example 16.04.2). Last but not least, change the verification tag
to verification-done if the bug was fixed, or if the issue persists, use
the verification-failed tag.

Once you have updated the package to check, you probably want to then
disable the proposed repository or you will continue to receive updates
to ANY package you have installed with a proposed update\...

Not so hard - you\'ve contributed to Xubuntu, and made life just a
little bit better for other people.

**#subtopic SRU Questions**

===============

**#topic Point release, Milestone and Daily testing**

First, we run testing for point releases (for example, 16.04.2) for an
LTS release. We\'ll make calls for testing those as required. Note that
these happen parallel to a normal development cycle and the tests need
to be done with the current LTS release, not the release in development.

The second type is milestone testing: the Alpha, Beta and Release
Candidate milestones of the current development release. We don\'t
always take part in all milestones - usually more with LTS releases -
but not necessarily so.

Before we go any further I want to make one very important point\...

A milestone is JUST a snapshot of the current release in development.
The milestones are useful for developers as it helps them and testers
synchronize to one common state for a few days.

It is of no use once the milestone has passed.

The day after the milestone finishes, the archive is unfrozen and
updates come through and the milestone is now out of date. Using old
milestones isn\'t recommended or sensible - packages are updated very
often during the development and it\'s better to just get the latest
daily. (Milestones also aren\'t suitable for the general public as they
aren\'t necessarily any stabler than any arbitrary daily.)

There are 2 main ways that you can test Xubuntu: either on a virtual
machine or on hardware - the choice is up to you and what you have
available.

We\'d prefer people to be able to test on hardware because that let\'s
us discover more \"natural\" bugs, but we also understand that you live
in the real world and your PC doesn\'t belong to Xubuntu QA.

So, moving on then. We will call for testing of any milestone shortly
before it\'s due, which gives people warning to put aside 20 minutes or
so. There\'s no need for people to run through all the tests you might
see for a milestone. Hopefully there will be more than just you running
them. Obviously running tests which haven\'t been run is more important
than doubling up.

You will see a link to the tracker in the mail, that will point you to
somewhere like
<http://iso.qa.ubuntu.com/qatracker/milestones/374/builds/144361/testcases>

On that page you\'ll see all of the tests needed to be run. Some of them
are \"Mandatory\" and others are \"Run once\". If you see results listed
against all the options - pick one. If there are gaps - pick those ;)

Run through the testcase you have picked EXACTLY how it is written -
hopefully there will be no bugs and you can just mark it as Passed.

If you do find an issue, check the list at the bottom for known bugs -
someone might have already seen it. When you find any bugs, add the bug
number and report a Failed result. (Note that you can drag and drop bug
links to the bug fields and the tracker will automatically parse the bug
number correctly for you.)

Finally, the last type of testing is Daily testing. In daily testing you
do exactly the same as with the milestone testing, you\'ll just find
Daily testing on the tracker. The daily testing item runs all the way
through the cycle refreshing overnight (2AM UTCish).

There is a simple run through of the ISO testing in general at
<https://wiki.xubuntu.org/qa/isotesting>

**#subtopic Milestone and Daily Questions**

================

**#topic Package Testing**

The next section deals with how we can test packages.

In addition to the ISO tracker we looked at a moment ago, we also have a
package tracker. This lists which packages we need testing and a
testcase to run for each. Though it is likely this cycle that Thunar, at
least, will see additional testcases added.

<http://packages.qa.ubuntu.com/qatracker/testcases/1559/info> is the
testcase we provide for you to test Catfish.

As you can see it\'s pretty basic and lists exactly what we want. If you
get to the end with no errors - pass it. If you find an issue - check at
the end for already reported bugs, if it matches then you can use that
bug number to Fail the test against.

If you find a new issue, then you need to report it. The simplest way is
to use apport. To do this, open a terminal and run \"ubuntu-bug
packagename\" - for example: ubuntu-bug catfish

You now need to wait for apport to finish and then you can complete the
bug report in your browser when it is ready for you. When finished you
can use the new bug number to fail your testcase against. It also helps
to report bugs in Xfce packages upstream at <https://bugzilla.xfce.org/>
and link to the Xfce bug in Launchpad - we\'ll touch on that in the last
section.

What happens when a bug gets fixed?

We\'ll mail testers and ask for that testcase to be re-run. Simply run
through the testcase once more - hopefully this time you can pass it.

Sometimes you will find that a testcase is out of date - so what might
appear to be a bug is in fact correct - we have a bug here - but it\'s
with the testcase, and needs to be reported here:

<https://bugs.launchpad.net/ubuntu-manual-tests/+filebug>

Fill in a bug report for the testcase with as much information as is
possible, especially give the testcase number, you can find this by
using the \'Detailed information on the testcase\' button - we will edit
the testcase pretty quickly - we have tame Manual Testcase Admins
amongst us.

Before we move on to the last part of the session (which is running the
development release on your daily computer) lets pause for any questions
here - I\'ll be afk for a short while the kettle boils \...

**#subtopic Package Testing Questions**

===============

**#topic Exploratory testing**

Exploratory testing is a term made up by Nick Skaggs (I assume) of
Canonical which effectively means installing the development version and
using it daily, for your daily tasks (and not a prespecified set of
testcases).

Which is what I do. While I\'m using it, I\'m watching for bugs in our
packages, I\'m trying to check that visually we get no regressions and
generally trying to ensure that we release the next supported version in
as good a state as is possible.

I\'ll go through how I have my installs set up to give you some idea of
what I\'ve worked out to be the safest way to keep on rolling along.

I have 1 install of the last LTS which I keep around and 2 installs of
the latest development version.

I have no data in any of these installs - all my data lives on other
drives and is either mounted in fstab, linked to with a symbolic link or
in the case of both Firefox and Thunderbird - the profile.ini points to
the data.

The LTS is pretty much left alone until I need to check bugs or SRUs for
that release.

The first of the development installs is what I use every day - I\'m
using it now. The other is my backup and has all the necessary links to
enable me to boot it up and use it if necessary. I don\'t even boot it
to keep it updated, I chroot to it and update packages there from this
install. I tend to wait a day before updating if there\'s a package that
could possibly cause problems and to make sure I\'ve been able to boot
into my daily install.

This second development install is without PPAs so I\'m able to check
what our default install is up to.

Personally I let grub run from my current development release - but I
always have a USB handy in case grub goes pfffft\... You can easily
enough reinstall grub and let it be controlled from one of your other
installs from the live desktop.

**#subtopic PPAs**

Xubuntu has a set of official PPAs which we use for testing new
packages. These are:

      https://launchpad.net/~shimmerproject/+archive/ubuntu/daily
      https://launchpad.net/~xubuntu-dev/+archive/ubuntu/ppa
      https://launchpad.net/~xubuntu-dev/+archive/ubuntu/extras
      https://launchpad.net/~xubuntu-dev/+archive/ubuntu/xubuntu-staging

(pause)

The last of these currently has no packages available for the Artful
release, so it\'s listed now only as a possibility for use during this
current cycle.

In addition we have one more PPA for the Xfce packages that have already
been ported to GTK3:

      https://launchpad.net/~xubuntu-dev/+archive/ubuntu/xfce4-gtk3

I have all 4 of these \'current\' PPAs installed locally. These give me
the most up to date Xfce packages available to Xubuntu.

So - that\'s how I\'m set up locally.

But.

I am 1 person \... during a cycle we usually see about 5 or 6 people
reporting on the trackers. We need more people to try to join this
effort to make the Xubuntu we release is still what we want it to be.
Getting bugs reported a week after we release helps no-one and with only
a 9 month cycle for the most part it\'s unlikely that many of those will
get fixed. More useful for us to see bugs reported much much earlier. If
in the past you\'ve found issues when you have installed a new version
you\'ll understand that.

**#subtopic Bug reporting**

Reporting bugs using ubuntu-bug can be troublesome when you\'re using a
package from a PPA, but for packages originating from the repo\'s you
can follow the \"ubuntu-bug packagename\" route.

When you want to report a bug against a package originating in a PPA,
you need to manually file it and also be prepared to supply information
when asked for it by a developer. To do that, you can use:
<https://bugs.launchpad.net/ubuntu/+source/PACKAGENAME/+filebug> which
will error, so don\'t open it - a real example would be
<https://bugs.launchpad.net/ubuntu/+source/catfish/+filebug>

Fill in the summary and then add as many details as you can. It is more
likely that reporting this way developers will ask for more details.

To report an Xfce bug upstream, go to <https://bugzilla.xfce.org/> and
file your bug (check for duplicates first using the Search facility) the
method is pretty similar to Launchpad - but is manual.

When you have your Xfce bug you can set your Launchpad bug to watch it,
details for that can be found on the Ubuntu wiki at
<https://wiki.ubuntu.com/Bugs/Watches#Adding_a_Bug_Watch>

**#subtopic Virtual Machines**

You could at a pinch run a virtual machine with the latest development
version and use that for everything, but I suspect that the lure of not
running inside a vm would be something to watch for - I know that I
would soon end up running a supported release in that case. But the only
person who can make that choice for you is you ;)

**#subtopic Exploratory Questions**

================

**#topic Git**

Finally I just want to touch on a subject that\'s quite new to us as
Xubuntu QA, building and testing Xfce packages built from the Xfce Git
repositories.

During this cycle - as and when we\'re asked - we are likely to ask
people to test fixes prior to them getting as far as PPAs. Duck out if
you\'re not sure here.

Generally it\'s a painless experience as long as you\'ve got the build
dependencies installed - we used this method a couple of times towards
the end of the Zesty cycle testing Thunar patches.

You\'ll need to install the build-essential package before the first
time you build packages. After that, the process is simply the
following: get the build-deps, grab the Git source, grab the patch and
apply it, build it and then test it.

Whether we see more of this coming to us as testers via the mailing list
is hard to say at the moment.

We\'ll not just now bother with questions on this last section, but if
there are any more general questions - feel free to ask them now.

**#subtopic - Free Questions**

Thanks everyone for coming along and we hope to see you on the two
trackers.

#endmeeting
