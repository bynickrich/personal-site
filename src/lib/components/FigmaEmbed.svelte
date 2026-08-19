<script lang="ts">
	let {
		id = 'figma-file',
		title,
		url,
		description = 'Explore the source file for additional flows, component states, and interaction detail.'
	}: {
		id?: string;
		title: string;
		url: string;
		description?: string;
	} = $props();

	let embedUrl = $derived(
		`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(url)}`
	);
</script>

<section
	{id}
	class="overflow-hidden bg-neutral-100 ring ring-neutral-300 ring-inset"
	aria-labelledby={`${id}-title`}
>
	<header class="grid gap-4 p-3 sm:p-4 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
		<div>
			<p class="type-eyebrow text-accent-700">Working file</p>
			<h2 id={`${id}-title`} class="mt-1 type-section-title text-balance">{title}</h2>
			<p class="mt-1 max-w-[65ch] type-caption text-pretty text-neutral-700">{description}</p>
		</div>
		<a
			href={url}
			target="_blank"
			rel="noreferrer"
			class="inline-flex min-h-11 items-center justify-center bg-neutral-900 px-4 type-button whitespace-nowrap text-neutral-50"
		>
			Open in Figma ↗
		</a>
	</header>

	<div class="aspect-[4/3] border-t border-neutral-300 sm:aspect-video">
		<iframe
			src={embedUrl}
			title={`${title} embedded Figma file`}
			loading="lazy"
			allowfullscreen
			class="bg-white size-full border-0"
		></iframe>
	</div>
</section>
