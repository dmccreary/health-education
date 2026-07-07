---
title: Infectious Disease Transmission Chain Interrupter
description: Students evaluate which prevention strategy correctly
status: scaffold
library: Mermaid
bloom_level: Evaluate (L5)
---

# Infectious Disease Transmission Chain Interrupter



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 8: Health Equity and Disease Prevention](../../bands/grade-9-12/chapters/08-health-equity-and-disease-prevention/index.md).

```text
Type: workflow

**sim-id:** transmission-chain-interrupter<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Bloom Taxonomy Level: Evaluate (L5)
Bloom Verb: assess, justify, recommend

Learning objective: Students evaluate which prevention strategy correctly
interrupts a given point in the infection transmission chain, and justify
why that intervention point is effective for a specific scenario (e.g., a
foodborne outbreak vs. a respiratory virus outbreak).

Visual style: Mermaid flowchart depicting a transmission chain
(Source → Environment/Surface → Person-to-Person Spread → New Host), with
click handlers on every node revealing the matching prevention strategy

Nodes (all clickable, `click NodeId call showInfo("term")`):
1. "Infectious Source" — click text: "The person or contaminated item
   currently carrying the pathogen"
2. "Environment/Surfaces" — click text: "Sanitation and safe food/water
   handling interrupt spread here — e.g., handwashing, safe food storage"
3. "Person-to-Person Spread" — click text: "Physical distancing and
   ventilation interrupt spread here during outbreaks of respiratory
   illness"
4. "New Host's Immune Defense" — click text: "Vaccination prepares the
   immune system here, before exposure even happens"
5. "Community Immunity" (outcome node) — click text: "When enough of a
   community is vaccinated, transmission chains break down even for people
   who cannot be vaccinated"

Connections: 1→2, 2→3, 3→4, 4→5, with a feedback arrow from 5 back to 1
labeled "Fewer active sources when spread is interrupted"

Scenario mode: two scenario buttons ("Foodborne Outbreak" and "Respiratory
Virus Outbreak") that, when clicked, highlight the single most effective
interruption point for that scenario and reveal a justification panel

Color coding: gray for source, blue for environment/surfaces, orange for
person-to-person spread, green for immune defense and community immunity

Interactive features: click any node for its infobox; click either
scenario button to see the highlighted best-intervention point with
justification text

Implementation: Mermaid.js flowchart with JavaScript click bindings to a
custom showInfo() function and a scenario-highlight function driven by a
small lookup table
```

## Related Resources

- [Chapter 8: Health Equity and Disease Prevention](../../bands/grade-9-12/chapters/08-health-equity-and-disease-prevention/index.md)
