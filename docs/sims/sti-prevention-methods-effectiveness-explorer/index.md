---
title: STI Prevention Methods Effectiveness Explorer
description: Students explain and compare the relative risk-reduction level of five evidence-based STI prevention methods without any method being framed as an instruction to act.
status: scaffold
library: Chart.js
bloom_level: Understand (L2)
---

# STI Prevention Methods Effectiveness Explorer



<iframe src="main.html" width="100%" height="522px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 3: Healthcare Access and Sexual Health](../../bands/grade-6-8/chapters/03-healthcare-access-and-sexual-health/index.md).

```text
Type: microsim
**sim-id:** sti-prevention-methods-effectiveness-explorer<br/>
**Library:** Chart.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain, compare, summarize

Learning objective: Students explain and compare the relative risk-reduction level of five evidence-based STI prevention methods without any method being framed as an instruction to act.

Chart type: Horizontal bar chart

Purpose: Show relative risk-reduction level of each prevention method as a factual comparison, not an endorsement

X-axis: Relative risk reduction (Full, Substantial, Partial, Indirect) — plain categorical labels, not a numeric health-risk score

Y-axis: Prevention method (Abstinence, Vaccination, Barrier Methods, Regular Testing, Open Communication)

Interactive features: Hovering a bar reveals a tooltip explaining specifically how that method reduces risk, in the same factual language as the chapter text; clicking a bar pins an expanded infobox below the chart.

Title: "Comparing STI Prevention Methods"

Instructional Rationale: Explaining and comparing methods at a factual level is Understand-level, so a labeled comparison chart with explanatory tooltips is used rather than a decision-making or recommendation tool, keeping the framing informational rather than prescriptive.

Implementation notes: Chart.js horizontal bar chart; categorical x-axis (not numeric) to avoid implying false precision; tooltip and click-to-pin text stored in a JS lookup object.
```

## Related Resources

- [Chapter 3: Healthcare Access and Sexual Health](../../bands/grade-6-8/chapters/03-healthcare-access-and-sexual-health/index.md)
