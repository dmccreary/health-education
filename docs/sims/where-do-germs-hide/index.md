---
title: Where Do Germs Hide?
description: Students identify everyday classroom objects and body parts where germs commonly collect, building foundational understanding of the Germs concept before learning the habits that remove them.
status: scaffold
library: p5.js
bloom_level: Remember (L1)
---

# Where Do Germs Hide?



<iframe src="main.html" width="100%" height="522px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 4: Staying Healthy Every Day](../../bands/kindergarten/chapters/04-staying-healthy/index.md).

```text
Type: infographic
**sim-id:** where-do-germs-hide<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Remember (L1)
Bloom Taxonomy Verb: identify, recognize, locate

Learning objective: Students identify everyday classroom objects and body parts where germs commonly collect, building foundational understanding of the Germs concept before learning the habits that remove them.

Canvas layout:
- Full canvas (500px): One large, friendly illustrated classroom scene (a desk, a doorknob, a tissue, hands, a shared toy bin, a drinking fountain)
- Bottom strip (60px): Instruction text "Click the spots where germs like to hide!" and a Reset button

Visual elements:
- 6 hotspot icons glowing very faintly (a soft pulsing gold outline) over: hands, doorknob, shared toy, tissue, drinking fountain, desk surface
- When clicked, a small friendly cartoon germ character pops up briefly over that spot with a label

Interactive controls:
- Click: child taps a hotspot to reveal whether germs like to hide there
- Button: "Reset" to hide all revealed spots and try again
- Display: running count "You found 4 of 6 germ spots!"

Default parameters:
- All 6 hotspots start hidden/unrevealed
- Hotspots can be clicked in any order

Behavior:
- Clicking a correct hotspot reveals a small infobox: "Doorknobs are touched by many hands every day — that's a great place for germs to collect!"
- Once a spot is found it stays revealed (highlighted green) so the child can see progress
- After all 6 spots are found, display a celebration message: "You found every germ hideout! Now let's learn how to wash them away."

Instructional Rationale: This is a Remember-level (identify/locate) objective appropriate for pre-readers, so a simple click-to-reveal hotspot pattern works well — it requires no reading and gives an immediate, encouraging infobox for every click.

Implementation notes: Use p5.js. Store each hotspot as an object with an (x,y) region (relative/percentage-based, not fixed pixels, so the scene resizes responsively), a label, and an infobox string. Keep all text large (24px+) for read-aloud use.
```

## Related Resources

- [Chapter 4: Staying Healthy Every Day](../../bands/kindergarten/chapters/04-staying-healthy/index.md)
