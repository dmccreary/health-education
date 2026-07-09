---
title: Emotional Well-Being and Mental Health
description: Grade 6-8 chapter on personal stressors and restorative practices, warning signs of emotional distress, suicide and self-harm warning signs and how to seek help, Indigenous and traditional healing approaches, and empathy, communication, and nonviolent conflict resolution.
generated_by: claude skill chapter-content-generator
date: 2026-07-06 17:22:34
version: 0.09
---

# Emotional Well-Being And Mental Health

## Summary

This chapter addresses recognizing warning signs of suicide, self-harm, and risk to others, and knowing when and how to seek help. Students learn to identify personal stressors and emotional distress, and to apply restorative and traditional healing strategies for managing emotions. The chapter also builds empathy, communication, and nonviolent conflict-resolution skills that support healthy relationships.

## Concepts Covered

1. Suicide And Self-Harm Warning Signs
2. Seeking Help For Suicide Risk
3. Personal Stressors
4. Restorative Stress-Management Practices
5. Warning Signs Of Emotional Distress
6. Supports For Emotional Distress
7. Trusted Adult
8. Empathy In Relationships
9. Communication For Conflict Resolution
10. Nonviolent Conflict Resolution
11. Emotion Management Strategies
12. Indigenous And Traditional Healing Approaches

## Prerequisites

This chapter builds on concepts introduced in [Health Foundations And Nutrition](../01-health-foundations-and-nutrition/index.md), [Relationships, Boundaries, And Consent](../02-relationships-boundaries-and-consent/index.md).

---

!!! mascot-welcome "Welcome to This Chapter"
    ![Scout sitting calmly](../../../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    This chapter is about how you feel, why you feel that way, and what to do about it — for yourself and for the people around you. Some of what's here is everyday: stress, emotions, getting along with people. Some of it is more serious, including how to recognize when someone might be at risk of suicide or self-harm, and exactly what to do if that happens. I'll stay with you through all of it, with the same steady attention the whole way.

## Personal Stressors

Every middle schooler carries some amount of pressure. **Personal stressors** are the specific sources of pressure or tension in a person's life — at home, at school, or with friends — that build up and affect how someone feels and functions day to day.

Stressors are not the same for everyone, and they rarely arrive one at a time. A single week might stack several of them together:

- **Home stressors** — family conflict, a parent's job loss, a new sibling, moving to a new house, or caring for a younger relative.
- **School stressors** — a heavy test schedule, a difficult class, a strict deadline, or a conflict with a teacher.
- **Friend stressors** — a falling-out with a close friend, feeling left out, or pressure to fit in with a group.

None of these stressors are signs of weakness. They are simply the ordinary friction of a life that involves school, relationships, and a body and brain that are still developing. Recognizing a stressor by name — "this is a school stressor," "this is a friend stressor" — is the first skill, because a problem that has been named is easier to respond to than one that just feels like a vague, heavy cloud.

#### Diagram: Personal Stressor Sorter

<iframe src="../../../../sims/personal-stressor-sorter/main.html" width="100%" height="514px" scrolling="no"></iframe>
<details markdown="1">
<summary>Personal Stressor Sorter MicroSim</summary>
Type: microsim
**sim-id:** personal-stressor-sorter<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: classify, identify, distinguish

Learning objective: Students classify a set of realistic middle-school scenarios into the categories of home, school, and friend stressors, building a concrete vocabulary for naming their own sources of stress.

Layout: A deck of 12 short scenario cards (e.g., "Your parents have been arguing every night this week," "You have three tests on the same day," "Your best friend stopped sitting with you at lunch") with three click zones labeled Home, School, and Friends.

Interactive controls: Click-to-sort each card into a zone; immediate feedback confirms the category and shows a one-sentence note on why it fits; a running tally shows how many cards have been sorted; "Reset Deck" button; a "Some Stressors Overlap" toggle reveals two cards that reasonably belong in more than one zone, reinforcing that categories are not always clean.

Default parameters: Deck order randomized each session; feedback panel starts empty until a card is sorted.

Instructional Rationale: Classifying scenarios into named categories is Understand-level, so a sorting task with explanatory feedback is used rather than a passive list, helping students build the habit of naming their own stress instead of leaving it unexamined.

Implementation notes: p5.js. Scenario data stored as an array of objects with text, correct category (or categories), and explanation string. Responsive canvas that reflows cards on window resize.
</details>

!!! mascot-thinking "A Key Idea"
    ![Scout thinking](../../../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Stress itself is not the problem — everyone experiences it. The skill worth building is noticing where a stressor is coming from and having a plan for it, rather than letting it pile up unnamed.

## Restorative Stress-Management Practices

Once a stressor is named, the next question is what to do about it. **Restorative stress-management practices** are activities and habits that actively return the body and mind to a calmer, more balanced state after stress — restoring rather than just distracting from it.

Restorative practices work because stress produces real physical effects: a faster heartbeat, tense muscles, a racing mind. Restorative practices are chosen specifically because they reverse those physical effects, not just because they feel pleasant in the moment.

The following table organizes common restorative practices by the kind of stress response they target:

| Practice | What It Restores |
|---|---|
| Slow, deep breathing | Calms a racing heartbeat and signals the body to relax |
| Physical movement (walking, stretching, sport) | Releases built-up muscle tension and stress hormones |
| Time in nature | Lowers stress hormone levels and improves mood, supported by research on outdoor time |
| Journaling or drawing | Organizes racing thoughts into a slower, more manageable form |
| Consistent sleep schedule | Restores the brain's ability to regulate emotion the next day |
| Talking with a trusted person | Reduces the isolating feeling that often makes stress worse |

A practice only counts as restorative if it is done regularly, not just once during a crisis. Building one or two of these into a normal week — a short walk after school, five minutes of slow breathing before a test, a consistent bedtime — gives the body a reliable way to reset before stress accumulates into something harder to manage.

#### Diagram: Stress Response and Recovery Cycle

<iframe src="../../../../sims/stress-response-recovery-cycle/main.html" width="100%" height="487px" scrolling="no"></iframe>
<details markdown="1">
<summary>Stress Response and Recovery Cycle MicroSim</summary>
Type: microsim
**sim-id:** stress-response-recovery-cycle<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: apply, demonstrate, practice

Learning objective: Students apply a restorative practice to a simulated stress scenario and observe how a simple body-based measure (a simplified stress-level indicator, not a real biometric) responds differently depending on which practice is chosen.

Canvas layout: Left side (450px) shows a simplified stress-level gauge (0-100, starting at a stressed value like 75) with a short scenario description above it. Right side (150px) shows practice-selection buttons.

Visual elements: A gauge or bar showing "Stress Level," a scenario text box, five buttons representing restorative practices (Deep Breathing, Walk, Journaling, Talk to Someone, Consistent Sleep).

Interactive controls: Buttons for each restorative practice; a "New Scenario" button to load a different stress scenario; a "Reset" button.

Default parameters: Starting stress level of 75 out of 100; five practice buttons each reduce the gauge by a modest, realistic amount (10-20 points) over a short step-through animation, not an instant jump.

Data Visibility Requirements: Stage 1 shows the scenario and starting stress level; Stage 2 shows the student's practice choice; Stage 3 shows the gauge decreasing in a labeled, stepped animation with a caption naming what is physically happening (e.g., "Heart rate slowing"); Final stage shows the new stress level and a one-sentence explanation of why that practice helped.

Instructional Rationale: Applying a chosen strategy and observing its effect is Apply-level, so a step-through interaction with a visible, labeled gauge is used instead of an abstract animation, keeping the connection between action and effect concrete.

Implementation notes: p5.js. Scenario and practice-effect data stored as objects; gauge implemented as a simple animated rectangle or arc; responsive to window resize.
</details>

## Emotion Management Strategies

Restorative practices help the body recover from stress; a closely related skill is managing the emotions that come with it in the moment. **Emotion management strategies** are specific techniques a person uses to recognize, understand, and respond to their own emotions in a way that fits the situation, rather than being controlled by the emotion.

Different emotions and different situations call for different strategies — there is no single technique that works everywhere. A student who feels angry during a group project needs a different tool than a student who feels anxious before a test.

- **Naming the emotion** — simply identifying "I am feeling frustrated" reduces the emotion's intensity and makes it easier to respond to thoughtfully.
- **Pausing before reacting** — taking a few seconds (or a few breaths) between feeling an emotion and acting on it prevents a reaction that a person might later regret.
- **Reframing** — looking at a situation from a different angle ("this test is hard, but I studied for it") can shift an overwhelming feeling into a manageable one.
- **Physical release** — for high-energy emotions like anger or anxiety, movement (a walk, stretching, shaking out tense hands) can discharge the physical intensity of the feeling.
- **Seeking connection** — for emotions like sadness or loneliness, talking to another person is often more effective than trying to manage the feeling alone.

The skill is not eliminating uncomfortable emotions — anger, sadness, worry, and frustration are normal and healthy parts of being human. The skill is having more than one tool available and choosing the one that fits the emotion and the moment.

!!! mascot-tip "Worth Remembering"
    ![Scout offering a helpful tip](../../../../img/mascot/tip.png){ class="mascot-admonition-img" }
    No single strategy works for every emotion or every person. Having two or three different tools ready — naming the feeling, pausing, moving your body, or talking to someone — means you're never stuck with only one option that might not fit the moment.

#### Diagram: Emotional Regulation Control Panel

<iframe src="../../../../posters/emotional-regulation-control-panel/main.html" width="100%" height="980px" scrolling="no"></iframe>
<details markdown="1">
<summary>Emotional Regulation Control Panel Interactive Poster</summary>
Type: infographic
**poster-id:** emotional-regulation-control-panel<br/>
**Library:** p5.js<br/>
**Status:** Published

Six control-room stations turn emotional awareness into flexible action and reflection.

Use **Explore** mode to select a marker or section. Use **Quiz** mode to practice finding each idea.
</details>

## Indigenous And Traditional Healing Approaches

Emotion management and restorative practices are not new inventions — many communities have practiced them, in culturally specific forms, for generations. **Indigenous and traditional healing approaches** are culturally rooted practices — including talking circles, connection to land and nature, ceremony, elder guidance, and storytelling — that support emotional and mental well-being as valid, time-tested complements to conventional mental health support.

These practices share a few features that distinguish them from an individual, private coping technique:

1. **Talking circles** — a group sits together, often passing an object that grants the holder the sole right to speak, so that every person is heard fully and without interruption. This structure builds trust and gives difficult feelings a respectful, shared space.
2. **Connection to land and nature** — many Indigenous cultures understand a person's well-being as tied to the health of the land and one's relationship with it; spending intentional time on the land is understood as restorative in itself, not just a pleasant activity.
3. **Ceremony** — structured cultural or spiritual practices mark important transitions, losses, or moments of healing, giving a community a shared way to process difficult experiences together rather than alone.
4. **Elder guidance** — elders and knowledge keepers hold experience and cultural wisdom, and seeking their guidance during a hard time is, in many communities, a primary and deeply respected way to find support.
5. **Storytelling** — sharing and hearing stories, including traditional stories passed down through generations, helps people make sense of difficult emotions and situations by connecting them to a larger, shared understanding.

These approaches are not alternatives to seeking help for a serious mental health concern — they work alongside conventional supports like counselors and healthcare providers, not instead of them. A community's traditional healing practices and a school counselor's support are not in competition; both are legitimate, and many people draw on both.

#### Diagram: Traditional and Conventional Healing Supports Map

<iframe src="../../../../sims/traditional-conventional-healing-supports-map/main.html" width="100%" height="562px" scrolling="no"></iframe>
<details markdown="1">
<summary>Traditional and Conventional Healing Supports Map</summary>
Type: graph-model
**sim-id:** traditional-conventional-healing-supports-map<br/>
**Library:** vis-network<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain, describe, classify

Learning objective: Students describe a range of traditional and conventional healing supports and explain that these approaches are complementary rather than competing.

Node types: Central node "Emotional Well-Being" (blue circle). Traditional practice nodes (green circles): Talking Circles, Connection to Land, Ceremony, Elder Guidance, Storytelling. Conventional support nodes (teal squares): School Counselor, Healthcare Provider, Trusted Adult.

Edge types: "Supports" (solid lines from every practice/support node to the central node). No edges shown between traditional and conventional nodes, deliberately, since the point is that both connect independently to well-being rather than one replacing the other.

Layout: Central node in the middle, traditional practice nodes arranged on the left arc, conventional support nodes arranged on the right arc, visually implying two complementary groups rather than a hierarchy.

Interactive features: Hover a node to see its label; click a traditional practice node to open an infobox with a respectful one-sentence description of that practice; click a conventional support node to open an infobox describing that support; click the central node to reveal a summary explaining that combining traditional and conventional supports is a valid, common choice; zoom with mouse wheel, pan by dragging background.

Legend: Color/shape key distinguishing traditional practices from conventional supports.

Implementation: vis-network JavaScript library; canvas responsive, default 800x500px.
</details>

## Warning Signs Of Emotional Distress

With stress and emotion management established, it's important to recognize when a feeling has moved beyond ordinary stress into something that needs more support. **Warning signs of emotional distress** are noticeable changes in behavior, mood, or daily functioning — in yourself or someone else — that may indicate a mental health challenge requiring attention.

These signs matter because emotional distress often shows up as a *change* from a person's normal pattern, more than as any single dramatic moment:

- **Behavioral changes** — withdrawing from friends or activities a person used to enjoy, a sudden drop in grades, changes in eating or sleeping patterns.
- **Mood changes** — persistent sadness, irritability, or anxiety that lasts for weeks rather than passing in a day or two.
- **Physical changes** — frequent headaches or stomachaches with no clear medical cause, noticeable fatigue, or a change in appearance or hygiene.
- **Social changes** — pulling away from friends and family, or conversely, sudden and uncharacteristic risk-taking behavior.

A single bad day does not necessarily indicate emotional distress — everyone has those. What matters is a *pattern*: a change that lasts, that affects multiple areas of a person's life, or that feels different from their usual self. Noticing these patterns, in yourself or a friend, is not about diagnosing a condition — it's about recognizing that something deserves attention and care.

#### Diagram: Recognizing a Pattern of Change

<iframe src="../../../../sims/recognizing-pattern-of-change/main.html" width="100%" height="562px" scrolling="no"></iframe>
<details markdown="1">
<summary>Recognizing a Pattern of Change MicroSim</summary>
Type: microsim
**sim-id:** recognizing-pattern-of-change<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: examine, distinguish, differentiate

Learning objective: Students analyze short scenario descriptions of a friend's behavior over several weeks and distinguish between an ordinary bad day and a pattern of change that deserves a caring, serious response.

Layout: A simple weekly log for a fictional friend (Weeks 1-4), showing short text entries about mood, sleep, and social activity for each week. Below the log, two response options: "One Bad Day" and "A Pattern Worth Caring About."

Interactive controls: Student reads the four-week log (populated with one of several pre-written scenario sets, selectable from a dropdown) and clicks the option that best matches; feedback explains why the log does or does not show a lasting pattern, and reinforces that the response either way is the same: notice with care, never with judgment.

Default parameters: Three to five scenario sets, at least one showing an ordinary rough patch and at least two showing a genuine multi-week pattern.

Instructional Rationale: Distinguishing between a passing hard day and a lasting pattern requires examining information across time, which is Analyze-level; a scenario log with reflection is used instead of a single static snapshot, since the pattern itself is the concept being taught.

Implementation notes: p5.js. Scenario data stored as arrays of weekly entries; dropdown to select scenario set; feedback text stored per scenario. No content in this MicroSim depicts a crisis event itself — only everyday mood, sleep, and social indicators over time.
</details>

## Supports For Emotional Distress

Recognizing a warning sign is only useful if it leads somewhere. **Supports for emotional distress** are the people, resources, and strategies available to help someone experiencing emotional distress, ranging from informal conversations to professional care.

Support exists at several levels, and using more than one at a time is common and healthy:

| Level of Support | Examples |
|---|---|
| Personal strategies | Restorative practices, emotion management strategies covered earlier in this chapter |
| Informal support | A trusted friend, family member, or peer who listens without judgment |
| Cultural and community support | Talking circles, elder guidance, faith or cultural community involvement |
| School-based support | School counselor, school social worker, school psychologist |
| Professional support | Therapist, pediatrician, or other licensed mental health provider |

No single level of support is "the right one" for every person or every situation — often the most effective response combines several. A student might use a breathing technique in the moment, talk to a friend that evening, and still benefit from a follow-up conversation with a school counselor. Reaching for support is a sign of self-awareness, not a sign that something is wrong with a person — asking for help is not a last resort, but a normal, healthy part of taking care of your emotional health, the same way seeing a doctor is a normal part of taking care of your physical health.

## Trusted Adult

Many of the supports described above point to the same practical first step. A **trusted adult** is a parent, guardian, teacher, school counselor, coach, or other adult a young person can go to for help, who will listen seriously and connect them with further support when needed.

A trusted adult does not need to have all the answers. Their job is to listen without judgment, take a concern seriously, and help figure out the next step — which might mean connecting a student with a school counselor, a healthcare provider, or another resource. Every student benefits from identifying at least one or two trusted adults *before* a hard moment arrives, so that reaching out doesn't require figuring out who to ask while already in distress.

- A parent or guardian
- A school counselor, social worker, or psychologist
- A teacher or coach
- An extended family member or knowledge keeper
- A school nurse

Identifying a trusted adult in advance is a small, concrete action with a large payoff: it turns "I don't know who to talk to" into "I already know exactly who to call."

#### Diagram: Stress Signal to Support Network

<iframe src="../../../../posters/stress-signal-support-network/main.html" width="100%" height="980px" scrolling="no"></iframe>
<details markdown="1">
<summary>Stress Signal to Support Network Interactive Poster</summary>
Type: infographic
**poster-id:** stress-signal-support-network<br/>
**Library:** p5.js<br/>
**Status:** Published

Twelve stress signals and support choices connect body awareness with practical help-seeking.

Use **Explore** mode to select a marker or section and learn more. Use **Quiz** mode to practice finding each idea.
</details>

## Suicide And Self-Harm Warning Signs

Some emotional distress becomes serious enough that it requires immediate, direct action. This section is about recognizing that level of risk and knowing exactly what to do — calmly, and without waiting.

**Suicide and self-harm warning signs** are specific behavioral, verbal, and emotional changes that may indicate a person is at risk of suicide or self-harm, and that call for an immediate, caring, serious response rather than observation alone.

These signs are worth learning clearly, because they are often the clearest signal a person can give, even when they are not able to say directly that they need help:

- **Verbal signs** — talking about wanting to die, feeling hopeless, feeling like a burden to others, or saying goodbye in a way that feels final or unusual.
- **Behavioral signs** — giving away meaningful possessions, withdrawing suddenly and completely from friends and family, a dramatic change in behavior, or seeking out ways to be alone in a way that feels different from normal.
- **Emotional signs** — an intense sense of hopelessness, feeling trapped, extreme mood swings, or a sudden and unexplained sense of calm after a period of visible distress.

It is important to understand what to do with this information: noticing a warning sign is never about diagnosing, judging, or gossiping about a friend. These signs deserve a caring, serious response — the same way you would respond immediately and without hesitation to any other emergency involving someone you care about.

!!! mascot-warning "Take Every Warning Sign Seriously"
    ![Scout with a serious, attentive expression](../../../../img/mascot/warning.png){ class="mascot-admonition-img" }
    If a friend talks about wanting to die, feeling hopeless, or being a burden, believe them and take it seriously every single time — even if you're not sure, even if they say they're "just joking." Taking it seriously never makes things worse. Staying silent might.

#### Diagram: Warning Sign Recognition Guide

<iframe src="../../../../sims/warning-sign-recognition-guide/main.html" width="100%" height="522px" scrolling="no"></iframe>
<details markdown="1">
<summary>Warning Sign Recognition Guide Infographic</summary>
Type: infographic
**sim-id:** warning-sign-recognition-guide<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Remember (L1)
Bloom Taxonomy Verb: identify, recognize, list

Learning objective: Students identify and recognize the categories of verbal, behavioral, and emotional warning signs associated with suicide or self-harm risk, so they can name what they are noticing in a caring, non-diagnostic way.

Layout: Three labeled columns — "Verbal Signs," "Behavioral Signs," "Emotional Signs" — each containing three to four short, plainly worded example phrases drawn directly from the chapter text (no depiction of any self-harm act, method, or scene).

Interactive elements: Click any example to open an infobox that restates the sign in supportive language and reminds the student that noticing a sign is not about diagnosing — it is about caring and responding. A persistent banner at the top of the infographic reads "If you see any of these signs, tell a trusted adult right away" and links conceptually to the next section's response steps.

Instructional Rationale: Recognizing named categories of warning signs is Remember/Understand-level, so a labeled, click-to-reveal reference infographic is used rather than a scenario simulation. No interactive element in this specification asks the learner to simulate, role-play, or click through a depiction of a suicide attempt or self-harm act; the content is limited strictly to naming recognizable signs and reinforcing a caring response.

Implementation notes: p5.js. Sign text and supportive infobox copy stored as data objects; layout responsive to window resize; no imagery depicting crisis scenes, only text labels and a calm, plain visual style consistent with the rest of the chapter.
</details>

## Seeking Help For Suicide Risk

Recognizing a warning sign only matters if it leads to action. **Seeking help for suicide risk** means responding immediately and directly when you notice these warning signs — in yourself or someone else — by involving a trusted adult and, when needed, emergency or crisis resources.

If a friend tells you they are thinking about suicide or self-harm, here is exactly what to do:

1. **Listen without judgment.** Let them talk. Do not argue, minimize what they're feeling, or act shocked.
2. **Take it seriously — always.** Never assume someone is exaggerating or joking, even if part of you hopes that's true.
3. **Do not promise secrecy.** Tell your friend clearly: "I care about you too much to keep this a secret. I need to get an adult to help." Keeping this kind of secret can cost a life — this is the one kind of promise that should never be made.
4. **Get a trusted adult involved immediately.** A parent, teacher, school counselor, or any trusted adult, right away — not "eventually," not "after I think about it more."
5. **Use crisis resources directly if needed.** The **988 Suicide & Crisis Lifeline** can be reached by **calling or texting 988**, anywhere in the United States, 24 hours a day, 7 days a week. It connects the caller or texter with a trained crisis counselor, free and confidential.

This applies exactly the same way if the concern is about yourself. If you are having thoughts of suicide or self-harm, telling a trusted adult or contacting 988 is the right next step, every time — not something to handle alone, and not something to wait on.

!!! mascot-encourage "You Are Not Alone In This"
    ![Scout with an encouraging expression](../../../../img/mascot/encouraging.png){ class="mascot-admonition-img" }
    If you are ever having thoughts of suicide or self-harm, or you are worried about a friend who might be, you do not have to handle it alone and you do not have to figure it out perfectly. Call or text 988, or tell a trusted adult right away. Reaching out is always the right move.

#### Diagram: Steps to Take If You're Worried About a Friend

<iframe src="../../../../sims/steps-to-take-worried-about-friend/main.html" width="100%" height="978px" scrolling="no"></iframe>
<details markdown="1">
<summary>Steps to Take If You're Worried About a Friend Workflow</summary>
Type: workflow
**sim-id:** steps-to-take-worried-about-friend<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: demonstrate, apply, use

Learning objective: Students apply the correct sequence of response steps when a friend discloses thoughts of suicide or self-harm, ending every path at getting a trusted adult or the 988 Lifeline involved.

Visual style: Mermaid flowchart, linear with one branch point, deliberately simple and calm — no imagery or text depicting a crisis event itself.

Steps: (1) Start node "A Friend Tells You They're Thinking About Suicide or Self-Harm," click reveals this applies whether the friend says it directly or you notice strong warning signs; (2) process node "Listen Without Judgment," click reveals what listening without judgment looks like in practice; (3) process node "Take It Seriously — Do Not Promise Secrecy," click reveals the exact supportive script from the chapter text; (4) decision diamond "Can You Reach a Trusted Adult Right Now?" click reveals that both branches lead to the same outcome; (5a) branch "Yes" leads to "Tell the Trusted Adult Immediately," click reveals this should happen even if the friend asks you not to; (5b) branch "Not Yet" leads to "Call or Text 988 Together," click reveals 988 is available 24/7 and can help right away while you also work on reaching a trusted adult; (6) shared end node "Your Friend Gets Help," click reveals that follow-through — making sure an adult is actually involved — matters as much as the first response.

Every node must have a Mermaid `click` directive calling an infobox function.

Color coding: Blue for listening/response steps, gray neutral for the decision diamond, green for both paths and the shared end node (both paths are equally valid and both are "success," not a choice between a right and wrong path).

Implementation: Mermaid flowchart syntax with `click NodeId call showInfo("key")` for every node; infobox text in a JS lookup object. Contains no depiction of a suicide attempt, self-harm act, or method — content is limited to listening, disclosure response, and connecting to help.
</details>

#### Diagram: Who Can I Turn To Support Network

<iframe src="../../../../sims/who-can-i-turn-to-support-network/main.html" width="100%" height="542px" scrolling="no"></iframe>
<details markdown="1">
<summary>Who Can I Turn To Support Network Map</summary>
Type: graph-model
**sim-id:** who-can-i-turn-to-support-network<br/>
**Library:** vis-network<br/>
**Status:** Specified

Bloom Taxonomy: Remember (L1)
Bloom Taxonomy Verb: identify, list, recognize

Learning objective: Students identify multiple concrete people and resources they can turn to, immediately, if they or a friend are at risk, reinforcing that help is always available and never limited to a single option.

Node types: Central node "Me or a Friend Needs Help Now" (orange circle, high visual prominence). Support nodes (blue circles): Parent/Guardian, School Counselor, Teacher or Coach, Trusted Family Member or Knowledge Keeper, 988 Suicide and Crisis Lifeline (call or text).

Edge types: "Can Help Right Now" (thick solid lines from every support node to the central node, all styled identically to avoid implying any option is a lesser choice).

Layout: Central node in the middle, all five support nodes arranged evenly around it in a simple wheel layout.

Interactive features: Hover a support node to see its label; click a support node to open an infobox with one sentence on how to reach that support (e.g., clicking the 988 node reveals "Call or text 988. Available 24/7, free and confidential."); click the central node to reveal the message "There is always more than one way to get help, and reaching out is always the right choice."; zoom with mouse wheel, pan by dragging background.

Legend: Simple key noting all support nodes are equally valid first steps.

Implementation: vis-network JavaScript library; canvas responsive, default 800x500px. Contains no depiction of a crisis event — only the identification of help pathways.
</details>

You now know the warning signs, and you know exactly what to do: listen, take it seriously, never keep it secret, and get a trusted adult or 988 involved right away. That knowledge can genuinely help — for a friend, or for yourself.

## Empathy In Relationships

The rest of this chapter turns from recognizing distress to building the everyday relationship skills that help prevent conflict and disconnection in the first place. **Empathy in relationships** means recognizing and understanding another person's feelings and perspective, and letting that understanding shape how you treat them.

Empathy has two connected parts: noticing what someone else might be feeling, and responding in a way that reflects that understanding. A person can notice a friend seems upset (the first part) but still respond poorly if they brush it off or make a joke instead of acknowledging it (missing the second part).

- **Perspective-taking** — imagining a situation from another person's point of view, including a background, culture, or experience different from your own.
- **Emotional recognition** — noticing cues (tone of voice, body language, word choice) that indicate how someone else is feeling.
- **Responsive action** — adjusting your own behavior based on that understanding, such as giving a friend space, checking in, or simply listening.

Empathy supports healthy relationships because it builds trust: a person who feels understood is more likely to be honest, to stay connected, and to extend the same empathy back. Relationships without empathy tend to become one-sided or to break down entirely when either person is going through something hard.

#### Diagram: Perspective-Taking Scenario Explorer

<iframe src="../../../../sims/perspective-taking-scenario-explorer/main.html" width="100%" height="514px" scrolling="no"></iframe>
<details markdown="1">
<summary>Perspective-Taking Scenario Explorer MicroSim</summary>
Type: microsim
**sim-id:** perspective-taking-scenario-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain, interpret, infer

Learning objective: Students interpret a short relationship scenario from two different characters' perspectives and explain how each character's feelings shape what an empathetic response would look like.

Layout: A scenario text box describing a everyday middle-school situation (e.g., a friend cancels plans last-minute) with two character-perspective buttons ("See It From [Character A]'s View" and "See It From [Character B]'s View").

Interactive controls: Clicking each perspective button reveals that character's likely feelings and reasons; a third button, "What Would Empathy Look Like Here?", reveals a model empathetic response after both perspectives have been viewed; "New Scenario" button cycles to a different situation (4-5 scenarios total).

Default parameters: Scenario list preloaded with everyday, non-crisis relationship situations only.

Instructional Rationale: Interpreting a situation from multiple perspectives and explaining the reasoning behind an empathetic response is Understand-level, so a two-perspective reveal with a modeled response is used rather than open-ended role-play.

Implementation notes: p5.js. Scenario, perspective, and model-response text stored as data objects; responsive layout for window resize.
</details>

## Communication For Conflict Resolution

Empathy provides the understanding; communication provides the tool for acting on it. **Communication for conflict resolution** refers to the specific verbal and nonverbal communication skills — clear statements, active listening, and respectful tone — that help people work through a disagreement productively.

Certain communication habits consistently make conflict easier to resolve, while others tend to make it worse. A few specific techniques are worth naming directly:

1. **"I" statements** — describing your own feelings and needs ("I feel frustrated when plans change last-minute") instead of accusing the other person ("You always ruin plans"), which reduces defensiveness.
2. **Active listening** — fully focusing on what the other person says, rather than planning your response while they're still talking, and reflecting back what you heard to confirm understanding.
3. **Calm, respectful tone** — the same words land very differently depending on tone; a calm tone keeps a conversation focused on the issue instead of on hurt feelings caused by *how* something was said.
4. **Nonverbal awareness** — body language, facial expression, and eye contact all communicate as much as words do, and paying attention to them (in yourself and the other person) is part of communicating well.

Before comparing these skills side by side, it helps to see communication styles in contrast. The table below organizes common conflict responses by their likely effect:

| Communication Style | Typical Effect on Conflict |
|---|---|
| "I" statements, calm tone | De-escalates; keeps focus on the issue |
| Accusatory "you" statements | Escalates; shifts focus to blame |
| Active listening | Builds mutual understanding |
| Interrupting or talking over | Increases frustration; blocks resolution |
| Yelling or aggressive tone | Escalates; can shut down communication entirely |

## Nonviolent Conflict Resolution

Communication skills come together in a broader approach to handling disagreement itself. **Nonviolent conflict resolution** is an approach to resolving disagreements that avoids aggression or violence, instead relying on communication, empathy, and mutual problem-solving to reach an outcome both people can accept.

This approach follows a recognizable general pattern, even though every conflict is different in its details:

- **Pause before reacting** — the same pause used in emotion management applies directly here; a conflict handled immediately in anger tends to go worse than one given even a few minutes of space.
- **State the issue clearly** — using an "I" statement to describe the specific problem, not a list of unrelated past grievances.
- **Listen to the other side** — genuinely trying to understand the other person's perspective, using the empathy and active-listening skills already covered.
- **Look for a solution both people can accept** — not necessarily a perfect outcome for either side, but one that resolves the actual issue.
- **Involve a trusted adult if needed** — some conflicts, especially those involving safety, bullying, or a serious power imbalance, need adult involvement rather than being handled between peers alone.

Nonviolent conflict resolution is a skill, which means it improves with practice — it is not something a person either naturally has or doesn't. Most people get better at it specifically by practicing it in smaller, lower-stakes disagreements first.

#### Diagram: Conflict Resolution Pathway

<iframe src="../../../../sims/conflict-resolution-pathway/main.html" width="100%" height="962px" scrolling="no"></iframe>
<details markdown="1">
<summary>Conflict Resolution Pathway Workflow</summary>
Type: workflow
**sim-id:** conflict-resolution-pathway<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: apply, demonstrate, use

Learning objective: Students apply the sequence of nonviolent conflict resolution steps to a realistic peer conflict, distinguishing situations that peers can resolve directly from situations that need adult involvement.

Visual style: Mermaid flowchart with a start node, a sequence of process nodes, one decision diamond, and two end states.

Steps: (1) Start node "A Disagreement Happens," click reveals this is the starting point for any peer conflict; (2) process node "Pause Before Reacting," click reveals why a brief pause improves the outcome; (3) process node "State the Issue with an 'I' Statement," click reveals an example statement; (4) process node "Listen to the Other Perspective," click reveals what active listening looks like here; (5) decision diamond "Does This Involve Safety, Bullying, or a Power Imbalance?" click reveals why this question changes the right next step; (6a) branch "No" leads to "Look for a Solution Both Sides Accept," click reveals this is the peer-level resolution path; (6b) branch "Yes" leads to "Involve a Trusted Adult," click reveals that some conflicts are not meant to be resolved by peers alone; both branches lead to a shared end node "Conflict Addressed Respectfully."

Every node must have a Mermaid `click` directive calling an infobox function.

Color coding: Blue for process steps, yellow for the decision diamond, green for both resolution end paths.

Implementation: Mermaid flowchart syntax with `click NodeId call showInfo("key")` for every node; infobox text in a JS lookup object.
</details>

## Bringing It All Together

This chapter moved from the everyday to the serious and back to the everyday. It began with **personal stressors** and the **restorative stress-management practices** and **emotion management strategies** that help balance them, including **Indigenous and traditional healing approaches** like talking circles, connection to land, ceremony, elder guidance, and storytelling. It then covered how to recognize **warning signs of emotional distress** and connect to **supports for emotional distress**, including identifying a **trusted adult** before a hard moment arrives.

At the center of the chapter, it addressed **suicide and self-harm warning signs** directly and clearly, and covered exactly what **seeking help for suicide risk** looks like in practice: listen without judgment, take it seriously, never promise secrecy, and involve a trusted adult or the 988 Suicide & Crisis Lifeline immediately. Finally, it closed with the relationship skills that support connection and prevent conflict from escalating: **empathy in relationships**, **communication for conflict resolution**, and **nonviolent conflict resolution**.

Every part of this chapter points toward the same underlying idea: emotional well-being is not something to manage silently or alone. Naming a feeling, reaching for a support, and responding to someone else with care are all the same basic skill, applied in different directions.

!!! mascot-celebration "Chapter Complete"
    ![Scout with a calm, supportive expression](../../../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You have worked through real, sometimes difficult material in this chapter — stress, emotional distress, suicide and self-harm warning signs, and the relationship skills that hold people together. Remember the two numbers that matter most: 988, and the name of at least one trusted adult you can call.

??? note "Quick Check — Click to expand"
    Question: A friend tells you they've been feeling hopeless, gives away something meaningful to them, and asks you to promise not to tell anyone. What should you do?

    Answer: Listen without judgment and take what they said seriously. Do not promise secrecy — tell them directly that you care about them too much to keep it a secret. Get a trusted adult involved immediately, and if needed, call or text 988, the Suicide & Crisis Lifeline, which is free, confidential, and available 24/7.
