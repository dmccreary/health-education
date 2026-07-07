---
title: Depression Symptom and Cause Explorer
description: Students classify a set of realistic scenario
image: /sims/depression-symptom-cause-explorer/depression-symptom-cause-explorer.png
og:image: /sims/depression-symptom-cause-explorer/depression-symptom-cause-explorer.png
twitter:image: /sims/depression-symptom-cause-explorer/depression-symptom-cause-explorer.png
social:
   cards: false
library: p5.js
bloom_level: Understand (L2)
grade_band: Grades 9-12
---

# Depression Symptom and Cause Explorer

<iframe src="main.html" width="100%" height="494px" scrolling="no"></iframe>

[Run the Depression Symptom and Cause Explorer MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="494px" scrolling="no"></iframe>
```

## About this MicroSim

**Depression Symptom and Cause Explorer** is an interactive MicroSim for this health-education textbook.

Students classify a set of realistic scenario

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Understand (L2) — explain, classify, summarize

## Lesson Plan

### Audience

This MicroSim is designed for **Grades 9-12**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students classify a set of realistic scenario

This activity targets **Bloom's Understand (L2)** (explain, classify, summarize).

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
**Understand**-level objective rather than a lucky guess.

## Specification

The full specification below was extracted from
[Chapter 5: Mental Health and Crisis Support](../../bands/grade-9-12/chapters/05-mental-health-and-crisis-support/index.md).

```text
Type: infographic

**sim-id:** depression-symptom-cause-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy Level: Understand (L2)
Bloom Verb: explain, classify, summarize

Learning objective: Students classify a set of realistic scenario
descriptions as consistent with clinical depression symptoms versus
ordinary, temporary low mood, and explain which contributing factor
(genetics, brain chemistry, life stressors, trauma, chronic illness) is
most relevant to a given scenario.

Canvas layout:
- Left (55%): seven labeled symptom cards (persistent sadness, loss of
  interest, sleep changes, appetite changes, fatigue, concentration
  difficulty, feelings of worthlessness) shown as reference material
- Right (45%): a scenario card describing a short, realistic situation and
  two buttons, "Consistent With Depression" and "Ordinary, Temporary Low
  Mood"

Data Visibility Requirements:
  Stage 1: Show all seven symptom cards with one-sentence clinical
  definitions
  Stage 2: Show one scenario from a bank of 12 (mixing genuine
  multi-symptom, multi-week patterns with one-off disappointments)
  Stage 3: After the learner classifies the scenario, show whether they
  were correct, which symptoms are present if any, and which contributing
  factor is most relevant
  Stage 4: Track a running count of correctly classified scenarios

Interactive controls:
- Click any symptom card to see its expanded clinical definition
- Button: "Consistent With Depression" / Button: "Ordinary, Temporary Low
  Mood"
- Button: "Next Scenario"

Default parameters: Scenario bank cycles without repetition until
exhausted, then reshuffles

Instructional Rationale: Classifying scenarios against a defined symptom
set is an Understand-level objective, so step-through classification with
concrete scenarios is used rather than animation, helping students build
an accurate, non-stigmatizing mental model of what depression clinically
is and is not.

Implementation notes: p5.js with an object array of {scenario,
correctCategory, symptomsPresent, relevantFactor, explanation}; no imagery
depicting self-harm or crisis; text-based scenario cards only.
```

## References

- [Chapter 5: Mental Health and Crisis Support](../../bands/grade-9-12/chapters/05-mental-health-and-crisis-support/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
