---
title: Sort the Stage
description: Students recognize the general stages of puberty by sorting plain, non-anatomical statements into the correct simplified stage: Before Changes Start, Changes Beginning, or Changes Continuing.
status: scaffold
library: p5.js
bloom_level: Understand (L2)
---

# Sort the Stage



<iframe src="main.html" width="100%" height="524px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 6: Growth And Puberty](../../bands/grade-3/chapters/06-growth-and-puberty/index.md).

```text
Type: microsim
**sim-id:** puberty-stage-sorter<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: describe, classify, sequence

Learning objective: Students recognize the general stages of puberty by sorting plain, non-anatomical statements into the correct simplified stage: Before Changes Start, Changes Beginning, or Changes Continuing.

Canvas layout:
- Left side (400px): Three labeled stage bins in order — "Before Changes Start," "Changes Beginning," "Changes Continuing"
- Right side (200px): A stack of plain statement cards (e.g., "Growing the same steady way I always have," "Noticing I grow a little faster than last year," "Having stronger feelings some days," "My body shape is changing more than before")

Visual elements:
- Three calm, evenly spaced bins with simple growth-arrow icons (small, medium, large arrow) rather than any body imagery
- Statement cards in plain text only

Interactive controls:
- Click or drag each statement card into the stage bin where it belongs
- Button: "Check My Answers"
- Button: "Reset"

Default parameters:
- All statement cards begin shuffled above the three bins

Data Visibility Requirements:
  Stage 1: Show the shuffled statement cards and three empty labeled bins
  Stage 2: As each card is sorted, show it snap into the chosen bin
  Stage 3: When "Check My Answers" is clicked, reveal a calm one-sentence explanation for each card's correct stage

Behavior:
- Correctly sorted cards get a checkmark
- Incorrectly sorted cards get a gentle, factual explanation of why the statement fits a different stage
- A reassuring closing message appears once every card is sorted: "Remember — everyone reaches these stages at a different age. That's normal!"

Instructional Rationale: This is an Understand-level objective (describe, classify), so the design uses a calm sorting-and-explanation pattern with plain, non-anatomical statements, keeping the focus on the general idea of ordered stages rather than any physical detail.

Implementation notes: Use p5.js. No anatomical imagery or body silhouettes of any kind — use only arrow-size icons and plain text. Keep tone entirely reassuring and never suggest any stage is "better" or "worse."
```

## Related Resources

- [Chapter 6: Growth And Puberty](../../bands/grade-3/chapters/06-growth-and-puberty/index.md)
