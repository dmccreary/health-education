---
title: Family and Peer Influence Sorter
description: Students analyze short scenarios and differentiate whether a decision is being influenced mainly by family, mainly by peers, or by both, and examine whether the influence pushes the decision toward or away from health.
status: scaffold
library: p5.js
bloom_level: Analyze (L4)
---

# Family and Peer Influence Sorter



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 1: Foundations and Trusted Adults](../../bands/grade-5/chapters/01-foundations-and-trusted-adults/index.md).

```text
Type: microsim
**sim-id:** family-peer-influence-sorter<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: compare, contrast, differentiate, examine

Learning objective: Students analyze short scenarios and differentiate whether a decision is being influenced mainly by family, mainly by peers, or by both, and examine whether the influence pushes the decision toward or away from health.

Canvas layout:
- Top area (400x150): One scenario shown at a time in a speech-bubble style card
- Middle area (400x120): Two labeled drop zones side by side — "Family Influence" and "Peer Influence" — with a smaller overlapping zone labeled "Both"
- Bottom area (400x100): A second choice after sorting — buttons "Toward Health" and "Away From Health" — plus "Next Scenario" and feedback caption

Visual elements:
- 10 scenario cards, such as: "Your older sister always packs a water bottle, so you started doing it too," "Your friends dared you to try a vape at a party," "Your family walks the dog together every evening," "A classmate convinced the group to leave someone out at recess," "Your parents ask about your day at dinner, which helps you talk through feelings"

Interactive controls:
- Click-and-drag or click-to-select the scenario card into the Family, Peer, or Both zone
- After sorting, click "Toward Health" or "Away From Health" to judge the direction of the influence
- Button: "Next Scenario"
- Button: "Reset" to start the set over

Default parameters:
- Scenarios presented in shuffled order; no pre-sorted answers shown at start

Behavior:
- Correct source classification shows a green highlight with a one-sentence explanation of why that source applies
- Correct direction judgment shows a brief note connecting it back to the health definition from earlier in the chapter
- A running score tracker shows scenarios completed and correct out of 10

Instructional Rationale: Differentiating between influence sources and judging their direction is an Analyze-level task, so the pattern uses a sorting-and-classifying interaction with immediate explanatory feedback rather than a passive animation, which keeps students actively comparing sources rather than watching a demonstration.

Implementation notes: Use p5.js. Store scenarios as an array of objects with fields for text, correct source (family/peer/both), and correct direction (toward/away), enabling easy reshuffling and scoring.
```

## Related Resources

- [Chapter 1: Foundations and Trusted Adults](../../bands/grade-5/chapters/01-foundations-and-trusted-adults/index.md)
