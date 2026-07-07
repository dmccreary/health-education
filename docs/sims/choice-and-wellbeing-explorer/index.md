---
title: Choice and Wellbeing Explorer
description: Students explain how everyday personal choices affect mental and emotional wellbeing by adjusting sliders for common daily choices and observing a simple wellbeing meter respond.
image: /sims/choice-and-wellbeing-explorer/choice-and-wellbeing-explorer.png
og:image: /sims/choice-and-wellbeing-explorer/choice-and-wellbeing-explorer.png
twitter:image: /sims/choice-and-wellbeing-explorer/choice-and-wellbeing-explorer.png
social:
   cards: false
library: p5.js
bloom_level: Understand (L2)
grade_band: Grade 3
---

# Choice and Wellbeing Explorer

<iframe src="main.html" width="100%" height="489px" scrolling="no"></iframe>

[Run the Choice and Wellbeing Explorer MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="489px" scrolling="no"></iframe>
```

## About this MicroSim

**Choice and Wellbeing Explorer** is an interactive MicroSim for this health-education textbook.

Students explain how everyday personal choices affect mental and emotional wellbeing by adjusting sliders for common daily choices and observing a simple wellbeing meter respond.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Understand (L2) — explain, describe, interpret

## Lesson Plan

### Audience

This MicroSim is designed for **Grade 3**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students explain how everyday personal choices affect mental and emotional wellbeing by adjusting sliders for common daily choices and observing a simple wellbeing meter respond.

This activity targets **Bloom's Understand (L2)** (explain, describe, interpret).

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
[Chapter 7: Mental And Emotional Health](../../bands/grade-3/chapters/07-mental-and-emotional-health/index.md).

```text
Type: microsim
**sim-id:** choice-and-wellbeing-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain, describe, interpret

Learning objective: Students explain how everyday personal choices affect mental and emotional wellbeing by adjusting sliders for common daily choices and observing a simple wellbeing meter respond.

Canvas layout: Left side (350px) has four labeled sliders — Hours of Sleep (4-10), Time Being Active (0-60 min), Time Talking With Someone Caring (0-30 min), Quiet Screen-Free Time (0-30 min). Right side (250px) shows a semicircle "Wellbeing Meter" gauge with a needle moving from "Running on Empty" (red) to "Feeling Good" (green), plus a short explanation text box.

Interactive controls: Four draggable sliders; a "Reset to Example Day" button.

Default parameters: Sleep 7 hours, Active 20 min, Talking 10 min, Quiet time 10 min — meter starts in the middle "Okay" zone.

Data Visibility Requirements: As a student drags any slider up, the needle moves toward green and a one-sentence plain-language reason appears (e.g., "More sleep helps your brain rest and reset."). Dragging down moves the needle toward red with a matching reason. No single slider can max the meter alone, reinforcing that wellbeing comes from combined healthy choices.

Instructional Rationale: Understand-level objective, so the design favors direct manipulation with immediate, concrete feedback over any competitive or scored element.

Implementation notes: Use p5.js. Keep reasons short, reassuring, and non-judgmental.
```

## References

- [Chapter 7: Mental And Emotional Health](../../bands/grade-3/chapters/07-mental-and-emotional-health/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
