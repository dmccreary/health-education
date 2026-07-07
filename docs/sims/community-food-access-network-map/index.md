---
title: Community Food Access Network Map
description: Students analyze a sample neighborhood map to differentiate food desert conditions from areas served by community food access initiatives, and examine which initiative types address which gaps.
image: /sims/community-food-access-network-map/community-food-access-network-map.png
og:image: /sims/community-food-access-network-map/community-food-access-network-map.png
twitter:image: /sims/community-food-access-network-map/community-food-access-network-map.png
social:
   cards: false
library: Leaflet
bloom_level: Analyze (L4)
grade_band: Grades 6-8
---

# Community Food Access Network Map

<iframe src="main.html" width="100%" height="522px" scrolling="no"></iframe>

[Run the Community Food Access Network Map MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="522px" scrolling="no"></iframe>
```

## About this MicroSim

**Community Food Access Network Map** is an interactive MicroSim for this health-education textbook.

Students analyze a sample neighborhood map to differentiate food desert conditions from areas served by community food access initiatives, and examine which initiative types address which gaps.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Analyze (L4) — examine, differentiate, organize

## Lesson Plan

### Audience

This MicroSim is designed for **Grades 6-8**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students analyze a sample neighborhood map to differentiate food desert conditions from areas served by community food access initiatives, and examine which initiative types address which gaps.

This activity targets **Bloom's Analyze (L4)** (examine, differentiate, organize).

### Suggested Use (about 10 minutes)

1. **Warm up (2 min).** Ask students what they already know about the topic
   and let one volunteer describe what they see on the screen.
2. **Model it (3 min).** Demonstrate the interaction once, thinking aloud so
   students hear the reasoning behind each choice.
3. **Guided practice (3 min).** Invite students to try the interaction and to
   predict what will happen before they act.
4. **Discuss (2 min).** Ask *why* the result came out the way it did, connecting
   the on-screen result back to the learning objective above.

### Check for Understanding

Have each student (or pair) explain their result in one sentence, using the
vocabulary from this chapter. Look for reasoning that matches the
**Analyze**-level objective rather than a lucky guess.

## Specification

The full specification below was extracted from
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

## References

- [Chapter 1: Health Foundations and Nutrition](../../bands/grade-6-8/chapters/01-health-foundations-and-nutrition/index.md)
- [List of all MicroSims](../index.md)
- [Leaflet documentation](../index.md)
