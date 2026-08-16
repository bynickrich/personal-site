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
	class="bg-neutral-100 ring ring-neutral-300 ring-inset md:grid md:grid-cols-[1fr_2fr]"
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
	<figure class="relative aspect-square w-full md:col-start-1 md:border-r md:border-neutral-300">
		<DitherShader image={cardImage} hoverImage={cardImageHover} {separation} active={hoverActive} />
	</figure>
	<!-- Title + Description -->
	<div
		class="dec-border-t flex flex-col before:border-t before:border-neutral-300 md:before:border-t-0"
	>
		<div class="grid grid-cols-2 p-3">
			<div class="col-span-2 flex justify-between pb-3 type-eyebrow text-neutral-600">
				<p>[ {status} ]</p>
				<p>{meta} ↗</p>
			</div>
			<h3 class="col-span-2 type-card-title">{name}</h3>
			<p class="col-span-2 type-compact text-neutral-700">{shortDescription}</p>
		</div>

		<!-- Drawing title block -->
		<dl class="mt-auto hidden grid-cols-3 border-t border-neutral-300 md:grid">
			<div class="min-w-0 border-r border-b border-neutral-300 p-3">
				<dt class="type-eyebrow text-neutral-600">Role</dt>
				<dd class="mt-1 type-caption text-neutral-800">{role}</dd>
			</div>
			<div class="min-w-0 border-r border-b border-neutral-300 p-3">
				<dt class="type-eyebrow text-neutral-600">Timeline</dt>
				<dd class="mt-1 type-caption text-neutral-800">{timeline}</dd>
			</div>
			<div class="min-w-0 border-b border-neutral-300 p-3">
				<dt class="type-eyebrow text-neutral-600">Platforms</dt>
				<dd class="mt-1 type-caption text-neutral-800">{platforms}</dd>
			</div>
			<div class="col-span-3 min-w-0 p-3">
				<dt class="type-eyebrow text-neutral-600">Stack</dt>
				<dd class="mt-1 type-caption break-words text-neutral-800">{stack}</dd>
			</div>
		</dl>
	</div>
</a>
