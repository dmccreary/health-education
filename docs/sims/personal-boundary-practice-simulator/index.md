---
title: Practice Setting a Boundary
description: Students practice using clear boundary-setting language by choosing the best response in short, everyday scenarios involving personal space or belongings.
status: scaffold
library: p5.js
bloom_level: Apply (L3)
---

# Practice Setting a Boundary



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 5: Relationships And Respect](../../bands/grade-3/chapters/05-relationships-and-respect/index.md).

```text
Type: microsim
**sim-id:** personal-boundary-practice-simulator<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: use, demonstrate, practice

Learning objective: Students practice using clear boundary-setting language by choosing the best response in short, everyday scenarios involving personal space or belongings.

Canvas layout:
- Left side (400px): One scenario at a time (e.g., "A cousin wants to borrow your favorite toy without asking" or "A friend keeps tickling you after you asked them to stop")
- Right side (200px): Three response choice buttons (a clear boundary statement, a silent/no-response option, an unkind response) plus a "Show What Happens" button

Visual elements:
- Simple scenario illustration with two friendly characters
- Three response buttons with plain text

Interactive controls:
- Click the response the student would choose
- Button: "Show What Happens"
- Button: "Next Scenario"

Default parameters:
- Begins on scenario 1 of 4 with no response chosen

Data Visibility Requirements:
  Stage 1: Show the scenario and three response choices
  Stage 2: After a choice and clicking "Show What Happens," reveal a short, calm outcome and explanation (e.g., "Saying 'Please stop, I don't like that' is clear and respectful — it tells your friend exactly what you need.")
  Stage 3: "Next Scenario" loads a new situation, resetting the choices

Behavior:
- The clear boundary statement is affirmed as the strongest choice, with a one-sentence reason
- Other choices receive a gentle, non-judgmental explanation of why a clear boundary statement usually works better
- After all four scenarios, a "Boundary-Setting Star!" caption appears, along with a reminder that a trusted adult can always help if a boundary is not respected

Instructional Rationale: This is an Apply-level objective (use, demonstrate, practice), so the design lets students actively choose and test boundary-setting language in realistic scenarios, rather than only reading about the concept, which builds a practical skill they can use in real situations.

Implementation notes: Use p5.js. Keep every scenario mild and age-appropriate (toys, personal space, tickling, hugs) — never depict abuse or unsafe situations. Every scenario path should end supportively. This MicroSim is the direct student-facing practice activity for this K-3 band.
```

## Related Resources

- [Chapter 5: Relationships And Respect](../../bands/grade-3/chapters/05-relationships-and-respect/index.md)
