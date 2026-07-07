---
title: Health Concern Reporting Decision Path
description: Students apply the health concern reporting process by tracing a decision path from noticing a concern to telling a trusted adult, for both self-concerns and friend-concerns.
status: scaffold
library: Mermaid
bloom_level: Apply (L3)
---

# Health Concern Reporting Decision Path



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 1: Foundations and Trusted Adults](../../bands/grade-5/chapters/01-foundations-and-trusted-adults/index.md).

```text
Type: workflow
**sim-id:** health-concern-reporting-decision-path<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: demonstrate, use, practice

Learning objective: Students apply the health concern reporting process by tracing a decision path from noticing a concern to telling a trusted adult, for both self-concerns and friend-concerns.

Purpose: Give students a repeatable decision path they can mentally reuse any time a health concern comes up, for themselves or a friend.

Visual style: Mermaid flowchart with decision diamonds and process rectangles, every node clickable

Steps:
1. Start: "Notice a health concern" — click reveals: "This could be a physical symptom, an emotional struggle, or something a friend told you."
2. Decision: "Is this about you or a friend?" — click reveals: "Both types of concerns deserve to be reported to a trusted adult — the path is nearly the same either way."
3a. Process (if you): "Name the concern clearly to yourself" — click reveals: "Put the concern into one clear sentence before you go find someone."
3b. Process (if friend): "Consider your friend's privacy, but remember safety comes first" — click reveals: "You can be kind about how you share it, but a real health concern should still be shared."
4. Process: "Choose a trusted adult suited to this concern" — click reveals: "Use the trusted adult qualities and network from earlier in this chapter."
5. Process: "Tell the trusted adult clearly, using an 'I' statement if it's your own concern" — click reveals: "State the concern directly rather than hinting."
6. Decision: "Did the adult respond helpfully?" — click reveals: "Most adults will, but if not, that doesn't mean the concern wasn't worth sharing."
7a. End (if yes): "Work with the adult on next steps" — click reveals: "This might mean a doctor visit, a conversation with a counselor, or simply ongoing support."
7b. Loop back (if no): "Try a different trusted adult" — click reveals: "Loops back to step 4 with a new adult in mind."

Color coding:
- Blue: Noticing/identifying steps
- Yellow: Decision diamonds
- Green: Successful resolution steps
- Orange: Retry loop

Implementation: Mermaid flowchart syntax with a `click` directive on every node calling a JavaScript function that opens an infobox with that node's explanation text.
```

## Related Resources

- [Chapter 1: Foundations and Trusted Adults](../../bands/grade-5/chapters/01-foundations-and-trusted-adults/index.md)
