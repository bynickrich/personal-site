# Field Notes Page Layout

## Goal

Present writing as a maintained **field log** rather than a conventional blog
grid. The index should help readers find notes by subject, understand how current
they are, and distinguish quick observations from more complete writing.

## Recommended desktop layout

```text
+--------------------------------------------------------------------------+
| 03 //// FIELD NOTES                                  ENTRIES / 12         |
|                                                      UPDATED / 2026-08    |
| TECHNICAL NOTES                                                          |
| Design systems, frontend implementation, accessibility, and quality.     |
+--------------------------------------------------------------------------+
| TOPIC / ALL     SYSTEMS     FRONTEND     ACCESSIBILITY     PRACTICE       |
+--------------------------------------------------------------------------+
| FN-012  DESIGNING USEFUL EMPTY STATES                                    |
|         A practical note on making absence understandable and actionable.|
|         SYSTEMS        UPDATED / 2026-08-04       STATUS / STABLE        |
+--------------------------------------------------------------------------+
| FN-011  WHEN A TOKEN SHOULD BECOME A COMPONENT API                       |
|         Separating visual values from behavioral contracts.              |
|         FRONTEND       ISSUED / 2026-07-18        STATUS / DEVELOPING    |
+--------------------------------------------------------------------------+
| FN-010  ACCESSIBLE FOCUS AS AN INTERFACE STATE                           |
|         Treating focus specifications as part of interaction design.     |
|         ACCESSIBILITY  UPDATED / 2026-06-22       STATUS / STABLE        |
+--------------------------------------------------------------------------+
| ARCHIVE / 2026                                      PAGE 01 / 02         |
+--------------------------------------------------------------------------+
```

The titles above are structural examples, not proposed publication commitments.

## Content model

Each note should have:

- Stable identifier, such as `FN-012`
- Title
- One-sentence abstract
- Topic
- Issued date
- Updated date, when meaningfully revised
- Status or maturity
- Optional reading time

Recommended status vocabulary:

| Status | Meaning |
| --- | --- |
| `DRAFT` | An initial observation that may be incomplete |
| `DEVELOPING` | Useful material that is still changing |
| `STABLE` | Reviewed and reasonably complete |
| `ARCHIVE` | Preserved for context but no longer current |

This translates the maturity signals used in [Maggie Appleton's digital garden](https://maggieappleton.com/)
into the site's document language. It tells readers how seriously to take a note
without using an artificial military status.

## Index behavior

### Initial archive

For the first several entries:

- Show one continuous list ordered by most recently updated.
- Offer a few topic links only if they lead to populated results.
- Do not add search, pagination, or a complex filter panel.

### Larger archive

Once the archive becomes difficult to scan:

- Add a text search.
- Add topic filters with visible result counts.
- Offer ordering by updated date and issued date.
- Consider year markers or pagination.
- Preserve shareable URLs for filtered states where practical.

## Empty state

The current archive has no published entries. Keep the empty state factual:

```text
+--------------------------------------------------+
| 03 //// FIELD NOTES                 ENTRIES / 00 |
|                                                  |
| TECHNICAL NOTES                                  |
| Design systems, implementation, accessibility,   |
| and the decisions connecting design to code.     |
|                                                  |
| STATUS / IN PREPARATION                          |
+--------------------------------------------------+
```

Do not add fictional forthcoming titles simply to fill the layout.

## Individual note layout

```text
+--------------------------------------------------------------------------+
| FN-012 //// FIELD NOTE                    STATUS / STABLE                 |
|                                           ISSUED / 2026-08-04             |
| DESIGNING USEFUL EMPTY STATES             UPDATED / 2026-08-12            |
| One-sentence abstract.                                                    |
+---------------------------------------------------+----------------------+
|                                                   | CONTENTS             |
| Main reading column                               | 01 Context           |
|                                                   | 02 Pattern           |
| Body text, examples, and occasional figures.      | 03 Implementation    |
|                                                   |                      |
|                                                   | RELATED              |
|                                                   | FN-008               |
+---------------------------------------------------+----------------------+
| REVISION NOTES                                    | NEXT NOTE         -> |
+---------------------------------------------------+----------------------+
```

- Keep prose in a two-thirds reading column.
- Use the rail for contents, status, and related notes.
- Collapse the rail into the normal reading flow on mobile.
- Use figure captions when screenshots or diagrams provide evidence.
- Show revision notes only when an actual meaningful revision has occurred.

Linear's numbered [Method index](https://linear.app/method) is a useful precedent
for presenting related writing as a coherent, navigable manual.

## Mobile layout

```text
+----------------------------------+
| 03 //// FIELD NOTES  ENTRIES / 12|
| TECHNICAL NOTES                  |
| Short scope statement...         |
+----------------------------------+
| TOPIC / ALL                 [ + ]|
+----------------------------------+
| FN-012                           |
| DESIGNING USEFUL EMPTY STATES    |
| One-sentence abstract...         |
| SYSTEMS / STABLE                 |
| UPDATED / 2026-08-04          -> |
+----------------------------------+
```

- Reduce filters to a compact disclosure if necessary.
- Keep identifier, title, abstract, topic, status, and date.
- Do not place metadata in a horizontally scrolling table.

## Ornament

Use:

- Note identifiers.
- Issued and updated dates.
- Thin rules between log entries.
- A restrained archive footer or calibration band.

Avoid:

- A different thumbnail treatment for every note.
- Status colors without text labels.
- Fake timestamps or automatically changing activity indicators.
- Dense tag clouds.

## Alternative layout

A two-column split between longer essays and shorter field notes could be useful
if both formats become substantial. Do not introduce it before the distinction is
supported by real content.

## Review questions

- Can a reader tell what a note covers before opening it?
- Is the difference between issued and updated dates understandable?
- Are maturity states useful promises that can be maintained?
- Do filters reflect actual browsing needs rather than visual decoration?
- Does the empty state remain honest while still feeling intentional?

