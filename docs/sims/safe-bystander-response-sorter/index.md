---
title: Safe vs. Unsafe Bystander Response Sorter
description: Students evaluate a list of possible bystander responses to a fight or serious bullying situation and judge which responses are safe and effective versus which put the bystander at risk or cause harm.
status: scaffold
library: p5.js
bloom_level: Evaluate (L5)
---

# Safe vs. Unsafe Bystander Response Sorter



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 4: Equity, Belonging, And Bystander Action](../../bands/grade-5/chapters/04-equity-belonging-and-bystander-action/index.md).

```text
Type: microsim
**sim-id:** safe-bystander-response-sorter<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Evaluate (L5)
Bloom Taxonomy Verb: judge, assess, justify

Learning objective: Students evaluate a list of possible bystander responses to a fight or serious bullying situation and judge which responses are safe and effective versus which put the bystander at risk or cause harm.

Canvas layout:
- Left side (450px): A single response card describing one possible bystander action
- Right side (200px): Two sorting buttons ("Safe and Helpful" / "Risky or Harmful") and a feedback panel

Visual elements:
- Response card with plain text describing one action (e.g., "Run to get a teacher", "Try to physically pull them apart", "Record it on your phone", "Walk a friend away before it escalates", "Cheer from the crowd")
- Two clearly labeled sorting buttons
- Feedback panel explaining why the response belongs in that category, with a calm, sincere tone throughout

Interactive controls:
- Click "Safe and Helpful" or "Risky or Harmful" to sort each response card
- Button: "Why?" — reveals a short, serious explanation, always emphasizing that bystander safety comes first
- Button: "Next Response" — cycles through a bank of 8 response cards

Default parameters:
- Starts with response card: "Run to get a teacher or staff member right away."

Behavior:
- Correctly sorting "Run to get a teacher" as Safe and Helpful reveals: "This is the single most important bystander action in a fight."
- Correctly sorting "Try to physically pull them apart" as Risky or Harmful reveals: "Never physically intervene in a fight. You could be seriously hurt, and it rarely stops the fight."
- Correctly sorting "Record it on your phone" as Risky or Harmful reveals: "Filming and sharing causes lasting harm to everyone involved."
- Every response, once sorted, keeps its feedback visible until "Next Response" is clicked, reinforcing the reasoning rather than just scoring the answer

Instructional Rationale: This is an Evaluate-level objective requiring students to judge and justify safe versus unsafe bystander actions, so the pattern is a judgment task with serious, justification-based feedback rather than a fast-paced game, matching the safety-first tone this topic requires. No humor, sound effects, or playful mascot language appear anywhere in this MicroSim.

Implementation notes: Use p5.js. Store each response as an object with text, correct category, and an explanation string; keep all visuals calm and flat with no celebratory animation, consistent with the serious subject matter.
```

## Related Resources

- [Chapter 4: Equity, Belonging, And Bystander Action](../../bands/grade-5/chapters/04-equity-belonging-and-bystander-action/index.md)
