---
title: Coercion Tactics Identifier
description: Students analyze short dialogue examples to identify which of five coercion tactics (guilt-tripping, repeated pressure, threats, exploiting power differences, wearing someone down) is present.
status: scaffold
library: p5.js
bloom_level: Analyze (L4)
---

# Coercion Tactics Identifier



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 2: Relationships, Boundaries, and Consent](../../bands/grade-6-8/chapters/02-relationships-boundaries-and-consent/index.md).

```text
Type: microsim
**sim-id:** coercion-tactics-identifier<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: identify, differentiate, examine

Learning objective: Students analyze short dialogue examples to identify which of five coercion tactics (guilt-tripping, repeated pressure, threats, exploiting power differences, wearing someone down) is present.

Layout: One short two-line dialogue exchange at a time, with five tactic buttons beneath it and a feedback panel.

Visual elements: 10 short dialogue scenarios spanning friend, family, and romantic contexts, each reflecting exactly one primary tactic, plain text only (no depicted violence or explicit content).

Behavior: Feedback names the specific phrase signaling the tactic and briefly explains why it counts as pressure rather than a fair request.

Instructional Rationale: Identifying tactics embedded in realistic dialogue is Analyze-level, so a classification interface with real phrasing is used, training pattern recognition transferable to real conversations.

Implementation notes: p5.js. Dialogue/tactic-answer pairs stored as objects; feedback references the exact quoted phrase.
```

## Related Resources

- [Chapter 2: Relationships, Boundaries, and Consent](../../bands/grade-6-8/chapters/02-relationships-boundaries-and-consent/index.md)
