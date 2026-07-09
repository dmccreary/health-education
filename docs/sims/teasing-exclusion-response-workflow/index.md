---
title: Responding to Teasing and Exclusion — Decision Path
description: Students demonstrate the correct sequence of safe, healthy responses when experiencing or witnessing teasing or exclusion.
status: scaffold
library: Mermaid
bloom_level: Apply (L3)
---

# Responding to Teasing and Exclusion — Decision Path



<iframe src="main.html" width="100%" height="842px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 3: Mental and Emotional Health](../../bands/grade-4/chapters/03-mental-emotional-health/index.md).

```text
Type: workflow
**sim-id:** teasing-exclusion-response-workflow<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: demonstrate, use, practice

Learning objective: Students demonstrate the correct sequence of safe, healthy responses when experiencing or witnessing teasing or exclusion.

Purpose: Give a clear, memorable decision path for responding to teasing or exclusion, whether experienced directly or witnessed.

Visual style: Mermaid flowchart with decision diamonds and process rectangles; every node has a click handler opening an infobox

Steps:
1. Start: "Teasing or exclusion happens (to you or someone else)"
   Hover/click text: "This could be being left out of a game, called a hurtful name, or excluded from a group."
2. Decision: "Is it happening to you, or are you seeing it happen to someone else?"
   Click text: "The response is a little different depending on which one it is."
3a. Process (to you): "Say calmly how it made you feel"
    Click text: "Example: 'I feel left out when I'm not invited. Can I join?'"
4a. Decision: "Did it stop?"
    Click text: "Sometimes a calm, clear statement is enough to resolve it."
5a. Process (if no): "Walk away and tell a trusted adult"
    Click text: "Continuing unfair treatment should always be reported to a trusted adult."
3b. Process (witnessed): "Consider including the person or calmly telling an adult"
    Click text: "You do not have to solve it yourself — noticing and including someone, or getting an adult involved, both help."
6. End: "Situation reported or resolved safely"
   Click text: "Whether resolved by a calm conversation or with an adult's help, asking for support is always a safe, correct choice."

Color coding: Blue for the "experienced it" branch, green for the "witnessed it" branch, gold for decision diamonds

Implementation: Mermaid flowchart syntax with `click` directives on every node calling a JavaScript function that opens an infobox with the hover/click text above.
```

## Related Resources

- [Chapter 3: Mental and Emotional Health](../../bands/grade-4/chapters/03-mental-emotional-health/index.md)
