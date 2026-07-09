---
title: My Personal Health Goal
description: Students state one personal health-related goal and a supporting practice, the capstone skill for benchmark 0.7.7.1 and for the Kindergarten book as a whole.
status: scaffold
library: p5.js
bloom_level: Create (L6)
---

# My Personal Health Goal



<iframe src="main.html" width="100%" height="517px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 6: Making Healthy Choices](../../bands/kindergarten/chapters/06-health-choices/index.md).

```text
Type: microsim
**sim-id:** my-personal-health-goal<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Create (L6)
Bloom Taxonomy Verb: state, produce, generate

Learning objective: Students state one personal health-related goal and a supporting practice, the capstone skill for benchmark 0.7.7.1 and for the Kindergarten book as a whole.

Canvas layout: Top area (200px) shows six illustrated goal-choice cards drawn from earlier chapters (wash hands, eat a fruit or vegetable, move your body, wear a helmet, drink water, tell a trusted adult about a feeling). Middle area (150px): the selected card enlarges with the sentence starter "I will ___" filled in with a picture-word combination. Bottom strip (150px): a "My Goal" button that displays a printable/read-aloud goal card, and a Reset button.

Visual elements: 6 selectable goal cards in a grid; selected card highlights with a star border; final goal card shows Scout giving a thumbs-up.

Interactive controls: Click a goal card to select it; "My Goal" button reveals a large goal-statement card for the teacher to read aloud with the child; Reset clears the selection to choose again.

Default parameters: No goal pre-selected; child/teacher chooses one of the six cards together.

Behavior: Selecting a card shows, "I will wash my hands before eating" (or the matching sentence for the chosen card). Clicking "My Goal" displays a large, shareable goal card with the sentence and a simple picture, suitable for a teacher to print or read aloud to a family. No card is marked wrong — every choice is celebrated.

Instructional Rationale: A Create-level objective (state a personal goal) is the appropriate capstone for the whole Kindergarten book, so the MicroSim lets the child produce their own statement from a supported picture-word menu rather than simply recalling a fact, while still keeping the interaction simple enough for a pre-reader with teacher support.

Implementation notes: p5.js. Each goal is an object with an icon reference, sentence string, and picture cue. Text large (24px+), warm, and encouraging in tone. No incorrect state — every selection is a valid personal goal.
```

## Related Resources

- [Chapter 6: Making Healthy Choices](../../bands/kindergarten/chapters/06-health-choices/index.md)
