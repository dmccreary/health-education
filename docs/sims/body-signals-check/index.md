---
title: My Body's Signals
description: Students identify body signals that mean "I'm hungry," "I'm thirsty," or "I feel fine," matching a picture of a child showing a signal to the correct feeling label.
status: scaffold
library: p5.js
bloom_level: Remember (L1)
---

# My Body's Signals



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
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

## Related Resources

- [Chapter 1: Health and Food](../../bands/kindergarten/chapters/01-health-and-food/index.md)
