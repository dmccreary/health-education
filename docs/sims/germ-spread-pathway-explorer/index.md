---
title: Germ Spread Pathway Explorer
description: Students identify and explain the five common pathways germs use to spread between people, surfaces, and hosts.
status: scaffold
library: p5.js
bloom_level: Understand (L2)
---

# Germ Spread Pathway Explorer



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 5: Wellness and Disease Prevention](../../bands/grade-4/chapters/05-wellness-and-disease-prevention/index.md).

```text
Type: infographic
**sim-id:** germ-spread-pathway-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain, identify, describe

Learning objective: Students identify and explain the five common pathways germs use to spread between people, surfaces, and hosts.

Canvas layout:
- Left (450px): A central illustrated classroom/home scene with five labeled hotspots representing each pathway
- Right (250px): Infobox panel showing pathway name, description, and one prevention tip

Visual elements:
- Hotspots: "Direct Contact" (two hands), "Respiratory Droplets" (a cough/sneeze icon), "Contaminated Surfaces" (a doorknob), "Contaminated Food/Water" (a glass and plate), "Insect/Animal Bites" (a mosquito icon)
- Each hotspot glows softly when hovered to invite clicking

Interactive controls:
- Click each hotspot to reveal its pathway description and one matching prevention tip in the infobox
- Button: "Show All Pathways" reveals a summary list after all five have been explored

Default parameters:
- All 5 hotspots visible from the start; no required order

Data Visibility Requirements:
  Stage 1: Show the full illustrated scene with all five hotspots
  Stage 2: Show pathway name and description once a hotspot is clicked
  Stage 3: Show one linked prevention tip for that specific pathway
  Final: Show all five pathways together with their prevention tips once all have been explored

Behavior:
- Each hotspot always reveals the same information regardless of click order
- The prevention tip shown for each pathway previews the Disease Prevention Strategies section that follows

Instructional Rationale: This is an Understand-level objective, so the design uses concrete, click-to-reveal exploration of a static scene rather than animation, letting students connect each pathway to a specific real-world example at their own pace.

Implementation notes: Use p5.js with simple flat illustrations. Keep the scene ordinary (classroom or kitchen) and non-alarming.
```

## Related Resources

- [Chapter 5: Wellness and Disease Prevention](../../bands/grade-4/chapters/05-wellness-and-disease-prevention/index.md)
