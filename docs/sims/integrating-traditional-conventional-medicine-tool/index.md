---
title: Integrating Traditional And Conventional Medicine Decision Tool
description: Students apply the correct sequence of actions for
status: scaffold
library: Mermaid
bloom_level: Apply (L3)
---

# Integrating Traditional And Conventional Medicine Decision Tool



<iframe src="main.html" width="100%" height="722px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 10: Substances - Effects and Safer Choices](../../bands/grade-9-12/chapters/10-substances-effects-and-safer-choices/index.md).

```text
Type: workflow

**sim-id:** integrating-traditional-conventional-medicine-tool<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Bloom Taxonomy Level: Apply (L3)
Bloom Verb: apply, demonstrate, execute

Learning objective: Students apply the correct sequence of actions for
safely integrating a traditional or plant-based remedy with conventional
medical care, reinforcing open communication with providers as the central
safety habit.

Visual style: Mermaid flowchart with a start node, three sequential
process nodes, and an end node, all clickable via `click NodeId call
showInfo("term")`

Nodes:
1. Start: "I Am Using or Considering a Traditional/Plant-Based Remedy
   Alongside Conventional Care" — click reveals: "This applies to
   ceremonial medicine, herbal remedies, or other traditional practices
   used alongside a doctor's care."
2. "Tell Every Healthcare Provider" — click reveals: "Disclose the
   remedy the same way you would an over-the-counter supplement, so the
   provider can check for interaction risk."
3. "Provider Checks for Known Interactions" — click reveals: "A
   culturally safe provider works with you to check whether the remedy
   and any prescribed medication interact, without dismissing the
   traditional practice."
4. "Both Practices Are Coordinated Respectfully" — click reveals: "Many
   healthcare systems today support integrating traditional and
   conventional care when both are disclosed and coordinated."
End: "Safer, More Complete Care" — click reveals: "Open communication,
not choosing one system over the other, is what makes combining
traditional and conventional medicine safe."

Connections: Start → 2 → 3 → 4 → End

Color coding: gray for the start node, blue for the communication and
provider-check nodes, green for the coordinated-care and outcome nodes

Implementation: Mermaid flowchart with click bindings to a showInfo()
function; infobox text in a JS lookup object; content restriction: no node
names a specific plant, dosage, or preparation method — only the
communication and coordination process.
```

## Related Resources

- [Chapter 10: Substances - Effects and Safer Choices](../../bands/grade-9-12/chapters/10-substances-effects-and-safer-choices/index.md)
