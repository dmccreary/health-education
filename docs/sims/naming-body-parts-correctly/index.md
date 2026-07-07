---
title: Naming Body Parts Correctly
description: Students identify and recall the correct name for common body parts, reinforcing the Body Parts and Correct Body Part Names concepts as a body-safety practice.
status: scaffold
library: p5.js
bloom_level: Remember (L1)
---

# Naming Body Parts Correctly



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 5: Staying Safe](../../bands/kindergarten/chapters/05-staying-safe/index.md).

```text
Type: infographic
**sim-id:** naming-body-parts-correctly<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Remember (L1)
Bloom Taxonomy Verb: identify, recognize, name

Learning objective: Students identify and recall the correct name for common body parts, reinforcing the Body Parts and Correct Body Part Names concepts as a body-safety practice.

Canvas layout: Full canvas (500px) shows a simple, non-graphic, front-facing outline illustration of a child in everyday clothing (no undressed or graphic anatomical depiction), with labeled hotspots only over non-sensitive body parts (head, shoulder, elbow, knee, foot, ear). Bottom strip (60px): instructions and a Reset button.

Visual elements: 6 hotspots over the outline illustration; clicking reveals the correct name in a calm, clear infobox.

Interactive controls: Click reveals the correct name; Reset hides all revealed labels.

Default parameters: All 6 hotspots begin unlabeled and can be clicked in any order.

Behavior: Clicking a hotspot reveals its correct name in plain text, e.g., "This is your elbow." Labels stay visible for review. After all 6 are found: "You know the correct names for these body parts! A trusted adult can always help if you have a question about any part of your body."

Instructional Rationale: A Remember-level (identify/name) objective, so a calm click-to-reveal pattern is used. The illustration intentionally shows only non-sensitive body parts to keep the visual asset appropriate for a public-facing infographic; the teacher read-aloud text above carries the full instructional content regarding private body parts and how to name them with the same directness.

Implementation notes: p5.js. Each hotspot is an object with a relative (x,y) region and its correct name string. Text large (24px+), plain, and calm — no playful sound effects or celebratory animation, in keeping with the sincere tone of this section.
```

## Related Resources

- [Chapter 5: Staying Safe](../../bands/kindergarten/chapters/05-staying-safe/index.md)
