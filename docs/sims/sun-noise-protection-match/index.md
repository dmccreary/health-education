---
title: Match the Protection to the Risk
description: Students apply the correct protective action to a sun-risk or noise-risk scenario by matching protection tools/habits to the situation shown.
status: scaffold
library: p5.js
bloom_level: Apply (L3)
---

# Match the Protection to the Risk



<iframe src="main.html" width="100%" height="488px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 4: Staying Healthy in Our Environment](../../bands/grade-2/chapters/04-staying-healthy-environment/index.md).

```text
Type: microsim
**sim-id:** sun-noise-protection-match<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: use, demonstrate, practice

Learning objective: Students apply the correct protective action to a sun-risk or noise-risk scenario by matching protection tools/habits to the situation shown.

Canvas layout:
- Top area (100px): A scenario banner showing a picture and short caption (e.g., "It's a sunny day at the park.")
- Middle area (300px): Four draggable/clickable protection icons (sunscreen bottle, sun hat, ear muffs, "move away" arrow)
- Bottom area (100px): Infobox showing feedback text

Visual elements:
- Six preset scenario cards that cycle through: sunny playground, loud fireworks show, sunny beach, noisy construction site, cloudy park (no risk), quiet library (no risk)
- Four protection icons that can be clicked to "apply" to the current scenario

Interactive controls:
- Button: "Next Scenario" cycles to the next of six scenario cards
- Click a protection icon to apply it to the current scenario
- Button: "Reset"

Default parameters:
- Scenario 1: sunny playground
- No protection icon selected yet

Data Visibility Requirements:
  Stage 1: Show scenario image and caption for "sunny playground"
  Stage 2: Student clicks sunscreen or sun hat icon -- infobox shows "Correct! Sunscreen protects skin from sunburn on a sunny day."
  Stage 3: Student clicks ear muffs icon on the same sunny scenario -- infobox shows "Ear protection isn't needed here -- there's no loud noise in this scene. Try a sun-protection icon instead."
  Stage 4: Student advances to "loud fireworks" scenario and clicks ear muffs -- infobox shows "Correct! Ear protection keeps loud fireworks sounds from hurting your ears."

Behavior:
- Each scenario has one or two correct protection icons; clicking a correct icon highlights it green and shows a matching explanation
- Clicking an icon that does not match the current risk shows a gentle correction explaining why, without a red "wrong" buzzer sound
- "Cloudy park" and "quiet library" scenarios teach that not every situation needs sun or noise protection

Instructional Rationale: This is an Apply-level objective, so students practice choosing and using the correct protective action for a specific situation rather than only reading a list. Including two "no risk needed" scenarios helps students discriminate between situations that need protection and situations that do not, avoiding the misconception that protection is always required everywhere.

Implementation notes: Use p5.js. Keep icons large, simple, and high-contrast for young readers. Use encouraging tones in all feedback text.
```

## Related Resources

- [Chapter 4: Staying Healthy in Our Environment](../../bands/grade-2/chapters/04-staying-healthy-environment/index.md)
