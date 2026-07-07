---
title: Feeling Sentence Builder
description: Students practice communicating a feeling in a healthy way by assembling an "I feel ___ because ___" sentence from word/picture tiles for a given scenario.
image: /sims/feeling-sentence-builder/feeling-sentence-builder.png
og:image: /sims/feeling-sentence-builder/feeling-sentence-builder.png
twitter:image: /sims/feeling-sentence-builder/feeling-sentence-builder.png
social:
   cards: false
library: p5.js
bloom_level: Apply (L3)
grade_band: Grade 1
---

# Feeling Sentence Builder

<iframe src="main.html" width="100%" height="484px" scrolling="no"></iframe>

[Run the Feeling Sentence Builder MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="484px" scrolling="no"></iframe>
```

## About this MicroSim

**Feeling Sentence Builder** is an interactive MicroSim for this health-education textbook.

Students practice communicating a feeling in a healthy way by assembling an "I feel ___ because ___" sentence from word/picture tiles for a given scenario.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Apply (L3) — use, practice, demonstrate

## Lesson Plan

### Audience

This MicroSim is designed for **Grade 1**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students practice communicating a feeling in a healthy way by assembling an "I feel ___ because ___" sentence from word/picture tiles for a given scenario.

This activity targets **Bloom's Apply (L3)** (use, practice, demonstrate).

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
[Chapter 3: Understanding and Talking About Feelings](../../bands/grade-1/chapters/03-feelings/index.md).

```text
Type: microsim
**sim-id:** feeling-sentence-builder<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: use, practice, demonstrate

Learning objective: Students practice communicating a feeling in a healthy way by assembling an "I feel ___ because ___" sentence from word/picture tiles for a given scenario.

Canvas layout:
- Top area (150px): One scenario picture at a time (e.g., a child whose block tower fell down)
- Middle area (250px): Two rows of tiles to click in order — a feeling-word row (happy, sad, angry, scared, excited, calm) and a reason row (three short reason tiles matching the scenario)
- Bottom strip (100px): Assembled sentence display and "Say It!" button

Learning tiles:
- Feeling tiles: happy, sad, angry, scared, excited, calm
- Reason tiles change per scenario (e.g., for the block tower scene: "because it fell down," "because it's my favorite color," "because it's time for lunch")

Interactive controls:
- Click a feeling tile, then click a matching reason tile
- Button: "Say It!" (assembles and displays the full sentence)
- Button: "Next Scenario"

Default parameters:
- First scenario: block tower falling down (a clear, relatable frustration, to build confidence)

Behavior:
- When a reasonable feeling + reason pair is assembled, the sentence appears in a speech bubble over the character, a gentle chime plays, and a caption affirms, "Great job telling someone how you feel!"
- If a mismatched pair is chosen (e.g., "happy" with "because it fell down"), a calm caption asks, "Does that feeling really match what happened? Try again."

Instructional Rationale: This is an Apply-level (use/practice) objective, so students actively construct and "say" a feelings sentence rather than only recognize one, matching the Grade 1 skill benchmark of communicating feelings, wants, and needs in healthy ways.

Implementation notes: Use p5.js. Keep tiles large and easy to click for early readers; include simple icons alongside each word. Teacher reads the assembled sentence aloud together with the class.
```

## References

- [Chapter 3: Understanding and Talking About Feelings](../../bands/grade-1/chapters/03-feelings/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
