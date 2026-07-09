---
title: Alcohol Effects Timeline Explorer
description: A toggleable Chart.js bar chart summarizing documented short-term alcohol effects as blood alcohol concentration rises and long-term effects that accumulate over years.
status: complete
library: Chart.js
bloom_level: Understand (L2)
---

# Alcohol Effects: From Hours to Years

<iframe src="main.html" width="100%" height="562px" scrolling="no"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Substance Recovery and Resilience](../../bands/grade-9-12/chapters/11-substance-recovery-and-resilience/index.md).

```text
Type: chart

sim-id: alcohol-effects-timeline-explorer
Library: Chart.js
Status: Specified

Bloom Taxonomy Level: Understand (L2)
Bloom Verb: summarize, classify, explain

Learning objective: Summarize and classify documented alcohol effects as
short-term versus long-term, and explain how rising blood alcohol
concentration maps onto a predictable sequence of effects.

Chart type: Toggleable bar chart. View 1 ("Short-Term," default): X-axis
is BAC level (Low, Moderate, High, Severe); bars show the effect at each
level, from relaxed inhibition up to "Severe: slowed breathing, loss of
consciousness — Medical Emergency." View 2 ("Long-Term," toggle button):
five categories (Liver, Cardiovascular, Brain/Memory, Cancer Risk,
Relationships/Roles) with Moderate/High severity ratings.

Title: "Alcohol Effects: From Hours to Years." Legend top-right.

Interactive features: Hover any bar for a factual tooltip; toggle button
swaps views; the "Severe" bar is flagged as a medical emergency,
cross-referencing the overdose-response section.

Implementation: Chart.js bar chart with view-toggle; responsive:true. No
tooltip references a specific quantity of drinks or method of use.
```

## Related Resources

- [Substance Recovery and Resilience](../../bands/grade-9-12/chapters/11-substance-recovery-and-resilience/index.md)
