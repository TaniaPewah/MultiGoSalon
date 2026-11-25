#!/usr/bin/env node
/**
 * Print the next open issue number for an autopilot run.
 * Selection order is defined in AGENTS.md.
 */
import { spawnSync } from 'node:child_process';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const REPO = 'TaniaPewah/MultiGoSalon';

export function selectNextIssue(issues) {
  const open = issues.filter((issue) => issue.state !== 'closed');
  const openNumbers = new Set(open.map((issue) => issue.number));
  const eligible = open.filter((issue) => !hasLabel(issue, 'later') && !isBlocked(issue, openNumbers));
  const code = eligible.filter((issue) => hasLabel(issue, 'implementation') || hasLabel(issue, 'spec'));
  const pool = code.length
    ? code
    : eligible.filter((issue) => hasLabel(issue, 'exploration') || hasLabel(issue, 'examples'));
  pool.sort((a, b) => rank(a) - rank(b) || a.number - b.number);
  return pool[0]?.number ?? null;
}

function hasLabel(issue, name) {
  return (issue.labels ?? []).some((label) => (typeof label === 'string' ? label : label.name) === name);
}

function isBlocked(issue, openNumbers) {
  return blockersOf(issue).some((number) => openNumbers.has(number));
}

export function blockersOf(issue) {
  if (Array.isArray(issue.blockedBy)) return issue.blockedBy;
  const body = issue.body ?? '';
  const section = body.split(/^## Blocked by\s*$/m)[1];
  if (!section) return [];
  const untilNext = section.split(/^## /m)[0];
  if (/none \(can start immediately\)/i.test(untilNext)) return [];
  return [...untilNext.matchAll(/#(\d+)/g)].map((match) => Number(match[1]));
}

function rank(issue) {
  if (hasLabel(issue, 'e2e')) return 0;
  if (hasLabel(issue, 'night')) return 1;
  return 2;
}

function fromGitHub() {
  const result = spawnSync(
    'gh',
    ['issue', 'list', '--repo', REPO, '--state', 'open', '--limit', '200', '--json', 'number,labels,body'],
    { encoding: 'utf8' },
  );
  if (result.status !== 0) throw new Error((result.stderr || result.stdout || 'gh failed').trim());
  const issues = JSON.parse(result.stdout || '[]').map((issue) => ({ ...issue, state: 'open' }));
  const next = selectNextIssue(issues);
  if (next === null) return;
  process.stdout.write(`${next}\n`);
}

const isMain = process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href;
if (isMain) {
  try {
    fromGitHub();
  } catch (err) {
    console.error(err.message || err);
    process.exit(1);
  }
}
