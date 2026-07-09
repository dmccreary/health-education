---
title: Boundary and Consent Scenario Evaluator
description: Students evaluate realistic boundary and consent scenarios, judging clarity, power balance, and whether consent was treated as ongoing, then compare to an expert analysis.
status: complete
library: p5.js
bloom_level: Evaluate (L5)
---

# Boundary and Consent Scenario Evaluator

<iframe src="main.html" width="100%" height="534px" scrolling="no"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 13: Influences on Health Behavior](../../bands/grade-9-12/chapters/13-influences-on-health-behavior/index.md).

```text
Type: microsim
sim-id: boundary-consent-scenario-evaluator
Library: p5.js

Bloom Taxonomy: Evaluate
Bloom Taxonomy Verb: evaluate, judge, defend

Learning objective: Evaluate realistic boundary/consent scenarios involving power dynamics or
digital communication, judging clarity, power balance, and whether consent was treated as ongoing.

Canvas layout: Left: scenario text panel with a short dialogue or message exchange. Right: three
sliding evaluation scales (Clarity: unclear-clear; Power balance: imbalanced-balanced; Consent
handling: assumed-checked) plus a "Submit evaluation" button and expert-comparison reveal.

Interactive controls: Scenario selector (4 scenarios: in-person peer pressure at a party, a text
exchange with an ambiguous "sure I guess," a coach/athlete power-difference scenario, a couple
renegotiating a boundary after initially agreeing). Sliders for the three evaluation scales.
Button: "Compare to expert analysis."

Default parameters: Scenario 1 loaded by default; sliders start at neutral midpoint requiring the
learner to actively judge, not default to an answer.

Behavior: After submitting, reveal an expert rationale for each of the three scales referencing
specific lines in the scenario text, so learners see why an evaluation lands where it does.

Implementation notes: p5.js sliders; scenario text and expert rationale stored as a JS data object;
no continuous animation needed.
```

## Related Resources

- [Chapter 13: Influences on Health Behavior](../../bands/grade-9-12/chapters/13-influences-on-health-behavior/index.md)
