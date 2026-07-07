---
title: Peer Support Response Simulator
description: Students evaluate a set of possible peer responses to
status: scaffold
library: p5.js
bloom_level: Evaluate (L5)
---

# Peer Support Response Simulator



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 5: Mental Health and Crisis Support](../../bands/grade-9-12/chapters/05-mental-health-and-crisis-support/index.md).

```text
Type: microsim

**sim-id:** peer-support-response-simulator<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy Level: Evaluate (L5)
Bloom Verb: judge, assess, justify

Learning objective: Students evaluate a set of possible peer responses to
a friend disclosing ongoing depression or anxiety symptoms (not an acute
crisis disclosure, which is covered separately) and justify which response
best reflects supportive listening, validation, and appropriate referral.

Canvas layout:
- Left (55%): a short scenario describing a friend sharing that they have
  been feeling persistently down or anxious for weeks
- Right (45%): four possible response options to rate, each phrased as
  something a peer might say

Data Visibility Requirements:
  Stage 1: Show the scenario and four response options (e.g., a dismissive
  response, an overly clinical response, a validating-and-referring
  response, and a response that tries to "fix" the friend's feelings
  immediately)
  Stage 2: Student rates each response on a simple scale (Not Helpful,
  Somewhat Helpful, Very Helpful)
  Stage 3: Reveal the rationale for each rating, tied to the five-step
  peer-support framework from the chapter text
  Stage 4: Track how the student's ratings compare to the model rating set

Interactive controls:
- Rating buttons for each of the four response options
- Button: "Show Rationale"
- Button: "New Scenario" (3-4 scenario sets total, all non-crisis,
  depression/anxiety-support scenarios)

Default parameters: Scenario bank cycles without repetition until
exhausted, then reshuffles

Instructional Rationale: Judging the quality of different response options
against a defined standard is an Evaluate-level objective, so a rating
task with revealed rationale is used rather than a single correct/incorrect
answer, reflecting that real peer support involves judgment rather than
one fixed script.

Implementation notes: p5.js with an object array of {scenario,
responseOptions, modelRatings, rationale}; content limited to ongoing
depression/anxiety support scenarios, not acute crisis disclosure, to keep
this diagram distinct from the crisis-response workflow above.
```

## Related Resources

- [Chapter 5: Mental Health and Crisis Support](../../bands/grade-9-12/chapters/05-mental-health-and-crisis-support/index.md)
