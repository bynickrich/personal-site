import { work } from '$lib/content/work';

import type { PageLoad } from './$types';

export const load = (() => {
	return { work };
}) satisfies PageLoad;
