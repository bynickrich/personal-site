<script lang="ts">
	import '@fontsource-variable/ibm-plex-sans/wght.css';
	import '@fontsource/ibm-plex-mono';
	import '@fontsource/ibm-plex-sans-condensed/600.css';
	import '@fontsource/ibm-plex-sans-condensed/700.css';
	import favicon from '$lib/assets/mark.svg';

	import './layout.css';
	import Navbar from '$lib/components/Navbar.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<Navbar />
{@render children()}
