# Portfolio Page Layouts

## Purpose

Define a coherent layout family for the Work, About, Contact, Field Notes, and
case-study pages. These recommendations extend the visual language documented in
[`military-industrial-ornamentation.md`](./military-industrial-ornamentation.md).

The unifying idea is an **operational publishing system**. Each page should feel
like a different kind of useful document rather than the same card layout with a
different title.

| Page                                        | Document model      | Primary layout                                           |
| ------------------------------------------- | ------------------- | -------------------------------------------------------- |
| [Work](./work-page-layout.md)               | Assignment register | Ruled project rows with figures and title blocks         |
| [About](./about-page-layout.md)             | Personnel record    | Narrative column with a capability and status rail       |
| [Contact](./contact-page-layout.md)         | Routing slip        | One primary contact action with a channel directory      |
| [Field Notes](./field-notes-page-layout.md) | Field log           | Searchable note index with topic and revision states     |
| [Case studies](./case-study-layout.md)      | Technical report    | Abstract, contents, decision log, figures, and revisions |

## Shared layout system

The detailed rationale and implementation guidance for the grid is documented in
[`web-grid-and-typographic-rhythm.md`](./web-grid-and-typographic-rhythm.md).

### Grid

- Use one responsive grid across the site rather than inventing a grid per page.
- On wide screens, use 12 or 16 columns within the existing `max-w-300` shell.
- Reading content should occupy approximately two-thirds of the available width.
- Reserve a three- or four-column rail for metadata, contents, or related links.
- Permit important project figures to span the full content width.
- Collapse to one continuous column on small screens.

The site already uses IBM Plex, making IBM's [2x Grid](https://www.ibm.com/design/language/2x-grid/)
a natural precedent. Its divisions of 2, 4, 8, and 16 and its consistent key
lines support the systematic visual language already present in the project.

### Page anatomy

Most primary pages should use the same high-level sequence:

```text
+--------------------------------------------------------------+
| NN //// PAGE LABEL                       DOCUMENT META        |
|                                                              |
| PAGE TITLE                                                   |
| One concise statement describing the page's purpose.         |
+--------------------------------------------------------------+
|                                                              |
| PAGE-SPECIFIC CONTENT                                        |
|                                                              |
+--------------------------------------------------------------+
| REVISION / STATUS / RELATED DESTINATION                       |
+--------------------------------------------------------------+
```

### Density

- Use whitespace and alignment as the default organizing tools.
- Use rules to separate related regions.
- Use borders only when a region is genuinely a contained record, figure, or
  title block.
- Allow only one strong ornamental moment in a typical viewport.
- Keep the orange accent for an active state, primary action, or single controlled
  emphasis.

### Notation

Use factual notation wherever possible:

```text
02 //// WORK
02.01 //// CATALYST
CS-01 / REV. 03 / PUBLIC
FIG. 04 / INTERFACE VALIDATION / 2025
STATUS / SHIPPED
UPDATED / 2026-08
```

Coordinates should appear only when they refer to a meaningful place. Project
identifiers, dates, status, scope, and revisions will usually be more useful.

### Typography and accessibility

- Keep titles, introductions, and body text in the existing sans and condensed
  faces.
- Reserve monospace text for identifiers, short labels, states, and metadata.
- Keep long-form text to approximately 75 characters per line. The
  [GOV.UK layout guidance](https://design-system.service.gov.uk/styles/layout/)
  recommends a two-thirds reading column for the same reason.
- Use semantic headings beneath the visual notation. A number such as
  `03.02 ////` supplements a heading; it does not replace the heading structure.
- Never use position, color, or ornament as the only way to communicate meaning.
- Decorative edge labels should disappear on small screens rather than consume
  reading width.

## Research precedents

### NASA Graphics Standards Manual

The 1976 [NASA Graphics Standards Manual](https://www.nasa.gov/wp-content/uploads/2015/01/nasa_graphics_manual_nhb_1430-2_jan_1976.pdf)
is valuable for its structure rather than its branding. Relevant ideas include:

- Two-column text layouts with wide margins.
- Three-column editorial compositions when greater movement is needed.
- Stable horizontal reference lines.
- Small, medium, and large image scales within one grid.
- Grouped, consistently formatted captions.
- Large numerals used as chapter and section identifiers.

### IBM 2x Grid

The [IBM 2x Grid](https://www.ibm.com/design/language/2x-grid/) provides a useful
modern foundation for column divisions, aspect ratios, key lines, and spacing.
It also aligns naturally with the site's existing typography.

### Content-oriented references

- [Pentagram Work](https://www.pentagram.com/work) demonstrates how discipline,
  sector, location, and year can support a large project archive. Filters should
  not be added to this portfolio until the number of projects warrants them.
- [Linear Method](https://linear.app/method) shows how ordered sections and a
  visible contents structure can make related writing feel like one manual.
- [Maggie Appleton's digital garden](https://maggieappleton.com/) distinguishes
  essays, notes, and patterns and gives readers signals about the maturity of
  evolving material.
- [Frank Chimero's About page](https://frankchimero.com/about/) pairs a concise
  personal narrative with structured experience and professional details.
- The [GOV.UK contact pattern](https://design-system.service.gov.uk/patterns/contact-a-department-or-service-team/)
  recommends ordering channels by usefulness and setting an accurate expectation
  for response time.
- Instrument's [Levi's case study](https://www.instrument.com/work/levis) is a
  useful reference for pacing narrative, large visuals, outcomes, and a final
  responsibility breakdown.

## Recommended design sequence

1. Establish the shared page title block and grid.
2. Convert Work into the reference index or register.
3. Redesign one case study as the reference long-form document.
4. Derive quieter About and Contact layouts from those primitives.
5. Build the Field Notes index after its content model is settled.
6. Evaluate registration marks, calibration bands, and edge legends only after
   the core hierarchy works without them.

## System-level review questions

- Can every visible ornament be explained as hierarchy, alignment, state, or
  factual metadata?
- Do project titles, decisions, and evidence remain the strongest scan targets?
- Do all five page types feel related without feeling identical?
- Does the mobile version preserve information order after decorative framing is
  removed?
- Are borders being used for containment rather than as the default section
  separator?
