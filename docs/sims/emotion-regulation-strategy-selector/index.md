---
title: Emotion Regulation Strategy Selector
description: Students apply the most appropriate emotion management
status: scaffold
library: p5.js
bloom_level: Apply (L3)
---

# Emotion Regulation Strategy Selector



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 6: Conflict Resolution and Inclusion](../../bands/grade-9-12/chapters/06-conflict-resolution-and-inclusion/index.md).

```text
Type: microsim

**sim-id:** emotion-regulation-strategy-selector<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy Level: Apply (L3)
Bloom Verb: apply, demonstrate, practice

Learning objective: Students apply the most appropriate emotion management
strategy (paced breathing, cognitive reframing, deliberate pause, or
grounding) to a set of realistic emotionally charged scenarios.

Canvas layout:
- Left (55%): a short scenario describing an emotionally intense moment
  (e.g., feeling humiliated after a public correction, feeling panicked
  before a hard conversation)
- Right (45%): four strategy cards (Paced Breathing, Cognitive Reframing,
  Deliberate Pause, Grounding) with one-line descriptions

Data Visibility Requirements:
  Stage 1: Show the scenario and all four strategy cards with brief
  descriptions
  Stage 2: Student selects which strategy fits best
  Stage 3: Reveal an explanation of why that strategy fits (or why a
  different strategy might fit better), tied to the specific emotional and
  situational cues in the scenario
  Stage 4: Show a running count of scenarios completed out of a bank of 8

Interactive controls:
- Click to select a strategy card
- Button: "Show Explanation"
- Button: "Next Scenario"

Default parameters: Scenario bank cycles without repetition until
exhausted, then reshuffles; more than one strategy may be defensible for a
given scenario, with the explanation acknowledging this

Instructional Rationale: Matching a management technique to a concrete
emotional scenario is an Apply-level objective, so a scenario-based
selection tool with explanatory feedback is used rather than passive
description of the four strategies.

Implementation notes: p5.js with an object array of {scenario, bestFit,
explanation, acceptableAlternates}; explanations acknowledge legitimate
overlap between strategies rather than presenting a single rigid answer.
```

## Related Resources

- [Chapter 6: Conflict Resolution and Inclusion](../../bands/grade-9-12/chapters/06-conflict-resolution-and-inclusion/index.md)
