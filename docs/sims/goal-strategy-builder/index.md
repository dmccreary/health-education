---
title: Goal Strategy Builder
description: Students formulate a complete strategy for a personal health goal by assembling a first action, a support, a barrier plan, and a checkpoint schedule into one coherent plan.
status: complete
library: p5.js
bloom_level: Create (L6)
---

# Goal Strategy Builder

<iframe src="main.html" width="100%" height="554px" scrolling="no"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 14: Health Decision-Making and Goal-Setting](../../bands/grade-9-12/chapters/14-health-decision-making-and-goal-setting/index.md).

```text
Type: microsim
sim-id: goal-strategy-builder
Library: p5.js

Bloom Taxonomy: Create
Bloom Taxonomy Verb: formulate, construct

Learning objective: Formulate a complete strategy to support a personal health goal, assembling a
first action, a support, a barrier plan, and a checkpoint schedule into one coherent plan.

Canvas layout: Left: four labeled drop zones — "First Action," "Support Enlisted," "Barrier +
Workaround," "Checkpoint Schedule." Right: a bank of example strategy-component cards plus a blank
custom-card option (text input) so learners can write their own.

Interactive controls: Place cards into the four zones; a "Focus area" dropdown (sleep, physical
activity, nutrition, stress management) that swaps the example card bank to match; button "Generate
my plan summary" that compiles the four filled zones into a single readable paragraph.

Default parameters: Focus area = sleep; drop zones start empty, prompting the learner to build
rather than view a finished example.

Behavior: When all four zones are filled, the "Generate my plan summary" button produces a
plain-language paragraph combining the four choices, modeling how a real SMART goal strategy reads
as connected prose rather than a checklist.

Implementation notes: p5.js placement with defined zone hit regions; text input DOM element for
custom cards; string concatenation for the summary.
```

## Related Resources

- [Chapter 14: Health Decision-Making and Goal-Setting](../../bands/grade-9-12/chapters/14-health-decision-making-and-goal-setting/index.md)
