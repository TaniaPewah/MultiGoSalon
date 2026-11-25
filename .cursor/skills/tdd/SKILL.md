---
name: tdd
description: >-
  Test-driven development for one vertical slice. Use when autopilot is
  implementing an issue, or when the user asks for red-green-refactor
  or a test-first change.
---

# Test-driven development

Adapted from Matt Pocock's `tdd` skill (MIT).

A test checks behavior through a public seam. It stays valid when the internals change. Expected values come from a known result, not from redoing the code's own arithmetic.

During autopilot, test the seams the issue already names. When it names none, pick the highest existing seam, record it on the issue, and continue. Prefer a Playwright spec in `tests/` for a player-visible flow. Keep the server Vitest suite, and add a Vitest case when the behavior is server-side. Cover the same root cause with more than one case.

## Loop

1. Write one failing test for the next slice of the issue.
2. Run it and see it fail for the expected reason.
3. Write only enough code to pass it.
4. Repeat for the next case of the same cause.

Do not write the whole test file before any code. Do not add behavior the issue does not accept. Refactoring waits for [code-review](../code-review/SKILL.md).
