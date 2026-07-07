---
title: Medication Interaction Risk Network
description: Students examine documented interaction risks between
status: scaffold
library: vis-network
bloom_level: Analyze (L4)
---

# Medication Interaction Risk Network



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 10: Substances - Effects and Safer Choices](../../bands/grade-9-12/chapters/10-substances-effects-and-safer-choices/index.md).

```text
Type: graph-model

**sim-id:** medication-interaction-risk-network<br/>
**Library:** vis-network<br/>
**Status:** Specified

Bloom Taxonomy Level: Analyze (L4)
Bloom Verb: examine, differentiate, organize

Learning objective: Students examine documented interaction risks between
categories of medications and substances (alcohol, opioid pain relievers,
anti-anxiety medications, antihistamines, unregulated/counterfeit pills)
and differentiate low-risk combinations from documented high-risk
combinations, without any dosage or method information.

Node types:
1. Substance/medication category nodes (blue rectangles): "Alcohol,"
   "Opioid Pain Relievers," "Anti-Anxiety Medications," "Antihistamines,"
   "Unregulated/Counterfeit Pills"
2. Risk-level edge labels connecting relevant pairs (not all pairs
   connected): "Documented High Risk" (red), "Use Caution — Ask
   Pharmacist" (yellow)

Edge types:
- "Documented High Risk" (red, thick): Alcohol—Opioid Pain Relievers,
  Alcohol—Anti-Anxiety Medications, Opioid Pain Relievers—Anti-Anxiety
  Medications, any category—Unregulated/Counterfeit Pills (labeled
  "Unknown Contents — Cannot Be Assessed")
- "Use Caution — Ask Pharmacist" (yellow, thin): Alcohol—Antihistamines

Layout: Force-directed network with the five category nodes distributed
evenly, edges colored and weighted by risk level

Interactive features:
- Hover any node: brief description of that medication/substance category
- Click any node: highlights all its connected edges and dims the rest of
  the network
- Click any edge: infobox names the documented mechanism (e.g., "Both
  slow breathing; combined effect on the respiratory system is greater
  than either alone")
- Drag, zoom, pan enabled

Legend: color key for risk-level edges and a note that the
"Unregulated/Counterfeit Pills" node connects to every other node at
"Documented High Risk" because contents cannot be verified

Implementation: vis-network JavaScript library, force-directed layout;
edge and node data in a structured lookup object. Content restriction: no
node or edge describes a dosage amount, a method of combining substances,
or how to obtain any substance — only documented interaction risk
categories and mechanisms.
```

## Related Resources

- [Chapter 10: Substances - Effects and Safer Choices](../../bands/grade-9-12/chapters/10-substances-effects-and-safer-choices/index.md)
