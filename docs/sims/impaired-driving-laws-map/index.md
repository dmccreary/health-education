---
title: Impaired Driving Laws Interactive Map
description: Students assess and justify why impaired driving laws include stricter zero-tolerance standards for underage drivers by comparing adult and underage legal BAC limits and penalty structures across a sample of states.
status: scaffold
library: Leaflet
bloom_level: Evaluate (L5)
---

# Impaired Driving Laws Interactive Map



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 10: Substance Use Disorder, Recovery, and Policy](../../bands/grade-6-8/chapters/10-substance-use-disorder-recovery-and-policy/index.md).

```text
Type: map
**sim-id:** impaired-driving-laws-map<br/>
**Library:** Leaflet<br/>
**Status:** Specified

Bloom Taxonomy: Evaluate (L5)
Bloom Taxonomy Verb: assess, justify, compare

Learning objective: Students assess and justify why impaired driving laws include stricter zero-tolerance standards for underage drivers by comparing adult and underage legal BAC limits and penalty structures across a sample of states.

Geographic scope: Map of the United States with a sample of 6-8 states highlighted (illustrative, using publicly documented legal categories rather than every state's exact current statute).

Locations: Each highlighted state is a clickable region.

Data represented: For each highlighted state, an infobox shows: adult legal BAC limit, underage (zero-tolerance) BAC limit, and a general description of penalty severity categories (e.g., "first offense: license suspension and fines; repeat or high-BAC offense: increased penalties, possible mandatory education").

Legend: Color coding distinguishes states by penalty-severity category (illustrative categories, not a precise ranking), with a note that all states enforce meaningfully stricter standards for underage drivers than for adults.

Interactive features: Click a highlighted state to open an infobox with its legal categories described above; a "Compare Two States" mode lets the learner click two states to see their infobox data side by side; hover any state for its name.

Implementation: Leaflet.js with a simplified U.S. states GeoJSON layer; responsive container that resizes with the browser window. Content note: figures are presented as illustrative educational categories, and the diagram includes a visible caption noting that students should consult their own state's current statute for exact legal limits, since laws can change.
```

## Related Resources

- [Chapter 10: Substance Use Disorder, Recovery, and Policy](../../bands/grade-6-8/chapters/10-substance-use-disorder-recovery-and-policy/index.md)
