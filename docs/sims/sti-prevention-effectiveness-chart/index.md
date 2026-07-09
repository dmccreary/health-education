---
title: STI Prevention Methods Effectiveness Comparison
description: Students explain and compare the relative
status: scaffold
library: Chart.js
bloom_level: Understand (L2)
---

# STI Prevention Methods Effectiveness Comparison



<iframe src="main.html" width="100%" height="502px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 4: Healthcare Access and Sexual Health](../../bands/grade-9-12/chapters/04-healthcare-access-and-sexual-health/index.md).

```text
Type: chart

**sim-id:** sti-prevention-effectiveness-chart<br/>
**Library:** Chart.js<br/>
**Status:** Specified

Bloom Taxonomy Level: Understand (L2)
Bloom Verb: explain, compare, summarize

Learning objective: Students explain and compare the relative
risk-reduction mechanism of five evidence-based STI prevention methods,
presented factually rather than as a recommendation ranking.

Chart type: Horizontal bar chart

X-axis: Relative risk reduction (Full, Substantial, Partial, Indirect) —
categorical labels, not a numeric health-risk score, to avoid implying
false precision

Y-axis: Prevention method (Abstinence, Vaccination, Barrier Methods,
Regular Testing, Treatment Adherence)

Interactive features: Hovering a bar reveals a tooltip explaining the
specific mechanism by which that method reduces risk, in the same factual
language as the chapter text; clicking a bar pins an expanded infobox
below the chart with a one-sentence clinical explanation.

Title: "Comparing STI Prevention Methods by Mechanism"

Instructional Rationale: Explaining and comparing methods at a factual
level is an Understand-level objective, so a labeled comparison chart with
explanatory tooltips is used rather than a decision-making tool, keeping
the framing informational and non-prescriptive.

Implementation notes: Chart.js horizontal bar chart; categorical x-axis;
tooltip and click-to-pin text stored in a JS lookup object; no anatomical
imagery, text and chart elements only.
```

## Related Resources

- [Chapter 4: Healthcare Access and Sexual Health](../../bands/grade-9-12/chapters/04-healthcare-access-and-sexual-health/index.md)
