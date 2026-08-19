import { error } from '@sveltejs/kit';

import { getAfterActionReport } from '#lib/content/case-studies.js';

import type { PageLoad } from './$types';

export const load = (({ params }) => {
	const report = getAfterActionReport(params.slug);

	if (!report) {
		error(404, 'After action report not found');
	}

	return report;
}) satisfies PageLoad;
