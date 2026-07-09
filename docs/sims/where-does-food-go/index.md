---
title: Where Does This Food Go?
description: Students recall safe practices for storing food by matching foods to the correct storage spot (refrigerator or cupboard).
status: scaffold
library: p5.js
bloom_level: Remember (L1)
---

# Where Does This Food Go?



<iframe src="main.html" width="100%" height="482px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 2: Food, Drinks, and Staying Safe in the Kitchen](../../bands/grade-1/chapters/02-food-and-nutrition/index.md).

```text
Type: microsim
**sim-id:** where-does-food-go<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Remember (L1)
Bloom Taxonomy Verb: recall, identify, locate

Learning objective: Students recall safe practices for storing food by matching foods to the correct storage spot (refrigerator or cupboard).

Canvas layout:
- Left area (450px): Two large storage areas side by side: a refrigerator illustration and a cupboard illustration
- Right area (150px): A stack of 10 food picture cards to click through

Visual elements:
- Refrigerator and cupboard illustrations with open doors showing empty shelves
- 10 food cards: milk, eggs, leftovers, grapes, bread, crackers, canned beans, cheese, cereal, yogurt

Interactive controls:
- Drag-and-drop or click-to-place: place each food card into the refrigerator or cupboard
- Button: "Next Food"
- Button: "Reset"

Default parameters:
- First card: milk (clearly a refrigerator item, to build confidence)

Behavior:
- Correct placement: shelf glows, gentle chime, one-sentence reason appears ("Milk needs to stay cold so it doesn't spoil.")
- Incorrect placement: gentle prompt, "Look again — does this food need to stay cold?"

Instructional Rationale: This is a Remember-level (recall/identify) objective, so a simple matching pattern with an immediate explanation is appropriate — students are learning to locate the correct storage spot, not yet reasoning about spoilage science.

Implementation notes: Use p5.js. Keep illustrations simple and friendly. Teacher reads each food name and reason aloud.
```

## Related Resources

- [Chapter 2: Food, Drinks, and Staying Safe in the Kitchen](../../bands/grade-1/chapters/02-food-and-nutrition/index.md)
