---
title: Infectious vs Non-Infectious Sorter
description: Students differentiate infectious from non-infectious diseases by sorting example illnesses into the correct category and reviewing the reasoning for each.
status: scaffold
library: p5.js
bloom_level: Analyze (L4)
---

# Infectious vs Non-Infectious Sorter



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 5: Wellness and Disease Prevention](../../bands/grade-4/chapters/05-wellness-and-disease-prevention/index.md).

```text
Type: microsim
**sim-id:** infectious-vs-noninfectious-sorter<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: differentiate, classify, distinguish

Learning objective: Students differentiate infectious from non-infectious diseases by sorting example illnesses into the correct category and reviewing the reasoning for each.

Canvas layout:
- Top (300px): A card naming one illness (e.g., "Chickenpox," "Asthma," "Strep Throat," "Diabetes")
- Bottom (200px): Two zones, "Infectious" and "Non-Infectious," plus a "Why?" button

Visual elements:
- Simple icon per illness card (a germ icon for infectious examples, a body-outline icon for non-infectious examples — icons only appear after sorting, not before, so students must reason it out)
- Color-coded zones: teal for Infectious, purple for Non-Infectious

Interactive controls:
- Drag-and-drop the illness card into a zone
- Button: "Why?" reveals a short explanation of the cause after sorting
- Button: "Next Illness"

Default parameters:
- 8 illness cards cycling in random order: cold, flu, strep throat, chickenpox, asthma, diabetes, seasonal allergies-triggered asthma flare, mild eczema

Data Visibility Requirements:
  Stage 1: Show the illness name only, no icon
  Stage 2: Show the two sorting zones
  Stage 3: After sorting, reveal the icon and a short explanation of the cause (germ vs. genetics/environment/lifestyle)
  Final: Show a summary of all 8 illnesses sorted correctly, grouped under their categories

Behavior:
- Every sort is followed by an explanation regardless of correctness, reinforcing the "caused by a germ" test as the key distinguishing question

Instructional Rationale: This is an Analyze-level objective requiring learners to examine each illness and distinguish it by cause and spreadability rather than by memorized lists. Sorting with full explanations builds the underlying reasoning pattern (ask: "Is a germ causing this, and can it spread to someone else?").

Implementation notes: Use p5.js. Keep illness descriptions simple and non-alarming; focus on the cause-and-spread distinction rather than detailed medical symptoms.
```

## Related Resources

- [Chapter 5: Wellness and Disease Prevention](../../bands/grade-4/chapters/05-wellness-and-disease-prevention/index.md)
