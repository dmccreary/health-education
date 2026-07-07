---
title: Comprehensive Health Care Concept Map
description: Students describe the components of comprehensive adolescent health care and explain how they connect within a single system of care rather than existing as separate services.
image: /sims/comprehensive-health-care-concept-map/comprehensive-health-care-concept-map.png
og:image: /sims/comprehensive-health-care-concept-map/comprehensive-health-care-concept-map.png
twitter:image: /sims/comprehensive-health-care-concept-map/comprehensive-health-care-concept-map.png
social:
   cards: false
library: p5.js
bloom_level: Understand (L2)
grade_band: Grades 6-8
---

# Comprehensive Health Care Concept Map

<iframe src="main.html" width="100%" height="474px" scrolling="no"></iframe>

[Run the Comprehensive Health Care Concept Map MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="474px" scrolling="no"></iframe>
```

## About this MicroSim

**Comprehensive Health Care Concept Map** is an interactive MicroSim for this health-education textbook.

Students describe the components of comprehensive adolescent health care and explain how they connect within a single system of care rather than existing as separate services.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Understand (L2) — describe, explain, classify

## Lesson Plan

### Audience

This MicroSim is designed for **Grades 6-8**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students describe the components of comprehensive adolescent health care and explain how they connect within a single system of care rather than existing as separate services.

This activity targets **Bloom's Understand (L2)** (describe, explain, classify).

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
[Chapter 3: Healthcare Access and Sexual Health](../../bands/grade-6-8/chapters/03-healthcare-access-and-sexual-health/index.md).

```text
Type: infographic
**sim-id:** comprehensive-health-care-concept-map<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: describe, explain, classify

Learning objective: Students describe the components of comprehensive adolescent health care and explain how they connect within a single system of care rather than existing as separate services.

Layout: A central hub node labeled "Comprehensive Health Care" with four connected spokes: Preventive Care, Acute/Chronic Care, Mental and Emotional Health, Sexual and Reproductive Health.

Interactive elements: Click each spoke to open an infobox describing what that component includes and one example of a visit or service; a "Why Together?" center button explains why integrated care improves outcomes compared to fragmented care.

Instructional Rationale: Describing and classifying the components of a system is Understand-level, so a clickable concept map with explanatory infoboxes is used rather than an activity requiring judgment or synthesis.

Implementation notes: p5.js. Each spoke stored as an object with label, description, and example; central button toggles a static explanatory panel.
```

## References

- [Chapter 3: Healthcare Access and Sexual Health](../../bands/grade-6-8/chapters/03-healthcare-access-and-sexual-health/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
