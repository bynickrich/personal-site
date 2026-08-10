<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import LogoMarquee from '$lib/components/LogoMarquee.svelte';
	import SectionContainer from '$lib/components/SectionContainer.svelte';
	import SelectedWork from '$lib/components/SelectedWork.svelte';
	import WorkCard from '$lib/components/WorkCard.svelte';
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
<SelectedWork />

<SectionContainer>
	<p class=" text-xs font-medium tracking-wide text-neutral-700 uppercase">Archive</p>
	<h2 class="font-display text-xl font-medium text-neutral-800 uppercase">Field Notes</h2>
	<p class="max-w-3xl text-neutral-700">
		Technical notes on design systems, frontend implementation, and the decisions that connect
		design to production. The first entries are in progress.
	</p>
	<a class="font-medium text-accent-600 underline" href="/field-notes">View Field Notes</a>
</SectionContainer>
