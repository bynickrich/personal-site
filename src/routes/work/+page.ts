import { afterActionReports } from '$lib/content/case-studies';

import type { PageLoad } from './$types';

export const load = (() => {
	return { reports: afterActionReports };
}) satisfies PageLoad;
