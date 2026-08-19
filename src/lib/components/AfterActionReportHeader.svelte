<script lang="ts">
	import type { AfterActionReportMetadata } from '$lib/content/case-studies';

	let { report }: { report: AfterActionReportMetadata } = $props();
</script>

<header class="bg-neutral-100 ring ring-neutral-300 ring-inset">
	<div
		class="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 border-b border-neutral-300 p-3 type-eyebrow text-neutral-700"
	>
		<p class="whitespace-nowrap">{report.id} //// After Action Report</p>
		<p class="ms-auto whitespace-nowrap">Status / {report.projectStatus}</p>
	</div>

	<div class="grid sm:grid-cols-[minmax(0,3fr)_minmax(16rem,2fr)]">
		<div class="p-3 sm:p-6">
			<p class="type-eyebrow text-accent-700">{report.organization} / {report.period}</p>
			<h1 class="mt-2 type-page-title text-balance text-neutral-800">{report.title}</h1>
			<p class="mt-2 max-w-[58ch] type-intro text-pretty text-neutral-700">{report.summary}</p>
		</div>

		<div
			class="border-t border-neutral-300 bg-neutral-900 p-3 text-neutral-50 sm:border-t-0 sm:border-l sm:p-6"
		>
			<p class="type-eyebrow text-neutral-300">Shipped outcome</p>
			<p class="mt-2 max-w-[36ch] type-section-title text-pretty">{report.outcome}</p>
		</div>
	</div>

	<dl class="grid border-t border-neutral-300 sm:grid-cols-12">
		<div
			class="grid grid-cols-[6.5rem_minmax(0,1fr)] items-baseline gap-2 border-b border-neutral-300 p-3 sm:col-span-3 sm:block sm:border-r sm:border-b-0"
		>
			<dt class="type-eyebrow">Role</dt>
			<dd class="type-caption text-neutral-700 sm:mt-1">{report.role}</dd>
		</div>
		<div
			class="grid grid-cols-[6.5rem_minmax(0,1fr)] items-baseline gap-2 border-b border-neutral-300 p-3 sm:col-span-3 sm:block sm:border-r sm:border-b-0"
		>
			<dt class="type-eyebrow">Organization</dt>
			<dd class="type-caption text-neutral-700 sm:mt-1">{report.organization}</dd>
		</div>
		<div
			class="grid grid-cols-[6.5rem_minmax(0,1fr)] items-baseline gap-2 border-b border-neutral-300 p-3 sm:col-span-2 sm:block sm:border-r sm:border-b-0"
		>
			<dt class="type-eyebrow">Period</dt>
			<dd class="type-caption text-neutral-700 tabular-nums sm:mt-1">{report.period}</dd>
		</div>
		<div
			class="grid grid-cols-[6.5rem_minmax(0,1fr)] items-baseline gap-2 p-3 sm:col-span-4 sm:block"
		>
			<dt class="type-eyebrow">Scope</dt>
			<dd class="type-caption text-neutral-700 sm:mt-1">{report.scope.join(' / ')}</dd>
		</div>
	</dl>
</header>
