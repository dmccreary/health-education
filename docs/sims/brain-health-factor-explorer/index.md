---
title: Brain Health Factor Explorer
description: Students explain how five modifiable factors (physical
image: /sims/brain-health-factor-explorer/brain-health-factor-explorer.png
og:image: /sims/brain-health-factor-explorer/brain-health-factor-explorer.png
twitter:image: /sims/brain-health-factor-explorer/brain-health-factor-explorer.png
social:
   cards: false
library: vis-network
bloom_level: Understand (L2)
grade_band: Grades 9-12
---

# Brain Health Factor Explorer

<iframe src="main.html" width="100%" height="542px" scrolling="no"></iframe>

[Run the Brain Health Factor Explorer MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="542px" scrolling="no"></iframe>
```

## About this MicroSim

**Brain Health Factor Explorer** is an interactive MicroSim for this health-education textbook.

Students explain how five modifiable factors (physical

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Understand (L2) — explain, classify, exemplify

## Lesson Plan

### Audience

This MicroSim is designed for **Grades 9-12**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students explain how five modifiable factors (physical

This activity targets **Bloom's Understand (L2)** (explain, classify, exemplify).

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
**Understand**-level objective rather than a lucky guess.

## Specification

The full specification below was extracted from
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

## References

- [Chapter 7: Brain Health, Sleep, and Emergency Care](../../bands/grade-9-12/chapters/07-brain-health-sleep-and-emergency-care/index.md)
- [List of all MicroSims](../index.md)
- [vis-network documentation](../index.md)
