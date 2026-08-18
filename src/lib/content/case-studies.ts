import type { Component } from 'svelte';

import type { ContentModule, ReportPublicationState } from './types';

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

export type AfterActionReport = AfterActionReportMetadata & {
	slug: string;
	href: string | null;
};

export type LoadedAfterActionReport = {
	component: Component;
	metadata: AfterActionReportMetadata;
};

type ReportRecord = {
	slug: string;
	metadata: AfterActionReportMetadata;
	component: Component;
};

const reportModules = import.meta.glob<ContentModule<AfterActionReportMetadata>>(
	'/src/lib/content/case-studies/*.svx',
	{ eager: true }
);

function slugFromPath(path: string) {
	const match = path.match(/\/([^/]+)\.svx$/);

	if (!match) {
		throw new Error(`Could not determine after action report slug from ${path}`);
	}

	return match[1];
}

function validateMetadata(metadata: AfterActionReportMetadata, path: string) {
	if (!['published', 'locked'].includes(metadata.publicationState)) {
		throw new Error(`Invalid publicationState in ${path}`);
	}

	if (!metadata.id || !metadata.title || !metadata.summary) {
		throw new Error(`Missing required after action report metadata in ${path}`);
	}
}

const reportRecords: ReportRecord[] = Object.entries(reportModules).map(([path, module]) => {
	validateMetadata(module.metadata, path);

	return {
		slug: slugFromPath(path),
		metadata: module.metadata,
		component: module.default
	};
});

const reportsBySlug = new Map<string, ReportRecord>();

for (const report of reportRecords) {
	if (reportsBySlug.has(report.slug)) {
		throw new Error(`Duplicate after action report slug: ${report.slug}`);
	}

	reportsBySlug.set(report.slug, report);
}

export const afterActionReports: AfterActionReport[] = reportRecords
	.map(({ slug, metadata }) => ({
		...metadata,
		slug,
		href: metadata.publicationState === 'published' ? `/work/${slug}` : null
	}))
	.sort((a, b) => a.order - b.order);

export async function loadAfterActionReport(slug: string): Promise<LoadedAfterActionReport | null> {
	const report = reportsBySlug.get(slug);

	if (!report || report.metadata.publicationState !== 'published') {
		return null;
	}

	return {
		component: report.component,
		metadata: report.metadata
	};
}
