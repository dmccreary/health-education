---
title: Coercion Tactics Identifier
description: Students analyze short dialogue examples to identify which of five coercion tactics (guilt-tripping, repeated pressure, threats, exploiting power differences, wearing someone down) is present.
image: /sims/coercion-tactics-identifier/coercion-tactics-identifier.png
og:image: /sims/coercion-tactics-identifier/coercion-tactics-identifier.png
twitter:image: /sims/coercion-tactics-identifier/coercion-tactics-identifier.png
social:
   cards: false
library: p5.js
bloom_level: Analyze (L4)
grade_band: Grades 6-8
---

# Coercion Tactics Identifier

<iframe src="main.html" width="100%" height="494px" scrolling="no"></iframe>

[Run the Coercion Tactics Identifier MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="494px" scrolling="no"></iframe>
```

## About this MicroSim

**Coercion Tactics Identifier** is an interactive MicroSim for this health-education textbook.

Students analyze short dialogue examples to identify which of five coercion tactics (guilt-tripping, repeated pressure, threats, exploiting power differences, wearing someone down) is present.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Analyze (L4) — identify, differentiate, examine

## Lesson Plan

### Audience

This MicroSim is designed for **Grades 6-8**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students analyze short dialogue examples to identify which of five coercion tactics (guilt-tripping, repeated pressure, threats, exploiting power differences, wearing someone down) is present.

This activity targets **Bloom's Analyze (L4)** (identify, differentiate, examine).

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
[Chapter 2: Relationships, Boundaries, and Consent](../../bands/grade-6-8/chapters/02-relationships-boundaries-and-consent/index.md).

```text
Type: microsim
**sim-id:** coercion-tactics-identifier<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: identify, differentiate, examine

Learning objective: Students analyze short dialogue examples to identify which of five coercion tactics (guilt-tripping, repeated pressure, threats, exploiting power differences, wearing someone down) is present.

Layout: One short two-line dialogue exchange at a time, with five tactic buttons beneath it and a feedback panel.

Visual elements: 10 short dialogue scenarios spanning friend, family, and romantic contexts, each reflecting exactly one primary tactic, plain text only (no depicted violence or explicit content).

Behavior: Feedback names the specific phrase signaling the tactic and briefly explains why it counts as pressure rather than a fair request.

Instructional Rationale: Identifying tactics embedded in realistic dialogue is Analyze-level, so a classification interface with real phrasing is used, training pattern recognition transferable to real conversations.

Implementation notes: p5.js. Dialogue/tactic-answer pairs stored as objects; feedback references the exact quoted phrase.
```

## References

- [Chapter 2: Relationships, Boundaries, and Consent](../../bands/grade-6-8/chapters/02-relationships-boundaries-and-consent/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
