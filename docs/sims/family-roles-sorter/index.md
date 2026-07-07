---
title: Who Does What in a Family
description: Students describe the roles of family members in healthy relationships by matching everyday family actions to the role category they represent.
image: /sims/family-roles-sorter/family-roles-sorter.png
og:image: /sims/family-roles-sorter/family-roles-sorter.png
twitter:image: /sims/family-roles-sorter/family-roles-sorter.png
social:
   cards: false
library: p5.js
bloom_level: Understand (L2)
grade_band: Grade 3
---

# Who Does What in a Family

<iframe src="main.html" width="100%" height="514px" scrolling="no"></iframe>

[Run the Who Does What in a Family MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="514px" scrolling="no"></iframe>
```

## About this MicroSim

**Who Does What in a Family** is an interactive MicroSim for this health-education textbook.

Students describe the roles of family members in healthy relationships by matching everyday family actions to the role category they represent.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Understand (L2) — describe, classify, exemplify

## Lesson Plan

### Audience

This MicroSim is designed for **Grade 3**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students describe the roles of family members in healthy relationships by matching everyday family actions to the role category they represent.

This activity targets **Bloom's Understand (L2)** (describe, classify, exemplify).

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
[Chapter 5: Relationships And Respect](../../bands/grade-3/chapters/05-relationships-and-respect/index.md).

```text
Type: microsim
**sim-id:** family-roles-sorter<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: describe, classify, exemplify

Learning objective: Students describe the roles of family members in healthy relationships by matching everyday family actions to the role category they represent.

Canvas layout:
- Left side (400px): Five labeled role bins — "Caregiving," "Teaching," "Providing Safety," "Emotional Support," "Contributing" — each with a simple icon
- Right side (200px): A stack of clickable action cards (e.g., "Packing a lunch," "Showing how to ride a bike," "Setting a bedtime," "Giving a hug after a hard day," "Setting the table")

Visual elements:
- Five colorful role bins arranged in a row
- Action cards in a shuffled pile above the bins
- A friendly house illustration in the background

Interactive controls:
- Click or drag each action card into the role bin where it belongs
- Button: "Check My Answers"
- Button: "Reset"

Default parameters:
- All action cards begin shuffled above the five bins

Data Visibility Requirements:
  Stage 1: Show the shuffled action cards and five empty labeled bins
  Stage 2: As each card is sorted, show it snap into the chosen bin
  Stage 3: When "Check My Answers" is clicked, reveal a one-sentence explanation for each card (e.g., "Showing how to ride a bike is teaching — helping someone learn a new skill.")

Behavior:
- Correctly sorted cards get a checkmark
- Incorrectly sorted cards get a gentle nudge explaining the correct role bin
- A "Family Roles Expert!" caption appears once every card is sorted correctly

Instructional Rationale: This is an Understand-level objective (describe, classify), so the design uses a classify-and-reveal pattern with concrete family examples, letting students see the reasoning behind each role rather than only memorizing a list.

Implementation notes: Use p5.js. Keep family illustrations diverse and simple so many family structures feel represented. This MicroSim is the direct student-facing practice activity; the surrounding text remains teacher-facing read-aloud material for this K-3 band.
```

## References

- [Chapter 5: Relationships And Respect](../../bands/grade-3/chapters/05-relationships-and-respect/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
