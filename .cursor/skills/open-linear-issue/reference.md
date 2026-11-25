# Issue template and night-agent bounds

## Body

```markdown
## Outcome
<one sentence>

## Maturity
implementation | exploration | examples | spec

## Audience
night | session

## Relevance check
First action: re-read the code this issue names. Update or shrink the issue before doing the work. The product moves quickly; parts of this issue may already be done.

## Agent prompt
<only the steps for this maturity>

## Acceptance
- [ ] Relevance check recorded on the issue
- [ ] ...
```

Agent prompt by maturity:

- **implementation** — After the relevance check, write a short plan and review it in an issue comment. Then implement in this issue's worktree only. Finish with one pull request that contains `Fixes #N`. Do not close the issue until every acceptance criterion is checked on that PR.
- **exploration** — After the relevance check, investigate and paste the report as a Linear comment. Do not change code and do not open a pull request.
- **examples** — After the relevance check, paste 5–7 distinct options as a Linear comment. Do not change code and do not open a pull request.
- **spec** — This issue records decisions already made. Do not implement it. Child tickets from `/to-tickets` do the work. Close this parent when those children are closed.

## Labels

| Label | Meaning |
| --- | --- |
| `implementation` | Ready to build. Ends in a PR. |
| `exploration` | Report in a Linear comment. |
| `examples` | 5–7 options in a Linear comment. |
| `spec` | Parent decision record. Session only. Children do the work. |
| `night` | The unattended night agent may take it. |
| `session` | Only a working session with a person. |
| `later` | AI coaching or AI review. The night agent must not take it. |
| `e2e` | Browser proof of a player flow. |

## Night agent

The night agent may take an issue only when it is labeled `night`, not labeled `later`, and is exactly one of these:

- **Small full-stack fix.** At most 4 files. Allowed: `server/src/game/`, `server/src/practice/`, `client/src/components/`, `client/src/views/`, `shared/src/index.ts`. Forbidden: `server/src/sockets.ts` protocol changes, `package.json`, the lockfile, `.cursor/skills/`, `AGENTS.md`, auth, and deleting tests.
- **Doc fix.** Markdown that is not a skill and not `AGENTS.md`. `README.md` and files under `docs/` are allowed. Skills change how agents behave and are session-only.
- **Small front fix.** `client/src/components/`, `client/src/views/`, `client/src/styles.css` only. Attach a before screenshot and an after screenshot as Linear comments. A brand-new surface needs only the after screenshot.
- **Exploration.** The result is a report pasted into the Linear issue. No code change.
- **Examples.** 5–7 options pasted into the Linear issue. No code change.

Anything else is `session`: persistence, accounts, matchmaking behavior changes, new modes, scoring-rule changes, dependency upgrades, and any change over 4 files.

## Proof

The technical proof that the game works end to end is a Playwright run with a screenshot per phase and a video of the whole run. The six phases are: enter the salon, see the other player move, start a game, play a legal move and show an illegal one rejected, finish the game, solve one practice problem.

## Worktree

```bash
scripts/new-worktree.sh <github-issue-number>
```

This fetches `origin/main` and creates `../MultiGoSalon-issue-<N>` on branch `issue/<N>`.
