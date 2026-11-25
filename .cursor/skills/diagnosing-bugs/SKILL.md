---
name: diagnosing-bugs
description: >-
  Diagnosis loop for a hard bug or a performance regression. Use when
  autopilot is fixing a bug, or when the user says diagnose, debug,
  broken, throwing, failing, or slow.
---

# Diagnosing bugs

Adapted from Matt Pocock's `diagnosing-bugs` skill (MIT). Redact secrets before showing any command output.

## 1. Feedback loop

Build one command that fails on this bug's exact symptom. Prefer a failing test, then a curl against the dev server, then a Playwright script. The command must be deterministic, fast, and runnable without a person. Run it once and keep the output.

When no such command exists, stop and say what was tried.

## 2. Reproduce and shrink

Run the command until the failure matches the report. Remove inputs one at a time and keep only what the failure needs.

## 3. Hypothesise

Write 3 to 5 falsifiable hypotheses, highest likelihood first. In autopilot, record them on the issue and continue. Each one says what evidence would rule it out.

## 4. Instrument

Change one variable at a time. Tag temporary logs with a unique `[DEBUG-....]` prefix.

## 5. Fix

Turn the smallest repro into a failing test at the seam that actually reaches the bug. Watch it fail, apply the fix, watch it pass, then re-run the original command.

## 6. Cleanup

The original command passes. The regression test stays. Every `[DEBUG-....]` line is gone. The pull request states which hypothesis was right.
