---
name: to-spec
description: >-
  Turn the current conversation into a spec and publish it as a parent
  multiGO issue. Use only when the user types /to-spec and the decisions
  are already made. Does not interview and does not implement.
disable-model-invocation: true
---

# To spec

Synthesize the decisions already made in this conversation. Do not interview, and do not invent a decision that nobody made. If the thread has not settled the shape of the work, stop and say so.

This publishes one parent issue through [open-linear-issue](../open-linear-issue/SKILL.md). Maturity is `spec`. Audience is `session`. The parent is not implemented in one pull request.

Adapted from Matt Pocock's `to-spec` skill (MIT). The tracker is Linear project multiGO and GitHub `TaniaPewah/MultiGoSalon`.

## Process

1. Read the code the decisions touch. Use the words already used in this repo. There is no glossary file and there are no ADRs yet.

2. Sketch the seams where the feature will be tested. Prefer an existing seam. Use the highest seam that can see the behavior. The ideal number of seams is one. Show the seams to the person and wait for confirmation before publishing.

3. Write the spec with the template below. Publish it with `open-linear-issue`. The agent prompt is: "This issue records decisions already made. Do not implement it. Child tickets from /to-tickets do the work. Close this parent when those children are closed."

Acceptance for the parent:

- The seams named below were confirmed
- Child tickets exist for every in-scope user story
- This parent has no pull request of its own

## Template

```markdown
## Outcome
<one sentence>

## Problem statement
The problem from the player's perspective.

## Solution
The solution from the player's perspective.

## User stories
1. As a <player>, I want <capability>, so that <benefit>.

## Implementation decisions
Decisions already made. No file paths and no code snippets, unless a prototype snippet states a decision more precisely than prose. Keep only that snippet and say it came from a prototype.

## Testing decisions
- Test external behavior
- Which seam is exercised
- Which existing test is the prior art

## Out of scope

## Further notes
```
