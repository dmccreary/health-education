---
title: Learning Graph — Grade 2
description: Introduction to the Grade 2 band learning graph.
---

# Learning Graph — Grade 2

This section contains the learning graph for the Grade 2 band of the
*Health Education* intelligent textbook. A learning graph is a graph of
concepts used in this band. Each concept is represented by a node in a
network graph. Concepts are connected by directed edges that indicate what
concepts each node depends on before that concept is understood by the
student.

A learning graph is the foundational data structure for intelligent
textbooks that can recommend learning paths. A learning graph is like a
roadmap of concepts to help students arrive at their learning goals.

At the left of the learning graph are prerequisite or foundational concepts.
They have no outbound edges. They only have inbound edges for other concepts
that depend on understanding these foundational prerequisite concepts. At
the far right we have the most advanced concepts in the band. To master
these concepts you must understand all the concepts that they point to.

This band's graph is intentionally smaller than a general-purpose graph — 55
concepts rather than 200 — because Grade 2 health benchmarks are
identify/describe-level content, with emerging comparison and simple
cause-effect reasoning, for 7-8 year olds (see the
[Course Description Assessment](./course-description-assessment.md) for the
rationale). It builds directly on the Kindergarten (45-concept) and Grade 1
(55-concept) bands' graphs and uses the same 7-category taxonomy for
cross-band comparability.

## Course Description

We use the [Course Description](../course-description.md) as
the source document for the concepts that are included in this band.
The course description uses the 2001 Bloom taxonomy to order learning objectives.

## List of Concepts

We use generative AI to convert the course description into a [Concept List](./concept-list.md).
Each concept is in the form of a short Title Case label with most labels under 32 characters long.

## Concept Dependency List

We next use generative AI to create a Directed Acyclic Graph (DAG). DAGs do not have cycles where
concepts depend on themselves. We provide the DAG in two formats. One is a [CSV file](learning-graph.csv) and the other
format is a [JSON file](learning-graph.json) that uses the vis-network JavaScript library format. The vis-network format uses `nodes`, `edges` and `metadata`
elements with edges containing `from` and `to` properties. This makes it easy for you to view and edit the learning
graph using an editor built with the vis-network tools.

## Analysis & Documentation

### Course Description Quality Assessment

This report rates the overall quality of the course description for the purpose of generating a learning graph.

- Course description fields and content depth analysis
- Validates course description has sufficient depth for generating a right-sized concept set for this band
- Compares course description against similar bands
- Identifies content gaps and strengths
- Suggests areas of improvement

[View the Course Description Quality Assessment](course-description-assessment.md)

### Learning Graph Quality Validation

This report gives you an overall assessment of the quality of the learning graph.
It uses graph algorithms to look for specific quality patterns in the graph.

- Graph structure validation - all concepts are connected
- DAG validation (no cycles detected)
- Foundational concepts: 1 entry point (Health)
- Indegree distribution analysis
- Longest dependency chains
- Connectivity: percent of nodes connected to the main cluster

[View the Learning Graph Quality Validation](quality-metrics.md)

### Concept Taxonomy

In order to see patterns in the learning graph, it is useful to assign colors
to each concept based on the concept type. We use generative AI to
create categories for our concepts and then place each concept
into a single primary classifier. This band uses 7 categories, seeded from
its five content strands plus a cross-cutting Skill Standards group — the
same scheme used for Kindergarten and Grade 1.

- A concept classifier taxonomy with 7 categories
- Category organization - foundational elements first
- Balanced categories (1.8% - 25.5% each)
- All categories under the 30% threshold
- Clear 3-5 letter abbreviations for use in the CSV file

[View the Concept Taxonomy](concept-taxonomy.md)

### Taxonomy Distribution

This report shows how many concepts fit into each category of the taxonomy.
Our goal is a somewhat balanced taxonomy where each category holds a
reasonable number of concepts. We also don't want any category to contain
over 30% of our concepts.

- Statistical breakdown
- Detailed concept listing by category
- Visual distribution table
- Balance verification

[View the Taxonomy Distribution Report](./taxonomy-distribution.md)
