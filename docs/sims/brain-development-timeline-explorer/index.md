---
title: Brain Development Timeline Explorer
description: Students explain that different brain regions mature at different rates, and describe why the mismatch between an early-maturing reward system and a late-maturing prefrontal cortex makes the adolescent brain more vulnerable to substance effects.
status: scaffold
library: vis-timeline
bloom_level: Understand (L2)
---

# Brain Development Timeline Explorer



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
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

## Related Resources

- [Chapter 8: Substances and the Developing Brain](../../bands/grade-6-8/chapters/08-substances-and-the-developing-brain/index.md)
