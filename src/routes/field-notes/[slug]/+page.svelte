<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	let Content = $derived(data.component);
</script>

<svelte:head>
	<title>{data.metadata.title} — Field Notes — Nick Richardson</title>
	<meta name="description" content={data.metadata.summary} />
</svelte:head>

<article
	class="flex flex-col gap-3 overflow-clip bg-neutral-100 type-reading ring ring-neutral-300 ring-inset prose-h1:type-page-title prose-h2:type-section-title prose-h3:type-card-title prose-p:mb-3 prose-p:text-neutral-700 prose-a:text-accent-600 prose-a:underline"
>
	<header class="flex flex-col gap-3 border-b border-neutral-300 p-3">
		<div class="flex justify-between gap-3 type-eyebrow text-neutral-700">
			<p>{data.metadata.id} //// Field Note</p>
			<p>Issued / {data.metadata.issued}</p>
		</div>
		<div>
			<h1 class="type-page-title">{data.metadata.title}</h1>
			<p class="max-w-3xl type-intro text-neutral-700">{data.metadata.summary}</p>
		</div>
	</header>
	<div class="p-3">
		<Content />
	</div>
</article>
