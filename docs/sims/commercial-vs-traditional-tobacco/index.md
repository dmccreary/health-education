---
title: Commercial Tobacco Vs. Traditional Tobacco Comparison
description: Students differentiate commercial tobacco addiction from traditional/ceremonial tobacco use across purpose, preparation, frequency, and cultural meaning, correcting the common misconception that the two are the same practice.
image: /sims/commercial-vs-traditional-tobacco/commercial-vs-traditional-tobacco.png
og:image: /sims/commercial-vs-traditional-tobacco/commercial-vs-traditional-tobacco.png
twitter:image: /sims/commercial-vs-traditional-tobacco/commercial-vs-traditional-tobacco.png
social:
   cards: false
library: p5.js
bloom_level: Analyze (L4)
grade_band: Grades 6-8
---

# Commercial Tobacco Vs. Traditional Tobacco Comparison

<iframe src="main.html" width="100%" height="492px" scrolling="no"></iframe>

[Run the Commercial Tobacco Vs. Traditional Tobacco Comparison MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="492px" scrolling="no"></iframe>
```

## About this MicroSim

**Commercial Tobacco Vs. Traditional Tobacco Comparison** is an interactive MicroSim for this health-education textbook.

Students differentiate commercial tobacco addiction from traditional/ceremonial tobacco use across purpose, preparation, frequency, and cultural meaning, correcting the common misconception that the two are the same practice.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Analyze (L4) — differentiate, distinguish, compare

## Lesson Plan

### Audience

This MicroSim is designed for **Grades 6-8**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students differentiate commercial tobacco addiction from traditional/ceremonial tobacco use across purpose, preparation, frequency, and cultural meaning, correcting the common misconception that the two are the same practice.

This activity targets **Bloom's Analyze (L4)** (differentiate, distinguish, compare).

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
[Chapter 9: Substance Use Culture, Safety, and Risk](../../bands/grade-6-8/chapters/09-substance-use-culture-safety-and-risk/index.md).

```text
Type: infographic
**sim-id:** commercial-vs-traditional-tobacco<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: differentiate, distinguish, compare

Learning objective: Students differentiate commercial tobacco addiction from traditional/ceremonial tobacco use across purpose, preparation, frequency, and cultural meaning, correcting the common misconception that the two are the same practice.

Layout: Two side-by-side columns, "Commercial Tobacco" (left) and "Traditional Tobacco Use" (right), each with four stacked clickable rows: Purpose, Preparation, Frequency, Meaning.

Interactive features: Clicking any row on either side opens a matching infobox pair showing both columns' answers for that row side by side, so learners directly compare rather than reading in isolation. Example infobox content for "Purpose": Commercial — "Manufactured and marketed for profit and repeated use"; Traditional — "Ceremonial, spiritual, offered in prayer or to mark meaningful events." A closing "Why This Distinction Matters" button reveals a summary infobox explaining that public health messaging uses the term "commercial tobacco" specifically to avoid casting judgment on sacred cultural practice.

Default state: No row selected; prompt reads "Click a row to compare commercial and traditional tobacco use."

Color scheme: Left column in a neutral gray-blue (manufactured/industrial association), right column in warm earth tones (cultural/ceremonial association); avoid any color choice that implies one side is "bad" and the other "good" in a simplistic way — the infobox text carries the nuance.

Implementation: p5.js with two columns of clickable rectangles; responsive canvas that stacks columns vertically on narrow screens. Content restriction: no depiction of tobacco products, smoking actions, or ceremonial objects — text-based comparison only, to remain respectful of the cultural practice being described.
```

## References

- [Chapter 9: Substance Use Culture, Safety, and Risk](../../bands/grade-6-8/chapters/09-substance-use-culture-safety-and-risk/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
