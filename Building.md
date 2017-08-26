##### Building

# Building the Xubuntu documentation package locally

The Xubuntu documentation, shipped with every release of Xubuntu, is in
fact a package that can be built locally, on your computer.

By default, Xubuntu does not come with the tools required to build the
documentation package, so there is the need to prepare your system to be
able to do it, by installing the required prerequisite packages. To do
this, run the following command:

    sudo apt build-dep xubuntu-docs

Additionally, if you are running a release earlier than 15.10, you will
need to install the package fop manually, because it's not yet a
dependency of the package in your release. To do this, simply run:

    sudo apt install fop

Once that's done, all you have to do is to get the latest main branch
and build the package. Again in a terminal window, run the following
commands, one at a time:

    bzr branch lp:xubuntu-docs

    cd xubuntu-docs

    make

    exo-open --launch WebBrowser build/index.html

Be aware that it will take some time to run the **make** command, as it
builds both HTML and PDF versions of the documentation in various
languages.

# Testing the Xubuntu installer slideshow

To be able to test the Xubuntu Ubiquity slideshow, you\'ll need to
install some build dependencies. To do this, run the following commands
in a terminal window:

    sudo apt build-dep ubiquity-slideshow-xubuntu

    sudo apt install libwebkitgtk-3.0.0-dev

Then run the test script:

    ./test-slideshow xubuntu
