<script lang="ts">
	import WorkCard from '#lib/components/WorkCard.svelte';

	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>After Action Reports | Nick Richardson</title>
	<meta
		name="description"
		content="Product design and design engineering case studies by Nick Richardson."
	/>
</svelte:head>

<section class="flex flex-col gap-3 sm:gap-4">
	<header class="bg-neutral-100 ring ring-neutral-300 ring-inset">
		<div
			class="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 border-b border-neutral-300 p-3 type-eyebrow text-neutral-700"
		>
			<p class="whitespace-nowrap">01 //// Work Index</p>
			<p class="ms-auto whitespace-nowrap">
				Records / {String(data.reports.length).padStart(2, '0')}
			</p>
		</div>
		<div class="flex flex-col gap-1 p-3 sm:p-6">
			<h1 class="type-page-title">After Action Reports</h1>
			<p class="max-w-3xl type-intro text-pretty text-neutral-700">
				A closer look at what I owned, the choices I made, and what the team shipped.
			</p>
		</div>
	</header>

	{#each data.reports as report (report.slug)}
		<WorkCard {...report} />
	{/each}
</section>
