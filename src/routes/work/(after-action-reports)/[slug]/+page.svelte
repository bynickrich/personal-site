<script lang="ts">
	import AfterActionReportHeader from '$lib/components/AfterActionReportHeader.svelte';
	import FigmaEmbed from '$lib/components/FigmaEmbed.svelte';
	import ReportNavigation from '$lib/components/ReportNavigation.svelte';

	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	let Content = $derived(data.component);
</script>

<svelte:head>
	<title>{data.metadata.title} — After Action Report — Nick Richardson</title>
	<meta name="description" content={data.metadata.summary} />
</svelte:head>

<AfterActionReportHeader report={data.metadata} />
<div
	class={[
		'grid min-w-0 grid-cols-[minmax(0,1fr)] gap-3 sm:gap-4',
		data.metadata.navigation && 'lg:grid-cols-[12rem_minmax(0,1fr)] lg:items-start'
	]}
>
	{#if data.metadata.navigation}
		<ReportNavigation reportId={data.metadata.id} items={data.metadata.navigation} />
	{/if}

	<div class="flex min-w-0 flex-col gap-3 sm:gap-4">
		<Content />
		{#if data.metadata.figma}
			<FigmaEmbed
				title={data.metadata.figma.title}
				url={data.metadata.figma.url}
				description={data.metadata.figma.description}
			/>
		{/if}
	</div>
</div>
