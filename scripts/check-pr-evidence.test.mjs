import test from 'node:test';
import assert from 'node:assert/strict';
import { evidenceErrors, hasSteps } from './check-pr-evidence.mjs';

const body = `## Steps and decisions
1. Add the guard
   Change: Check documentation before merging.
   Decision: Use a repository guard so Paseo and other agents share one rule.
   Validation: Run the guard against missing and valid discussion comments.

## Evidence
Tests passed.
`;
const pr = { body, head: { sha: 'abc123' }, user: { login: 'author' } };
const comment = { user: { login: 'author' }, body: `<!-- implementation-evidence:abc123 -->\n${body}` };

test('accepts structured steps with a current author discussion comment', () => {
  assert.deepEqual(evidenceErrors(pr, [comment]), []);
});
test('rejects absent, stale, deleted, or another author’s discussion evidence', () => {
  for (const comments of [[], [{ ...comment, body: comment.body.replace('abc123', 'old') }], [{ ...comment, user: { login: 'other' } }]]) {
    assert.equal(evidenceErrors(pr, comments).length, 1);
  }
});
test('requires the body as well as the discussion comment', () => {
  assert.equal(evidenceErrors({ ...pr, body: 'Summary only' }, [comment]).length, 1);
});
test('rejects headings only, placeholders, missing decisions and incomplete later steps', () => {
  for (const invalid of ['## Steps and decisions\n', body.replace('Decision:', 'Reason:'), body.replace('Check documentation before merging.', 'TODO'), body.replace('## Evidence', '2. Another step\n   Change: Incomplete.\n\n## Evidence')]) {
    assert.equal(hasSteps(invalid), false);
  }
});
test('accepts a final steps section without a following heading', () => {
  assert.equal(hasSteps(body.split('## Evidence')[0]), true);
});
