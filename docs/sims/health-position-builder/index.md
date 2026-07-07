---
title: Health Position Builder
description: Students construct a complete health position by assembling a claim, matching evidence, and connecting reasoning from provided research snippets on a sample health topic.
status: scaffold
library: p5.js
bloom_level: Create (L6)
---

# Health Position Builder



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 6: Health Literacy and Goal Setting](../../bands/grade-4/chapters/06-health-literacy-and-goals/index.md).

```text
Type: microsim
**sim-id:** health-position-builder<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Create (L6)
Bloom Taxonomy Verb: construct, formulate, compose

Learning objective: Students construct a complete health position by assembling a claim, matching evidence, and connecting reasoning from provided research snippets on a sample health topic.

Canvas layout:
- Top (150px): A research topic prompt and three short "research snippet" cards from different sample sources
- Middle (250px): Three labeled build slots: "Claim," "Evidence," "Reasoning"
- Bottom (150px): A bank of draggable sentence-part tiles (some correct, some mismatched as distractors) plus a "Check My Position" button

Visual elements:
- Research snippet cards styled like small index cards with a source icon (doctor, health agency, community member)
- Build slots outlined in a light color that fills in green when a valid tile is placed correctly

Interactive controls:
- Drag sentence-part tiles into the Claim, Evidence, or Reasoning slot
- Button: "Check My Position" reveals whether each slot logically fits and why
- Button: "Try a New Topic" loads a different sample scenario (e.g., screen-time limits, school recess length)
- Button: "Reset"

Default parameters:
- 3 rotating sample topics, each with 3 research snippets and a mix of correct and mismatched tiles
- Starting topic: the school food-allergy rule example

Data Visibility Requirements:
  Stage 1: Show the topic question and the three research snippets in full
  Stage 2: Show the three empty build slots and the tile bank
  Stage 3: After "Check My Position" is clicked, show which slots are logically supported by the snippets and which need revision, with a one-sentence reason for each
  Final: Show the complete, correctly assembled Claim-Evidence-Reasoning position as a single readable statement

Behavior:
- Distractor tiles are plausible-sounding but do not logically connect to the snippets, requiring learners to check fit rather than guess
- Every check gives a reason, not just correct/incorrect marking

Instructional Rationale: This is a Create-level objective, so the design requires learners to actively assemble an original position from component parts rather than select a pre-written answer. Distractor tiles push learners to verify logical fit against the evidence, mirroring real research-based argument construction.

Implementation notes: Use p5.js for drag-and-drop tiles and slot-matching logic. Keep sample topics realistic, age-appropriate, and unrelated to personal safety or substance use.
```

## Related Resources

- [Chapter 6: Health Literacy and Goal Setting](../../bands/grade-4/chapters/06-health-literacy-and-goals/index.md)
