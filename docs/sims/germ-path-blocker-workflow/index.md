---
title: Blocking the Path of Germs
description: Students explain how cultural traditions and community practices prevent the spread of germs and why these practices work, by exploring each germ pathway and the matching cultural practice that blocks it.
status: scaffold
library: Mermaid
bloom_level: Understand (L2)
---

# Blocking the Path of Germs



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 3: Wellness And Activity](../../bands/grade-3/chapters/03-wellness-and-activity/index.md).

```text
Type: workflow
**sim-id:** germ-path-blocker-workflow<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain, summarize

Learning objective: Students explain how cultural traditions and community practices prevent the spread of germs and why these practices work, by exploring each germ pathway and the matching cultural practice that blocks it.

Purpose: Show the connection between how germs travel and the specific cultural practice that interrupts that path, so students understand mechanism, not just custom.

Visual style: Simple flowchart with four parallel paths, each starting from a "Germ Source" node and ending at a "Blocked!" node

Steps (every node must have a Mermaid click directive opening an infobox):
1. "Germ Source: Outdoor Dirt on Shoes" — Hover text: "Shoes carry germs and dirt from outside on the soles."
2. "Practice: Remove Shoes at the Door" — Hover text: "Many cultures remove shoes before entering a home so outdoor germs stay outside, not on floors where people sit and play."
3. "Germ Source: Unwashed Hands Before Eating" — Hover text: "Hands touch many surfaces during the day and can carry germs to the mouth during eating."
4. "Practice: Wash Hands Before Meals" — Hover text: "Washing hands before eating, often a built-in mealtime routine, removes germs before they can reach food."
5. "Germ Source: Hand-to-Hand Greeting" — Hover text: "A handshake creates a direct path for germs to move from one person's hand to another's."
6. "Practice: Bow, Wave, or Hand-over-Heart Greeting" — Hover text: "These greetings share respect without direct hand contact, especially useful during cold and flu season."
7. "Germ Source: Uncovered Cough or Sneeze" — Hover text: "Coughs and sneezes send tiny droplets into the air that can travel to other people or surfaces."
8. "Practice: Cover With an Elbow or Cloth" — Hover text: "Covering a cough or sneeze blocks droplets from spreading into the air or onto hands."
9. "Blocked!" (shared end node for all four paths) — Hover text: "Every one of these practices blocks a specific path germs use to travel between people."

Color coding:
- Red: Germ source nodes
- Green: Cultural practice nodes that block the path
- Gold: Shared "Blocked!" end node

Implementation: Mermaid flowchart with `click` directive on every node calling an infobox function that shows the hover text described above; four parallel branches converging on one end node.
```

## Related Resources

- [Chapter 3: Wellness And Activity](../../bands/grade-3/chapters/03-wellness-and-activity/index.md)
