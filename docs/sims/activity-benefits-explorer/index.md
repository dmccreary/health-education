---
title: How Moving Your Body Helps You
description: Students explain the benefits of regular physical activity for the body, mood, and learning by exploring a labeled figure and matching activities to the benefits they produce.
image: /sims/activity-benefits-explorer/activity-benefits-explorer.png
og:image: /sims/activity-benefits-explorer/activity-benefits-explorer.png
twitter:image: /sims/activity-benefits-explorer/activity-benefits-explorer.png
social:
   cards: false
library: p5.js
bloom_level: Understand (L2)
grade_band: Grade 3
---

# How Moving Your Body Helps You

<iframe src="main.html" width="100%" height="477px" scrolling="no"></iframe>

[Run the How Moving Your Body Helps You MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="477px" scrolling="no"></iframe>
```

## About this MicroSim

**How Moving Your Body Helps You** is an interactive MicroSim for this health-education textbook.

Students explain the benefits of regular physical activity for the body, mood, and learning by exploring a labeled figure and matching activities to the benefits they produce.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Understand (L2) — explain, summarize

## Lesson Plan

### Audience

This MicroSim is designed for **Grade 3**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students explain the benefits of regular physical activity for the body, mood, and learning by exploring a labeled figure and matching activities to the benefits they produce.

This activity targets **Bloom's Understand (L2)** (explain, summarize).

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
[Chapter 3: Wellness And Activity](../../bands/grade-3/chapters/03-wellness-and-activity/index.md).

```text
Type: microsim
**sim-id:** activity-benefits-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain, summarize

Learning objective: Students explain the benefits of regular physical activity for the body, mood, and learning by exploring a labeled figure and matching activities to the benefits they produce.

Canvas layout:
- Left side (400px): A simple illustrated figure of a child in mid-activity (running), with four labeled zones: head/brain, chest/heart, muscles, and a small "zzz" cloud for sleep
- Right side (200px): Activity picker and revealed-benefit text panel

Visual elements:
- Four clickable body zones on the figure (brain, heart, muscles, sleep cloud)
- A row of activity icons below: running, biking, dancing, swimming, playing outside

Interactive controls:
- Click a body zone to reveal the matching benefit in the side panel
- Click an activity icon to see which zones light up for that activity
- Button: "Reset"

Default parameters:
- No zone selected at start; a gentle pulsing highlight invites the student to click the heart zone first

Data Visibility Requirements:
  Stage 1: Show the still figure with all four zones outlined but unlabeled
  Stage 2: When a zone is clicked, show the zone's name and a one-sentence benefit (e.g., "Brain: Physical activity helps you focus and remember things better in school.")
  Stage 3: When an activity icon is clicked, highlight all zones that activity benefits, showing that most activities help more than one part at once

Behavior:
- Clicking a zone highlights it and displays its benefit text in the panel
- Clicking an activity animates the figure briefly (a simple walk-cycle style loop) and highlights the relevant zones
- All four zones must be visited at least once before a small "You found them all!" caption appears

Instructional Rationale: This is an Understand-level objective (explain, summarize), so the design uses a labeled, click-to-reveal figure with concrete text rather than continuous animation — students need to see and read the specific benefit tied to each body zone, matching the data-visibility approach recommended for Understand-level MicroSims.

Implementation notes: Use p5.js. Keep the figure simple and friendly (flat cartoon style). Because Grade 3 is still building reading independence, keep revealed text short (one sentence) and consider an optional read-aloud audio icon next to each benefit.
```

## References

- [Chapter 3: Wellness And Activity](../../bands/grade-3/chapters/03-wellness-and-activity/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
