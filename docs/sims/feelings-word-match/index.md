---
title: Feelings Word Match
description: Students expand their Emotions Vocabulary by matching feeling-word cards to picture cards showing a face with that expression.
image: /sims/feelings-word-match/feelings-word-match.png
og:image: /sims/feelings-word-match/feelings-word-match.png
twitter:image: /sims/feelings-word-match/feelings-word-match.png
social:
   cards: false
library: p5.js
bloom_level: Remember (L1)
grade_band: Kindergarten
---

# Feelings Word Match

<iframe src="main.html" width="100%" height="454px" scrolling="no"></iframe>

[Run the Feelings Word Match MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="454px" scrolling="no"></iframe>
```

## About this MicroSim

**Feelings Word Match** is an interactive MicroSim for this health-education textbook.

Students expand their Emotions Vocabulary by matching feeling-word cards to picture cards showing a face with that expression.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Remember (L1) — match, recall, identify

## Lesson Plan

### Audience

This MicroSim is designed for **Kindergarten**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students expand their Emotions Vocabulary by matching feeling-word cards to picture cards showing a face with that expression.

This activity targets **Bloom's Remember (L1)** (match, recall, identify).

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
**Remember**-level objective rather than a lucky guess.

## Specification

The full specification below was extracted from
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

## References

- [Chapter 3: Feelings And Kindness](../../bands/kindergarten/chapters/03-feelings-and-kindness/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
