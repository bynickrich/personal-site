import { getFieldNote } from '$lib/content/field-notes';
import { error } from '@sveltejs/kit';

import type { PageLoad } from './$types';

export const load = (({ params }) => {
	const note = getFieldNote(params.slug);

	if (!note) {
		error(404, 'Field note not found');
	}

	return note;
}) satisfies PageLoad;
