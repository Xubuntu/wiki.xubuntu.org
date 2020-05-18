# Xubuntu GitHub Proposal

## Introduction

Starting with the 20.10 cycle, I would like to move Xubuntu repositories
to GitHub. Doing so makes it easier for contributors to join and submit
contributions to the project, while also reducing many of the headaches
of managing and reporting on project data.

### Summary of Changes

-   Move all Xubuntu codebases to GitHub, under a new Xubuntu
    organization.
-   Mirror all of the GitHub codebases back to Launchpad for LP-specific
    integrations.
-   Move to Transifex for translations, under a new Xubuntu
    organization.
-   Make members of Xubuntu Council and Xubuntu Developers "Owners" of
    the GitHub organization. All members of \~xubuntu-team become
    "Members". Xubuntu subteams are created as "Teams" of the Xubuntu
    organization. The new Teams are given access to their project
    repositories.

### Rationale (Pros)

-   Launchpad Git is still not tightly integrated with the rest of its
    features, so we miss out on many of the benefits of Launchpad.
-   Launchpad Translation Teams have seen a decline in activity, and our
    translation support has likewise decreased. Related to this, the
    bureaucracy to join the Ubuntu Translation teams (to be able to
    contribute even suggestions to translations) can be a daunting task,
    sometimes even next to impossible, if language team leaders are
    inactive.
-   GitHub is one of the largest platforms around for developers and
    open source contributors. Many potential contributors already have
    an account. Merge requests are much easier, for both contributors
    and maintainers. Its web IDE makes it easy for non-developers
    (documentation and others) to submit changes and for maintainers to
    accept them.
-   Transifex is active with contributors and has been a major success
    story for Xfce and other projects.
-   Various flavors, **including mainline
    [Ubuntu](https://github.com/Ubuntu)** have moved their code to or
    started new projects on GitHub. Likely for the same reasons listed
    above.
-   GitHub includes a large number of (easier-to-manage) management
    tools, and reduces the need for custom solutions like our
    [Development Tracker](https://dev.xubuntu.org/).

### Potential Downsides (Cons)

-   An additional area where permissions need to be managed
-   Outside of the Canonical ecosystem, so support varies
-   Some users and contributors may be opposed to using GitHub for
    various reasons
-   Ubuntu-only contributors have to sign up for 1-2 new services
    (GitHub/Transifex)
-   Xubuntu project bug trackers are moved to a separate system, meaning
    non-ubuntu bugs cannot be closed with uploads. To find all bugs
    affecting Xubuntu, two platforms have to be used.
-   A lower barrier of entry may mean more low-quality suggestions that
    require additional time moderating.

### Implementation

1.  Create a new Xubuntu organization on GitHub, assigning individual
    members of \~xubuntu-council and \~xubuntu-dev as owners of the
    organization.
2.  Create teams under the Organization, mirroring our current team
    structure on Launchpad.
    1.  Example: <https://github.com/orgs/shimmerproject/teams>
3.  Create new projects for each of our codebases, granting teams access
    to the repositories, with team leads added as maintainers.
4.  Mirror all of the new projects back to Launchpad and reconnect
    integrations.
5.  Create a new Xubuntu organization on Transifex, and configure
    project translations. Translation commits can be pushed
    automatically.
6.  Update documentation and website content for the new locations.
7.  Migrate Launchpad bugs to GitHub. Update package-related bugs for
    the new upstreams.
8.  Migrate Launchpad blueprints to GitHub projects.

### Background

We transitioned all of our code to the Git VCS two years ago with the
18.10 cycle, citing the following reasons.

[Xubuntu Git Workflow](https://wiki.xubuntu.org/devel/git)

*Xubuntu and its various projects have used Bazaar since the beginning.
Bazaar has served us well in the past, but there are several compelling
reasons for us to transition. And the Xubuntu 18.10 cycle is the perfect
time for us to move.*

-   **Consistent Workflow:** Git is now used by all of our upstreams.
    Debian, Xfce, and Shimmer Project all use Git. Upstream
    contributions become easier with a familiar process.
-   **Familiarity:** Git is one of the most popular version control
    systems for open source projects. New contributors are more likely
    to have used Git in previous projects.
-   **Development Activity:** Git continues to be actively maintained
    and supported, with regular releases and bug fixes. The last Bazaar
    release was over two years ago.
-   **Application Support:** Many applications provide support for Git
    in one way or another. Thunar\'s VCS plugin and Geany\'s GeanyVC
    plugin provide addon support for managing Git repositories. Atom and
    Visual Studio Code, two of the most popular IDEs available for
    Linux, have native support for Git.

Meanwhile, we highlighted the following issues:

-   **Linking Series to Git Branches:** This is currently not possible.
    Series only help to identify which code branches are associated with
    each version lines. Instead, consider pushing each version line as a
    separate branch in your project.
-   **Translation Imports & Exports:** Launchpad does not currently
    support automatic synchronization to/from Git branches. Instead, you
    can create an git-to-bzr code import, and import translations from
    this Bazaar branch. You can periodically download the translations
    for a project and sync them manually.

Unfortunately, little has changed in the last two years. The issues we
identified then are still present, and require unusual workarounds or
additional processes to make work at all. This means that daily packages
don't include translations, translation-specific build issues are not
identified until the last minute, and that several releases might be
tagged without the translations that happened in between.
