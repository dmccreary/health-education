---
title: Substance Use Ripple Effect Mapper
description: Students examine how a single substance-use pattern
status: scaffold
library: Mermaid
bloom_level: Analyze (L4)
---

# Substance Use Ripple Effect Mapper



<iframe src="main.html" width="100%" height="842px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 10: Substances - Effects and Safer Choices](../../bands/grade-9-12/chapters/10-substances-effects-and-safer-choices/index.md).

```text
Type: workflow

**sim-id:** substance-use-ripple-effect-mapper<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Bloom Taxonomy Level: Analyze (L4)
Bloom Verb: examine, distinguish, organize

Learning objective: Students examine how a single substance-use pattern
can create compounding effects across relationships, school, and work
domains, distinguishing direct effects from cascading secondary effects.

Visual style: Mermaid flowchart with a central starting node branching
into three domain chains, all nodes clickable via `click NodeId call
showInfo("term")`

Nodes:
1. Start: "Ongoing Substance Use (e.g., regular vaping or drinking)" —
   click reveals: "This node represents any pattern of regular substance
   use, not a specific product or method."
2. "Disrupted Sleep and Concentration" — click reveals: "Nicotine,
   cannabis, and alcohol all measurably disrupt sleep quality and
   next-day concentration."
3a. "Relationship Trust Strain" — click reveals: "Mood changes and
   impaired judgment are linked to increased conflict and reduced honest
   communication."
3b. "Declining School Performance" — click reveals: "Reduced
   concentration and attendance are linked to lower grades and more
   disciplinary consequences."
3c. "Workplace Risk" — click reveals: "Impaired performance and safety
   violations are linked to job loss and, in roles involving machinery or
   driving, physical danger to self and others."
4. "Increased Stress" — click reveals: "Strained relationships, school
   struggles, and job instability all increase overall stress levels."
5. End (highlighted): "Cycle Can Reinforce Further Substance Use — Unless
   Interrupted" — click reveals: "Reaching out for support at any point in
   this chain is what breaks the cycle; earlier is easier, but any point
   is a valid time to seek help."

Connections: Start → 2 → (3a, 3b, 3c, each shown as parallel branches) →
4 → 5, with a dashed feedback arrow from 5 back to Start labeled "Without
intervention"

Color coding: gray for the start/mechanism nodes, orange for the three
domain-effect branches, red for the stress/cycle nodes, green highlight on
a small "Support Breaks This Cycle" callout node connected to node 5

Implementation: Mermaid flowchart with click bindings to a showInfo()
function; infobox text in a JS lookup object; content restriction: no node
depicts a specific product, brand, or method of use — only documented
effect categories and relationship pathways.
```

## Related Resources

- [Chapter 10: Substances - Effects and Safer Choices](../../bands/grade-9-12/chapters/10-substances-effects-and-safer-choices/index.md)
