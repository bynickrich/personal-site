<script lang="ts">
	import { afterActionReports } from '$lib/content/case-studies';

	import WorkCard from './WorkCard.svelte';

	const selectedReports = afterActionReports.filter((report) => report.featured);
</script>

<section class="flex flex-col gap-3 sm:gap-4">
	<h2
		class="grid h-12 place-items-center bg-neutral-100 type-section-title ring ring-neutral-300 ring-inset"
	>
		Featured After Action Reports
	</h2>
	{#each selectedReports as report (report.slug)}
		<WorkCard {...report} />
	{/each}
</section>
