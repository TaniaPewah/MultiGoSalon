#!/usr/bin/env bash
# One issue, one worktree, branched from current origin/main.
set -euo pipefail
issue="${1:?usage: scripts/new-worktree.sh <github-issue-number>}"
if ! [[ "$issue" =~ ^[0-9]+$ ]]; then
  echo "issue number must be digits, got: $issue" >&2
  exit 1
fi
root=$(git rev-parse --show-toplevel)
parent=$(dirname "$root")
dest="$parent/MultiGoSalon-issue-${issue}"
branch="issue/${issue}"
if [[ -e "$dest" ]]; then
  echo "worktree already exists: $dest" >&2
  exit 1
fi
git fetch origin
git worktree add -b "$branch" "$dest" origin/main
echo "$dest"
