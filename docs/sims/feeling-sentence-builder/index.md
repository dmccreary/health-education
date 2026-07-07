---
title: Feeling Sentence Builder
description: Students practice communicating a feeling in a healthy way by assembling an "I feel ___ because ___" sentence from word/picture tiles for a given scenario.
status: scaffold
library: p5.js
bloom_level: Apply (L3)
---

# Feeling Sentence Builder



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
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

## Related Resources

- [Chapter 3: Understanding and Talking About Feelings](../../bands/grade-1/chapters/03-feelings/index.md)
