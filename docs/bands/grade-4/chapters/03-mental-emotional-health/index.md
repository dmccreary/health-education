---
title: Mental and Emotional Health
description: Grade 4 chapter on self-regulation and cultural self-regulation practices, how emotions influence behavior and healthy management strategies, recognizing bias and prejudice, and responding safely to teasing and bullying, plus understanding that mental health changes over time and that culturally appropriate help is available.
generated_by: claude skill chapter-content-generator
date: 2026-07-06 16:08:37
version: 0.09
---

# Mental and Emotional Health

## Summary

This chapter covers self-regulation and cultural self-regulation practices and their mental health benefits, how emotions influence behavior, and healthy strategies for managing emotions. Students learn to recognize bias and prejudice, respond safely to teasing and bullying, and understand that mental health changes over time and that culturally appropriate help is available.

## Concepts Covered

1. Self-Regulation
2. Cultural Self-Regulation Practices
3. Mental Health Benefits Of Culture
4. Emotions Influence Behavior
5. Managing Emotions
6. Bias
7. Prejudice
8. Mental Health Changes Over Time
9. Culturally Appropriate Help
10. Responding To Teasing And Exclusion
11. Responding To Bullying

## Prerequisites

This chapter builds on
[Chapter 2: Growth and Development Across Cultures](../02-growth-and-development/index.md),
which introduces respecting cultural differences and the role of a trusted
adult, both of which this chapter's concepts depend on.

---

!!! mascot-welcome "Your Mind Matters, Too"
    ![Scout waving hello](../../../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Hi, friend! You already know that your body needs care — good food, rest, and movement. Your mind and feelings need care too, and that is exactly what this chapter is about. Let's think it through together.

## Self-Regulation

Everyone feels big emotions sometimes — excitement, frustration, worry, disappointment. What you do with those feelings makes a huge difference in how your day goes.

**Self-regulation** is the ability to notice a strong feeling and choose how to respond to it, instead of letting the feeling take over. It does not mean hiding your feelings or pretending you are not upset. It means giving yourself a moment to notice what you feel, name it, and pick a helpful next step.

Self-regulation is a skill, and like any skill, it gets stronger with practice. Some strategies that help many students self-regulate include:

- Taking several slow, deep breaths
- Counting slowly to ten
- Taking a short break to walk or stretch
- Squeezing a stress ball or pressing palms together
- Talking quietly to yourself about what you are feeling and why

!!! mascot-thinking "Big Idea"
    ![Scout thinking](../../../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Self-regulation is not about never feeling upset. It's about having a plan for what to do when you do feel upset.

#### Diagram: Self-Regulation Strategy Explorer

<iframe src="../../../../sims/self-regulation-strategy-explorer/main.html" width="100%" height="514px" scrolling="no"></iframe>
<details markdown="1">
<summary>Self-Regulation Strategy Explorer MicroSim</summary>
Type: microsim
**sim-id:** self-regulation-strategy-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: use, demonstrate, practice

Learning objective: Students apply self-regulation strategies by matching a short scenario showing a strong feeling to an appropriate calming strategy, then see the likely outcome of that choice.

Canvas layout:
- Left side (350px): A scenario card showing a short, realistic situation (e.g., "You got a lower grade than you hoped on a spelling test")
- Right side (250px): Four strategy buttons (Deep Breaths, Count to Ten, Take a Break, Talk It Out) plus a feedback panel

Visual elements:
- A simple thermometer-style "feeling intensity" bar that starts high (red zone) for each scenario
- Icons for each strategy (lungs for breathing, numbers for counting, a footprint for a break, a speech bubble for talking)

Interactive controls:
- Button: choose one of four strategies
- Button: "Next Scenario"
- Button: "Reset"

Default parameters:
- Scenario 1 loads with the feeling-intensity bar at "high"

Data Visibility Requirements:
  Stage 1: Show the scenario text and the starting feeling-intensity level
  Stage 2: Show the four strategy choices
  Stage 3: After a choice, show the feeling-intensity bar move down (any reasonable strategy lowers it) and a short explanation of why that strategy helps
  Final: Show a summary of which strategies were tried across all scenarios

Behavior:
- Any of the four strategies is treated as a valid, healthy choice and lowers the intensity bar somewhat, reinforcing that there is more than one right way to self-regulate
- A fifth hidden "unhealthy" option is not offered as a button; the sim focuses only on reinforcing healthy strategies rather than modeling unhealthy ones
- After choosing, a short affirming message explains the strategy (e.g., "Deep breaths slow your heart rate and give your brain a moment to think clearly")

Instructional Rationale: This is an Apply-level objective, so the design uses guided scenario practice with immediate feedback. Because self-regulation strategies are personal and many are equally valid, the simulation avoids ranking strategies against each other and instead reinforces that trying any healthy strategy is a good choice.

Implementation notes: Use p5.js. Store scenarios and strategy-specific feedback text as arrays of objects. Keep all scenarios about ordinary school and home situations (grades, waiting in line, a change of plans) rather than anything involving danger or harm.
</details>

## Cultural Self-Regulation Practices

Families and communities around the world have developed their own traditional ways of calming the mind and body, often long before the word "self-regulation" existed.

**Cultural self-regulation practices** are traditional methods, passed down through a culture or community, that help people calm strong emotions and find balance. These practices take many forms, and none of them is more "correct" than another — they are different paths toward the same goal of steadiness and calm.

Here are a few respectful examples from different traditions:

| Practice | Cultural Tradition | What It Involves |
|---|---|---|
| Mindfulness meditation | Buddhist traditions (South and East Asia, now practiced worldwide) | Sitting quietly and focusing attention on the breath |
| Prayer | Many faiths worldwide (Christian, Muslim, Jewish, Hindu, and others) | Quiet or spoken words of reflection, often at set times of day |
| Storytelling | Many Indigenous nations of North America and communities worldwide | Sharing traditional stories that teach lessons about patience and balance |
| Music and drumming | West African and Indigenous communities, among many others | Using rhythm and song to release tension and restore calm |
| Dance and movement | Many cultures, including Latin American and Pacific Islander communities | Using the body's movement to work through strong feelings |
| Connection to nature | Many Indigenous and rural traditions worldwide | Spending quiet time outdoors to feel calm and grounded |

!!! mascot-tip "Ask With Curiosity"
    ![Scout giving a tip](../../../../img/mascot/tip.png){ class="mascot-admonition-img" }
    If a classmate mentions a calming tradition from their family, a great response is, "That sounds interesting — can you tell me more?"

Before you explore the map below, remember that this is only a small sample of the many cultural self-regulation practices that exist. Every family and community has its own traditions, and many blend several together.

#### Diagram: World Map of Cultural Self-Regulation Practices

<iframe src="../../../../sims/world-map-self-regulation-practices/main.html" width="100%" height="542px" scrolling="no"></iframe>
<details markdown="1">
<summary>World Map of Cultural Self-Regulation Practices</summary>
Type: map
**sim-id:** world-map-self-regulation-practices<br/>
**Library:** Leaflet<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: describe, compare, exemplify

Learning objective: Students describe and compare examples of cultural self-regulation practices from around the world, recognizing that calming strong emotions can be done in many valid, culturally rooted ways.

Purpose: Show a respectful sample of cultural self-regulation traditions across regions, reinforcing that no single tradition is the "correct" way to self-regulate.

Geographic scope: World map with six marked regions/communities

Locations and examples:
- South/East Asia: mindfulness meditation traditions
- West Africa: music and drumming for releasing tension
- Northern Plains and other Indigenous nations of North America: storytelling and connection to nature
- Latin America and the Pacific Islands: dance and movement traditions
- Middle East, South Asia, and worldwide faith communities: prayer and quiet reflection
- A general "worldwide" marker: family-specific blended practices

Legend: A marker icon for each region labeled with the practice name

Interactive features:
- Click any marker to open an infobox with two to three respectful, factual sentences about that practice and how it helps calm strong emotions
- A closing note visible after clicking any two markers: "There are many more traditions than shown here. What matters is finding a calming practice that fits you and your family."

Color scheme: Warm, neutral marker colors (soft teal and gold) with no stereotyped imagery

Implementation: Leaflet map with custom markers and click-to-open infobox panels; content reviewed for respectful, non-stereotyping language before publication.
</details>

#### Diagram: Calm Is More Than One Thing

<iframe src="../../../../posters/calm-more-than-one-thing/main.html" width="100%" height="980px" scrolling="no"></iframe>
<details markdown="1">
<summary>Calm Is More Than One Thing Interactive Poster</summary>
Type: infographic
**poster-id:** calm-more-than-one-thing<br/>
**Library:** p5.js<br/>
**Status:** Published

Five garden rooms honor different healthy and culturally rooted ways to find steadiness.

Use **Explore** mode to select a section and learn more. Use **Quiz Me** mode to practice finding each idea.
</details>

## Mental Health Benefits Of Culture

Cultural self-regulation practices do more than calm a single tough moment — over time, staying connected to culture can support mental health in an ongoing way.

**Mental health benefits of culture** refers to the ways that cultural traditions, community connection, and shared identity can support a person's overall emotional well-being, not just in a single stressful moment but across a person's whole life. Feeling connected to family traditions, community celebrations, language, music, and shared history can build a steady sense of belonging — and that sense of belonging is closely tied to good mental health.

Researchers and health professionals have found that people who feel connected to their culture and community often have:

1. A stronger sense of identity and belonging
2. More people to turn to for support during hard times
3. Traditional coping practices that have been refined across generations
4. A feeling of being part of something larger than themselves

None of this means culture is the only thing that supports mental health, or that everyone experiences their culture the same way — but it does mean that cultural connection is a real, valuable resource, worth understanding and respecting in yourself and in others.

This is one reason why community celebrations, family holidays, and cultural clubs at school are not just fun extras — they genuinely support students' emotional well-being. A student who feels disconnected from their cultural background, perhaps because they moved to a new place or attend a school where few people share their traditions, can still build these same benefits by staying in touch with family, seeking out a community group, or learning more about their own family's history and stories.

!!! mascot-neutral "Belonging Matters"
    ![Scout listening thoughtfully](../../../../img/mascot/neutral.png){ class="mascot-admonition-img" }
    Feeling connected to your family's traditions and community is not just nice — it is genuinely good for your mental health.

## Emotions Influence Behavior

Now that you have some tools for calming strong feelings, it helps to understand exactly why those tools matter: emotions do not stay quietly inside — they shape what you actually do.

**Emotions influence behavior** describes the way feelings — like anger, excitement, fear, or sadness — often lead directly to actions, whether those actions are helpful or unhelpful. For example, frustration might lead one student to slam a book down, while it leads another student to ask for help. The emotion is the same; the behavior it leads to is a choice.

Recognizing this connection is powerful because it means behavior is not automatic — noticing an emotion early gives you a chance to choose your next action instead of reacting without thinking.

#### Diagram: Emotion-to-Behavior Pathway Map

<iframe src="../../../../sims/emotion-behavior-pathway-map/main.html" width="100%" height="557px" scrolling="no"></iframe>
<details markdown="1">
<summary>Emotion-to-Behavior Pathway Map</summary>
Type: graph-model
**sim-id:** emotion-behavior-pathway-map<br/>
**Library:** vis-network<br/>
**Status:** Specified

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: examine, differentiate, distinguish

Learning objective: Students analyze how a single emotion can branch into either a helpful or unhelpful behavior, distinguishing between the feeling itself and the choice made in response to it.

Purpose: Show that emotions are not "good" or "bad," but the behaviors that follow them can be more or less helpful, and that a person can choose which path to take.

Node types:
1. Emotion nodes (circle, gold): Frustration, Excitement, Fear, Sadness, Embarrassment
2. Behavior nodes (square): each emotion connects to one helpful behavior (green square) and one unhelpful behavior (gray square)

Edge types:
- LEADS TO (arrow from emotion to behavior), labeled with a short connecting phrase

Sample data:
- Frustration → LEADS TO → "Ask a trusted adult for help" (helpful, green) or "Slam materials down" (unhelpful, gray)
- Excitement → LEADS TO → "Channel energy into the activity" (helpful) or "Interrupt others without noticing" (unhelpful)
- Fear → LEADS TO → "Tell someone what is scary" (helpful) or "Avoid the situation without explaining why" (unhelpful)
- Sadness → LEADS TO → "Talk to a friend or trusted adult" (helpful) or "Withdraw from everyone silently" (unhelpful)
- Embarrassment → LEADS TO → "Laugh it off and move on" (helpful) or "Snap at whoever is nearby" (unhelpful)

Layout: Force-directed, with emotion nodes in a center column and behavior nodes branching left (unhelpful) and right (helpful)

Interactive features:
- Hover an emotion node: highlights both of its behavior branches
- Click a behavior node: opens an infobox explaining why that behavior is helpful or unhelpful, and what a self-regulation strategy from earlier in the chapter could do at that moment
- Drag, zoom, and pan supported

Visual styling: Green nodes for helpful behaviors, neutral gray for unhelpful behaviors, gold for emotions; edge labels describe the link (e.g., "can lead to")

Legend: Node shape/color key explaining emotion vs. helpful behavior vs. unhelpful behavior

Implementation: vis-network JavaScript library, force-directed layout, click-to-open side panel
Canvas size: responsive, minimum 700x450px
</details>

Feeling an emotion and choosing a behavior are two different steps. You cannot always control the feeling, but you can practice choosing the behavior.

## Managing Emotions

Recognizing that emotions influence behavior naturally leads to the next question: what are the actual, healthy strategies for managing those emotions well?

**Managing emotions** means using specific, healthy strategies to handle a strong feeling so it leads to a helpful behavior rather than an unhelpful one. This builds directly on self-regulation, but focuses on concrete steps you can use in the moment a feeling shows up.

Healthy strategies for managing emotions include:

- Naming the feeling out loud or in your head ("I feel frustrated right now")
- Using a self-regulation strategy, like slow breathing or a short break
- Talking to a trusted adult or friend about what happened
- Writing or drawing about the feeling
- Moving your body — a walk, a stretch, or shooting hoops
- Waiting until the strong feeling has settled before making a decision or saying something you might regret

Unhealthy patterns to watch for include bottling feelings up until they explode, taking feelings out on other people, or pretending a strong feeling does not exist. Noticing these patterns in yourself is the first step toward changing them.

Managing emotions well does not mean you will always get it right on the first try. Even adults are still practicing this skill. What matters is building the habit of pausing to notice a feeling before it turns into a behavior you might regret, and trying again next time if a strategy does not work as well as you hoped.

A useful habit to remember: name it, tame it, then act. Name the feeling, use a calming strategy to tame it, then choose your next action.

??? note "Quick Check — Click to expand"
    Question: A student feels embarrassed after tripping in the hallway and other students laugh. Name one healthy way to manage that feeling.

    Answer: Several healthy options work, including taking a slow breath, reminding yourself that everyone trips sometimes, laughing along if it feels okay, or talking to a friend or trusted adult about how it felt. Snapping at classmates or hiding for the rest of the day would not help the feeling pass in a healthy way.

## Bias

So far, this chapter has focused on your own feelings and behaviors. The next two ideas — bias and prejudice — describe patterns that can affect how people treat each other, and understanding them helps you recognize unfairness and respond to it.

**Bias** is an unfair leaning toward or against a person or group, often without even realizing it, usually based on limited or incomplete information. Everyone can develop biases, often without meaning to, because the brain naturally looks for patterns — but a pattern based on very little information can lead to an unfair assumption about a whole group of people.

For example, assuming a new student who speaks a different language at home will not be good at math, without any actual evidence, is a bias. Recognizing bias in yourself and others is not about blame — it is about noticing the assumption, questioning whether it is fair, and choosing to judge people by who they actually are instead.

#### Diagram: Recognizing Bias in Everyday Scenarios

<iframe src="../../../../sims/recognizing-bias-scenario-sorter/main.html" width="100%" height="522px" scrolling="no"></iframe>
<details markdown="1">
<summary>Recognizing Bias in Everyday Scenarios MicroSim</summary>
Type: microsim
**sim-id:** recognizing-bias-scenario-sorter<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: examine, distinguish, differentiate

Learning objective: Students analyze short, realistic classroom scenarios to distinguish between a fair, evidence-based judgment and a biased assumption made with limited information.

Canvas layout:
- Top (400px): A scenario card describing a short classroom situation
- Bottom (150px): Two labeled zones, "Fair Judgment" and "Biased Assumption," and one scenario card that the student drags to the correct zone

Visual elements:
- Neutral scenario icons only (no depictions of specific people's appearance)
- A calm color scheme: blue for "Fair Judgment" zone, soft amber for "Biased Assumption" zone (avoid red/wrong-answer coding, since the goal is reflection, not scorekeeping)

Interactive controls:
- Drag-and-drop scenario card into one of the two zones
- Button: "Next Scenario"
- Button: "Why?" to reveal an explanation after sorting

Default parameters:
- 8 scenario cards total, presented one at a time in random order

Data Visibility Requirements:
  Stage 1: Show the full scenario text
  Stage 2: Show the two sorting zones
  Stage 3: After sorting, show a calm explanation of why the scenario is a fair judgment (based on direct evidence) or a biased assumption (based on a stereotype or limited information)
  Final: Show how many scenarios were correctly identified, with an option to review any missed ones

Behavior:
- Correct sort: brief affirming message plus the explanation
- Incorrect sort: gentle correction plus the same explanation, framed as a learning moment rather than a failure

Instructional Rationale: This is an Analyze-level objective requiring learners to examine scenarios and distinguish evidence-based judgments from biased assumptions. A sorting interaction with reflection-based feedback (rather than a scored quiz) keeps the tone appropriate for this sensitive topic.

Implementation notes: Use p5.js. Keep all scenario text realistic, respectful, and focused on assumptions about ability, interests, or behavior rather than physical appearance or protected characteristics, to keep content classroom-appropriate for this age group.
</details>

## Prejudice

Bias describes an unfair leaning in someone's thinking. Prejudice describes what can happen when that unfair thinking becomes a fixed judgment.

**Prejudice** is a negative opinion or feeling about a person or group formed before knowing the facts, and held onto even when evidence shows it is not true. While bias can be a quick, sometimes unnoticed assumption, prejudice is a stronger, more fixed belief — and it is more likely to lead to treating someone unfairly.

Prejudice can be aimed at people because of their race, religion, culture, language, family background, ability, appearance, or many other things that make people different from one another. Left unchallenged, prejudice can lead to teasing, exclusion, or bullying — the topics covered later in this chapter.

The following table compares bias and prejudice so the difference stays clear:

| | Bias | Prejudice |
|---|---|---|
| What it is | An unfair leaning, often unnoticed | A fixed, negative opinion |
| How strong it is | Can be mild and quickly corrected | Usually stronger and harder to change |
| Awareness | Person may not realize they have it | Person may be aware but hold onto it anyway |
| What helps | Noticing the pattern and questioning it | Seeking real information and getting to know the person or group directly |

Recognizing bias and prejudice in the world, and sometimes in ourselves, is part of learning to treat every person fairly.

## Mental Health Changes Over Time

Just like physical health, mental health is not fixed — it moves up and down over the course of a life, and even over the course of a single week.

**Mental health changes over time** means that a person's emotional well-being can shift due to life events, growth, stress, relationships, and many other factors — sometimes getting stronger, sometimes becoming more difficult, much like physical health can improve or decline. A person who is doing well emotionally this month might go through a harder stretch next month, perhaps after a move, a loss, a change in friendships, or simply a stressful season — and that does not mean anything is permanently wrong with them.

This is an important idea to hold onto: struggling with your mental health sometimes is a normal part of being human, not a personal failure. Just as you would see a doctor for a physical illness that is not improving, it is appropriate and healthy to seek help when mental health struggles last a while or feel too big to manage alone.

#### Diagram: Mental Health Over Time — Interactive Timeline

<iframe src="../../../../sims/mental-health-over-time-timeline/main.html" width="100%" height="402px" scrolling="no"></iframe>
<details markdown="1">
<summary>Mental Health Over Time — Interactive Timeline</summary>
Type: timeline
**sim-id:** mental-health-over-time-timeline<br/>
**Library:** vis-timeline<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: describe, explain, interpret

Learning objective: Students describe how mental health can rise and fall over time in response to life events, just as physical health does, and explain that seeking help during a harder stretch is a normal, healthy response.

Purpose: Normalize the idea that mental health is dynamic, not fixed, using a relatable one-year example timeline.

Time period: A single representative school year (September through June)

Orientation: Horizontal, with a wavy line showing a "mental health level" rising and falling across the months

Events plotted along the wavy line:
- September: Starting a new school year (steady)
- November: A stressful stretch after losing a pet (dip)
- December: Time with family during a break (rise)
- February: A harder stretch after a friendship conflict (dip)
- March: Talking to a school counselor and feeling supported (rise begins)
- June: Feeling steady again at the end of the year (steady, higher than the February dip)

Visual style: A smooth wavy line graph with a calm color gradient; no numeric "score," just relative up/down movement, to avoid implying mental health is measured like a test grade

Color coding: Cool blue for dips, warm gold for rises, neutral gray for steady periods

Interactive features:
- Click any point on the line to open an infobox describing that life event and how it might affect mental health
- Click the March point specifically to reveal: "Reaching out for help during a harder stretch is one of the healthiest things a person can do — it's exactly like seeing a doctor for a physical illness."
- A closing note after exploring three or more points: "Notice that the line goes back up. Mental health can improve again after a harder stretch, especially with support."

Implementation: vis-timeline with a custom-rendered wavy overlay line and click-to-reveal infobox panels.
</details>

!!! mascot-encourage "Ups and Downs Are Normal"
    ![Scout encouraging](../../../../img/mascot/encouraging.png){ class="mascot-admonition-img" }
    If you're going through a harder stretch right now, that does not mean something is wrong with you forever. Mental health moves up and down for everyone, and it is okay to ask for support while you wait for things to get better.

## Culturally Appropriate Help

Knowing that mental health changes over time naturally raises a question: where can a student actually turn for help, especially help that respects their own background?

**Culturally appropriate help** means mental health support that respects a person's cultural background, language, family structure, and community practices, rather than expecting everyone to seek help in exactly the same way. Some students may feel most comfortable talking to a school counselor; others may prefer talking with a family elder, a religious or spiritual leader, a community health worker, or a trusted adult who shares their cultural background and language.

All of these are valid paths to support. What matters most is that the help offered actually respects who the student is — their language, their family's beliefs, and their community's practices — rather than requiring the student to set those things aside to get help.

If the first person a student talks to does not feel like the right fit, that is okay — it does not mean help is unavailable. It simply means it is worth trying a different trusted adult or community resource until the support feels respectful and helpful.

Some examples of culturally appropriate help available to students include:

1. A school counselor or school psychologist trained to work with students from many backgrounds
2. A trusted family member or community elder
3. A religious or spiritual leader or advisor, if that fits the family's beliefs
4. A community health worker who speaks the family's home language
5. A trusted teacher, nurse, or coach who has earned the student's trust

There is no single "right" person to talk to about a hard feeling. The right person is whoever helps you feel heard, safe, and respected.

## Responding To Teasing And Exclusion

Understanding bias, prejudice, and culturally respectful help gives you a foundation for one of the most practical skills in this chapter: knowing what to do when teasing or exclusion happens to you or someone nearby.

**Responding to teasing and exclusion** means using safe, healthy strategies when you are teased, left out, or treated unfairly, or when you see it happening to someone else. Teasing and exclusion can happen because of bias or prejudice, or simply because of a disagreement — but the response strategies below apply either way.

Here are healthy, safe steps for responding to teasing and exclusion:

1. **Use a calm, clear voice to say how it made you feel.** "I feel left out when I'm not invited. Can I join?"
2. **Walk away and find another group or activity** if the teasing continues.
3. **Tell a trusted adult**, especially if it keeps happening or feels unfair.
4. **If you see it happening to someone else**, consider including that person, or calmly telling an adult what you noticed.

No student is ever responsible for teasing or exclusion aimed at them — the responsibility always belongs to the person doing the teasing or excluding. Asking for help is always the right choice, and it never means someone has failed to handle it "on their own."

#### Diagram: Responding to Teasing and Exclusion — Decision Path

<iframe src="../../../../sims/teasing-exclusion-response-workflow/main.html" width="100%" height="842px" scrolling="no"></iframe>
<details markdown="1">
<summary>Responding to Teasing and Exclusion — Decision Path</summary>
Type: workflow
**sim-id:** teasing-exclusion-response-workflow<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: demonstrate, use, practice

Learning objective: Students demonstrate the correct sequence of safe, healthy responses when experiencing or witnessing teasing or exclusion.

Purpose: Give a clear, memorable decision path for responding to teasing or exclusion, whether experienced directly or witnessed.

Visual style: Mermaid flowchart with decision diamonds and process rectangles; every node has a click handler opening an infobox

Steps:
1. Start: "Teasing or exclusion happens (to you or someone else)"
   Hover/click text: "This could be being left out of a game, called a hurtful name, or excluded from a group."
2. Decision: "Is it happening to you, or are you seeing it happen to someone else?"
   Click text: "The response is a little different depending on which one it is."
3a. Process (to you): "Say calmly how it made you feel"
    Click text: "Example: 'I feel left out when I'm not invited. Can I join?'"
4a. Decision: "Did it stop?"
    Click text: "Sometimes a calm, clear statement is enough to resolve it."
5a. Process (if no): "Walk away and tell a trusted adult"
    Click text: "Continuing unfair treatment should always be reported to a trusted adult."
3b. Process (witnessed): "Consider including the person or calmly telling an adult"
    Click text: "You do not have to solve it yourself — noticing and including someone, or getting an adult involved, both help."
6. End: "Situation reported or resolved safely"
   Click text: "Whether resolved by a calm conversation or with an adult's help, asking for support is always a safe, correct choice."

Color coding: Blue for the "experienced it" branch, green for the "witnessed it" branch, gold for decision diamonds

Implementation: Mermaid flowchart syntax with `click` directives on every node calling a JavaScript function that opens an infobox with the hover/click text above.
</details>

If someone teases you or leaves you out, that is about their choice, not about your worth. You deserve to be treated with respect, and telling a trusted adult is always okay.

## Responding To Bullying

Teasing and exclusion can sometimes be occasional or accidental. Bullying is different, and it calls for its own clear response plan.

**Responding to bullying** means recognizing bullying — repeated, intentional unfair or hurtful behavior where one person has more power than the other — and using safe strategies to respond, whether it is happening to you or to someone you see. Bullying can be physical, verbal, or happen online, and it is never something a student is expected to handle entirely alone.

The most important response steps for bullying are:

1. **Stay as calm as possible and avoid fighting back physically.**
2. **Get to a safe place or safe group of people.**
3. **Tell a trusted adult right away** — a parent, teacher, counselor, or school staff member. Bullying should always be reported, even if it has already stopped.
4. **If you witness bullying**, do not join in. If it is safe to do so, calmly support the person being bullied, and always tell a trusted adult what you saw.
5. **Keep telling adults until it stops.** If one adult does not help enough, tell another one.

Bullying is different from a single disagreement or moment of teasing because it is repeated and involves an imbalance of power. Recognizing that difference helps you know when the stronger, more urgent steps above are needed.

| | Teasing / Exclusion | Bullying |
|---|---|---|
| Pattern | Can be a single incident | Repeated over time |
| Power | Roughly equal between students | One person has more power over the other |
| First response | Calm statement of feelings often helps | Get to safety and tell a trusted adult right away |
| Reporting | Tell an adult if it continues | Always tell a trusted adult, every time |

#### Diagram: From Bias to Belonging

<iframe src="../../../../posters/from-bias-to-belonging/main.html" width="100%" height="980px" scrolling="no"></iframe>
<details markdown="1">
<summary>From Bias to Belonging Interactive Poster</summary>
Type: infographic
**poster-id:** from-bias-to-belonging<br/>
**Library:** p5.js<br/>
**Status:** Published

Four classroom scenes move from noticing unfair assumptions to creating an inclusive community.

Use **Explore** mode to select a section and learn more. Use **Quiz Me** mode to practice finding each idea.
</details>

!!! mascot-celebration "Chapter Complete!"
    ![Scout celebrating with a party hat](../../../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    Great work, friend! You now understand self-regulation and the many cultural traditions that support it, how emotions influence behavior and how to manage them in healthy ways, how to recognize bias and prejudice, and how to respond safely to teasing and bullying. You also know that mental health changes over time and that culturally respectful help is always available. Healthy choices, happy you!

??? note "Quick Check — Click to expand"
    Question: What is the difference between bias and prejudice, and what is one safe first step if you are being bullied?

    Answer: Bias is an unfair leaning toward or against a person or group, often without realizing it, based on limited information. Prejudice is a stronger, fixed negative opinion held even when evidence shows it is untrue. If you are being bullied, a safe first step is to get to a safe place or group of people and tell a trusted adult right away — bullying should always be reported.
