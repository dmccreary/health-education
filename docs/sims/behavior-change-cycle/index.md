---
title: The Behavior-Change Cycle
description: Apply the four-step behavior-change cycle (evaluate
image: /sims/behavior-change-cycle/behavior-change-cycle.png
og:image: /sims/behavior-change-cycle/behavior-change-cycle.png
twitter:image: /sims/behavior-change-cycle/behavior-change-cycle.png
social:
   cards: false
library: Mermaid
bloom_level: Apply<br/>
grade_band: Grades 9-12
---

# The Behavior-Change Cycle

<iframe src="main.html" width="100%" height="525px" scrolling="no"></iframe>

[Run the The Behavior-Change Cycle MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="525px" scrolling="no"></iframe>
```

## About this MicroSim

**The Behavior-Change Cycle** is an interactive MicroSim for this health-education textbook.

Apply the four-step behavior-change cycle (evaluate

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Apply<br/> — use, demonstrate

## Lesson Plan

### Audience

This MicroSim is designed for **Grades 9-12**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Apply the four-step behavior-change cycle (evaluate

This activity targets **Bloom's Apply<br/>** (use, demonstrate).

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
[Chapter 15: Health Promotion and Behavior Change](../../bands/grade-9-12/chapters/15-health-promotion-and-behavior-change/index.md).

```text
Type: workflow

**sim-id:** behavior-change-cycle<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Bloom Taxonomy: Apply<br/>
Bloom Taxonomy Verb: use, demonstrate

Learning objective: Apply the four-step behavior-change cycle (evaluate
supports, evaluate barriers, adapt the behavior, evaluate impact) to a
realistic personal health practice, tracing how each step feeds the next.

Purpose: Give learners a persistent visual anchor for the cycle, using
Jordan's active-commute scenario as the worked example at every step, and
showing the cycle looping rather than ending.

Visual style: Mermaid flowchart, four sequential nodes arranged in a closed
loop; every node has a click handler.

Steps:
1. "Evaluate Supports" — click: "Jordan identifies what already helps: a
   safe sidewalk for most of the route, a bike, a friend who lives nearby
   and also wants to walk, and a school that allows early arrival."
2. "Evaluate Barriers" — click: "Jordan identifies what gets in the way:
   one busy intersection with no crosswalk, mornings when it's raining,
   and a heavier backpack on test days."
3. "Adapt the Behavior" — click: "Jordan changes the plan to work with
   supports and around barriers: walk with the friend on clear days, get a
   ride only on rain days, and leave a spare set of test-day materials at
   school to lighten the backpack."
4. "Evaluate Impact" — click: "After three weeks, Jordan checks: did
   stress before first period actually go down? Did the intersection
   barrier cause any near-misses?" Loops back to Evaluate Supports for the
   next adjustment.

Color coding: Four steps in four distinct colors (teal, orange, gold,
purple) arranged in a circular flow to emphasize that behavior change is an
ongoing cycle, not a single decision.

Implementation: Mermaid flowchart with `click` directives opening an
infobox reusing the text above for each node.
```

## References

- [Chapter 15: Health Promotion and Behavior Change](../../bands/grade-9-12/chapters/15-health-promotion-and-behavior-change/index.md)
- [List of all MicroSims](../index.md)
- [Mermaid documentation](../index.md)
