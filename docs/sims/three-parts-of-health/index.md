---
title: The Three Parts of Health
description: Students explain the three connected parts of health (physical, mental/emotional, social) and classify everyday example situations under the part(s) of health they mainly affect.
status: scaffold
library: p5.js
bloom_level: Understand (L2)
---

# The Three Parts of Health



<iframe src="main.html" width="100%" height="554px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 1: Foundations and Trusted Adults](../../bands/grade-5/chapters/01-foundations-and-trusted-adults/index.md).

```text
Type: infographic
**sim-id:** three-parts-of-health<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain, classify, exemplify

Learning objective: Students explain the three connected parts of health (physical, mental/emotional, social) and classify everyday example situations under the part(s) of health they mainly affect.

Purpose: Help students see health as a whole-person idea made of interacting parts rather than a single measure of "sick vs. not sick."

Layout: Three overlapping circles (a Venn-style cluster) labeled Physical, Mental/Emotional, and Social, with a shared center zone labeled "Whole Health."

Interactive elements:
- Click any circle to open an infobox with a one-sentence definition of that part of health and two examples
- A tray of 10 scenario cards below the diagram (e.g., "Sofia stayed up late worrying about a test," "Malik ate breakfast before school," "Priya felt better after talking to her aunt about a hard day") — click a card, then click the circle(s) it belongs in
- Cards that genuinely touch more than one circle can be dropped in the overlapping zone, with a confirmation explaining why it touches multiple parts of health
- A progress counter tracks how many of the 10 scenarios have been placed

Visual style: Soft, rounded flat-color circles with simple icons (heart for physical, brain for mental/emotional, two linked figures for social)

Color scheme: Physical = green, Mental/Emotional = purple, Social = orange, overlap zone = soft gold

Responsive behavior: Circles resize and re-center on narrow screens; scenario tray becomes a horizontal scroll strip

Implementation: p5.js with an array of scenario objects (text, correct category or categories, explanation) driving click-to-place logic and infobox rendering.
```

## Related Resources

- [Chapter 1: Foundations and Trusted Adults](../../bands/grade-5/chapters/01-foundations-and-trusted-adults/index.md)
