---
title: Fitness Component Activity Sorter
description: Students classify physical activities into the fitness component (cardiovascular endurance, muscular strength, flexibility, balance and coordination) each one primarily builds.
image: /sims/fitness-component-activity-sorter/fitness-component-activity-sorter.png
og:image: /sims/fitness-component-activity-sorter/fitness-component-activity-sorter.png
twitter:image: /sims/fitness-component-activity-sorter/fitness-component-activity-sorter.png
social:
   cards: false
library: p5.js
bloom_level: Analyze (L4)
grade_band: Grade 5
---

# Fitness Component Activity Sorter

<iframe src="main.html" width="100%" height="514px" scrolling="no"></iframe>

[Run the Fitness Component Activity Sorter MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="514px" scrolling="no"></iframe>
```

## About this MicroSim

**Fitness Component Activity Sorter** is an interactive MicroSim for this health-education textbook.

Students classify physical activities into the fitness component (cardiovascular endurance, muscular strength, flexibility, balance and coordination) each one primarily builds.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Analyze (L4) — classify, distinguish, organize

## Lesson Plan

### Audience

This MicroSim is designed for **Grade 5**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students classify physical activities into the fitness component (cardiovascular endurance, muscular strength, flexibility, balance and coordination) each one primarily builds.

This activity targets **Bloom's Analyze (L4)** (classify, distinguish, organize).

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
**Analyze**-level objective rather than a lucky guess.

## Specification

The full specification below was extracted from
[Chapter 5: Personal Health And Wellness](../../bands/grade-5/chapters/05-personal-health-and-wellness/index.md).

```text
Type: microsim
**sim-id:** fitness-component-activity-sorter<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: classify, distinguish, organize

Learning objective: Students classify physical activities into the fitness component (cardiovascular endurance, muscular strength, flexibility, balance and coordination) each one primarily builds.

Canvas layout: Left (450px) four labeled bins with a deck of activity cards; right (200px) score display and feedback panel.

Visual elements: Four bins with icons (heart, dumbbell, stretching figure, balance beam); 12 activity cards (running, push-ups, yoga, balance-beam walk, swimming, climbing, dancing, jump rope, stretching, juggling, biking, catching a ball).

Interactive controls: Drag each card into its bin; "Check My Sorting" button reveals correct/incorrect placements; "Shuffle New Round" resets with cards reordered.

Default parameters: All 12 cards start unsorted in a scrambled row.

Behavior: Correct placements highlight green, incorrect orange with a one-line hint (e.g., "Push-ups build muscular strength, not flexibility"). Multi-component cards like swimming accept either correct bin.

Instructional Rationale: Analyze-level objective requiring classification, so the pattern is an active sorting task with clear category feedback rather than passive viewing.

Implementation notes: p5.js; store activities as objects with name, icon, and one or two correct component tags; drag detection via mouseIsPressed and bounding boxes.
```

## References

- [Chapter 5: Personal Health And Wellness](../../bands/grade-5/chapters/05-personal-health-and-wellness/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
