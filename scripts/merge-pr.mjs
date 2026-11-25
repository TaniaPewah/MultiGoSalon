import { execFileSync } from 'node:child_process';
import { checkPR } from './check-pr-evidence.mjs';

const [number] = process.argv.slice(2);
const repo = 'TaniaPewah/MultiGoSalon';
const { pr, errors } = checkPR(repo, number);
if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
// Documentation validation is additional to, not a substitute for, the code review.
// Pin the merge to the checked SHA so a concurrent push cannot bypass this check.
execFileSync('gh', ['pr', 'merge', String(number), '--repo', repo, '--squash', '--match-head-commit', pr.head.sha], { stdio: 'inherit' });
