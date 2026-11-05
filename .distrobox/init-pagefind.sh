#!/usr/bin/env bash
# Installs the Pagefind release used by the GitHub Pages workflow
# (.github/workflows/deploy.yml) so local builds can include search.
# Installs to /usr/local/bin; set PREFIX to install elsewhere (e.g. PREFIX=~/.local).
set -euo pipefail

PAGEFIND_VERSION="1.6.0"
TARBALL="pagefind-v${PAGEFIND_VERSION}-x86_64-unknown-linux-musl.tar.gz"
URL="https://github.com/Pagefind/pagefind/releases/download/v${PAGEFIND_VERSION}/${TARBALL}"

if command -v pagefind >/dev/null 2>&1 && pagefind --version | grep -q "${PAGEFIND_VERSION}"; then
	exit 0
fi

TMPDIR="$(mktemp -d)"
trap 'rm -rf "${TMPDIR}"' EXIT

curl -fsSL -o "${TMPDIR}/${TARBALL}" "${URL}"
curl -fsSL -o "${TMPDIR}/${TARBALL}.sha256" "${URL}.sha256"
(cd "${TMPDIR}" && sha256sum -c "${TARBALL}.sha256")

tar -xzf "${TMPDIR}/${TARBALL}" -C "${TMPDIR}" pagefind
PREFIX="${PREFIX:-/usr/local}"
mkdir -p "${PREFIX}/bin"
install -m 0755 "${TMPDIR}/pagefind" "${PREFIX}/bin/pagefind"
