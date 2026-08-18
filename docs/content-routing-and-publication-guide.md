# MDsveX After Action Reports and Field Notes Guide

This guide walks through moving product-design case studies, presented publicly as **After Action Reports**, and blog posts, presented as **Field Notes**, into content folders. It derives URL slugs from filenames and controls which documents are navigable or visible through frontmatter publication states.

## 1. Confirm the existing setup

No package changes are needed. `mdsvex` is installed and `.svx` preprocessing is already configured in `vite.config.ts`.

Before editing, run:

```sh
pnpm run check
pnpm run build
```

The current build succeeds but emits an existing MDsveX `context="module"` deprecation warning.

## 2. Create the content structure

Create this structure:

```text
src/lib/content/
├── case-studies/
│   ├── catalyst.svx
│   ├── datapoint.svx
│   └── zentra.svx
├── field-notes/
├── case-studies.ts
├── field-notes.ts
├── types.ts
└── index.ts
```

Use flat, kebab-case filenames. The filename becomes the slug:

```text
src/lib/content/case-studies/data-point.svx → /work/data-point
src/lib/content/field-notes/useful-empty-states.svx → /field-notes/useful-empty-states
```

## 3. Define the content types

In `src/lib/content/types.ts`, define:

```ts
import type { Component } from 'svelte';

export type ReportPublicationState = 'published' | 'locked';
export type FieldNotePublicationState = 'published' | 'draft';

export type ContentModule<T> = {
	default: Component;
	metadata: T;
};
```

Define a concise `AfterActionReportMetadata` model around the facts a hiring manager needs to scan:

```ts
export type AfterActionReportMetadata = {
	id: string;
	title: string;
	summary: string;
	role: string;
	organization: string;
	period: string;
	scope: string[];
	outcome: string;
	projectStatus: 'active' | 'shipped' | 'archived';
	publicationState: ReportPublicationState;
	featured?: boolean;
	order: number;
	cover: {
		src: string;
		hoverSrc?: string;
		separation?: number;
	};
};

export type AfterActionReport = AfterActionReportMetadata & {
	slug: string;
	href: string | null;
};
```

Define `FieldNoteMetadata` with:

```ts
publicationState: FieldNotePublicationState;
id: string;
title: string;
summary: string;
topic: string;
issued: string;
updated?: string;
```

`FieldNote` adds a derived `slug` and `href`.

## 4. Migrate the existing case studies

Move each existing route-level `+page.svx` document into the new report content folder and rename it after its slug.

For every After Action Report:

- Add `publicationState: published`.
- Remove the authored `href`; the registry will generate it.
- Replace the old presentation-heavy fields with `id`, `title`, `summary`, `organization`, `scope`, `projectStatus`, and the nested `cover` object.
- Preserve imports and Markdown/Svelte content.
- Remove duplicated document headers and derive page metadata from `title` and `summary`.
- Leave images in `static/work`.

Do not remove the existing report layout yet.

## 5. Build the After Action Report registry

In `src/lib/content/case-studies.ts`, create one eager, typed Vite glob that imports each MDsveX module:

- Read `module.metadata` when building cards and indexes.
- Retain `module.default` as the component rendered by a published report route.

A separate eager metadata glob plus a lazy full-module glob targets the same files and causes Vite to warn that the dynamic import is ineffective. For this small portfolio collection, one eager module glob is simpler and more honest about what the build contains.

The registry should:

1. Extract the filename from each glob path.
2. Remove `.svx` to create the slug.
3. Validate that `publicationState` is `published` or `locked`.
4. Derive `/work/${slug}` for published studies.
5. Set `href` to `null` for locked studies.
6. Sort summaries by `order`.
7. Export all reports as `afterActionReports` so locked reports remain visible.
8. Export `loadAfterActionReport(slug)` that returns the stored component only when its state is `published`; otherwise return `null`.

Re-export the registry and types from `src/lib/content/index.ts`.

> Pair-programming checkpoint: Run `pnpm run check`, then share the content types and registry for review.

## 6. Replace the static report routes

Replace the three static route directories with:

```text
src/routes/work/(after-action-reports)/
├── +layout.svelte
└── [slug]/
    ├── +page.ts
    └── +page.svelte
```

The universal `[slug]/+page.ts` should:

- Call `loadAfterActionReport(params.slug)`.
- Throw SvelteKit `error(404, 'After action report not found')` when it returns `null`.
- Return the MDsveX component constructor and metadata.

A universal loader is intentional: SvelteKit allows it to return non-serializable values such as component constructors.

The page component should:

- Receive typed `PageProps`.
- Assign the returned component to a capitalized variable.
- Render that component.
- Generate `<svelte:head>` values from the report title and summary.
- Render the shared After Action Report header before the MDsveX body.

Keep the existing route-group layout so `/work/[slug]` retains its current article styling.

## 7. Update work listings and cards

Update the work index and `FeaturedWork` to consume the generated After Action Reports.

Refactor `WorkCard.svelte` so it supports two roots without duplicating the card body:

- Published: render an `<a>` using the generated `href`.
- Locked: render a non-interactive `<article>` or `<div>`.
- Preserve the factual report identifier and project status display.
- Add a visible `LOCKED` label alongside the project status.
- Remove the outbound arrow from locked cards.
- Do not attach pointer, focus, or navigation handlers to locked cards.
- Keep `featured` independent: a locked item may still appear in Featured Work when `featured: true`.

Run the Svelte autofixer on the updated card and route component until it reports no remaining issues.

> Pair-programming checkpoint: Test one report temporarily as `locked`, verify its card and 404 behavior, then share the diff for review.

## 8. Build the Field Notes registry

In `src/lib/content/field-notes.ts`, use the same eager typed-module glob pattern.

The registry should:

- Derive slugs from filenames.
- Validate `publicationState`.
- Export only published summaries.
- Sort by `updated ?? issued`, newest first.
- Export `loadFieldNote(slug)` that returns `null` for drafts and unknown slugs.

Drafts must not affect Field Notes counts, listings, or related navigation.

## 9. Add Field Notes routes

Create:

```text
src/routes/field-notes/
├── +page.ts
├── +page.svelte
└── [slug]/
    ├── +page.ts
    └── +page.svelte
```

The index loader returns published Field Note summaries. The index page should:

- Preserve the existing Field Notes title and description.
- Render the factual empty state when there are no published posts.
- Otherwise render a semantic list containing each post's identifier, title, description, topic, date, and link.

The detail loader and page follow the report pattern:

- Draft or unknown slug → 404.
- Published slug → render the MDsveX component.
- Generate title and description metadata from the note's `title` and `summary`.

> Pair-programming checkpoint: Share the Field Notes registry and routes for review before adding real notes.

## 10. Final validation

Run:

```sh
pnpm run lint
pnpm run check
pnpm run build
```

Manually verify:

- Published case studies remain navigable.
- Locked studies remain visible but are not focusable or clickable.
- Locked report URLs return 404.
- Published Field Notes appear and render.
- Draft posts are absent and return 404.
- Unknown slugs return 404.
- Homepage featured filtering still works.
- Empty Field Notes content remains honest.

Treat `locked` and `draft` as presentation and publication workflow states, not security boundaries. Do not put secret material in those files because Vite may still include discovered source modules in build output.
