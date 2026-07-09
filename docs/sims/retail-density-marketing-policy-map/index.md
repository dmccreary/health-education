---
title: Retail Density and Marketing Policy Impact Map
description: Compare hypothetical neighborhoods with differing
status: scaffold
library: Leaflet
bloom_level: Analyze<br/>
---

# Retail Density and Marketing Policy Impact Map



<iframe src="main.html" width="100%" height="562px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 12: Substance Policy and Law](../../bands/grade-9-12/chapters/12-substance-policy-and-law/index.md).

```text
Type: map

**sim-id:** retail-density-marketing-policy-map<br/>
**Library:** Leaflet<br/>
**Status:** Specified

Bloom Taxonomy: Analyze<br/>
Bloom Taxonomy Verb: compare

Learning objective: Compare hypothetical neighborhoods with differing
retail outlet density and marketing exposure to analyze how availability
policy correlates with community-level substance use risk.

Geographic scope: Stylized single-city map with four illustrative
neighborhoods (not a real city; labeled Neighborhood A-D for instructional
comparison)

Locations:
- Neighborhood A: low outlet density, strict local marketing ordinance
  (green marker cluster)
- Neighborhood B: moderate outlet density, standard state marketing rules
  (yellow marker cluster)
- Neighborhood C: high outlet density near a school zone, standard state
  marketing rules (orange marker cluster)
- Neighborhood D: high outlet density, weak local enforcement of marketing
  placement rules (red marker cluster)

Data represented: Number of alcohol/tobacco retail outlets per square mile,
distance from nearest school, and a marketing-exposure index (illustrative
0-10 scale) for each neighborhood

Legend:
- Marker color indicates overall risk profile (green = lower, red = higher)
- Marker size scaled to number of outlets

Interactive features:
- Click a neighborhood marker cluster to open an infobox showing outlet
  density, school distance, and marketing-exposure index with a one-sentence
  policy explanation
- Toggle layer: show/hide school-zone buffer rings
- Compare mode: select two neighborhoods to see a side-by-side infobox
  comparison

Color scheme: Green-yellow-orange-red risk gradient

Implementation: Leaflet.js with custom stylized (non-real-world) tile
overlay and GeoJSON markers
```

## Related Resources

- [Chapter 12: Substance Policy and Law](../../bands/grade-9-12/chapters/12-substance-policy-and-law/index.md)
