---
title: Fitness Component Activity Sorter
description: Students classify physical activities into the fitness component (cardiovascular endurance, muscular strength, flexibility, balance and coordination) each one primarily builds.
status: scaffold
library: p5.js
bloom_level: Analyze (L4)
---

# Fitness Component Activity Sorter



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 5: Personal Health And Wellness](../../bands/grade-5/chapters/05-personal-health-and-wellness/index.md).

```text
Type: microsim
**sim-id:** fitness-component-activity-sorter<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: classify, distinguish, organize

Learning objective: Students classify physical activities into the fitness component (cardiovascular endurance, muscular strength, flexibility, balance and coordination) each one primarily builds.

Canvas layout: Left (450px) four labeled bins with a deck of activity cards; right (200px) score display and feedback panel.

Visual elements: Four bins with icons (heart, dumbbell, stretching figure, balance beam); 12 activity cards (running, push-ups, yoga, balance-beam walk, swimming, climbing, dancing, jump rope, stretching, juggling, biking, catching a ball).

Interactive controls: Drag each card into its bin; "Check My Sorting" button reveals correct/incorrect placements; "Shuffle New Round" resets with cards reordered.

Default parameters: All 12 cards start unsorted in a scrambled row.

Behavior: Correct placements highlight green, incorrect orange with a one-line hint (e.g., "Push-ups build muscular strength, not flexibility"). Multi-component cards like swimming accept either correct bin.

Instructional Rationale: Analyze-level objective requiring classification, so the pattern is an active sorting task with clear category feedback rather than passive viewing.

Implementation notes: p5.js; store activities as objects with name, icon, and one or two correct component tags; drag detection via mouseIsPressed and bounding boxes.
```

## Related Resources

- [Chapter 5: Personal Health And Wellness](../../bands/grade-5/chapters/05-personal-health-and-wellness/index.md)
