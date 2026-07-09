---
title: Safe and Unsafe Behavior Explorer
description: Students distinguish safe from unsafe behaviors across three settings — home, school, and community — by exploring an illustrated scene of each setting.
status: scaffold
library: p5.js
bloom_level: Analyze (L4)
---

# Safe and Unsafe Behavior Explorer



<iframe src="main.html" width="100%" height="522px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 6: Staying Safe at Home, School, and Online](../../bands/grade-1/chapters/06-personal-safety/index.md).

```text
Type: infographic
**sim-id:** safe-and-unsafe-behavior-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: distinguish, examine, differentiate

Learning objective: Students distinguish safe from unsafe behaviors across three settings — home, school, and community — by exploring an illustrated scene of each setting.

Purpose: Help students examine three familiar settings and differentiate between behaviors that are safe and behaviors that are unsafe within each one

Layout: Three tabs across the top labeled "Home," "School," and "Community." Each tab opens a simple illustrated scene with 4-5 clickable hotspots showing children doing different things.

Scenes to show:
- Home: a child washing hands before dinner (safe), a child playing near an unlocked cleaning-supply cabinet (unsafe), a child wearing a helmet while biking in the driveway (safe), a child playing with a lighter found on a table (unsafe)
- School: a child walking in the hallway (safe), a child pushing others near the stairs (unsafe), a child raising a hand to leave the room (safe), a child opening an exterior door for a stranger (unsafe)
- Community: a child holding an adult's hand crossing the street (safe), a child wandering away from the group at the park (unsafe), a child wearing a helmet while scootering (safe), a child accepting a ride from someone the family doesn't know (unsafe)

Interactive elements:
- Click each hotspot to reveal a label: "Safe Behavior" or "Unsafe Behavior," plus a one-sentence explanation
- A running tally at the top shows how many safe and unsafe behaviors the student has identified in the current scene

Visual style: Bright, simple flat-style illustrations with diverse characters; unsafe hotspots glow gently amber when revealed (never anything frightening), safe hotspots glow green
Color scheme: Green for safe, amber for unsafe, neutral warm background

Implementation: p5.js with clickable regions mapped to label-and-caption reveals; tabs implemented as simple buttons that swap the displayed scene
```

## Related Resources

- [Chapter 6: Staying Safe at Home, School, and Online](../../bands/grade-1/chapters/06-personal-safety/index.md)
