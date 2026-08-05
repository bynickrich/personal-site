<script lang="ts">
	import logo from '$lib/assets/mark.svg';
	import AssignmentCard from '$lib/components/AssignmentCard.svelte';
	import { buttonVariants } from '$lib/components/button/Button.variants';
	import SectionContainer from '$lib/components/SectionContainer.svelte';
</script>

<svelte:head>
	<title>Nick Richardson — Design Engineer</title>
	<meta
		name="description"
		content="Nick Richardson is a frontend-leaning Design Engineer who combines product judgment, design systems, and production frontend implementation."
	/>
</svelte:head>

<SectionContainer>
	<figure class="grid size-80 place-items-center border border-neutral-300 p-6 text-center">
		<img src={logo} alt="" class="size-16" />
		<figcaption class="text-sm font-medium tracking-wide uppercase">
			Design / Systems / Code
		</figcaption>
	</figure>
	<div class="flex flex-col gap-2">
		<p class="flex items-center gap-1 text-sm font-medium tracking-wide text-neutral-700 uppercase">
			<img src={logo} alt="" class="inline size-3" />Frontend-leaning Design Engineer
		</p>
		<div class="flex flex-col gap-1">
			<h1 class="font-display text-3xl">Nick Richardson</h1>
			<p class="max-w-3xl pl-px leading-5.5 text-neutral-700">
				I combine a decade of product-design experience with frontend implementation to build
				polished, accessible, system-driven software.
			</p>
		</div>
	</div>
	<div class="flex w-full gap-4">
		<a href="/assignments" class={buttonVariants({ class: 'w-full' })}>View work</a>
		<a href="/contact" class={buttonVariants({ color: 'outline', class: 'w-full' })}>Contact</a>
	</div>
</SectionContainer>

<SectionContainer>
	<h2 class="font-display text-xl font-medium text-neutral-800 uppercase">Capability profile</h2>
	<ul class="grid gap-2 text-sm text-neutral-700 sm:grid-cols-2">
		<li>Product strategy and interaction design</li>
		<li>Production frontend implementation</li>
		<li>Components, tokens, and design systems</li>
		<li>Accessibility and responsive behavior</li>
	</ul>
</SectionContainer>

<SectionContainer>
	<h2 class="text-center font-display text-xl font-medium text-neutral-800 uppercase">
		Selected work
	</h2>
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

<SectionContainer>
	<p class=" text-xs font-medium tracking-wide text-neutral-700 uppercase">Archive</p>
	<h2 class="font-display text-xl font-medium text-neutral-800 uppercase">Field Notes</h2>
	<p class="max-w-3xl text-neutral-700">
		Technical notes on design systems, frontend implementation, and the decisions that connect
		design to production. The first entries are in progress.
	</p>
	<a class="font-medium text-accent-600 underline" href="/field-notes">View Field Notes</a>
</SectionContainer>
