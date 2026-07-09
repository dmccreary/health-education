---
title: Follow the Germ's Path
description: Students examine four different paths germs use to travel from a source to a new person, and distinguish which prevention habit blocks each path.
status: scaffold
library: Mermaid
bloom_level: Analyze (L4)
---

# Follow the Germ's Path



<iframe src="main.html" width="100%" height="482px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 4: Staying Healthy in Our Environment](../../bands/grade-2/chapters/04-staying-healthy-environment/index.md).

```text
Type: workflow
**sim-id:** how-germs-spread-paths<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: examine, distinguish, organize

Learning objective: Students examine four different paths germs use to travel from a source to a new person, and distinguish which prevention habit blocks each path.

Purpose: Show four separate germ-spread paths (air, food, water, personal contact) as simple branching flowcharts, each ending in a prevention habit

Visual style: Mermaid flowchart with four parallel branches merging into a central "Stay Healthy!" end node

Nodes (each must have a click handler opening an infobox with kid-friendly definition text):
1. "Uncovered Cough" (air branch start) -- click shows "Germs can float in tiny droplets when someone coughs or sneezes without covering their mouth."
2. "Unwashed Food" (food branch start) -- click shows "Germs can live on fruits, vegetables, or meat that isn't washed or cooked properly."
3. "Unsafe Water" (water branch start) -- click shows "Water from ponds, puddles, or unknown sources may carry germs that make you sick."
4. "Touching & Sharing" (personal contact branch start) -- click shows "Germs move from person to person through handshakes, hugs, or touching the same objects."
5. "Cover Your Cough" (air branch prevention) -- click shows "Coughing into your elbow keeps germs from spreading through the air."
6. "Wash & Cook Food" (food branch prevention) -- click shows "Washing produce and cooking food fully kills or removes germs."
7. "Drink Safe Water" (water branch prevention) -- click shows "Only drinking water a trusted adult says is safe avoids waterborne germs."
8. "Wash Your Hands" (personal contact branch prevention) -- click shows "Washing hands often removes germs picked up from people and objects."
9. "Stay Healthy!" (merge end node) -- click shows "Using all four prevention habits together gives your body the best chance to stay well."

Connections: Each of the four branch-start nodes (1-4) connects downward to its matching prevention node (5-8), and all four prevention nodes converge into the single "Stay Healthy!" node (9)

Color coding:
- Blue: Air branch
- Green: Food branch
- Teal: Water branch
- Orange: Personal contact branch
- Gold: Central "Stay Healthy!" merge node

Interactive features: click directive on every node in the Mermaid syntax, each mapped to a JavaScript function that opens an infobox with the definition text above

Implementation: Mermaid flowchart (graph TD) with click bindings; render inside a small wrapper page that displays the infobox below the diagram
```

## Related Resources

- [Chapter 4: Staying Healthy in Our Environment](../../bands/grade-2/chapters/04-staying-healthy-environment/index.md)
