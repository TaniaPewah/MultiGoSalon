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

Report the two lists separately. Fix a missed acceptance criterion or an `AGENTS.md` break before opening the pull request. Leave a smell in the pull request body when it is not worth another edit.
