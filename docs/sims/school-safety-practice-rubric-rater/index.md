---
title: School Safety Practice Rubric Rater
description: Students evaluate five named school safety practices
status: scaffold
library: p5.js
bloom_level: Evaluate (L5)
---

# School Safety Practice Rubric Rater



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 9: Digital and School Safety](../../bands/grade-9-12/chapters/09-digital-and-school-safety/index.md).

```text
Type: microsim

**sim-id:** school-safety-practice-rubric-rater<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy Level: Evaluate (L5)
Bloom Verb: evaluate, judge, prioritize, justify

Learning objective: Students evaluate five named school safety practices
(controlled entry points, threat assessment teams, anonymous reporting
apps, student-staff relationship building, mental health support
availability) against four criteria (feasibility, effect on daily school
climate, evidence of effectiveness, cost), and justify a prioritized
ranking. This tool addresses only named, real-world policy practices; it
does not simulate, depict, or reference any attack or triggering event.

Canvas layout:
- Left (55%): five practice cards, each with a short neutral description
- Right (45%): a 1-5 rating grid (rows = the five practices, columns = the
  four criteria) the student fills in, plus a ranking area below

Data Visibility Requirements:
  Stage 1: Show all five practice cards with brief descriptions and an
  empty rating grid
  Stage 2: Student rates each practice on each criterion (1-5 sliders or
  click-to-select)
  Stage 3: Student drags the five practices into a final priority order
  and writes a one-sentence justification for the top choice
  Stage 4: Reveal a reference perspective summarizing what school-safety
  research generally finds most consistently effective (student-staff
  relationships and threat assessment teams show strong evidence; entry
  control is more variable in effectiveness relative to its cost) framed
  as one expert perspective to compare against, not a single correct
  answer

Interactive controls:
- Rating grid (1-5 per cell)
- Drag-to-rank list
- Text input: justification
- Button: "Compare to Research Summary"
- Button: "Reset"

Default parameters: All ratings start blank; no default rank order

Instructional Rationale: Rating and prioritizing named policy practices
against explicit criteria is a canonical Evaluate-level task, so a rubric
rater with a drag-to-rank justification step is used rather than a
descriptive list, requiring students to weigh trade-offs explicitly rather
than simply recall what each practice is.

Implementation notes: p5.js; practice, criteria, and reference-summary data
stored in a structured object; content restriction: no card, criterion, or
feedback text may reference a specific attack, weapon, or triggering
event — only named policy practices and evaluation criteria.
```

## Related Resources

- [Chapter 9: Digital and School Safety](../../bands/grade-9-12/chapters/09-digital-and-school-safety/index.md)
