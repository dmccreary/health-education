---
title: Health Resource Accessibility Checklist
description: Evaluate a given health resource scenario against six
image: /sims/health-resource-accessibility-checklist/health-resource-accessibility-checklist.png
og:image: /sims/health-resource-accessibility-checklist/health-resource-accessibility-checklist.png
twitter:image: /sims/health-resource-accessibility-checklist/health-resource-accessibility-checklist.png
social:
   cards: false
library: p5.js
bloom_level: Evaluate<br/>
grade_band: Grades 9-12
---

# Health Resource Accessibility Checklist

<iframe src="main.html" width="100%" height="504px" scrolling="no"></iframe>

[Run the Health Resource Accessibility Checklist MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="504px" scrolling="no"></iframe>
```

## About this MicroSim

**Health Resource Accessibility Checklist** is an interactive MicroSim for this health-education textbook.

Evaluate a given health resource scenario against six

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Evaluate<br/> — assess, judge

## Lesson Plan

### Audience

This MicroSim is designed for **Grades 9-12**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Evaluate a given health resource scenario against six

This activity targets **Bloom's Evaluate<br/>** (assess, judge).

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
[Chapter 13: Influences on Health Behavior](../../bands/grade-9-12/chapters/13-influences-on-health-behavior/index.md).

```text
Type: infographic

**sim-id:** health-resource-accessibility-checklist<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Evaluate<br/>
Bloom Taxonomy Verb: assess, judge

Learning objective: Evaluate a given health resource scenario against six
accessibility dimensions (cost, location/transportation, hours,
confidentiality, language/cultural fit, digital access) and reach an overall
accessibility judgment.

Purpose: Let learners drag a scenario card (e.g., "school-based health
clinic," "rural telehealth mental health service," "urban Planned
Parenthood-style clinic," "tribal health center") onto a six-spoke radar
chart and rate each spoke 1 (low) to 5 (high) accessibility based on
provided scenario facts, then see a computed overall accessibility score.

Layout: Radar/spider chart with six axes, one per accessibility dimension;
scenario selector above; computed composite score and short written
rationale panel to the right.

Interactive elements: Click a scenario to load its facts; drag each axis
point to a 1-5 rating; a "Compare" toggle overlays two scenarios at once so
learners can see which is more accessible and on which specific dimension.

Data to display: 4 preset scenarios with embedded facts (cost, hours,
transit availability, confidentiality law, language services, digital
requirement) that justify a "correct range" rating band per axis, used for
feedback, not a single rigid right answer.

Color coding: Green wedge (high accessibility, 4-5), yellow (moderate, 2-3),
red (low, 0-1).

Responsive behavior: Chart resizes to container width; radar redraws on
window resize.

Implementation: p5.js custom radar chart component.
```

## References

- [Chapter 13: Influences on Health Behavior](../../bands/grade-9-12/chapters/13-influences-on-health-behavior/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
