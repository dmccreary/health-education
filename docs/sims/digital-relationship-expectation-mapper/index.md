---
title: Digital Relationship Expectation Mapper
description: Students evaluate how specific digital behaviors
status: scaffold
library: vis-network
bloom_level: Evaluate (L5)
---

# Digital Relationship Expectation Mapper



<iframe src="main.html" width="100%" height="562px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 9: Digital and School Safety](../../bands/grade-9-12/chapters/09-digital-and-school-safety/index.md).

```text
Type: graph-model

**sim-id:** digital-relationship-expectation-mapper<br/>
**Library:** vis-network<br/>
**Status:** Specified

Bloom Taxonomy Level: Evaluate (L5)
Bloom Verb: evaluate, judge, assess

Learning objective: Students evaluate how specific digital behaviors
(response-time expectations, tagging/posting norms, viewing likes and
comments from others, screenshotting) shape relationship expectations, and
judge whether a given behavior reflects a healthy norm or an unhealthy
pressure.

Node types:
1. Central node (dark circle): "Digital Behavior"
2. Behavior nodes (blue squares): "Expecting Instant Replies," "Posting
   About the Relationship," "Viewing a Partner's Likes/Comments,"
   "Screenshotting Messages," "Sharing a Location Live"
3. Effect nodes (two per behavior, light circles): one labeled "Can Reflect
   a Healthy Norm" with a short realistic example, one labeled "Can Become
   an Unhealthy Pressure" with a short realistic example

Edge types:
- "Can Lead To" (solid gray, behavior node to each effect node)

Layout: Central node in the middle, five behavior nodes surrounding it,
each with two effect nodes branching outward in contrasting colors (green
tint for healthy, orange-red tint for unhealthy)

Interactive features:
- Hover any node: one-sentence plain-language description
- Click a behavior node: side panel explains that the same behavior can
  land in either category depending on context, frequency, and whether
  both people agree to it
- Click an effect node: side panel gives a concrete realistic example and,
  for unhealthy-pressure nodes, names it as a boundary concern worth
  addressing directly or with a trusted adult
- Drag, zoom, and pan enabled

Legend: color key distinguishing the central node, behaviors, and the two
effect categories

Implementation: vis-network, radial layout, click-triggered panel content
stored in a JSON lookup keyed by node id; emphasize in all panel text that
context and mutual agreement — not the behavior alone — determine whether
it is healthy
```

## Related Resources

- [Chapter 9: Digital and School Safety](../../bands/grade-9-12/chapters/09-digital-and-school-safety/index.md)
