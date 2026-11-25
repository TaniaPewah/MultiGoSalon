---
name: retro
description: >-
  Suggest improvements to the agent environment after a coding session.
  Use when autopilot has opened its pull request, or when the user asks
  for a retro.
---

# Retro

Adapted from Matt Pocock's `retro` skill (MIT). Suggest changes to the agent environment, most severe first. Do not open an issue for a suggestion unless autopilot is on and the suggestion is one concrete outcome with acceptance criteria.

Look at this session for:

- A fact that was hard to find, and where a pointer in `AGENTS.md` would have helped.
- A mistake `npm test` or `npm run typecheck` could have caught, including a check that exists but did not run.
- A review miss that a mechanical check could enforce.
- An instruction in `AGENTS.md` or a skill that did not change what the agent did.
- A tool call that cost a lot and could have been a narrower command.

`AGENTS.md` stays a short map. A judgement call belongs in a skill. A mechanical rule belongs in a command that already runs.
