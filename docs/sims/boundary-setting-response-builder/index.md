---
title: Boundary-Setting Response Builder
description: Students apply boundary-setting strategies by choosing and sequencing an effective response to a realistic peer-pressure scenario, including digital-pressure scenarios.
image: /sims/boundary-setting-response-builder/boundary-setting-response-builder.png
og:image: /sims/boundary-setting-response-builder/boundary-setting-response-builder.png
twitter:image: /sims/boundary-setting-response-builder/boundary-setting-response-builder.png
social:
   cards: false
library: p5.js
bloom_level: Apply (L3)
grade_band: Grades 6-8
---

# Boundary-Setting Response Builder

<iframe src="main.html" width="100%" height="514px" scrolling="no"></iframe>

[Run the Boundary-Setting Response Builder MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="514px" scrolling="no"></iframe>
```

## About this MicroSim

**Boundary-Setting Response Builder** is an interactive MicroSim for this health-education textbook.

Students apply boundary-setting strategies by choosing and sequencing an effective response to a realistic peer-pressure scenario, including digital-pressure scenarios.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Apply (L3) — demonstrate, practice, apply

## Lesson Plan

### Audience

This MicroSim is designed for **Grades 6-8**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students apply boundary-setting strategies by choosing and sequencing an effective response to a realistic peer-pressure scenario, including digital-pressure scenarios.

This activity targets **Bloom's Apply (L3)** (demonstrate, practice, apply).

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
[Chapter 7: Digital Safety and School Safety](../../bands/grade-6-8/chapters/07-digital-safety-and-school-safety/index.md).

```text
Type: microsim
**sim-id:** boundary-setting-response-builder<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: demonstrate, practice, apply

Learning objective: Students apply boundary-setting strategies by choosing and sequencing an effective response to a realistic peer-pressure scenario, including digital-pressure scenarios.

Canvas layout: Left side (450px) shows a scenario prompt (e.g., "A group chat keeps pressuring you to send a photo you don't want to send") with a response-building area. Right side (150px) shows a palette of response-phrase tokens (e.g., "No, I'm not doing that," "I already said no," "leave the group chat," "tell a trusted adult," "keep arguing until they stop") and a feedback panel.

Interactive controls: Drag response tokens into the response-building area in the order the student would use them; "Check My Response" button evaluates whether the sequence reflects sound boundary-setting strategy (clear statement, calm repetition if needed, use of digital tools or exit, and involving a trusted adult when appropriate); "Reset" button; "See a Strong Example Response" button.

Default parameters: Empty response area at start; six scenarios cycle through, ranging from in-person to digital-only pressure.

Instructional Rationale: Applying boundary-setting strategy to a realistic pressure scenario by constructing a response sequence is an Apply-level task, so a response-builder with constraint feedback is used rather than a passive list of tips, letting students practice sequencing a real response.

Implementation notes: p5.js. Scenario and token data stored as arrays of objects. Responsive canvas that reflows on window resize. No scenario content depicts explicit imagery or graphic threats.
```

## References

- [Chapter 7: Digital Safety and School Safety](../../bands/grade-6-8/chapters/07-digital-safety-and-school-safety/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
