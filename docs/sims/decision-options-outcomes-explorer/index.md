---
title: Decision Options and Outcomes Explorer
description: Students describe two or more options for a health-related decision and the likely outcome of each option.
status: scaffold
library: p5.js
bloom_level: Understand (L2)
---

# Decision Options and Outcomes Explorer



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 7: Influences, Decisions, and Personal Goals](../../bands/grade-2/chapters/07-influences-decisions-goals/index.md).

```text
Type: microsim
**sim-id:** decision-options-outcomes-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: describe, explain, compare

Learning objective: Students describe two or more options for a health-related decision and the likely outcome of each option.

Canvas layout:
- Top area (100px): A health-related scenario prompt selectable from a dropdown (e.g., "You are offered a sugary drink at a party," "A friend wants you to skip washing hands before snack," "You are choosing how to spend recess time")
- Middle area (280px): Two or three option cards displayed side by side, each with a "Show Outcome" button beneath it
- Bottom area (120px): Outcome panel showing the result text for the most recently clicked option

Interactive controls:
- Dropdown: Select scenario (3 total)
- Button under each option card: "Show Outcome"
- Button: "Compare All Outcomes" (reveals all outcome text at once, side by side)
- Button: "Reset"

Default parameters:
- Scenario: "You are offered a sugary drink at a party"
- Options shown: "Drink it," "Ask for water instead," "Have a little of both"
- No outcome revealed yet

Data Visibility Requirements:
  Stage 1: Show scenario and unopened option cards, no outcomes visible
  Stage 2: Student clicks "Show Outcome" under "Drink it" -- panel shows "Tastes exciting now, but a lot of sugar can lead to a stomachache or low energy later."
  Stage 3: Student clicks "Show Outcome" under "Ask for water instead" -- panel shows "Less exciting in the moment, but your body feels steady afterward."
  Stage 4: Student clicks "Compare All Outcomes" -- all outcome texts appear together so the student can weigh them side by side

Behavior:
- Every option always has a described outcome, calm and non-judgmental in tone -- no option is framed as "bad," only as leading to a different result
- Switching scenarios resets revealed outcomes

Instructional Rationale: This is an Understand-level objective ("describe options and potential outcomes"), so the design emphasizes step-through data visibility of concrete outcome text for each option rather than animation, letting students compare real outcome language side by side.

Implementation notes: Use p5.js. Keep all outcome language balanced and non-judgmental; avoid depicting any option as shameful.
```

## Related Resources

- [Chapter 7: Influences, Decisions, and Personal Goals](../../bands/grade-2/chapters/07-influences-decisions-goals/index.md)
