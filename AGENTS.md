# How We Work with GitHub

- **One issue = one branch = one pull request — always.** Every issue
  fix gets its own branch and its own PR. Never bundle fixes for several
  issues into one branch or PR, and never mix unrelated changes into an
  issue's PR. When issues' work overlaps, finish, PR and merge them one
  at a time, branching each new PR on top of the merged result.
- When you fix an issue or add a feature, do it in a branch and finish
  with a pull request.
- This repository is TaniaPewah/MultiGoSalon. Open the pull request
  on this repository.
- Create a complete pull request with no user interaction. The end
  result is a pull request on GitHub.
- Reference the issue in the PR body with "Fixes #N" so it closes on
  merge.

```
set -e
export GIT_TERMINAL_PROMPT=0
export GH_PROMPT_DISABLED=1
branch=$(git symbolic-ref --short HEAD)
git push origin "HEAD:refs/heads/$branch"
gh pr create --repo TaniaPewah/MultiGoSalon --base main --head "$branch" --fill
```

# How We Test

- When writing a test, explore the actual root cause of the bug or behavior.
- Test multiple cases that check the same root cause.
- Prefer integration tests over unit tests. Add a Playwright spec in `tests/` and run it with `npm test`.

`npm test` currently runs the server Vitest suite. Keep those tests. When a Playwright spec is added, `npm test` must run both.

# How We Open Work

People describe the outcome. Agents open the Linear issue, then the matching GitHub issue, by following `.cursor/skills/open-linear-issue/SKILL.md`. Do not open an issue by hand, and do not invent missing fields. Ask when maturity, audience, acceptance criteria, or scope is unclear.

When the decisions are already made and the work spans several sessions, `/to-spec` records them as one parent issue, then `/to-tickets` splits that parent into vertical slices. A change that fits one session stays one implementation issue. Both skills publish through `open-linear-issue`.

The product goal is a bug-free multiplayer game plus a solo puzzle mode: solving puzzles earns XP, levels, and unlockable advancements; ranked matchmaking; a beginner course; timed puzzle leaderboards; daily quests; three board sizes; puzzle levels. Later: AI coaching and AI review.

Each task starts in its own worktree:

```
scripts/new-worktree.sh <github-issue-number>
```

Approved queue: `docs/issue-queue.json`. The 18:00 UTC job files up to 10 unfiled `evening` items with `scripts/open-evening-issues.mjs`.
