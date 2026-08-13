<script lang="ts">
	import { work } from '$lib/content/work';

	import WorkCard from './WorkCard.svelte';

	const selectedWork = work.filter((item) => item.featured);
</script>

<section class="flex flex-col bg-neutral-100 ring ring-neutral-300 ring-inset">
	<h2 class="pt-3 pb-3 text-center type-section-title">Featured Work</h2>
	{#each selectedWork as work (work.href)}
		<WorkCard {...work} />
	{/each}
</section>
