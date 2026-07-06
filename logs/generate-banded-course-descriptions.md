# Log: Generating the 8 Banded Course Descriptions

Date: 2026-07-06

## Goal

Turn the single site-wide [course-description.md](../docs/course-description.md)
into 8 band-scoped course descriptions — one per grade band (Kindergarten,
Grade 1, Grade 2, Grade 3, Grade 4, Grade 5, Grades 6-8, Grades 9-12) — each
rich enough to seed its own `learning-graph-generator` run. This follows the
decision recorded in
[harvest-mn-health-standards.md](harvest-mn-health-standards.md) to build 8
per-band graphs rather than a single site-wide graph, since a single
200-concept graph spread across 8 bands x 6 strands would average out to
~4 concepts per band per strand — too shallow for real content generation.

## What was produced

Location: `docs/bands/<band-slug>/course-description.md` for each of the 8
bands. Every file follows the same structure:

1. **Intro** — links back to the site-wide course description and
   `references.md`, states the source document and benchmark-code format.
2. **Reading Level & Cognitive Demand** — a short paragraph naming the
   band's reading level and dominant cognitive verbs, plus any
   band-specific milestones (e.g., Grade 4 is where required mental-health
   instruction begins; Grade 6-8 is where Sexual Health and Substance Use
   Awareness first appear as strands).
3. **Audience / Prerequisites** — who the band is for and what the
   immediately-prior band assumes.
4. **Bridging Concepts for Students New to This Band** — a short
   plain-language recap of the essential ideas a student would need if they
   arrive at this band without having gone through the earlier ones. Added
   in a revision pass after the first draft, because this collection is
   designed to be accessed per-section rather than strictly sequentially
   (see [harvest-mn-health-standards.md](harvest-mn-health-standards.md)).
   Kindergarten has no bridging section (it's the entry point); Grade 6-8
   explicitly notes that Sexual Health and Substance Use Awareness have no
   real prior-band bridge, since they are new strands at that band for
   every student regardless of background.
5. **Topics** — every benchmark from that band in the source PDF, grouped
   by strand, tagged with its benchmark code (e.g. `6.6.1.3`) for
   traceability back to the standards document. This was also added in a
   revision pass — the first draft only sampled 3-6 benchmarks per strand,
   which was judged too thin.
6. **Key Vocabulary** — the domain terms introduced at that band.
7. **Learning Outcomes** — numbered list per Bloom's Taxonomy level (see
   detailed review below), added in a further revision pass replacing an
   original one-sentence-per-level format.

Total benchmark-tagged concepts across all 8 files: 21 (K) + 24 (Gr1) + 25
(Gr2) + 27 (Gr3) + 25 (Gr4) + 31 (Gr5) + 59 (Gr6-8) + 61 (Gr9-12) = 273,
i.e. every benchmark in the 2025 Minnesota K-12 Health Academic Standards
(Commissioner Approved) is now represented in some band's course
description, cited by its source code.

## Process notes

- All source material came from `pdftotext -layout` output of the
  Commissioner-Approved standards PDF (see
  [harvest-mn-health-standards.md](harvest-mn-health-standards.md) for how
  that was obtained — `poppler` was installed via Homebrew specifically for
  this).
- Content was drafted directly from the extracted text rather than
  delegated to sub-agents, to keep the strand-to-Bloom-level mapping
  internally consistent across all 8 files (a single author pass avoids 8
  independently-drifting interpretations of the same source verbs).
- `mkdocs build --strict` was re-run after each revision pass to confirm no
  broken links were introduced. The 8 band files are intentionally not in
  `mkdocs.yml` nav (they are generator-seed documents, not reader-facing
  pages) — MkDocs treats that as an informational notice, not a strict-mode
  failure.

## Detailed review: why the Bloom's Taxonomy structure looks this way

When every benchmark was tagged with a Bloom level, a clear and consistent
pattern emerged across the 8 bands:

| Band | Remember | Understand | Apply | Analyze | Evaluate | Create |
|------|----------|------------|-------|---------|----------|--------|
| Kindergarten | 14 | 5 | 4 | 4 | 0 | 1 |
| Grade 1 | 10 | 13 | 3 | 2 | 0 | 0 |
| Grade 2 | 4 | 14 | 4 | 2 | 1 | 0 |
| Grade 3 | 5 | 15 | 3 | 2 | 2 | 0 |
| Grade 4 | 3 | 13 | 4 | 2 | 1 | 3 |
| Grade 5 | 1 | 10 | 7 | 7 | 5 | 1 |
| Grade 6-8 | 3 | 21 | 9 | 21 | 2 | 5 |
| Grade 9-12 | 2 | 7 | 6 | 19 | 29 | 5 |

This is **not an artifact of subjective categorization** — it falls directly
out of the cognitive verbs the Minnesota standards committee itself chose
for each grade/band ("identify" at Kindergarten vs. "evaluate" or "apply
skill cues to evaluate" at Grades 9-12). The mapping rule used throughout
was: identify/name/recognize/recall → Remember; describe/explain/summarize
→ Understand; demonstrate/use/practice/apply → Apply;
analyze/compare/examine/distinguish → Analyze; evaluate/determine
validity/judge/assess → Evaluate; design/develop/construct/formulate/plan →
Create. A handful of benchmarks combine two verbs (e.g., "describe and
evaluate," "identify and research"); these were split across both levels
where genuinely warranted, which is why some per-band totals slightly
exceed the raw benchmark count for that band.

**Why Remember dominates early and nearly vanishes late.** Kindergarten has
14 Remember-level outcomes against 0 Evaluate and only 1 Create, because
5- and 6-year-olds are still building the vocabulary and factual base
(food groups, body-part names, feelings, trusted adults) that every later
band's higher-order reasoning depends on. You cannot ask a student to
*evaluate* a nutrition claim before they can *recall* what a food group is.
By Grades 9-12 this inverts almost completely (2 Remember items vs. 29
Evaluate items) — the factual base is assumed complete, and the standards
shift entirely to judgment, synthesis, and application in ambiguous
real-world contexts.

**Why Understand is the largest single category from Grade 1 through
Grade 6-8.** Explaining *why* (why breakfast matters, why germs spread, why
consent differs from coercion) is the bridge between bare recall and
independent reasoning, and it's where most instructional time in a K-8
health classroom is genuinely spent — internalizing a concept well enough
to explain it in your own words, before you're asked to critique or design
with it. It only recedes at Grades 9-12 (7 items) because by then most
"why" questions have graduated into Analyze or Evaluate framings (e.g.,
Grade 4's "explain the effects of sugary and salty foods" becomes Grade
9-12's "evaluate personal beverage choices using evidence").

**Why Analyze grows steadily and then jumps sharply at Grade 6-8.** Grades
K-5 have only 2-7 Analyze items per band — simple comparisons (two drinks,
two foods) that a concrete-reasoning-stage child can manage. Grade 6-8 jumps
to 21 because this is the band where the standards introduce two entirely
new, higher-complexity strands (Sexual Health and Substance Use Awareness)
and consistently phrase their skill benchmarks as "apply skill cues to
analyze," reflecting that early-adolescent students are cognitively ready
for multi-factor reasoning (peer pressure + power dynamics + digital
communication, or advertising + policy + health disparities) that would be
developmentally premature at Grade 5.

**Why Evaluate is absent at K-1, thin through Grade 4, and dominant at
9-12.** True evaluation — weighing competing options against criteria,
judging the validity of a source, deciding a course of action under
uncertainty — requires abstract reasoning that Piagetian-informed curricula
(and this standards committee, explicitly) don't expect before roughly age
8-9. The first genuine Evaluate benchmark appears at Grade 3 ("evaluate
personal behaviors to prevent injuries," `3.5.1.2`). It stays a minority
skill through Grade 6-8 (only 2 items — surprising at first, but consistent
with 6-8's benchmarks being phrased as "analyze" even where a lay reader
might expect "evaluate," e.g. warning-sign recognition is Analyze, not yet
full risk-judgment). It becomes the dominant level at Grades 9-12 (29
items) because that band's benchmarks are almost entirely
evaluation-of-evidence and judgment-under-complexity — "evaluate how
substance use affects mental health, brain function, and overall
physiological health," "evaluate school safety practices and policies" —
matching the standards' own stated goal of career/college/community
readiness.

**Why Create is essentially absent before Grade 4 and never becomes the
largest category anywhere.** The first genuine plan/design/construct
benchmark appears at Grade 4 ("plan a balanced meal," "develop a [goal]
plan," "construct a position... from research"). Before that, goal-setting
benchmarks use verbs like "identify" or "determine actions" — closer to
Analyze than true original construction. Create stays modest (1, 3, 1, 5, 5
items across Grades 5 through 9-12) because health education, unlike a
studio or engineering-design course, treats "create" as a capstone
application (design a nutrition plan, formulate a health-advocacy message)
rather than the primary mode of the discipline — most of the standards'
cognitive weight is in understanding health information and evaluating
choices, not manufacturing novel artifacts.

**Practical implication for downstream generators.** This distribution
should directly shape how `chapter-content-generator`, `quiz-generator`, and
`microsim-generator` treat each band:

- K-1 content and quizzes should be almost entirely recall/identification
  (matching pictures to names, "which one is the trusted adult") — forcing
  an evaluate-style "which is the better choice" quiz question here would
  outrun what the standards themselves ask of a 5-year-old.
- Grades 2-5 should lean on describe/explain content (short passages,
  narrated MicroSims) with a growing minority of simple two-option
  comparisons.
- Grade 6-8 needs multi-factor scenario content — this is where MicroSims
  can start modeling systems with several interacting inputs (peer
  pressure + media + policy), matching the jump in Analyze-level
  benchmarks.
- Grades 9-12 should be built around evidence evaluation and case-study
  judgment — quiz stems that present a scenario and ask the student to
  weigh options, not just recall a fact.
- The learning graph's prerequisite edges should generally track Bloom
  level bottom-up *within* a strand across bands: a Kindergarten
  Remember-level nutrition concept should be a stated prerequisite of the
  Grade 5 Analyze-level version of the same concept, which in turn
  prerequisites the Grade 9-12 Evaluate/Create-level version.

## Open follow-ups

- The Bloom-level tagging above was done by a single author pass reading
  benchmark verbs directly; it has not been independently reviewed by a
  second pass. Worth a spot-check before it's treated as authoritative,
  especially for benchmarks that combine two verbs and were split across
  levels.
- None of the 8 band `course-description.md` files are wired into
  `mkdocs.yml` nav (unchanged from the prior log — still by design).
- Next step per the prior conversation: run `learning-graph-generator`
  band-by-band, starting with Kindergarten as the smallest test case.
