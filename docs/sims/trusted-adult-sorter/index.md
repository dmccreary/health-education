---
title: Who Is My Trusted Adult?
description: Students identify and name trusted adults at home, at school, and in the community by dragging a picture of a person into the correct labeled location bin.
status: scaffold
library: p5.js
bloom_level: Remember (L1)
---

# Who Is My Trusted Adult?



<iframe src="main.html" width="100%" height="482px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 2: Family And Trusted Adults](../../bands/kindergarten/chapters/02-family/index.md).

```text
Type: microsim
**sim-id:** trusted-adult-sorter<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Remember (L1)
Bloom Taxonomy Verb: identify, name, recognize

Learning objective: Students identify and name trusted adults at home, at school, and in the community by dragging a picture of a person into the correct labeled location bin.

Canvas layout:
- Top area (100px): One large picture of a person shown at a time, with a simple caption below (read aloud by teacher), such as "teacher," "grandma," "police officer"
- Middle/bottom area (350px): Three labeled bins side by side: "At Home," "At School," "In the Community," each with a simple background icon (a house, a school building, a neighborhood street)
- Bottom strip (50px): Score display ("You found 4 trusted adults!") and a Reset button

Visual elements:
- 9 large, simple, friendly illustrated people cycling one at a time: parent, grandparent, guardian, teacher, school nurse, bus driver, doctor, police officer, firefighter
- Each bin has a distinct color: warm yellow for At Home, blue for At School, green for In the Community

Interactive controls:
- Drag-and-drop: child drags the current person picture onto the bin they think is correct
- Button: "Reset" to start over
- Button: "Next Person" appears after each correct placement

Default parameters:
- First person shown: a parent (At Home)
- People appear in a fixed friendly order (not randomized) so a teacher can predict what is coming next

Behavior:
- When a person is dropped on a matching bin, the bin glows green, a cheerful chime plays, and the score increases by one
- Some people (such as a doctor) can correctly belong in more than one bin; if the child chooses any reasonable bin, the sim accepts it and shows a short caption confirming why
- When a placement seems clearly mismatched, the picture gently slides back to the top so the child can try again — no harsh error sound
- After all 9 people are sorted, show a celebration message: "Great job! You know so many trusted adults!"

Instructional Rationale: This is a Remember-level (identify/name) objective, so a simple drag-and-drop matching pattern is appropriate — it gives the child immediate, forgiving feedback without requiring reading. Accepting more than one correct bin for certain people reflects real life, where trusted adults like doctors can be encountered in more than one setting.

Implementation notes: Use p5.js. Represent each person and bin as an object with x/y/width/height for hit-testing during drag events. Keep all text large (24px+) since this is a read-aloud/pre-reader audience.
```

## Related Resources

- [Chapter 2: Family And Trusted Adults](../../bands/kindergarten/chapters/02-family/index.md)
