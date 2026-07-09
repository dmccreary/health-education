---
title: Treatment Pathway Explorer
description: Students explain the purpose of each of the four treatment categories (counseling/therapy, medical support, support groups, inpatient/outpatient programs) and describe how a treatment team combines them based on individual need.
status: scaffold
library: p5.js
bloom_level: Understand (L2)
---

# Treatment Pathway Explorer



<iframe src="main.html" width="100%" height="482px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 10: Substance Use Disorder, Recovery, and Policy](../../bands/grade-6-8/chapters/10-substance-use-disorder-recovery-and-policy/index.md).

```text
Type: infographic
**sim-id:** treatment-pathway-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain, summarize, describe

Learning objective: Students explain the purpose of each of the four treatment categories (counseling/therapy, medical support, support groups, inpatient/outpatient programs) and describe how a treatment team combines them based on individual need.

Layout: A central node labeled "Getting Help" with four surrounding labeled nodes: Counseling And Therapy, Medical Support, Support Groups, Inpatient/Outpatient Programs.

Interactive features: Clicking or hovering each node opens an infobox with two to three sentences describing what that treatment type involves and when it is typically used, written in a hopeful, concrete tone. A "How They Work Together" button reveals a summary infobox explaining that a treatment team often combines more than one option, matched to what each person needs — recovery is not one-size-fits-all.

Default state: No node selected; prompt reads "Click a treatment type to learn how it helps."

Color scheme: Warm, hopeful palette (soft blues and greens) to reinforce that this section is about real, concrete help.

Implementation: p5.js with clickable circular nodes around a central figure; responsive canvas that rearranges nodes into a vertical list on narrow screens.
```

## Related Resources

- [Chapter 10: Substance Use Disorder, Recovery, and Policy](../../bands/grade-6-8/chapters/10-substance-use-disorder-recovery-and-policy/index.md)
