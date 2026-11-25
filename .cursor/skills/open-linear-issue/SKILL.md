---
name: open-linear-issue
description: >-
  Opens one multiGO issue in Linear and then the matching GitHub issue.
  Use when the user describes work to track, asks to open a Linear or
  GitHub issue, mentions a task or משימה, or the evening issue job runs.
  Asks before creating anything when required fields are missing.
---

# Open a Linear issue

People say what matters. This skill opens the issue. Do not create a Linear or GitHub issue any other way.

## Rules

יש לנו חוקים מאוד ברורים לפתיחת משימה בליניאר, וסקיל ייעודי הסוכן משתמש בו כדי לפתוח משימה לפי החוקים. אנחנו לא פותחות בעצמנו משימות. רק אומרות מה חשוב והסוכן משתמש בסקיל ומאשר איתנו מה שצריך אם יש חוסרים או דברים לא ברורים.

- המשימה נפתחת בהתאם לרמת הבשלות: יש משימות שדורשות רק מימוש, ויש כאלה שהן משימות אקספלוריישן/פלנינג.
- בכל משימה יש בדיקת רלוונטיות בהתחלה - כי הדברים זזים מהר, והרבה פעמים המשימה או חלקים ממנה כבר לא רלוונטיים וצריך לעדכן.
- כל פלאן חייב לעבור ריווי. כרגע כל ה reviews מבוצעים על ידי הסוכן.
- בכל משימה יש פרומפט לסוכן בהתאם למה שאמור לקרות בה. משימת מימוש תמיד מסתיימת בפיאר.
- יש סקריפט וסטאפ ברור של וורקטרי חדש ונפרד לכל משימה.
- לכל משימה יש תנאי קבלה שמוגדרים בה. המשימה נסגרת רק כשיש עמידה בכל תנאי הקבלה.

Night-agent limits, labels, and the issue body template are in [reference.md](reference.md). Read it before creating or picking up an issue.

## Before you create anything

Do not open an issue by hand, and do not invent missing fields, unless autopilot mode is on (triggered by the human). Autopilot is on only when the person in this conversation explicitly turns it on. Then fill the missing fields from the repo and the request, record what you filled, and open the issue without stopping to ask.

Otherwise stop and ask the person when any of these are unknown:

- outcome (one sentence)
- maturity: `implementation`, `exploration`, `examples`, or `spec`
- audience: `night` or `session` (`spec` is always `session`)
- acceptance criteria (at least two, plus the relevance check)
- the agent prompt for that maturity

The evening script may create only queue items that already have every field. It must skip an incomplete item. It must not invent issues.

One issue is one outcome. Split bundled requests.

## Create

1. Search Linear and GitHub for the same title. If it exists, stop and return the existing URLs.
2. Create the Linear issue in the multiGO project (team TAN) with the template in [reference.md](reference.md). Labels: maturity, audience, and `later` when the work is AI coaching or AI review.
3. Create the GitHub issue on `TaniaPewah/MultiGoSalon` with the same title, body, and labels. Include the Linear URL.
4. Comment on the Linear issue with the GitHub URL.
5. Give the person both URLs. Do not start the work in the same turn unless they asked to implement it.

## Do the work

1. `scripts/new-worktree.sh <github-issue-number>`
2. Relevance check first. Update the issue if part of it is already done. Stop if none of it is still relevant.
3. `exploration` and `examples` end as a Linear comment. They do not open a pull request. A `spec` is a parent decision record: do not implement it in one pull request. `/to-tickets` splits it, and the parent closes when its child tickets have closed.
4. `implementation` writes a short plan, reviews that plan in the issue comments, then implements. When autopilot is on, follow `.cursor/skills/implement/SKILL.md`. The work ends as one pull request whose body contains `Fixes #<github-number>`.
5. Close the issue only when every acceptance criterion is met and recorded on the pull request or the Linear comment.
