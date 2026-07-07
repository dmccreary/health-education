---
title: Name That Feeling!
description: Students name a feeling shown on a large friendly face by clicking the matching word/icon button, building the skill of Naming Feelings and expanding their Emotions Vocabulary.
status: scaffold
library: p5.js
bloom_level: Remember (L1)
---

# Name That Feeling!



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 3: Feelings And Kindness](../../bands/kindergarten/chapters/03-feelings-and-kindness/index.md).

```text
Type: microsim
**sim-id:** name-that-feeling<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Remember (L1)
Bloom Taxonomy Verb: name, identify, recognize

Learning objective: Students name a feeling shown on a large friendly face by clicking the matching word/icon button, building the skill of Naming Feelings and expanding their Emotions Vocabulary.

Canvas layout:
- Top area (280px): One large, simple, friendly cartoon face displayed at a time, showing a clear expression (big smile, tears, furrowed brow, wide eyes, or relaxed calm face)
- Bottom area (170px): Five large buttons in a row, each with a word and a small matching icon: "Happy," "Sad," "Mad," "Scared," "Calm"
- Bottom strip (50px): Score display ("You named 3 feelings!") and a Reset button

Visual elements:
- 10 faces cycling one at a time, covering all five feeling words at least twice, drawn in a warm, simple, non-scary cartoon style
- Buttons highlight in a soft color when hovered: yellow for Happy, blue for Sad, red for Mad, purple for Scared, green for Calm

Interactive controls:
- Click: child taps the button matching the face's feeling
- Button: "Reset" to start over
- Button: "Next Face" appears automatically after each answer

Default parameters:
- First face shown: a big smiling face (Happy)
- Faces appear in a fixed friendly order so a teacher can predict what is coming next

Behavior:
- When the correct button is clicked, the face nods, a cheerful chime plays, and the score increases by one
- When an incorrect button is clicked, the face gently shakes side to side and the correct button glows so the child can try again — no harsh error sound or red X
- After all 10 faces are shown, display a celebration message: "Great job! You know so many feeling words!"

Instructional Rationale: This is a Remember-level (name/identify) objective for pre-readers, so a simple click-to-match pattern with icon-supported buttons is appropriate — it does not require independent reading and gives immediate, forgiving feedback.

Implementation notes: Use p5.js. Store each face as an image or vector drawing tagged with its correct feeling word. Keep all button text large (28px+) and pair every word with an icon since this is a read-aloud/pre-reader audience.
```

## Related Resources

- [Chapter 3: Feelings And Kindness](../../bands/kindergarten/chapters/03-feelings-and-kindness/index.md)
