---
title: Safety Rules All Around
description: Students identify safety rules that apply in three settings (home, school, community), building recognition of the Safety Rules concept before learning injury-prevention behaviors.
status: scaffold
library: p5.js
bloom_level: Remember (L1)
---

# Safety Rules All Around



<iframe src="main.html" width="100%" height="502px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 5: Staying Safe](../../bands/kindergarten/chapters/05-staying-safe/index.md).

```text
Type: infographic
**sim-id:** safety-rules-all-around<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Remember (L1)
Bloom Taxonomy Verb: identify, recognize, name

Learning objective: Students identify safety rules that apply in three settings (home, school, community), building recognition of the Safety Rules concept before learning injury-prevention behaviors.

Canvas layout: Full canvas (500px) shows three illustrated scenes side by side — home, school hallway, community street — each with two glowing hotspots on a child following a safety rule. Bottom strip (60px): instructions and a Reset button.

Visual elements: 6 hotspots total (2 per scene) — home (stair rail, staying from a hot stove), school (walking in hallway, sitting properly), community (holding a grown-up's hand at a crossing, wearing a bike helmet).

Interactive controls: Click a hotspot to reveal the rule; Reset button; running count display ("You found 4 of 6!").

Default parameters: All 6 hotspots start unrevealed and can be clicked in any order.

Behavior: Clicking reveals a short infobox naming the rule, e.g., "At home: always hold the rail on the stairs!" Found spots stay highlighted green. After all 6 are found: "You found safety rules at home, at school, and in the community!"

Instructional Rationale: A Remember-level (identify/name) objective, so a simple click-to-reveal hotspot pattern works well for pre-readers — no reading required, immediate infobox feedback.

Implementation notes: p5.js. Each hotspot is an object with a scene, a relative (x,y) region so the scene resizes responsively, a label, and an infobox string. Text large (24px+) for read-aloud use.
```

## Related Resources

- [Chapter 5: Staying Safe](../../bands/kindergarten/chapters/05-staying-safe/index.md)
