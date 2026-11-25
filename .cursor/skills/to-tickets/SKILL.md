---
name: to-tickets
description: >-
  Break a spec, plan, or the current conversation into tracer-bullet
  tickets with blocking edges, then publish each approved ticket through
  open-linear-issue. Use only when the user types /to-tickets.
disable-model-invocation: true
---

# To tickets

Break a plan, a spec, or this conversation into tracer-bullet tickets. Each ticket declares which other tickets block it.

Adapted from Matt Pocock's `to-tickets` skill (MIT). Publish only through [open-linear-issue](../open-linear-issue/SKILL.md). Do not apply a `ready-for-agent` label. Do not close or edit the parent issue's decisions.

## Process

### 1. Gather context

Use this conversation. If the person passes a spec path, an issue number, or a URL, read its body and comments first.

### 2. Draft vertical slices

Each ticket is a narrow complete path through every layer it needs, so it can be demoed on its own. It fits one fresh context window. Prefactoring comes first: make the change easy, then make the easy change.

A wide mechanical refactor is the exception. Sequence it as expand, then migrate in batches, then contract. Each batch stays green because the old form still exists.

Give every ticket its blocking edges. A ticket with no blockers can start immediately.

Avoid file paths and code snippets. A prototype snippet may stay when it records a decision more precisely than prose. Say that it came from a prototype.

### 3. Quiz

Show a numbered list. For each ticket show the title, what it delivers end to end, what it is blocked by, the maturity, and the audience (`night` or `session`, using the night bounds in the open-linear-issue reference).

Ask whether the granularity is right, whether each blocker really gates the ticket, and whether anything should merge or split. Publish nothing until the person approves.

### 4. Publish

Create the tickets in blocker-first order with `open-linear-issue`, so each blocker has a real identifier. Record the parent on each child. Set a Linear `blocks` relation from the blocker to the blocked issue. On GitHub, repeat the blockers in the body.

A child is `implementation` unless the approved slice is an exploration or a set of examples. Every child still gets a relevance check, an agent prompt, and at least two acceptance criteria.

Work the frontier: any ticket whose blockers are done.

## Child body

```markdown
## Outcome
<one sentence>

## Parent
<Linear and GitHub URLs of the spec, when there is one>

## What to build
The end-to-end behaviour this ticket makes work.

## Blocked by
- <blocker URLs, or "None (can start immediately)">

## Agent prompt
<the prompt for this maturity, including the relevance check>
```
