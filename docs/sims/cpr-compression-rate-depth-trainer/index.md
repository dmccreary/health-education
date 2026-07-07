---
title: CPR Compression Rate and Depth Trainer
description: Students apply correct chest compression rate (100-120
status: scaffold
library: p5.js
bloom_level: Apply (L3)
---

# CPR Compression Rate and Depth Trainer



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 7: Brain Health, Sleep, and Emergency Care](../../bands/grade-9-12/chapters/07-brain-health-sleep-and-emergency-care/index.md).

```text
Type: microsim

**sim-id:** cpr-compression-rate-depth-trainer<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy Level: Apply (L3)
Bloom Verb: demonstrate, execute, apply

Learning objective: Students apply correct chest compression rate (100-120
per minute) and depth (at least 2 inches) by tapping in rhythm with visual
feedback, reinforcing the muscle-memory timing used in real CPR.

Canvas layout:
- Left (55%): a metronome-style visual beat indicator and a simple chest
  compression depth gauge
- Right (45%): a tap button (or spacebar target), rate readout in
  compressions per minute, and a depth-simulation slider representing how
  hard the student is "pressing"

Data Visibility Requirements:
  Stage 1: Show the target rate zone (100-120 bpm) highlighted on a
  visual tempo bar, alongside a real reference: the tempo of "Stayin'
  Alive" by the Bee Gees, a widely used real-world memory aid for correct
  CPR rate
  Stage 2: Student taps the button repeatedly; the tool calculates their
  actual tap rate in real time and displays whether they are too slow,
  in range, or too fast
  Stage 3: A separate depth slider requires the student to hold at least
  a simulated "2 inch" mark before releasing, reinforcing that full
  recoil matters as much as depth
  Stage 4: After a 30-second trial, show a summary: average rate
  achieved, percentage of compressions in the correct depth range, and a
  persistent reminder that this is a rhythm-and-depth trainer, not a
  substitute for certified hands-on practice

Interactive controls:
- Tap button / spacebar for compressions
- Depth slider
- Button: "Start 30-Second Trial"
- Button: "Reset"

Default parameters: Target rate 100-120 bpm; target depth marked at 2
inches on the slider scale

Instructional Rationale: Correct compression rate and depth are Apply-level
psychomotor skills that require rhythm practice, not just factual recall,
so a tap-timing tool with immediate rate/depth feedback is used rather
than a static diagram of hand placement.

Implementation notes: p5.js; rate calculated from timestamps between taps
over a rolling window; persistent on-screen note: "For awareness and
rhythm practice only — get certified hands-on training from a course such
as the American Heart Association or American Red Cross."
```

## Related Resources

- [Chapter 7: Brain Health, Sleep, and Emergency Care](../../bands/grade-9-12/chapters/07-brain-health-sleep-and-emergency-care/index.md)
