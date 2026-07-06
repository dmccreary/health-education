# Harvest Log: Minnesota Health Education Standards

Date: 2026-07-06

## Goal

Locate the authoritative source for Minnesota K-12 health education content
and confirm whether it breaks content down by age/grade band, so this
textbook's chapter and grade-tier structure can be built on top of it.

## What was checked

1. **MDE landing page** — <https://education.mn.gov/MDE/dse/stds/hpe/>
   General overview of MN health education requirements: cannabis/substance-use
   prevention and mental health instruction both required starting the
   2026-2027 school year. Links to the "K-12 Health Standards Legislation" PDF
   and a post-hearing public comment portal, but not the actual standards
   text.

2. **Health Standards Review and Revision page** —
   <https://education.mn.gov/MDE/dse/stds/hpe/healthstand/>
   Found the full document trail:
   - First draft (3/19/25)
   - Second draft (6/20/25)
   - **2025 Minnesota K-12 Health Academic Standards — Commissioner Approved
     (12/15/25)** — the proposed standards document
   - Statement of Need and Reasonableness (SONAR) (12/15/25)
   - Notice of rulemaking hearing (April 13-14, 2026)

3. **Fetched the Commissioner-Approved PDF directly.** WebFetch could not
   parse the raw PDF text (binary/font-stream noise), so the file was saved
   locally and read with `pdftotext -layout` (installed via `brew install
   poppler`, not previously present on this machine). Full extracted text is
   at the scratchpad path used during the session (not committed to the
   repo — re-fetch the PDF if needed again).

## Confirmed structure of the proposed standards

- **8 anchor standards**: Standard 1 = functional health knowledge (the
  "what"); Standards 2-8 = transferable skills (the "how") — analyzing
  influences, accessing valid/reliable information, interpersonal
  communication, decision-making, goal setting, healthy practices/behaviors,
  and promoting health/safety/wellbeing of self and others.
- **6 strands** (common across all grades except where noted):
  1. Food and Nutrition (K-12)
  2. Human Growth and Development (K-5) → Human Growth and Development and
     Sexual Health (6-12)
  3. Mental and Emotional Health (K-12)
  4. Personal Health and Wellness (K-12)
  5. Personal Safety and Violence Prevention (K-12)
  6. Substance Use Awareness and Prevention (6-12 only)
- **Grade organization**: individual tables for grades K, 1, 2, 3, 4, 5, then
  grade-band tables for 6-8 and 9-12. Benchmarks are coded
  `<grade>.<strand>.<anchor>.<sequence>`, e.g. `0.3.1.1` (kindergarten,
  Mental and Emotional Health, Standard 1) or `9.1.1.1` (grades 9-12, Food
  and Nutrition, Standard 1).
- **Developmental progression confirmed by direct read**: K benchmark
  `0.3.1.1` — "Recognize and name one's feelings" — vs. grades 9-12
  benchmark `9.1.1.1` — "Design a nutrition plan that meets personal needs
  and preferences." Same anchor-standard family, materially higher cognitive
  demand at the older band.

## Legal status (as stated by MDE, not independently verified beyond their site)

Commissioner-approved December 2025; went through an administrative
rulemaking hearing April 13-14, 2026; public comment period closed
2026-05-04. Per MDE, locally developed standards remain in effect until
statewide adoption formally completes. This document is the finalized
*proposed* content — the source of truth this course is choosing to build
against ahead of formal adoption.

## Where this landed in the repo

- [docs/references.md](../docs/references.md) — added the MDE landing page,
  the Commissioner-Approved standards PDF (marked as the source used to
  design this course's age/grade tiers), the SONAR document, and the
  Health Standards Review and Revision drafts page.
- [docs/course-description.md](../docs/course-description.md) — rewritten to
  reflect the 6 strands and grade bands as parallel resource tracks rather
  than a single linear course (see that file for the current structure).
- **2026-07-06, follow-up**: created 8 band-scoped course descriptions, one
  per grade band, each grounded in that band's actual benchmarks pulled from
  the extracted PDF text (not invented): `docs/bands/kindergarten/`,
  `docs/bands/grade-1/` through `docs/bands/grade-5/`,
  `docs/bands/grade-6-8/`, and `docs/bands/grade-9-12/`, each containing a
  `course-description.md`. Decision: run `learning-graph-generator` once per
  band against these files rather than once for the whole site — a single
  200-concept graph spread across 8 bands x 6 strands would average ~4
  concepts per band per strand, too shallow for real content generation.
  Grade 5 and Grades 9-12's Personal Health & Wellness / Personal Safety
  strands were sampled but not exhaustively transcribed — flagged inline in
  those two files as a follow-up before finalizing those bands' learning
  graphs.
- **2026-07-06, enrichment pass**: the 8 band course descriptions were judged
  too thin to seed a high-quality learning graph (only 3-6 sample benchmarks
  per strand). Re-read the full extracted PDF text for every band (including
  Grade 5, 6-8, and 9-12, which had only been partially sampled before) and
  rewrote all 8 files to enumerate **every single benchmark** in the source
  standards as a concept, tagged with its benchmark code (e.g. `6.6.1.3`) for
  traceability back to the PDF. Also picked up Appendix A of the source PDF
  (the 2024 legislation's required health-related subject areas — CPR/AED,
  vaping, cannabis/fentanyl, STI/HIV/HPV prevention, mental health/suicide
  prevention — plus a second list of topics still open for public input:
  child sexual abuse prevention, violence prevention, character development,
  safe/supportive schools) and referenced it in the 6-8 and 9-12 files where
  those mandates land. Added a **"Bridging Concepts for Students New to This
  Band"** section to every file (except Kindergarten, the entry point) — a
  short plain-language recap of the prior band's essential ideas, written
  because this collection is accessed per-section rather than strictly
  sequentially, so a student or teacher may land on, say, Grade 6-8 without
  having gone through K-5 first. Explicitly noted in the Grade 6-8 file that
  Sexual Health and Substance Use Awareness have no true prior-band bridge —
  they're new content at that band for every student. Added a "Key
  Vocabulary" list per band. Resulting concept-tag counts per band: K=21,
  Grade 1=24, Grade 2=25, Grade 3=27, Grade 4=25, Grade 5=31, Grade 6-8=59,
  Grade 9-12=61 (counted via
  `grep -oE '`[0-9]+(-[0-9]+)?\.[0-9]+\.[0-9]+\.[0-9]+`'` over each file).
- **2026-07-06, Bloom's expansion**: the Learning Outcomes section in each
  band file was one sentence per Bloom's level (6 sentences total) — judged
  too thin. Rewrote every band's Learning Outcomes as a numbered list per
  level, mapping every benchmark from that band's Topics section to a Bloom
  tier by its cognitive verb (identify/name → Remember; describe/explain →
  Understand; demonstrate/use/apply → Apply; analyze/compare/examine →
  Analyze; evaluate/determine validity/judge → Evaluate;
  design/develop/construct/formulate → Create). Item counts per level per
  band (Remember/Understand/Apply/Analyze/Evaluate/Create): Kindergarten
  14/5/4/4/0/1, Grade 1 10/13/3/2/0/0, Grade 2 4/14/4/2/1/0, Grade 3
  5/15/3/2/2/0, Grade 4 3/13/4/2/1/3, Grade 5 1/10/7/7/5/1, Grade 6-8
  3/21/9/21/2/5, Grade 9-12 2/7/6/19/29/5. Where a level is genuinely absent
  at a band per the standards themselves (e.g. Evaluate and Create at
  Kindergarten/Grade 1), said so explicitly rather than padding with
  invented content — the standards deliberately concentrate lower Bloom
  levels in early grades and Evaluate/Create in Grade 4+, peaking at
  Evaluate in Grades 9-12.

## Open follow-ups

- Re-fetch the PDF if strand/benchmark details are needed again — the
  extracted text was not committed to the repo.
- Watch <https://education.mn.gov/MDE/dse/stds/hpe/healthstand/> for the
  ALJ report and final adopted rule; update this log and
  `docs/references.md` once formal adoption status changes.
- ~~Before running `learning-graph-generator` on Grade 5 or Grades 9-12,
  re-fetch the source PDF and fill in the Personal Health & Wellness /
  Personal Safety benchmark gaps~~ — resolved in the 2026-07-06 enrichment
  pass; all 8 files now enumerate every benchmark from the source PDF.
- None of the 8 band `course-description.md` files are wired into
  `mkdocs.yml` nav yet (by design — they are generator-seed documents, not
  reader-facing pages). Revisit once each band's chapters/learning graph
  exist and a "Bands" nav section is designed.
