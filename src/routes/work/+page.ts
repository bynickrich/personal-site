import { afterActionReports } from '#lib/content/case-studies.js';

import type { PageLoad } from './$types';

export const load = (() => {
	return { reports: afterActionReports };
}) satisfies PageLoad;
