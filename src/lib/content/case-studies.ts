import type { Component } from 'svelte';

import type { ContentModule, ReportPublicationState } from './types';

/** Frontmatter authored at the top of each After Action Report `.svx` file. */
export type AfterActionReportMetadata = {
	id: string;
	title: string;
	summary: string;
	role: string;
	organization: string;
	period: string;
	scope: string[];
	outcome: string;
	projectStatus: 'active' | 'shipped' | 'archived';
	publicationState: ReportPublicationState;
	featured?: boolean;
	order: number;
	cover: {
		src: string;
		hoverSrc?: string;
		separation?: number;
	};
};

/** Metadata prepared for report cards, including the filename-derived slug and public URL. */
export type AfterActionReport = AfterActionReportMetadata & {
	slug: string;
	href: string | null;
};

/** Data returned to a published report route for its header and dynamic document body. */
export type AfterActionReportPageData = {
	component: Component;
	metadata: AfterActionReportMetadata;
};

/** Internal connection between a report's slug, frontmatter, and compiled Svelte component. */
type ReportRecord = {
	slug: string;
	metadata: AfterActionReportMetadata;
	component: Component;
};

/** Every MDsveX report module discovered and compiled eagerly by Vite. */
const reportModules = import.meta.glob<ContentModule<AfterActionReportMetadata>>(
	'/src/lib/content/case-studies/*.svx',
	{ eager: true }
);

/** Extracts a report slug from the final segment of its `.svx` module path. */
function slugFromPath(path: string) {
	const match = path.match(/\/([^/]+)\.svx$/);

	if (!match) {
		throw new Error(`Could not determine after action report slug from ${path}`);
	}

	return match[1];
}

/** Fails early when critical report frontmatter is missing or invalid. */
function validateMetadata(metadata: AfterActionReportMetadata, path: string) {
	if (!['published', 'locked'].includes(metadata.publicationState)) {
		throw new Error(`Invalid publicationState in ${path}`);
	}

	if (!metadata.id || !metadata.title || !metadata.summary) {
		throw new Error(`Missing required after action report metadata in ${path}`);
	}
}

/** Normalized internal records built from the discovered MDsveX modules. */
const reportRecords: ReportRecord[] = Object.entries(reportModules).map(([path, module]) => {
	validateMetadata(module.metadata, path);

	return {
		slug: slugFromPath(path),
		metadata: module.metadata,
		component: module.default
	};
});

/** Exact slug lookup used by dynamic `/work/[slug]` routes. */
const reportsBySlug = new Map<string, ReportRecord>();

for (const report of reportRecords) {
	if (reportsBySlug.has(report.slug)) {
		throw new Error(`Duplicate after action report slug: ${report.slug}`);
	}

	reportsBySlug.set(report.slug, report);
}

/** All reports exposed to cards and indexes; locked reports receive a `null` URL. */
export const afterActionReports: AfterActionReport[] = reportRecords
	.map(({ slug, metadata }) => ({
		...metadata,
		slug,
		href: metadata.publicationState === 'published' ? `/work/${slug}` : null
	}))
	.sort((a, b) => a.order - b.order);

/**
 * Returns page data for a published report.
 *
 * Unknown and locked slugs return `null` so the route can respond with the same 404.
 */
export function getAfterActionReport(slug: string): AfterActionReportPageData | null {
	const report = reportsBySlug.get(slug);

	if (!report || report.metadata.publicationState !== 'published') {
		return null;
	}

	return {
		component: report.component,
		metadata: report.metadata
	};
}
