---
title: Community Helpers Keep Us Safe
description: Students identify community helpers and the safety practice each one supports, reinforcing the Community Safety Practice concept.
status: scaffold
library: p5.js
bloom_level: Remember (L1)
---

# Community Helpers Keep Us Safe



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 5: Staying Safe](../../bands/kindergarten/chapters/05-staying-safe/index.md).

```text
Type: infographic
**sim-id:** community-helpers-keep-us-safe<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Remember (L1)
Bloom Taxonomy Verb: identify, recognize, name

Learning objective: Students identify community helpers and the safety practice each one supports, reinforcing the Community Safety Practice concept.

Canvas layout: Full canvas (500px) shows a neighborhood street scene with a crossing guard at a crosswalk, a lifeguard at a pool, and a park safety sign. Bottom strip (60px): instructions and a Reset button.

Visual elements: 3 glowing hotspots (crossing guard, lifeguard, park sign); clicking pops up a labeled infobox.

Interactive controls: Click reveals the safety practice for that helper/sign; Reset button.

Default parameters: All 3 hotspots begin unrevealed, clickable in any order.

Behavior: Crossing guard reveals "The crossing guard helps everyone cross the street safely together." Lifeguard reveals "The lifeguard watches the pool so everyone can swim safely." Park sign reveals "Safety signs remind everyone of the playground rules." After all three: "You know how our community works together to stay safe!"

Instructional Rationale: A Remember-level (identify/name) objective, so click-to-reveal hotspots with short spoken infoboxes match the pre-reader audience without requiring independent reading.

Implementation notes: p5.js. Each hotspot is an object with a label, relative (x,y) region, and infobox string. Text large (24px+) for read-aloud use.
```

## Related Resources

- [Chapter 5: Staying Safe](../../bands/kindergarten/chapters/05-staying-safe/index.md)
