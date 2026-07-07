---
title: Healthy Friend Traits Sorter
description: Students identify and classify short scenario cards as showing a healthy or unhealthy peer trait, then explain what makes each one healthy or unhealthy.
status: scaffold
library: p5.js
bloom_level: Understand (L2)
---

# Healthy Friend Traits Sorter



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 4: Friendship, Uniqueness, and Belonging](../../bands/grade-1/chapters/04-friendship-and-belonging/index.md).

```text
Type: microsim
**sim-id:** healthy-friend-traits-sorter<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: classify, identify, describe

Learning objective: Students identify and classify short scenario cards as showing a healthy or unhealthy peer trait, then explain what makes each one healthy or unhealthy.

Canvas layout:
- Left area (450px): One scenario card at a time (simple flat illustration plus one sentence, e.g., "Maya waits for her turn on the swings.")
- Right area (150px): Two bins labeled "Healthy Trait" and "Not Yet Healthy" and an infobox

Visual elements:
- 10 scenario cards cycling one at a time, showing both healthy examples (sharing, listening, including) and unhealthy examples (grabbing, interrupting, leaving someone out)
- Two large, clearly labeled bins with friendly icons (a heart for "Healthy Trait", a thinking-face for "Not Yet Healthy")

Interactive controls:
- Click-to-select: student clicks the bin that matches the scenario
- Button: "Next Scenario"
- Button: "Reset"

Default parameters:
- First scenario: "Maya waits for her turn on the swings" (clearly healthy, to build confidence)

Data Visibility Requirements:
  Stage 1: Show the scenario card with no label
  Stage 2: After the student clicks a bin, show whether it matches
  Stage 3: Reveal a one-sentence explanation ("Waiting your turn is a healthy trait because it's fair to everyone.")

Behavior:
- Correct match: bin glows, gentle chime, explanation caption appears
- Incorrect match: gentle prompt, "Look again — how would this make the other person feel?" and the correct bin glows softly as a hint

Instructional Rationale: This is an Understand-level (identify/classify) objective, so the MicroSim reveals a concrete explanation after each answer rather than using continuous animation, helping students connect each scenario to the underlying trait it demonstrates.

Implementation notes: Use p5.js. Large, simple, flat-style illustrations with diverse characters. Teacher reads each scenario and explanation aloud.
```

## Related Resources

- [Chapter 4: Friendship, Uniqueness, and Belonging](../../bands/grade-1/chapters/04-friendship-and-belonging/index.md)
