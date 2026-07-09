---
title: How Physical Activity Helps the Body
description: Students describe how physical activity benefits different parts and functions of the body by exploring a labeled body diagram.
status: scaffold
library: p5.js
bloom_level: Understand (L2)
---

# How Physical Activity Helps the Body



<iframe src="main.html" width="100%" height="492px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 4: Staying Healthy in Our Environment](../../bands/grade-2/chapters/04-staying-healthy-environment/index.md).

```text
Type: infographic
**sim-id:** physical-activity-body-benefits<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain, describe

Learning objective: Students describe how physical activity benefits different parts and functions of the body by exploring a labeled body diagram.

Canvas layout:
- Left area (300px): A simple, friendly outline of a child's body with four labeled hotspot zones (heart/chest, legs, head/brain, whole-body outline)
- Right area (300px): Infobox panel showing benefit text for whichever zone is clicked

Visual elements:
- Simple front-facing cartoon body outline, non-gendered, flat style matching the mascot
- Four glowing hotspot dots at chest, legs, head, and a "whole body" dot near the center

Interactive controls:
- Click each hotspot to reveal a benefit in the infobox
- Button: "Show All" reveals all four benefits at once for review

Default parameters:
- No hotspot selected at start; instructions read "Click a glowing dot to learn how activity helps that part of you."

Data Visibility Requirements:
  Stage 1: Show body outline with four unselected hotspots
  Stage 2: Click chest hotspot -- infobox shows "Physical activity makes your heart and lungs stronger, so they can send energy all over your body."
  Stage 3: Click legs hotspot -- infobox shows "Movement builds strong muscles and bones in your legs and the rest of your body."
  Stage 4: Click head hotspot -- infobox shows "Being active can help your brain feel calmer and help you sleep better at night."
  Stage 5: Click whole-body hotspot -- infobox shows "Your whole body uses energy from food when you move -- that's why eating well and staying active go together."

Behavior:
- Clicking a hotspot highlights it and displays its text; clicking another hotspot switches the highlight and text
- "Show All" displays all four texts stacked in the infobox at once for a wrap-up review

Instructional Rationale: This is an Understand-level (explain/describe) objective, so the design uses a labeled, clickable diagram with concrete benefit statements at each hotspot rather than a continuous animation, letting students explore body-benefit connections at their own pace and revisit any zone.

Implementation notes: Use p5.js. Keep the body outline simple and inclusive of different body types. Use warm, encouraging language in every infobox message.
```

## Related Resources

- [Chapter 4: Staying Healthy in Our Environment](../../bands/grade-2/chapters/04-staying-healthy-environment/index.md)
