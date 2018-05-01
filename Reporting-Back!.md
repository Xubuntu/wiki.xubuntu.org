## Reporting back!

Great! You noticed something that needs improving (bugs or usability
suggestions), so you can help make Xubuntu better. Xubuntu would like to
know what it is and what part of Xubuntu is giving trouble, so please
report it so that it can be considered for fixing.

Below is a very simple overview to get you going. See the excellent
[Ubuntu Community Help Wiki](https://help.ubuntu.com/community/ReportingBugs) for more info
(remembering to substitute Xubuntu for Ubuntu in the IRC channel and
mailing lists etc.)

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

To report a bug you use the "ubuntu-bug" tool (also called Apport).
Simply press Alt+F2 to open the "Run Command" screen (or open a terminal
window) and type \'ubuntu-bug \<package name\>\', press Enter, and then
follow the on-screen instructions.

-   Please check if your bug has been reported before and if so add
    yours as a duplicate, but if in doubt report a new bug - we would
    much rather this than miss something.
-   If you don\'t know what the application\'s package name is but it
    has an open window, then just type \'ubuntu-bug -w\' in the \"Run
    Command\" screen or a terminal, you will then see an \'X\' - click
    on the window of the application you want to report against.
-   If you're not sure which package has the problem, these
    [instructions](https://wiki.ubuntu.com/Bugs/FindRightPackage) to
    find the right package might be of help.
-   If an application crashes, Apport should start automatically, just
    follow the instructions.
-   It is possible, as a last resort, to directly report a bug through
    Launchpad. Find the LP page for the application by typing
    `https://bugs.launchpad.net/ubuntu/+source/PACKAGENAME/+filebug`
    into the address bar of your browser, replacing PACKAGENAME by the
    packagename you want to report the bug against, and you will be able
    to report your issue. Example: to report a bug for xubuntu-meta,
    type
    `https://bugs.launchpad.net/ubuntu/+source/xubuntu-meta/+filebug`.

If your whole system crashes then you might find [Debugging System Crashes](https://help.ubuntu.com/community/DebuggingSystemCrash)
helpful. Reporting system crashes is slightly more complex, however. But
no worries: if you don\'t manage, just start reporting \'normal bugs\'
and as you get in the swing of things you will learn how to do more and
more.
