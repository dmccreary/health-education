---
title: Positive or Negative? Influence Sorter
description: Students distinguish positive influences from negative influences by sorting simple, everyday scenario cards into two labeled bins, matching the Grade 1 benchmark on which people or situations positively or negatively influence a health behavior.
status: scaffold
library: p5.js
bloom_level: Analyze (L4)
---

# Positive or Negative? Influence Sorter



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 7: Getting Help and Making Healthy Choices](../../bands/grade-1/chapters/07-help-and-decisions/index.md).

```text
Type: microsim
**sim-id:** positive-or-negative-influence-sorter<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: distinguish, examine, differentiate

Learning objective: Students distinguish positive influences from negative influences by sorting simple, everyday scenario cards into two labeled bins, matching the Grade 1 benchmark on which people or situations positively or negatively influence a health behavior.

Canvas layout:
- Left area (450px): One scenario card at a time, shown as a short sentence with a simple flat illustration
- Right area (150px): Two labeled bins, "Positive Influence" and "Negative Influence," plus an infobox

Visual elements:
- 8 scenario cards cycling one at a time, such as: "A grandparent packs apple slices in your lunch," "A commercial makes candy look like the best snack ever," "A friend invites you to ride bikes after school," "A show makes staying up past bedtime look fun," "A coach reminds the team to drink water," "A friend dares you to skip washing your hands"
- Two friendly labeled bins with icons (a sun for "Positive Influence," a cloud for "Negative Influence")

Interactive controls:
- Click-to-select: student clicks the bin that matches the scenario
- Button: "Next Scenario"
- Button: "Reset"

Default parameters:
- First scenario: "A grandparent packs apple slices in your lunch" (clearly positive, to build confidence)

Data Visibility Requirements:
  Stage 1: Show the scenario card with no label
  Stage 2: After the student clicks a bin, show whether it matches
  Stage 3: Reveal a one-sentence explanation of why the scenario is a positive or negative influence

Behavior:
- Correct match: bin glows softly, gentle chime, explanation caption appears
- Incorrect match: gentle prompt, "Take another look — does this make a healthy choice easier or harder?", correct bin glows softly as a hint

Instructional Rationale: This is an Analyze-level (distinguish/examine) objective, so the MicroSim has students actively sort concrete examples into two categories rather than only reciting definitions, building the pattern-recognition skill needed to notice influences in real life.

Implementation notes: Use p5.js. Keep all scenarios everyday and age-appropriate — no mention of substances or mature themes, since this Grade 1 skill focuses on everyday choices like food, activity, sleep, and hygiene.
```

## Related Resources

- [Chapter 7: Getting Help and Making Healthy Choices](../../bands/grade-1/chapters/07-help-and-decisions/index.md)
