#!/usr/bin/env python3
"""Generate per-page commit history for the wiki's History view.

Hugo only knows each page's most recent commit (.GitInfo). This script walks
`git log --follow -p` for every Markdown file under content/ and writes
data/history.json, which the content adapter in content/history/ turns into
/history/<page>/ pages.

Run it before `hugo` (CI does this automatically). A full clone is required;
in a shallow clone the history will be truncated.

Usage: python3 scripts/gen-history.py [--max-commits N] [--max-lines N]
"""

import argparse
import json
import os
import subprocess
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CONTENT = os.path.join(ROOT, "content")
OUTPUT = os.path.join(ROOT, "data", "history.json")

# Unit/record separators keep commit metadata unambiguous in the log stream.
COMMIT_MARK = "\x1e"
FIELD_SEP = "\x1f"
LOG_FORMAT = COMMIT_MARK + FIELD_SEP.join(["%H", "%h", "%an", "%as", "%s"])


def content_files():
    for dirpath, _, filenames in os.walk(CONTENT):
        for name in sorted(filenames):
            if name.endswith(".md"):
                full = os.path.join(dirpath, name)
                yield os.path.relpath(full, ROOT).replace(os.sep, "/")


def parse_patch(lines, max_lines):
    """Turn unified-diff lines into [{"t": "+|-| |@", "x": text}], plus counts."""
    out = []
    added = removed = 0
    in_hunk = False
    truncated = False
    for line in lines:
        if line.startswith("@@"):
            in_hunk = True
            if out:
                kind, text = "@", ""
            else:
                continue
        elif not in_hunk:
            continue  # diff/index/---/+++ headers
        elif line.startswith("+"):
            added += 1
            kind, text = "+", line[1:]
        elif line.startswith("-"):
            removed += 1
            kind, text = "-", line[1:]
        elif line.startswith("\\"):
            continue  # "\ No newline at end of file"
        else:
            kind, text = " ", line[1:]
        if len(out) < max_lines:
            out.append({"t": kind, "x": text})
        else:
            truncated = True
    return out, added, removed, truncated


def file_history(path, max_commits, max_lines):
    result = subprocess.run(
        [
            "git", "log", "--follow", "--no-color", "--no-ext-diff",
            "-p", "--unified=2", "--format=" + LOG_FORMAT,
            "-n", str(max_commits), "--", path,
        ],
        cwd=ROOT, capture_output=True, check=True,
    )
    text = result.stdout.decode("utf-8", errors="replace")
    commits = []
    for chunk in text.split(COMMIT_MARK)[1:]:
        header, _, patch = chunk.partition("\n")
        fields = header.split(FIELD_SEP)
        if len(fields) != 5:
            continue
        sha, short, author, date, subject = fields
        diff, added, removed, truncated = parse_patch(patch.splitlines(), max_lines)
        commits.append({
            "sha": sha,
            "short": short,
            "author": author,
            "date": date,
            "subject": subject,
            "add": added,
            "del": removed,
            "diff": diff,
            "truncated": truncated,
        })
    return commits


def main():
    parser = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    parser.add_argument("--max-commits", type=int, default=50)
    parser.add_argument("--max-lines", type=int, default=200,
                        help="diff lines kept per commit")
    args = parser.parse_args()

    shallow = subprocess.run(
        ["git", "rev-parse", "--is-shallow-repository"],
        cwd=ROOT, capture_output=True, text=True,
    ).stdout.strip()
    if shallow == "true":
        print("warning: shallow clone, history will be incomplete", file=sys.stderr)

    history = {}
    for path in content_files():
        commits = file_history(path, args.max_commits, args.max_lines)
        if commits:
            # Key by the path relative to content/, matching Hugo's .File.Path.
            history[path[len("content/"):]] = commits

    os.makedirs(os.path.dirname(OUTPUT), exist_ok=True)
    with open(OUTPUT, "w", encoding="utf-8") as fh:
        json.dump(history, fh, ensure_ascii=False, separators=(",", ":"))
    print(f"wrote {os.path.relpath(OUTPUT, ROOT)}: {len(history)} pages")


if __name__ == "__main__":
    main()
