---
title: Online Harm Response Pathway
description: Students apply the correct five-step response sequence
status: scaffold
library: Mermaid
bloom_level: Apply (L3)
---

# Online Harm Response Pathway



<iframe src="main.html" width="100%" height="578px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 9: Digital and School Safety](../../bands/grade-9-12/chapters/09-digital-and-school-safety/index.md).

```text
Type: workflow

**sim-id:** online-harm-response-pathway<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Bloom Taxonomy Level: Apply (L3)
Bloom Verb: apply, demonstrate, execute

Learning objective: Students apply the correct five-step response sequence
(stop responding, save evidence, report through platform, report to
NCMEC CyberTipline, tell a trusted adult) to three realistic categories of
online harm: harassment, doxxing, and non-consensual image sharing. No
node describes or depicts explicit content, harassment content, or private
information itself.

Visual style: Mermaid flowchart with a category-selector at the top
(Harassment, Doxxing, Non-Consensual Image Sharing) feeding into a shared
five-step response chain, all nodes clickable

Nodes (all with `click NodeId call showInfo("term")`):
1. "Stop Responding" — click reveals: "Engaging with the person responsible
   rarely stops the behavior and can escalate it."
2. "Save Evidence" — click reveals: "Screenshot messages, usernames, posts,
   and timestamps before blocking — this is what platforms, schools, and
   law enforcement need to act."
3. "Report Through the Platform" — click reveals: "Every major platform
   has a tool for reporting harassment, threats, or non-consensual
   images."
4. "Report to NCMEC CyberTipline" — click reveals: "report.cybertip.org is
   the national resource for any non-consensual image involving a minor."
5. "Tell a Trusted Adult" — click reveals: "A parent, counselor, or other
   trusted adult can help evaluate next steps, including whether law
   enforcement should be involved."

Category nodes at top (click reveals a one-sentence definition of that
harm category without graphic detail): "Harassment," "Doxxing,"
"Non-Consensual Image Sharing"

Connections: each category node → Step 1 → Step 2 → Step 3 → Step 4 →
Step 5, with Step 4 shown as most critical when the category is
Non-Consensual Image Sharing (highlighted branch)

Color coding: gray for category selectors, blue for the five response
steps, green for the final "Tell a Trusted Adult" node

Implementation: Mermaid flowchart with click bindings to a showInfo()
function; category selection highlights the shared step chain rather than
creating separate chains, reinforcing that the response process is
consistent across harm types
```

## Related Resources

- [Chapter 9: Digital and School Safety](../../bands/grade-9-12/chapters/09-digital-and-school-safety/index.md)
