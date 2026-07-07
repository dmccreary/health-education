---
title: Let's Move Our Bodies!
description: Students explain why daily movement helps the body feel good and stay healthy by following along with a simple animated character performing different movement activities and seeing a "happy energy" meter respond.
status: scaffold
library: p5.js
bloom_level: Understand (L2)
---

# Let's Move Our Bodies!



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 4: Staying Healthy Every Day](../../bands/kindergarten/chapters/04-staying-healthy/index.md).

```text
Type: microsim
**sim-id:** lets-move-our-bodies<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain, demonstrate

Learning objective: Students explain why daily movement helps the body feel good and stay healthy by following along with a simple animated character performing different movement activities and seeing a "happy energy" meter respond.

Canvas layout:
- Top area (300px): A friendly cartoon character that performs a movement (running, jumping, dancing, climbing) when a matching button is pressed
- Middle area (100px): A large, simple "Happy Energy Meter" bar that fills up as the character moves
- Bottom strip (100px): Four large buttons: "Run," "Jump," "Dance," "Climb," plus a Reset button

Visual elements:
- Character animates distinctly for each of the four movement types
- Happy Energy Meter fills with a warm gold color and a small sun icon appears at full

Interactive controls:
- Click: child selects a movement button to watch the character perform it
- Button: "Reset" empties the meter and starts over
- Display: meter level and a short read-aloud caption after each movement, e.g., "Running makes your heart beat faster and gives you energy!"

Default parameters:
- Meter starts empty
- Each movement button adds a fixed amount to the meter; after all four movements are tried once, the meter is full

Behavior:
- Clicking a movement button plays the character's animation and reveals a caption explaining that specific benefit (heart health, strong muscles, happy feelings, better sleep)
- When the meter becomes full, a celebration message appears: "You moved your body four different ways — that's a great healthy day!"
- Children may click the same button multiple times to watch the animation again; only the first click per movement adds to the meter

Instructional Rationale: This is an Understand-level objective (explain why movement helps), so the sim uses a step-through pattern where each movement reveals a concrete, spoken benefit rather than relying on decorative continuous animation. Showing the meter fill in direct response to specific movements makes the cause-and-effect connection between activity and feeling good visible and concrete.

Implementation notes: Use p5.js. Store each movement as an object with an animation reference, a meter increment value, and a caption string. Keep all captions short enough to read aloud in one breath.
```

## Related Resources

- [Chapter 4: Staying Healthy Every Day](../../bands/kindergarten/chapters/04-staying-healthy/index.md)
