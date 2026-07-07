---
title: Dementia Types Comparison Tool
description: Students differentiate Alzheimer's disease, vascular
image: /sims/dementia-types-comparison-tool/dementia-types-comparison-tool.png
og:image: /sims/dementia-types-comparison-tool/dementia-types-comparison-tool.png
twitter:image: /sims/dementia-types-comparison-tool/dementia-types-comparison-tool.png
social:
   cards: false
library: p5.js
bloom_level: Analyze (L4)
grade_band: Grades 9-12
---

# Dementia Types Comparison Tool

<iframe src="main.html" width="100%" height="502px" scrolling="no"></iframe>

[Run the Dementia Types Comparison Tool MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="502px" scrolling="no"></iframe>
```

## About this MicroSim

**Dementia Types Comparison Tool** is an interactive MicroSim for this health-education textbook.

Students differentiate Alzheimer's disease, vascular

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Analyze (L4) — differentiate, compare, examine

## Lesson Plan

### Audience

This MicroSim is designed for **Grades 9-12**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students differentiate Alzheimer's disease, vascular

This activity targets **Bloom's Analyze (L4)** (differentiate, compare, examine).

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
[Chapter 7: Brain Health, Sleep, and Emergency Care](../../bands/grade-9-12/chapters/07-brain-health-sleep-and-emergency-care/index.md).

```text
Type: infographic

**sim-id:** dementia-types-comparison-tool<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy Level: Analyze (L4)
Bloom Verb: differentiate, compare, examine

Learning objective: Students differentiate Alzheimer's disease, vascular
dementia, Lewy body dementia, and frontotemporal dementia by cause,
typical early symptoms, and progression pattern.

Layout: Four labeled columns, one per dementia type, each with three rows:
Underlying Cause, Typical Early Symptoms, Progression Pattern

Data Visibility Requirements:
  Stage 1: Show all four columns populated with the chapter's descriptions
  Stage 2: Clicking a column header opens an infobox with one additional
  respectful, factual detail about that type
  Stage 3: A short scenario describing a person's symptoms is shown, and
  the learner selects which dementia type it most closely resembles,
  reinforcing the distinguishing features
  Stage 4: Reveal explanation naming which specific detail in the
  scenario pointed to that type

Interactive controls: Click any column header for expanded detail; button
"Try a Scenario" reveals a symptom description and answer options; button
"Next Scenario" cycles through 3 scenarios

Instructional Rationale: Differentiating several related conditions by
their distinguishing features is an Analyze-level objective, so a
structured comparison with a scenario-matching check is used rather than
simple recall of a definition list.

Implementation notes: p5.js; content written in respectful, non-alarmist
language; no graphic or frightening imagery; scenario data stored as an
array of {symptoms, correctType, explanation} objects.
```

## References

- [Chapter 7: Brain Health, Sleep, and Emergency Care](../../bands/grade-9-12/chapters/07-brain-health-sleep-and-emergency-care/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
