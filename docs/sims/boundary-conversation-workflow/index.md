---
title: Boundary Conversation Before Sexual Activity
description: Students apply the boundary-communication skill from
status: scaffold
library: Mermaid
bloom_level: Apply (L3)
---

# Boundary Conversation Before Sexual Activity



<iframe src="main.html" width="100%" height="962px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 4: Healthcare Access and Sexual Health](../../bands/grade-9-12/chapters/04-healthcare-access-and-sexual-health/index.md).

```text
Type: workflow

**sim-id:** boundary-conversation-workflow<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Bloom Taxonomy Level: Apply (L3)
Bloom Verb: demonstrate, use, apply

Learning objective: Students apply the boundary-communication skill from
the consent chapter to the specific context of discussing protection and
prevention with a partner before sexual activity.

Visual style: Mermaid flowchart, top-to-bottom, click handlers on every
node (`click NodeId call showInfo("term")`)

Nodes (all clickable):
1. "Decide Personal Boundaries in Advance" — click text: "Think through
   what protective conditions matter to you before a situation makes it
   harder to think clearly"
2. "State Boundaries Directly to a Partner" — click text: "Clear,
   unambiguous statements, not hints — the same standard as any other
   boundary communication"
3. "Discuss Protection Method(s)" — click text: "Agree explicitly on which
   method(s) will be used; assuming a shared understanding is not the
   same as confirming one"
4. "Discuss Testing History" — click text: "Sharing recent testing status
   supports an informed, mutual decision for both partners"
5. "Partner Response?" (decision diamond) — click text: "A partner's
   willingness to have this conversation openly is itself meaningful
   information"
6a. "Partner Engages Respectfully" — click text: "Mutual respect means
    both partners' health and comfort carry equal weight in the decision"
6b. "Partner Resists or Dismisses the Conversation" — click text: "Refusal
    to discuss protection is a boundary-relevant signal, not a minor
    detail to overlook"
7. "Informed, Mutual Decision" — click text: "The same five requirements
   of consent from the previous chapter apply to this decision as much as
   any other"

Connections: 1→2, 2→3, 3→4, 4→5, 5→6a, 5→6b, 6a→7

Color coding: blue for preparation steps (1-4), gold for the decision
diamond, green for the respectful-response branch, orange for the
resistance branch

Interactive features: click any node for its infobox explaining the
concept and linking back to the consent framework from the previous
chapter

Implementation: Mermaid.js flowchart with JavaScript click bindings to a
custom showInfo() function
```

## Related Resources

- [Chapter 4: Healthcare Access and Sexual Health](../../bands/grade-9-12/chapters/04-healthcare-access-and-sexual-health/index.md)
