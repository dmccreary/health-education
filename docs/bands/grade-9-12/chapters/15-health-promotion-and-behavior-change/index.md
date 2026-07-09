---
title: Health Promotion and Behavior Change
description: Grade 9-12 capstone chapter walking the full behavior-change cycle (evaluating supports and barriers, adapting behavior, measuring impact), synthesizing the socio-ecological model for health promotion, and culminating in a fact-based health message design project.
generated_by: claude skill chapter-content-generator
date: 2026-07-06 20:59:30
version: 0.09
---

# Health Promotion and Behavior Change

## Summary

This closing chapter evaluates supports and barriers to engaging in
health-related practices, then applies that evaluation to adapt personal
behaviors and assess their impact. Students examine factors that affect
health promotion at every level from individual to environmental, and
formulate, justify, and refine fact-based health messages tailored to
different audiences.

## Concepts Covered

1. Evaluating Supports For Health Practices
2. Evaluating Barriers To Health Practices
3. Adapting Health Behaviors
4. Evaluating Impact Of Health Behaviors
5. Health Promotion Factors Across Levels
6. Formulating Health Messages
7. Justifying Health Messages With Facts
8. Tailoring Messages To Audiences
9. Evaluating Health Promotion Effectiveness

## Prerequisites

Builds on social norms and health practices and validity/reliability of
health information from
[Chapter 13: Influences on Health Behavior](../13-influences-on-health-behavior/index.md),
refusal skills from
[Chapter 13: Influences on Health Behavior](../13-influences-on-health-behavior/index.md),
and goal-strategy evaluation from
[Chapter 14: Health Decision-Making and Goal-Setting](../14-health-decision-making-and-goal-setting/index.md).

---

!!! mascot-welcome "From your own goals to promoting health for others"
    ![Scout sitting calmly, ready to begin](../../../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Chapter 14 gave you a process for setting and pursuing your own health
    goals. This closing chapter widens the lens twice: first from setting a
    goal to actually sustaining a health *practice* over time — which means
    honestly evaluating what helps you and what gets in your way — and then
    from your own behavior to promoting health for other people, at every
    level from a single friend to an entire policy system. By the end, you
    will design and justify a real health message for a real audience — the
    capstone project for this entire course.

## The Behavior-Change Cycle

Sustaining a health practice rarely fails for lack of motivation alone. It
fails because supports go unrecognized, barriers go unaddressed, or nobody
ever checks whether the practice is actually working. This section walks
through a four-step cycle — **evaluate supports, evaluate barriers, adapt
the behavior, evaluate the impact** — using one running example: **Jordan,
a sophomore, wants to walk or bike to school most days instead of getting a
ride, both for physical activity and to cut down on morning stress.**

#### Diagram: The Behavior-Change Cycle
<iframe src="../../../../sims/behavior-change-cycle/main.html" width="100%" height="525px" scrolling="no"></iframe>
<details markdown="1">
<summary>The Behavior-Change Cycle</summary>
Type: workflow

**sim-id:** behavior-change-cycle<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Bloom Taxonomy: Apply<br/>
Bloom Taxonomy Verb: use, demonstrate

Learning objective: Apply the four-step behavior-change cycle (evaluate
supports, evaluate barriers, adapt the behavior, evaluate impact) to a
realistic personal health practice, tracing how each step feeds the next.

Purpose: Give learners a persistent visual anchor for the cycle, using
Jordan's active-commute scenario as the worked example at every step, and
showing the cycle looping rather than ending.

Visual style: Mermaid flowchart, four sequential nodes arranged in a closed
loop; every node has a click handler.

Steps:
1. "Evaluate Supports" — click: "Jordan identifies what already helps: a
   safe sidewalk for most of the route, a bike, a friend who lives nearby
   and also wants to walk, and a school that allows early arrival."
2. "Evaluate Barriers" — click: "Jordan identifies what gets in the way:
   one busy intersection with no crosswalk, mornings when it's raining,
   and a heavier backpack on test days."
3. "Adapt the Behavior" — click: "Jordan changes the plan to work with
   supports and around barriers: walk with the friend on clear days, get a
   ride only on rain days, and leave a spare set of test-day materials at
   school to lighten the backpack."
4. "Evaluate Impact" — click: "After three weeks, Jordan checks: did
   stress before first period actually go down? Did the intersection
   barrier cause any near-misses?" Loops back to Evaluate Supports for the
   next adjustment.

Color coding: Four steps in four distinct colors (teal, orange, gold,
purple) arranged in a circular flow to emphasize that behavior change is an
ongoing cycle, not a single decision.

Implementation: Mermaid flowchart with `click` directives opening an
infobox reusing the text above for each node.
</details>

### Evaluating Supports For Health Practices

The cycle begins by taking honest stock of **supports** — the people,
resources, environments, and habits already working in your favor. Supports
are easy to overlook precisely because they're already present; a practice
that seems effortless often has an invisible support holding it up. Jordan
almost missed that a school policy (early building access) was quietly
removing one obstacle to walking. Evaluating supports means asking, for any
practice you want to sustain: who could help, what resources already exist,
and what about my current environment or routine already makes this
easier?

Supports generally fall into a few recognizable categories: people
(friends, family, coaches, healthcare providers), places and things
(sidewalks, equipment, apps, scheduling flexibility), and existing habits
or strengths (you already wake up early for another reason, so the time
exists). Naming supports specifically — not just "I have some support" —
makes them usable, the same way naming a decision precisely in Chapter 14
made it actionable.

| Support type | Example for Jordan's active commute |
|---|---|
| Person | Friend who lives nearby and also wants to walk |
| Place/resource | Safe sidewalk for most of the route; a working bike |
| Policy/environment | School allows early building access |
| Existing habit | Already wakes up early enough on most days |

### Evaluating Barriers To Health Practices

The next step is evaluating **barriers** — anything that makes the
practice harder to start or sustain. Barriers are not a sign a practice is
wrong for you; they are simply the specific obstacles a plan needs to
account for. Common categories mirror the socio-ecological factors from
Chapter 13: individual barriers (low energy, a heavy backpack), social
barriers (no one else wants to walk), environmental barriers (no crosswalk
at a busy intersection, bad weather), and systemic barriers (a school
start time that makes walking too rushed to be safe).

A frequent mistake is treating a barrier as a stop sign rather than a
design problem. "There's no crosswalk" can end the plan — or it can become
"I need a route or a strategy that avoids that intersection." Evaluating
barriers well means being specific enough that each one suggests its own
workaround, which sets up the next step directly.

!!! mascot-thinking "Supports and barriers are often two sides of the same fact"
    ![Scout tilting head thoughtfully](../../../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Notice that weather is a barrier on rainy days, but the same variable —
    weather — is a non-issue, even a support, on clear days. Evaluating
    supports and barriers isn't a one-time list; it's noticing which
    conditions shift a factor from one column to the other, so your plan
    can shift with it.

#### MicroSim: Supports and Barriers Sorter
<iframe src="../../../../sims/supports-barriers-sorter/main.html" width="100%" height="500px" scrolling="no"></iframe>
<details markdown="1">
<summary>Supports and Barriers Sorter</summary>
Type: microsim

**sim-id:** supports-barriers-sorter<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Evaluate<br/>
Bloom Taxonomy Verb: judge, assess

Learning objective: Evaluate a set of realistic factors affecting a health
practice, correctly sorting each as a support, a barrier, or context-
dependent (both, depending on conditions).

Canvas layout: Left (450px): a bank of 14 draggable factor cards spanning
three preset scenarios (active commuting, reducing screen time before bed,
eating breakfast most days). Right (250px): three labeled drop zones —
"Support," "Barrier," "Depends on Conditions."

Interactive controls: Dropdown to choose scenario, which swaps the 14
cards; drag cards into zones; "Check my sorting" button reveals correct
placement with a one-line explanation per card; "Reset" button.

Default parameters: Scenario = active commuting; cards start unsorted in
the bank.

Behavior: After "Check my sorting," correctly placed cards turn green and
misplaced cards turn orange and animate back to the bank with the
explanation visible, so the learner can re-sort rather than just see a
score.

Instructional Rationale: This is an Evaluate-level objective (judge
whether a factor helps or hinders), so a sorting/classification pattern
with immediate feedback is appropriate — it forces a judgment call on each
factor rather than passive reading of a list.

Implementation notes: p5.js drag-and-drop with defined drop-zone hit
regions; card data stored as a JS array of objects with a correct-category
field.
</details>

### Adapting Health Behaviors

Once supports and barriers are named, the practice itself can be
**adapted** — modified so it leans on what helps and routes around what
doesn't, rather than staying rigid until it fails. Adapting is different
from quitting or from gritting through an unworkable plan unchanged; it
treats the original goal (active commuting) as fixed while treating the
specific method as flexible. Jordan didn't abandon the goal when rain and
a dangerous intersection showed up — the plan adapted: walk with a friend
on clear days, accept a ride on rain days without treating it as failure,
and lighten the backpack on test days by pre-positioning materials at
school.

Adapting well usually means changing one of a few levers: the timing (an
earlier or later start), the method (walking versus biking versus a mixed
week), the people involved (recruiting a companion), or the environment
(choosing a different route). A good adaptation keeps the underlying
health goal intact while making the day-to-day version of it realistic.

> Original plan: "Walk to school every day."
> Adapted plan: "Walk with a friend on clear days; accept a ride on rain
> days; keep a spare set of test-day materials at school so the backpack
> stays light enough to walk comfortably."

!!! mascot-tip "Adapting is a sign of a strong plan, not a weak one"
    ![Scout offering a helpful tip](../../../../img/mascot/tip.png){ class="mascot-admonition-img" }
    A plan that never needs adapting was probably never tested against
    real conditions. Treat the first version of any health practice as a
    draft. The willingness to adjust the method while keeping the goal is
    exactly the skill this whole cycle is teaching.

### Evaluating Impact Of Health Behaviors

The cycle's final step asks the question that makes the whole process
worthwhile: **did the adapted practice actually work?** Evaluating impact
means checking real evidence, not just impression. For Jordan, that could
mean tracking mornings walked per week, self-rated stress before first
period, or even objective measures like resting heart rate over a month.
Impact evaluation should look at more than one kind of outcome, because a
practice can succeed on one dimension and stall on another — Jordan's
stress might drop noticeably while the total-days-walked number stays
lower than hoped because of a rainy month.

As in Chapter 14's decision evaluation, it helps to separate *process*
from *outcome*: did the adaptation get a fair try (was the plan actually
followed on clear days), and separately, did it produce the hoped-for
result? A poor outcome despite a well-followed adapted plan is useful
information — it means the next cycle should adjust the plan further, not
abandon the goal.

#### Diagram: Impact Evaluation Dashboard
<iframe src="../../../../sims/impact-evaluation-dashboard/main.html" width="100%" height="562px" scrolling="no"></iframe>
<details markdown="1">
<summary>Impact Evaluation Dashboard</summary>
Type: chart

**sim-id:** impact-evaluation-dashboard<br/>
**Library:** Chart.js<br/>
**Status:** Specified

Bloom Taxonomy: Evaluate<br/>
Bloom Taxonomy Verb: assess, justify

Learning objective: Evaluate the impact of an adapted health behavior over
time using multiple outcome measures, distinguishing genuine improvement
from noise or an unrelated factor.

Chart type: Multi-line chart, four weeks on the x-axis.

Purpose: Show Jordan's four-week active-commute data across three tracked
measures so learners must weigh mixed signals rather than one clean
success story.

X-axis: Week (1-4). Y-axis: Three normalized scales — days walked (0-5),
self-rated morning stress (1-10, lower is better), resting heart rate
(beats per minute).

Data series: Days walked (gold line: 2, 4, 3, 4); morning stress (teal
line: 7, 5, 6, 4); resting heart rate (navy line: 74, 72, 73, 70).

Interactive elements: Hovering any point reveals the exact value and a
one-line note (e.g., week 3's dip in days walked annotated "rainy week");
a toggle lets the learner show/hide each series to isolate one measure at
a time; a text prompt below asks the learner to type a one-sentence
evaluation of overall impact, encouraging them to weigh all three series
rather than just one.

Title: "Four-Week Impact of Jordan's Adapted Commute Plan"
Legend: Top-right, one entry per series with show/hide checkboxes.

Implementation: Chart.js multi-line chart with dataset toggling enabled.
</details>

The behavior-change cycle you just practiced — supports, barriers, adapt,
evaluate impact — does not stop after one pass. Evaluating impact almost
always surfaces a new barrier or a support you hadn't noticed, which sends
you back to the top of the cycle. That is by design: sustained health
practices are built through repeated small adjustments, not a single
perfect plan.

## Health Promotion Factors Across Levels

Everything so far in this chapter has focused on one person adapting one
practice. **Health promotion** asks a bigger question: how do we help
*other people* — a friend, a classroom, a school, a whole community —
adopt and sustain healthy practices? The socio-ecological model from
Chapter 13 explained why behaviors happen, level by level. Here, the same
five levels become **levers for promoting change**, not just explanations
of influence.

| Level | As an influence (Ch. 13) | As a promotion lever (this chapter) |
|---|---|---|
| Individual | Personal knowledge, attitudes, skills shape behavior | Build skills and confidence (e.g., a workshop teaching refusal skills) |
| Interpersonal | Friends, family, peers shape norms | Recruit a peer or family member as a support, as Jordan did with a walking friend |
| Community | Community programs, access, and initiatives shape options | Create or expand a program (a school walking-school-bus, a free clinic) |
| Environmental | Physical spaces enable or block behavior | Change the physical environment (add a crosswalk, safer lighting on a route) |
| Policy | Laws and institutional rules shape what's possible | Change a rule or law (school start time, sale-of-tobacco age, insurance coverage) |

The key insight for health promotion is that **the same behavior can be
promoted at multiple levels simultaneously, and the levels reinforce each
other.** A school could teach individual stress-management skills
(individual level) while also training peer mentors (interpersonal),
funding a mindfulness club (community), redesigning a stairwell to be more
inviting than an elevator (environmental), and adjusting a homework-load
policy (policy) — all aimed at the same underlying goal of reducing
student stress. No single level usually solves a health problem alone.

#### Diagram: Health Promotion Levers Across Levels
<iframe src="../../../../sims/health-promotion-levers-map/main.html" width="100%" height="562px" scrolling="no"></iframe>
<details markdown="1">
<summary>Health Promotion Levers Across Levels</summary>
Type: graph-model

**sim-id:** health-promotion-levers-map<br/>
**Library:** vis-network<br/>
**Status:** Specified

Bloom Taxonomy: Analyze<br/>
Bloom Taxonomy Verb: examine, differentiate

Learning objective: Examine how a single health-promotion goal can be
pursued through distinct but reinforcing levers at the individual,
interpersonal, community, environmental, and policy levels.

Node types: One central node "Health Promotion Goal" with a dropdown to
select a goal (reducing student stress, increasing physical activity,
reducing vaping among teens). Five surrounding level nodes: Individual,
Interpersonal, Community, Environmental, Policy.

Edge types: An edge from the central goal to each level node, labeled with
a concrete promotion action at that level for the selected goal.

Sample data: For "reducing vaping among teens" — Individual: "peer-led
workshop on nicotine's effects on the teen brain"; Interpersonal: "parents
trained to discuss vaping without shaming"; Community: "youth center offers
vaping-cessation support group"; Environmental: "retailers required to
store vape products behind the counter"; Policy: "local ordinance raises
minimum sale age enforcement and taxes flavored products."

Interactive features: Clicking a level node opens an infobox with the
action, plus a one-sentence note on how it reinforces at least one other
level (e.g., the policy change makes retailers' environmental compliance
enforceable). Learner can drag nodes, zoom, and pan. A "Show
reinforcement links" toggle adds dashed edges between levels that support
each other.

Layout: Radial/star, goal at center, five levels surrounding it.

Color scheme: Individual (gold), Interpersonal (blue), Community (teal),
Environmental (green), Policy (navy) — consistent with the socio-ecological
color coding introduced in Chapter 13.
</details>

Understanding levers across levels also explains why some promotion
efforts fail: a campaign aimed only at individual knowledge ("vaping is
bad for you") without any interpersonal, community, environmental, or
policy support asks individuals to resist alone what the whole surrounding
system may still be making easy or normal. Effective health promotion
usually stacks levers rather than relying on just one.

#### Diagram: Behavior-Change Levers

<iframe src="../../../../posters/behavior-change-levers/main.html" width="100%" height="980px" scrolling="no"></iframe>
<details markdown="1">
<summary>Behavior-Change Levers Interactive Poster</summary>
Type: infographic

**poster-id:** behavior-change-levers<br/>
**Library:** p5.js<br/>
**Status:** Published

Six systems levers show why durable health change requires more than information or willpower.

Use **Explore** mode to select a marker or section. Use **Quiz** mode to practice finding each idea.
</details>

## Capstone Project: Designing a Fact-Based Health Message

Everything in this course — media literacy, evaluating information,
communication skills, and now the behavior-change cycle and multi-level
promotion levers — comes together in one final skill: **designing and
justifying a real health message for a real audience.** This is the
capstone project for the entire course. You will formulate a message,
back it with evidence, tailor it to a specific audience, and evaluate what
would make it actually effective.

#### MicroSim: Health Message Campaign Builder
<iframe src="../../../../sims/health-message-campaign-builder/main.html" width="100%" height="500px" scrolling="no"></iframe>
<details markdown="1">
<summary>Health Message Campaign Builder</summary>
Type: microsim

**sim-id:** health-message-campaign-builder<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Create<br/>
Bloom Taxonomy Verb: formulate, compose, produce

Learning objective: Formulate, justify with evidence, and tailor a
fact-based health message for a chosen audience, then evaluate its likely
effectiveness — synthesizing the full capstone project into one built
artifact.

Canvas layout: Full-width four-stage builder with a progress bar across
the top (Formulate, Justify, Tailor, Evaluate) and Next/Back navigation.

Interactive controls: Stage 1 — dropdown to choose a health issue (vaping
prevention, mental health stigma reduction, hydration/sugary-drink
choices, consent and healthy relationships) and a text box to draft a
one-sentence message. Stage 2 — a bank of fact/evidence cards per issue
(drag at least two into a "supporting evidence" zone) plus a text box to
explain the connection between each fact and the message. Stage 3 —
dropdown to select a target audience (younger students, peers, parents,
school board) which reveals audience-specific tone/channel guidance;
text box to revise the message and pick a channel (poster, social post,
short video script, presentation) suited to that audience. Stage 4 — a
five-criterion effectiveness rubric (clarity, evidence strength, audience
fit, call to action, believability) with a 1-4 self-rating slider per
criterion and a text box for revision notes.

Default parameters: Health issue = vaping prevention; all stages start
blank to require original composition.

Behavior: Completing all four stages unlocks a "Generate my campaign
summary" button that compiles the message, evidence, audience/channel
choice, and self-evaluation into one printable/exportable summary page.

Instructional Rationale: This is a Create-level capstone objective, so the
pattern is a multi-stage builder requiring original composition at every
step rather than a passive example — learners must produce their own
message, their own evidence linkage, their own audience adaptation, and
their own evaluation, mirroring the real process of designing a health
promotion campaign from scratch.

Implementation notes: p5.js or DOM-based multi-panel wizard; drag-and-drop
for evidence cards; store issue/audience/evidence data as JS objects;
progress bar as a simple state variable.
</details>

### Formulating Health Messages

**Formulating** a health message starts with a clear, specific claim about
what you want the audience to know, feel, or do — not a vague topic. "Vaping
is bad" is a topic; "Nicotine exposure during adolescence rewires the brain's
reward pathways in ways that make future addiction more likely" is a
message with content a reader can actually learn from and act on. A strong
message is built the same way a strong decision was defined back in
Chapter 14: name the specific point precisely before doing anything else
with it.

Formulating also means choosing a genuine **call to action** — what,
concretely, should the audience do differently after encountering the
message? "Be aware" is weak; "Talk to a trusted adult before trying any
nicotine product, even one a friend says is harmless" gives the audience
something to actually do.

### Justifying Health Messages With Facts

A formulated message is only as strong as its **justification** — the
specific, verifiable evidence behind it. This is where the skills from
earlier in the course about evaluating the validity, reliability, and
accessibility of health information become essential: a message is only as
trustworthy as its sources. Justifying with facts means citing a specific,
checkable data point or mechanism, not a general impression:

> Weak justification: "Vaping is really dangerous for teens."
> Strong justification: "The developing adolescent brain continues forming
> reward-system connections until the mid-twenties, and nicotine exposure
> during this window is associated with a higher risk of future addiction
> to nicotine and other substances — a mechanism documented by public
> health and medical research bodies, not just a general warning."

Justification also means being honest about the strength and limits of the
evidence. Overstating a claim ("vaping causes every teen who tries it to
become addicted") undermines credibility the moment an audience member
knows an exception — a message loses persuasive power the instant a single
claim is caught being wrong. Precise, well-sourced claims hold up better
than exaggerated ones.

!!! mascot-warning "A single shaky fact can sink an otherwise good message"
    ![Scout with a cautionary look](../../../../img/mascot/warning.png){ class="mascot-admonition-img" }
    Audiences (especially skeptical ones, like peers) often judge an
    entire message by its weakest claim. Before finalizing a health
    message, check every factual claim against a credible source
    individually — one exaggerated or unsupported statement can undo the
    trust built by five accurate ones.

#### Diagram: From Evidence to Health Action

<iframe src="../../../../posters/from-evidence-to-health-action/main.html" width="100%" height="980px" scrolling="no"></iframe>
<details markdown="1">
<summary>From Evidence to Health Action Interactive Poster</summary>
Type: infographic

**poster-id:** from-evidence-to-health-action<br/>
**Library:** p5.js<br/>
**Status:** Published

Six campaign-studio columns show how health evidence becomes an ethical, testable action.

Use **Explore** mode to select a marker or section and learn more. Use **Quiz** mode to practice finding each idea.
</details>

### Tailoring Messages To Audiences

The same justified message needs a different shape depending on **who is
receiving it.** Tailoring means adjusting tone, vocabulary, channel, and
even which specific facts to lead with — while keeping the underlying
evidence and claim intact. A message about vaping prevention aimed at
younger students might lead with a simple, concrete brain-development
fact and use a poster in a hallway; the same evidence aimed at a school
board might lead with policy-relevant data (local usage rates, current
retailer compliance) delivered as a short presentation with citations.

| Audience | Likely priority | Effective tone/channel |
|---|---|---|
| Younger students | Concrete, immediate relevance | Simple language, visual poster or short video, near-peer messenger |
| Peers (same age) | Credibility, non-preachy tone | Social-media-style post, real stories, avoid lecturing tone |
| Parents/caregivers | Practical guidance for supporting a teen | Handout or presentation with talking points and warning signs |
| School board / policymakers | Data, local relevance, cost/benefit | Formal presentation with citations, local statistics, clear ask |

Tailoring is not the same as changing the facts to fit what an audience
wants to hear — that would break the justification requirement above. It
means choosing which true, well-supported facts and which delivery format
will actually land with a specific audience's concerns and reading level.

#### Diagram: Audience Tailoring Comparison Tool
<iframe src="../../../../sims/audience-tailoring-comparison/main.html" width="100%" height="472px" scrolling="no"></iframe>
<details markdown="1">
<summary>Audience Tailoring Comparison Tool</summary>
Type: infographic

**sim-id:** audience-tailoring-comparison<br/>
**Library:** Chart.js<br/>
**Status:** Specified

Bloom Taxonomy: Analyze<br/>
Bloom Taxonomy Verb: compare, contrast, distinguish

Learning objective: Compare how the same justified health message is
adapted in tone, vocabulary, and channel across four different audiences,
while the underlying factual claim remains constant.

Layout: Four-column side-by-side comparison panel, one column per
audience (younger students, peers, parents, school board), each showing:
headline version of the message, one leading fact, and recommended
channel icon.

Interactive elements: Selecting a health issue from a dropdown (vaping
prevention, hydration choices, mental health stigma) re-populates all four
columns; hovering any column's fact reveals the full source citation used
in the Justify stage; a "Highlight what changed / what stayed the same"
toggle color-highlights the shared factual core in gold across all four
columns and the tailored language in a different color per audience.

Data to display: Four fully worked example messages (one per audience) for
each of the three preset health issues.

Color scheme: Shared factual core highlighted gold across all columns;
each audience column otherwise in its own accent color.

Implementation: Chart.js is used loosely here as a structured-panel
renderer with DOM overlay for the comparison highlighting logic.
</details>

### Evaluating Health Promotion Effectiveness

The capstone project closes by asking the same evaluation question the
whole chapter has practiced: **would this message and promotion effort
actually work, and how would you know?** Evaluating effectiveness means
looking past whether a message merely got attention to whether it changed
knowledge, attitude, or behavior — the actual purpose of health promotion.
Useful evaluation criteria include:

- **Clarity** — could the audience restate the core message accurately?
- **Evidence strength** — do the facts hold up to source-checking?
- **Audience fit** — did the tone, vocabulary, and channel actually match
  the audience, or just what was convenient to make?
- **Call to action** — is there something specific the audience can do?
- **Believability** — would this audience, specifically, find the message
  credible rather than preachy or exaggerated?

Just as with decisions and goals earlier in this course, evaluating a
health promotion effort is not a one-time judgment — it feeds back into
refining the message, the evidence, or the audience targeting, closing the
loop for the next attempt. A message that scores poorly on "audience fit"
isn't a failure; it's data pointing to exactly what to adjust next time,
the same growth mindset this entire course has built from kindergarten
through this final project.

??? note "Quick check: effectiveness vs. attention — Click to expand"
    A health campaign poster goes viral on social media and gets shared
    thousands of times, but a follow-up survey shows students' actual
    vaping rates and attitudes haven't changed at all. Was this an
    effective health promotion effort?

    **Answer:** No — attention is not the same as effectiveness. A message
    can be widely seen and still fail to shift knowledge, attitude, or
    behavior. Evaluating effectiveness requires checking the actual
    outcome the message was meant to produce, not just its reach.

#### Diagram: Health Intervention Evaluation

<iframe src="../../../../posters/health-intervention-evaluation/main.html" width="100%" height="980px" scrolling="no"></iframe>
<details markdown="1">
<summary>Health Intervention Evaluation Interactive Poster</summary>
Type: infographic

**poster-id:** health-intervention-evaluation<br/>
**Library:** p5.js<br/>
**Status:** Published

Five evaluation panels ask whether a health intervention reached people, worked well, improved outcomes equitably, and caused surprises.

Use **Explore** mode to select a marker or section. Use **Quiz** mode to practice finding each idea.
</details>

## Bringing It Together

This chapter's two halves are really one skill viewed at two scales. The
behavior-change cycle — evaluate supports, evaluate barriers, adapt, and
evaluate impact — is how you sustain a health practice in your own life.
Health promotion across the individual, interpersonal, community,
environmental, and policy levels is the same logic turned outward, aimed
at helping other people sustain theirs. And the capstone message-design
project asks you to do both at once: understand what supports and barriers
your specific audience faces, and craft, justify, tailor, and evaluate a
message that actually meets them where they are.

!!! mascot-celebration "You just completed the entire K-12 health education journey"
    ![Scout with a warm, steady expression](../../../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    In this chapter alone, you learned to evaluate real supports and
    barriers to a health practice, adapt a plan around them, measure
    whether the adaptation actually worked, and then turn that same
    thinking outward to design, justify, tailor, and evaluate a genuine
    fact-based health message for a real audience. That is health
    promotion done the way professionals actually do it.

    And one more thing, before you close this book: this chapter is the
    last one in the whole K-12 health education series, from kindergarten
    all the way through grade 12. Scout has been with you at every step of
    that journey, always doing the same six simple jobs — welcoming you to
    new ideas, helping you think them through, offering a tip, warning you
    away from a pitfall, encouraging you through the hard parts, and
    celebrating what you learned. The facts and skills change from grade to
    grade, but that pattern never did, and neither has the point of it: you
    now carry more health literacy, sharper decision-making, and clearer
    communication skills than you started with, in every single one of
    those years. Healthy choices, happy you — for good.
