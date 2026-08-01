<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import '@fontsource-variable/ibm-plex-sans/wght.css';
	import '@fontsource/ibm-plex-sans-condensed/600.css';
	import '@fontsource/ibm-plex-sans-condensed/700.css';
	import '@fontsource/ibm-plex-mono';

	let { children } = $props();
</script>

<svelte:head
	><link rel="icon" href={favicon} />
	<title>Nick Richardson</title>
</svelte:head>

{@render children()}
