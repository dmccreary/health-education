---
title: Understanding and Talking About Feelings
description: Grade 1 students identify and name feelings, learn why talking about feelings matters, explore how different situations affect feelings, learn about cultural ways of offering comfort, and recognize signs that someone may be struggling emotionally.
generated_by: claude skill chapter-content-generator
date: 2026-07-06 14:53:10
version: 0.09
---

# Understanding and Talking About Feelings

## Summary

This chapter helps students name their feelings and understand why talking about feelings matters, while honoring different cultural ways of offering support. Students also learn how different situations affect how people feel and respond, and how to recognize signs that someone may be struggling emotionally.

## Concepts Covered

1. Feelings
2. Talking About Feelings
3. Cultural Support Practices
4. Situational Feelings
5. Signs Of Emotional Struggle

## Prerequisites

This chapter builds on Health and Trusted Adult from
[Chapter 1: Foundations of Health and Safe Habits](../01-foundations/index.md).

---

## Teacher Notes: How to Use This Chapter

This chapter is written for **you, the teacher**, to read aloud and guide from. Grade 1 students are beginning independent readers, so use the text below as a script while your class explores the pictures and MicroSims together. This chapter shifts from Kindergarten's "name the feeling" toward **identify and explain why** — students should be able to say not just what a feeling is, but why sharing feelings with others matters, and why different moments in a day can bring up different feelings.

!!! mascot-welcome "Let's Talk About Feelings!"
    ![Scout waving welcome](../../../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Hi again, friend! Today we're exploring feelings — what they are, why talking about them helps, and how different moments in our day can bring up different feelings. Let's think it through together. Healthy choices, happy you!

### What Are Feelings?

**Feelings** are the emotions we experience inside — like happy, sad, angry, scared, excited, or calm. Everyone has feelings, every single day, and no feeling is "bad" to have. Feelings are simply information: they tell us something about what is happening around us or inside us. A Grade 1 student is learning to do more than just name a feeling — they are learning to explain *why* a feeling showed up.

Talking points for read-aloud:

- Ask the class: "What is a feeling you had this morning? What made you feel that way?"
- Guide answers toward connecting a feeling to a cause ("I felt excited because it's my birthday").
- Remind students that having a feeling is never something to be ashamed of — every feeling is welcome.

Common feelings a Grade 1 student might notice in a single day:

- Happy — when something goes well or feels fun
- Sad — when something disappointing or hard happens
- Angry — when something feels unfair
- Scared — when something feels unsafe or unknown
- Excited — when something fun is about to happen
- Calm — when everything feels settled and okay

!!! mascot-thinking "Big Idea"
    ![Scout thinking](../../../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Feelings aren't good or bad — they're just information! A feeling tells you something about what just happened. Noticing your feeling is the first step to understanding it.

#### Diagram: Feelings Face Matcher

<iframe src="../../../../sims/feelings-face-matcher/main.html" width="100%" height="500px" scrolling="no"></iframe>
<details markdown="1">
<summary>Feelings Face Matcher MicroSim</summary>
Type: microsim
**sim-id:** feelings-face-matcher<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: identify, explain, classify

Learning objective: Students identify a feeling from a facial expression and cartoon scene, then explain what likely caused that feeling, moving beyond simple naming toward reasoning about cause.

Canvas layout:
- Left area (450px): A large cartoon character scene showing a facial expression and a short situation (e.g., a child hugging a new puppy)
- Right area (150px): Six feeling word cards to choose from (Happy, Sad, Angry, Scared, Excited, Calm) and an infobox

Visual elements:
- 8 scenes cycling one at a time, each a simple flat-style illustration of a child in a common situation
- Six labeled feeling word cards with simple corresponding facial icons

Interactive controls:
- Click-to-select: student clicks the feeling word that matches the scene
- Button: "Next Scene"
- Button: "Reset"

Default parameters:
- First scene: a child smiling while opening a birthday present (clearly "Happy," to build confidence)

Data Visibility Requirements:
  Stage 1: Show the scene with no label
  Stage 2: After the student clicks a feeling word, show whether it matches
  Stage 3: Reveal a one-sentence explanation of the cause ("This child feels happy because they got a fun surprise.")

Behavior:
- Correct match: the feeling card glows, gentle chime, explanation caption appears
- Incorrect match: gentle prompt, "Look again — what just happened in the picture?" and the correct card glows softly as a hint

Instructional Rationale: This is an Understand-level (identify/explain) objective, so the MicroSim reveals the cause of the feeling after each answer rather than using continuous animation, letting students connect each scene to a concrete reason a feeling occurred.

Implementation notes: Use p5.js. Large, simple, flat-style illustrations with clear, friendly facial expressions. Teacher reads each scene and explanation aloud.
</details>

### Why Talking About Feelings Matters

**Talking about feelings** means telling someone else — a trusted adult, a friend, or a family member — what you are feeling and why. Talking about feelings matters for several reasons: it helps other people understand you, it helps you figure out what to do next, and it often makes a big feeling feel smaller and easier to handle. Keeping a big feeling all bottled up inside can make it feel even bigger, while saying it out loud is like opening a window and letting some of that feeling out.

A Grade 1 student is learning to explain *why* this matters, not just that it's a rule to follow. When you tell a trusted adult "I feel nervous about the spelling test," that adult can help — maybe with extra practice, a reminder that mistakes are okay, or just a reassuring hug.

Simple ways a Grade 1 student can talk about feelings:

1. Use a feeling word: "I feel ___ because ___."
2. Tell a trusted adult at home or school.
3. Draw a picture of the feeling if words feel hard to find.
4. Ask for what you need: "Can you help me?" or "Can I have a hug?"

!!! mascot-tip "Helpful Tip"
    ![Scout giving a tip](../../../../img/mascot/tip.png){ class="mascot-admonition-img" }
    A good sentence starter: "I feel ___ because ___." Filling in those blanks helps you and the person listening understand exactly what's going on!

#### Diagram: From Feeling to Words

<iframe src="../../../../posters/from-feeling-to-words/main.html" width="100%" height="980px" scrolling="no"></iframe>
<details markdown="1">
<summary>From Feeling to Words Interactive Poster</summary>
Type: infographic
**poster-id:** from-feeling-to-words<br/>
**Library:** p5.js<br/>
**Status:** Published

A four-step path from an event and body clues to helpful words and trusted support.

Use **Explore** mode to select a section and learn more. Use **Quiz Me** mode to practice finding each idea in the illustration.
</details>

#### Diagram: Feeling Sentence Builder

<iframe src="../../../../sims/feeling-sentence-builder/main.html" width="100%" height="500px" scrolling="no"></iframe>
<details markdown="1">
<summary>Feeling Sentence Builder MicroSim</summary>
Type: microsim
**sim-id:** feeling-sentence-builder<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: use, practice, demonstrate

Learning objective: Students practice communicating a feeling in a healthy way by assembling an "I feel ___ because ___" sentence from word/picture tiles for a given scenario.

Canvas layout:
- Top area (150px): One scenario picture at a time (e.g., a child whose block tower fell down)
- Middle area (250px): Two rows of tiles to click in order — a feeling-word row (happy, sad, angry, scared, excited, calm) and a reason row (three short reason tiles matching the scenario)
- Bottom strip (100px): Assembled sentence display and "Say It!" button

Learning tiles:
- Feeling tiles: happy, sad, angry, scared, excited, calm
- Reason tiles change per scenario (e.g., for the block tower scene: "because it fell down," "because it's my favorite color," "because it's time for lunch")

Interactive controls:
- Click a feeling tile, then click a matching reason tile
- Button: "Say It!" (assembles and displays the full sentence)
- Button: "Next Scenario"

Default parameters:
- First scenario: block tower falling down (a clear, relatable frustration, to build confidence)

Behavior:
- When a reasonable feeling + reason pair is assembled, the sentence appears in a speech bubble over the character, a gentle chime plays, and a caption affirms, "Great job telling someone how you feel!"
- If a mismatched pair is chosen (e.g., "happy" with "because it fell down"), a calm caption asks, "Does that feeling really match what happened? Try again."

Instructional Rationale: This is an Apply-level (use/practice) objective, so students actively construct and "say" a feelings sentence rather than only recognize one, matching the Grade 1 skill benchmark of communicating feelings, wants, and needs in healthy ways.

Implementation notes: Use p5.js. Keep tiles large and easy to click for early readers; include simple icons alongside each word. Teacher reads the assembled sentence aloud together with the class.
</details>

You've now learned what feelings are and why sharing them matters. Next, let's explore how different situations can bring up different feelings.

### Situational Feelings: Different Moments, Different Feelings

**Situational feelings** are the different feelings that come up depending on what is happening around you. The same student might feel excited at recess, nervous before a test, sad when a pet is sick, and proud after finishing a hard puzzle — all in the same day. Understanding situational feelings helps a Grade 1 student realize that feelings change because *situations* change, not because something is wrong with them. It is normal for feelings to shift throughout the day. Recognizing the situation behind a feeling also helps students understand why a classmate might be reacting a certain way.

Here are some common situations and the feelings they often bring up:

| Situation | Feeling Often Felt | Why |
|---|---|---|
| Getting a hug from a family member | Happy, calm | Feeling loved and safe |
| A pop quiz with no warning | Nervous, scared | Feeling unprepared or surprised |
| A best friend moving away | Sad | Missing someone important |
| Winning a game with friends | Excited, proud | Accomplishing something fun |
| Getting lost in a crowded store | Scared | Feeling unsafe or alone |
| Being left out of a game | Sad, angry | Feeling excluded |

#### Diagram: A Day of Changing Feelings Timeline

<iframe src="../../../../sims/day-of-changing-feelings/main.html" width="100%" height="500px" scrolling="no"></iframe>
<details markdown="1">
<summary>A Day of Changing Feelings Timeline</summary>
Type: timeline
**sim-id:** day-of-changing-feelings<br/>
**Library:** vis-timeline<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain, describe, infer

Learning objective: Students describe how different situations across a single school day affect the way a character feels and responds.

Time period: One school day, from morning arrival to bedtime (7:00 AM - 8:00 PM)

Orientation: Horizontal

Events:
- 7:00 AM: Waking up excited — "It's picture day!"
- 8:15 AM: Nervous — forgot homework at home
- 9:30 AM: Proud — solved a hard math problem
- 12:00 PM: Happy — sat with friends at lunch
- 1:45 PM: Sad — a friend couldn't play at recess because they were sick
- 3:00 PM: Scared — a loud fire drill alarm
- 3:15 PM: Calm — teacher explains the drill was just practice
- 6:00 PM: Angry — sibling broke a favorite toy
- 8:00 PM: Calm — bedtime story with a trusted adult

Visual style: Horizontal timeline with a simple cartoon face icon above each event matching the feeling

Color coding:
- Yellow: happy/excited feelings
- Blue: sad feelings
- Red: angry feelings
- Purple: scared/nervous feelings
- Green: calm feelings

Interactive features:
- Click any event to open an infobox explaining the situation, the feeling it caused, and why that response makes sense
- Infobox includes a "What could help?" tip for the harder moments (nervous, scared, angry, sad)

Implementation: vis-timeline JavaScript library with click event listeners opening a definition/explanation panel
</details>

### Cultural Support Practices

Different families and cultures have their own special ways of comforting each other when someone has a big feeling. These are called **cultural support practices**, and there is no single "right" way to comfort someone — what matters is that people care for each other. Some families share a meal together, sing quiet songs, tell stories passed down from grandparents, pray together, or gather the whole extended family during a hard moment. All of these practices share the same goal: helping someone feel less alone and reminding them they are cared for.

A Grade 1 student's family may comfort each other differently than a classmate's family, and both ways are equally valid. Learning about a classmate's family traditions is a wonderful way to appreciate how many caring ways there are to help each other.

Examples of cultural and family support practices from around the world and across communities:

- Sharing a favorite meal or special comfort food together
- Singing or humming a familiar lullaby or song
- Storytelling — sharing family stories, proverbs, or folktales
- Quiet time with a trusted elder or grandparent
- Gathering extended family or community members together
- A comforting phrase, blessing, or prayer used across generations
- A calming activity like a walk, a bath, or quiet drawing time

!!! mascot-tip "Helpful Tip"
    ![Scout giving a tip](../../../../img/mascot/tip.png){ class="mascot-admonition-img" }
    Ask a family member: "What did your family do to help each other feel better when you were little?" You might discover a wonderful tradition that's been passed down for a long time!

#### Diagram: Comfort Traditions Around the World

<iframe src="../../../../sims/comfort-traditions-around-world/main.html" width="100%" height="500px" scrolling="no"></iframe>
<details markdown="1">
<summary>Comfort Traditions Around the World Infographic</summary>
Type: infographic
**sim-id:** comfort-traditions-around-world<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: describe, exemplify, compare

Learning objective: Students describe several different cultural and family practices used to offer comfort and support, recognizing that many caring approaches exist and all are respected.

Purpose: Show a warm, respectful gallery of six family/cultural comfort practices from diverse communities, helping students see the many valid ways people support each other

Layout: A gentle circular or grid arrangement of six illustrated "family scenes," each showing a different comfort practice, with a shared center label reading "Ways Families Show They Care"

Scenes to show:
- A family sharing a comfort meal together at a table
- A grandparent singing softly to a child
- An elder telling a story to a group of children
- An extended family gathered together in a living room
- A parent and child on a quiet walk outside
- A family saying a comforting phrase or blessing together

Interactive elements:
- Hover or click each scene to reveal a short caption naming the practice and explaining how it helps someone feel supported
- No scene is marked as "better" than another; captions use equally warm, respectful language for each

Visual style: Soft, warm color palette; flat-style illustrations showing diverse families (varied skin tones, clothing styles, and home settings)
Color scheme: Warm neutral background with each scene highlighted in a different soft accent color when selected

Implementation: p5.js with click regions mapped to caption reveals; alternatively HTML/CSS grid with JavaScript hover/click handlers
</details>

### Recognizing Signs of Emotional Struggle

Sometimes a person's feelings become too big or too heavy to carry alone for a long time, and it helps everyone to notice **signs of emotional struggle** early. This does not mean something is wrong with a person — it means they need extra support, just like a person with a hurt ankle needs extra help walking for a while. Grade 1 students are learning to recall some common signs that a friend, classmate, or family member may be struggling emotionally, so they can tell a trusted adult and get that person help.

Common signs that someone may be struggling emotionally include:

- Seeming very sad or withdrawn for many days in a row, not just one afternoon
- Not wanting to play with friends anymore, when they used to enjoy it
- Getting upset, angry, or tearful much more easily than before
- Having trouble sleeping or eating as they usually would
- Saying things like "nobody likes me" or "I don't feel good inside" often
- Pulling away from family or friends and wanting to be alone a lot

If a Grade 1 student notices these signs in themselves or in someone else, the most important step is simple: tell a trusted adult. A trusted adult — a parent, teacher, school counselor, or another caring grown-up — knows how to help or find more support. Noticing these signs and speaking up is an act of caring, not tattling.

!!! mascot-encouraging "You Can Help by Telling a Trusted Adult"
    ![Scout encouraging](../../../../img/mascot/encouraging.png){ class="mascot-admonition-img" }
    If you notice these signs in yourself or a friend, telling a trusted adult is the right thing to do. You don't have to fix it yourself — you just have to tell someone who can help. That is a caring and brave thing to do.

#### Diagram: When to Tell a Trusted Adult

<iframe src="../../../../sims/when-to-tell-trusted-adult/main.html" width="100%" height="500px" scrolling="no"></iframe>
<details markdown="1">
<summary>When to Tell a Trusted Adult Workflow</summary>
Type: workflow
**sim-id:** when-to-tell-trusted-adult<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Bloom Taxonomy: Remember (L1)
Bloom Taxonomy Verb: recall, identify, recognize

Learning objective: Students recall common signs of emotional struggle and recognize that telling a trusted adult is always the right response.

Purpose: Show a simple, reassuring decision path from noticing a sign to getting help

Visual style: Simple vertical flowchart with rounded boxes, calm colors, no decision diamonds that could feel like a "test" — every path leads to the same caring outcome

Steps:
1. Start: "I notice something" — hover text: "Maybe a friend seems very sad for many days, or doesn't want to play anymore, or says 'I don't feel good inside.'"
2. Process: "I feel it myself, or I see it in someone else" — hover text: "It's just as important to notice this in yourself as it is to notice it in a friend."
3. Process: "I tell a trusted adult" — hover text: "A parent, teacher, school counselor, or another caring grown-up at home or school."
4. End: "The trusted adult helps" — hover text: "Trusted adults know how to help, or how to find more support — you don't have to solve it alone."

Every node includes a click handler opening an infobox with the hover text described above (Mermaid `click` directive on each node).

Color coding:
- Soft blue: noticing steps
- Soft green: telling a trusted adult
- Soft gold: getting help (end state)

Implementation: Mermaid flowchart with `click NodeId call showInfo("text")` directives on all four nodes, each opening an infobox with the corresponding hover text
</details>

### Bringing It All Together

This chapter explored five ideas about feelings: what feelings are and why every feeling is welcome, why talking about feelings with a trusted adult helps, how different situations bring up different feelings throughout a day, the many caring cultural and family traditions used to comfort one another, and the signs that show someone may need extra emotional support.

### Wrap-Up for Teachers

By the end of this chapter, most Grade 1 students should be able to identify a feeling and explain a likely cause, explain why talking about feelings matters, describe how a situation can change the way someone feels, describe at least one cultural or family comfort practice with respect, and recall common signs that someone may be struggling emotionally along with the correct response — telling a trusted adult. Keep the Signs of Emotional Struggle discussion calm, sincere, and reassuring; this is a bridge toward mental-health topics covered more fully in later grades, not a diagnostic exercise.

!!! mascot-celebration "Chapter Complete!"
    ![Scout celebrating with a party hat](../../../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    Wonderful work, friend! You've learned to name your feelings, share them with people who care about you, notice how situations shape your feelings, and recognize when someone might need extra support. Healthy choices, happy you!

??? note "Quick Check for Read-Aloud Time — Click to expand"
    Ask the class: "If you noticed a friend seemed very sad for many days in a row, what should you do?" Then reveal: Tell a trusted adult — a parent, teacher, or school counselor. You don't have to fix it yourself; trusted adults know how to help.
