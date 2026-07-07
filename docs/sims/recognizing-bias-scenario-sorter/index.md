---
title: Recognizing Bias in Everyday Scenarios
description: Students analyze short, realistic classroom scenarios to distinguish between a fair, evidence-based judgment and a biased assumption made with limited information.
status: scaffold
library: p5.js
bloom_level: Analyze (L4)
---

# Recognizing Bias in Everyday Scenarios



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 3: Mental and Emotional Health](../../bands/grade-4/chapters/03-mental-emotional-health/index.md).

```text
Type: microsim
**sim-id:** recognizing-bias-scenario-sorter<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: examine, distinguish, differentiate

Learning objective: Students analyze short, realistic classroom scenarios to distinguish between a fair, evidence-based judgment and a biased assumption made with limited information.

Canvas layout:
- Top (400px): A scenario card describing a short classroom situation
- Bottom (150px): Two labeled zones, "Fair Judgment" and "Biased Assumption," and one scenario card that the student drags to the correct zone

Visual elements:
- Neutral scenario icons only (no depictions of specific people's appearance)
- A calm color scheme: blue for "Fair Judgment" zone, soft amber for "Biased Assumption" zone (avoid red/wrong-answer coding, since the goal is reflection, not scorekeeping)

Interactive controls:
- Drag-and-drop scenario card into one of the two zones
- Button: "Next Scenario"
- Button: "Why?" to reveal an explanation after sorting

Default parameters:
- 8 scenario cards total, presented one at a time in random order

Data Visibility Requirements:
  Stage 1: Show the full scenario text
  Stage 2: Show the two sorting zones
  Stage 3: After sorting, show a calm explanation of why the scenario is a fair judgment (based on direct evidence) or a biased assumption (based on a stereotype or limited information)
  Final: Show how many scenarios were correctly identified, with an option to review any missed ones

Behavior:
- Correct sort: brief affirming message plus the explanation
- Incorrect sort: gentle correction plus the same explanation, framed as a learning moment rather than a failure

Instructional Rationale: This is an Analyze-level objective requiring learners to examine scenarios and distinguish evidence-based judgments from biased assumptions. A sorting interaction with reflection-based feedback (rather than a scored quiz) keeps the tone appropriate for this sensitive topic.

Implementation notes: Use p5.js. Keep all scenario text realistic, respectful, and focused on assumptions about ability, interests, or behavior rather than physical appearance or protected characteristics, to keep content classroom-appropriate for this age group.
```

## Related Resources

- [Chapter 3: Mental and Emotional Health](../../bands/grade-4/chapters/03-mental-emotional-health/index.md)
