---
title: Mapping Power Imbalances in Relationships
description: Students examine a set of relationship-pair examples
status: scaffold
library: vis-network
bloom_level: Analyze (L4)
---

# Mapping Power Imbalances in Relationships



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 3: Consent and Boundaries](../../bands/grade-9-12/chapters/03-consent-and-boundaries/index.md).

```text
Type: graph-model

**sim-id:** power-dynamics-consent-map<br/>
**Library:** vis-network<br/>
**Status:** Specified

Bloom Taxonomy Level: Analyze (L4)
Bloom Verb: examine, distinguish, attribute

Learning objective: Students examine a set of relationship-pair examples
and attribute the type of power imbalance present (age gap, authority,
incapacitation, dependence), analyzing why each undermines the
possibility of genuine consent.

Node types:
1. Relationship-pair nodes (e.g., "Teacher / Student," "Coach / Athlete,"
   "Employer / Employee," "Adult / Much Younger Teen," "Sober Person /
   Intoxicated Person," "Landlord-Dependent Tenant") — gray rounded
   rectangles
2. Power-source category nodes (four fixed nodes: "Age Gap," "Authority,"
   "Incapacitation," "Dependence") — colored circles, one color each

Edge types:
- Edge connects each relationship-pair node to the power-source
  category(ies) that apply to it (some pairs connect to more than one
  category)

Sample data: 6 relationship-pair nodes as listed above, each linked to
one or two of the four category nodes

Layout: Hierarchical, four category nodes fixed at top, relationship-pair
nodes below, connecting up

Interactive features:
- Hover a category node: shows its definition and why it undermines free
  choice
- Click a relationship-pair node: opens a side panel explaining
  specifically why that pairing creates a power imbalance and why the law
  or ethical framework treats it differently from a peer relationship
- Drag and zoom/pan enabled

Legend: color key for the four power-source categories

Implementation: vis-network, hierarchical layout, click-triggered side
panel content stored in a JSON lookup keyed by node id
```

## Related Resources

- [Chapter 3: Consent and Boundaries](../../bands/grade-9-12/chapters/03-consent-and-boundaries/index.md)
