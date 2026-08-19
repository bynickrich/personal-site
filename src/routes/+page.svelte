<script lang="ts">
	import FeaturedWork from '$lib/components/FeaturedWork.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import LogoMarquee from '$lib/components/LogoMarquee.svelte';
</script>

<svelte:head>
	<title>Nick Richardson | Design Engineer</title>
	<meta
		name="description"
		content="Nick Richardson is a design engineer who brings product design and frontend development together."
	/>
</svelte:head>

<Hero />
<LogoMarquee />
<FeaturedWork />
