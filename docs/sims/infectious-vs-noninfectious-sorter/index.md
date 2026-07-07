---
title: Infectious vs Non-Infectious Sorter
description: Students differentiate infectious from non-infectious diseases by sorting example illnesses into the correct category and reviewing the reasoning for each.
image: /sims/infectious-vs-noninfectious-sorter/infectious-vs-noninfectious-sorter.png
og:image: /sims/infectious-vs-noninfectious-sorter/infectious-vs-noninfectious-sorter.png
twitter:image: /sims/infectious-vs-noninfectious-sorter/infectious-vs-noninfectious-sorter.png
social:
   cards: false
library: p5.js
bloom_level: Analyze (L4)
grade_band: Grade 4
---

# Infectious vs Non-Infectious Sorter

<iframe src="main.html" width="100%" height="474px" scrolling="no"></iframe>

[Run the Infectious vs Non-Infectious Sorter MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="474px" scrolling="no"></iframe>
```

## About this MicroSim

**Infectious vs Non-Infectious Sorter** is an interactive MicroSim for this health-education textbook.

Students differentiate infectious from non-infectious diseases by sorting example illnesses into the correct category and reviewing the reasoning for each.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Analyze (L4) — differentiate, classify, distinguish

## Lesson Plan

### Audience

This MicroSim is designed for **Grade 4**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students differentiate infectious from non-infectious diseases by sorting example illnesses into the correct category and reviewing the reasoning for each.

This activity targets **Bloom's Analyze (L4)** (differentiate, classify, distinguish).

### Suggested Use (about 10 minutes)

1. **Warm up (2 min).** Ask students what they already know about the topic
   and let one volunteer describe what they see on the screen.
2. **Model it (3 min).** Demonstrate the interaction once, thinking aloud so
   students hear the reasoning behind each choice.
3. **Guided practice (3 min).** Invite students to try the interaction and to
   predict what will happen before they act.
4. **Discuss (2 min).** Ask *why* the result came out the way it did, connecting
   the on-screen result back to the learning objective above.

### Check for Understanding

Have each student (or pair) explain their result in one sentence, using the
vocabulary from this chapter. Look for reasoning that matches the
**Analyze**-level objective rather than a lucky guess.

## Specification

The full specification below was extracted from
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

## References

- [Chapter 5: Wellness and Disease Prevention](../../bands/grade-4/chapters/05-wellness-and-disease-prevention/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
