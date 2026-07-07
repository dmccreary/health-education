---
title: Commercial Tobacco Vs. Traditional Tobacco Comparison
description: Students differentiate commercial tobacco addiction from traditional/ceremonial tobacco use across purpose, preparation, frequency, and cultural meaning, correcting the common misconception that the two are the same practice.
status: scaffold
library: p5.js
bloom_level: Analyze (L4)
---

# Commercial Tobacco Vs. Traditional Tobacco Comparison



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
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

## Related Resources

- [Chapter 9: Substance Use Culture, Safety, and Risk](../../bands/grade-6-8/chapters/09-substance-use-culture-safety-and-risk/index.md)
