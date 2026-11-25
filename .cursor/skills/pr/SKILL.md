---
name: pr
description: >-
  Write the pull request body for one multiGO issue. Use when autopilot
  opens a pull request, or when the user asks for a PR body.
---

# Pull request

Adapted from Matt Pocock's `pr` skill (MIT), which credits the HumanLayer show-me skill.

Write this body to `pr-body.md`. Push `HEAD` to `origin` on the `issue/<N>` branch. Open the pull request against `main` on `TaniaPewah/MultiGoSalon` with `--body-file pr-body.md`. Do not use `--fill`. After each later commit, comment on the pull request with that commit. Merge with `gh pr merge --squash` only when `AGENTS.md` says the review is clean.

```markdown
## Summary
<the smallest diagram, tree, or diff that shows the change>

## Evidence
- **Before:** <failing test, screenshot, or current behavior>
- **After:** <passing test, screenshot, or new behavior>

## Merge danger
**Door:** <two-way when the change is easy to revert, one-way when it is not>
**Blast radius:** <one phrase>

Fixes #N
```

A front-end change uses a before screenshot and an after screenshot. A new surface uses the after screenshot. Keep the summary to one visual.
