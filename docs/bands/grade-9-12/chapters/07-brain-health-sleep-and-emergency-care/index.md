---
title: Brain Health, Sleep, and Emergency Care
description: Grade 9-12 chapter on brain-healthy habits and sleep's influence on lifelong health, understanding Alzheimer's disease and other dementias and supporting an elder with cognitive impairment, and demonstrating CPR techniques and AED use in an emergency.
generated_by: claude skill chapter-content-generator
date: 2026-07-06 19:20:24
version: 0.09
---

# Brain Health, Sleep, and Emergency Care

## Summary

This chapter covers habits that protect brain health across the lifespan,
including recognizing Alzheimer's disease and other dementias and
supporting an elder with cognitive impairment, alongside the role of sleep
and rest in lifelong health. Students also learn to perform CPR and use an
AED in an emergency.

## Concepts Covered

1. Brain-Healthy Habits
2. Alzheimer's Disease And Other Dementias
3. Supporting An Elder With Cognitive Impairment
4. Sleep And Rest Influences On Health
5. CPR Techniques
6. AED Use

## Prerequisites

Builds on the concept of health introduced in
[Chapter 1: Food and Nutrition](../01-food-and-nutrition/index.md).

---

!!! mascot-welcome "A brain you'll rely on for the next eighty years"
    ![Scout sitting attentively](../../../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    This chapter covers three things worth taking seriously: the habits
    that protect your brain for decades to come, how to support a family
    member whose brain is changing with age, and the emergency skills —
    CPR and AED use — that let you save a life. Let's get into it.

## Brain-Healthy Habits

Brain health is not something that only becomes relevant in old age — the
habits that protect cognitive function over a lifetime are built starting
now, in adolescence. **Brain-healthy habits** are lifestyle practices —
including physical activity, nutrition, cognitive engagement, and social
connection — that are evidence-based in supporting brain structure and
function across the lifespan.

Population research on cognitive aging consistently points to the same
small set of modifiable factors, each acting on the brain through a
distinct biological pathway:

- **Aerobic physical activity** increases blood flow to the brain and
  promotes the growth of new connections between neurons, particularly in
  regions involved in memory.
- **Nutrition** matters because the brain is metabolically expensive
  tissue; diets rich in vegetables, fruits, whole grains, and
  omega-3 fatty acids are associated with slower age-related cognitive
  decline, while diets high in processed foods and saturated fat are
  associated with faster decline.
- **Cognitive engagement** — learning new skills, reading, playing
  strategy games, or picking up a new language — builds what researchers
  call *cognitive reserve*, a buffer of neural connections that helps the
  brain tolerate age-related changes without losing function as quickly.
- **Social connection** protects the brain independent of the other three
  factors; chronic social isolation is associated with measurably faster
  cognitive decline, likely because meaningful conversation and
  relationship maintenance are themselves complex cognitive tasks.
- **Avoiding harm** — protecting the brain from repeated concussion,
  excessive alcohol use, and unmanaged chronic conditions like high blood
  pressure and diabetes, all of which are independently linked to elevated
  dementia risk decades later.

These five factors do not act independently — a person who is physically
active is also more likely to sleep well and stay socially connected
through team or group activities, and these effects compound over decades
rather than years.

#### Diagram: Brain Health Factor Explorer

<iframe src="../../../../sims/brain-health-factor-explorer/main.html" width="100%" height="550px" scrolling="no"></iframe>
<details markdown="1">
<summary>Brain Health Factor Explorer</summary>
Type: graph-model

**sim-id:** brain-health-factor-explorer<br/>
**Library:** vis-network<br/>
**Status:** Specified

Bloom Taxonomy Level: Understand (L2)
Bloom Verb: explain, classify, exemplify

Learning objective: Students explain how five modifiable factors (physical
activity, nutrition, cognitive engagement, social connection, avoiding
harm) support brain health, and classify concrete habits under the correct
factor.

Node types:
1. Central node: "Brain-Healthy Habits" (blue circle)
2. Factor nodes (green squares): Physical Activity, Nutrition, Cognitive
   Engagement, Social Connection, Avoiding Harm
3. Example nodes (light circles), 2-3 per factor, drawn from the chapter
   text (e.g., under Cognitive Engagement: "Learning a new language",
   "Playing strategy games")
4. Mechanism nodes (orange diamonds), one per factor, describing the
   biological pathway (e.g., "Increases blood flow and neuron connections"
   for Physical Activity)

Edge types:
- "Supports Brain Health Through" (central node to each factor)
- "Works By" (factor to its mechanism node)
- "Example" (factor to its example nodes)

Layout: Radial, central node in the middle, factors surrounding it,
mechanisms and examples one ring further out

Interactive features:
- Hover any node: shows a one-sentence description
- Click a factor node: opens a panel explaining that factor's evidence
  base in plain language
- Click a mechanism node: opens a panel explaining the underlying
  biological pathway
- Drag, zoom, and pan enabled

Legend: color/shape key for central node, factors, mechanisms, examples

Implementation: vis-network, radial layout, click-triggered side panel
content stored in a JSON lookup keyed by node id
</details>

## Sleep And Rest Influences On Health

Among the five brain-healthy factors, sleep deserves its own close look,
because its effects reach far beyond feeling tired the next day.
**Sleep and rest influences on health** describes how sleep quantity and
quality affect physical, cognitive, and emotional functioning across the
lifespan, and how culture, community, and social conditions create
disparities in who reliably gets adequate rest.

During sleep, the brain performs functions that cannot happen efficiently
while awake — consolidating memories from the day, clearing metabolic
waste products through the glymphatic system, and regulating hormones
that control appetite, stress, and immune function. Teenagers need about
8 to 10 hours of sleep per night, yet national data consistently show most
high schoolers get considerably less, largely because of early school
start times colliding with a biological shift in adolescent sleep timing.

Chronic sleep deprivation has measurable consequences across several
systems:

| System Affected | Effect of Chronic Sleep Deprivation |
|---|---|
| Cognitive function | Slower reaction time, impaired memory consolidation, reduced decision-making quality |
| Emotional regulation | Increased irritability, higher risk of anxiety and depression symptoms |
| Immune function | Reduced ability to fight off infection |
| Metabolic health | Disrupted hunger hormones, increased risk of weight gain and insulin resistance |
| Long-term brain health | Emerging research links chronic poor sleep to elevated dementia risk decades later |

Sleep is not equally accessible to everyone. Students working after-school
jobs to support their families, living in households with shift-working
parents, sharing a bedroom in crowded housing, or living in neighborhoods
with high nighttime noise all face structural barriers to consistent
sleep that have nothing to do with personal discipline. Recognizing this
distinction — between a sleep habit you can adjust and a social condition
that constrains your options — matters for evaluating your own situation
without assuming poor sleep is always a simple choice.

!!! mascot-thinking "Sleep is doing brain maintenance, not just rest"
    ![Scout thinking](../../../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Your brain is not idle while you sleep — it is actively consolidating
    what you learned that day and clearing out cellular waste. Cutting
    sleep short interrupts a maintenance process, not just a break.

#### Diagram: Sleep Deprivation Impact Simulator

<iframe src="../../../../sims/sleep-deprivation-impact-simulator/main.html" width="100%" height="500px" scrolling="no"></iframe>
<details markdown="1">
<summary>Sleep Deprivation Impact Simulator</summary>
Type: microsim

**sim-id:** sleep-deprivation-impact-simulator<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy Level: Evaluate (L5)
Bloom Verb: assess, justify, evaluate

Learning objective: Students evaluate how varying nightly sleep duration
affects cognitive, emotional, immune, and metabolic outcomes, and justify
a recommended sleep target for a realistic student schedule.

Canvas layout:
- Left (55%): a slider-controlled "sleep duration" readout showing
  simulated next-day effects across four dimensions (cognitive, emotional,
  immune, metabolic), each as a simple bar gauge
- Right (45%): a realistic student schedule scenario (school start time,
  after-school job or activity, homework load) with a text prompt asking
  the student to justify a target bedtime

Data Visibility Requirements:
  Stage 1: Show baseline gauges at 8 hours of sleep (all four dimensions
  in the healthy range)
  Stage 2: Student drags the sleep-duration slider from 4 to 10 hours and
  watches all four gauges shift in real time, based on research-informed
  weighting (largest drop-off below 6 hours)
  Stage 3: Student reads the schedule scenario and proposes a target
  bedtime that would achieve at least 8 hours given the fixed wake time
  Stage 4: Reveal a model answer showing the bedtime math and naming one
  trade-off the student would need to negotiate (e.g., cutting a late
  activity short)

Interactive controls:
- Slider: Sleep duration (4-10 hours)
- Text input: proposed target bedtime
- Button: "Check My Reasoning"
- Button: "Reset"

Default parameters: Slider starts at 8 hours; scenario wake time fixed at
6:30 a.m.

Instructional Rationale: Justifying a specific sleep target against a
realistic, constrained schedule is an Evaluate-level task, so the
simulator pairs a parameter-exploration gauge (to build the evidence base)
with a justification prompt (to apply that evidence to a real decision),
rather than only displaying facts about sleep.

Implementation notes: p5.js; gauge values computed from a simple weighted
function of sleep duration per dimension; schedule scenario data stored
as an object with fixed wake time and variable evening commitments.
</details>

Sleep, physical activity, nutrition, cognitive engagement, and social
connection are not five separate assignments — they are interacting
systems that either reinforce or undermine each other. A late night spent
scrolling instead of sleeping does not just cost you tomorrow's alertness;
compounded over years, it is one of the modifiable factors research
increasingly ties to long-term brain health.

## Alzheimer's Disease And Other Dementias

Brain-healthy habits matter across an entire lifetime, and understanding
why requires knowing what can go wrong when the brain ages less well.
**Alzheimer's disease and other dementias** are conditions involving
progressive decline in memory, thinking, and daily functioning caused by
damage to brain cells, with Alzheimer's disease being the most common
specific cause among several distinct types of dementia.

*Dementia* is not itself a single disease — it is a general term for a
pattern of symptoms (memory loss, confusion, difficulty with language or
problem-solving) that can result from several underlying conditions:

- **Alzheimer's disease** accounts for roughly 60-80% of dementia cases
  and involves the buildup of abnormal protein deposits in the brain that
  progressively damage neurons and their connections, typically starting
  with short-term memory loss.
- **Vascular dementia** results from reduced blood flow to the brain,
  often following a stroke or a series of smaller, unnoticed blood vessel
  blockages, and tends to progress in noticeable steps rather than
  smoothly.
- **Lewy body dementia** involves abnormal protein deposits associated
  with symptoms that can include visual hallucinations, movement
  difficulties similar to Parkinson's disease, and fluctuating alertness.
- **Frontotemporal dementia** primarily affects the brain's frontal and
  temporal lobes, often causing changes in personality and behavior
  before memory loss becomes prominent, and tends to appear at a younger
  age than the other types.

A few facts are worth stating plainly, because they are widely
misunderstood. Dementia is not a normal or inevitable part of aging —
most people never develop it, even into their nineties. It results from
specific disease processes damaging brain tissue, not from a person
simply "giving up" or failing to stay mentally active, even though the
brain-healthy habits described earlier are genuinely associated with
lower risk. And a dementia diagnosis does not erase who someone is —
their history, relationships, sense of humor, and identity remain real
and worth honoring throughout the course of the illness, even as specific
abilities change.

!!! mascot-encourage "This material can feel personal — that's okay"
    ![Scout with an encouraging expression](../../../../img/mascot/encouraging.png){ class="mascot-admonition-img" }
    Many students in this class have a grandparent or family friend
    living with dementia. If that's you, this section might bring up real
    feelings. Understanding the disease clearly is one way of honoring
    what that person is going through, and you're not alone in this.

#### Diagram: Dementia Types Comparison Tool

<iframe src="../../../../sims/dementia-types-comparison-tool/main.html" width="100%" height="500px" scrolling="no"></iframe>
<details markdown="1">
<summary>Dementia Types Comparison Tool</summary>
Type: infographic

**sim-id:** dementia-types-comparison-tool<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy Level: Analyze (L4)
Bloom Verb: differentiate, compare, examine

Learning objective: Students differentiate Alzheimer's disease, vascular
dementia, Lewy body dementia, and frontotemporal dementia by cause,
typical early symptoms, and progression pattern.

Layout: Four labeled columns, one per dementia type, each with three rows:
Underlying Cause, Typical Early Symptoms, Progression Pattern

Data Visibility Requirements:
  Stage 1: Show all four columns populated with the chapter's descriptions
  Stage 2: Clicking a column header opens an infobox with one additional
  respectful, factual detail about that type
  Stage 3: A short scenario describing a person's symptoms is shown, and
  the learner selects which dementia type it most closely resembles,
  reinforcing the distinguishing features
  Stage 4: Reveal explanation naming which specific detail in the
  scenario pointed to that type

Interactive controls: Click any column header for expanded detail; button
"Try a Scenario" reveals a symptom description and answer options; button
"Next Scenario" cycles through 3 scenarios

Instructional Rationale: Differentiating several related conditions by
their distinguishing features is an Analyze-level objective, so a
structured comparison with a scenario-matching check is used rather than
simple recall of a definition list.

Implementation notes: p5.js; content written in respectful, non-alarmist
language; no graphic or frightening imagery; scenario data stored as an
array of {symptoms, correctType, explanation} objects.
</details>

## Supporting An Elder With Cognitive Impairment

Understanding what dementia is leads directly to a practical question many
students will face personally: how do you support a grandparent, parent,
or family friend living with it? **Supporting an elder with cognitive
impairment** means using practical, respectful strategies — patience,
maintained routines, and adapted communication — to support the wellbeing
and dignity of a person experiencing memory or thinking changes, while
connecting the family with appropriate community and medical resources.

A few evidence-based strategies make a meaningful difference in daily
interactions:

1. **Maintain routine.** Predictable daily patterns — consistent
   mealtimes, familiar environments, regular activities — reduce
   confusion and anxiety for someone whose short-term memory is
   unreliable. Sudden changes in environment or schedule are often
   disproportionately disorienting.
2. **Adapt communication.** Speak clearly and at a normal pace, ask one
   question at a time, and avoid correcting or arguing about factual
   details that don't matter (if someone repeatedly asks about a person
   who has passed away, gently redirecting the conversation is often
   kinder than repeating painful news). Nonverbal communication — a calm
   tone, a warm expression, a reassuring touch when welcome — often
   reaches someone with dementia even when words do not.
3. **Practice patience with repetition.** Answering the same question
   multiple times in an hour is common and is not a test the person is
   failing — it is a symptom of the disease, not a lapse in effort.
4. **Preserve dignity.** Involve the person in decisions and
   conversations about their own life to the extent they are able,
   rather than talking only to caregivers as if the person weren't
   present.
5. **Connect the family with resources.** Organizations such as the
   Alzheimer's Association provide caregiver support groups, care
   planning guidance, and a 24/7 helpline; a person's doctor can also
   coordinate medical management and connect the family with community
   day programs or respite care that give family caregivers necessary
   breaks.

Supporting a family member with dementia is also demanding on the family
caregivers themselves, who are often at elevated risk for stress and
burnout. Encouraging a parent or grandparent who is a primary caregiver to
use respite care and support resources is itself a way of supporting the
person with dementia, since a caregiver's own wellbeing directly affects
the quality of care they can sustain.

#### Diagram: Supporting an Elder With Dementia Scenario Simulator

<iframe src="../../../../sims/supporting-elder-dementia-scenario-simulator/main.html" width="100%" height="550px" scrolling="no"></iframe>
<details markdown="1">
<summary>Supporting an Elder With Dementia Scenario Simulator</summary>
Type: microsim

**sim-id:** supporting-elder-dementia-scenario-simulator<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy Level: Apply (L3)
Bloom Verb: apply, demonstrate, practice

Learning objective: Students apply respectful support strategies
(maintaining routine, adapting communication, patience with repetition,
preserving dignity, connecting with resources) to realistic family
scenarios involving an elder with cognitive impairment.

Canvas layout:
- Left (55%): a short, respectful scenario (e.g., "Your grandmother asks
  where her late husband is for the third time this visit")
- Right (45%): four or five response-strategy cards the student selects
  from, each naming a support strategy

Data Visibility Requirements:
  Stage 1: Show the scenario and all response-strategy options
  Stage 2: Student selects the response they believe is most supportive
  Stage 3: Reveal an explanation of why that response supports dignity
  and reduces distress, and, where more than one response is reasonable,
  acknowledge that other compassionate responses may also work
  Stage 4: Show a running count of scenarios completed out of a bank of 6

Interactive controls:
- Click to select a response card
- Button: "Show Explanation"
- Button: "Next Scenario"

Default parameters: Scenario bank of 6 realistic, respectful family
situations; feedback always explains the reasoning rather than only
marking right or wrong

Instructional Rationale: Applying a specific support strategy to a
realistic family scenario is an Apply-level objective, so a
scenario-response tool with explanatory feedback is used rather than a
passive list of caregiving tips, since real application requires judgment
about which strategy fits a specific, emotionally sensitive moment.

Implementation notes: p5.js; all scenario and feedback text written with
dignity and compassion, avoiding fear-based or clinical-sounding language;
object array of {scenario, options, bestResponse, explanation}.
</details>

!!! mascot-tip "You can be a real support to your family"
    ![Scout with a tip](../../../../img/mascot/tip.png){ class="mascot-admonition-img" }
    If a grandparent repeats a question, answering warmly again — instead
    of saying "I already told you that" — is a genuinely valuable skill.
    Small moments of patience add up to real support for your family.

It also helps to know that a family's response to a dementia diagnosis
usually unfolds over time rather than all at once. Early on, a person may
need only reminders and light support while remaining largely
independent; later stages may require full-time supervision and hands-on
personal care. Families do not have to navigate every stage alone or
figure it out from scratch — a doctor familiar with the diagnosis can lay
out what changes to expect and when to consider additional support, such
as in-home care or, eventually, a memory care facility, without any of
those steps reflecting a failure on the family's part.

## CPR Techniques

The chapter now shifts from long-term brain health to a skill that
matters in the first minutes of a life-threatening emergency. **CPR
techniques** (cardiopulmonary resuscitation) are the sequence of chest
compressions, and in some cases rescue breaths, used to manually keep
oxygenated blood circulating through the body when someone's heart has
stopped beating effectively.

When a person's heart stops (cardiac arrest), blood — and the oxygen it
carries — stops reaching the brain and other organs. Brain damage can
begin within about 4 to 6 minutes without circulation, and average
emergency response times in many communities exceed that window. This is
precisely why bystander CPR, started immediately by whoever happens to be
present, can be the difference between survival and death: it is a
bridge, keeping minimal circulation going until trained responders with
an AED and advanced equipment arrive.

The general sequence for an adult who is unresponsive follows a clear
order:

1. **Check the scene and check responsiveness.** Confirm the scene is
   safe to approach, then tap the person's shoulder firmly and shout,
   "Are you okay?" If there is no response, treat this as an emergency.
2. **Call 911 (or have someone else call) immediately.** If others are
   present, point directly at one person and assign them the task ("You,
   call 911 now") rather than a general call for help, which people in a
   group often assume someone else is already handling. If an AED is
   available nearby, send a second person to retrieve it.
3. **Check for breathing.** Look for normal breathing for no more than
   about 10 seconds. Occasional gasping ("agonal breathing") is not
   normal breathing and still requires CPR.
4. **Begin chest compressions.** Place the heel of one hand on the center
   of the chest, the other hand on top, interlace your fingers, and
   position your shoulders directly over your hands with straight arms.
   Push hard and fast: compress at least 2 inches deep, at a rate of 100
   to 120 compressions per minute, allowing the chest to fully recoil
   between compressions.
5. **Give rescue breaths, if trained and willing.** The current
   general-public guideline emphasizes hands-only (compression-only) CPR
   for adults if you are not trained in rescue breaths; if trained,
   alternate 30 compressions with 2 rescue breaths.
6. **Continue until help arrives, an AED is ready to use, or the person
   shows signs of life.** CPR is physically demanding; if another
   trained person is present, switch every 2 minutes to maintain
   compression quality without fatigue-related shallow compressions.

!!! mascot-warning "This is real, life-saving information — read it carefully"
    ![Scout with a serious, attentive expression](../../../../img/mascot/warning.png){ class="mascot-admonition-img" }
    This section gives you an accurate mental model of CPR, but it is
    educational awareness, not certified training. Hands-on practice on a
    training manikin, under an instructor, is what makes these skills
    reliable in a real emergency — seek out an American Heart Association
    or American Red Cross CPR/AED certification course.

#### Diagram: CPR Compression Rate and Depth Trainer

<iframe src="../../../../sims/cpr-compression-rate-depth-trainer/main.html" width="100%" height="500px" scrolling="no"></iframe>
<details markdown="1">
<summary>CPR Compression Rate and Depth Trainer</summary>
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
</details>

## AED Use

Chest compressions keep blood moving, but for many cardiac arrests, a
second tool addresses the underlying electrical problem directly. **AED
use** refers to operating an automated external defibrillator — a portable
device that analyzes a person's heart rhythm and, if needed, delivers an
electric shock to restore a normal rhythm — following its voice prompts
during a cardiac emergency.

Many cardiac arrests are caused by a chaotic, ineffective heart rhythm
called ventricular fibrillation, where the heart quivers instead of
pumping. An AED is designed specifically to detect this rhythm and
deliver a shock that can allow the heart to restart a normal beat — chest
compressions alone cannot fix the underlying electrical problem, which is
why CPR and AED use work together rather than as alternatives to each
other.

Using an AED does not require medical training, because the device is
built to guide an untrained bystander through the process with spoken
instructions:

1. **Turn on the AED** as soon as it arrives — most devices begin voice
   prompts automatically once powered on.
2. **Expose the person's bare chest** and attach the pads exactly where
   the pictures on the pads show (typically upper right chest and lower
   left side), wiping away sweat or water if needed for the pads to
   stick.
3. **Let the AED analyze the heart rhythm.** Make sure no one is
   touching the person during this step, since motion can interfere with
   the reading; the device will state whether a shock is advised.
4. **If a shock is advised, make sure everyone is clear** ("Stand
   clear!") and press the shock button when prompted; the AED will not
   let an untrained user deliver a shock inappropriately — it only
   allows the shock button to function when its analysis indicates one
   is needed.
5. **Resume CPR immediately after the shock** (or immediately if no
   shock is advised), starting again with chest compressions, and follow
   the AED's prompts, which will periodically re-analyze the rhythm.
6. **Continue the CPR-AED cycle** until emergency medical responders
   arrive and take over, or the person begins to show clear signs of
   life such as breathing normally or moving.

AEDs are increasingly common in public places — schools, gyms, airports,
malls, and workplaces — specifically because survival rates from cardiac
arrest improve dramatically when a shock is delivered within the first
few minutes, well before emergency medical services can typically arrive.

A few situational details affect proper use without changing the overall
sequence. If the person is lying in water, move them to a dry area first,
since water can conduct the shock unpredictably. If the person has a
visible medication patch on the chest where a pad would go, remove it and
wipe the area before attaching the pad. If the person has an implanted
device such as a pacemaker (visible as a hard lump under the skin near
the collarbone), place the pad at least an inch to the side of it rather
than directly on top. None of these situations should delay starting
compressions — they only affect exactly where and how the pads are
placed once the AED is in hand.

#### Diagram: CPR and AED Emergency Response Workflow

<iframe src="../../../../sims/cpr-aed-emergency-response-workflow/main.html" width="100%" height="550px" scrolling="no"></iframe>
<details markdown="1">
<summary>CPR and AED Emergency Response Workflow</summary>
Type: workflow

**sim-id:** cpr-aed-emergency-response-workflow<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Bloom Taxonomy Level: Apply (L3)
Bloom Verb: apply, execute, demonstrate

Learning objective: Students apply the correct combined CPR and AED
response sequence to a cardiac emergency scenario, from recognizing
unresponsiveness through continued care until help arrives.

Visual style: Mermaid flowchart, top-to-bottom, sequential with one
decision diamond and one repeating loop, click handlers on every node

Nodes (all clickable, `click NodeId call showInfo("term")`):
1. "Check Scene Safety and Responsiveness" — click text: "Confirm the
   scene is safe, then tap and shout to check for a response"
2. "Call 911 and Send Someone for an AED" — click text: "Assign a
   specific person to call, rather than a general call for help, and send
   another person to find an AED if one is available"
3. "Check for Normal Breathing (Up to 10 Seconds)" — click text: "Gasping
   is not normal breathing and still requires CPR"
4. "Begin Chest Compressions (100-120/min, at least 2 inches deep)" —
   click text: "Push hard and fast in the center of the chest, allowing
   full chest recoil between compressions"
5. "AED Arrives: Turn On and Attach Pads" — click text: "Follow the
   picture guide on the pads for correct placement on the bare chest"
6. "AED Analyzes Rhythm" (decision diamond: "Shock Advised?") — click
   text: "No one should touch the person while the AED is analyzing"
7a. "Yes" → "Clear Everyone, Deliver Shock" — click text: "The AED will
   only allow a shock when its own analysis indicates one is needed"
7b. "No" → "Resume CPR Immediately" — click text: "If no shock is
   advised, chest compressions restart right away"
8. "Resume CPR After Shock" — click text: "CPR restarts immediately after
   every shock, without checking for a pulse first"
9. Shared end node "Continue Cycle Until EMS Arrives or Person Shows Signs of Life" —
   click text: "The AED will periodically re-analyze the rhythm and
   prompt the next step throughout"

Connections: 1→2, 2→3, 3→4, 4→5, 5→6, 6→7a, 6→7b, 7a→8, 7b→9, 8→9, and a
loop from 9 back to 6 labeled "AED Re-Analyzes Periodically"

Color coding: blue for process/action steps, gold for the AED analysis
decision diamond, green for the shock and resume-CPR outcomes, red for
the shared "continue until help arrives" end node

Interactive features: click any node for its infobox describing that
step's purpose

Implementation: Mermaid.js flowchart with JavaScript click bindings to a
custom showInfo() function; infobox text includes a persistent reminder
that this is educational awareness, not certified training
</details>

Every part of this sequence — from checking responsiveness through
continued CPR-AED cycles — is designed to be learnable by anyone, not only
healthcare professionals, which is exactly why CPR/AED training is
required or strongly encouraged in many states for exactly this reason.

!!! mascot-celebration "You now understand a real life-saving sequence"
    ![Scout celebrating](../../../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    Recognizing an emergency, calling for help, starting compressions, and
    using an AED — that's the same sequence trained responders rely on
    bystanders to start. This is educational awareness, not
    certification, so take the next real step: sign up for a hands-on
    American Heart Association or American Red Cross CPR/AED course. You've
    got this!

??? note "Quick Check — Click to expand"
    Question: You see someone collapse. They don't respond when you tap
    their shoulder and shout, and they aren't breathing normally. An AED
    is available nearby. What is the correct order of actions?

    Answer: First, confirm the scene is safe. Second, call 911 (or have a
    specific person do it) and send someone else for the AED. Third,
    begin chest compressions immediately — at least 2 inches deep, 100 to
    120 per minute — rather than waiting for the AED to arrive. Fourth,
    as soon as the AED arrives, turn it on, attach the pads, and follow
    its voice prompts, letting it analyze the rhythm and deliver a shock
    if advised. Fifth, resume CPR immediately after any shock (or
    immediately if no shock is advised) and continue the cycle until
    emergency responders take over or the person shows clear signs of
    life. This reflects real bystander CPR/AED protocol, though hands-on
    certification is what makes these steps reliable under real pressure.
