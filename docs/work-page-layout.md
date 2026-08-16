# Work Page Layout

## Goal

Present the work as an **assignment register**: a concise, repeatable index that
lets a reviewer compare projects quickly while still surfacing role, outcome,
platform, and status.

The current `WorkCard` is a strong starting point. Its dithered figure and drawing
title block already fit the direction. The primary change is at the page level:
the entries should read as rows in one register instead of unrelated cards.

## Recommended desktop layout

```text
+--------------------------------------------------------------------------+
| 01 //// WORK                                      ASSIGNMENTS / 03       |
|                                                                          |
| SELECTED WORK                                                            |
| Product, design-system, and frontend work.       UPDATED / 2026-08       |
+--------------------------------------------------------------------------+
| 02.01  [SHIPPED]  +------------------+  CATALYST              2023-2025  |
|                    |                  |  Design system and...   DESIGN ENG.|
|                    |     FIG. 01      |                                   |
|                    |                  |  OUTCOME                           |
|                    +------------------+  Established a shared...           |
+--------------------------------------------------------------------------+
| 02.02  [SHIPPED]  +------------------+  DATAPOINT             2021-2022  |
|                    |                  |  Traffic-data product... PRODUCT   |
|                    |     FIG. 02      |                                   |
|                    |                  |  OUTCOME                           |
|                    +------------------+  Shipped a self-serve...            |
+--------------------------------------------------------------------------+
| 02.03  [SHIPPED]  +------------------+  ZENTRA                2021-2023  |
|                    |                  |  Access-control system... UI DESIGN|
|                    |     FIG. 03      |                                   |
|                    |                  |  OUTCOME                           |
|                    +------------------+  Established product...             |
+--------------------------------------------------------------------------+
| REV. 01 / 2026-08 / PUBLIC                         END OF REGISTER / 03   |
+--------------------------------------------------------------------------+
```

### Suggested column allocation

- **Identifier:** 1-2 columns
- **Figure:** 4-5 columns
- **Narrative:** 5-6 columns
- **Period and role:** 2-3 columns, aligned to the far edge

The exact spans can change at breakpoints, but every project should use the same
key lines.

## Information hierarchy

Readers should encounter information in this order:

1. Project title
2. Project figure
3. Short description
4. Outcome
5. Role and period
6. Status, platforms, and stack

The stack is useful supporting evidence, but it should not visually compete with
the project outcome. The page is primarily selling judgment and responsibility,
not a list of technologies.

## Entry anatomy

Each project row should support:

```text
02.01
[ SHIPPED ]
FIG. 01 / CATALYST / PRODUCTION UI
CATALYST
Short project description
Outcome
Role / Period / Platforms
Stack
```

- Use `02.01`, `02.02`, and `02.03` as stable index numbers.
- Keep the status factual and compact.
- Place the figure caption at the bottom edge of the image or directly below it.
- Use a single external-direction arrow to show that the complete row is a link.
- Preserve visible focus treatment across the entire linked row.

## Interaction

- Hover or focus may activate the existing dither transition.
- A thin accent rule or small square marker may also indicate the active row.
- Do not change the row's dimensions on hover.
- Do not introduce animated coordinates, scanning lines, gauges, or target
  reticles.
- Respect reduced-motion preferences if the image transition is animated.

## Mobile layout

```text
+----------------------------------+
| 01 //// WORK        ENTRIES / 03 |
| SELECTED WORK                    |
+----------------------------------+
| 02.01                 [SHIPPED]  |
| +------------------------------+ |
| |            FIG. 01           | |
| +------------------------------+ |
| CATALYST                         |
| Short description...             |
|                                  |
| OUTCOME                          |
| Established a shared...          |
| ROLE / DESIGN ENGINEER           |
| PERIOD / 2023-2025             ->|
+----------------------------------+
```

- Stack the figure before the narrative.
- Keep title, description, outcome, role, and period.
- Hide coordinates, detailed stack, and secondary platform data first.
- Keep the entire entry as one clear link.

## Ornament

Use:

- One section index in the page header.
- One figure label per project.
- Thin rules between entries.
- Registration marks around the active or featured figure only.
- One revision line at the end of the register.

Avoid:

- A heavy border around every internal cell.
- Separate ornamental treatments for different projects.
- Filter controls while the archive contains only a few projects.
- Alternating left/right layouts, which weaken comparison across entries.

## Alternative layout

A three-column **contact sheet** could create a more visual archive:

```text
+-------------------+ +-------------------+ +-------------------+
|      FIG. 01      | |      FIG. 02      | |      FIG. 03      |
+-------------------+ +-------------------+ +-------------------+
| 02.01 CATALYST    | | 02.02 DATAPOINT   | | 02.03 ZENTRA      |
| ROLE / YEAR       | | ROLE / YEAR       | | ROLE / YEAR       |
+-------------------+ +-------------------+ +-------------------+
```

This is better for a larger, image-led archive but weaker at communicating the
outcome and scope of each project. Treat it as a possible future archive view,
not the current default.

## Review questions

- Can a hiring manager compare role, period, and outcome without opening a case
  study?
- Does each row feel like part of one register?
- Is the project title more prominent than its status and metadata?
- Does the dither effect support the project figure rather than conceal it?
- Is filtering still unnecessary at the current project count?

