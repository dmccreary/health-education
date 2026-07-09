---
title: Sleep Influence Sorter
description: Students classify a set of realistic sleep influences as biological, environmental, or social, and distinguish which are within personal control versus largely outside personal control.
status: scaffold
library: p5.js
bloom_level: Analyze (L4)
---

# Sleep Influence Sorter



<iframe src="main.html" width="100%" height="522px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 6: Sleep, Fitness, and Emergency Response](../../bands/grade-6-8/chapters/06-sleep-fitness-and-emergency-response/index.md).

```text
Type: microsim
**sim-id:** sleep-influence-sorter<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: classify, distinguish, examine

Learning objective: Students classify a set of realistic sleep influences as biological, environmental, or social, and distinguish which are within personal control versus largely outside personal control.

Layout: A deck of 10 cards (e.g., "Phone notifications after 10pm," "Early school bus pickup," "Shared bedroom with a sibling," "Body's natural teenage sleep-wake shift," "Weekend sports tournament") with two independent sorting zones stacked vertically: a top row (Biological / Environmental / Social) and a bottom row (Within My Control / Outside My Control).

Interactive controls: Drag each card into one zone per row; immediate feedback confirms both classifications with a one-sentence explanation; "Reset Deck" button; running tally of cards sorted correctly.

Default parameters: Deck order randomized each session; feedback panel starts empty until a card is sorted.

Instructional Rationale: Classifying influences along two independent dimensions and separating controllable from uncontrollable factors requires examining relationships among examples, which is Analyze-level; a two-axis sorter is used instead of a single list so students see that a factor's category and its controllability are separate questions.

Implementation notes: p5.js. Card data stored as an array of objects with text, category, and controllability fields. Responsive canvas that reflows cards on window resize.
```

## Related Resources

- [Chapter 6: Sleep, Fitness, and Emergency Response](../../bands/grade-6-8/chapters/06-sleep-fitness-and-emergency-response/index.md)
