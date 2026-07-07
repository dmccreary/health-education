---
title: Disease Risk Factor Sorter
description: Students differentiate and classify a mixed set of
status: scaffold
library: p5.js
bloom_level: Analyze (L4)
---

# Disease Risk Factor Sorter



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 8: Health Equity and Disease Prevention](../../bands/grade-9-12/chapters/08-health-equity-and-disease-prevention/index.md).

```text
Type: microsim

**sim-id:** disease-risk-factor-sorter<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy Level: Analyze (L4)
Bloom Verb: differentiate, organize, classify

Learning objective: Students differentiate and classify a mixed set of
risk factors as primarily behavioral, primarily environmental, or
influencing both chronic and infectious disease risk.

Canvas layout:
- Left (60%): a shuffled bank of 12 risk-factor cards (e.g., "Diet high in
  processed food," "Overcrowded housing," "Smoking," "Poor ventilation in
  shared spaces," "Limited access to handwashing facilities," "Sedentary
  daily routine," "Chronic air pollution exposure," "Inconsistent
  vaccination access")
- Right (40%): three labeled drop zones: "Behavioral," "Environmental,"
  "Both/Interacts With Chronic and Infectious Risk"

Data Visibility Requirements:
  Stage 1: Show all 12 unsorted cards and the three empty drop zones
  Stage 2: Student drags each card into a zone
  Stage 3: On dropping a card, immediately reveal a one-sentence
  explanation of why it belongs in that zone (or a gentle correction if
  misplaced, still with the explanation)
  Stage 4: Show a final summary tally and one synthesis sentence noting
  that most environmental factors also shape how much control a person has
  over the behavioral factors

Interactive controls:
- Drag-and-drop cards into zones
- Button: "Check All"
- Button: "Reset"

Default parameters: 12-card bank, shuffled order each session

Instructional Rationale: Classifying diverse risk factors by category
while recognizing overlap is an Analyze-level task, so a sorting
interaction with immediate explanatory feedback is used rather than a
static labeled list.

Implementation notes: p5.js drag-and-drop; card and explanation data
stored as an array of {factor, correctZone, explanation} objects.
```

## Related Resources

- [Chapter 8: Health Equity and Disease Prevention](../../bands/grade-9-12/chapters/08-health-equity-and-disease-prevention/index.md)
