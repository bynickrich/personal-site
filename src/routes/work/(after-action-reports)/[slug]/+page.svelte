<script lang="ts">
	import AfterActionReportHeader from '$lib/components/AfterActionReportHeader.svelte';

	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	let Content = $derived(data.component);
</script>

<svelte:head>
	<title>{data.metadata.title} — After Action Report — Nick Richardson</title>
	<meta name="description" content={data.metadata.summary} />
</svelte:head>

<AfterActionReportHeader report={data.metadata} />
<Content />
