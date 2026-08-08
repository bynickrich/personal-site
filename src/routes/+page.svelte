<script lang="ts">
	import logo from '$lib/assets/mark.svg';
	import AssignmentCard from '$lib/components/AssignmentCard.svelte';
	import { buttonVariants } from '$lib/components/button/Button.variants';
	import LogoMarquee from '$lib/components/LogoMarquee.svelte';
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
	<figure class="grid aspect-square place-items-center p-6 text-center md:aspect-video">
		<figcaption class="text-sm font-medium tracking-wide uppercase">
			ISOMETRIC ANIMATED ILLUSTRATION
		</figcaption>
	</figure>
	<div class="flex flex-col gap-4">
		<p
			class="flex items-center gap-1 font-mono text-sm leading-5 font-medium text-neutral-700 uppercase"
		>
			<img src={logo} alt="" class="inline size-3 translate-y-[-0.5px]" />Design Engineer
		</p>
		<div class="flex flex-col gap-0.5">
			<h1 class="font-display text-3xl leading-8 tracking-tight">Nick Richardson</h1>
			<p class="max-w-3xl pl-px leading-6 text-neutral-700">
				I combine a decade of product-design experience with frontend implementation to build
				polished, accessible, system-driven software.
			</p>
		</div>
	</div>
	<!-- TODO: Not totally happy with the spacing here -->
	<div class="flex w-full gap-2">
		<a href="/assignments" class={buttonVariants({ class: 'w-full' })}>View work</a>
		<a href="/contact" class={buttonVariants({ color: 'outline', class: 'w-full' })}>Contact</a>
	</div>
</SectionContainer>

<LogoMarquee />

<SectionContainer>
	<h2 class="font-display text-xl font-medium uppercase">Selected Work</h2>
	<AssignmentCard
		meta="01 / Assignment"
		name="DataPoint"
		href="/assignments/datapoint"
		type="Product + system design"
		summary="A self-serve traffic-data product for city planners, engineers, and residents."
		role="Product Designer"
		period="2021–2022"
		status="PUBLISHED"
	/>
	<AssignmentCard
		meta="02 / Assignment"
		name="Zentra"
		href="/assignments/zentra"
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
