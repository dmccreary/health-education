---
title: Holistic Wellness Framework Explorer
description: Students examine the four connected dimensions of a
status: scaffold
library: vis-network
bloom_level: Analyze (L4)
---

# Holistic Wellness Framework Explorer



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 10: Substances - Effects and Safer Choices](../../bands/grade-9-12/chapters/10-substances-effects-and-safer-choices/index.md).

```text
Type: graph-model

**sim-id:** holistic-wellness-framework-explorer<br/>
**Library:** vis-network<br/>
**Status:** Specified

Bloom Taxonomy Level: Analyze (L4)
Bloom Verb: examine, organize, distinguish

Learning objective: Students examine the four connected dimensions of a
holistic Indigenous wellness framework (physical, mental, emotional,
spiritual), and distinguish how substance use disorder can reflect
disruption across more than one dimension rather than a single isolated
cause.

Node types:
1. Central node (circle): "Balance / Wellness"
2. Four dimension nodes (colored quadrant shapes): "Physical," "Mental,"
   "Emotional," "Spiritual"
3. Four disruption nodes (one per dimension, muted color): short example
   of how substance use can disrupt that specific dimension
4. Four protective-practice nodes (one per dimension, green): a specific
   protective practice connected to restoring that dimension (e.g.,
   ceremony for Spiritual, counseling/talking circles for Emotional)

Edge types:
- "Part Of" (dimension node to central node)
- "Can Be Disrupted By Substance Use" (dimension node to its disruption
  node)
- "Restored Through" (dimension node to its protective-practice node)

Layout: Medicine-wheel-inspired circular layout with the four dimensions
arranged evenly around the central "Balance/Wellness" node, disruption and
protective nodes branching outward from each dimension

Interactive features:
- Hover any node: one-sentence description
- Click a dimension node: infobox explains that dimension's meaning within
  a holistic wellness framework
- Click a disruption node: infobox gives a specific, respectful example
  grounded in chapter text
- Click a protective-practice node: infobox names the practice and its
  documented protective value
- Drag, zoom, and pan enabled

Legend: color key distinguishing dimensions, disruption nodes, and
protective-practice nodes

Implementation: vis-network circular/radial layout; all infobox text
reviewed for respectful, non-stereotyping language; content emphasizes
that this is one widely-taught holistic framework among Indigenous
nations, not a single monolithic Indigenous view.
```

## Related Resources

- [Chapter 10: Substances - Effects and Safer Choices](../../bands/grade-9-12/chapters/10-substances-effects-and-safer-choices/index.md)
