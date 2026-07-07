---
title: Health Influence Manager
description: Students identify strategies and resources that can manage a given health-behavior influence, matching influence cards to the strategy cards that address them.
status: scaffold
library: p5.js
bloom_level: Analyze (L4)
---

# Health Influence Manager



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 7: Health Skills And Goal Setting](../../bands/grade-5/chapters/07-health-skills-and-goal-setting/index.md).

```text
Type: microsim
**sim-id:** health-influence-manager<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: identify, examine, organize

Learning objective: Students identify strategies and resources that can manage a given health-behavior influence, matching influence cards to the strategy cards that address them.

Canvas layout: Left (450px) a deck of 8 influence cards (e.g., "Ad for sugary cereal," "Friend says homework can wait," "Family always orders fast food on Fridays," "Feeling stressed before a test"); right (200px) a strategy shelf with 5 strategy cards (pause before reacting, ask whose idea it is, talk to a trusted adult, suggest an alternative, seek supportive influences) plus a feedback panel.

Interactive controls: Drag or click an influence card onto the strategy card that best manages it; "Check My Match" reveals whether the pairing makes sense with a one-sentence reason; "New Round" shuffles a new set of 8 influence cards.

Default parameters: Round 1 pre-loads with 8 influence cards, no matches made.

Behavior: Matching "Friend says homework can wait" with "Suggest an alternative" reveals "Proposing 'let's both study first, then play' manages the influence instead of just resisting it alone."

Instructional Rationale: Analyze-level objective, so students examine each influence's structure and organize it against a matching strategy rather than simply recalling a definition.

Implementation notes: p5.js; influence and strategy objects stored as arrays with id, label, and a matches[] array of acceptable pairings with reason text.
```

## Related Resources

- [Chapter 7: Health Skills And Goal Setting](../../bands/grade-5/chapters/07-health-skills-and-goal-setting/index.md)
