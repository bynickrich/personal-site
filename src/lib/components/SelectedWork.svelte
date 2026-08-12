<script lang="ts">
	import type { ComponentProps } from 'svelte';

	import WorkCard from './WorkCard.svelte';

	// TODO: This data needs to come from the work items themselves and is used on this page and the work overview page.
	const selectedWork = [
		{
			meta: '01 / Assignment',
			name: 'Catalyst',
			href: '/work/catalyst',
			type: 'Design System',
			summary:
				'An enterprise grade design system that adapts to multipul colored verticals while providing escape hatches when needed.',
			role: 'Design Engineer',
			period: '2023-TBA',
			status: 'IN PROGRESS'
		},
		{
			meta: '02 / Assignment',
			name: 'DataPoint',
			href: '/work/datapoint',
			type: 'Product + system design',
			summary: 'A self-serve traffic-data product for city planners, engineers, and residents.',
			role: 'Product Designer',
			period: '2021–2022',
			status: 'PUBLISHED'
		},
		{
			meta: '03 / Assignment',
			name: 'Zentra',
			href: '/work/zentra',
			type: 'Cross-platform product system',
			summary: 'A retrofit access-control product and design system for multifamily properties.',
			role: 'Senior UI Designer',
			period: '2021–2023',
			status: 'PUBLISHED'
		}
	] satisfies ComponentProps<typeof WorkCard>[];
</script>

<section class="flex flex-col bg-neutral-100 ring ring-neutral-300 ring-inset">
	<h2 class="pt-3 text-center type-section-title">Selected Work</h2>
	{#each selectedWork as work (work.href)}
		<WorkCard {...work} />
	{/each}
</section>
