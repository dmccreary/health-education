---
title: Germ-Stopping Action Sorter
description: Students evaluate short scenario cards showing a student's action and judge whether the action helps stop germs from spreading or could let germs spread, then rank a short list of actions from most to least helpful.
status: scaffold
library: p5.js
bloom_level: Evaluate (L5)
---

# Germ-Stopping Action Sorter



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 5: Healthy Habits, Activity, and Germs](../../bands/grade-1/chapters/05-healthy-habits/index.md).

```text
Type: microsim
**sim-id:** germ-stopping-action-sorter<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Evaluate (L5)
Bloom Taxonomy Verb: judge, assess, prioritize

Learning objective: Students evaluate short scenario cards showing a student's action and judge whether the action helps stop germs from spreading or could let germs spread, then rank a short list of actions from most to least helpful.

Canvas layout:
- Left area (450px): One scenario card at a time (flat illustration plus one sentence, e.g., "Diego sneezes into his elbow.")
- Right area (150px): Two bins labeled "Stops Germs" and "Spreads Germs" and an infobox

Visual elements:
- 8 scenario cards cycling one at a time, mixing good illness prevention actions (handwashing, covering coughs, not sharing cups) and risky actions (sneezing into bare hands, sharing a water bottle, touching face after recess)
- Two labeled bins with friendly icons (a shield for "Stops Germs," a small germ character for "Spreads Germs")

Interactive controls:
- Click-to-select: student clicks the bin that matches the scenario
- Button: "Next Scenario"
- Button: "Reset"

Default parameters:
- First scenario: "Maya washes her hands with soap before lunch" (clearly stops germs, to build confidence)

Data Visibility Requirements:
  Stage 1: Show the scenario card with no label
  Stage 2: After the student clicks a bin, show whether it matches
  Stage 3: Reveal a one-sentence explanation of why the action stops or spreads germs

Behavior:
- Correct match: bin glows, gentle chime, explanation caption appears
- Incorrect match: gentle prompt, "Think about where germs could travel next," correct bin glows softly as a hint

Instructional Rationale: This is an Evaluate-level (judge/assess) objective, so the MicroSim asks students to weigh each action's consequence for germ spread and justify the classification, rather than simply recalling a definition; the concrete explanation after each answer supports that judgment without relying on continuous animation.

Implementation notes: Use p5.js. Keep the "Spreads Germs" scenarios realistic and relatable (forgetting, not being careless on purpose) so no character feels blamed. Teacher reads each scenario and explanation aloud.
```

## Related Resources

- [Chapter 5: Healthy Habits, Activity, and Germs](../../bands/grade-1/chapters/05-healthy-habits/index.md)
