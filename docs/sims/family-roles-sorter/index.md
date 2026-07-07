---
title: Who Does What in a Family
description: Students describe the roles of family members in healthy relationships by matching everyday family actions to the role category they represent.
status: scaffold
library: p5.js
bloom_level: Understand (L2)
---

# Who Does What in a Family



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
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

## Related Resources

- [Chapter 5: Relationships And Respect](../../bands/grade-3/chapters/05-relationships-and-respect/index.md)
