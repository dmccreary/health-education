---
title: "From Store to Plate — Keeping Food Safe"
description: "A left-to-right food-safety workflow where Grade 2 students tap each stage (storage, preparation, and handling) to reveal its safety rule."
status: complete
library: Mermaid
bloom_level: Understand (L2)
---

# From Store to Plate — Keeping Food Safe

<iframe src="main.html" width="100%" height="332px" scrolling="no"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## About This Workflow

Food travels through three stages before it reaches your plate: it is **stored**, it is **prepared**, and it is **handled**. Each stage has its own safety habit. Tap or hover any box in the flowchart to reveal the safety rule for that stage, then follow the arrows to see how all three steps work together to keep food safe to eat.

## Specification

The full specification below is extracted from
[Food, Energy, and Safe Eating](../../bands/grade-2/chapters/02-food-energy-safe-eating/index.md).

```text
Type: workflow
sim-id: food-safety-workflow
Library: Mermaid
Status: Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: describe, explain, classify

Learning objective: Students describe why safe practices matter at each stage food
travels through — storage, preparation, and handling — by clicking each step to
reveal its safety rule.

Purpose: Show the journey of food from the store to the plate, with a safety habit
attached to each stage, so students see storage, preparation, and handling as three
connected but distinct steps.

Visual style: Left-to-right Mermaid flowchart with four boxes and arrows between them

Steps:
1. Box: "Food Arrives Home" (storage stage)
   Click text: "Food Storage Safety: Put cold foods like milk and meat in the
   refrigerator right away so they don't spoil."

2. Box: "Food Gets Prepared" (preparation stage)
   Click text: "Food Preparation Safety: Wash fruits and vegetables, cook meat fully,
   and use separate cutting boards for meat and produce."

3. Box: "Food Is Handled" (handling stage)
   Click text: "Food Handling Safety: Wash your hands before eating and use clean
   plates and utensils."

4. Box: "Food Is Enjoyed Safely" (outcome)
   Click text: "When all three safety steps are followed, food is much less likely to
   make someone sick!"

Color coding:
- Blue: Storage stage
- Green: Preparation stage
- Orange: Handling stage
- Gold: Final safe-to-eat outcome

Interactive features: Every node in the Mermaid diagram reveals an infobox with the
safety rule text above when hovered or clicked, matching the glossary definition for
that concept.

Implementation: Mermaid flowchart syntax with a small post-render JavaScript function
that binds hover and click on each node and displays the rule in the infobox beside
the diagram.
```

## Related Resources

- [Food, Energy, and Safe Eating](../../bands/grade-2/chapters/02-food-energy-safe-eating/index.md)
