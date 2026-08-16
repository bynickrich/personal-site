<script lang="ts">
	import { work } from '$lib/content/work';

	import WorkCard from './WorkCard.svelte';

	const selectedWork = work.filter((item) => item.featured);
</script>

<section class="flex flex-col gap-3 sm:gap-4">
	<h2
		class="grid h-12 place-items-center bg-neutral-100 type-section-title ring ring-neutral-300 ring-inset"
	>
		Featured Work
	</h2>
	{#each selectedWork as work (work.href)}
		<WorkCard {...work} />
	{/each}
</section>
