import { loadAfterActionReport } from '$lib/content/case-studies';
import { error } from '@sveltejs/kit';

import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
	const report = await loadAfterActionReport(params.slug);

	if (!report) {
		error(404, 'After action report not found');
	}

	return report;
}) satisfies PageLoad;
