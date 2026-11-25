import { execFileSync } from 'node:child_process';
import { pathToFileURL } from 'node:url';

export const context = 'PR implementation evidence';

export function hasSteps(text = '') {
  const section = text.match(/^## Steps and decisions\s*\n([\s\S]*?)(?=^## |$(?![\s\S]))/m)?.[1] ?? '';
  const steps = section.split(/^\d+\.\s+/m).slice(1);
  return steps.length > 0 && steps.every(step =>
    ['Change', 'Decision', 'Validation'].every(label => {
      const value = step.match(new RegExp(`^\\s*${label}:\\s*(.+)$`, 'm'))?.[1]?.trim();
      return value && !/^(?:<.*>|TODO\b.*|TBD\b.*|N\/A|\.\.\.)$/i.test(value);
    }));
}

export function evidenceErrors(pr, comments) {
  const errors = [];
  if (!hasSteps(pr.body)) errors.push('PR body needs numbered steps with Change:, Decision:, and Validation: for every step.');
  const marker = `<!-- implementation-evidence:${pr.head.sha} -->`;
  if (!comments.some(comment => comment.user?.login === pr.user.login && comment.body?.includes(marker) && hasSteps(comment.body))) {
    errors.push(`PR author must publish a discussion comment containing ${marker} and the same structured steps for the current HEAD.`);
  }
  return errors;
}

function gh(...args) {
  return execFileSync('gh', args, { encoding: 'utf8' }).trim();
}

export function checkPR(repo, number) {
  if (!/^[\w.-]+\/[\w.-]+$/.test(repo ?? '') || !/^\d+$/.test(String(number))) throw new Error('Usage: node scripts/check-pr-evidence.mjs owner/repo PR_NUMBER [--status]');
  const pr = JSON.parse(gh('api', `repos/${repo}/pulls/${number}`));
  const comments = JSON.parse(gh('api', '--paginate', '--slurp', `repos/${repo}/issues/${number}/comments`)).flat();
  return { pr, errors: evidenceErrors(pr, comments) };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const [repo, number, option] = process.argv.slice(2);
  const { pr, errors } = checkPR(repo, number);
  if (option === '--status') {
    gh('api', '--method', 'POST', `repos/${repo}/statuses/${pr.head.sha}`, '-f', `state=${errors.length ? 'failure' : 'success'}`, '-f', `context=${context}`, '-f', `description=${errors.length ? 'Missing current implementation steps; see workflow log' : 'Body and current-HEAD discussion evidence present'}`);
  }
  if (errors.length) {
    console.error(errors.join('\n'));
    process.exitCode = 1;
  } else console.log(`Implementation evidence present for ${pr.head.sha}. Human review must still verify accuracy and decision rationale.`);
}
