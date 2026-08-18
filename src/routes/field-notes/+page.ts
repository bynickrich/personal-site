import { fieldNotes } from '$lib/content/field-notes';

import type { PageLoad } from './$types';

export const load = (() => {
	return { notes: fieldNotes };
}) satisfies PageLoad;
