---
title: Be the Influence
description: Students demonstrate understanding of how a personal healthy choice can model positive health behavior for others.
image: /sims/be-the-influence-workflow/be-the-influence-workflow.png
og:image: /sims/be-the-influence-workflow/be-the-influence-workflow.png
twitter:image: /sims/be-the-influence-workflow/be-the-influence-workflow.png
social:
   cards: false
library: Mermaid
bloom_level: Apply (L3)
grade_band: Grade 2
---

# Be the Influence

<iframe src="main.html" width="100%" height="549px" scrolling="no"></iframe>

[Run the Be the Influence MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="549px" scrolling="no"></iframe>
```

## About this MicroSim

**Be the Influence** is an interactive MicroSim for this health-education textbook.

Students demonstrate understanding of how a personal healthy choice can model positive health behavior for others.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Apply (L3) — demonstrate, model, apply

## Lesson Plan

### Audience

This MicroSim is designed for **Grade 2**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students demonstrate understanding of how a personal healthy choice can model positive health behavior for others.

This activity targets **Bloom's Apply (L3)** (demonstrate, model, apply).

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
**Apply**-level objective rather than a lucky guess.

## Specification

The full specification below was extracted from
[Chapter 7: Influences, Decisions, and Personal Goals](../../bands/grade-2/chapters/07-influences-decisions-goals/index.md).

```text
Type: workflow
**sim-id:** be-the-influence-workflow<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: demonstrate, model, apply

Learning objective: Students demonstrate understanding of how a personal healthy choice can model positive health behavior for others.

Purpose: Show a simple cycle -- a student makes a healthy choice, someone notices, and that person is influenced to try it too -- reinforcing that influence flows in both directions

Visual style: Mermaid flowchart (graph LR) arranged as a loop with four boxes

Nodes (each must have a click handler opening an infobox with plain definition/example text):
1. "I Make a Healthy Choice" -- click shows example: "I choose water instead of soda at lunch."
2. "Someone Notices" -- click shows: "A friend or younger sibling sees what I chose."
3. "They Try It Too" -- click shows: "They decide to try the same healthy choice."
4. "Now They Might Model It For Someone Else" -- click shows: "The healthy choice keeps spreading to new people, the same way family, school, and media influence us."

Connections: Arrows connecting node 1 to node 2 to node 3 to node 4, and a return arrow from node 4 back to node 1 to show the cycle can repeat with a new person

Color coding: Warm gold and green tones to convey a positive, encouraging cycle

Interactive features: click directive on every node in Mermaid syntax, each mapped to an infobox with the example text above

Implementation: Mermaid flowchart with click bindings, rendered with an infobox panel beneath the diagram
```

## References

- [Chapter 7: Influences, Decisions, and Personal Goals](../../bands/grade-2/chapters/07-influences-decisions-goals/index.md)
- [List of all MicroSims](../index.md)
- [Mermaid documentation](../index.md)
