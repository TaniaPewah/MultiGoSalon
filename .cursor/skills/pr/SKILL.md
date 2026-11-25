---
name: pr
description: >-
  Write the pull request body for one multiGO issue. Use when autopilot
  opens a pull request, or when the user asks for a PR body.
---

# Pull request

Adapted from Matt Pocock's `pr` skill (MIT), which credits the HumanLayer show-me skill.

Write this body to `pr-body.md`. Push `HEAD` to `origin` on the `issue/<N>` branch. Open the pull request against `main` on `TaniaPewah/MultiGoSalon` with `--body-file pr-body.md`. Do not use `--fill`. After each later commit, comment on the pull request with that commit. Publish the same steps as a PR discussion comment with `<!-- implementation-evidence:<full HEAD SHA> -->`. Refresh the body and discussion after each commit. Run `node scripts/check-pr-evidence.mjs TaniaPewah/MultiGoSalon <N>`. Merge only through `node scripts/merge-pr.mjs <N>` when `AGENTS.md` says the review is clean.

```markdown
## Summary
<the smallest diagram, tree, or diff that shows the change>

## Steps and decisions
1. <step title>
   Change: <actual change and files/components>
   Decision: <technical choice, rationale, and relevant trade-offs>
   Validation: <actual check and result, or not run and why>

## Evidence
- **Before:** <failing test, screenshot, or current behavior>
- **After:** <passing test, screenshot, or new behavior>

## Merge danger
**Door:** <two-way when the change is easy to revert, one-way when it is not>
**Blast radius:** <one phrase>

Fixes #N
```

`## Steps and decisions` is required in both the body and discussion comment. Use one numbered entry per actual step, with Change:, Decision:, and Validation: on separate lines. Missing or stale evidence blocks review and merge; see `AGENTS.md`.

A front-end change uses a before screenshot and an after screenshot. A new surface uses the after screenshot. Keep the summary to one visual.
