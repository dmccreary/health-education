---
title: Families Come in Many Shapes
description: Students recognize that families come in a variety of structures and that every structure shown is a healthy, real family, connecting Family to Family Structure.
status: scaffold
library: p5.js
bloom_level: Understand (L2)
---

# Families Come in Many Shapes



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 2: Family And Trusted Adults](../../bands/kindergarten/chapters/02-family/index.md).

```text
Type: infographic
**sim-id:** family-shapes-gallery<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: recognize, connect, classify

Learning objective: Students recognize that families come in a variety of structures and that every structure shown is a healthy, real family, connecting Family to Family Structure.

Purpose and main message: Show six illustrated family portraits in a friendly gallery grid, each representing a different family structure, with a click revealing a short warm description of that family.

Layout: A grid of six large, simple, warm illustrated family portraits: a two-parent family, a single-parent family, a grandparent-led family, a foster family, a blended family, and a family with two moms or two dads. Each portrait shows the family members smiling together in a simple home or park setting.

Interactive elements:
- Click or tap any family portrait to open a simple infobox with one warm sentence describing that family structure (e.g., "This family has a grandma who takes care of the children every day — that's her important job in this family.")
- Hover highlights the portrait with a soft glow before clicking
- No portrait is marked as more "normal" than another; all six appear the same size with the same friendly visual treatment

Data to display per portrait:
- Two-parent family — "Two parents share the job of taking care of their children."
- Single-parent family — "One parent takes care of the children all on their own, and does a great job."
- Grandparent-led family — "A grandparent takes care of the children every day, just like a parent would."
- Foster family — "A foster family opens their home to take care of a child for a while."
- Blended family — "A blended family happens when two families join together to become one new family."
- Two moms or two dads — "Some children have two moms or two dads who take care of them together."

Color coding: Use the same soft, warm color palette across all six portraits so no single family structure is visually singled out as different or unusual.

Responsive behavior: Grid collapses to a single vertical column of portraits on narrow screens.

Implementation: p5.js canvas with click-region detection for each portrait; infobox rendered as a text panel below the grid.
```

## Related Resources

- [Chapter 2: Family And Trusted Adults](../../bands/kindergarten/chapters/02-family/index.md)
