---
title: Nicotine And The Reward System MicroSim
description: Students explain, using a step-through data view rather than continuous animation, how nicotine reaches and affects the brain's reward system faster and more intensely in an adolescent brain than an adult brain.
status: scaffold
library: p5.js
bloom_level: Understand (L2)
---

# Nicotine And The Reward System MicroSim



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 8: Substances and the Developing Brain](../../bands/grade-6-8/chapters/08-substances-and-the-developing-brain/index.md).

```text
Type: microsim
**sim-id:** nicotine-and-the-reward-system<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain, describe, summarize

Learning objective: Students explain, using a step-through data view rather than continuous animation, how nicotine reaches and affects the brain's reward system faster and more intensely in an adolescent brain than an adult brain.

Canvas layout: Left side (450px) shows a simplified brain diagram with the reward pathway highlighted; right side (150px) shows step-through controls and a data readout panel.

Data Visibility Requirements:
Stage 1: Show a labeled diagram of the brain reward pathway at rest, with a readout "Baseline reward activity: normal."
Stage 2: Show nicotine (represented as small labeled dots, not depicting any product) reaching the reward pathway, with a readout "Nicotine reaches brain receptors within seconds."
Stage 3: Show the reward pathway activated, with a readout comparing "Adult brain: reward response" versus "Adolescent brain: stronger, faster-forming reward response" as two side-by-side bar readouts (illustrative relative values, not exact clinical figures).
Stage 4: Show a summary readout: "Because the adolescent reward system is still forming, repeated nicotine exposure builds dependence more quickly than in a fully developed adult brain."

Interaction: Step-through with "Next" and "Previous" buttons; a "Compare Adult vs. Adolescent" toggle at each stage.

Instructional Rationale: This is an Understand-level objective requiring learners to trace a process with concrete data, so a step-through format with visible data at each stage is used rather than continuous animation, which would obscure the comparison and prevent the learner from pausing to absorb each stage.

Implementation notes: p5.js. No depiction of any tobacco or vaping product, packaging, or method of use — only a labeled brain diagram and reward-pathway data readouts. Responsive canvas that reflows on window resize.
```

## Related Resources

- [Chapter 8: Substances and the Developing Brain](../../bands/grade-6-8/chapters/08-substances-and-the-developing-brain/index.md)
