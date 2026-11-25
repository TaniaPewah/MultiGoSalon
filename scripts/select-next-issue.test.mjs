import assert from 'node:assert/strict';
import test from 'node:test';
import { issuesClaimedByOpenPullRequests, selectNextIssue } from './select-next-issue.mjs';

function issue(number, labels, extra = {}) {
  return { number, state: 'open', labels, ...extra };
}

test('an e2e issue beats a night issue', () => {
  const next = selectNextIssue([
    issue(1, ['implementation', 'night']),
    issue(2, ['implementation', 'e2e', 'session']),
  ]);
  assert.equal(next, 2);
});

test('a blocked issue waits', () => {
  const next = selectNextIssue([
    issue(1, ['implementation', 'night'], { blockedBy: [4] }),
    issue(4, ['implementation', 'session']),
    issue(2, ['implementation', 'night']),
  ]);
  assert.equal(next, 2);
});

test('later is skipped', () => {
  const next = selectNextIssue([
    issue(1, ['implementation', 'later', 'night']),
    issue(2, ['implementation', 'session']),
  ]);
  assert.equal(next, 2);
});

test('a spec issue is chosen for implementation ahead of exploration', () => {
  const next = selectNextIssue([
    issue(1, ['exploration', 'night']),
    issue(4, ['spec', 'session']),
  ]);
  assert.equal(next, 4);
});

test('a night spec beats a session implementation', () => {
  const next = selectNextIssue([
    issue(3, ['implementation', 'session']),
    issue(5, ['spec', 'night']),
  ]);
  assert.equal(next, 5);
});

test('exploration is chosen only when no code issue is eligible', () => {
  const waiting = selectNextIssue([
    issue(1, ['exploration', 'night']),
    issue(2, ['implementation', 'session']),
  ]);
  const onlyDesign = selectNextIssue([
    issue(8, ['examples', 'session']),
    issue(3, ['exploration', 'night']),
  ]);
  assert.equal(waiting, 2);
  assert.equal(onlyDesign, 3);
});

test('an open pull request claims its issue by branch name and by Fixes', () => {
  const claimed = issuesClaimedByOpenPullRequests([
    { headRefName: 'issue/4', body: 'Fixes #4' },
    { headRefName: 'workflow/other', body: 'Closes #9' },
  ]);
  assert.deepEqual(claimed.sort((a, b) => a - b), [4, 9]);
});

test('an issue with an open pull request is left for a person and the next issue is chosen', () => {
  const next = selectNextIssue(
    [
      issue(1, ['implementation', 'e2e']),
      issue(2, ['implementation', 'night']),
    ],
    [1],
  );
  assert.equal(next, 2);
});

test('a closed blocker does not keep the issue waiting', () => {
  const next = selectNextIssue([
    issue(1, ['implementation', 'night'], { blockedBy: [9] }),
    { number: 9, state: 'closed', labels: ['implementation'] },
  ]);
  assert.equal(next, 1);
});
