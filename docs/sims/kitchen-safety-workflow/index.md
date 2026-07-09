---
title: Kitchen Safety Checklist
description: Students describe food safety practices that promote healthy eating by exploring each step of a simple kitchen safety sequence and why it matters.
status: scaffold
library: Mermaid
bloom_level: Understand (L2)
---

# Kitchen Safety Checklist



<iframe src="main.html" width="100%" height="842px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 4: Food And Nutrition](../../bands/grade-3/chapters/04-food-and-nutrition/index.md).

```text
Type: workflow
**sim-id:** kitchen-safety-workflow<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: describe, explain, summarize

Learning objective: Students describe food safety practices that promote healthy eating by exploring each step of a simple kitchen safety sequence and why it matters.

Purpose: Show the sequence of food safety habits from before cooking to after eating, with an explanation of why each step prevents illness.

Visual style: Simple linear flowchart with six steps in sequence

Steps (every node must have a Mermaid click directive opening an infobox):
1. "Wash Hands Before Cooking" — Hover text: "Hands pick up germs all day; washing them removes germs before they can get onto food."
2. "Wash Fruits and Vegetables" — Hover text: "Produce can carry dirt and germs from the farm or store, so rinsing it removes them before eating."
3. "Keep Raw Meat Separate" — Hover text: "Raw meat can carry germs that spread to other foods if they touch the same cutting board or utensils."
4. "Cook Food to a Safe Temperature" — Hover text: "Heat kills most harmful germs living in raw food."
5. "Keep Hot Foods Hot, Cold Foods Cold" — Hover text: "Germs grow fastest at room temperature, so foods are stored hot or cold to slow that growth."
6. "Wash Hands Again Before Eating" — Hover text: "A final hand wash removes any germs picked up while cooking or setting the table."

Color coding:
- Blue: Hand-washing steps
- Green: Food preparation steps
- Orange: Temperature-control steps

Implementation: Mermaid flowchart with `click` directive on every node calling an infobox function that displays the hover text above; linear top-to-bottom sequence.
```

## Related Resources

- [Chapter 4: Food And Nutrition](../../bands/grade-3/chapters/04-food-and-nutrition/index.md)
