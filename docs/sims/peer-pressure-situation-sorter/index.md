---
title: Peer Pressure Situation Sorter
description: Students analyze short peer-pressure scenarios to distinguish low-risk social pressure from pressure toward an unsafe or unhealthy choice, preparing them to decide when a refusal skill is needed.
status: scaffold
library: p5.js
bloom_level: Analyze (L4)
---

# Peer Pressure Situation Sorter



<iframe src="main.html" width="100%" height="514px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 4: Personal Safety and Refusal Skills](../../bands/grade-4/chapters/04-safety-and-refusal-skills/index.md).

```text
Type: microsim
**sim-id:** peer-pressure-situation-sorter<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: examine, distinguish, differentiate

Learning objective: Students analyze short peer-pressure scenarios to distinguish low-risk social pressure from pressure toward an unsafe or unhealthy choice, preparing them to decide when a refusal skill is needed.

Canvas layout:
- Top (350px): A scenario card describing peer pressure in a short, realistic situation
- Bottom (200px): Two zones, "Low-Risk Choice" and "Needs a Refusal Skill," and a "Why?" button

Visual elements:
- Neutral scenario icons (two speech bubbles representing friends talking)
- Calm colors: green for "Low-Risk Choice," amber for "Needs a Refusal Skill"

Interactive controls:
- Drag-and-drop scenario card into a zone
- Button: "Why?" reveals explanation
- Button: "Next Scenario"

Default parameters:
- 8 scenarios presented one at a time in random order, mixing low-risk (trying a new snack, joining a new game) and higher-risk (skipping a bike helmet, going somewhere without telling an adult, being pressured to exclude a classmate) examples

Data Visibility Requirements:
  Stage 1: Show the full scenario text
  Stage 2: Show the two sorting zones
  Stage 3: After sorting, show a short explanation and, for "Needs a Refusal Skill" scenarios, a reminder that the next section teaches exactly what to say
  Final: Show how many scenarios were sorted, with an option to review any of them

Behavior:
- Every sort is followed by an explanation regardless of correctness, framed as learning rather than scoring
- "Needs a Refusal Skill" scenarios link thematically forward to the Refusal Skill and Demonstrating Refusal Skills sections

Instructional Rationale: This is an Analyze-level objective requiring learners to examine scenarios and distinguish types of peer pressure. Sorting with full explanations builds the judgment needed before practicing refusal scripts in the next sections.

Implementation notes: Use p5.js. Keep all scenarios realistic and age-appropriate, focused on situations like activity choices, dares, and social exclusion rather than substance use, which is covered in a later band.
```

## Related Resources

- [Chapter 4: Personal Safety and Refusal Skills](../../bands/grade-4/chapters/04-safety-and-refusal-skills/index.md)
