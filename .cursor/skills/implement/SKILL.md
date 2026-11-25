---
name: implement
description: >-
  Implement one multiGO issue in its worktree. Use when autopilot is on
  and the issue is implementation or spec, or when the user says implement.
---

# Implement

Adapted from Matt Pocock's `implement` skill (MIT). One issue, one worktree, one pull request. The choose-and-merge loop lives only in `AGENTS.md`.

Use this skill for an `implementation` issue, and for a `spec` issue when autopilot is on. Exploration and examples do not use it.

1. Fetch the GitHub issue and state its title. If the number is ambiguous, stop.
2. Relevance check. Update the issue when part of it is already done. Stop when none of it remains.
3. `scripts/new-worktree.sh <github-issue-number>` and do the rest of the work in that directory. The script branches from `origin/main`.
4. Write a short plan in an issue comment and review it against the acceptance criteria before editing code. If a major or unclear decision remains, comment it on the pull request and wait.
5. A bug follows [diagnosing-bugs](../diagnosing-bugs/SKILL.md). Other work follows [tdd](../tdd/SKILL.md) at the seams named in the issue. When the issue names no seam, use the highest existing seam that can see the behavior and record that choice on the issue.
6. Run `npm run typecheck` while working. Run `npm test` once at the end.
7. Follow [code-review](../code-review/SKILL.md). Fix a missed acceptance criterion or an `AGENTS.md` break, then review again. Stop after three rounds that still show the same blocking finding.
8. Commit, push, and open the pull request with [pr](../pr/SKILL.md). The body contains `Fixes #<github-issue-number>`. Merge only after the review is clean, using `gh pr merge --squash`.

A `night` issue stays inside the night-agent file limits in the open-linear-issue reference.
