<script lang="ts">
	import type { ReportNavigationItem } from '$lib/content/case-studies';

	let {
		reportId,
		items
	}: {
		reportId: string;
		items: ReportNavigationItem[];
	} = $props();
</script>

<nav
	aria-label="Case study sections"
	class="bg-neutral-100 p-3 ring ring-neutral-300 ring-inset lg:sticky lg:top-3"
>
	<p class="type-eyebrow text-neutral-600">{reportId} / Contents</p>
	<ol class="mt-3 flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:gap-0 lg:overflow-visible lg:pb-0">
		{#each items as item, index (item.href)}
			<li class="shrink-0 lg:shrink">
				<a
					href={item.href}
					class="grid min-h-10 grid-cols-[1.5rem_auto] items-center border border-neutral-300 px-2 type-caption text-neutral-700 hover:bg-neutral-200 lg:border-0 lg:border-t lg:px-0"
				>
					<span class="text-xs font-mono font-medium text-neutral-500 tabular-nums">
						{String(index + 1).padStart(2, '0')}
					</span>
					<span>{item.label}</span>
				</a>
			</li>
		{/each}
	</ol>
</nav>
