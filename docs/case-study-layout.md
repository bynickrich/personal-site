# Case Study Layout

## Goal

Present each project as a readable **technical report** that makes decisions,
tradeoffs, responsibility, evidence, and outcomes easy to inspect.

The existing case-study content already has a strong decision-led structure. The
main layout opportunity is to replace the repeated stack of fully bordered
`WorkBlock` sections with one continuous document surface organized by whitespace,
rules, figures, and a small number of contained records.

## Recommended desktop layout

```text
+--------------------------------------------------------------------------+
| CS-01 //// CATALYST                           REV. 03 / 2026-08 / PUBLIC  |
|                                                                          |
| CATALYST                                                                 |
| One-sentence project description.                   STATUS / SHIPPED      |
+--------------------------------------------------------------------------+
| ROLE             ORGANIZATION       PERIOD          SCOPE                |
| Design Engineer  Example Company    2023-2025       Systems / Frontend   |
+--------------------------------------------------------------------------+
|                                                                          |
|                        FIG. 01 / PRIMARY SYSTEM                          |
|                                                                          |
|                     [       HERO FIGURE       ]                          |
|                                                                          |
+---------------------------------------------------+----------------------+
| ABSTRACT                                          | CONTENTS             |
| Concise brief, responsibility, and outcome.       | 01 Brief            |
|                                                   | 02 Context          |
|                                                   | 03 Decisions        |
|                                                   | 04 System           |
|                                                   | 05 Validation       |
|                                                   | 06 Outcome          |
+---------------------------------------------------+----------------------+
| 03.01 //// DECISION 01                                                    |
|                                                                          |
| CONDITION     Concise description of the condition that required action. |
|                                                                          |
| DECISION      The decision, written as the dominant statement.           |
|                                                                          |
| RATIONALE     Supporting reasoning in the main reading measure.           |
| TRADEOFF      What the decision cost, constrained, or left unresolved.    |
| EVIDENCE      Research, shipped behavior, artifact, or measured result.   |
+--------------------------------------------------------------------------+
|                                                                          |
|                [          FULL-WIDTH EVIDENCE          ]                  |
|                                                                          |
| FIG. 04 / INTERFACE VALIDATION / 2025                                    |
+--------------------------------------------------------------------------+
| 05 //// VALIDATION                                                       |
| Main reading column...                            EVIDENCE REGISTER       |
|                                                   EVT-01 / INTERVIEW     |
|                                                   EVT-02 / PROTOTYPE     |
+--------------------------------------------------------------------------+
| REVISION NOTES                           CONTRIBUTORS / ARTIFACTS         |
+--------------------------------------------------------------------------+
| PREVIOUS / DATAPOINT                         NEXT / ZENTRA             -> |
+--------------------------------------------------------------------------+
```

## Page sequence

### 1. Case-study title block

The title block should contain:

- Case-study identifier
- Project title
- One-sentence description
- Role
- Organization
- Period
- Scope or disciplines
- Status
- Revision and publication date

This evolves the current `Metadata` component without inventing fictional
classification language.

### 2. Primary figure

Lead with one strong image or composite that quickly establishes the product.

- Use one stable aspect ratio at each breakpoint.
- Add registration marks only to this or another especially important figure.
- Follow it with a factual caption.
- Do not make the figure so tall that the abstract and responsibility disappear
  below several screens of imagery.

### 3. Abstract and contents

The abstract should summarize:

- The problem
- Personal responsibility
- The central intervention
- The most defensible outcome

Place a linked contents list in the narrow rail on desktop. On mobile, use a
compact horizontal list, a disclosure, or omit it if the page is short.

### 4. Operating context and responsibility

These sections establish boundaries before the decisions begin. Keep them in the
main reading column. Constraints can use a compact ruled list, but they should not
become individual cards.

### 5. Decision log

The existing `Condition / Decision / Rationale / Tradeoff / Evidence` structure is
a distinctive asset. Render each group consistently:

```text
03.01 //// DECISION 01

CONDITION
What was true before the decision.

DECISION
The choice that was made.

RATIONALE
Why that choice fit the context.

TRADEOFF
What it cost or failed to solve.

EVIDENCE
What supports the account.
```

Hierarchy should make the decision the strongest scan target after the section
heading. Condition and evidence can carry stronger labels; rationale and tradeoff
should remain comfortable reading text.

### 6. Figures and evidence

Use three repeatable figure scales:

```text
SMALL INSET              PAIRED                    FULL PLATE
+--------------+         +--------+ +--------+     +----------------------+
|              |         |        | |        |     |                      |
|   FIGURE     |         | FIG. A | | FIG. B |     |       FIGURE         |
|              |         |        | |        |     |                      |
+--------------+         +--------+ +--------+     +----------------------+
```

- Small inset: a specific detail supporting nearby prose.
- Paired: comparison, before/after, or related states.
- Full plate: system overview, primary workflow, or other high-value evidence.

The [NASA Graphics Standards Manual](https://www.nasa.gov/wp-content/uploads/2015/01/nasa_graphics_manual_nhb_1430-2_jan_1976.pdf)
supports this kind of small, medium, and large visual rhythm within a stable grid.

Use a consistent caption format:

```text
FIG. 04 / INTERFACE VALIDATION / 2025
Prototype used to test navigation and keyboard behavior before implementation.
```

The second line should explain why the figure matters, not merely restate what it
shows.

### 7. System specification

Use a structured inventory when the case study describes a system:

```text
SYS-01 / SEARCH AND FILTER BAR
Located stations and narrowed the data shown on the map.

SYS-02 / CONTEXTUAL INSPECTOR
Summarized the visible station set or current selection.
```

This format is more consistent with the document language than a generic bullet
list, while remaining semantically a list in markup.

### 8. Validation and outcome

Keep claims and limitations adjacent. If a metric is not available, retain the
current direct language rather than replacing it with an ornamental statistic.

Use accent color only for one especially important verified result. Demand signals,
anecdotes, and shipped artifacts should remain visibly distinct from measured
outcomes.

### 9. Revision sheet

Finish the report with:

- Revision notes or current retrospective
- Follow-up questions or what would be measured now
- Contributors
- Artifact links
- Previous and next project navigation

This terminal band can carry stronger title-block styling because it closes the
document and provides the next route.

## Reading grid

- Keep normal prose to approximately two-thirds width.
- Use a three- or four-column rail for contents, evidence references, or related
  information.
- Allow figures to break out to the full grid.
- Use horizontal key lines so text, captions, and figures visibly align.
- Do not keep a sticky rail if it covers content at short viewport heights.

The [GOV.UK layout guidance](https://design-system.service.gov.uk/styles/layout/)
recommends a two-thirds primary column to avoid excessively long lines. Instrument's
[Levi's case study](https://www.instrument.com/work/levis) is also useful for
studying the rhythm between narrative, large visuals, outcomes, and a final role
breakdown.

## Mobile layout

```text
+----------------------------------+
| CS-01 //// CATALYST              |
| REV. 03 / PUBLIC                 |
|                                  |
| CATALYST                         |
| Project description...           |
+----------------------------------+
| ROLE / DESIGN ENGINEER           |
| PERIOD / 2023-2025               |
| STATUS / SHIPPED                 |
+----------------------------------+
| +------------------------------+ |
| |            FIG. 01           | |
| +------------------------------+ |
| FIG. 01 / PRIMARY SYSTEM         |
+----------------------------------+
| ABSTRACT                         |
| Concise summary...               |
+----------------------------------+
| 03.01 //// DECISION 01           |
| CONDITION                        |
| ...                              |
| DECISION                         |
| ...                              |
| RATIONALE                        |
| ...                              |
+----------------------------------+
```

- Preserve the document order rather than recreating the desktop composition.
- Move rail content into the normal flow.
- Stack paired figures unless their comparison remains legible side by side.
- Remove edge legends and nonessential ticks.
- Keep figure identifiers attached to their figures.

## Ornament

Use:

- Case-study and subsection identifiers.
- Revision metadata.
- Figure labels.
- Registration marks on selected high-value figures.
- One desktop edge legend if it does not reduce reading width.
- A terminal revision or artifact title block.

Avoid:

- Full borders around every prose section.
- Registration marks around every image.
- Fake measurement scales without a relationship to the content.
- Sticky ornament that competes with navigation or text.
- Turning evidence into decorative dashboard metrics.

## Alternative layout

An image-first showcase could use full-screen plates separated by short narrative
interludes. It would be effective for highly visual brand work but would weaken the
decision-and-evidence structure that differentiates these case studies. Use the
technical-report layout as the default and allow individual figures to create
image-led moments within it.

## Review questions

- Can a reviewer understand responsibility and outcome before reading deeply?
- Are decisions easier to scan than in the current continuous Markdown?
- Does every figure support a nearby claim or decision?
- Are limitations presented alongside outcomes rather than buried at the end?
- Does the page feel like one report instead of a stack of bordered cards?
- Can the contents rail be removed without harming mobile comprehension?

