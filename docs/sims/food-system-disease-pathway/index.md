---
title: Food System to Chronic Disease Pathway
description: Food System to Chronic Disease Pathway
status: scaffold
library: Mermaid
bloom_level: Analyze (L4)
---

# Food System to Chronic Disease Pathway



<iframe src="main.html" width="100%" height="934px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 1: Food and Nutrition](../../bands/grade-9-12/chapters/01-food-and-nutrition/index.md).

```text
Type: workflow

**sim-id:** food-system-disease-pathway<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Bloom Taxonomy Level: Analyze (L4)
Bloom Verb: examine, distinguish

Purpose: Show how upstream food-system factors connect to downstream
chronic-disease risk through a chain of intermediate conditions, with
every node clickable for an explanation grounded in evidence.

Visual style: Mermaid flowchart, top-to-bottom, with click handlers on
every node

Nodes (all must have `click NodeId call showInfo("term")` handlers
mapped to an infobox):
1. "Food System Structure" — hover/click text: "How food is grown,
   distributed, priced, and marketed in a region"
2. "Grocery Store Density" — click text: "Number of full-service grocery
   stores relative to population in a given area"
3. "Food Desert" — click text: "An area with limited access to
   affordable, nutritious food, especially fresh produce"
4. "Relative Cost of Processed vs. Fresh Food" — click text: "Processed,
   shelf-stable food is frequently cheaper per calorie than fresh produce"
5. "Household Food Choices Under Constraint" — click text: "Choices
   families make when balancing cost, time, and access, not solely
   preference"
6. "Dietary Pattern Over Time" — click text: "Cumulative years of intake
   patterns, not any single meal"
7. "Chronic Disease Risk (Type 2 Diabetes, Hypertension, Cardiovascular
   Disease)" — click text: "Long-term elevated risk linked to sustained
   dietary patterns shaped by the factors above"

Connections: linear chain 1→2→3→4→5→6→7, with a side branch from node 2
directly to node 5 labeled "Direct access effect" to show that access
alone (not just price) independently constrains choice

Color coding: blue for structural/systemic nodes (1-4), orange for
individual/household nodes (5-6), red for the health outcome node (7)

Interactive features: click any node for its infobox; hover any edge
label for a one-line description of the mechanism it represents

Implementation: Mermaid.js flowchart with JavaScript click bindings to a
custom showInfo() function rendering a side panel
```

## Related Resources

- [Chapter 1: Food and Nutrition](../../bands/grade-9-12/chapters/01-food-and-nutrition/index.md)
