---
title: Emotion Regulation Strategy Selector
description: Students apply the most appropriate emotion management
image: /sims/emotion-regulation-strategy-selector/emotion-regulation-strategy-selector.png
og:image: /sims/emotion-regulation-strategy-selector/emotion-regulation-strategy-selector.png
twitter:image: /sims/emotion-regulation-strategy-selector/emotion-regulation-strategy-selector.png
social:
   cards: false
library: p5.js
bloom_level: Apply (L3)
grade_band: Grades 9-12
---

# Emotion Regulation Strategy Selector

<iframe src="main.html" width="100%" height="486px" scrolling="no"></iframe>

[Run the Emotion Regulation Strategy Selector MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="486px" scrolling="no"></iframe>
```

## About this MicroSim

**Emotion Regulation Strategy Selector** is an interactive MicroSim for this health-education textbook.

Students apply the most appropriate emotion management

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Apply (L3) — apply, demonstrate, practice

## Lesson Plan

### Audience

This MicroSim is designed for **Grades 9-12**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students apply the most appropriate emotion management

This activity targets **Bloom's Apply (L3)** (apply, demonstrate, practice).

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
**Apply**-level objective rather than a lucky guess.

## Specification

The full specification below was extracted from
[Chapter 6: Conflict Resolution and Inclusion](../../bands/grade-9-12/chapters/06-conflict-resolution-and-inclusion/index.md).

```text
Type: microsim

**sim-id:** emotion-regulation-strategy-selector<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy Level: Apply (L3)
Bloom Verb: apply, demonstrate, practice

Learning objective: Students apply the most appropriate emotion management
strategy (paced breathing, cognitive reframing, deliberate pause, or
grounding) to a set of realistic emotionally charged scenarios.

Canvas layout:
- Left (55%): a short scenario describing an emotionally intense moment
  (e.g., feeling humiliated after a public correction, feeling panicked
  before a hard conversation)
- Right (45%): four strategy cards (Paced Breathing, Cognitive Reframing,
  Deliberate Pause, Grounding) with one-line descriptions

Data Visibility Requirements:
  Stage 1: Show the scenario and all four strategy cards with brief
  descriptions
  Stage 2: Student selects which strategy fits best
  Stage 3: Reveal an explanation of why that strategy fits (or why a
  different strategy might fit better), tied to the specific emotional and
  situational cues in the scenario
  Stage 4: Show a running count of scenarios completed out of a bank of 8

Interactive controls:
- Click to select a strategy card
- Button: "Show Explanation"
- Button: "Next Scenario"

Default parameters: Scenario bank cycles without repetition until
exhausted, then reshuffles; more than one strategy may be defensible for a
given scenario, with the explanation acknowledging this

Instructional Rationale: Matching a management technique to a concrete
emotional scenario is an Apply-level objective, so a scenario-based
selection tool with explanatory feedback is used rather than passive
description of the four strategies.

Implementation notes: p5.js with an object array of {scenario, bestFit,
explanation, acceptableAlternates}; explanations acknowledge legitimate
overlap between strategies rather than presenting a single rigid answer.
```

## References

- [Chapter 6: Conflict Resolution and Inclusion](../../bands/grade-9-12/chapters/06-conflict-resolution-and-inclusion/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
