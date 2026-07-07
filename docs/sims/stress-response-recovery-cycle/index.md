---
title: Stress Response and Recovery Cycle
description: Students apply a restorative practice to a simulated stress scenario and observe how a simple body-based measure (a simplified stress-level indicator, not a real biometric) responds differently depending on which practice is chosen.
status: scaffold
library: p5.js
bloom_level: Apply (L3)
---

# Stress Response and Recovery Cycle



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 4: Emotional Well-Being and Mental Health](../../bands/grade-6-8/chapters/04-emotional-well-being-and-mental-health/index.md).

```text
Type: microsim
**sim-id:** stress-response-recovery-cycle<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: apply, demonstrate, practice

Learning objective: Students apply a restorative practice to a simulated stress scenario and observe how a simple body-based measure (a simplified stress-level indicator, not a real biometric) responds differently depending on which practice is chosen.

Canvas layout: Left side (450px) shows a simplified stress-level gauge (0-100, starting at a stressed value like 75) with a short scenario description above it. Right side (150px) shows practice-selection buttons.

Visual elements: A gauge or bar showing "Stress Level," a scenario text box, five buttons representing restorative practices (Deep Breathing, Walk, Journaling, Talk to Someone, Consistent Sleep).

Interactive controls: Buttons for each restorative practice; a "New Scenario" button to load a different stress scenario; a "Reset" button.

Default parameters: Starting stress level of 75 out of 100; five practice buttons each reduce the gauge by a modest, realistic amount (10-20 points) over a short step-through animation, not an instant jump.

Data Visibility Requirements: Stage 1 shows the scenario and starting stress level; Stage 2 shows the student's practice choice; Stage 3 shows the gauge decreasing in a labeled, stepped animation with a caption naming what is physically happening (e.g., "Heart rate slowing"); Final stage shows the new stress level and a one-sentence explanation of why that practice helped.

Instructional Rationale: Applying a chosen strategy and observing its effect is Apply-level, so a step-through interaction with a visible, labeled gauge is used instead of an abstract animation, keeping the connection between action and effect concrete.

Implementation notes: p5.js. Scenario and practice-effect data stored as objects; gauge implemented as a simple animated rectangle or arc; responsive to window resize.
```

## Related Resources

- [Chapter 4: Emotional Well-Being and Mental Health](../../bands/grade-6-8/chapters/04-emotional-well-being-and-mental-health/index.md)
