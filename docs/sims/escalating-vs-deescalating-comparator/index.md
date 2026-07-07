---
title: Escalating vs. De-escalating Language Comparator
description: Students compare accusatory ("you") language against
status: scaffold
library: Chart.js
bloom_level: Understand (L2)
---

# Escalating vs. De-escalating Language Comparator



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 6: Conflict Resolution and Inclusion](../../bands/grade-9-12/chapters/06-conflict-resolution-and-inclusion/index.md).

```text
Type: chart

**sim-id:** escalating-vs-deescalating-comparator<br/>
**Library:** Chart.js<br/>
**Status:** Specified

Bloom Taxonomy Level: Understand (L2)
Bloom Verb: compare, contrast, classify

Learning objective: Students compare accusatory ("you") language against
"I"-statement language across realistic conflict scenarios and classify
which phrasing is more likely to de-escalate a disagreement.

Chart type: Paired horizontal bar chart functioning as a classification
tool

Data Visibility Requirements:
  Stage 1: Show a bank of 8 paired statement examples (one accusatory
  version, one "I"-statement version of the same underlying complaint)
  Stage 2: Student selects, for each pair, which version is more likely to
  de-escalate
  Stage 3: Reveal a short explanation naming the specific communication
  skill (active listening, "I" statement structure, or perspective-taking)
  that the de-escalating version demonstrates
  Stage 4: Track a running score across all 8 pairs

X-axis: Not applicable — statement pairs are displayed as labeled text
cards rather than a plotted numeric axis

Interactive features: Clicking a statement card selects it as the
student's choice; hovering reveals which communication skill category the
statement belongs to before the student commits to an answer

Title: "Which Statement Is More Likely to De-escalate the Conflict?"

Instructional Rationale: Classifying realistic statement pairs against a
defined standard is an Understand-level objective, so paired comparison
with revealed explanation is used rather than open-ended chart
interpretation, keeping the focus on recognizing the communication
pattern rather than on numeric data.

Implementation notes: Chart.js used as a structured card-comparison
interface rather than a traditional plotted chart; data stored as an array
of {accusatory, iStatement, skillDemonstrated, explanation} objects.
```

## Related Resources

- [Chapter 6: Conflict Resolution and Inclusion](../../bands/grade-9-12/chapters/06-conflict-resolution-and-inclusion/index.md)
