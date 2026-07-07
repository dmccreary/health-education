---
title: What Makes a Provider Culturally Safe?
description: Students explain the specific practices that make a
status: scaffold
library: p5.js
bloom_level: Understand (L2)
---

# What Makes a Provider Culturally Safe?



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 4: Healthcare Access and Sexual Health](../../bands/grade-9-12/chapters/04-healthcare-access-and-sexual-health/index.md).

```text
Type: infographic

**sim-id:** culturally-safe-provider-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy Level: Understand (L2)
Bloom Verb: explain, classify, exemplify

Learning objective: Students explain the specific practices that make a
healthcare provider culturally safe and classify example provider
behaviors as culturally safe or culturally unsafe.

Canvas layout:
- Left (55%): a central node "Culturally Safe Provider" connected to four
  spokes: Asks Rather Than Assumes, Communicates Clearly, Acknowledges
  Historical Mistrust, Adapts Care to Context
- Right (45%): a scenario card showing a short provider behavior example
  and two buttons, "Culturally Safe" and "Culturally Unsafe"

Data Visibility Requirements:
  Stage 1: Show all four spokes and their one-sentence definitions as
  reference material
  Stage 2: Show one example provider behavior (12 examples in the bank,
  covering assumptions about family structure, language access, and
  historical mistrust)
  Stage 3: After the learner classifies the example, show whether they
  were correct and which spoke it relates to, with a one-line explanation
  Stage 4: Track a running count of correctly classified examples

Interactive controls:
- Click any spoke to see its expanded definition and a real-world example
- Button: "Culturally Safe" / Button: "Culturally Unsafe"
- Button: "Next Example"

Default parameters: Example bank cycles without repetition until
exhausted, then reshuffles

Instructional Rationale: This is an Understand-level objective, so the
design favors step-through classification with concrete examples over
animation. Testing the same four practices against varied provider
scenarios builds a transferable model of cultural safety rather than one
tied to a single narrow example.

Implementation notes: p5.js with an object array of {behavior, correctCategory,
relatedSpoke, explanation}; spokes highlighted in gold when active;
correct/incorrect feedback shown through color change and text panel.
```

## Related Resources

- [Chapter 4: Healthcare Access and Sexual Health](../../bands/grade-9-12/chapters/04-healthcare-access-and-sexual-health/index.md)
