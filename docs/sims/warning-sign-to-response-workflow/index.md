---
title: Warning Sign to Response Workflow
description: Students apply the correct sequence from noticing a
status: scaffold
library: Mermaid
bloom_level: Apply (L3)
---

# Warning Sign to Response Workflow



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 9: Digital and School Safety](../../bands/grade-9-12/chapters/09-digital-and-school-safety/index.md).

```text
Type: workflow

**sim-id:** warning-sign-to-response-workflow<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Bloom Taxonomy Level: Apply (L3)
Bloom Verb: apply, demonstrate, execute

Learning objective: Students apply the correct sequence from noticing a
warning sign in a peer to a trained adult responding, reinforcing that
reporting — not personal judgment of severity — is the correct student
action every time. No node describes any method, weapon, tactic, or
triggering event; every node addresses only warning-sign categories and
the reporting process.

Visual style: Mermaid flowchart with a start node, three sequential
process nodes, and an end node, all clickable

Nodes (all with `click NodeId call showInfo("term")`):
1. "I Notice a Warning Sign Category" — click reveals: "This could be a
   statement of intent, specific planning language, escalating fascination
   with violence, or a sudden behavior change — noticing the pattern is
   the first step."
2. "I Tell a Trusted Adult, Staff Member, or Tip Line" — click reveals:
   "Report it every time, without deciding in advance whether it is
   serious enough — that judgment belongs to trained adults."
3. "Trained Staff Assess the Concern" — click reveals: "School threat
   assessment teams evaluate the report using a structured process
   designed for exactly this situation."
4. "Appropriate Support or Intervention Follows" — click reveals: "Most
   reported concerns are resolved through support, not punishment —
   reporting early is what makes that possible."
End node: "The School Community Is Safer" — click reveals: "Prevention
research consistently identifies students noticing and reporting concerns
as one of the most effective safety measures that exists."

Connections: 1 → 2 → 3 → 4 → End

Color coding: orange for the noticing node, blue for the reporting node,
green for the assessment and outcome nodes

Implementation: Mermaid flowchart with click bindings to a showInfo()
function; infobox text in a JS lookup object. Content restriction: no
node, label, or infobox text may reference a weapon, tactic, method, or
any operational or triggering detail — only the warning-sign category and
reporting/response process.
```

## Related Resources

- [Chapter 9: Digital and School Safety](../../bands/grade-9-12/chapters/09-digital-and-school-safety/index.md)
