---
title: What Makes a Provider Culturally Safe?
description: Students explain the specific practices that make a
image: /sims/culturally-safe-provider-explorer/culturally-safe-provider-explorer.png
og:image: /sims/culturally-safe-provider-explorer/culturally-safe-provider-explorer.png
twitter:image: /sims/culturally-safe-provider-explorer/culturally-safe-provider-explorer.png
social:
   cards: false
library: p5.js
bloom_level: Understand (L2)
grade_band: Grades 9-12
---

# What Makes a Provider Culturally Safe?

<iframe src="main.html" width="100%" height="494px" scrolling="no"></iframe>

[Run the What Makes a Provider Culturally Safe? MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="494px" scrolling="no"></iframe>
```

## About this MicroSim

**What Makes a Provider Culturally Safe?** is an interactive MicroSim for this health-education textbook.

Students explain the specific practices that make a

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Understand (L2) — explain, classify, exemplify

## Lesson Plan

### Audience

This MicroSim is designed for **Grades 9-12**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students explain the specific practices that make a

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
[Chapter 4: Healthcare Access and Sexual Health](../../bands/grade-9-12/chapters/04-healthcare-access-and-sexual-health/index.md).

```text
Type: infographic

**sim-id:** culturally-safe-provider-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy Level: Understand (L2)
Bloom Verb: explain, classify, exemplify

Learning objective: Students explain the specific practices that make a
healthcare provider culturally safe and classify example provider
behaviors as culturally safe or culturally unsafe.

Canvas layout:
- Left (55%): a central node "Culturally Safe Provider" connected to four
  spokes: Asks Rather Than Assumes, Communicates Clearly, Acknowledges
  Historical Mistrust, Adapts Care to Context
- Right (45%): a scenario card showing a short provider behavior example
  and two buttons, "Culturally Safe" and "Culturally Unsafe"

Data Visibility Requirements:
  Stage 1: Show all four spokes and their one-sentence definitions as
  reference material
  Stage 2: Show one example provider behavior (12 examples in the bank,
  covering assumptions about family structure, language access, and
  historical mistrust)
  Stage 3: After the learner classifies the example, show whether they
  were correct and which spoke it relates to, with a one-line explanation
  Stage 4: Track a running count of correctly classified examples

Interactive controls:
- Click any spoke to see its expanded definition and a real-world example
- Button: "Culturally Safe" / Button: "Culturally Unsafe"
- Button: "Next Example"

Default parameters: Example bank cycles without repetition until
exhausted, then reshuffles

Instructional Rationale: This is an Understand-level objective, so the
design favors step-through classification with concrete examples over
animation. Testing the same four practices against varied provider
scenarios builds a transferable model of cultural safety rather than one
tied to a single narrow example.

Implementation notes: p5.js with an object array of {behavior, correctCategory,
relatedSpoke, explanation}; spokes highlighted in gold when active;
correct/incorrect feedback shown through color change and text panel.
```

## References

- [Chapter 4: Healthcare Access and Sexual Health](../../bands/grade-9-12/chapters/04-healthcare-access-and-sexual-health/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
