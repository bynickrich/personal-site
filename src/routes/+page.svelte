<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import LogoMarquee from '$lib/components/logoMarquee/LogoMarquee.svelte';
	import SectionContainer from '$lib/components/SectionContainer/SectionContainer.svelte';
	import WorkCard from '$lib/components/workCard/WorkCard.svelte';
</script>

<svelte:head>
	<title>Nick Richardson — Design Engineer</title>
	<meta
		name="description"
		content="Nick Richardson is a frontend-leaning Design Engineer who combines product judgment, design systems, and production frontend implementation."
	/>
</svelte:head>

<Hero />

<LogoMarquee />

<SectionContainer>
	<h2 class="font-display text-xl font-medium uppercase">Selected Work</h2>
	<WorkCard
		meta="01 / Assignment"
		name="DataPoint"
		href="/work/datapoint"
		type="Product + system design"
		summary="A self-serve traffic-data product for city planners, engineers, and residents."
		role="Product Designer"
		period="2021–2022"
		status="PUBLISHED"
	/>
	<WorkCard
		meta="02 / Assignment"
		name="Zentra"
		href="/work/zentra"
		type="Cross-platform product system"
		summary="A retrofit access-control product and design system for multifamily properties."
		role="Senior UI Designer"
		period="2021–2023"
		status="PUBLISHED"
	/>
</SectionContainer>

<SectionContainer>
	<p class=" text-xs font-medium tracking-wide text-neutral-700 uppercase">Archive</p>
	<h2 class="font-display text-xl font-medium text-neutral-800 uppercase">Field Notes</h2>
	<p class="max-w-3xl text-neutral-700">
		Technical notes on design systems, frontend implementation, and the decisions that connect
		design to production. The first entries are in progress.
	</p>
	<a class="font-medium text-accent-600 underline" href="/field-notes">View Field Notes</a>
</SectionContainer>
