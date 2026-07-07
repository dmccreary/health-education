---
title: Allergy Response Decision Guide
description: Students apply allergy prevention and response knowledge by working through short scenarios and choosing the correct next step, reinforcing when a symptom requires telling an adult versus when it is a medical emergency.
status: scaffold
library: p5.js
bloom_level: Apply (L3)
---

# Allergy Response Decision Guide



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 5: Wellness and Disease Prevention](../../bands/grade-4/chapters/05-wellness-and-disease-prevention/index.md).

```text
Type: microsim
**sim-id:** allergy-response-decision-guide<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: demonstrate, use, practice

Learning objective: Students apply allergy prevention and response knowledge by working through short scenarios and choosing the correct next step, reinforcing when a symptom requires telling an adult versus when it is a medical emergency.

Canvas layout:
- Top (300px): A scenario card describing a short, realistic situation involving a possible allergic reaction
- Bottom (250px): Three response buttons: "Keep Watching," "Tell a Trusted Adult," "This Is an Emergency — Get Help Now"

Visual elements:
- Simple flat-illustration icons (a food item, an insect, a person with mild symptoms) matched to each scenario
- Color-coded feedback: green for correct match, soft amber for "close, but let's look again," with the correct answer always shown afterward

Interactive controls:
- Button per response option
- Button: "Next Scenario"
- Button: "Reset"

Default parameters:
- 6 scenarios cycling in random order, ranging from mild (itchy eyes after petting a friend's cat) to severe (swelling face and trouble breathing after a bee sting)

Data Visibility Requirements:
  Stage 1: Show the full scenario text and a simple icon
  Stage 2: Show the three response options
  Stage 3: After a choice, show whether it matches the recommended response and a short explanation of why
  Final: Show a summary of all scenarios reviewed, with the emergency-level ones flagged clearly

Behavior:
- Every choice reveals an explanation; the sim never simply marks an answer "wrong" without teaching the reasoning
- Emergency-level scenarios always confirm that "get help now" is correct, reinforcing that these symptoms cannot wait

Instructional Rationale: This is an Apply-level objective requiring learners to use allergy knowledge in realistic situations rather than just recall facts. Scenario-based decision practice builds the quick judgment needed in a real reaction, while guaranteed explanations keep the tone supportive rather than high-stakes.

Implementation notes: Use p5.js. Keep all scenarios realistic and age-appropriate; never depict a resolved outcome for the emergency scenarios other than "get an adult now," since this chapter's goal is building the correct fast response, not diagnosing.
```

## Related Resources

- [Chapter 5: Wellness and Disease Prevention](../../bands/grade-4/chapters/05-wellness-and-disease-prevention/index.md)
