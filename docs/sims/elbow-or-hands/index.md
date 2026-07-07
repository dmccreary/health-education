---
title: Elbow or Hands?
description: Students distinguish helpful cough-covering behavior from unhelpful behavior by sorting illustrated scenario cards into two labeled bins, applying the Covering Coughs concept.
status: scaffold
library: p5.js
bloom_level: Analyze (L4)
---

# Elbow or Hands?



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 4: Staying Healthy Every Day](../../bands/kindergarten/chapters/04-staying-healthy/index.md).

```text
Type: microsim
**sim-id:** elbow-or-hands<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: distinguish, sort, compare

Learning objective: Students distinguish helpful cough-covering behavior from unhelpful behavior by sorting illustrated scenario cards into two labeled bins, applying the Covering Coughs concept.

Canvas layout:
- Top area (250px): One simple illustrated scenario card shown at a time, depicting a child about to cough or sneeze in different ways (into elbow, into a tissue, into open hands, into open air)
- Bottom area (200px): Two large labeled bins side by side: "Keeps Germs Away" (green, with a shield icon) and "Lets Germs Spread" (gray, with a germ icon)
- Bottom strip (50px): Score display ("You sorted 4 scenarios!") and a Reset button

Visual elements:
- 8 scenario cards cycling one at a time, evenly split between helpful and unhelpful cough/sneeze coverings, drawn in a simple, warm cartoon style
- Bins glow softly when a card is dragged over them

Interactive controls:
- Drag-and-drop: child drags the scenario card into the bin they believe matches
- Button: "Reset" to start over
- Button: "Next Scenario" appears after each placement

Default parameters:
- First scenario: a child coughing into their elbow (Keeps Germs Away)
- Scenarios appear in a fixed friendly order so a teacher can predict what is coming next

Behavior:
- When a card is placed in the correct bin, the bin glows green, a cheerful chime plays, and the score increases by one
- When a card is placed in the incorrect bin, the card gently slides back to the top and a friendly infobox reminds the child why, e.g., "Coughing into hands lets germs spread to the next thing you touch."
- After all 8 scenarios are sorted, show a celebration message: "You really know how to keep germs from spreading!"

Instructional Rationale: This is an Analyze-level objective because the child must examine a small scenario and distinguish which category it belongs to, rather than simply recalling a rule. The forgiving retry behavior with an explanatory infobox keeps the activity appropriate for a pre-reader audience while still requiring a real comparison judgment.

Implementation notes: Use p5.js. Represent each scenario as an object with an illustration reference, a correct category, and an explanation string. Keep all captions read-aloud length (one short sentence).
```

## Related Resources

- [Chapter 4: Staying Healthy Every Day](../../bands/kindergarten/chapters/04-staying-healthy/index.md)
