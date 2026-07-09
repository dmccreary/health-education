---
title: Stereotype vs. Evidence Sorter
description: Students evaluate short relationship scenarios and
status: scaffold
library: p5.js
bloom_level: Evaluate (L5)
---

# Stereotype vs. Evidence Sorter



<iframe src="main.html" width="100%" height="534px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 2: Relationships and Respect](../../bands/grade-9-12/chapters/02-relationships-and-respect/index.md).

```text
Type: microsim

**sim-id:** stereotype-evidence-sorter<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy Level: Evaluate (L5)
Bloom Verb: judge, critique, justify

Learning objective: Students evaluate short relationship scenarios and
judge whether a described reaction is based on evidence about the
specific relationship or on a stereotype about a group, then justify
their judgment.

Canvas layout:
- Top: scenario card describing a relationship situation and someone's
  reaction to it
- Bottom: two drop zones labeled "Evidence-Based" and "Stereotype-Based"

Interactive controls:
- Drag-and-drop: drag each scenario card into the correct zone
- Button: "Check My Sorting"
- Button: "Next Scenario"
- Button: "Show Reasoning" — reveals a justification explaining why the
  correct classification applies

Default parameters: 10 preloaded scenarios spanning gender-role
assumptions, LGBTQ+ bias, racial/ethnic stereotypes about relationships,
and a healthcare-access bias example

Behavior:
- After sorting, correct placements highlight green and incorrect
  placements highlight red with the reasoning shown
- Running score displayed; scenarios can be reshuffled for repeat
  practice

Instructional Rationale: An Evaluate-level objective requires students to
judge and justify, not just recall a definition. Sorting real scenarios
with justification-on-demand builds the habit of pausing to ask "is this
evidence about this relationship, or an assumption about a category"
before reacting.

Implementation notes: p5.js drag-and-drop with card objects and zone
bounding boxes; store scenario text and correct classification plus
justification in a JSON array.
```

## Related Resources

- [Chapter 2: Relationships and Respect](../../bands/grade-9-12/chapters/02-relationships-and-respect/index.md)
