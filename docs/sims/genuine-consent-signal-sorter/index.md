---
title: Genuine Yes or Reluctant Compliance?
description: Students analyze short described interactions
status: scaffold
library: p5.js
bloom_level: Analyze (L4)
---

# Genuine Yes or Reluctant Compliance?



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 3: Consent and Boundaries](../../bands/grade-9-12/chapters/03-consent-and-boundaries/index.md).

```text
Type: microsim

**sim-id:** genuine-consent-signal-sorter<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy Level: Analyze (L4)
Bloom Verb: differentiate, distinguish, examine

Learning objective: Students analyze short described interactions
(verbal response, body language, tone, and context together) and
distinguish genuine, enthusiastic consent from reluctant compliance,
silence, or a freeze response.

Canvas layout:
- Top: a scenario card describing a brief interaction with four
  observable signals (verbal response, body language, tone, context)
- Bottom: two drop zones, "Genuine Yes" and "Not Genuine Consent"

Interactive controls:
- Drag-and-drop each scenario card into the correct zone
- Button: "Check My Sorting"
- Button: "Next Scenario"
- Button: "Show Reasoning" — reveals which specific signal(s) indicated
  the correct classification

Default parameters: 12 preloaded scenarios spanning physical affection,
sharing images, and sharing personal information contexts, including at
least three "freeze or silence mistaken for agreement" examples and three
"pressure preceded the answer" examples

Behavior: correct placements highlight green with the deciding signal
underlined; incorrect placements highlight red with the correct signal
explained; running score displayed

Instructional Rationale: This is an Analyze-level objective requiring
students to examine multiple simultaneous signals and distinguish subtle
categories (genuine yes vs. freeze vs. reluctant compliance) rather than
recall a single rule. Sorting realistic multi-signal scenarios builds
that discrimination skill better than a static list of examples would.

Implementation notes: p5.js drag-and-drop; store each scenario as a JSON
object with four signal fields, correct classification, and explanation
text.
```

## Related Resources

- [Chapter 3: Consent and Boundaries](../../bands/grade-9-12/chapters/03-consent-and-boundaries/index.md)
