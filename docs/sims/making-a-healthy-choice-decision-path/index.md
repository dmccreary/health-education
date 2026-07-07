---
title: Making a Healthy Choice Decision Path
description: Students explain the steps of making a health decision — noticing the influence, thinking about the choice, and asking for help if needed — using a step-through walkthrough with a concrete, relatable scenario.
status: scaffold
library: p5.js
bloom_level: Understand (L2)
---

# Making a Healthy Choice Decision Path



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 7: Getting Help and Making Healthy Choices](../../bands/grade-1/chapters/07-help-and-decisions/index.md).

```text
Type: microsim
**sim-id:** making-a-healthy-choice-decision-path<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain, describe, summarize

Learning objective: Students explain the steps of making a health decision — noticing the influence, thinking about the choice, and asking for help if needed — using a step-through walkthrough with a concrete, relatable scenario.

Canvas layout:
- Left area (450px): One decision-path scene per step, shown one at a time
- Right area (150px): "Next Step" and "Previous Step" buttons, a step counter ("Step 2 of 4"), and an infobox

Visual elements:
- Step 1: A student is offered a sugary snack by a friend at lunch (the influence)
- Step 2: A thought bubble shows the student asking, "Is this a positive or negative influence on my choice right now?"
- Step 3: A thought bubble shows the student deciding, "I can choose the fruit instead," or "I'm not sure — I could ask a trusted adult."
- Step 4: The student makes the healthy choice and feels proud

Interactive controls:
- Button: "Next Step" (advances to the next scene)
- Button: "Previous Step" (returns to the prior scene)
- Step counter always visible

Default parameters:
- Starts at Step 1 (the influence is introduced)

Data Visibility Requirements:
  Stage 1: Show the snack offer and caption: "A friend offers you a sugary snack every day at lunch."
  Stage 2: Show the thinking step and caption: "Notice the influence — is it helping or making the choice harder?"
  Stage 3: Show the decision step and caption: "Decide what to do, or ask a trusted adult if you're not sure."
  Stage 4: Show the outcome and caption: "You made a health decision that supports your body."

Behavior:
- Each click of "Next Step" reveals the next scene and caption; "Previous Step" allows review
- A closing caption after Step 4 reads: "Every health decision follows this same path: notice the influence, think it through, ask for help if you need it, then choose."

Instructional Rationale: This is an Understand-level (explain/describe) objective, so the MicroSim uses a step-through walkthrough with a concrete scenario rather than continuous animation, letting students trace the full decision path in order and connect it back to the influence and help-seeking concepts already taught in this chapter.

Implementation notes: Use p5.js. Keep the scenario everyday and low-stakes (food choice), since Grade 1 health decisions should stay concrete and relatable rather than abstract.
```

## Related Resources

- [Chapter 7: Getting Help and Making Healthy Choices](../../bands/grade-1/chapters/07-help-and-decisions/index.md)
