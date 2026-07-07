---
title: Brain Health Factor Explorer
description: Students explain how five modifiable factors (physical
status: scaffold
library: vis-network
bloom_level: Understand (L2)
---

# Brain Health Factor Explorer



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 7: Brain Health, Sleep, and Emergency Care](../../bands/grade-9-12/chapters/07-brain-health-sleep-and-emergency-care/index.md).

```text
Type: graph-model

**sim-id:** brain-health-factor-explorer<br/>
**Library:** vis-network<br/>
**Status:** Specified

Bloom Taxonomy Level: Understand (L2)
Bloom Verb: explain, classify, exemplify

Learning objective: Students explain how five modifiable factors (physical
activity, nutrition, cognitive engagement, social connection, avoiding
harm) support brain health, and classify concrete habits under the correct
factor.

Node types:
1. Central node: "Brain-Healthy Habits" (blue circle)
2. Factor nodes (green squares): Physical Activity, Nutrition, Cognitive
   Engagement, Social Connection, Avoiding Harm
3. Example nodes (light circles), 2-3 per factor, drawn from the chapter
   text (e.g., under Cognitive Engagement: "Learning a new language",
   "Playing strategy games")
4. Mechanism nodes (orange diamonds), one per factor, describing the
   biological pathway (e.g., "Increases blood flow and neuron connections"
   for Physical Activity)

Edge types:
- "Supports Brain Health Through" (central node to each factor)
- "Works By" (factor to its mechanism node)
- "Example" (factor to its example nodes)

Layout: Radial, central node in the middle, factors surrounding it,
mechanisms and examples one ring further out

Interactive features:
- Hover any node: shows a one-sentence description
- Click a factor node: opens a panel explaining that factor's evidence
  base in plain language
- Click a mechanism node: opens a panel explaining the underlying
  biological pathway
- Drag, zoom, and pan enabled

Legend: color/shape key for central node, factors, mechanisms, examples

Implementation: vis-network, radial layout, click-triggered side panel
content stored in a JSON lookup keyed by node id
```

## Related Resources

- [Chapter 7: Brain Health, Sleep, and Emergency Care](../../bands/grade-9-12/chapters/07-brain-health-sleep-and-emergency-care/index.md)
