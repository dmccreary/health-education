---
title: Inclusive Environment Design Studio
description: Students design a set of concrete policy, physical
status: scaffold
library: p5.js
bloom_level: Create (L6)
---

# Inclusive Environment Design Studio



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 6: Conflict Resolution and Inclusion](../../bands/grade-9-12/chapters/06-conflict-resolution-and-inclusion/index.md).

```text
Type: microsim

**sim-id:** inclusive-environment-design-studio<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy Level: Create (L6)
Bloom Verb: design, formulate, construct

Learning objective: Students design a set of concrete policy, physical
space, and norm interventions for a given environment (a classroom, a
sports team, or a club) that systemically build inclusion, going beyond
individual acts of kindness.

Canvas layout:
- Left (40%): a description of a realistic environment with 2-3 named
  exclusion risk points (e.g., a classroom where group work always uses
  the same self-selected teams)
- Right (60%): three labeled design columns — Policy, Physical Space,
  Norms — into which the student drags or types their own proposed
  interventions

Data Visibility Requirements:
  Stage 1: Show the environment description and its named risk points
  Stage 2: Student proposes at least one intervention per column
  addressing the risk points
  Stage 3: Reveal a set of model interventions for comparison, organized
  by the same three columns, with a one-sentence rationale for each
  Stage 4: Student can revise their own design after seeing the model
  set, and a short reflection prompt asks what they would change and why

Interactive controls:
- Text input or drag-and-drop cards for each of the three design columns
- Button: "Compare to Model Interventions"
- Button: "Revise My Design"
- Button: "New Environment Scenario" (3 scenario sets: classroom, sports
  team, club)

Default parameters: Scenario bank includes classroom, sports team, and
club settings; model interventions cover concrete, realistic examples
(mixed seating charts, rotating group assignments, accessible physical
space, explicit newcomer-inclusion norms)

Instructional Rationale: Designing original systemic interventions across
three levels (policy, space, norms) is a Create-level objective — the
peak cognitive demand for this grade band — so a construction tool with a
model-comparison step is used rather than a selection or rating task,
requiring students to generate their own solutions before seeing an
expert model.

Implementation notes: p5.js with draggable/editable card interface across
three columns; object array of {environment, riskPoints, modelPolicy,
modelSpace, modelNorms, rationale} for each of the three scenarios.
```

## Related Resources

- [Chapter 6: Conflict Resolution and Inclusion](../../bands/grade-9-12/chapters/06-conflict-resolution-and-inclusion/index.md)
