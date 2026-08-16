# Web Grid and Typographic Rhythm

## Purpose

Define a practical grid system for the portfolio using:

- A **4px master unit** for typography and fine alignment.
- An **8px default spatial cadence** for layout and components.
- A responsive column grid for page composition.
- Tailwind CSS v4 conventions that make the system easy to apply consistently.

This report is a recommendation, not an implemented specification. It evaluates
the current project and describes a deliberate path toward a more rigorous system.

## Executive recommendation

Use a **4/8 dual grid**, not a strict 8px-only grid:

```text
MASTER UNIT           4px
TYPOGRAPHIC RHYTHM    4px increments
GENERAL SPACING       8px increments
COMPACT EXCEPTIONS    4px and 12px
PAGE GRID             4 / 8 / 12 columns
SITE MAXIMUM          1200px
```

The 4px unit is the underlying measuring system. The 8px cadence is a stronger
rule applied to page geometry, section spacing, component dimensions, and most
padding. This distinction matters. A system that bans 4px or 12px values cannot
comfortably set 14px labels, 20px line boxes, dense title blocks, or precise
icon-and-label relationships.

The site's current Tailwind setup already uses a 4px base because Tailwind v4
derives numeric spacing from `--spacing: 0.25rem`. Keep that base. Do **not**
change `--spacing` to 8px. Instead, treat even-numbered utilities as the normal
spatial grid and odd-numbered utilities as intentional compact or optical steps.

```text
Tailwind p-1  =  4px   fine alignment only
Tailwind p-2  =  8px   compact spacing
Tailwind p-3  = 12px   dense component exception
Tailwind p-4  = 16px   default component padding
Tailwind p-6  = 24px   generous component or small layout spacing
Tailwind p-8  = 32px   layout spacing
Tailwind p-12 = 48px   section spacing
Tailwind p-16 = 64px   major section spacing
```

Tailwind documents that its numeric spacing utilities are calculated from one
theme variable, and its default v4 spacing variable is 0.25rem. See the official
[theme variables](https://tailwindcss.com/docs/theme) and
[Tailwind v4 release notes](https://tailwindcss.com/blog/tailwindcss-v4).

## What a baseline grid means on the web

### The print ideal

In print, a baseline grid is a repeating set of horizontal lines. The baseline of
each line of body text sits on one of those lines. If the baseline interval is
4px, a 24px body line-height advances six grid units:

```text
 0px  ------------------------------------------------ baseline 1
 4px  · · · · · · · · · · · · · · · · · · · · · ·
 8px  · · · · · · · · · · · · · · · · · · · · · ·
12px  · · · · · · · · · · · · · · · · · · · · · ·
16px  · · · · · · · · · · · · · · · · · · · · · ·
20px  · · · · · · · · · · · · · · · · · · · · · ·
24px  ------------------------------------------------ baseline 2
```

When two columns use line-heights that are both multiples of 4px, their baselines
can repeatedly meet even if their type sizes differ.

### The web reality

CSS lays text out using a font's ascent, descent, and line-gap metrics. Extra
leading is distributed around the glyph area, often described as half-leading.
Different fonts and fallback fonts can therefore place visible letterforms
differently inside line boxes with the same declared size and line-height. The
[CSS Inline Layout specification](https://www.w3.org/TR/css3-linebox/) explains
the ascent, descent, baseline, and line-gap metrics used by browsers.

A web page also has conditions that a printed page does not:

- Text wraps differently as the viewport changes.
- Users zoom and may override font or text spacing.
- Variable-font metrics and fallback fonts can differ.
- Images have fluid, sometimes fractional heights.
- Localization changes word length, wrapping, and sometimes writing systems.
- One-pixel borders and device-pixel rounding can interrupt a mathematical grid.

The right goal is therefore **reliable vertical rhythm**, not forcing every edge
on the page onto a global four-pixel line. Align text baselines within related
regions, keep line boxes and gaps on the scale, and allow media and responsive
content to reflow honestly.

### A useful definition for this project

For this portfolio, “on the baseline grid” should mean:

1. Every named text style has a line-height divisible by 4px.
2. Spacing between related text blocks is divisible by 4px.
3. Page and component spacing normally uses multiples of 8px.
4. Related columns share horizontal key lines where the content allows it.
5. Content is never clipped or artificially stretched merely to land on a line.

This is strict enough to produce rhythm and flexible enough to survive the web.

## The recommended unit hierarchy

### Level 1: 4px master unit

Use 4px for:

- Line-height increments.
- Small icon-to-label gaps.
- Eyebrow-to-heading gaps.
- Optical correction.
- Very compact control internals.
- Rule labels and figure-caption details.

### Level 2: 8px spatial cadence

Use multiples of 8px for:

- Page gutters.
- Grid gutters.
- Section separation.
- Normal component padding.
- Control and navigation heights.
- Figure spacing.
- Card, row, and title-block geometry.

### Level 3: semantic spacing families

The raw scale should be constrained by purpose:

| Family    | Values           | Typical use                          |
| --------- | ---------------- | ------------------------------------ |
| Hairline  | 1px              | Rules and borders; not spacing       |
| Optical   | 2px, 4px         | Glyph, icon, and rule correction     |
| Compact   | 8px, 12px        | Labels, metadata, dense title blocks |
| Component | 16px, 24px       | Default padding and internal regions |
| Layout    | 32px, 48px, 64px | Sections and major content groups    |
| Page      | 96px, 128px      | Rare large editorial transitions     |

Atlassian uses an 8px base while still including 2px, 4px, 6px, 12px, and 20px
tokens for compact relationships. Its documentation is a useful reminder that an
8px system is a hierarchy, not a prohibition. See
[Atlassian spacing](https://atlassian.design/foundations/grid-beta/applying-grid).
Fluent similarly uses a 4px foundation and explicitly permits off-ramp values for
icon alignment and component needs. See
[Fluent 2 layout](https://fluent2.microsoft.design/layout).

## Typography system

### Recommended type matrix

The following scale preserves the site's existing typographic character while
giving every style a 4px-based line box:

| Role          |    Size | Line-height | Grid units | Guidance                         |
| ------------- | ------: | ----------: | ---------: | -------------------------------- |
| Eyebrow       |    12px |        16px |          4 | Short uppercase notation only    |
| Caption       |    14px |        20px |          5 | Captions and secondary facts     |
| Label         |    14px |        20px |          5 | Controls and definition terms    |
| Metadata      |    14px |        20px |          5 | Short mono strings               |
| Compact       |    16px |        20px |          5 | One- or two-line compact copy    |
| Reading       |    16px |        24px |          6 | Paragraphs and lists             |
| Intro         |    18px |        28px |          7 | Multi-line summaries             |
| Brand         |    18px |        24px |          6 | Short navigation brand line      |
| Card title    |    20px |        28px |          7 | Project and item titles          |
| Section title |    24px |        32px |          8 | Section headings that may wrap   |
| Page title    | 32-36px |     40/44px |      10/11 | Step line-height at a breakpoint |
| Display       | 36-48px |     44/56px |      11/14 | Hero use only                    |

The most important proposed changes from the current system are:

- Increase `type-intro` from 24px to 28px line-height when it can wrap across
  several lines.
- Increase `type-section-title` from 28px to 32px if headings may wrap.
- Keep `type-compact` at 20px only for short copy. It is too tight for sustained
  paragraph reading.
- Keep body reading text at 16/24. That is exactly six 4px grid units and a 1.5
  line-height ratio.

MDN recommends a minimum line-height of 1.5 for main paragraph content. WCAG does
not require every author style to start at 1.5, but
[WCAG 2.1 Success Criterion 1.4.12](https://www.w3.org/WAI/WCAG21/Understanding/text-spacing)
requires the interface to survive user overrides to at least that value without
loss of content or function. The practical rule is to use 16/24 for sustained
reading and test the entire layout with increased text spacing.

### Fluid headings without losing rhythm

Fluid font sizes can coexist with a baseline system, but a fully fluid line-height
will produce intermediate values that are not multiples of 4px. Use fluid size
and **stepped line-height**:

```css
.type-page-title {
	font-size: clamp(2rem, 1.75rem + 1vw, 2.25rem);
	line-height: 2.5rem; /* 40px */
}

@media (width >= 40rem) {
	.type-page-title {
		line-height: 2.75rem; /* 44px */
	}
}
```

The line-height ratio changes slightly while the font interpolates, but every line
box remains on the 4px rhythm. This is preferable to pretending a fluid value such
as 42.37px belongs to a strict baseline grid.

Utopia's [fluid responsive design](https://utopia.fyi/) is a valuable approach for
projects that want type and space to interpolate continuously. For this portfolio,
use it selectively for display sizes and large section spacing. A restrained,
document-like interface benefits from more stable text roles and predictable line
boxes.

### Do not over-correct font metrics

The newer `text-box-trim` and `text-box-edge` properties can trim text boxes to
font metrics and improve cap-height alignment. They are promising for buttons,
large headings, and precisely framed labels. MDN still marks
[`text-box-trim`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-box-trim)
as limited availability, so it should be progressive enhancement rather than the
foundation of layout.

Do not use negative margins on every heading to simulate cap-height alignment.
Those corrections become fragile when fonts, zoom, or wrapping change.

## Vertical rhythm

### Space relationships, not isolated values

A useful spacing decision describes the relationship between two things:

```text
EYEBROW
    8px
HEADING
    8px
SUMMARY
   16px
PRIMARY ACTIONS
```

For long-form content:

```text
PARAGRAPH LINE-HEIGHT                  24px
PARAGRAPH TO PARAGRAPH                 16px or 24px
HEADING TO FOLLOWING PARAGRAPH          8px or 16px
PREVIOUS SECTION TO NEXT HEADING       48px or 64px
FIGURE TO CAPTION                       8px
CAPTION TO FOLLOWING TEXT              24px or 32px
```

Choose one value for each relationship and repeat it. Consistent relationships
create more polish than choosing the nearest mathematically valid value every
time.

### Borders are not spacing

A 1px border is allowed in a 4/8 system. It is an optical rule, not a spacing
token. The problem occurs when two borders add 2px to an auto-sized component and
push everything below it off rhythm.

Use one of these approaches in baseline-sensitive regions:

- Use an inset ring or absolutely positioned pseudo-element so the rule does not
  change layout dimensions.
- Give a component a fixed or minimum block size divisible by 8px and use
  `box-sizing: border-box`.
- Accept the 1px interruption at a deliberate document boundary and restart the
  rhythm inside the next region.

The project already uses inset rings and decorative pseudo-borders. That is a good
foundation for measured title blocks and page bands.

### Images are allowed to break the baseline

Responsive image heights often resolve to fractional CSS pixels. Do not distort
or arbitrarily crop an important case-study image simply to make its bottom edge
land on the baseline grid.

Instead:

- Use a small set of stable aspect ratios.
- Align image edges to the column grid.
- Put captions in 20px or 24px line boxes.
- Use 16px, 24px, or 32px after the complete figure block to resume the rhythm.

## Responsive column grid

### Recommended structure

Use 4 columns on compact screens, 8 at the middle range, and 12 on wide screens.
This combines the clarity of Material's responsive model with a 12-column desktop
grid that divides cleanly into halves, thirds, quarters, and a two-thirds reading
column.

| Range   | Columns | Outer gutter | Column gap | Typical composition          |
| ------- | ------: | -----------: | ---------: | ---------------------------- |
| Compact |       4 |         16px |       16px | One column or 2+2 metadata   |
| Medium  |       8 |         24px |    16-24px | 5+3 or 6+2                   |
| Wide    |      12 |         32px |       24px | 8+4 reading rail, 6+6, 4+4+4 |

Use the existing 1200px maximum as the outside edge of the page shell. It is an
8px multiple and suits the proposed technical-publication layouts.

Material's earlier web layout guidance used a 12-column responsive grid, 4/8/12
column changes by breakpoint, and gutters in 8px increments. Its older
[metrics and keylines](https://m1.material.io/layout/metrics-keylines.html) page
also distinguishes an 8-unit component grid from a 4-unit type grid. It should be
treated as a durable layout precedent rather than a requirement to reproduce
Material styling.

IBM's current [2x Grid](https://carbondesignsystem.com/elements/2x-grid/overview/)
uses an 8px mini unit and divisions by two. A 16-column desktop grid would be a
valid alternative, particularly for dense product interfaces. For this portfolio,
12 columns are easier to use for the recurring 8+4 editorial split. The important
choice is consistent key lines, not allegiance to one column count.

### Page composition

```text
COMPACT / 4 COLUMNS

| 1 | 2 | 3 | 4 |
|----- primary -----|

MEDIUM / 8 COLUMNS

| 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|------- primary -------|-- rail --|

WIDE / 12 COLUMNS

| 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |10 |11 |12 |
|----------- reading -----------|----- rail -----|
```

The desktop reading rail can contain metadata, contents, or related links. It
should return to normal document order on smaller screens.

### Tailwind example

```html
<div
	class="grid grid-cols-4 gap-x-4 px-4
         sm:grid-cols-8 sm:gap-x-6 sm:px-6
         lg:grid-cols-12 lg:gap-x-6 lg:px-8"
>
	<article class="col-span-4 sm:col-span-6 lg:col-span-8">
		<!-- Main reading content -->
	</article>

	<aside class="col-span-4 sm:col-span-2 lg:col-span-4">
		<!-- Metadata rail -->
	</aside>
</div>
```

For nested project rows or title blocks, Tailwind supports
[`grid-cols-subgrid`](https://tailwindcss.com/docs/grid-template-columns), which
maps to CSS `subgrid`. Subgrid lets nested content inherit parent column tracks
instead of recreating nearly matching percentages. It is supported in all major
browser engines; see the [web.dev subgrid overview](https://web.dev/articles/css-subgrid).

Use column subgrid widely where it simplifies alignment. Use row subgrid only
when matching row tracks adds real value; it can become brittle with long dynamic
content.

## Tailwind CSS v4 strategy

### Keep the 4px base

Tailwind v4's numeric spacing and line-height utilities are driven by the same
spacing variable. This makes the default 4px base unusually well suited to the
proposed system:

```css
@theme {
	--spacing: 0.25rem;
	--container-site: 75rem;

	--leading-eyebrow: 1rem;
	--leading-compact: 1.25rem;
	--leading-reading: 1.5rem;
	--leading-intro: 1.75rem;
	--leading-section: 2rem;
	--leading-page: 2.5rem;
	--leading-page-wide: 2.75rem;
}
```

Tailwind's current [line-height documentation](https://tailwindcss.com/docs/line-height)
supports numeric values such as `leading-6`, combined forms such as `text-sm/5`,
and theme-backed `--leading-*` names. Semantic type utilities can continue to use
these variables internally.

### Adopt an even/odd convention

Use this code-review rule:

```text
EVEN UTILITIES  p-2 p-4 p-6 p-8 gap-2 gap-4 gap-6
                Normal component and layout choices.

ODD UTILITIES   p-1 p-3 gap-1 gap-3 mt-1
                Allowed only for compact internals or optical relationships.

ARBITRARY       p-[13px] gap-[18px]
                Requires a documented reason or intrinsic media constraint.
```

This keeps Tailwind's full precision without letting every implementation invent a
new number.

### Prefer gap for layout groups

Use `gap-*` on flex and grid containers for sibling relationships. Tailwind notes
that `space-x-*` and `space-y-*` are margin shortcuts and are not designed for
complex wrapping or reordered layouts. See the official
[margin and space-between guidance](https://tailwindcss.com/docs/margin).

Margins remain appropriate for deliberate typographic flow, particularly when a
content renderer controls the markup.

### Define semantic composition primitives

Do not replace all utilities with abstract component classes. Add a small number
of shared primitives for recurring page geometry:

```text
page-shell       max width, outer gutters, centering
page-grid        4/8/12 responsive columns
reading-column   primary 8-column desktop span and readable measure
metadata-rail    4-column desktop span
section-stack    standard vertical separation between major sections
text-stack       standard paragraph and heading relationships
```

Utilities should express local variations. Primitives should guarantee the key
lines shared by multiple pages.

### Use container queries for components, not page architecture

Project cards and metadata blocks may appear in different column spans. Tailwind
v4 supports container-query variants through `@container` and variants such as
`@md:`. See the official [responsive design documentation](https://tailwindcss.com/docs/responsive-design).

Use viewport breakpoints for the page shell and main column grid. Use container
queries when a reusable component should react to the space it actually receives.

## Assessment of the current project

### What already works

- All existing named type line-heights are multiples of 4px: 16, 20, 24, 28,
  44, and 56px.
- `type-reading` is 16/24, an excellent body-text foundation.
- The 1200px `max-w-300` shell is divisible by 8.
- Common fixed heights such as `h-10`, `h-12`, `h-14`, and `h-16` resolve to
  40, 48, 56, and 64px.
- The project already contains 4px and 8px debug-grid overlays.
- Inset rings and pseudo-element rules avoid allowing ornamental lines to control
  document geometry.

### What should be clarified

The most common current padding is `p-3` or `px-3`, which resolves to 12px. This
is not inherently bad: both Atlassian and Fluent make room for 12px in disciplined
systems. It does mean the current visual default is closer to a 4px grid than an
8px general grid.

Recommended policy:

- Use 16px (`p-4`) as the default padding for normal cards, page bands, and title
  blocks.
- Retain 12px (`p-3`) for metadata cells, compact navigation, and dense drawing
  title blocks where 16px feels inflated.
- Use 24px (`p-6`) for generous page headers and reading surfaces.
- Change top-level `gap-3`, footer `mt-3`, and other 12px separations between
  independent page bands to 16px (`gap-4`, `mt-4`).

Other review targets:

- The 10px diagonal-buffer interval is deliberately off-grid. Test 8px and 12px;
  keep 10px only if its optical frequency is demonstrably better.
- `type-intro` at 18/24 is tight for multi-line text. Test 18/28.
- `type-section-title` at 24/28 is tight when wrapping. Test 24/32.
- `type-compact` at 16/20 should remain limited to short descriptions.
- Case-study paragraphs currently receive a 12px bottom margin. Test a stable
  16px paragraph gap and 48-64px section gap instead of relying on repeated
  bordered blocks.

### What not to do

- Do not globally replace every `3` utility with `4`; density should be evaluated
  by component role.
- Do not set Tailwind's base spacing variable to 8px.
- Do not force responsive images to 8px-multiple heights.
- Do not add wrapper heights merely to make the debug overlay appear perfect.
- Do not use absolute positioning to pin flowing text to grid lines.
- Do not let a grid override zoom, localization, or text-spacing resilience.

## A practical rhythm recipe

### Compact record

```text
Outer padding                  12px
Label line-height             16px
Label to value                 4px
Value line-height             20px
Record-to-record gap           8px or a 1px inset rule
Minimum row height            48px or 56px
```

### Standard component

```text
Outer padding                  16px
Heading line-height           28px or 32px
Heading to description         8px
Description line-height       24px
Description to action         16px
Minimum action height         40px or 48px
```

### Editorial section

```text
Section start spacing         48px or 64px
Eyebrow line-height           16px
Eyebrow to title               8px
Title line-height             32px or 40px
Title to introduction         16px
Introduction line-height      28px
Introduction to body          24px or 32px
Body line-height              24px
```

### Figure

```text
Media                         intrinsic ratio
Media to caption               8px
Caption line-height           20px
Caption to following content  24px or 32px
```

## Visual quality assurance

### Grid overlays

Use the existing overlays as separate diagnostic modes:

- **4px overlay:** inspect typography, compact internals, and vertical rhythm.
- **8px overlay:** inspect component bounds, page bands, and major spacing.
- **Column overlay:** add a future 4/8/12-column overlay for page key lines.

Do not design with every overlay visible continuously. Turn them on during review,
then judge the page without them. A mathematically clean layout can still have poor
hierarchy, and a one-pixel optical correction can be the right decision.

### Review sizes

At minimum, inspect:

```text
320px    constrained compact layout
375px    common phone width
640px    small breakpoint transition
768px    tablet or narrow window
1024px   desktop composition begins
1200px   site maximum
1440px   behavior outside the site maximum
```

Also test:

- Browser zoom at 200%.
- Increased line, paragraph, letter, and word spacing.
- Headings and metadata with longer content.
- IBM Plex unavailable so the fallback font renders.
- Windows and macOS font rendering if available.
- Narrow viewport with no horizontal scrolling.

### What “feels right” means

Evaluate the system in this order:

1. **Reading:** Is body copy comfortable and line length controlled?
2. **Hierarchy:** Are title, summary, evidence, and metadata clearly differentiated?
3. **Relationships:** Do repeated content relationships use repeated spacing?
4. **Alignment:** Do important edges and baselines share visible key lines?
5. **Density:** Is each component appropriately compact or generous for its job?
6. **Optics:** Do icons, rules, and capital letters appear aligned to the eye?
7. **Math:** Do the chosen values belong to the documented scale?

Mathematical compliance is the final check, not the first design decision.

## Recommended implementation sequence

1. Record the 4px master unit and even/odd Tailwind convention in the project
   guidelines.
2. Adjust and visually test the named typography roles, especially Intro and
   Section Title.
3. Standardize macro page spacing to 16, 32, 48, and 64px.
4. Build `page-shell`, `page-grid`, `reading-column`, and `metadata-rail`
   primitives.
5. Apply the grid to one case study and the Work index before migrating every
   page.
6. Review compact 12px regions individually instead of removing them globally.
7. Add a column-grid overlay and run the responsive and accessibility review.
8. Only after the structure works, tune optical exceptions such as rule position,
   icon offset, and diagonal frequency.

## Resource list

### Grid and spacing systems

- [IBM Design Language: 2x Grid](https://www.ibm.com/design/language/2x-grid/)
- [Carbon Design System: 2x Grid](https://carbondesignsystem.com/elements/2x-grid/overview/)
- [Material Design: Metrics and keylines](https://m1.material.io/layout/metrics-keylines.html)
- [Material Design: Responsive UI](https://m1.material.io/layout/responsive-ui.html)
- [Atlassian Design: Spacing](https://atlassian.design/foundations/grid-beta/applying-grid)
- [Fluent 2: Layout](https://fluent2.microsoft.design/layout)

### CSS typography and accessibility

- [CSS Inline Layout Module Level 3](https://www.w3.org/TR/css3-linebox/)
- [MDN: line-height](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/line-height)
- [WCAG: Understanding Text Spacing](https://www.w3.org/WAI/WCAG21/Understanding/text-spacing)
- [MDN: text-box-trim](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-box-trim)

### CSS layout

- [CSS Grid Layout Module Level 2](https://www.w3.org/TR/css-grid/)
- [web.dev: Learn CSS Grid](https://web.dev/learn/css/grid)
- [web.dev: CSS subgrid](https://web.dev/articles/css-subgrid)

### Tailwind CSS

- [Theme variables](https://tailwindcss.com/docs/theme)
- [Spacing utilities](https://tailwindcss.com/docs/margin)
- [Font size and paired line-height](https://tailwindcss.com/docs/font-size)
- [Line-height utilities](https://tailwindcss.com/docs/line-height)
- [Grid template columns and subgrid](https://tailwindcss.com/docs/grid-template-columns)
- [Responsive design and container queries](https://tailwindcss.com/docs/responsive-design)

### Fluid scales

- [Utopia: Fluid responsive design](https://utopia.fyi/)
- [Utopia: Fluid space calculator](https://utopia.fyi/space/calculator/)

## Final position

The portfolio does not need a more complicated grid. It needs a clearer contract
between its existing numbers.

Use 4px as the master measurement, 8px as the default spatial decision, 12px as a
named compact exception, 24px as the reading line-height, and a 4/8/12 responsive
column grid. Protect the rhythm through shared line-heights and repeated spacing
relationships, then allow the browser to do what it is designed to do: wrap,
reflow, zoom, substitute, and adapt.

That combination will feel precise without becoming brittle—the right balance for
a portfolio modeled on engineering documents rather than a literal sheet of graph
paper.
