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
4. A problem that is not this issue is filed with [open-linear-issue](../open-linear-issue/SKILL.md) as its own issue and linked as a sub-issue of this one when the tracker allows. Do not add it to this pull request. Keep working this issue.
5. Write a short plan and review it against the acceptance criteria before editing code. If a major or unclear decision remains, write `pr-body.md` with `Fixes #<github-issue-number>` using [pr](../pr/SKILL.md), open the pull request, comment the options and what will not be chosen alone, leave it unmerged, and return to the loop for the next issue.
6. A bug follows [diagnosing-bugs](../diagnosing-bugs/SKILL.md). Other work follows [tdd](../tdd/SKILL.md) at the seams named in the issue. When the issue names no seam, use the highest existing seam that can see the behavior and record that choice on the issue.
7. Run `npm run typecheck` while working. Run `npm test` once at the end. Open the pull request with [pr](../pr/SKILL.md) if it is not open yet. The body contains `Fixes #<github-issue-number>` and a `## Steps and decisions` section. A body without that section is not ready for review.
8. Follow [code-review](../code-review/SKILL.md). The review comment on the pull request starts with Agree or Disagree. Disagree lists each issue in the changed files and the pull request stays open. Fix a missed acceptance criterion or an `AGENTS.md` break, then review again. After three rounds with the same blocking finding, comment that finding, leave the pull request open, and return to the loop for the next issue.
9. Merge only after the review is clean, using `gh pr merge --squash`.

A `night` issue stays inside the night-agent file limits in the open-linear-issue reference.
