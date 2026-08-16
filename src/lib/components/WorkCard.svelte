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
		status,
		outcome
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
	<figure
		class="relative aspect-square w-full md:col-start-1 md:aspect-auto md:border-r md:border-neutral-300"
	>
		<DitherShader
			class="absolute inset-0"
			image={cardImage}
			hoverImage={cardImageHover}
			{separation}
			active={hoverActive}
		/>
	</figure>
	<!-- Title + Description -->
	<div
		class="dec-border-t flex flex-col before:border-t before:border-neutral-300 md:before:border-t-0"
	>
		<!-- Document index -->
		<div class="flex justify-between px-3 pt-3 type-eyebrow text-neutral-700">
			<p>[ {status} ]</p>
			<p>{meta} ↗</p>
		</div>

		<!-- Project narrative -->
		<div class="px-3 pt-3 pb-3 md:mt-auto md:flex md:flex-col md:gap-2 md:py-12">
			<h3 class="type-card-title md:type-section-title">{name}</h3>
			<p class="type-compact text-neutral-700 md:type-intro">{shortDescription}</p>
		</div>

		<!-- Drawing title block -->
		<dl class="hidden grid-cols-3 border-t border-neutral-300 md:grid">
			<div class="col-span-3 border-b border-neutral-300 px-3 py-2">
				<dt class="type-eyebrow">Outcome</dt>
				<dd class="type-caption text-neutral-700">{outcome}</dd>
			</div>
			<div class=" border-r border-b border-neutral-300 px-3 py-2">
				<dt class="type-eyebrow">Role</dt>
				<dd class="type-caption text-neutral-700">{role}</dd>
			</div>
			<div class=" border-r border-b border-neutral-300 px-3 py-2">
				<dt class="type-eyebrow">Timeline</dt>
				<dd class="type-caption text-neutral-700">{timeline}</dd>
			</div>
			<div class=" border-b border-neutral-300 px-3 py-2">
				<dt class="type-eyebrow">Platforms</dt>
				<dd class="type-caption text-neutral-700">{platforms}</dd>
			</div>
			<div class="col-span-3 h-fit px-3 py-2">
				<dt class="type-eyebrow">Stack</dt>
				<dd class="type-caption text-neutral-700">{stack}</dd>
			</div>
		</dl>
	</div>
</a>
