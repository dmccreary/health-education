---
title: Perspective-Taking Scenario Explorer
description: Students interpret a short relationship scenario from two different characters' perspectives and explain how each character's feelings shape what an empathetic response would look like.
status: scaffold
library: p5.js
bloom_level: Understand (L2)
---

# Perspective-Taking Scenario Explorer



<iframe src="main.html" width="100%" height="514px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 4: Emotional Well-Being and Mental Health](../../bands/grade-6-8/chapters/04-emotional-well-being-and-mental-health/index.md).

```text
Type: microsim
**sim-id:** perspective-taking-scenario-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain, interpret, infer

Learning objective: Students interpret a short relationship scenario from two different characters' perspectives and explain how each character's feelings shape what an empathetic response would look like.

Layout: A scenario text box describing a everyday middle-school situation (e.g., a friend cancels plans last-minute) with two character-perspective buttons ("See It From [Character A]'s View" and "See It From [Character B]'s View").

Interactive controls: Clicking each perspective button reveals that character's likely feelings and reasons; a third button, "What Would Empathy Look Like Here?", reveals a model empathetic response after both perspectives have been viewed; "New Scenario" button cycles to a different situation (4-5 scenarios total).

Default parameters: Scenario list preloaded with everyday, non-crisis relationship situations only.

Instructional Rationale: Interpreting a situation from multiple perspectives and explaining the reasoning behind an empathetic response is Understand-level, so a two-perspective reveal with a modeled response is used rather than open-ended role-play.

Implementation notes: p5.js. Scenario, perspective, and model-response text stored as data objects; responsive layout for window resize.
```

## Related Resources

- [Chapter 4: Emotional Well-Being and Mental Health](../../bands/grade-6-8/chapters/04-emotional-well-being-and-mental-health/index.md)
