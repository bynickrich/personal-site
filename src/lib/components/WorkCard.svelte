<script lang="ts">
	import type { WorkItem } from '$lib/content/work';

	import DitherShader from './DitherShader.svelte';

	let {
		order,
		cardImage,
		cardImageHover,
		separation,
		featured,
		meta,
		href,
		name,
		shortDescription,
		role,
		timeline,
		platforms,
		stack,
		status
	}: WorkItem = $props();

	let hoverActive = $state(false);
</script>

<a
	class="grid md:grid-cols-2 md:place-items-end"
	{href}
	data-order={order}
	data-featured={featured || undefined}
	onpointerenter={() => (hoverActive = true)}
	onpointerleave={() => (hoverActive = false)}
	onpointercancel={() => (hoverActive = false)}
	onfocus={() => (hoverActive = true)}
	onblur={() => (hoverActive = false)}
>
	<!-- Artwork -->
	<figure class="relative aspect-square w-full md:col-start-1">
		<DitherShader image={cardImage} hoverImage={cardImageHover} {separation} active={hoverActive} />
	</figure>
	<!-- Title + Description -->
	<div class=" grid grid-cols-2 p-3 md:col-start-2">
		<div class="col-span-2 flex justify-between pb-3 type-eyebrow text-neutral-600">
			<p>[ {status} ]</p>
			<p>{meta} ↗</p>
		</div>
		<h3 class="col-span-2 type-card-title">{name}</h3>
		<p class="col-span-2 type-compact text-neutral-700">{shortDescription}</p>
		<!-- Extended Metadata -->
		<dl class="hidden grid-cols-3 md:grid">
			<dt class="type-metadata">Role</dt>
			<dd class="type-label text-neutral-700">{role}</dd>
			<dt class="type-metadata">Timeline</dt>
			<dd class="type-label text-neutral-700">{timeline}</dd>
			<dt class="type-metadata">Platforms</dt>
			<dd class="type-label text-neutral-700">{platforms}</dd>
			<dt class="type-metadata">Stack</dt>
			<dd class="type-label text-neutral-700">{stack}</dd>
		</dl>
	</div>
</a>
