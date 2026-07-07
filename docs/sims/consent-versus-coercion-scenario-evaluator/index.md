---
title: Consent Versus Coercion Scenario Evaluator
description: Students evaluate short scenarios and judge whether the outcome reflects genuine consent or coercion, justifying their reasoning.
status: scaffold
library: p5.js
bloom_level: Evaluate (L5)
---

# Consent Versus Coercion Scenario Evaluator



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 6: Personal Safety And Violence Prevention](../../bands/grade-5/chapters/06-personal-safety-and-violence-prevention/index.md).

```text
Type: microsim
**sim-id:** consent-versus-coercion-scenario-evaluator<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Evaluate (L5)
Bloom Taxonomy Verb: judge, justify, assess

Learning objective: Students evaluate short scenarios and judge whether the outcome reflects genuine consent or coercion, justifying their reasoning.

Canvas layout: Left (450px) scenario text; right (200px) two judgment buttons ("Consent" / "Coercion") and a "Justify It" reveal panel.

Visual elements: Scenario card (e.g., "Maya asks Jordan three times to share his tablet game password. Jordan finally says fine just to stop her from asking."); two judgment buttons.

Interactive controls: Click a judgment button; "Why?" reveals reasoning using the test "Would they have said yes without the pressure?"; "Next Scenario" cycles through 8 scenarios spanning items, photos, secrets, activities, and money.

Behavior: Selecting "Coercion" reveals "Jordan only agreed after repeated asking wore him down — that's coercion, not consent."

Instructional Rationale: Evaluate-level objective requiring justified judgment rather than passive reading.

Implementation notes: p5.js; scenario objects with text, correct judgment, and justification string.
```

## Related Resources

- [Chapter 6: Personal Safety And Violence Prevention](../../bands/grade-5/chapters/06-personal-safety-and-violence-prevention/index.md)
