import type { Component } from 'svelte';

import type { ContentModule, FieldNotePublicationState } from './types';

export type FieldNoteMetadata = {
	publicationState: FieldNotePublicationState;
	id: string;
	title: string;
	summary: string;
	topic: string;
	issued: string;
	updated?: string;
};

export type FieldNote = FieldNoteMetadata & {
	slug: string;
	href: string;
};

export type LoadedFieldNote = {
	component: Component;
	metadata: FieldNoteMetadata;
};

type FieldNoteRecord = {
	slug: string;
	metadata: FieldNoteMetadata;
	component: Component;
};

const fieldNoteModules = import.meta.glob<ContentModule<FieldNoteMetadata>>(
	'/src/lib/content/field-notes/*.svx',
	{ eager: true }
);

function slugFromPath(path: string) {
	const match = path.match(/\/([^/]+)\.svx$/);

	if (!match) {
		throw new Error(`Could not determine field note slug from ${path}`);
	}

	return match[1];
}

function validateMetadata(metadata: FieldNoteMetadata, path: string) {
	if (!['published', 'draft'].includes(metadata.publicationState)) {
		throw new Error(`Invalid publicationState in ${path}`);
	}

	if (!metadata.id || !metadata.title || !metadata.summary) {
		throw new Error(`Missing required field note metadata in ${path}`);
	}
}

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

const fieldNotesBySlug = new Map<string, FieldNoteRecord>();

for (const note of fieldNoteRecords) {
	if (fieldNotesBySlug.has(note.slug)) {
		throw new Error(`Duplicate field note slug: ${note.slug}`);
	}

	fieldNotesBySlug.set(note.slug, note);
}

export const fieldNotes: FieldNote[] = fieldNoteRecords
	.filter(({ metadata }) => metadata.publicationState === 'published')
	.map(({ slug, metadata }) => ({
		...metadata,
		slug,
		href: `/field-notes/${slug}`
	}))
	.sort((a, b) => (b.updated ?? b.issued).localeCompare(a.updated ?? a.issued));

export async function loadFieldNote(slug: string): Promise<LoadedFieldNote | null> {
	const note = fieldNotesBySlug.get(slug);

	if (!note || note.metadata.publicationState !== 'published') {
		return null;
	}

	return {
		component: note.component,
		metadata: note.metadata
	};
}
