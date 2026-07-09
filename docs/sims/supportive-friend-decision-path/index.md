---
title: Supportive Friend Decision Path
description: Students evaluate a series of short peer-support scenarios and judge which response best balances listening, respecting boundaries, and guiding the peer toward trusted-adult help.
status: scaffold
library: p5.js
bloom_level: Evaluate (L5)
---

# Supportive Friend Decision Path



<iframe src="main.html" width="100%" height="534px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 3: Managing Emotions and Relationships](../../bands/grade-5/chapters/03-managing-emotions-and-relationships/index.md).

```text
Type: microsim
**sim-id:** supportive-friend-decision-path<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Evaluate (L5)
Bloom Taxonomy Verb: judge, assess, justify

Learning objective: Students evaluate a series of short peer-support scenarios and judge which response best balances listening, respecting boundaries, and guiding the peer toward trusted-adult help.

Canvas layout:
- Left side (450px): A scenario card describing a peer's difficult situation and three possible responses
- Right side (200px): Response selector and feedback panel

Visual elements:
- Scenario card with a short, age-appropriate situation (a worried friend, a friend being excluded, a friend mentioning a scary home situation)
- Three response option cards per scenario, each written in a warm, sincere tone
- Feedback panel that explains the strengths or gaps of the chosen response

Interactive controls:
- Click one of three response cards to answer
- Button: "See Feedback" — reveals why the response is strong, or what a stronger response would include
- Button: "Next Scenario"

Default parameters:
- Starts on Scenario 1: a friend who seems sad and quiet at recess

Behavior:
- Every scenario has one response that best balances listening, respecting the peer's boundaries, and gently guiding toward a trusted adult; feedback is sincere and non-judgmental regardless of which option the student picks
- After feedback, the student can proceed to additional scenarios covering different situations

Instructional Rationale: This is an Evaluate-level objective, so the pattern is a judgment task with justification feedback rather than a game with points, matching the sincere, careful tone this sensitive topic requires.

Implementation notes: Use p5.js. Keep visual style calm and simple (no game-like scoring sounds or animations); store scenarios and responses as objects with a "best response" flag and an explanation string for every option.
```

## Related Resources

- [Chapter 3: Managing Emotions and Relationships](../../bands/grade-5/chapters/03-managing-emotions-and-relationships/index.md)
