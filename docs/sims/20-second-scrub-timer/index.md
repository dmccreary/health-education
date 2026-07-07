---
title: 20-Second Scrub Timer
description: Students practice the Handwashing routine by following along with a step-by-step, timed scrubbing sequence, reinforcing correct order and duration.
image: /sims/20-second-scrub-timer/20-second-scrub-timer.png
og:image: /sims/20-second-scrub-timer/20-second-scrub-timer.png
twitter:image: /sims/20-second-scrub-timer/20-second-scrub-timer.png
social:
   cards: false
library: p5.js
bloom_level: Apply (L3)
grade_band: Kindergarten
---

# 20-Second Scrub Timer

<iframe src="main.html" width="100%" height="482px" scrolling="no"></iframe>

[Run the 20-Second Scrub Timer MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="482px" scrolling="no"></iframe>
```

## About this MicroSim

**20-Second Scrub Timer** is an interactive MicroSim for this health-education textbook.

Students practice the Handwashing routine by following along with a step-by-step, timed scrubbing sequence, reinforcing correct order and duration.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Apply (L3) — practice, demonstrate

## Lesson Plan

### Audience

This MicroSim is designed for **Kindergarten**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students practice the Handwashing routine by following along with a step-by-step, timed scrubbing sequence, reinforcing correct order and duration.

This activity targets **Bloom's Apply (L3)** (practice, demonstrate).

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
[Chapter 4: Staying Healthy Every Day](../../bands/kindergarten/chapters/04-staying-healthy/index.md).

```text
Type: microsim
**sim-id:** 20-second-scrub-timer<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: practice, demonstrate

Learning objective: Students practice the Handwashing routine by following along with a step-by-step, timed scrubbing sequence, reinforcing correct order and duration.

Canvas layout:
- Top area (300px): A large friendly illustration of two cartoon hands being washed, with soap bubbles that increase as the timer runs
- Middle area (100px): A circular 20-second countdown ring that fills with color as time passes
- Bottom strip (100px): Large "Start Scrubbing!" button and a Reset button

Visual elements:
- Five numbered step icons (wet, soap, scrub, rinse, dry) displayed left to right, each lighting up in sequence as the sim progresses
- Bubble animation increases during the "scrub" step

Interactive controls:
- Button: "Start Scrubbing!" begins the timed sequence
- Button: "Reset" returns to the beginning
- Display: countdown ring and current step label read aloud by the teacher

Default parameters:
- Timer length: 20 seconds for the scrub step
- Steps advance automatically at realistic intervals (wet: 2s, soap: 2s, scrub: 20s, rinse: 3s, dry: 3s)

Behavior:
- When "Start Scrubbing!" is clicked, hands animate through each step while the step icon glows and a short label appears ("Now we scrub!")
- A cheerful chime plays at the end of the full sequence
- A celebration message appears: "Clean hands, healthy you! You scrubbed for the full 20 seconds."

Instructional Rationale: This is an Apply-level objective — children are practicing performing a real multi-step routine — so a step-through sequence with a visible timer is appropriate. Continuous unstructured animation would not reinforce the correct order or duration, which are the actual learning targets.

Implementation notes: Use p5.js. Represent the five steps as an ordered array with durations and labels. Keep all on-screen text large (26px+) and pair every step with an icon for pre-reader accessibility.
```

## References

- [Chapter 4: Staying Healthy Every Day](../../bands/kindergarten/chapters/04-staying-healthy/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
