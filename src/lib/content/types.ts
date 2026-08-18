import type { Component } from 'svelte';

export type ReportPublicationState = 'published' | 'locked';
export type FieldNotePublicationState = 'published' | 'draft';

export type ContentModule<T> = {
	default: Component;
	metadata: T;
};
