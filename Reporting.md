## Reporting

## Step 3: Reporting back!

You [tested](https://wiki.xubuntu.org/qa/testing) the new version of
Xubuntu and you noticed something that needs improving (bugs or
usability suggestions). Great! Information you provide about what you
noticed, can help make Xubuntu better, stronger.

Now Xubuntu needs to know what it is and what part of Xubuntu is giving
trouble. So please report back to the Xubuntu community, so that it can
be considered for fixing.

Below is a very simple overview to get you going. See the excellent
[Ubuntu Community Help Wiki](https://help.ubuntu.com/community/ReportingBugs) for more info
(remembering to substitute Xubuntu for Ubuntu in the IRC channel and
mailing lists etc.)

#### Using the ISO Tracker

We have a wiki [page](https://wiki.xubuntu.org/qa/isotesting) devoted to
using the iso tracker.

#### Sharing a screenshot

Sometimes it\'s easier to show than tell. So we\'ve made sharing your
screenshot easy. Just press the `PrintScreen-button` on your keyboard,
select \"host on imgur\" and click \"ok\" to upload your screen to
Imgur, and then the next dialogue contains the link that points to it.
Copy the link into your bug-mail, the IRC-channel, or the bug report.
Only need to share your active window? Press `ALT-PrintScreen`.

NB: Actually, sharing a screenshot is so easy, that you may forget to
check if there is something in the screenshot -in the background, top
panel, left, right- that you may not want to share on Imgur. Remember:
your screenshot on Imgur is for all the world to see.

#### Launchpad

Xubuntu uses [Launchpad](https://help.ubuntu.com/community/Launchpad)
for bug reporting. To report bugs you will need an account. An [\'Ubuntu
One\' account](https://login.ubuntu.com/+login), allows you to log in to
all the Xubuntu and Ubuntu services and sites, including Launchpad.

#### Reporting issues

Several types of issues may occur:

-   an application crashes, with a dialogue to report the crash
-   an application crashed, without a dialogue to report the crash
-   you may not know which application has crashed
-   your whole system may crash
-   you may notice things that, though they work, are not quite right,
    could work better, are not user friendly enough.

In any of these cases you need an Launchpad-account \<\<link to the
right page\>\> to report back.

##### An application crashes, and there\'s a dialogue to report the crash

In most cases the operating system will automatically start the
\"ubuntu-bug\" application Apport to produce a crash report and show you
a dialogue in which you can choose to report the issue. Simply follow
the instructions.

##### An application crashes, but there is no dialogue to report the crash

[You know the name of the application:] If, after a crash,
there is no dialogue asking you to report the crash, you can press
`ALT-F2`, to open the Run Command dialogue, or press `CTRL-ALT-T`, to
open a terminal, and type `ubuntu-bug <package name>` (substituting
\<package name\>) and press `ENTER`. Simply follow the instructions.

[You don\'t know the right package name of the application:]
If the application that crashed still has an open window: press
`ALT-F2`, to open the Run Command dialogue, or press `CTRL-ALT-T`, to
open a terminal, and type `ubuntu-bug -w`. An \'X\' will appear. Then
click on the window of the application you want to report against and
follow the instructions.

##### You don\'t know which application has the problem

[Here](https://wiki.ubuntu.com/Bugs/FindRightPackage) are instructions
to find the right package.

##### Your whole system crashed

You might find [Debugging System Crashes](https://help.ubuntu.com/community/DebuggingSystemCrash)
helpful. Reporting system crashes is slightly more complex. But don\'t
worry if you don\'t manage: just start reporting \'normal bugs\'. As you
get in the swing of things you will learn how to do more and more.

##### You want to ask a question, notice things that should work better, need to be more user friendly

Even if there a no crashes you can head over to Launchpad. You can [ask questions](https://answers.launchpad.net/) if anything is unclear, or
you need help to determine if what you are seeing is a bug or not. You
can also suggest improvements against a package by simply reporting it
as a [bug](https://help.ubuntu.com/community/ReportingBugs) on
Launchpad.

#### Reporting an issue directly to launchpad

It is possible to directly report a bug through Launchpad. Find the
Launchpad page for the application by typing
`https://bugs.launchpad.net/ubuntu/+source/PACKAGENAME/+filebug` into
the address bar of your browser, replacing PACKAGENAME by the
packagename you want to report the bug against, and you will be able to
report your issue. Example: to report a bug for xubuntu-meta, type
`https://bugs.launchpad.net/ubuntu/+source/xubuntu-meta/+filebug`.

##### Duplicates

You may not be the first to notice the bug. In many cases the ubuntu-bug
Apport application will check if the crash you experienced has been
reported before. If so you will be directed to the appropriate place on
launchpad, and you can then add any information you think helpful, and
mark yourself as \"affected too\".

If in doubt: do report a new bug, as no bug should remain unreported.
