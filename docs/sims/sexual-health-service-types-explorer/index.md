---
title: Sexual Health Service Types Explorer
description: Students classify which type of healthcare service
status: scaffold
library: p5.js
bloom_level: Understand (L2)
---

# Sexual Health Service Types Explorer



<iframe src="main.html" width="100%" height="544px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 4: Healthcare Access and Sexual Health](../../bands/grade-9-12/chapters/04-healthcare-access-and-sexual-health/index.md).

```text
Type: infographic

**sim-id:** sexual-health-service-types-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy Level: Understand (L2)
Bloom Verb: classify, summarize, exemplify

Learning objective: Students classify which type of healthcare service
(STI clinic, school-based health center, community health center, primary
care, telehealth) best fits a given adolescent scenario, and summarize the
distinguishing features of each service type.

Canvas layout:
- Left (55%): five labeled service-type panels shown at once, each with a
  one-sentence description
- Right (45%): a scenario card describing a student's situation (e.g.,
  "needs a same-day confidential test result but has no transportation")
  and a set of five buttons, one per service type

Data Visibility Requirements:
  Stage 1: Show all five service types and their descriptions as reference
  Stage 2: Show one scenario from a bank of 10
  Stage 3: After the learner selects a service type, show whether it is
  the best fit and a one-line explanation of why
  Stage 4: Track a running count of correctly matched scenarios

Interactive controls:
- Click a service-type panel to see an expanded description and example
- Click one of five buttons to answer the current scenario
- Button: "Next Scenario"

Default parameters: Scenario bank cycles without repetition until
exhausted, then reshuffles

Instructional Rationale: This is an Understand-level objective, so the
design favors step-through matching with concrete scenarios rather than
open-ended search, helping students build a working mental map of which
resource fits which situation.

Implementation notes: p5.js with an object array of {scenario,
bestServiceType, explanation}; correct/incorrect feedback shown through
color change and text panel.
```

## Related Resources

- [Chapter 4: Healthcare Access and Sexual Health](../../bands/grade-9-12/chapters/04-healthcare-access-and-sexual-health/index.md)
