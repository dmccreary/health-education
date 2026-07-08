---
title: Equity, Belonging, And Bystander Action
description: Grade 5 chapter on equity and belonging as the foundation for including and supporting others and ability-inclusive kindness, and on concrete, safety-first bystander actions that prevent or reduce bullying, fighting, and violence.
generated_by: claude skill chapter-content-generator
date: 2026-07-06 16:33:30
version: 0.09
---

# Equity, Belonging, And Bystander Action

## Summary

This chapter explores equity and belonging as the foundation for including and supporting others, and treating people of all abilities with kindness to build inclusive environments. Students also learn how bystanders can act to prevent or reduce bullying, fighting, and violence.

## Concepts Covered

1. Equity
2. Belonging
3. Including And Supporting Others
4. Bystander
5. Bystander Action Against Bullying
6. Preventing Fighting And Violence
7. Ability-Inclusive Kindness
8. Inclusive Environments

## Prerequisites

Builds on the relationship-management concepts introduced in [Chapter 3: Managing Emotions And Relationships](../03-managing-emotions-and-relationships/index.md), and on Health from [Chapter 1: Foundations And Trusted Adults](../01-foundations-and-trusted-adults/index.md).

---

!!! mascot-welcome "Everyone Belongs Here"
    ![Scout waving hello](../../../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Welcome back, friend! This chapter is about making sure every single person around you feels like they truly belong — and about knowing what to do if you ever see someone being treated unfairly. Let's think it through together — healthy choices, happy you!

## Equity

Imagine three students of different heights standing behind a fence, trying to watch a game on the other side. If every student gets the exact same size box to stand on, the tallest student can already see over the fence, the middle student can just barely see, and the shortest student still can't see anything. That is **equality** — treating everyone exactly the same. **Equity** means giving each person what *they specifically* need to have a fair chance at the same outcome — so the shortest student gets a taller box, and now everyone can see the game.

Equity shows up constantly in everyday school and community life:

- A student who is learning English gets extra time or a translated worksheet on a test.
- A student who uses a wheelchair gets a classroom seating spot near the door instead of across the room.
- A student who struggles to focus gets a quiet corner to work in during independent reading time.

None of these adjustments give someone an unfair advantage. Each one removes a barrier that was making things harder for that person specifically, so that everyone ends up with a genuinely fair chance.

!!! mascot-thinking "Key Idea"
    ![Scout thinking](../../../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Equality means everyone gets the same thing. Equity means everyone gets what they need. Fair doesn't always mean identical.

#### Diagram: Equality vs. Equity Fence Explorer

<iframe src="../../../../sims/equality-vs-equity-fence-explorer/main.html" width="100%" height="500px" scrolling="no"></iframe>
<details markdown="1">
<summary>Equality vs. Equity Fence Explorer MicroSim</summary>
Type: microsim
**sim-id:** equality-vs-equity-fence-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain, compare, contrast

Learning objective: Students explain the difference between equality and equity by adjusting boxes given to three students of different heights standing behind a fence and observing who can see over it.

Canvas layout:
- Left side (450px): Drawing area showing a fence with three student characters of different heights (short, medium, tall) standing behind it
- Right side (200px): Mode toggle and box-count display

Visual elements:
- A solid fence drawn across the middle of the canvas at a fixed height
- Three simple character icons of different heights standing behind the fence
- Stackable box icons that can be added under each character
- A "sight line" indicator (small eye icon) showing whether each character can see over the fence

Interactive controls:
- Toggle switch: "Equality Mode" vs "Equity Mode"
- In Equality Mode: one button "Give Everyone 1 Box" — all three characters receive the same number of boxes
- In Equity Mode: three separate plus/minus steppers, one per character, letting the student assign a different number of boxes to each person
- Display: for each character, shows whether they can now see over the fence (yes/no)

Default parameters:
- Starts in Equality Mode with 0 boxes for all three characters
- Fence height fixed; short student needs 3 boxes, medium student needs 2 boxes, tall student needs 0 boxes to see over

Behavior:
- In Equality Mode, giving everyone the same number of boxes shows that the short student still cannot see even when the tall student already can
- In Equity Mode, the student can assign different amounts so that all three characters end up able to see over the fence with the fewest total boxes
- A text panel below updates with "Equal boxes, but not everyone can see" vs "Different boxes, but now everyone can see"

Instructional Rationale: This is an Understand-level objective, so the pattern uses a concrete, step-through manipulation with visible outcomes for each character rather than a continuous animation, letting students directly compare the two approaches side by side.

Implementation notes: Use p5.js. Store each character's height-to-box-requirement as a simple lookup value; recompute the sight-line indicator whenever box counts change; keep visuals simple and flat with no distracting motion.
</details>

## Belonging

Equity is about getting what you need to have a fair chance. **Belonging** is about something a little different — it's the feeling of being valued, accepted, and welcome as your true self within a group, rather than having to hide parts of yourself to fit in. A student can be present in a classroom every day and still not feel like they belong, if they feel unseen, unwelcome, or like they have to pretend to be someone else to be accepted.

Belonging and equity support each other. When a school or classroom makes equitable adjustments — like the seating spot, the extra time, or the quiet corner from the earlier examples — it sends a message that every person's needs matter. That message is part of what helps belonging grow. But belonging also depends on smaller, everyday moments:

- Being greeted by name when you walk into a room.
- Having classmates save you a seat, or ask you to join a game.
- Seeing people who share your background, culture, or interests represented in books, posters, and conversations.
- Feeling like your questions and ideas are taken seriously, not laughed at.

A simple way to check whether belonging is present in a group is to ask: "Would this person act and speak the same way if no one from outside their close friend group was watching?" If the answer is no — if they're hiding, shrinking, or performing to be accepted — belonging is missing, even if no one is being openly excluded.

!!! mascot-tip "Helpful Tip"
    ![Scout giving a tip](../../../../img/mascot/tip.png){ class="mascot-admonition-img" }
    A quick way to build someone's sense of belonging: say their name, ask a genuine question about their day, and actually listen to the answer. Small, repeated moments like this add up.

## Including And Supporting Others

Equity and belonging describe *what fairness and acceptance look like*. **Including and supporting others** is the action side — the specific things a person actually does to promote equity and belonging for people around them, especially people who might otherwise be left out. This is a skill you can practice and get better at, not just a nice feeling you either have or don't.

Including and supporting others can look like:

1. **Inviting** — asking someone to join a game, table, or group project instead of waiting for them to ask.
2. **Making room** — physically and socially making space in a circle, a lunch table, or a conversation.
3. **Speaking up for someone** — mentioning a quieter classmate's good idea if it got talked over ("I think what Maya said a second ago was really smart — can we go back to that?").
4. **Checking in** — noticing when someone seems left out and asking if they're okay or want company.
5. **Sharing information** — making sure someone who missed an announcement or explanation gets caught up, instead of assuming they'll figure it out.

Before we look at how this works in a real situation, let's define one more idea: an **inclusive environment**, which we'll build on later in this chapter, is any space — a classroom, team, or lunch table — that is deliberately structured so that people of many different backgrounds and abilities feel like they belong and can fully participate. Including and supporting others, done consistently by many people, is exactly what creates an inclusive environment over time.

The table below organizes the ideas from this section so far.

| Concept | What It Means | Example |
|---|---|---|
| Equity | Giving each person what they specifically need for a fair chance | Extra time on a test for a student learning English |
| Belonging | Feeling valued and welcome as your true self | Being greeted by name and included without having to ask |
| Including and supporting others | The actions a person takes to build equity and belonging for others | Inviting a classmate who is sitting alone to join your group |

#### Diagram: Include-a-Classmate Scenario Sorter

<iframe src="../../../../sims/include-a-classmate-scenario-sorter/main.html" width="100%" height="500px" scrolling="no"></iframe>
<details markdown="1">
<summary>Include-a-Classmate Scenario Sorter MicroSim</summary>
Type: microsim
**sim-id:** include-a-classmate-scenario-sorter<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: demonstrate, use, practice

Learning objective: Students apply strategies for including and supporting others by choosing the most inclusive response to short school scenarios.

Canvas layout:
- Left side (450px): Scenario card describing a short classroom or playground situation
- Right side (200px): Three response option buttons and a feedback panel

Visual elements:
- Scenario card with simple line-art icon (a lunch table, a group project, a playground game)
- Three response cards worded as things a student could say or do
- Feedback panel showing a short explanation after a choice is made

Interactive controls:
- Click one of three response cards to answer
- Button: "Why This Helps" — reveals an explanation connecting the choice to inviting, making room, speaking up, checking in, or sharing information
- Button: "Next Scenario" — cycles through a bank of 6 scenarios

Default parameters:
- Starts on Scenario 1: "A new student is standing alone at recess, watching a kickball game."

Behavior:
- Each scenario has one response that best demonstrates including and supporting others; the other two responses are either neutral (doing nothing) or mildly exclusionary
- Feedback is encouraging and explains why the strongest response builds belonging, without shaming choices that were not ideal

Instructional Rationale: This is an Apply-level objective, so the pattern is scenario-based practice with immediate feedback, letting students rehearse recognizing and choosing inclusive actions in realistic situations.

Implementation notes: Use p5.js. Store scenarios as objects with a description, three response strings, a "best" flag, and an explanation string; keep artwork simple and warm in tone.
</details>

## Ability-Inclusive Kindness

Including and supporting others matters for every kind of difference, but one area deserves special attention: how people treat classmates whose abilities are different from their own. **Ability-inclusive kindness** means treating people of all abilities — physical, sensory, learning, communication, and neurological — with respect and warmth, and actively including them, rather than treating a difference as something to stare at, avoid, or "fix."

Abilities differ in many ways that aren't always visible:

- Some classmates use a wheelchair, walker, hearing aid, or communication device.
- Some classmates are neurodivergent — for example, autistic students or students with ADHD — and may process sound, attention, or social situations differently than most of their peers.
- Some classmates have a learning difference, like dyslexia, that changes how they read or write but has nothing to do with how smart they are.
- Some classmates manage a chronic health condition that isn't visible at all, like diabetes or a seizure disorder.

Ability-inclusive kindness means recognizing that a difference in ability is simply a difference — not a deficit to pity and not a performance to praise for "trying so hard." A neurodivergent classmate who needs noise-canceling headphones during a fire drill isn't asking for special treatment; they're using a tool that helps their brain handle a genuinely overwhelming situation, the same way glasses help someone's eyes handle blurry text.

Practical ability-inclusive kindness looks like:

- Asking before helping ("Would you like a hand with that, or have it?") instead of assuming someone needs help.
- Talking directly to a classmate who uses a communication device or an interpreter, not just to the adult standing near them.
- Including a classmate with a physical difference in a game by adjusting the rules together, instead of leaving them out "to keep it fair."
- Never mimicking, mocking, or asking invasive questions about someone's disability, tics, stims, or equipment.

A difference in ability is not a problem to solve or a performance to applaud — it's simply part of who someone is. The key is to ask what someone needs instead of assuming, and to never stare or single someone out.

#### Diagram: Ability-Inclusive Classroom Infographic

<iframe src="../../../../sims/ability-inclusive-classroom-infographic/main.html" width="100%" height="500px" scrolling="no"></iframe>
<details markdown="1">
<summary>Ability-Inclusive Classroom Infographic</summary>
Type: infographic
**sim-id:** ability-inclusive-classroom-infographic<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain, exemplify, classify

Learning objective: Students explain how everyday classroom tools and adjustments support classmates with different abilities, recognizing that these tools are ordinary, not special treatment.

Canvas layout:
- Full width (650px): Illustrated classroom scene with 6 clickable hotspots
- Bottom strip (100px): Infobox that displays details for the selected hotspot

Visual elements:
- A friendly, flat-style illustrated classroom with six labeled hotspots: wheelchair ramp/accessible desk, noise-canceling headphones on a hook, a communication device on a desk, large-print worksheet, a quiet corner with a beanbag chair, and a visual daily schedule chart
- Each hotspot glows softly when hovered to indicate it is clickable

Interactive controls:
- Click any of the 6 hotspots to open an infobox describing what the tool is, who might use it, and why it helps
- Button: "Show All Labels" — reveals text labels on every hotspot at once for review
- Button: "Reset"

Default parameters:
- No hotspot selected on load; "Show All Labels" off

Behavior:
- Clicking the wheelchair ramp/accessible desk hotspot explains it removes a physical barrier so a classmate using mobility equipment can reach their desk and the front of the room
- Clicking the noise-canceling headphones hotspot explains they help a classmate whose brain processes sound differently avoid becoming overwhelmed
- Clicking the communication device hotspot explains it lets a classmate who doesn't use spoken words fully participate in class discussion
- Clicking the large-print worksheet hotspot explains it supports a classmate with low vision or certain learning differences
- Clicking the quiet corner hotspot explains it gives any student, especially a neurodivergent student, a calm space to regroup
- Clicking the visual schedule hotspot explains it helps students who benefit from seeing, not just hearing, what happens next

Instructional Rationale: This is an Understand-level objective, so the pattern uses click-to-reveal infoboxes with concrete, real information at each hotspot rather than animation, letting students build accurate mental models of why each tool matters.

Implementation notes: Use p5.js with an array of hotspot objects (x, y, radius, label, description); render infobox text in the bottom strip on click; use warm, neutral colors and avoid exaggerated or stereotyped character depictions.
</details>

## Inclusive Environments

Individual acts of including and supporting others, repeated by many people over time, are what build an **inclusive environment** — a classroom, team, school, or community that is deliberately structured, through its habits, rules, and physical space, so that people of many different backgrounds and abilities feel like they belong and can fully participate. An inclusive environment isn't an accident; it's built on purpose, the same way a garden needs planning, not just hoping seeds will grow.

Signs that an environment is genuinely inclusive include:

- Classroom rules and consequences apply consistently to everyone, without favoritism.
- Group activities are designed so that no single ability level or background is required to fully participate.
- Diverse voices, cultures, and abilities are represented in classroom materials, decorations, and discussions.
- Students feel safe pointing out when something feels unfair, without fear of being punished for speaking up.

An inclusive environment is what equity, belonging, including and supporting others, and ability-inclusive kindness all build together — none of these ideas work in isolation. Equity provides fair access, belonging provides emotional safety, including others provides the day-to-day actions, and ability-inclusive kindness makes sure no group is left out of any of it.

#### Diagram: Building an Inclusive Classroom Concept Map

<iframe src="../../../../sims/inclusive-classroom-concept-map/main.html" width="100%" height="500px" scrolling="no"></iframe>
<details markdown="1">
<summary>Building an Inclusive Classroom Concept Map</summary>
Type: graph-model
**sim-id:** inclusive-classroom-concept-map<br/>
**Library:** vis-network<br/>
**Status:** Specified

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: examine, distinguish, organize

Learning objective: Students analyze how equity, belonging, including and supporting others, and ability-inclusive kindness relate to and build toward an inclusive environment.

Purpose: Show the four supporting concepts feeding into the central concept of an inclusive environment, and let students explore how each one contributes.

Node types:
1. Central node: "Inclusive Environment" (large green circle, center)
2. Supporting nodes (four medium blue circles arranged around the center): "Equity", "Belonging", "Including and Supporting Others", "Ability-Inclusive Kindness"

Edge types:
- Solid arrows from each supporting node pointing inward to "Inclusive Environment", labeled "builds toward"

Sample data:
- Equity → builds toward → Inclusive Environment
- Belonging → builds toward → Inclusive Environment
- Including and Supporting Others → builds toward → Inclusive Environment
- Ability-Inclusive Kindness → builds toward → Inclusive Environment

Layout: Radial/hub layout with the central node fixed in the middle and the four supporting nodes spaced evenly around it

Interactive features:
- Hover over any node: show a one-sentence definition in a tooltip
- Click a supporting node: highlight its edge to the center and display a short real-world example in a side panel
- Click the center node: display a summary combining all four supporting ideas
- Zoom: mouse wheel; Pan: click and drag background

Visual styling:
- Central node in green, supporting nodes in blue, "builds toward" edges in gray with arrowheads pointing to the center
- Node size for the central node larger than the four supporting nodes to show its role as the combined outcome

Legend:
- Green = combined outcome; Blue = contributing concept; Gray arrow = "builds toward" relationship

Implementation: vis-network JavaScript library with a small fixed dataset (5 nodes, 4 edges) and click/hover event handlers tied to a definitions object
Canvas size: 650x450px, responsive to container width
</details>

We've now covered the four concepts that describe how people build fair, welcoming spaces together. The rest of this chapter turns to a more serious topic: what to do when you see someone being treated badly, and how to help stop harm before it grows worse.

## Bystander

A **bystander** is a person who witnesses something happening to someone else — like teasing, exclusion, bullying, or a physical fight — without being the person doing it or the person it's happening to. Almost everyone has been a bystander at some point. What a bystander chooses to do next matters enormously, because bystanders usually outnumber the people directly involved, and their reaction can either make a harmful situation worse or help stop it.

Researchers who study bullying describe several roles a bystander might fall into:

| Bystander Role | What They Do |
|---|---|
| Joins in | Laughs along or adds to the bullying, encouraging it to continue |
| Passive watcher | Watches but does nothing, which can unintentionally signal approval |
| Upstander | Takes safe, deliberate action to help the person being targeted |

The goal of this chapter is to help you become an **upstander** — a bystander who chooses to act. The next two sections describe exactly what that action can look like, and just as importantly, what it should never look like.

!!! mascot-neutral "A Careful Topic"
    ![Scout in a neutral pose](../../../../img/mascot/neutral.png){ class="mascot-admonition-img" }
    The sections ahead deal with bullying and fighting. This is serious, and it matters. We'll walk through it carefully, one clear step at a time.

## Bystander Action Against Bullying

When a bystander witnesses bullying — repeated, intentional unkindness where one person has more social power than the other — there are specific, concrete actions that actually help, and some common reactions that make things worse without the bystander realizing it.

Actions that help, ranked from simplest to most involved:

1. **Do not laugh, film, or share.** Bullying often continues because it gets an audience. Refusing to laugh, refusing to record it, and never sharing a video or photo of it removes the reward the person bullying is looking for.
2. **Support the targeted student, in the moment or right after.** A simple statement like "That wasn't okay" or "Are you alright? Want to walk with me?" tells the targeted student they are not alone and helps undo some of the harm.
3. **Get a trusted adult, safely.** Telling a teacher, playground supervisor, or another trusted adult is not "tattling" — it is one of the most effective actions a bystander can take, especially when the bystander cannot safely say anything directly in the moment.
4. **Check in afterward.** Following up later — at lunch, after school, the next day — shows the targeted student that someone noticed and cares, even after the moment has passed.

Just as important as knowing what to do is knowing what a bystander should generally avoid: publicly confronting the person doing the bullying in a way that could escalate the situation or put the bystander at risk. Standing up for someone does not require putting yourself in danger — getting help is standing up for someone.

Before we look at the decision path below, remember these four terms: **not laughing/filming/sharing**, **supporting the targeted student**, **getting a trusted adult safely**, and **checking in afterward**. Each node in the diagram maps to one of these four actions.

#### Diagram: Bystander Action Decision Path

<iframe src="../../../../sims/bystander-action-decision-path/main.html" width="100%" height="500px" scrolling="no"></iframe>
<details markdown="1">
<summary>Bystander Action Decision Path Workflow</summary>
Type: workflow
**sim-id:** bystander-action-decision-path<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: demonstrate, use, practice

Learning objective: Students apply a concrete, safety-first decision path for responding as a bystander when they witness bullying.

Purpose: Show a clear, repeatable sequence of safe bystander actions when witnessing bullying, emphasizing safety first and concrete steps over vague advice.

Visual style: Flowchart with process rectangles and one decision diamond, every node clickable

Steps:
1. Start: "You see someone being bullied"
   Click text: "Notice what's happening. You don't have to do everything at once — even one safe action helps."
2. Process: "Don't laugh, film, or share"
   Click text: "Bullying often continues because it gets an audience. Refusing to laugh or record removes that reward."
3. Decision: "Can you safely say something supportive right now?"
   Click text: "Only do this if it feels safe. If not, skip straight to getting an adult."
4a. Process (if yes): "Support the targeted student"
    Click text: "A short, caring statement like 'That wasn't okay, are you alright?' helps a lot."
4b. Process (if no): "Get a trusted adult safely"
    Click text: "Telling an adult is one of the most effective actions a bystander can take. It is never tattling."
5. Process: "Get a trusted adult safely"
   Click text: "Even after supporting the student directly, still tell a trusted adult what happened."
6. End: "Check in again later"
   Click text: "Following up afterward shows the targeted student that someone noticed and cares."

Color coding: Blue for immediate safe actions, yellow for the decision diamond, green for the adult-reporting step, gray for the follow-up ending

Implementation: Mermaid flowchart with a `click` directive on every node calling a JavaScript function that opens an infobox with that node's explanation text. Tone of all infobox text must remain calm, sincere, and non-judgmental — no humor, no mascot puns.
</details>

## Preventing Fighting And Violence

Bullying and physical fighting are related but not identical, and preventing fighting calls for one rule that overrides everything else in this chapter: **a bystander's own safety always comes first.** A bystander should never physically step between two people who are fighting, try to physically break up a fight, or otherwise put their own body at risk. This is not cowardice — pulling people apart can get a bystander seriously hurt, and it rarely stops the fight anyway.

Here is what a bystander can safely do when a fight starts or seems about to start:

- **Get an adult immediately.** This is the single most important action. Run to get a teacher, coach, or any nearby staff member right away.
- **Do not film or share.** Just like with bullying, recording or spreading a video of a fight causes real harm to everyone involved and can make the situation worse for a long time afterward.
- **Do not gather around or cheer.** A crowd forming around a fight can make it harder to stop and more dangerous for everyone nearby; walking away from the crowd, not toward it, is a safe and helpful choice.
- **Encourage a friend to walk away before it escalates.** If you notice tension building between two people before any hitting starts, calmly encouraging one or both to take a break can sometimes prevent a fight altogether.
- **Support anyone involved afterward.** Whether someone was in the fight or was the target of it, checking in afterward and encouraging them to talk to a trusted adult or counselor helps them recover and reduces the chance of it happening again.

The most important idea in this entire section is this: helping does not mean intervening physically. Helping means acting quickly and safely in the ways described above — especially getting an adult right away.

!!! mascot-encourage "You Can Help Without Danger"
    ![Scout encouraging](../../../../img/mascot/encouraging.png){ class="mascot-admonition-img" }
    It can feel like doing nothing if you don't jump in physically, but getting an adult immediately, refusing to film or crowd around, and supporting someone afterward are real, powerful actions. Your safety matters too.

The scenario below brings together bystander action against bullying and fighting-prevention skills in one connected situation.

<details markdown="1">
<summary>Scenario: Tension on the Playground — Click to expand</summary>

**Situation:** Two classmates are arguing loudly at recess, and a small crowd is starting to gather and film with their tablets. You can tell the argument might turn into a fight.

**Weaker choices:** Moving closer to get a better view, recording it to show friends later, or yelling encouragement to either side.

**Stronger choices:** Immediately find and alert a recess supervisor or teacher (getting a trusted adult safely). Do not record or share anything, and step back from the crowd instead of joining it. If it feels safe and you know one of the classmates well, a calm "Hey, let's walk away for a second" before things escalate can help — but only if this does not put you at any risk. Afterward, check in with both classmates and encourage them to talk to a trusted adult about what happened.

**Why it matters:** The crowd, the filming, and the shouting are exactly the ingredients that can turn tension into a fight. A bystander's fastest, safest, most powerful action is almost always getting an adult.

</details>

#### Diagram: Safe vs. Unsafe Bystander Response Sorter

<iframe src="../../../../sims/safe-bystander-response-sorter/main.html" width="100%" height="500px" scrolling="no"></iframe>
<details markdown="1">
<summary>Safe vs. Unsafe Bystander Response Sorter MicroSim</summary>
Type: microsim
**sim-id:** safe-bystander-response-sorter<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Evaluate (L5)
Bloom Taxonomy Verb: judge, assess, justify

Learning objective: Students evaluate a list of possible bystander responses to a fight or serious bullying situation and judge which responses are safe and effective versus which put the bystander at risk or cause harm.

Canvas layout:
- Left side (450px): A single response card describing one possible bystander action
- Right side (200px): Two sorting buttons ("Safe and Helpful" / "Risky or Harmful") and a feedback panel

Visual elements:
- Response card with plain text describing one action (e.g., "Run to get a teacher", "Try to physically pull them apart", "Record it on your phone", "Walk a friend away before it escalates", "Cheer from the crowd")
- Two clearly labeled sorting buttons
- Feedback panel explaining why the response belongs in that category, with a calm, sincere tone throughout

Interactive controls:
- Click "Safe and Helpful" or "Risky or Harmful" to sort each response card
- Button: "Why?" — reveals a short, serious explanation, always emphasizing that bystander safety comes first
- Button: "Next Response" — cycles through a bank of 8 response cards

Default parameters:
- Starts with response card: "Run to get a teacher or staff member right away."

Behavior:
- Correctly sorting "Run to get a teacher" as Safe and Helpful reveals: "This is the single most important bystander action in a fight."
- Correctly sorting "Try to physically pull them apart" as Risky or Harmful reveals: "Never physically intervene in a fight. You could be seriously hurt, and it rarely stops the fight."
- Correctly sorting "Record it on your phone" as Risky or Harmful reveals: "Filming and sharing causes lasting harm to everyone involved."
- Every response, once sorted, keeps its feedback visible until "Next Response" is clicked, reinforcing the reasoning rather than just scoring the answer

Instructional Rationale: This is an Evaluate-level objective requiring students to judge and justify safe versus unsafe bystander actions, so the pattern is a judgment task with serious, justification-based feedback rather than a fast-paced game, matching the safety-first tone this topic requires. No humor, sound effects, or playful mascot language appear anywhere in this MicroSim.

Implementation notes: Use p5.js. Store each response as an object with text, correct category, and an explanation string; keep all visuals calm and flat with no celebratory animation, consistent with the serious subject matter.
</details>

#### Diagram: Upstander Pathways

<iframe src="../../../../posters/upstander-pathways/main.html" width="100%" height="980px" scrolling="no"></iframe>
<details markdown="1">
<summary>Upstander Pathways Interactive Poster</summary>
Type: infographic
**poster-id:** upstander-pathways<br/>
**Library:** p5.js<br/>
**Status:** Published

Ten safe pathways show how students can include, interrupt, distract, get help, report, and support afterward.

Use **Explore** mode to select a numbered marker and learn more. Use **Quiz** mode to practice finding each idea.
</details>

## Bringing It All Together

This chapter connected two big ideas that both come down to how we treat the people around us. **Equity** means giving each person what they specifically need for a fair chance, and **belonging** means feeling valued and welcome as your true self. **Including and supporting others** turns those ideas into everyday action, and **ability-inclusive kindness** makes sure that action reaches classmates of every ability — physical, sensory, learning, or neurological. Together, these build **inclusive environments** where everyone can fully participate.

The second half of the chapter covered something more serious: being a **bystander** who witnesses bullying or fighting, and choosing concrete, safe actions instead of staying silent or stepping into danger. **Bystander action against bullying** means refusing to laugh, film, or share, supporting the targeted student, getting a trusted adult safely, and checking in afterward. **Preventing fighting and violence** means the same core principle taken even more seriously: a bystander's safety always comes first, so the most powerful action is almost always getting an adult immediately rather than physically intervening.

- Equity: fair access based on individual need
- Belonging: feeling valued and welcome as your true self
- Including and supporting others: the everyday actions that build equity and belonging
- Ability-inclusive kindness: including classmates of every ability without pity or stereotype
- Inclusive environments: spaces deliberately built so everyone can participate
- Bystander: someone who witnesses a situation without being directly involved
- Bystander action against bullying: refuse to laugh/film/share, support, get an adult, follow up
- Preventing fighting and violence: safety first, never intervene physically, get an adult immediately

!!! mascot-celebration "Chapter Complete!"
    ![Scout celebrating with a party hat](../../../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    Wonderful work, friend! You now understand what makes a space fair and welcoming, and you know exactly how to act safely if you ever see someone being treated badly. Healthy choices, happy you!

??? note "Quick Check — Click to expand"
    Question: What is the difference between equality and equity, and what is the single most important thing a bystander should do if they see a fight starting?

    Answer: Equality gives everyone the same thing, while equity gives each person what they specifically need for a fair chance. The single most important bystander action when a fight starts is to get a trusted adult immediately — never physically intervene, since a bystander's own safety always comes first.
