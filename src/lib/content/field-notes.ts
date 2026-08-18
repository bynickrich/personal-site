import type { Component } from 'svelte';

import type { ContentModule, FieldNotePublicationState } from './types';

/** Frontmatter authored at the top of each Field Note `.svx` file. */
export type FieldNoteMetadata = {
	publicationState: FieldNotePublicationState;
	id: string;
	title: string;
	summary: string;
	topic: string;
	issued: string;
	updated?: string;
};

/** Published Field Note metadata prepared for archive listings and navigation. */
export type FieldNote = FieldNoteMetadata & {
	slug: string;
	href: string;
};

/** Data returned to a published Field Note route for its header and dynamic document body. */
export type FieldNotePageData = {
	component: Component;
	metadata: FieldNoteMetadata;
};

/** Internal connection between a note's slug, frontmatter, and compiled Svelte component. */
type FieldNoteRecord = {
	slug: string;
	metadata: FieldNoteMetadata;
	component: Component;
};

/** Every MDsveX Field Note module discovered and compiled eagerly by Vite. */
const fieldNoteModules = import.meta.glob<ContentModule<FieldNoteMetadata>>(
	'/src/lib/content/field-notes/*.svx',
	{ eager: true }
);

/** Extracts a Field Note slug from the final segment of its `.svx` module path. */
function slugFromPath(path: string) {
	const match = path.match(/\/([^/]+)\.svx$/);

	if (!match) {
		throw new Error(`Could not determine field note slug from ${path}`);
	}

	return match[1];
}

/** Fails early when critical Field Note frontmatter is missing or invalid. */
function validateMetadata(metadata: FieldNoteMetadata, path: string) {
	if (!['published', 'draft'].includes(metadata.publicationState)) {
		throw new Error(`Invalid publicationState in ${path}`);
	}

	if (!metadata.id || !metadata.title || !metadata.summary) {
		throw new Error(`Missing required field note metadata in ${path}`);
	}
}

/** Normalized internal records built from the discovered MDsveX modules. */
const fieldNoteRecords: FieldNoteRecord[] = Object.entries(fieldNoteModules).map(
	([path, module]) => {
		validateMetadata(module.metadata, path);

		return {
			slug: slugFromPath(path),
			metadata: module.metadata,
			component: module.default
		};
	}
);

/** Exact slug lookup used by dynamic `/field-notes/[slug]` routes. */
const fieldNotesBySlug = new Map<string, FieldNoteRecord>();

for (const note of fieldNoteRecords) {
	if (fieldNotesBySlug.has(note.slug)) {
		throw new Error(`Duplicate field note slug: ${note.slug}`);
	}

	fieldNotesBySlug.set(note.slug, note);
}

/** Published notes exposed to the Field Notes archive, newest meaningful revision first. */
export const fieldNotes: FieldNote[] = fieldNoteRecords
	.filter(({ metadata }) => metadata.publicationState === 'published')
	.map(({ slug, metadata }) => ({
		...metadata,
		slug,
		href: `/field-notes/${slug}`
	}))
	.sort((a, b) => (b.updated ?? b.issued).localeCompare(a.updated ?? a.issued));

/**
 * Returns page data for a published Field Note.
 *
 * Unknown and draft slugs return `null` so the route can respond with the same 404.
 */
export function getFieldNote(slug: string): FieldNotePageData | null {
	const note = fieldNotesBySlug.get(slug);

	if (!note || note.metadata.publicationState !== 'published') {
		return null;
	}

	return {
		component: note.component,
		metadata: note.metadata
	};
}
