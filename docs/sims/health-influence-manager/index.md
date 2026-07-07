---
title: Health Influence Manager
description: Students identify strategies and resources that can manage a given health-behavior influence, matching influence cards to the strategy cards that address them.
image: /sims/health-influence-manager/health-influence-manager.png
og:image: /sims/health-influence-manager/health-influence-manager.png
twitter:image: /sims/health-influence-manager/health-influence-manager.png
social:
   cards: false
library: p5.js
bloom_level: Analyze (L4)
grade_band: Grade 5
---

# Health Influence Manager

<iframe src="main.html" width="100%" height="494px" scrolling="no"></iframe>

[Run the Health Influence Manager MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="494px" scrolling="no"></iframe>
```

## About this MicroSim

**Health Influence Manager** is an interactive MicroSim for this health-education textbook.

Students identify strategies and resources that can manage a given health-behavior influence, matching influence cards to the strategy cards that address them.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Analyze (L4) — identify, examine, organize

## Lesson Plan

### Audience

This MicroSim is designed for **Grade 5**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students identify strategies and resources that can manage a given health-behavior influence, matching influence cards to the strategy cards that address them.

This activity targets **Bloom's Analyze (L4)** (identify, examine, organize).

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
[Chapter 7: Health Skills And Goal Setting](../../bands/grade-5/chapters/07-health-skills-and-goal-setting/index.md).

```text
Type: microsim
**sim-id:** health-influence-manager<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: identify, examine, organize

Learning objective: Students identify strategies and resources that can manage a given health-behavior influence, matching influence cards to the strategy cards that address them.

Canvas layout: Left (450px) a deck of 8 influence cards (e.g., "Ad for sugary cereal," "Friend says homework can wait," "Family always orders fast food on Fridays," "Feeling stressed before a test"); right (200px) a strategy shelf with 5 strategy cards (pause before reacting, ask whose idea it is, talk to a trusted adult, suggest an alternative, seek supportive influences) plus a feedback panel.

Interactive controls: Drag or click an influence card onto the strategy card that best manages it; "Check My Match" reveals whether the pairing makes sense with a one-sentence reason; "New Round" shuffles a new set of 8 influence cards.

Default parameters: Round 1 pre-loads with 8 influence cards, no matches made.

Behavior: Matching "Friend says homework can wait" with "Suggest an alternative" reveals "Proposing 'let's both study first, then play' manages the influence instead of just resisting it alone."

Instructional Rationale: Analyze-level objective, so students examine each influence's structure and organize it against a matching strategy rather than simply recalling a definition.

Implementation notes: p5.js; influence and strategy objects stored as arrays with id, label, and a matches[] array of acceptable pairings with reason text.
```

## References

- [Chapter 7: Health Skills And Goal Setting](../../bands/grade-5/chapters/07-health-skills-and-goal-setting/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
