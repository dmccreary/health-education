---
title: Depression Symptom and Cause Explorer
description: Students classify a set of realistic scenario
status: scaffold
library: p5.js
bloom_level: Understand (L2)
---

# Depression Symptom and Cause Explorer



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 5: Mental Health and Crisis Support](../../bands/grade-9-12/chapters/05-mental-health-and-crisis-support/index.md).

```text
Type: infographic

**sim-id:** depression-symptom-cause-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy Level: Understand (L2)
Bloom Verb: explain, classify, summarize

Learning objective: Students classify a set of realistic scenario
descriptions as consistent with clinical depression symptoms versus
ordinary, temporary low mood, and explain which contributing factor
(genetics, brain chemistry, life stressors, trauma, chronic illness) is
most relevant to a given scenario.

Canvas layout:
- Left (55%): seven labeled symptom cards (persistent sadness, loss of
  interest, sleep changes, appetite changes, fatigue, concentration
  difficulty, feelings of worthlessness) shown as reference material
- Right (45%): a scenario card describing a short, realistic situation and
  two buttons, "Consistent With Depression" and "Ordinary, Temporary Low
  Mood"

Data Visibility Requirements:
  Stage 1: Show all seven symptom cards with one-sentence clinical
  definitions
  Stage 2: Show one scenario from a bank of 12 (mixing genuine
  multi-symptom, multi-week patterns with one-off disappointments)
  Stage 3: After the learner classifies the scenario, show whether they
  were correct, which symptoms are present if any, and which contributing
  factor is most relevant
  Stage 4: Track a running count of correctly classified scenarios

Interactive controls:
- Click any symptom card to see its expanded clinical definition
- Button: "Consistent With Depression" / Button: "Ordinary, Temporary Low
  Mood"
- Button: "Next Scenario"

Default parameters: Scenario bank cycles without repetition until
exhausted, then reshuffles

Instructional Rationale: Classifying scenarios against a defined symptom
set is an Understand-level objective, so step-through classification with
concrete scenarios is used rather than animation, helping students build
an accurate, non-stigmatizing mental model of what depression clinically
is and is not.

Implementation notes: p5.js with an object array of {scenario,
correctCategory, symptomsPresent, relevantFactor, explanation}; no imagery
depicting self-harm or crisis; text-based scenario cards only.
```

## Related Resources

- [Chapter 5: Mental Health and Crisis Support](../../bands/grade-9-12/chapters/05-mental-health-and-crisis-support/index.md)
