<script lang="ts">
	import WorkCard from './WorkCard.svelte';
</script>

<section class="flex flex-col gap-2 bg-neutral-100 p-2 ring ring-neutral-300 ring-inset sm:p-6">
	<h2 class="type-section-title text-center">Selected Work</h2>
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
</section>
