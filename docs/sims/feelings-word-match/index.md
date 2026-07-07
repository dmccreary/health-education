---
title: Feelings Word Match
description: Students expand their Emotions Vocabulary by matching feeling-word cards to picture cards showing a face with that expression.
status: scaffold
library: p5.js
bloom_level: Remember (L1)
---

# Feelings Word Match



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 3: Feelings And Kindness](../../bands/kindergarten/chapters/03-feelings-and-kindness/index.md).

```text
Type: microsim
**sim-id:** feelings-word-match<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Remember (L1)
Bloom Taxonomy Verb: match, recall, identify

Learning objective: Students expand their Emotions Vocabulary by matching feeling-word cards to picture cards showing a face with that expression.

Canvas layout:
- Left column (250px): Five picture cards, each showing a simple face expressing one emotion (happy, excited, frustrated, proud, lonely)
- Right column (250px): Five word cards in scrambled order, each showing one feeling word read aloud by the teacher
- Bottom strip (60px): Score display ("4 of 5 matched!") and a Reset button

Visual elements:
- Picture cards and word cards both have a distinct pastel background color that is consistent between a matching pair once solved, so children get a visual reward for pairing correctly
- A connecting line is drawn between matched pairs once solved

Interactive controls:
- Drag-and-drop or tap-tap-to-connect: child selects a picture card, then selects the word card they think matches
- Button: "Reset" to shuffle and start again

Default parameters:
- Cards appear in a shuffled but fixed starting layout for the first play so a teacher can preview it
- Only 5 pairs shown at once to avoid overwhelming a pre-reader audience

Behavior:
- When a correct pair is selected, both cards glow gold, a soft chime plays, and a line connects them permanently
- When an incorrect pair is selected, both cards gently shake and return to their unselected state — no harsh error sound
- After all 5 pairs are matched, show a celebration message: "Wow, look at all the feeling words you know!"

Instructional Rationale: This is a Remember-level (recall/match) objective, so a matching-pairs pattern is appropriate — it reinforces new vocabulary through repetition and visual pairing rather than requiring the child to read or write independently.

Implementation notes: Use p5.js. Store each pair as linked objects with a shared "pairId." Keep all card text large (26px+) and always paired with a picture, since this is a read-aloud/pre-reader audience.
```

## Related Resources

- [Chapter 3: Feelings And Kindness](../../bands/kindergarten/chapters/03-feelings-and-kindness/index.md)
