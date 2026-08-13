# Military-Industrial Ornamentation

## Purpose

Develop a restrained ornamental system for the portfolio that supports the existing field-manual, engineering-document, and command-terminal visual language.

The goal is not literal military styling. Ornament should establish hierarchy, rhythm, and a sense of operational rigor while leaving the case studies and writing as the primary content.

## Current signal

The `02 ////` section marker is a strong starting point. It reads as an index notation rather than a conventional heading and should become part of a repeatable system instead of a one-off detail.

The visual direction should feel like:

- An engineering field manual
- A controlled operational interface
- A production drawing or technical document
- An equipment log or assignment record

It should avoid feeling like:

- Camouflage or military surplus branding
- A fake classified document
- Video-game HUD decoration
- Distressed, grungy, or post-apocalyptic styling

## Design principles

### Systematic, not scattered

Every ornamental element should have a job: identify a section, establish an edge, indicate hierarchy, describe metadata, or show a state. Reuse a small vocabulary consistently rather than inventing a visual treatment for each page.

### Content remains dominant

Use muted contrast, small scale, and generous whitespace. Ornament should be discovered while scanning, not compete with a project title, image, or call to action.

### Mechanical over theatrical

Favor rules, ticks, brackets, registers, calibrated scales, and identifiers. Avoid spectacle-driven details such as caution stripes, glitch effects, or heavy stamp graphics.

### Specific enough to feel real

Metadata should refer to actual project facts where possible: project year, discipline, release version, collaboration type, or image figure number. Factual details will be more convincing than generic tactical language.

## Core notation system

Start with these five elements and use them across the site.

### 1. Section index

Format: `02 ////`

Use at the start of primary sections. The number gives the page an ordered, briefing-like structure; the slashes can remain a visual separator or become a quantity that reflects the section depth.

Possible variants:

- `01 ////` for primary home-page sections
- `02.01 ////` for a project within the Work index
- `FIG. 04` for individual images or visual references
- `APPX. A` for supplemental writing or process material

Keep the number in the mono face and use the existing eyebrow scale.

### 2. Revision metadata

Format: `REV. 04 / 2026-08 / PUBLIC`

Place in the footer of case studies, beside a project title, or at the end of a long horizontal rule. This can communicate iteration without pretending that the site is a classified document.

Useful fields:

- `REV.`: a real version or editorial revision
- `ISSUED`: publication date
- `UPDATED`: latest meaningful update
- `STATUS`: `ACTIVE`, `ARCHIVE`, `IN PROGRESS`
- `SCOPE`: `PRODUCT DESIGN`, `DESIGN ENGINEERING`, `PROTOTYPE`

### 3. Registration marks

Use tiny, low-contrast L-shaped corner marks or plus-shaped alignment marks at selected boundaries: a hero image, case-study figure, featured-work block, or full-width section.

Registration marks should frame only high-value regions. Do not put them around every card or text block.

### 4. Technical rules and ticks

Use one-pixel rules to divide major bands. Interrupt a rule with a label, section number, square marker, or metadata string.

Add short tick marks at consistent intervals only where they imply a scale or alignment system. They work especially well at the top and bottom of a featured image, on horizontal dividers, and within a compact figure caption.

### 5. Figure labels

Format: `FIG. 02 / INTERFACE VALIDATION / 2025`

Use with project imagery and diagrams. A fixed format makes images feel documented while giving the reader useful context.

Recommended fields:

- Figure number
- Plain-language subject
- Project year or phase
- Optional medium such as `PROTOTYPE`, `MOTION STUDY`, or `PRODUCTION UI`

## Secondary elements

Introduce these only after the core system feels consistent.

### Coordinate or location strings

Use real project locations where meaningful, or operational-style routing data that does not falsely imply a physical place.

Examples:

```text
LOCATION / REMOTE / US
ROUTE / WORK / DATAPOINT
GRID / 40.7128 N / 74.0060 W
```

Best placement: a quiet edge label, a case-study header detail, or a footer band.

### Edge legends

Add a vertical or side-aligned label on wide viewports, for example:

```text
NICK RICHARDSON / DESIGN ENGINEER / 2026
```

This should disappear on small screens rather than consume reading width. Treat it as stable page framing, not as a separate navigation control.

### Calibration band

A narrow horizontal band of repeated ticks can introduce visual rhythm near an image, footer, or project index. Use a fixed pattern rather than random noise. A small numeric interval, such as `00 / 25 / 50 / 75 / 100`, can make the band read as a measured component.

### Signal trace

Use an abstract, static line with sparse peaks as a separator or footer texture. It should be geometric and subtle, not a reactive dashboard chart. Reserve it for one or two page-level moments.

### Partner approval strip

The existing logo marquee could take on a technical-specification feel through a small label such as `SELECTED SYSTEMS / COLLABORATORS` and serial-like identifiers below or beside each mark. Keep brand marks clean and do not alter them.

## Recommended placement map

### Home page

- Section index above each major content band
- One technical rule at the start or end of each band
- Registration marks around the primary hero or featured-work image only
- A restrained calibration band before the footer

### Work index

- Assignment-style project index: `02.01`, title, role, year, status
- Figure labels for project thumbnails
- Thin rule between entries instead of enclosing every project in a heavy card
- Optional revision metadata at the bottom of the index

### Case studies

- Case-study identifier and revision metadata in the title block
- Figure labels for images, prototypes, and diagrams
- Registration marks on selected full-bleed visuals
- A stable edge legend on desktop, if it does not conflict with the reading column

### About and contact

- Keep the system quieter than on project pages
- Use a section index, one metadata string, and one divider treatment
- Do not introduce additional decorative motifs solely to fill empty space

## Typography and color guidance

- Keep headings and body copy in the existing sans face; reserve the mono face for notation and metadata.
- Use uppercase sparingly and only for short labels.
- Keep metadata at the existing eyebrow scale or one step below it.
- Use the neutral palette for most ornament and reserve a single accent color for state changes, active navigation, or a controlled emphasis.
- Favor lines and marks with low-to-medium contrast. Labels may carry slightly more contrast than the geometry around them.

## Implementation approach

Build ornament as a small group of reusable primitives rather than styling each page independently.

Suggested component set:

- `SectionIndex`: section and sub-section numbering
- `DocumentMeta`: revision, year, status, and discipline fields
- `FigureCaption`: figure number, subject, and date
- `RegistrationMarks`: optional marks around a media region
- `TechnicalRule`: labeled or unlabeled divider with optional ticks
- `EdgeLegend`: desktop-only persistent page label

Each component should support a quiet default. Pages opt into stronger treatments only where the information hierarchy warrants it.

## First pass recommendation

Start with a narrow, high-confidence pass:

1. Standardize `02 ////` as the section-index component.
2. Add labeled technical rules between home-page sections and work-index entries.
3. Add figure captions to the strongest case-study visuals.
4. Add revision metadata to each case-study header or footer.
5. Evaluate the system before adding registration marks, edge legends, or signal traces.

This sequence creates a coherent document language before introducing more visible ornament.

## Review questions

Use these questions while refining the system:

- Does each detail communicate hierarchy, state, alignment, or metadata?
- Is the information factual or usefully descriptive?
- Would the page still feel composed if the ornament were removed?
- Are project titles and images still the first things a visitor scans?
- Is each motif repeated often enough to feel like a system?
- Is there enough restraint that one stronger detail can matter?
