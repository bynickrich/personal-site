export type WorkItem = {
	order: number;
	featured: boolean;
	meta: string;
	href: string;
	name: string;
	shortDescription: string;
	role: string;
	timeline: string;
	platforms: 'Web' | 'Mobile';
	stack: string;
	status: 'Shipped' | 'In-Progress' | 'Deprecated';
	outcome: string;
};

const frontmatter = import.meta.glob<WorkItem>('/src/routes/work/**/+page.svx', {
	eager: true,
	import: 'metadata'
});

export const work: WorkItem[] = Object.entries(frontmatter)
	.map(([path, metadata]) => {
		const slug = path.match(/\/([^/]+)\/\+page\.svx$/)?.[1];

		if (!slug) {
			throw new Error(`Could not determine work slug from ${path}`);
		}

		return {
			order: metadata.order,
			featured: metadata.featured ?? false,
			meta: metadata.meta,
			href: `/work/${slug}`,
			name: metadata.name,
			shortDescription: metadata.shortDescription,
			role: metadata.role,
			timeline: metadata.timeline,
			platforms: metadata.platforms,
			stack: metadata.stack,
			status: metadata.status,
			outcome: metadata.outcome
		};
	})
	.sort((a, b) => a.order - b.order);
