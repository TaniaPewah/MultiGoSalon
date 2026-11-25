#!/usr/bin/env node
/**
 * Create approved multiGO issues in Linear, then the matching GitHub issues.
 *
 *   node scripts/open-evening-issues.mjs --batch seed --limit 20
 *   node scripts/open-evening-issues.mjs --batch evening --limit 10
 *
 * Reads LINEAR_API_KEY from the environment or from .env (gitignored).
 * Skips a title that already exists in Linear or GitHub.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const TEAM_ID = '19ca1363-24fb-4fe0-8398-c820492ae1a6';
const BACKLOG_STATE_ID = '7ed2aa8b-ab0b-495e-9fb3-a1495c45fe33';
const REPO = 'TaniaPewah/MultiGoSalon';

const LABEL_COLORS = {
  night: '4C6EF5',
  session: 'F59F00',
  implementation: '2F9E44',
  exploration: '7950F2',
  examples: '0CA678',
  later: '868E96',
  e2e: 'E03131',
  spec: '1C7ED6',
};

function loadEnv() {
  if (process.env.LINEAR_API_KEY) return;
  const text = readFileSync(join(root, '.env'), 'utf8');
  for (const line of text.split('\n')) {
    const match = line.match(/^LINEAR_API_KEY=(.*)$/);
    if (match) process.env.LINEAR_API_KEY = match[1].trim();
  }
  if (!process.env.LINEAR_API_KEY) throw new Error('LINEAR_API_KEY is missing');
}

function args() {
  const out = { batch: 'evening', limit: 10 };
  const argv = process.argv.slice(2);
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === '--batch') out.batch = argv[++i];
    else if (argv[i] === '--limit') out.limit = Number(argv[++i]);
  }
  if (!['seed', 'evening'].includes(out.batch)) throw new Error('--batch must be seed or evening');
  if (!Number.isInteger(out.limit) || out.limit < 1) throw new Error('--limit must be a positive integer');
  return out;
}

async function linear(query, variables) {
  const res = await fetch('https://api.linear.app/graphql', {
    method: 'POST',
    headers: {
      Authorization: process.env.LINEAR_API_KEY,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, variables }),
  });
  const json = await res.json();
  if (!res.ok || json.errors) {
    throw new Error(JSON.stringify(json.errors ?? json));
  }
  return json.data;
}

function gh(args) {
  const result = spawnSync('gh', args, { encoding: 'utf8' });
  if (result.status !== 0) {
    throw new Error((result.stderr || result.stdout || 'gh failed').trim());
  }
  return result.stdout.trim();
}

function labelsFor(item) {
  const labels = [item.maturity, item.audience];
  if (item.later) labels.push('later');
  if (item.e2e) labels.push('e2e');
  return labels;
}

function bodyFor(item, linearUrl) {
  const acceptance = item.acceptance.map((line) => `- [ ] ${line}`).join('\n');
  const linearLine = linearUrl ? `\nLinear: ${linearUrl}\n` : '';
  return `## Outcome
${item.outcome}

## Maturity
${item.maturity}

## Audience
${item.audience}
${linearLine}
## Relevance check
First action: re-read the code this issue names. Update or shrink the issue before doing the work. The product moves quickly; parts of this issue may already be done.

## Agent prompt
${item.prompt}

## Acceptance
- [ ] Relevance check recorded on the issue
${acceptance}
`;
}

function validate(item) {
  if (!item.title || !item.outcome || !item.prompt) return 'missing title, outcome, or prompt';
  if (!['implementation', 'exploration', 'examples'].includes(item.maturity)) return 'bad maturity';
  if (!['night', 'session'].includes(item.audience)) return 'bad audience';
  if (!Array.isArray(item.acceptance) || item.acceptance.length < 2) return 'need at least two acceptance criteria';
  if (item.maturity === 'implementation' && !item.prompt.includes('Fixes #')) return 'implementation prompt must require Fixes #';
  if (item.maturity !== 'implementation' && !item.prompt.includes('Do not change code')) return 'non-implementation prompt must forbid code changes';
  if (item.audience === 'night' && item.later) return 'later work cannot be night';
  return null;
}

async function ensureProject() {
  const metaPath = join(root, 'docs', 'linear-project.json');
  try {
    const existing = JSON.parse(readFileSync(metaPath, 'utf8'));
    if (existing.projectId) return existing;
  } catch {
    /* create it */
  }
  const data = await linear(
    `mutation ($input: ProjectCreateInput!) {
      projectCreate(input: $input) { success project { id name url } }
    }`,
    {
      input: {
        name: 'multiGO',
        teamIds: [TEAM_ID],
        description:
          'Bug-free multiplayer Go, plus a solo puzzle mode. Puzzles earn XP, levels, and unlocks. Ranked matchmaking, a beginner course, timed puzzle leaderboards, daily quests, three board sizes, and puzzle levels. Later: AI coaching and AI review.',
      },
    },
  );
  const project = data.projectCreate.project;
  const meta = { projectId: project.id, projectUrl: project.url, teamId: TEAM_ID, teamKey: 'TAN' };
  writeFileSync(metaPath, JSON.stringify(meta, null, 2) + '\n');
  console.log(`project ${project.url}`);
  return meta;
}

async function ensureLinearLabels() {
  const data = await linear(
    `query ($team: String!) { team(id: $team) { labels { nodes { id name } } } }`,
    { team: TEAM_ID },
  );
  const byName = new Map(data.team.labels.nodes.map((label) => [label.name, label.id]));
  for (const [name, color] of Object.entries(LABEL_COLORS)) {
    if (byName.has(name)) continue;
    const created = await linear(
      `mutation ($input: IssueLabelCreateInput!) {
        issueLabelCreate(input: $input) { success issueLabel { id name } }
      }`,
      { input: { teamId: TEAM_ID, name, color: `#${color}` } },
    );
    byName.set(name, created.issueLabelCreate.issueLabel.id);
  }
  return byName;
}

function ensureGithubLabels() {
  for (const [name, color] of Object.entries(LABEL_COLORS)) {
    const result = spawnSync(
      'gh',
      ['label', 'create', name, '--repo', REPO, '--color', color, '--description', name, '--force'],
      { encoding: 'utf8' },
    );
    if (result.status !== 0) throw new Error((result.stderr || result.stdout).trim());
  }
}

async function existingLinearTitles(projectId) {
  const titles = new Set();
  let after = null;
  for (;;) {
    const data = await linear(
      `query ($project: String!, $after: String) {
        project(id: $project) {
          issues(first: 50, after: $after) { pageInfo { hasNextPage endCursor } nodes { title url } }
        }
      }`,
      { project: projectId, after },
    );
    for (const node of data.project.issues.nodes) titles.add(node.title);
    if (!data.project.issues.pageInfo.hasNextPage) break;
    after = data.project.issues.pageInfo.endCursor;
  }
  return titles;
}

function existingGithubTitles() {
  const raw = gh(['issue', 'list', '--repo', REPO, '--state', 'all', '--limit', '200', '--json', 'title']);
  return new Set(JSON.parse(raw || '[]').map((issue) => issue.title));
}

async function createOne(item, projectId, linearLabels) {
  const labelIds = labelsFor(item).map((name) => {
    const id = linearLabels.get(name);
    if (!id) throw new Error(`missing Linear label ${name}`);
    return id;
  });
  const created = await linear(
    `mutation ($input: IssueCreateInput!) {
      issueCreate(input: $input) { success issue { id identifier url } }
    }`,
    {
      input: {
        teamId: TEAM_ID,
        projectId,
        title: item.title,
        description: bodyFor(item),
        stateId: BACKLOG_STATE_ID,
        labelIds,
        priority: item.priority,
      },
    },
  );
  const issue = created.issueCreate.issue;
  const githubUrl = gh([
    'issue', 'create',
    '--repo', REPO,
    '--title', item.title,
    '--body', bodyFor(item, issue.url),
    '--label', labelsFor(item).join(','),
  ]);
  await linear(
    `mutation ($input: CommentCreateInput!) {
      commentCreate(input: $input) { success }
    }`,
    { input: { issueId: issue.id, body: `GitHub: ${githubUrl}` } },
  );
  return { linear: `${issue.identifier} ${issue.url}`, github: githubUrl };
}

async function main() {
  const { batch, limit } = args();
  loadEnv();
  mkdirSync(join(root, 'docs'), { recursive: true });
  const queue = JSON.parse(readFileSync(join(root, 'docs', 'issue-queue.json'), 'utf8'));
  const project = await ensureProject();
  const linearLabels = await ensureLinearLabels();
  ensureGithubLabels();
  const linearTitles = await existingLinearTitles(project.projectId);
  const githubTitles = existingGithubTitles();
  let opened = 0;
  for (const item of queue) {
    if (opened >= limit) break;
    if (item.batch !== batch) continue;
    const problem = validate(item);
    if (problem) {
      console.log(`skip "${item.title}": ${problem}`);
      continue;
    }
    if (linearTitles.has(item.title) || githubTitles.has(item.title)) {
      console.log(`exists "${item.title}"`);
      continue;
    }
    const urls = await createOne(item, project.projectId, linearLabels);
    linearTitles.add(item.title);
    githubTitles.add(item.title);
    opened += 1;
    console.log(`opened ${urls.linear} ${urls.github}`);
  }
  console.log(`opened ${opened} ${batch} issue(s)`);
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
