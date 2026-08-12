<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import LogoMarquee from '$lib/components/LogoMarquee.svelte';
	import SectionContainer from '$lib/components/SectionContainer.svelte';
	import SelectedWork from '$lib/components/SelectedWork.svelte';
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
	<p class="type-eyebrow text-neutral-700">Archive</p>
	<h2 class="type-section-title text-neutral-800 uppercase">Field Notes</h2>
	<p class="type-reading max-w-3xl text-neutral-700">
		Technical notes on design systems, frontend implementation, and the decisions that connect
		design to production. The first entries are in progress.
	</p>
	<a class="type-compact font-medium text-accent-600 underline" href="/field-notes">
		View Field Notes
	</a>
</SectionContainer>
