---
title: The Five Requirements of Consent
description: Students classify short example statements as meeting
status: scaffold
library: p5.js
bloom_level: Understand (L2)
---

# The Five Requirements of Consent



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 3: Consent and Boundaries](../../bands/grade-9-12/chapters/03-consent-and-boundaries/index.md).

```text
Type: infographic

**sim-id:** consent-requirements-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy Level: Understand (L2)
Bloom Verb: classify, exemplify, interpret

Learning objective: Students classify short example statements as meeting
or failing each of the five consent requirements (freely given, reversible,
informed, enthusiastic, specific), building a working, transferable
definition of consent.

Canvas layout:
- Left (60%): five labeled panels arranged vertically, one per
  requirement, each showing its one-sentence definition
- Right (40%): an example card and two buttons, "Meets This Requirement"
  and "Fails This Requirement"

Data Visibility Requirements:
  Stage 1: Show the five requirement names and definitions all at once as
  reference
  Stage 2: Show one example statement drawn from a bank of 15 (covering
  physical affection, image-sharing, and information-sharing contexts)
  Stage 3: After the learner classifies it against the currently
  highlighted requirement, show whether they were correct and a one-line
  explanation
  Stage 4: Track and display a running count of correctly classified
  examples across all five requirements

Interactive controls:
- Click each of the five requirement panels to highlight it as the
  "active" requirement being tested
- Button: "Meets This Requirement" / "Button: Fails This Requirement"
- Button: "Next Example"

Default parameters: Requirement 1 (Freely Given) active at start; example
bank cycles without repetition until exhausted, then reshuffles

Instructional Rationale: This is an Understand-level objective, so the
design favors step-through classification with concrete, varied examples
over animation. Seeing the same five requirements tested against very
different contexts (a hug, a shared photo, a forwarded text) is what
builds the transferable, general model of consent the chapter requires,
rather than a definition tied to one narrow scenario.

Implementation notes: p5.js with an object array of {requirement, example,
correctAnswer, explanation}; highlight active requirement panel in gold;
correct/incorrect feedback shown via color change and text panel.
```

## Related Resources

- [Chapter 3: Consent and Boundaries](../../bands/grade-9-12/chapters/03-consent-and-boundaries/index.md)
