---
title: Alcohol's Path Through The Body Interactive Diagram
description: Students identify the body systems affected by alcohol and explain, in plain language, the specific effect on each system, with emphasis on how adolescent development changes the impact.
status: scaffold
library: p5.js
bloom_level: Understand (L2)
---

# Alcohol's Path Through The Body Interactive Diagram



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 8: Substances and the Developing Brain](../../bands/grade-6-8/chapters/08-substances-and-the-developing-brain/index.md).

```text
Type: infographic
**sim-id:** alcohols-path-through-the-body<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain, summarize, identify

Learning objective: Students identify the body systems affected by alcohol and explain, in plain language, the specific effect on each system, with emphasis on how adolescent development changes the impact.

Layout: A simple front-facing outline of a human body silhouette with four labeled, clickable regions: brain (prefrontal cortex and hippocampus), liver, heart/cardiovascular system, and stomach/digestive system. No labels or content depict methods of obtaining or consuming alcohol.

Interactive features: Click each labeled region to open an infobox with two to three sentences: (1) what that organ or system normally does, (2) the specific, factual effect alcohol has on it, (3) for the brain region, an additional note connecting to adolescent brain development discussed earlier in the chapter. A toggle switch lets the learner compare "Adult Body" and "Developing (Adolescent) Body" infobox text side by side for the brain region, highlighting the added developmental risk.

Default state: No region selected; a prompt reads "Click a body system to learn how alcohol affects it."

Color scheme: Neutral gray silhouette with soft blue highlight on the selected region; infobox uses the chapter's established color palette.

Implementation: p5.js with clickable regions defined as simple rectangles/ellipses overlaid on the silhouette; responsive canvas that rescales the silhouette and click regions proportionally on window resize. Content restriction: no depiction of alcohol containers, consumption actions, or quantities — only body systems and effects.
```

## Related Resources

- [Chapter 8: Substances and the Developing Brain](../../bands/grade-6-8/chapters/08-substances-and-the-developing-brain/index.md)
