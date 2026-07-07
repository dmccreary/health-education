---
title: Match The Trusted Resource
description: Students determine which trusted adult or resource is needed for a range of health situations and justify the choice.
image: /sims/match-the-trusted-resource/match-the-trusted-resource.png
og:image: /sims/match-the-trusted-resource/match-the-trusted-resource.png
twitter:image: /sims/match-the-trusted-resource/match-the-trusted-resource.png
social:
   cards: false
library: p5.js
bloom_level: Evaluate (L5)
grade_band: Grade 5
---

# Match The Trusted Resource

<iframe src="main.html" width="100%" height="514px" scrolling="no"></iframe>

[Run the Match The Trusted Resource MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="514px" scrolling="no"></iframe>
```

## About this MicroSim

**Match The Trusted Resource** is an interactive MicroSim for this health-education textbook.

Students determine which trusted adult or resource is needed for a range of health situations and justify the choice.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Evaluate (L5) — determine, justify, recommend

## Lesson Plan

### Audience

This MicroSim is designed for **Grade 5**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students determine which trusted adult or resource is needed for a range of health situations and justify the choice.

This activity targets **Bloom's Evaluate (L5)** (determine, justify, recommend).

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
[Chapter 7: Health Skills And Goal Setting](../../bands/grade-5/chapters/07-health-skills-and-goal-setting/index.md).

```text
Type: microsim
**sim-id:** match-the-trusted-resource<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Evaluate (L5)
Bloom Taxonomy Verb: determine, justify, recommend

Learning objective: Students determine which trusted adult or resource is needed for a range of health situations and justify the choice.

Canvas layout: Left (450px) scenario card; right (200px) four resource buttons (School Nurse, Counselor, Parent/Guardian, Teacher) plus a "Why?" reveal panel.

Visual elements: Scenario card (e.g., "You've had a stomachache for three days and it's getting worse"); four resource option buttons.

Interactive controls: Click a resource button to answer; "Why?" reveals whether it was the best fit and explains the reasoning; "Next Situation" cycles through 8 scenarios spanning physical, emotional, relationship, and academic-safety situations.

Behavior: Selecting "School Nurse" for the stomachache scenario reveals "Right call — a school nurse can assess symptoms and help contact a parent or doctor if needed."

Instructional Rationale: Evaluate-level objective, so students must weigh several plausible resources and justify which one truly fits, rather than simply recalling one correct name.

Implementation notes: p5.js; scenario objects with best-fit resource id and justification string; allow partial credit reasoning for reasonable second-best choices.
```

## References

- [Chapter 7: Health Skills And Goal Setting](../../bands/grade-5/chapters/07-health-skills-and-goal-setting/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
