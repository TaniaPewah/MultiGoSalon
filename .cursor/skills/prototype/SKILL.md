---
name: prototype
description: >-
  Build a throwaway prototype for a design question or an examples
  issue. Use when autopilot is handling examples, or when the user
  wants to see whether logic or a UI feels right.
---

# Prototype

Adapted from Matt Pocock's `prototype` skill (MIT). A prototype answers one question and is not production code.

- A logic question becomes one HTML file with buttons that drive the hard cases and show the full state after each step.
- A UI question becomes 5 to 7 variations on one throwaway page. For an `examples` issue, paste those variations on the Linear issue and do not open a product pull request.

Put the file next to the feature it explores and name it so it is obviously a prototype. No tests, no persistence, no extra abstraction. After a decision is made, the implementation issue records the verdict. The prototype stays off `main`.
