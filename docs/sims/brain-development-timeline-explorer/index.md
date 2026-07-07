---
title: Brain Development Timeline Explorer
description: Students explain that different brain regions mature at different rates, and describe why the mismatch between an early-maturing reward system and a late-maturing prefrontal cortex makes the adolescent brain more vulnerable to substance effects.
image: /sims/brain-development-timeline-explorer/brain-development-timeline-explorer.png
og:image: /sims/brain-development-timeline-explorer/brain-development-timeline-explorer.png
twitter:image: /sims/brain-development-timeline-explorer/brain-development-timeline-explorer.png
social:
   cards: false
library: vis-timeline
bloom_level: Understand (L2)
grade_band: Grades 6-8
---

# Brain Development Timeline Explorer

<iframe src="main.html" width="100%" height="472px" scrolling="no"></iframe>

[Run the Brain Development Timeline Explorer MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="472px" scrolling="no"></iframe>
```

## About this MicroSim

**Brain Development Timeline Explorer** is an interactive MicroSim for this health-education textbook.

Students explain that different brain regions mature at different rates, and describe why the mismatch between an early-maturing reward system and a late-maturing prefrontal cortex makes the adolescent brain more vulnerable to substance effects.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Understand (L2) — explain, summarize, describe

## Lesson Plan

### Audience

This MicroSim is designed for **Grades 6-8**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students explain that different brain regions mature at different rates, and describe why the mismatch between an early-maturing reward system and a late-maturing prefrontal cortex makes the adolescent brain more vulnerable to substance effects.

This activity targets **Bloom's Understand (L2)** (explain, summarize, describe).

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
[Chapter 8: Substances and the Developing Brain](../../bands/grade-6-8/chapters/08-substances-and-the-developing-brain/index.md).

```text
Type: timeline
**sim-id:** brain-development-timeline-explorer<br/>
**Library:** vis-timeline<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain, summarize, describe

Learning objective: Students explain that different brain regions mature at different rates, and describe why the mismatch between an early-maturing reward system and a late-maturing prefrontal cortex makes the adolescent brain more vulnerable to substance effects.

Time period: Birth through age 25, with a highlighted band for ages 11-14 (the reader's current stage)

Events/regions plotted as horizontal bands showing relative maturity over time: "Brainstem (basic survival functions) — matures earliest, largely complete in early childhood"; "Limbic System / Reward Pathway (emotion and pleasure) — matures during the early-to-mid teen years"; "Prefrontal Cortex (judgment, impulse control, planning) — the last region to mature, not complete until the mid-20s."

Visual style: Horizontal timeline with three stacked growth bands from age 0 to 25, each band filling in gradually to show relative maturity percentage at each age; a vertical marker at ages 11-14 labeled "You are here."

Interactive features: Click any band to open an infobox explaining that region's function in plain language and why its maturity timeline matters; hover the "You are here" marker to see a one-sentence summary of the reward-system/prefrontal-cortex mismatch; a "Why does this matter?" button reveals a short infobox connecting the timeline to substance-use risk without naming or depicting any specific substance.

Color coding: Blue for brainstem, orange for limbic/reward system, green for prefrontal cortex; the "You are here" marker in gray.

Implementation: vis-timeline JavaScript library. Responsive width, reflows on window resize. No content in this diagram references how to obtain, use, or conceal any substance — it addresses brain development only.
```

## References

- [Chapter 8: Substances and the Developing Brain](../../bands/grade-6-8/chapters/08-substances-and-the-developing-brain/index.md)
- [List of all MicroSims](../index.md)
- [vis-timeline documentation](../index.md)
