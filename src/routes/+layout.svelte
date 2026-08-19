<script lang="ts">
	import '@fontsource-variable/ibm-plex-sans/wght.css';
	import '@fontsource/ibm-plex-sans-condensed/500.css';
	import '@fontsource/ibm-plex-sans-condensed/600.css';
	import favicon from '#lib/assets/mark.svg';

	import './layout.css';
	import DevelopmentBanner from '#lib/components/DevelopmentBanner.svelte';
	import Footer from '#lib/components/Footer.svelte';
	import Navbar from '#lib/components/Navbar.svelte';

	let { children } = $props();

	// TODO: Consider moving diagonal lines onto main?
	// TODO: Footer component
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<DevelopmentBanner />
<Navbar />
<main class="flex flex-col gap-3 ring-neutral-300 sm:w-full sm:max-w-300 sm:gap-4">
	{@render children()}
</main>
<Footer />
