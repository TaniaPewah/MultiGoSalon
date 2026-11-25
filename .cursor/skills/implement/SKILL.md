---
name: implement
description: >-
  Implement one multiGO issue in its worktree. Use when autopilot is on
  and the issue maturity is implementation, or when the user says implement.
---

# Implement

Adapted from Matt Pocock's `implement` skill (MIT). One issue, one worktree, one pull request.

When autopilot is on and the repo has no open GitHub issues, the workflow in `AGENTS.md` runs `scripts/open-evening-issues.mjs --batch evening --limit 10`, then fixes those issues one at a time with the steps below.

1. Fetch the GitHub issue and state its title. If the number is ambiguous, stop.
2. Relevance check. Update the issue when part of it is already done. Stop when none of it remains.
3. `scripts/new-worktree.sh <github-issue-number>` and do the rest of the work in that directory.
4. Write a short plan in an issue comment and review it against the acceptance criteria before editing code.
5. A bug follows [diagnosing-bugs](../diagnosing-bugs/SKILL.md). Other implementation follows [tdd](../tdd/SKILL.md) at the seams named in the issue. When the issue names no seam, use the highest existing seam that can see the behavior and record that choice on the issue.
6. Run `npm run typecheck` while working. Run `npm test` once at the end.
7. Follow [code-review](../code-review/SKILL.md). Fix findings that miss an acceptance criterion or break `AGENTS.md`.
8. Commit, push, and open the pull request with [pr](../pr/SKILL.md). The body contains `Fixes #<github-issue-number>`.

A `night` issue stays inside the night-agent file limits in the open-linear-issue reference. Exploration, examples, and spec parents do not use this skill.
