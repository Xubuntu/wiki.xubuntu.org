#!/usr/bin/env bash
# Installs the Hugo extended release used by the GitHub Pages workflow
# (.github/workflows/deploy.yml) so local builds match CI.
set -euo pipefail

HUGO_VERSION="0.160.1"
HUGO_DEB="hugo_extended_${HUGO_VERSION}_linux-amd64.deb"

if command -v hugo >/dev/null 2>&1 && hugo version | grep -q "${HUGO_VERSION}"; then
	exit 0
fi

TMPDIR="$(mktemp -d)"
trap 'rm -rf "${TMPDIR}"' EXIT

curl -fsSL -o "${TMPDIR}/${HUGO_DEB}" \
	"https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/${HUGO_DEB}"

apt-get update -qq
apt-get install -y -qq "${TMPDIR}/${HUGO_DEB}"
