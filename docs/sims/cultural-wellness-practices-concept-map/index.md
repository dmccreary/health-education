---
title: Cultural Wellness Practices Concept Map
description: Students explain and classify examples of cultural wellness perspectives across categories (herbal traditions, caregiving customs, community healing, spiritual/communal practices), recognizing them as valid parts of a whole-health approach.
status: scaffold
library: vis-network
bloom_level: Understand (L2)
---

# Cultural Wellness Practices Concept Map



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 5: Wellness and Disease Prevention](../../bands/grade-4/chapters/05-wellness-and-disease-prevention/index.md).

```text
Type: graph-model
**sim-id:** cultural-wellness-practices-concept-map<br/>
**Library:** vis-network<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain, exemplify, classify

Learning objective: Students explain and classify examples of cultural wellness perspectives across categories (herbal traditions, caregiving customs, community healing, spiritual/communal practices), recognizing them as valid parts of a whole-health approach.

Purpose: Illustrate that "wellness" includes many valid cultural approaches alongside modern medicine, not instead of it

Node types:
1. Central node: "Cultural Wellness Perspectives" (large gray circle)
2. Category nodes (four, medium colored circles): "Herbal Traditions," "Caregiving Customs," "Community Healing Practices," "Spiritual and Communal Practices"
3. Example nodes (small circles connected to each category): 2-3 respectful, real-world examples per category (e.g., under Herbal Traditions: "Ginger tea for upset stomach," "Chamomile for calm rest")

Edge types:
- "Includes" edges (solid gray lines) connecting the central node to each category
- "Example of" edges (thin colored lines matching category color) connecting each category to its example nodes

Layout: Hierarchical, central node at top, categories in a middle ring, examples in an outer ring

Interactive features:
- Hover any node to see its full label and one-sentence description
- Click a category node to highlight only its connected examples and dim the rest
- Click the central node to reset the full view
- Zoom with mouse wheel, pan by dragging the background

Visual styling:
- Central node: neutral warm gray
- Category nodes: four distinct calm colors (teal, gold, purple, green)
- Example nodes: lighter tint of their parent category's color
- Edge thickness: uniform, since all relationships are equally valid

Legend: Small panel explaining node levels (Central Idea → Category → Example)

Responsive behavior: Graph auto-fits to container width on load and on window resize

Implementation: vis-network library with a hierarchical layout option and click event listeners that adjust node/edge opacity to highlight a selected branch.
```

## Related Resources

- [Chapter 5: Wellness and Disease Prevention](../../bands/grade-4/chapters/05-wellness-and-disease-prevention/index.md)
