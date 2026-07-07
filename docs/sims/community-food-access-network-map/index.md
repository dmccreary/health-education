---
title: Community Food Access Network Map
description: Students analyze a sample neighborhood map to differentiate food desert conditions from areas served by community food access initiatives, and examine which initiative types address which gaps.
status: scaffold
library: Leaflet
bloom_level: Analyze (L4)
---

# Community Food Access Network Map



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 1: Health Foundations and Nutrition](../../bands/grade-6-8/chapters/01-health-foundations-and-nutrition/index.md).

```text
Type: map
**sim-id:** community-food-access-network-map<br/>
**Library:** Leaflet<br/>
**Status:** Specified

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: examine, differentiate, organize

Learning objective: Students analyze a sample neighborhood map to differentiate food desert conditions from areas served by community food access initiatives, and examine which initiative types address which gaps.

Geographic scope: A representative fictional mid-sized city neighborhood (generic, not tied to a real address) with a downtown core, residential zones, and one rural-edge zone, illustrating how distance to grocery stores and community initiatives combine to shape food access.

Locations: 2 full-service grocery stores (green markers) near downtown; 1 food desert zone (shaded orange, over 1 mile from any grocery store with low vehicle access); 3 community gardens (plant icons); 1 food bank (box icon) near the food desert zone; 1 mobile market route (dotted blue line) looping through the food desert zone twice weekly; 2 schools with breakfast/lunch and backpack programs (school icons).

Interactive features: Click the shaded food desert zone for an infobox defining food desert conditions with this map's specific distances; click any marker for an infobox on that initiative type and which access gap it helps close; toggle layer control to show/hide each initiative type independently.

Implementation: Leaflet.js with custom marker icons and a toggleable GeoJSON layer for the food desert shading and mobile market route.
```

## Related Resources

- [Chapter 1: Health Foundations and Nutrition](../../bands/grade-6-8/chapters/01-health-foundations-and-nutrition/index.md)
