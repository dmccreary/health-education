---
title: Stress Management Toolkit Builder
description: Students apply knowledge of healthy stress-management strategies by matching realistic stress scenarios to appropriate substance-free coping strategies.
status: scaffold
library: p5.js
bloom_level: Apply (L3)
---

# Stress Management Toolkit Builder



<iframe src="main.html" width="100%" height="532px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 9: Substance Use Culture, Safety, and Risk](../../bands/grade-6-8/chapters/09-substance-use-culture-safety-and-risk/index.md).

```text
Type: microsim
**sim-id:** stress-management-toolkit-builder<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: apply, practice, demonstrate

Learning objective: Students apply knowledge of healthy stress-management strategies by matching realistic stress scenarios to appropriate substance-free coping strategies.

Layout: A deck of 8 realistic stress scenario cards (e.g., "You have a big test tomorrow and feel overwhelmed," "You had an argument with a friend," "You feel anxious before a game") alongside five draggable strategy tiles: Physical Activity, Creative Expression, Talking To Someone, Mindfulness/Breathing, Cultural/Nature Connection.

Interactive controls: Drag a strategy tile onto a scenario card; feedback panel explains why that strategy could help in one or two sentences, noting that more than one strategy can be valid for the same scenario; "Build My Toolkit" button lets the learner select their top 3 preferred strategies to save as a personal summary panel at the end.

Default parameters: Scenario deck order randomized each session; no strategy pre-assigned.

Instructional Rationale: Apply-level objectives require learners to use knowledge in new situations; a drag-and-match activity with open-ended validity (multiple correct strategies) mirrors the real flexibility of stress management better than a single-right-answer quiz.

Implementation notes: p5.js drag-and-drop interactions using mouseIsPressed and rectangle collision detection. Responsive canvas that stacks scenario deck and strategy tiles vertically on narrow screens.
```

## Related Resources

- [Chapter 9: Substance Use Culture, Safety, and Risk](../../bands/grade-6-8/chapters/09-substance-use-culture-safety-and-risk/index.md)
