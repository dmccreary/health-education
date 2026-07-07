---
title: Healthy or Needs Help?
description: Students describe the roles of family members and peers in healthy relationships by reading short scenarios and identifying the healthy relationship signs present.
status: scaffold
library: p5.js
bloom_level: Understand (L2)
---

# Healthy or Needs Help?



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 5: Relationships And Respect](../../bands/grade-3/chapters/05-relationships-and-respect/index.md).

```text
Type: microsim
**sim-id:** healthy-relationship-scenario-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: describe, interpret, classify

Learning objective: Students describe the roles of family members and peers in healthy relationships by reading short scenarios and identifying the healthy relationship signs present.

Canvas layout:
- Left side (400px): One scenario card at a time, shown as simple illustrated text (e.g., "Maya's brother helps her with homework and says sorry when he snaps at her.")
- Right side (200px): Four checkbox-style options representing healthy relationship signs (listening, honesty, apology and repair, support) plus a "Show Answer" button

Visual elements:
- Scenario illustration with two simple characters
- Checkboxes that light up green when correctly identified

Interactive controls:
- Click the checkboxes that apply to the current scenario
- Button: "Show Answer"
- Button: "Next Scenario"

Default parameters:
- Begins on scenario 1 of 5 with no checkboxes selected

Data Visibility Requirements:
  Stage 1: Show the scenario text/illustration and four unmarked checkboxes
  Stage 2: After the student selects checkboxes and clicks "Show Answer," reveal which signs truly applied with a one-sentence explanation for each
  Stage 3: "Next Scenario" loads a new short scenario, resetting the checkboxes

Behavior:
- Correct selections turn green with a brief explanation
- Missed or incorrect selections are gently highlighted with the correct reasoning
- After all five scenarios, a "Relationship Detective!" caption appears

Instructional Rationale: This is an Understand-level objective (describe, interpret), so the design uses short worked scenarios with concrete, visible reasoning rather than an animated simulation, helping students connect the abstract "signs of healthy relationships" list to real situations.

Implementation notes: Use p5.js. Keep scenarios warm, age-appropriate, and free of any physical danger content — this MicroSim addresses everyday friendship and family situations, not abuse or crisis situations. This MicroSim is the direct student-facing practice activity for this K-3 band.
```

## Related Resources

- [Chapter 5: Relationships And Respect](../../bands/grade-3/chapters/05-relationships-and-respect/index.md)
