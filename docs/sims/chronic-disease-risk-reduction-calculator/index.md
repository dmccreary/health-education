---
title: Chronic Disease Risk Reduction Calculator
description: Students evaluate how combinations of prevention
image: /sims/chronic-disease-risk-reduction-calculator/chronic-disease-risk-reduction-calculator.png
og:image: /sims/chronic-disease-risk-reduction-calculator/chronic-disease-risk-reduction-calculator.png
twitter:image: /sims/chronic-disease-risk-reduction-calculator/chronic-disease-risk-reduction-calculator.png
social:
   cards: false
library: p5.js
bloom_level: Evaluate (L5)
grade_band: Grades 9-12
---

# Chronic Disease Risk Reduction Calculator

<iframe src="main.html" width="100%" height="457px" scrolling="no"></iframe>

[Run the Chronic Disease Risk Reduction Calculator MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="457px" scrolling="no"></iframe>
```

## About this MicroSim

**Chronic Disease Risk Reduction Calculator** is an interactive MicroSim for this health-education textbook.

Students evaluate how combinations of prevention

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Evaluate (L5) — assess, justify, recommend

## Lesson Plan

### Audience

This MicroSim is designed for **Grades 9-12**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students evaluate how combinations of prevention

This activity targets **Bloom's Evaluate (L5)** (assess, justify, recommend).

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
**Evaluate**-level objective rather than a lucky guess.

## Specification

The full specification below was extracted from
[Chapter 8: Health Equity and Disease Prevention](../../bands/grade-9-12/chapters/08-health-equity-and-disease-prevention/index.md).

```text
Type: microsim

**sim-id:** chronic-disease-risk-reduction-calculator<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy Level: Evaluate (L5)
Bloom Verb: assess, justify, recommend

Learning objective: Students evaluate how combinations of prevention
strategies (nutrition quality, physical activity, tobacco/alcohol
avoidance, routine screening, stress/sleep management) affect a
simplified composite chronic disease risk indicator, and justify a
realistic personal prevention plan.

Canvas layout:
- Left (55%): five toggle switches, one per strategy, each with three
  levels (Low, Moderate, Strong adherence)
- Right (45%): a composite risk-indicator gauge (illustrative, not a
  medical diagnostic tool) that updates as toggles change, plus a text box
  for the student to justify their chosen combination

Data Visibility Requirements:
  Stage 1: Show all five toggles at "Low" adherence with the composite
  gauge at its highest illustrative risk level
  Stage 2: Student adjusts toggles; the gauge recalculates in real time
  using simple additive weighting, with a clear on-screen label: "This
  gauge illustrates relative risk patterns from population research — it
  is not a personal medical prediction"
  Stage 3: Student writes a one-to-two sentence justification for a
  realistic combination given a stated constraint (e.g., limited time for
  exercise due to a part-time job)
  Stage 4: Reveal a model justification highlighting that screening and
  sleep are often the most overlooked, lowest-barrier strategies

Interactive controls:
- Five three-level toggle switches
- Text input: justification
- Button: "Check My Reasoning"
- Button: "Reset"

Default parameters: All toggles start at Low adherence

Instructional Rationale: Justifying a realistic combination of prevention
strategies under real constraints is an Evaluate-level task, so a
parameter-exploration gauge paired with a justification prompt is used
rather than a simple checklist of recommended behaviors.

Implementation notes: p5.js; composite gauge computed from a transparent,
documented weighted sum, explicitly labeled as illustrative; disclaimer
text persistent on screen.
```

## References

- [Chapter 8: Health Equity and Disease Prevention](../../bands/grade-9-12/chapters/08-health-equity-and-disease-prevention/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
