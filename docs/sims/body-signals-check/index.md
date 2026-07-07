---
title: My Body's Signals
description: Students identify body signals that mean "I'm hungry," "I'm thirsty," or "I feel fine," matching a picture of a child showing a signal to the correct feeling label.
image: /sims/body-signals-check/body-signals-check.png
og:image: /sims/body-signals-check/body-signals-check.png
twitter:image: /sims/body-signals-check/body-signals-check.png
social:
   cards: false
library: p5.js
bloom_level: Remember (L1)
grade_band: Kindergarten
---

# My Body's Signals

<iframe src="main.html" width="100%" height="449px" scrolling="no"></iframe>

[Run the My Body's Signals MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="449px" scrolling="no"></iframe>
```

## About this MicroSim

**My Body's Signals** is an interactive MicroSim for this health-education textbook.

Students identify body signals that mean "I'm hungry," "I'm thirsty," or "I feel fine," matching a picture of a child showing a signal to the correct feeling label.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Remember (L1) — identify, recognize, name

## Lesson Plan

### Audience

This MicroSim is designed for **Kindergarten**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students identify body signals that mean "I'm hungry," "I'm thirsty," or "I feel fine," matching a picture of a child showing a signal to the correct feeling label.

This activity targets **Bloom's Remember (L1)** (identify, recognize, name).

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
**Remember**-level objective rather than a lucky guess.

## Specification

The full specification below was extracted from
[Chapter 1: Health and Food](../../bands/kindergarten/chapters/01-health-and-food/index.md).

```text
Type: microsim
**sim-id:** body-signals-check<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Remember (L1)
Bloom Taxonomy Verb: identify, recognize, name

Learning objective: Students identify body signals that mean "I'm hungry," "I'm thirsty," or "I feel fine," matching a picture of a child showing a signal to the correct feeling label.

Canvas layout:
- Left side (60%): One large illustrated scene at a time showing a child exhibiting a signal (holding stomach with a wavy "growl" line, licking dry lips and reaching for a cup, or smiling and playing energetically)
- Right side (40%): Three big labeled buttons: "Hungry," "Thirsty," "Feeling Fine"

Visual elements:
- 6 simple scenes cycling one at a time (2 hungry scenes, 2 thirsty scenes, 2 feeling-fine scenes)
- Large, friendly, rounded character illustrations with exaggerated but gentle expressions

Interactive controls:
- Button: "Hungry"
- Button: "Thirsty"
- Button: "Feeling Fine"
- Button: "Next Scene"

Default parameters:
- First scene: child holding stomach (hungry signal)

Behavior:
- When the correct button is clicked, the scene character smiles bigger and a soft chime plays; a short caption appears explaining the signal (e.g., "A growling tummy means it might be time for a healthy snack!")
- When an incorrect button is clicked, no penalty — a gentle prompt appears: "Look again — what is the picture showing?"
- Teacher can click "Next Scene" any time to move on, regardless of whether the child answered

Instructional Rationale: This is a Remember-level identify/recognize objective for pre-readers, so the pattern uses large pictures and big buttons rather than any text-based question. Immediate, low-stakes feedback supports a whole-class read-aloud format where the teacher calls on students to answer together.

Implementation notes: Use p5.js. Keep all illustrations simple, flat, and friendly — avoid any imagery that could look like the child is in distress. Captions should be short enough for the teacher to read aloud in one breath.
```

## References

- [Chapter 1: Health and Food](../../bands/kindergarten/chapters/01-health-and-food/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
