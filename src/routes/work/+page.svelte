<script lang="ts">
	import WorkCard from '$lib/components/WorkCard.svelte';

	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>After Action Reports — Nick Richardson</title>
	<meta
		name="description"
		content="Product design and design engineering case studies by Nick Richardson."
	/>
</svelte:head>

<section class="flex flex-col gap-3 sm:gap-4">
	<header class="bg-neutral-100 p-3 ring ring-neutral-300 ring-inset">
		<p class="type-eyebrow text-neutral-700">02 //// Work Index</p>
		<div class="mt-3 flex flex-col gap-1">
			<h1 class="type-page-title">After Action Reports</h1>
			<p class="max-w-3xl type-reading text-neutral-700">
				Product design and design engineering case studies focused on responsibility, decisions,
				evidence, and outcomes.
			</p>
		</div>
	</header>

	{#each data.reports as report (report.slug)}
		<WorkCard {...report} />
	{/each}
</section>
