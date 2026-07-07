---
title: Heimlich Maneuver Step Sequencer
description: Students apply the correct sequence of steps for recognizing choking and performing the Heimlich maneuver by arranging steps in order and stepping through a worked scenario.
status: scaffold
library: p5.js
bloom_level: Apply (L3)
---

# Heimlich Maneuver Step Sequencer



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 6: Sleep, Fitness, and Emergency Response](../../bands/grade-6-8/chapters/06-sleep-fitness-and-emergency-response/index.md).

```text
Type: microsim
**sim-id:** heimlich-maneuver-step-sequencer<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: demonstrate, execute, apply

Learning objective: Students apply the correct sequence of steps for recognizing choking and performing the Heimlich maneuver by arranging steps in order and stepping through a worked scenario.

Canvas layout: Left side (450px) shows five step cards in scrambled order with simple labeled illustrations (recognize signs, confirm verbally, position hands, perform thrusts, call for help). Right side (150px) shows a "Check Order" button, a step counter, and a note reminding students this is for educational awareness, not certification.

Visual elements: Five numbered drop slots in a vertical sequence; simple diagrams for each step (e.g., a stick-figure icon showing hand position above the navel); a status message area.

Interactive controls: Drag step cards into the correct order; "Check Order" button confirms correct sequence and highlights any out-of-order cards with a hint; "Reset" button; "Show Correct Sequence" button reveals the order with a one-sentence explanation for each step.

Default parameters: Steps scrambled randomly at load; step counter starts at 0 correct.

Instructional Rationale: Correctly sequencing and applying a multi-step safety procedure is an Apply-level task, so a step-ordering exercise with corrective feedback is used rather than a passive diagram, since real application requires knowing what happens first, second, and so on.

Implementation notes: p5.js. Step data stored as an ordered array with text, correct position, and illustration reference. Responsive canvas that reflows on window resize. Include a persistent on-screen note: "For awareness only — get certified hands-on training from a course such as the Red Cross."
```

## Related Resources

- [Chapter 6: Sleep, Fitness, and Emergency Response](../../bands/grade-6-8/chapters/06-sleep-fitness-and-emergency-response/index.md)
