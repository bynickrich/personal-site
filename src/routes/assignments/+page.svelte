<script>
	import AssignmentCard from '$lib/components/AssignmentCard.svelte';
	import SectionContainer from '$lib/components/SectionContainer.svelte';
</script>

<svelte:head>
	<title>Work — Nick Richardson</title>
	<meta
		name="description"
		content="Selected product, design-system, and frontend work by Design Engineer Nick Richardson."
	/>
</svelte:head>

<SectionContainer>
	<p class="text-xs font-medium tracking-wide text-neutral-700 uppercase">Project archive</p>
	<h1>Selected work</h1>
	<p class="max-w-3xl text-neutral-700">
		Product, system, and frontend work that shows how I connect customer needs, interface decisions,
		and production quality.
	</p>
	<AssignmentCard
		name="Catalyst"
		href="/assignments/catalyst"
		projectType="Quality infrastructure"
		summary="Current design-engineering work on a production design system. The full case study is in progress."
		role="Design Engineer"
		year="Current"
		status="IN PROGRESS"
	/>
	<AssignmentCard
		name="DataPoint"
		href="/assignments/datapoint"
		projectType="Product and system design"
		summary="A self-serve traffic-data product for city planners, engineers, and residents."
		role="Product Designer"
		year="2021–2022"
		status="PUBLISHED"
	/>
	<AssignmentCard
		name="Zentra"
		href="/assignments/zentra"
		projectType="Cross-platform product system"
		summary="A retrofit access-control product and design system for multifamily properties."
		role="Senior UI Designer"
		year="2021–2023"
		status="PUBLISHED"
	/>
</SectionContainer>
