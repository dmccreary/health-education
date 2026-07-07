---
title: Types Of Concerning Behavior Explorer
description: Students explain the major categories of concerning behavior worth reporting and classify realistic examples under the correct category. No node describes attack methods, tactics, weapons details, or planning specifics — only the category of behavior and why it warrants reporting.
status: scaffold
library: vis-network
bloom_level: Understand (L2)
---

# Types Of Concerning Behavior Explorer



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 7: Digital Safety and School Safety](../../bands/grade-6-8/chapters/07-digital-safety-and-school-safety/index.md).

```text
Type: graph-model
**sim-id:** types-of-concerning-behavior-explorer<br/>
**Library:** vis-network<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain, classify, exemplify

Learning objective: Students explain the major categories of concerning behavior worth reporting and classify realistic examples under the correct category. No node describes attack methods, tactics, weapons details, or planning specifics — only the category of behavior and why it warrants reporting.

Node types: Central node "Concerning Behavior Worth Reporting" (dark red circle). Category nodes (orange squares): Statements Of Intent To Harm, Specific Planning Language, Escalating Fascination With Violence, Sudden Major Behavior Changes, Direct Threats. Example nodes (light blue circles) linked to each category with brief, non-graphic descriptions (e.g., "Posting online about wanting to hurt themselves or others," "Talking about a plan or timeline beyond normal venting," "Marked increase in focus on weapons or past violent events," "Giving away possessions or sudden extreme withdrawal," "Naming a specific person or the school as a target"). Action node (green diamond) "Report To A Trusted Adult Or Staff Member" linked from every category node.

Edge types: "Example Of" (dotted blue arrows from category nodes to example nodes). "Should Be Reported To" (solid green arrows from every category node to the action node).

Layout: Central node in the middle, five category nodes arranged around it in a ring, example nodes branching outward, and the shared action node positioned prominently below.

Interactive features: Hover any node to see its label; click a category node to open an infobox explaining why that category matters and reinforcing that reporting is always the right choice; click an example node to open an infobox with a one-sentence explanation of why it counts as a warning sign; click the action node to open an infobox listing reporting options (trusted adult, staff member, anonymous tip line); zoom with mouse wheel, pan by dragging background.

Legend: Color/shape key distinguishing the central node, categories, examples, and the shared reporting action.

Implementation: vis-network JavaScript library; canvas responsive, default 800x500px. Content review note: no node may include weapon types, tactics, timing methods, or any operational detail — only the category label and the reporting message.
```

## Related Resources

- [Chapter 7: Digital Safety and School Safety](../../bands/grade-6-8/chapters/07-digital-safety-and-school-safety/index.md)
