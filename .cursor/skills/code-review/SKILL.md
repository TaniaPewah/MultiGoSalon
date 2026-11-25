---
name: code-review
description: >-
  Review the diff since origin/main on two axes: repo rules and the
  originating issue. Use when autopilot finishes an implementation,
  or when the user asks for a code review.
---

# Code review

Adapted from Matt Pocock's `code-review` skill (MIT).

The fixed point is `origin/main`. Compare with `git diff origin/main...HEAD`. The spec is the GitHub issue named by the branch (`issue/<N>`) or by `Fixes #N`. Standards are `AGENTS.md` and the night-agent limits when the issue is labeled `night`.

Review the two axes separately:

- **Spec.** Which acceptance criteria are missing or only partly done? Which behavior in the diff was not asked for?
- **Standards.** Which hunks break `AGENTS.md`? Also note a Fowler smell when it is obvious in the diff: duplicated logic, a speculative abstraction, a name that hides what it holds, or one change scattered across unrelated files. A smell is a judgement, not a failed check.

Report the two lists separately. Fix a missed acceptance criterion or an `AGENTS.md` break, then review again. A smell stays in the pull request comment when it is not worth another edit.

When the pull request is ready for review, leave one comment on it. The comment starts with **Agree** or **Disagree**.

- **Agree** means the changed files have no blocking issue. Say that, then the spec list and the standards list.
- **Disagree** names each issue found in the changed files, with the file. Do not merge.

A pull request whose body has no `## Steps and decisions` section is a disagreement. The missing list is the issue.

A major or unclear decision is not a defect to fix in another commit. The pull request must already be open, with `Fixes #N` in the body, before that decision is commented. Comment the options and what will not be chosen alone, leave the pull request unmerged, and select the next issue.

After three reviews that still show the same blocking finding, comment that finding, leave the pull request unmerged, and select the next issue. Do not stop the run.
