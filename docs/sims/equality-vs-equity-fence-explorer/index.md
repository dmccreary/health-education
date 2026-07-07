---
title: Equality vs. Equity Fence Explorer
description: Students explain the difference between equality and equity by adjusting boxes given to three students of different heights standing behind a fence and observing who can see over it.
status: scaffold
library: p5.js
bloom_level: Understand (L2)
---

# Equality vs. Equity Fence Explorer



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 4: Equity, Belonging, And Bystander Action](../../bands/grade-5/chapters/04-equity-belonging-and-bystander-action/index.md).

```text
Type: microsim
**sim-id:** equality-vs-equity-fence-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain, compare, contrast

Learning objective: Students explain the difference between equality and equity by adjusting boxes given to three students of different heights standing behind a fence and observing who can see over it.

Canvas layout:
- Left side (450px): Drawing area showing a fence with three student characters of different heights (short, medium, tall) standing behind it
- Right side (200px): Mode toggle and box-count display

Visual elements:
- A solid fence drawn across the middle of the canvas at a fixed height
- Three simple character icons of different heights standing behind the fence
- Stackable box icons that can be added under each character
- A "sight line" indicator (small eye icon) showing whether each character can see over the fence

Interactive controls:
- Toggle switch: "Equality Mode" vs "Equity Mode"
- In Equality Mode: one button "Give Everyone 1 Box" — all three characters receive the same number of boxes
- In Equity Mode: three separate plus/minus steppers, one per character, letting the student assign a different number of boxes to each person
- Display: for each character, shows whether they can now see over the fence (yes/no)

Default parameters:
- Starts in Equality Mode with 0 boxes for all three characters
- Fence height fixed; short student needs 3 boxes, medium student needs 2 boxes, tall student needs 0 boxes to see over

Behavior:
- In Equality Mode, giving everyone the same number of boxes shows that the short student still cannot see even when the tall student already can
- In Equity Mode, the student can assign different amounts so that all three characters end up able to see over the fence with the fewest total boxes
- A text panel below updates with "Equal boxes, but not everyone can see" vs "Different boxes, but now everyone can see"

Instructional Rationale: This is an Understand-level objective, so the pattern uses a concrete, step-through manipulation with visible outcomes for each character rather than a continuous animation, letting students directly compare the two approaches side by side.

Implementation notes: Use p5.js. Store each character's height-to-box-requirement as a simple lookup value; recompute the sight-line indicator whenever box counts change; keep visuals simple and flat with no distracting motion.
```

## Related Resources

- [Chapter 4: Equity, Belonging, And Bystander Action](../../bands/grade-5/chapters/04-equity-belonging-and-bystander-action/index.md)
