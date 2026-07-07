---
title: Audience Tailoring Comparison Tool
description: Compare how the same justified health message is
status: scaffold
library: Chart.js
bloom_level: Analyze<br/>
---

# Audience Tailoring Comparison Tool



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 15: Health Promotion and Behavior Change](../../bands/grade-9-12/chapters/15-health-promotion-and-behavior-change/index.md).

```text
Type: infographic

**sim-id:** audience-tailoring-comparison<br/>
**Library:** Chart.js<br/>
**Status:** Specified

Bloom Taxonomy: Analyze<br/>
Bloom Taxonomy Verb: compare, contrast, distinguish

Learning objective: Compare how the same justified health message is
adapted in tone, vocabulary, and channel across four different audiences,
while the underlying factual claim remains constant.

Layout: Four-column side-by-side comparison panel, one column per
audience (younger students, peers, parents, school board), each showing:
headline version of the message, one leading fact, and recommended
channel icon.

Interactive elements: Selecting a health issue from a dropdown (vaping
prevention, hydration choices, mental health stigma) re-populates all four
columns; hovering any column's fact reveals the full source citation used
in the Justify stage; a "Highlight what changed / what stayed the same"
toggle color-highlights the shared factual core in gold across all four
columns and the tailored language in a different color per audience.

Data to display: Four fully worked example messages (one per audience) for
each of the three preset health issues.

Color scheme: Shared factual core highlighted gold across all columns;
each audience column otherwise in its own accent color.

Implementation: Chart.js is used loosely here as a structured-panel
renderer with DOM overlay for the comparison highlighting logic.
```

## Related Resources

- [Chapter 15: Health Promotion and Behavior Change](../../bands/grade-9-12/chapters/15-health-promotion-and-behavior-change/index.md)
