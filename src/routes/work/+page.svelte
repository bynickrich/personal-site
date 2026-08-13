<script lang="ts">
	import WorkCard from '$lib/components/WorkCard.svelte';

	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>Work — Nick Richardson</title>
	<meta
		name="description"
		content="Selected product, design-system, and frontend work by Design Engineer Nick Richardson."
	/>
</svelte:head>

<section class="bg-neutral-100 ring ring-neutral-300 ring-inset">
	{#each data.work as work (work.href)}
		<WorkCard {...work} />
	{/each}
</section>
