# Field Writing Standard

## Purpose

This is a portfolio-specific controlled writing system inspired by the goals of Simplified Technical English and technical-manual structure. It is not ASD-STE100 compliant and does not reproduce the official controlled dictionary.

Its purpose is to make Design Engineer case studies faster to write, easier to scan, and harder to misunderstand.

## Primary rules

### FWS-01 — Use one name for one concept

Select the most accurate term. Reuse it throughout the page. Create a distinction only when the difference matters.

### FWS-02 — Lead with the meaningful fact

Start a section with the problem, result, constraint, or decision. Avoid chronological warm-up paragraphs.

### FWS-03 — State ownership precisely

Use `I` for work Nick personally completed or decisions he personally made. Use `we` only for shared work. Name collaborators or functions when the boundary matters.

### FWS-04 — Use one major idea per paragraph

A paragraph may contain supporting detail, but it should have one clear purpose.

### FWS-05 — Separate facts, evidence, and interpretation

Do not turn a belief, anecdote, or proxy into a metric. Qualify uncertain claims.

### FWS-06 — Prefer concrete verbs

Use verbs that reveal the work: designed, built, defined, tested, documented, replaced, reduced, connected, standardized, validated, shipped, or measured.

### FWS-07 — Retain necessary technical terms

Do not simplify accurate technical language into vague product language. Explain a term only when the reader needs the explanation.

### FWS-08 — Put conditions before actions

Example:

> Because the component had to support three brands, I separated semantic meaning from raw color values.

### FWS-09 — Use lists for parallel information

Use a list for constraints, responsibilities, requirements, or outcomes that would become dense in a sentence.

### FWS-10 — Use atmosphere in labels, not explanations

Metadata and module labels may use the Industrial Field System. Explanatory prose should remain direct and human.

### FWS-11 — Remove process theater

Do not document every workshop, sketch, or iteration. Include only activities that explain a consequential decision.

### FWS-12 — Do not invent evidence

Use a visible placeholder when information is missing. A truthful gap is stronger than a polished fiction.

## Preferred verbs

- Analyze
- Build
- Clarify
- Compare
- Connect
- Define
- Design
- Document
- Implement
- Measure
- Model
- Prototype
- Reduce
- Replace
- Review
- Ship
- Simplify
- Standardize
- Test
- Validate

## Words to treat with suspicion

These are not forbidden, but they often conceal weak thinking:

- Align
- Craft
- Delight
- Drive
- Elevate
- Empower
- Enable
- Facilitate
- Holistic
- Ideate
- Impactful
- Innovative
- Intuitive
- Leverage
- Optimize
- Seamless
- Spearhead
- Transform
- Utilize

When using one, ask whether a more concrete statement is available.

## Structural vocabulary

Use selectively for headings, labels, and modules:

| Term           | Intended use                                |
| -------------- | ------------------------------------------- |
| Brief          | Concise project summary                     |
| Context        | Conditions surrounding the work             |
| System         | Connected product or technical elements     |
| Field          | Bounded area of work or exploration         |
| Artifact       | Concrete design or implementation evidence  |
| Constraint     | Condition that limited the solution         |
| Decision       | Meaningful choice with rationale            |
| Record         | Documented decision or observation          |
| Signal         | Evidence that informed a choice             |
| Specification  | Explicit implementation requirement         |
| Module         | Reusable content or interface unit          |
| Interface      | Customer-facing or system-facing surface    |
| Infrastructure | Shared foundation that enables product work |
| Implementation | How the solution was built                  |
| Validation     | How a claim or solution was tested          |
| Evidence       | Metric, behavior, test, or feedback         |
| Outcome        | What changed                                |
| Status         | Current state                               |
| Review         | Evaluation of work or quality               |
| Revision       | Documented change or future correction      |
| Note           | Supporting technical information            |
| Archive        | Older or secondary work                     |

## Vocabulary to avoid as decoration

- Battle-tested
- Classified
- Combat
- Command
- Intelligence
- Mission
- Operator
- Reconnaissance
- Tactical
- Target
- War room
- Weapons language

Use `deploy` only for a real software or infrastructure deployment.

## Sentence patterns

### Condition → decision → reason

> Because each brand used different raw values, I introduced semantic tokens that could preserve component behavior across themes.

### Problem → ownership → result

> The three systems described the same patterns differently. I mapped the shared semantics and defined a single component contract.

### Evidence → interpretation → limitation

> Teams adopted the documented component in two active workflows. This indicated that the API was usable, although we did not yet have reliable data on implementation time.

### Tradeoff

> A more flexible API would support additional edge cases, but it would also increase implementation ambiguity. I kept the first release narrow and documented an extension path.
