---
title: Commercial Vs. Traditional Tobacco Comparison Tool
description: Students evaluate why commercial tobacco addiction and
status: scaffold
library: p5.js
bloom_level: Evaluate (L5)
---

# Commercial Vs. Traditional Tobacco Comparison Tool



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 10: Substances - Effects and Safer Choices](../../bands/grade-9-12/chapters/10-substances-effects-and-safer-choices/index.md).

```text
Type: infographic

**sim-id:** commercial-vs-traditional-tobacco-comparison-hs<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy Level: Evaluate (L5)
Bloom Verb: evaluate, distinguish, justify

Learning objective: Students evaluate why commercial tobacco addiction and
traditional/ceremonial tobacco use are distinct practices across purpose,
preparation, frequency, and meaning, and justify why public health
messaging deliberately separates the two.

Layout: Two side-by-side columns, "Commercial Tobacco" and "Traditional
Tobacco/Plant Medicine," each with four clickable rows matching the
chapter table (Purpose, Preparation, Frequency, Meaning), plus a closing
reflection prompt

Interactive features: Clicking a row opens a paired infobox with both
columns' content shown together for direct comparison; a closing "Why
Does Public Health Separate These?" button reveals an infobox explaining
that the term "commercial tobacco" exists specifically to target
manufactured, addiction-engineered products without stigmatizing sacred
practice; an optional short-response text box invites the learner to
justify, in their own words, why conflating the two is inaccurate

Default state: No row selected; prompt reads "Click a row to compare
commercial and traditional tobacco use."

Color scheme: Left column in neutral gray-blue (manufactured/industrial
association), right column in warm earth tones (cultural/ceremonial
association); infobox text, not color, carries the evaluative nuance

Implementation: p5.js with two columns of clickable rectangles; responsive
canvas that stacks columns vertically on narrow screens. Content
restriction: no depiction of tobacco products, smoking actions, vaping
devices, or ceremonial objects — text-based comparison only, to remain
respectful of the cultural practice being described.
```

## Related Resources

- [Chapter 10: Substances - Effects and Safer Choices](../../bands/grade-9-12/chapters/10-substances-effects-and-safer-choices/index.md)
