---
title: Ability-Inclusive Classroom Infographic
description: Students explain how everyday classroom tools and adjustments support classmates with different abilities, recognizing that these tools are ordinary, not special treatment.
status: scaffold
library: p5.js
bloom_level: Understand (L2)
---

# Ability-Inclusive Classroom Infographic



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 4: Equity, Belonging, And Bystander Action](../../bands/grade-5/chapters/04-equity-belonging-and-bystander-action/index.md).

```text
Type: infographic
**sim-id:** ability-inclusive-classroom-infographic<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain, exemplify, classify

Learning objective: Students explain how everyday classroom tools and adjustments support classmates with different abilities, recognizing that these tools are ordinary, not special treatment.

Canvas layout:
- Full width (650px): Illustrated classroom scene with 6 clickable hotspots
- Bottom strip (100px): Infobox that displays details for the selected hotspot

Visual elements:
- A friendly, flat-style illustrated classroom with six labeled hotspots: wheelchair ramp/accessible desk, noise-canceling headphones on a hook, a communication device on a desk, large-print worksheet, a quiet corner with a beanbag chair, and a visual daily schedule chart
- Each hotspot glows softly when hovered to indicate it is clickable

Interactive controls:
- Click any of the 6 hotspots to open an infobox describing what the tool is, who might use it, and why it helps
- Button: "Show All Labels" — reveals text labels on every hotspot at once for review
- Button: "Reset"

Default parameters:
- No hotspot selected on load; "Show All Labels" off

Behavior:
- Clicking the wheelchair ramp/accessible desk hotspot explains it removes a physical barrier so a classmate using mobility equipment can reach their desk and the front of the room
- Clicking the noise-canceling headphones hotspot explains they help a classmate whose brain processes sound differently avoid becoming overwhelmed
- Clicking the communication device hotspot explains it lets a classmate who doesn't use spoken words fully participate in class discussion
- Clicking the large-print worksheet hotspot explains it supports a classmate with low vision or certain learning differences
- Clicking the quiet corner hotspot explains it gives any student, especially a neurodivergent student, a calm space to regroup
- Clicking the visual schedule hotspot explains it helps students who benefit from seeing, not just hearing, what happens next

Instructional Rationale: This is an Understand-level objective, so the pattern uses click-to-reveal infoboxes with concrete, real information at each hotspot rather than animation, letting students build accurate mental models of why each tool matters.

Implementation notes: Use p5.js with an array of hotspot objects (x, y, radius, label, description); render infobox text in the bottom strip on click; use warm, neutral colors and avoid exaggerated or stereotyped character depictions.
```

## Related Resources

- [Chapter 4: Equity, Belonging, And Bystander Action](../../bands/grade-5/chapters/04-equity-belonging-and-bystander-action/index.md)
