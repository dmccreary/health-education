---
title: Personal Boundaries Interactive Map
description: Students explain and classify examples of personal boundaries across four categories (physical, belongings, time, information) and connect each to an example boundary-setting phrase.
status: scaffold
library: p5.js
bloom_level: Understand (L2)
---

# Personal Boundaries Interactive Map



<iframe src="main.html" width="100%" height="522px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 4: Personal Safety and Refusal Skills](../../bands/grade-4/chapters/04-safety-and-refusal-skills/index.md).

```text
Type: infographic
**sim-id:** personal-boundaries-interactive-map<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain, exemplify, classify

Learning objective: Students explain and classify examples of personal boundaries across four categories (physical, belongings, time, information) and connect each to an example boundary-setting phrase.

Purpose: Reinforce the four boundary categories from the chapter and show a matching respectful phrase for each.

Layout: A central circle labeled "Personal Boundaries" with four surrounding petal shapes labeled Physical, Belongings, Time, and Information

Interactive elements:
- Hover or click a petal to reveal: a one-sentence definition of that boundary type, one everyday example, and one example phrase for setting that boundary
- Clicking the center circle reveals a summary: "You have the right to set boundaries, and you also have the responsibility to respect other people's boundaries."

Data to display per petal:
- Physical: "Your body and personal space." Example: someone standing too close. Phrase: "Please give me a little more space."
- Belongings: "Your things." Example: a classmate grabbing your pencil. Phrase: "Please ask before you borrow my things."
- Time: "How you spend your time." Example: being pressured to stay longer at an activity. Phrase: "I need to head home now."
- Information: "What you share about yourself." Example: being asked personal questions by someone you don't know well. Phrase: "I'd rather not share that."

Color coding: Each petal a distinct calm color (blue, green, purple, gold); center circle in warm neutral gray

Responsive behavior: Petals rearrange into a vertical stack on narrow screens while keeping click/hover functionality

Implementation: p5.js with clickable petal shapes and a text infobox panel that updates on interaction.
```

## Related Resources

- [Chapter 4: Personal Safety and Refusal Skills](../../bands/grade-4/chapters/04-safety-and-refusal-skills/index.md)
