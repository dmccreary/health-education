---
title: Supporting an Elder With Dementia Scenario Simulator
description: Students apply respectful support strategies
status: scaffold
library: p5.js
bloom_level: Apply (L3)
---

# Supporting an Elder With Dementia Scenario Simulator



<iframe src="main.html" width="100%" height="542px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 7: Brain Health, Sleep, and Emergency Care](../../bands/grade-9-12/chapters/07-brain-health-sleep-and-emergency-care/index.md).

```text
Type: microsim

**sim-id:** supporting-elder-dementia-scenario-simulator<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy Level: Apply (L3)
Bloom Verb: apply, demonstrate, practice

Learning objective: Students apply respectful support strategies
(maintaining routine, adapting communication, patience with repetition,
preserving dignity, connecting with resources) to realistic family
scenarios involving an elder with cognitive impairment.

Canvas layout:
- Left (55%): a short, respectful scenario (e.g., "Your grandmother asks
  where her late husband is for the third time this visit")
- Right (45%): four or five response-strategy cards the student selects
  from, each naming a support strategy

Data Visibility Requirements:
  Stage 1: Show the scenario and all response-strategy options
  Stage 2: Student selects the response they believe is most supportive
  Stage 3: Reveal an explanation of why that response supports dignity
  and reduces distress, and, where more than one response is reasonable,
  acknowledge that other compassionate responses may also work
  Stage 4: Show a running count of scenarios completed out of a bank of 6

Interactive controls:
- Click to select a response card
- Button: "Show Explanation"
- Button: "Next Scenario"

Default parameters: Scenario bank of 6 realistic, respectful family
situations; feedback always explains the reasoning rather than only
marking right or wrong

Instructional Rationale: Applying a specific support strategy to a
realistic family scenario is an Apply-level objective, so a
scenario-response tool with explanatory feedback is used rather than a
passive list of caregiving tips, since real application requires judgment
about which strategy fits a specific, emotionally sensitive moment.

Implementation notes: p5.js; all scenario and feedback text written with
dignity and compassion, avoiding fear-based or clinical-sounding language;
object array of {scenario, options, bestResponse, explanation}.
```

## Related Resources

- [Chapter 7: Brain Health, Sleep, and Emergency Care](../../bands/grade-9-12/chapters/07-brain-health-sleep-and-emergency-care/index.md)
