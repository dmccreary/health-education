---
title: Let's Move Our Bodies!
description: Students explain why daily movement helps the body feel good and stay healthy by following along with a simple animated character performing different movement activities and seeing a "happy energy" meter respond.
image: /sims/lets-move-our-bodies/lets-move-our-bodies.png
og:image: /sims/lets-move-our-bodies/lets-move-our-bodies.png
twitter:image: /sims/lets-move-our-bodies/lets-move-our-bodies.png
social:
   cards: false
library: p5.js
bloom_level: Understand (L2)
grade_band: Kindergarten
---

# Let's Move Our Bodies!

<iframe src="main.html" width="100%" height="504px" scrolling="no"></iframe>

[Run the Let's Move Our Bodies! MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="504px" scrolling="no"></iframe>
```

## About this MicroSim

**Let's Move Our Bodies!** is an interactive MicroSim for this health-education textbook.

Students explain why daily movement helps the body feel good and stay healthy by following along with a simple animated character performing different movement activities and seeing a "happy energy" meter respond.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Understand (L2) — explain, demonstrate

## Lesson Plan

### Audience

This MicroSim is designed for **Kindergarten**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students explain why daily movement helps the body feel good and stay healthy by following along with a simple animated character performing different movement activities and seeing a "happy energy" meter respond.

This activity targets **Bloom's Understand (L2)** (explain, demonstrate).

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

## References

- [Chapter 4: Staying Healthy Every Day](../../bands/kindergarten/chapters/04-staying-healthy/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
