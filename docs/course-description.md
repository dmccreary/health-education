# Course Description for Health Education Courses

<!--
This file is the seed document used by the learning-graph-generator skill to
enumerate concepts, build the dependency graph, and assign concepts to a
taxonomy. Keep it focused, concrete, and free of marketing language.

A good course description includes:

- **Title** — same as `site_name` in `mkdocs.yml`
- **Audience** — who this book is for and what they already know
- **Prerequisites** — concepts the reader is assumed to have mastered
- **Topics** — the major areas the book covers (typically 8–20 topics)
- **Bloom's Taxonomy outcomes** — what the reader should be able to *remember,
  understand, apply, analyze, evaluate,* and *create* by the end

Run the `course-description-analyzer` skill to validate completeness, then run
`learning-graph-generator` to enumerate ~200 concepts with dependencies.

-->

**Title:** Health Education

## Important: This Is Not a Single Course

This project is **not** a single linear course written for one age group. It
is a collection of health education teaching resources spanning Minnesota's
proposed K-12 Health Academic Standards (2025, Commissioner Approved — see
[references.md](references.md) and the harvest log at
`logs/harvest-mn-health-standards.md` in the project root),
organized into **8 parallel grade bands**:

- Kindergarten
- Grade 1
- Grade 2
- Grade 3
- Grade 4
- Grade 5
- Grades 6-8
- Grades 9-12

Every one of the 6 content strands below runs through all 8 bands. Each band
gets its own section of the site, and each section carries the **full set of
resource types** — chapter content, quizzes, MicroSims, infographics, and
references — written and calibrated for that band. A grade-3 learner and a
grades-9-12 learner studying the same strand (e.g., Personal Safety and
Violence Prevention) get different pages, different reading level, different
MicroSim complexity, and different quiz difficulty, not the same page with a
different reading age applied on the fly.

**Reading level scales with band.** Content generators (chapter-content-
generator, quiz-generator, microsim-generator, etc.) must target
band-appropriate reading level and cognitive complexity:

| Band | Approx. reading level | Cognitive demand (per MDE anchor standards) |
|------|-----------------------|----------------------------------------------|
| K | Pre-reader / read-aloud | Identify, recognize, name |
| 1-2 | Early elementary | Identify, describe, recall with simple support |
| 3-5 | Elementary | Explain, identify, connect to personal experience |
| 6-8 | Middle school | Analyze, evaluate influences, apply in scenarios |
| 9-12 | High school | Design, evaluate, synthesize, apply across contexts |

## Audience

K-12 classroom teachers, curriculum coordinators, and students, each
accessing the section that matches their grade band. Also health-standards
compliance staff cross-checking site content against MDE's proposed
benchmarks.

## Prerequisites

None assumed for the Kindergarten band. Each subsequent band assumes mastery
of the benchmarks in the band(s) before it, per that strand's own
progression — e.g., grade 3 Food and Nutrition benchmarks assume grade 1-2
Food and Nutrition benchmarks were covered. Prerequisite edges in the
learning graph should generally flow band-to-band within the same strand,
not across strands.

## Topics

The 6 strands from the MDE proposed standards are the primary topic axis;
each spans some or all of the 8 grade bands noted:

1. **Food and Nutrition** (K-12)
2. **Human Growth and Development** (K-5), continuing as **Human Growth and
   Development and Sexual Health** (6-12)
3. **Mental and Emotional Health** (K-12)
4. **Personal Health and Wellness** (K-12)
5. **Personal Safety and Violence Prevention** (K-12)
6. **Substance Use Awareness and Prevention** (6-12 only — not taught below
   grade 6)

Cutting across all 6 strands, the standards also define 8 **anchor
standards** that describe the skill/knowledge type of a given benchmark
(functional health knowledge, analyzing influences, accessing valid
information, interpersonal communication, decision-making, goal setting,
healthy practices/behaviors, promoting health/safety/wellbeing of self and
others). The learning-graph-generator should treat strand × band as the
concept-grouping axis and anchor standard as a tag/category on each concept,
not a separate topic.

## Learning Outcomes

Because outcomes scale by band, these are expressed as the progression
across bands rather than a single end-state. By the end of grades 9-12, a
student who has moved through all 8 bands in a strand will be able to:

- **Remember:** Recall core health vocabulary and facts introduced starting
  in Kindergarten (e.g., food groups, emotion names, safety rules).
- **Understand:** Explain why a health practice, behavior, or resource
  matters, in age-appropriate terms that grow more nuanced band over band.
- **Apply:** Use functional health knowledge and skills (communication,
  decision-making, goal setting) in realistic personal and social scenarios.
- **Analyze:** Evaluate influences on health behavior — media, peers,
  culture, advertising — with sophistication that increases from simple
  recognition (elementary) to critical evaluation (middle/high school).
- **Evaluate:** Assess the reliability of health information, products, and
  services, and judge trade-offs in personal health decisions.
- **Create:** Design a personal health plan, advocacy action, or
  peer-support strategy appropriate to the student's own life circumstances
  (grades 9-12 capstone-level outcome).

Content generators should produce **band-scoped versions** of these outcomes
per section rather than assuming every learner reaches the grades 9-12
outcome.
