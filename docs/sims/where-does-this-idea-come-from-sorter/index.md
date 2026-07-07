---
title: Where Does This Idea Come From?
description: Students identify everyday examples as being influenced mainly by family, school, or media/technology.
status: scaffold
library: p5.js
bloom_level: Remember (L1)
---

# Where Does This Idea Come From?



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 7: Influences, Decisions, and Personal Goals](../../bands/grade-2/chapters/07-influences-decisions-goals/index.md).

```text
Type: microsim
**sim-id:** where-does-this-idea-come-from-sorter<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Remember (L1)
Bloom Taxonomy Verb: identify, recognize, sort

Learning objective: Students identify everyday examples as being influenced mainly by family, school, or media/technology.

Canvas layout:
- Top area (100px): A card showing one short example phrase, such as "Dad makes sure everyone eats vegetables at dinner"
- Middle area (250px): Three labeled drop zones or buttons side by side: "Family," "School," "Media/Technology"
- Bottom area (150px): Infobox with feedback text

Visual elements:
- Eight preset example cards: "Dad makes sure everyone eats vegetables at dinner," "The school has a rule about washing hands before lunch," "A video ad shows a toy that promises to make you happy," "Grandma teaches a family recipe that is passed down every year," "The gym teacher explains why stretching matters," "A cartoon character says a snack brand is 'the best,'" "A big sibling models wearing a helmet while biking," "An app sends a reminder to drink water"
- Simple flat icons for each zone: a house (Family), a school building (School), a screen/megaphone (Media/Technology)

Interactive controls:
- Click a card, then click the matching zone
- Button: "Next Example"
- Button: "Reset"

Default parameters:
- Example 1: "Dad makes sure everyone eats vegetables at dinner" (correct answer: Family)
- No zone selected yet

Data Visibility Requirements:
  Stage 1: Show example 1 text only
  Stage 2: Student clicks "Family" -- infobox shows "Yes! Family members often shape the foods we eat and the habits we practice at home."
  Stage 3: Student advances to the ad example and clicks "Media/Technology" -- infobox shows "Right. Ads and shows try to influence what we want, even when they don't say so directly."
  Stage 4: If a student picks the wrong zone, infobox gently explains which source fits best and why

Behavior:
- Each example has one best-fit answer; correct clicks highlight the zone and show a short explanation
- Incorrect clicks show a calm correction that names the correct source

Instructional Rationale: This is a Remember-level objective focused on recognizing categories of influence, so a simple three-bin sorting task with immediate feedback is appropriate; no multi-step simulation is needed.

Implementation notes: Use p5.js. Keep icons simple and flat, matching the mascot's visual style. Rotate through all eight examples before repeating.
```

## Related Resources

- [Chapter 7: Influences, Decisions, and Personal Goals](../../bands/grade-2/chapters/07-influences-decisions-goals/index.md)
