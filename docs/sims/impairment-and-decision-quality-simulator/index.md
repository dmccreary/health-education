---
title: Impairment And Decision Quality Simulator
description: Students evaluate realistic decision scenarios under
status: scaffold
library: p5.js
bloom_level: Evaluate (L5)
---

# Impairment And Decision Quality Simulator



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 10: Substances - Effects and Safer Choices](../../bands/grade-9-12/chapters/10-substances-effects-and-safer-choices/index.md).

```text
Type: microsim

**sim-id:** impairment-and-decision-quality-simulator<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy Level: Evaluate (L5)
Bloom Verb: evaluate, judge, assess, justify

Learning objective: Students evaluate realistic decision scenarios under
three conditions (sober, mildly impaired, more heavily impaired) and judge
how impairment level changes risk assessment, impulse control, and
consideration of consequences, without depicting any method of
intoxication.

Canvas layout:
- Left (55%): one decision scenario at a time (e.g., "Deciding whether to
  get in a car with a driver who has been drinking," "Deciding whether to
  try an unfamiliar pill offered at a party," "Deciding how to respond to
  an escalating argument")
- Right (45%): an impairment-level selector (Sober, Mildly Impaired, More
  Heavily Impaired) and a feedback panel

Data Visibility Requirements:
  Stage 1: Show the scenario with the impairment selector set to "Sober";
  feedback panel shows the sober reasoning process (risk noticed, weighed,
  consequence considered)
  Stage 2: Learner selects "Mildly Impaired"; feedback panel shows how risk
  assessment and impulse control measurably shift, grounded in the
  documented cognitive effects covered in this section
  Stage 3: Learner selects "More Heavily Impaired"; feedback panel shows
  the further shift toward immediate reward and away from consequence
  weighing
  Stage 4: A "Why This Matters" closing panel connects the pattern to the
  fentanyl-contamination fact and to consent, both covered in this chapter,
  reinforcing that impairment does not just change mood — it changes the
  decision itself

Interactive controls:
- Impairment-level selector (three options)
- Scenario "Next" button
- Button: "Reset"

Default parameters: Three-scenario bank; starts at Sober for each new
scenario

Instructional Rationale: Judging how impairment changes the quality of a
decision across multiple realistic scenarios is an Evaluate-level task; a
selector-based comparison across impairment levels lets students construct
their own before/after judgment rather than being told the conclusion,
while avoiding any depiction of substance use itself.

Implementation notes: p5.js; scenario and feedback text stored in a
structured object; no scenario depicts a method of obtaining, using, or
concealing a substance — scenarios describe only the decision point and
its context. Responsive canvas.
```

## Related Resources

- [Chapter 10: Substances - Effects and Safer Choices](../../bands/grade-9-12/chapters/10-substances-effects-and-safer-choices/index.md)
