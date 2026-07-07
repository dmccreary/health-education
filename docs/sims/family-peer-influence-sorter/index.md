---
title: Family and Peer Influence Sorter
description: Students analyze short scenarios and differentiate whether a decision is being influenced mainly by family, mainly by peers, or by both, and examine whether the influence pushes the decision toward or away from health.
image: /sims/family-peer-influence-sorter/family-peer-influence-sorter.png
og:image: /sims/family-peer-influence-sorter/family-peer-influence-sorter.png
twitter:image: /sims/family-peer-influence-sorter/family-peer-influence-sorter.png
social:
   cards: false
library: p5.js
bloom_level: Analyze (L4)
grade_band: Grade 5
---

# Family and Peer Influence Sorter

<iframe src="main.html" width="100%" height="474px" scrolling="no"></iframe>

[Run the Family and Peer Influence Sorter MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="474px" scrolling="no"></iframe>
```

## About this MicroSim

**Family and Peer Influence Sorter** is an interactive MicroSim for this health-education textbook.

Students analyze short scenarios and differentiate whether a decision is being influenced mainly by family, mainly by peers, or by both, and examine whether the influence pushes the decision toward or away from health.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Analyze (L4) — compare, contrast, differentiate, examine

## Lesson Plan

### Audience

This MicroSim is designed for **Grade 5**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students analyze short scenarios and differentiate whether a decision is being influenced mainly by family, mainly by peers, or by both, and examine whether the influence pushes the decision toward or away from health.

This activity targets **Bloom's Analyze (L4)** (compare, contrast, differentiate, examine).

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
[Chapter 1: Foundations and Trusted Adults](../../bands/grade-5/chapters/01-foundations-and-trusted-adults/index.md).

```text
Type: microsim
**sim-id:** family-peer-influence-sorter<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: compare, contrast, differentiate, examine

Learning objective: Students analyze short scenarios and differentiate whether a decision is being influenced mainly by family, mainly by peers, or by both, and examine whether the influence pushes the decision toward or away from health.

Canvas layout:
- Top area (400x150): One scenario shown at a time in a speech-bubble style card
- Middle area (400x120): Two labeled drop zones side by side — "Family Influence" and "Peer Influence" — with a smaller overlapping zone labeled "Both"
- Bottom area (400x100): A second choice after sorting — buttons "Toward Health" and "Away From Health" — plus "Next Scenario" and feedback caption

Visual elements:
- 10 scenario cards, such as: "Your older sister always packs a water bottle, so you started doing it too," "Your friends dared you to try a vape at a party," "Your family walks the dog together every evening," "A classmate convinced the group to leave someone out at recess," "Your parents ask about your day at dinner, which helps you talk through feelings"

Interactive controls:
- Click-and-drag or click-to-select the scenario card into the Family, Peer, or Both zone
- After sorting, click "Toward Health" or "Away From Health" to judge the direction of the influence
- Button: "Next Scenario"
- Button: "Reset" to start the set over

Default parameters:
- Scenarios presented in shuffled order; no pre-sorted answers shown at start

Behavior:
- Correct source classification shows a green highlight with a one-sentence explanation of why that source applies
- Correct direction judgment shows a brief note connecting it back to the health definition from earlier in the chapter
- A running score tracker shows scenarios completed and correct out of 10

Instructional Rationale: Differentiating between influence sources and judging their direction is an Analyze-level task, so the pattern uses a sorting-and-classifying interaction with immediate explanatory feedback rather than a passive animation, which keeps students actively comparing sources rather than watching a demonstration.

Implementation notes: Use p5.js. Store scenarios as an array of objects with fields for text, correct source (family/peer/both), and correct direction (toward/away), enabling easy reshuffling and scoring.
```

## References

- [Chapter 1: Foundations and Trusted Adults](../../bands/grade-5/chapters/01-foundations-and-trusted-adults/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
