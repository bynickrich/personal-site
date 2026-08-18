<script lang="ts">
	import FeaturedWork from '$lib/components/FeaturedWork.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import LogoMarquee from '$lib/components/LogoMarquee.svelte';
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
<FeaturedWork />
