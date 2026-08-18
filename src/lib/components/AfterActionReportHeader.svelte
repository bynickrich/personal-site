<script lang="ts">
	import type { AfterActionReportMetadata } from '$lib/content/case-studies';

	let { report }: { report: AfterActionReportMetadata } = $props();
</script>

<header class="flex flex-col gap-6 border border-neutral-300 bg-neutral-100 p-3">
	<div class="flex items-center justify-between gap-3 type-eyebrow text-neutral-700">
		<p>{report.id} //// After Action Report</p>
		<p>Status / {report.projectStatus}</p>
	</div>

	<div class="flex flex-col gap-2">
		<h1 class="type-page-title uppercase">{report.title}</h1>
		<p class="max-w-3xl type-intro text-neutral-700">{report.summary}</p>
	</div>

	<dl
		class="grid gap-3 border-t border-neutral-300 pt-3 type-caption sm:grid-cols-2 lg:grid-cols-4"
	>
		<div>
			<dt class="type-eyebrow text-neutral-600">Role</dt>
			<dd>{report.role}</dd>
		</div>
		<div>
			<dt class="type-eyebrow text-neutral-600">Organization</dt>
			<dd>{report.organization}</dd>
		</div>
		<div>
			<dt class="type-eyebrow text-neutral-600">Period</dt>
			<dd>{report.period}</dd>
		</div>
		<div>
			<dt class="type-eyebrow text-neutral-600">Scope</dt>
			<dd>{report.scope.join(' / ')}</dd>
		</div>
	</dl>
</header>
