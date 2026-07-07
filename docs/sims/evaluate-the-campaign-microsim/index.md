---
title: Evaluate the Campaign MicroSim
description: Students critique short, realistic descriptions of
status: scaffold
library: p5.js
bloom_level: Evaluate (L5)
---

# Evaluate the Campaign MicroSim



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 5: Mental Health and Crisis Support](../../bands/grade-9-12/chapters/05-mental-health-and-crisis-support/index.md).

```text
Type: microsim

**sim-id:** evaluate-the-campaign-microsim<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy Level: Evaluate (L5)
Bloom Verb: critique, assess, justify

Learning objective: Students critique short, realistic descriptions of
mental health awareness campaigns or media portrayals and assess whether
each is likely to reduce or reinforce stigma, justifying their assessment
using the criteria from the chapter text.

Canvas layout:
- Left (55%): a short description of a fictional awareness campaign or
  media portrayal (text only, no depiction of crisis content)
- Right (45%): a rating scale ("Likely Reduces Stigma" to "Likely
  Reinforces Stigma") and a text box for the student's justification
  prompt

Data Visibility Requirements:
  Stage 1: Show campaign/portrayal description and the four evaluation
  criteria (lived experience, concrete next step, non-sensationalized
  language, measured outcomes) as reference
  Stage 2: Student rates the example and selects which criteria it meets
  or fails
  Stage 3: Reveal a model assessment with reasoning, allowing comparison
  to the student's own rating
  Stage 4: Track how many examples the student has evaluated across a
  bank of 8

Interactive controls:
- Rating slider or button set
- Checkboxes for each of the four criteria
- Button: "Reveal Model Assessment"
- Button: "Next Example"

Default parameters: Example bank includes both strong and weak campaign
examples, text-only, no crisis imagery or scenario content

Instructional Rationale: Critiquing real-world communication artifacts
against defined criteria is an Evaluate-level objective, so a rate-and-
justify tool with a model-answer comparison is used rather than a simple
classification task, matching the media-literacy analytical tone
appropriate for this closing section.

Implementation notes: p5.js with an object array of {description,
criteriaMet, modelAssessment}; strictly text-based scenario content, no
depiction of crisis or self-harm.
```

## Related Resources

- [Chapter 5: Mental Health and Crisis Support](../../bands/grade-9-12/chapters/05-mental-health-and-crisis-support/index.md)
