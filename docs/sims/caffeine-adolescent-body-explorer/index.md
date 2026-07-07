---
title: Caffeine and the Adolescent Body Explorer
description: Students explain how caffeine affects four body systems (nervous system, sleep, cardiovascular system, mood) differently in adolescents compared to adults.
image: /sims/caffeine-adolescent-body-explorer/caffeine-adolescent-body-explorer.png
og:image: /sims/caffeine-adolescent-body-explorer/caffeine-adolescent-body-explorer.png
twitter:image: /sims/caffeine-adolescent-body-explorer/caffeine-adolescent-body-explorer.png
social:
   cards: false
library: p5.js
bloom_level: Understand (L2)
grade_band: Grades 6-8
---

# Caffeine and the Adolescent Body Explorer

<iframe src="main.html" width="100%" height="437px" scrolling="no"></iframe>

[Run the Caffeine and the Adolescent Body Explorer MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="437px" scrolling="no"></iframe>
```

## About this MicroSim

**Caffeine and the Adolescent Body Explorer** is an interactive MicroSim for this health-education textbook.

Students explain how caffeine affects four body systems (nervous system, sleep, cardiovascular system, mood) differently in adolescents compared to adults.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Understand (L2) — explain, describe, interpret

## Lesson Plan

### Audience

This MicroSim is designed for **Grades 6-8**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students explain how caffeine affects four body systems (nervous system, sleep, cardiovascular system, mood) differently in adolescents compared to adults.

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
[Chapter 1: Health Foundations and Nutrition](../../bands/grade-6-8/chapters/01-health-foundations-and-nutrition/index.md).

```text
Type: infographic
**sim-id:** caffeine-adolescent-body-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain, describe, interpret

Learning objective: Students explain how caffeine affects four body systems (nervous system, sleep, cardiovascular system, mood) differently in adolescents compared to adults.

Layout: A body outline with four labeled hotspots — brain (nervous system/sleep), heart (cardiovascular), stomach (absorption/timing), and a mood icon near the head.

Interactive elements: Click brain hotspot for the adenosine-blocking mechanism and the concrete detail that caffeine 6 hours before bed still reduces sleep quality; click heart hotspot for the heart-rate/blood-pressure effect and how added stimulants in energy drinks compound it; click mood icon for the anxiety/jitteriness explanation; slider "Hours Before Bedtime" (0-10) recalculates a sleep-quality indicator bar tied to the brain hotspot.

Data Visibility Requirements: Stage 1 shows caffeine's plain-language mechanism; Stage 2 shows the bedtime-slider sleep impact; Stage 3 shows the cardiovascular explanation; Stage 4 shows the mood explanation; Final shows adolescent-versus-adult sensitivity at the same dose.

Instructional Rationale: Explaining mechanisms and effects is Understand-level, so labeled hotspots with concrete, adjustable data (the sleep slider) are used instead of animation, keeping the physiology inspectable at the learner's own pace.

Implementation notes: p5.js. Each hotspot's explanation stored as text; the slider implemented as a simple linear function mapping hours-before-bed to a sleep-quality percentage.
```

## References

- [Chapter 1: Health Foundations and Nutrition](../../bands/grade-6-8/chapters/01-health-foundations-and-nutrition/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
