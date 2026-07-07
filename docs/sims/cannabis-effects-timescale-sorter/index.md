---
title: Cannabis Effects By Timescale Sorter
description: Classify documented cannabis effects into short-term
image: /sims/cannabis-effects-timescale-sorter/cannabis-effects-timescale-sorter.png
og:image: /sims/cannabis-effects-timescale-sorter/cannabis-effects-timescale-sorter.png
twitter:image: /sims/cannabis-effects-timescale-sorter/cannabis-effects-timescale-sorter.png
social:
   cards: false
library: p5.js
bloom_level: Analyze (L4)
grade_band: Grades 9-12
---

# Cannabis Effects By Timescale Sorter

<iframe src="main.html" width="100%" height="524px" scrolling="no"></iframe>

[Run the Cannabis Effects By Timescale Sorter MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="524px" scrolling="no"></iframe>
```

## About this MicroSim

**Cannabis Effects By Timescale Sorter** is an interactive MicroSim for this health-education textbook.

Classify documented cannabis effects into short-term

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Analyze (L4) — classify, differentiate, organize

## Lesson Plan

### Audience

This MicroSim is designed for **Grades 9-12**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Classify documented cannabis effects into short-term

This activity targets **Bloom's Analyze (L4)** (classify, differentiate, organize).

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
[Chapter 11: Substance Recovery and Resilience](../../bands/grade-9-12/chapters/11-substance-recovery-and-resilience/index.md).

```text
Type: infographic

**sim-id:** cannabis-effects-timescale-sorter<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy Level: Analyze (L4)
Bloom Verb: classify, differentiate, organize

Learning objective: Classify documented cannabis effects into short-term
versus long-term categories and differentiate physical, mental, and
relational effects within each.

Layout: Two zones ("Short-Term: Minutes to Hours," "Long-Term: Months to
Years") and a deck of 10 shuffled effect cards (e.g., "Impaired short-term
memory during use," "Cannabis use disorder with withdrawal symptoms").

Interactive controls: Drag or click each card into the correct zone;
immediate feedback confirms placement with a one-sentence explanation; an
optional color tag toggles a physical/mental/relational layer; "Reset"
reshuffles the deck.

Instructional Rationale: Classifying along two dimensions at once is an
Analyze-level task; sorting with immediate feedback requires active
discrimination rather than passive reading.

Implementation notes: p5.js drag-and-drop with zone collision detection;
data grounded in NIDA/CDC summaries. No card depicts a method of use.
Responsive, stacks vertically on narrow screens.
```

## References

- [Chapter 11: Substance Recovery and Resilience](../../bands/grade-9-12/chapters/11-substance-recovery-and-resilience/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
