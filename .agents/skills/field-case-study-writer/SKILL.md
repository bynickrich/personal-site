---
name: field-case-study-writer
description: Draft, rewrite, structure, and review Nick Richardson's Design Engineer portfolio case studies and project copy using the Industrial Field System, controlled plain language, and a clarity-first hiring strategy. Use for case studies, project summaries, artifact captions, decision records, implementation notes, outcome sections, and portfolio content audits. Do not use for unrelated marketing copy, general technical documentation, or literal military roleplay.
---

# Field Case Study Writer

Create portfolio content that positions Nick Richardson as a frontend-leaning Design Engineer with senior product-design judgment. The writing must prove the bridge between product thinking, systems, interface craft, and production implementation.

The visual and verbal theme is an editorial wrapper. It must never obscure the hiring story.

## Required references

Before drafting or editing portfolio content, read the relevant files in `references/`:

1. `portfolio-strategy-brief.md` — source of truth for positioning, project priority, hiring signals, architecture, and case-study requirements.
2. `portfolio-visual-direction.md` — source of truth for the Industrial Field System, copy tone, vocabulary, and anti-patterns.
3. `field-writing-standard.md` — controlled-language rules and preferred terminology.
4. `case-study-template.md` — default case-study structure and section requirements.
5. `review-checklist.md` — final quality gates.
6. `examples.md` — examples of acceptable and unacceptable transformations.

Do not silently replace or contradict these references with generic portfolio advice.

## Core objective

Every finished piece should help a hiring manager conclude:

> Nick is a frontend-leaning Design Engineer who combines product judgment with production-ready frontend craft to build polished, accessible, system-driven software.

Prioritize, in this order:

1. Hiring clarity
2. Credible evidence
3. Ownership and judgment
4. Product and customer context
5. Systems and implementation depth
6. Editorial atmosphere

Use an approximate ratio of 70% clarity to 30% visual worldbuilding.

## Activation boundaries

Use this skill when the user asks to:

- Draft a portfolio case study or project page.
- Rewrite existing case-study copy.
- Convert notes, interviews, or project artifacts into portfolio content.
- Review portfolio copy for clarity, credibility, structure, or tone.
- Create project summaries, artifact captions, decision records, technical notes, outcome panels, or reflections.
- Align portfolio content with the Industrial Field System.

Do not use this skill for:

- General product documentation unrelated to the portfolio.
- Generic company marketing copy.
- Fictional military lore or roleplay.
- Resume or LinkedIn writing unless the user explicitly asks to apply the same standards.
- Claims of compliance with ASD-STE100 or any military specification.

This skill is inspired by controlled technical writing. It is not an implementation of the full ASD-STE100 dictionary and must never claim formal compliance.

## Operating modes

Determine the requested mode from the task.

### Draft

Create new content from supplied evidence. Do not invent metrics, scope, users, ownership, dates, technologies, or outcomes. Mark unresolved facts with concise placeholders such as:

- `[NEEDS EVIDENCE: adoption signal]`
- `[CONFIRM: exact team size]`
- `[ADD ARTIFACT: component API example]`

### Rewrite

Improve existing content while preserving factual meaning. Keep project-specific terminology when it is accurate. Remove vague language, duplicated ideas, inflated claims, and unnecessary process narration.

When editing files, preserve valid frontmatter, MDX components, imports, links, and code unless the task requires changing them.

### Structure

Turn raw material into the case-study structure in `references/case-study-template.md`. Group evidence by purpose rather than by chronology. Do not create process theater.

### Review

Assess content without rewriting everything unless asked. Report the most important issues first. Evaluate:

- Positioning signal
- Customer and product context
- Ownership clarity
- Decision quality
- Implementation proof
- Evidence and outcomes
- Readability
- Theme restraint

### Repository implementation

Before creating or modifying portfolio files:

1. Inspect the repository structure and existing content conventions.
2. Identify the framework, content format, routing, frontmatter, and reusable case-study components.
3. Reuse existing content components and naming conventions where they support the strategy.
4. Do not introduce a new content system, dependency, schema, or component library unless the user asks.
5. Run available format, lint, type, and content validation commands after edits.

## Evidence-first workflow

Follow this sequence for substantive case-study work.

### 1. Inventory the evidence

Extract only what the available sources support:

- Project and organization
- User or customer
- Problem
- Business or product importance
- Nick's role and ownership
- Collaborators and team boundaries
- Timeline
- Constraints
- Key decisions
- Design artifacts
- Technical implementation
- Accessibility, testing, responsive, or performance work
- Outcomes and proxy outcomes
- Reflection and next measurements

Separate known facts from assumptions. Never smooth over missing evidence with persuasive language.

### 2. Identify the hiring argument

State internally what the project proves. Prefer one primary argument and up to two supporting arguments.

Examples:

- Quality infrastructure and design-to-code alignment
- Product judgment in a complex customer workflow
- Public proof of frontend toolmaking
- Accessibility and interaction quality that survived implementation

Do not force every project to prove every capability.

### 3. Select the minimum useful structure

Use the full template for flagship case studies. Shorter project entries can use:

1. Brief
2. Responsibility
3. Key decision or implementation proof
4. Outcome
5. Reflection or next step

Do not add sections that contain no meaningful evidence.

### 4. Draft in plain language

Use active voice, concrete nouns, and specific verbs. Lead with the result or condition that matters. Keep each paragraph focused on one major idea.

### 5. Add operational texture carefully

Use field-manual vocabulary mainly in labels, metadata, and reusable modules. Body copy should sound like a mature Design Engineer, not a military brand.

Acceptable examples:

- `PROJECT 01 / QUALITY INFRASTRUCTURE`
- `DECISION RECORD 03`
- `IMPLEMENTATION NOTE`
- `EVIDENCE / ACCESSIBILITY REVIEW`

Unacceptable example:

> The design systems unit deployed a tactical token framework across the product theater.

### 6. Verify the result

Apply every relevant gate in `references/review-checklist.md`. Revise failures before finishing.

## Writing rules

### Name each concept consistently

Choose one accurate term for each concept and reuse it. Do not cycle through synonyms merely for variety.

Bad:

> library, UI kit, component platform, and design system

Better, when they refer to the same thing:

> design system

### Start with the meaningful condition or result

Bad:

> Over several months, we explored several approaches to improve consistency.

Better:

> Three disconnected component systems created inconsistent behavior and implementation ambiguity.

### Make ownership explicit

Distinguish among:

- `I designed...`
- `I built...`
- `I defined...`
- `I proposed...`
- `I partnered with...`
- `The team decided...`
- `Engineering implemented...`

Never use active voice to steal collaborative work.

### Prefer concrete verbs

Prefer:

- designed
- built
- defined
- tested
- documented
- replaced
- reduced
- connected
- standardized
- validated
- shipped
- measured

Avoid unless factually necessary:

- leveraged
- utilized
- facilitated
- spearheaded
- empowered
- revolutionized
- transformed
- ideated
- evangelized

### Keep paragraphs single-purpose

A paragraph should primarily explain one of these:

- Context
- Constraint
- Responsibility
- Decision
- Implementation
- Evidence
- Outcome
- Reflection

Split paragraphs that attempt to do several at once.

### Separate evidence from interpretation

Do not present an inference as a measured result.

Use wording such as:

- `The team adopted the component in...`
- `This reduced the number of duplicated patterns from...`
- `Qualitative feedback indicated...`
- `A useful proxy was...`
- `We did not yet have a reliable metric for...`
- `I would measure... next.`

### Retain necessary technical language

Use accurate terms such as design token, component API, React, Storybook, semantic HTML, visual regression, accessibility tree, responsive behavior, or CSS custom property. Define only the terms a hiring reviewer is unlikely to understand from context.

### Keep sentences readable

- Prefer active voice.
- Put conditions before the action they affect.
- Give one instruction or major idea per sentence.
- Use lists for parallel facts or multi-part constraints.
- Avoid stacked clauses and inflated transitions.
- Do not make every sentence unnaturally short.

## Tone

The voice should be:

- Clear
- Direct
- Confident
- Technical
- Mature
- Specific
- Product-minded
- Honest about limitations

It should not be:

- Grandiose
- Aggressive
- Overly promotional
- Academic
- Generic SaaS copy
- Gamer-HUD narration
- Defense-contractor parody

## Theme vocabulary

Preferred structural terms include:

- Brief
- Context
- System
- Field
- Artifact
- Constraint
- Decision
- Record
- Signal
- Specification
- Module
- Interface
- Infrastructure
- Implementation
- Validation
- Evidence
- Outcome
- Status
- Review
- Revision
- Note
- Archive

Use literal product terms when they are clearer than themed terms.

Avoid decorative use of:

- Classified
- Tactical
- Operator
- Target
- Command
- Mission
- Intelligence
- Reconnaissance
- Combat
- Battle-tested
- War room
- Deploy or deployment when no software deployment occurred

## Default case-study architecture

For a full case study, use this sequence unless the evidence suggests a simpler structure:

1. Project identification
2. Brief
3. Operating context
4. Constraints
5. Responsibility
6. Key decision records
7. System specification
8. Implementation
9. Validation
10. Outcome
11. Revision notes

Use standard, recruiter-readable page titles where themed titles would create ambiguity. For example, a navigation item should remain `Work`, while a small label may say `PROJECT ARCHIVE`.

## Output expectations

A finished case study should normally include:

- A concise summary panel
- Clear role, team, timeline, stack, scope, status, and confidentiality metadata when known
- A customer or user problem
- Exact ownership boundaries
- Three to five meaningful decisions for a flagship project
- At least one system or implementation artifact
- Accessibility, responsive, testing, performance, or state-handling proof when relevant
- Evidence or an honest proxy outcome
- A current reflection
- Explicit placeholders for missing proof

Do not pad a thin project into a long case study.

## Definition of done

The work is complete only when:

- A recruiter can identify Nick's target role quickly.
- The project has a clear reason to exist.
- Nick's ownership is specific and credible.
- Product judgment and frontend implementation both appear when the evidence supports them.
- Important decisions include rationale or tradeoffs.
- Claims are supported or clearly qualified.
- The writing is concise enough to scan and substantial enough to trust.
- Operational vocabulary adds structure without becoming lore.
- The result avoids gamer HUD, cyberpunk, military parody, generic SaaS, and empty portfolio language.
- Existing repository conventions and validation checks remain intact.
