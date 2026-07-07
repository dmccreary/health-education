---
title: Who Can I Tell?
description: Students practice the action of Asking For Help by choosing a trusted adult to tell about a strong feeling shown in a simple picture scenario.
status: scaffold
library: p5.js
bloom_level: Apply (L3)
---

# Who Can I Tell?



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 3: Feelings And Kindness](../../bands/kindergarten/chapters/03-feelings-and-kindness/index.md).

```text
Type: microsim
**sim-id:** who-can-i-tell<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: practice, demonstrate

Learning objective: Students practice the action of Asking For Help by choosing a trusted adult to tell about a strong feeling shown in a simple picture scenario.

Canvas layout:
- Top area (200px): A simple illustrated scene showing a child experiencing a strong feeling (e.g., a child looking scared during a thunderstorm, or a child looking sad after being left out at recess), with a read-aloud caption below it
- Middle area (200px): Three large pictures of trusted adults the child could tell (e.g., teacher, parent, school nurse), each in its own button-like frame
- Bottom strip (100px): A large "Tell Them!" confirmation button and a Reset button

Visual elements:
- 6 simple scenario illustrations cycling one at a time, each paired with one clear caption read aloud by the teacher, such as "This child feels scared. Who can they tell?"
- Trusted adult pictures reused from the Chapter 2 trusted-adult set for visual consistency

Interactive controls:
- Click: child selects one trusted adult picture in response to the scenario
- Button: "Tell Them!" confirms the choice
- Button: "Reset" to try a new scenario

Default parameters:
- First scenario: a child feeling scared during a loud thunderstorm
- Any of the three trusted adult choices is accepted as correct for every scenario, reinforcing that more than one trusted adult can always help

Behavior:
- After the child clicks a trusted adult and presses "Tell Them!", a short warm animation shows the trusted adult kneeling down to listen, and a caption appears: "Great choice! Telling a trusted adult about a strong feeling always helps."
- No answer is ever marked wrong — the sim always affirms the choice, because the learning goal is practicing the act of telling, not picking one "correct" person
- After all 6 scenarios are complete, show a celebration message: "You know just what to do with a big feeling — tell someone you trust!"

Instructional Rationale: This is an Apply-level objective (practicing a real behavior in a scenario), so a scenario-based choice pattern is appropriate. Because the true goal is building the habit of asking for help — not testing which specific adult is "right" — the sim intentionally accepts every reasonable choice rather than scoring correctness.

Implementation notes: Use p5.js. Store scenarios as objects containing an illustration reference and a caption string. Keep interactions extremely simple (single click, single confirm) for pre-reader independence during play, while the teacher reads captions aloud.
```

## Related Resources

- [Chapter 3: Feelings And Kindness](../../bands/kindergarten/chapters/03-feelings-and-kindness/index.md)
