---
title: Substance-Free Coping Toolkit Builder
description: Students apply knowledge of evidence-based,
status: scaffold
library: p5.js
bloom_level: Apply (L3)
---

# Substance-Free Coping Toolkit Builder



<iframe src="main.html" width="100%" height="514px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 10: Substances - Effects and Safer Choices](../../bands/grade-9-12/chapters/10-substances-effects-and-safer-choices/index.md).

```text
Type: microsim

**sim-id:** substance-free-coping-toolkit-builder<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy Level: Apply (L3)
Bloom Verb: apply, practice, demonstrate

Learning objective: Students apply knowledge of evidence-based,
substance-free coping strategies by matching realistic high-school stress
scenarios to appropriate strategies and building a personal toolkit.

Canvas layout:
- Left (55%): a deck of 8 realistic high-school stress scenarios (e.g.,
  "You're overwhelmed before finals," "A friend group conflict is stressing
  you out," "You feel pressure at a party to fit in," "You're anxious about
  a college or job decision")
- Right (45%): five draggable strategy tiles (Physical Activity, Creative
  Expression, Talking to Someone, Mindfulness/Breathing, Rest/Sleep) and a
  feedback panel

Interactive controls: Drag a strategy tile onto a scenario card; feedback
explains why that strategy could help, noting multiple strategies can be
valid; "Build My Toolkit" button lets the learner select their top 3
preferred strategies into a saved summary card; "Reset" button

Default parameters: Scenario deck order randomized each session; no
strategy pre-assigned

Instructional Rationale: Apply-level objectives require using knowledge in
new situations; a drag-and-match activity with open-ended validity mirrors
the real flexibility of coping strategy selection better than a
single-right-answer quiz, and the toolkit-building step gives students a
personally relevant takeaway.

Implementation notes: p5.js drag-and-drop with rectangle collision
detection; scenario and strategy data stored as structured objects.
Responsive canvas that stacks scenario deck and strategy tiles vertically
on narrow screens.
```

## Related Resources

- [Chapter 10: Substances - Effects and Safer Choices](../../bands/grade-9-12/chapters/10-substances-effects-and-safer-choices/index.md)
