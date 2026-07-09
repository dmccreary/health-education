---
title: Supports and Barriers Sorter
description: Students evaluate realistic factors affecting a health practice, sorting each as a support, a barrier, or context-dependent, with explain-why feedback.
status: complete
library: p5.js
bloom_level: Evaluate (L5)
---

# Supports and Barriers Sorter

<iframe src="main.html" width="100%" height="522px" scrolling="no"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 15: Health Promotion and Behavior Change](../../bands/grade-9-12/chapters/15-health-promotion-and-behavior-change/index.md).

```text
Type: microsim
sim-id: supports-barriers-sorter
Library: p5.js

Bloom Taxonomy: Evaluate
Bloom Taxonomy Verb: judge, assess

Learning objective: Evaluate a set of realistic factors affecting a health practice, correctly
sorting each as a support, a barrier, or context-dependent (both, depending on conditions).

Canvas layout: Left: a bank of factor cards spanning three preset scenarios (active commuting,
reducing screen time before bed, eating breakfast most days). Right: three labeled drop zones —
"Support," "Barrier," "Depends on Conditions."

Interactive controls: Dropdown to choose scenario, which swaps the cards; place cards into zones;
"Check my sorting" button reveals correct placement with a one-line explanation per card; "Reset" button.

Default parameters: Scenario = active commuting; cards start unsorted in the bank.

Behavior: After "Check my sorting," correctly placed cards turn green and misplaced cards turn
orange and return to the bank with the explanation visible, so the learner can re-sort rather than
just see a score.

Implementation notes: p5.js placement with defined drop-zone hit regions; card data stored as a JS
array of objects with a correct-category field.
```

## Related Resources

- [Chapter 15: Health Promotion and Behavior Change](../../bands/grade-9-12/chapters/15-health-promotion-and-behavior-change/index.md)
