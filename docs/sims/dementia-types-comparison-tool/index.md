---
title: Dementia Types Comparison Tool
description: Students differentiate Alzheimer's disease, vascular
status: scaffold
library: p5.js
bloom_level: Analyze (L4)
---

# Dementia Types Comparison Tool



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 7: Brain Health, Sleep, and Emergency Care](../../bands/grade-9-12/chapters/07-brain-health-sleep-and-emergency-care/index.md).

```text
Type: infographic

**sim-id:** dementia-types-comparison-tool<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy Level: Analyze (L4)
Bloom Verb: differentiate, compare, examine

Learning objective: Students differentiate Alzheimer's disease, vascular
dementia, Lewy body dementia, and frontotemporal dementia by cause,
typical early symptoms, and progression pattern.

Layout: Four labeled columns, one per dementia type, each with three rows:
Underlying Cause, Typical Early Symptoms, Progression Pattern

Data Visibility Requirements:
  Stage 1: Show all four columns populated with the chapter's descriptions
  Stage 2: Clicking a column header opens an infobox with one additional
  respectful, factual detail about that type
  Stage 3: A short scenario describing a person's symptoms is shown, and
  the learner selects which dementia type it most closely resembles,
  reinforcing the distinguishing features
  Stage 4: Reveal explanation naming which specific detail in the
  scenario pointed to that type

Interactive controls: Click any column header for expanded detail; button
"Try a Scenario" reveals a symptom description and answer options; button
"Next Scenario" cycles through 3 scenarios

Instructional Rationale: Differentiating several related conditions by
their distinguishing features is an Analyze-level objective, so a
structured comparison with a scenario-matching check is used rather than
simple recall of a definition list.

Implementation notes: p5.js; content written in respectful, non-alarmist
language; no graphic or frightening imagery; scenario data stored as an
array of {symptoms, correctType, explanation} objects.
```

## Related Resources

- [Chapter 7: Brain Health, Sleep, and Emergency Care](../../bands/grade-9-12/chapters/07-brain-health-sleep-and-emergency-care/index.md)
