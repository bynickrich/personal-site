<script lang="ts">
	import '@fontsource-variable/ibm-plex-sans/wght.css';
	import '@fontsource/ibm-plex-mono';
	import '@fontsource/ibm-plex-sans-condensed/600.css';
	import '@fontsource/ibm-plex-sans-condensed/700.css';
	import favicon from '$lib/assets/favicon.svg';

	import './layout.css';

	let { children } = $props();
</script>

<svelte:head
	><link rel="icon" href={favicon} />
	<title>Nick Richardson</title>
</svelte:head>

{@render children()}
