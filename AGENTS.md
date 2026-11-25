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
gh pr create --repo TaniaPewah/MultiGoSalon --base main --head "$branch" --body-file pr-body.md
```

`.cursor/skills/pr/SKILL.md` writes `pr-body.md` before that command runs. The body contains `Fixes #N`.

# How we commit

Every commit message summarizes the steps taken to solve the issue and the technical decisions made during those steps. The subject is one sentence. The body lists the steps and, for each step, the decision that was made.

# Screenshots

When a change needs a before screenshot and an after screenshot, commit both images on the branch and show them in the pull request body. A Linear attachment does not replace those pull request images. A new surface needs the after image on the pull request.

# How We Test

- When writing a test, explore the actual root cause of the bug or behavior.
- Test multiple cases that check the same root cause.
- Prefer integration tests over unit tests. Add a Playwright spec in `tests/` and run it with `npm test`.

`npm test` runs the issue-selection tests, the server Vitest suite, and the Playwright spec in `tests/`.

# How We Open Work

People describe the outcome. Agents open the Linear issue, then the matching GitHub issue, by following `.cursor/skills/open-linear-issue/SKILL.md`. Do not open an issue by hand, and do not invent missing fields, unless autopilot mode is on (triggered by the human). Ask when maturity, audience, acceptance criteria, or scope is unclear.

When the decisions are already made and the work spans several sessions, `/to-spec` records them as one parent issue, then `/to-tickets` splits that parent into vertical slices. A change that fits one session stays one implementation issue. Both skills publish through `open-linear-issue`.

The product goal is a bug-free multiplayer game plus a solo puzzle mode: solving puzzles earns XP, levels, and unlockable advancements; ranked matchmaking; a beginner course; timed puzzle leaderboards; daily quests; three board sizes; puzzle levels. Later: AI coaching and AI review.

Each task starts in its own worktree:

```
scripts/new-worktree.sh <github-issue-number>
```

Approved queue: `docs/issue-queue.json`. The 18:00 UTC job files up to 10 unfiled `evening` items with `scripts/open-evening-issues.mjs`.

# Autopilot

Autopilot is on only when the person in this conversation explicitly turns it on. `scripts/select-next-issue.mjs` prints the next open issue. This is the only copy of that order:

- Skip `later`. Skip an issue whose `Blocked by` line names an issue that is still open. Skip an issue that already has an open pull request.
- `implementation` and `spec` are the code pool. A `spec` issue is implemented, not left as a parent.
- Order inside the code pool: `e2e`, then other `night`, then `session`. The lowest issue number wins inside a group.
- `exploration` and `examples` are chosen only when the code pool is empty. They end as a Linear comment and have no pull request.
- When nothing eligible is open, run `node scripts/open-evening-issues.mjs --batch evening --limit 10` once. If it opens nothing, the run ends.

A `night` issue still obeys the file limits in `.cursor/skills/open-linear-issue/reference.md`.

Finish the current pull request before starting the next issue. A clean review is merged. An unclear decision or a third failed review is left open, and the run continues:

1. Relevance check, then `scripts/new-worktree.sh <github-issue-number>`. The worktree is cut from `origin/main`.
2. A problem found during investigation or implementation that is not this issue is filed with `.cursor/skills/open-linear-issue/SKILL.md` as its own issue, linked as a sub-issue of the current one when the tracker allows. It is not added to this pull request. Work on the current issue continues.
3. Write the plan. If a major or unclear decision remains, `.cursor/skills/pr/SKILL.md` writes `pr-body.md` with `Fixes #N`, the command block above opens the pull request, and the decision is commented there. That pull request stays open and is not merged. Then select the next issue.
4. Otherwise implement. A bug follows `.cursor/skills/diagnosing-bugs/SKILL.md`. Any other code issue follows `.cursor/skills/tdd/SKILL.md`. `.cursor/skills/implement/SKILL.md` drives both. Open the pull request the same way if it is not open yet.
5. After every commit, comment on the pull request with the commit and the review from `.cursor/skills/code-review/SKILL.md`. The commit message follows "How we commit".
6. A missed acceptance criterion or an `AGENTS.md` break gets another commit and another review. After three rounds with the same blocking finding, comment that finding, leave the pull request open, and select the next issue.
7. When the review is clean, `gh pr merge --squash`. Then `git fetch origin` and select the next issue.

An `examples` issue uses `.cursor/skills/prototype/SKILL.md`. `.cursor/skills/retro/SKILL.md` lists environment suggestions after the run ends. Those suggestions are not filed during the loop.
