<script lang="ts">
	import type { WorkItem } from '$lib/content/work';

	import DitherShader from './DitherShader.svelte';

	let {
		order,
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

	// TODO: Revisist this derived.
	let details = $derived([
		{ label: 'Platforms', value: platforms },
		{ label: 'Role', value: role },
		{ label: 'Timeline', value: timeline },
		{ label: 'Stack', value: stack },
		{ label: 'Status', value: status }
	]);

	type DitherPreset = {
		image: string;
		hoverImage?: string;
		imageScale?: number;
		contrast?: number;
		brightness?: number;
		separation?: number;
		shadowFloor?: number;
		pixelSize?: number;
	};

	const sharedDitherPreset = {
		imageScale: 0.88,
		contrast: 1.3,
		brightness: 0.03,
		shadowFloor: 0.15,
		pixelSize: 2
	} satisfies Omit<DitherPreset, 'image'>;

	const ditherPresets: Record<string, DitherPreset> = {
		'/work/catalyst': {
			...sharedDitherPreset,
			image: '/work/Catalyst-Mask.png',
			hoverImage: '/work/Catalyst-Mask-Hover.png',
			separation: 0.18
		},
		'/work/datapoint': {
			...sharedDitherPreset,
			image: '/work/DataPoint-Mask.png',
			hoverImage: '/work/DataPoint-Mask-Hover.png',
			separation: 0.1
		},
		'/work/zentra': {
			...sharedDitherPreset,
			image: '/work/Zentra-Mask.png',
			hoverImage: '/work/Zentra-Mask-Hover.png',
			separation: 0.14
		}
	};

	let ditherPreset = $derived(ditherPresets[href]);
	let artworkActive = $state(false);
</script>

<!-- TODO: Replace with article tag -->
<a
	class="grid md:grid-cols-[minmax(0,400px)_minmax(0,1fr)]"
	{href}
	data-order={order}
	data-featured={featured || undefined}
	onpointerenter={() => (artworkActive = true)}
	onpointerleave={() => (artworkActive = false)}
	onpointercancel={() => (artworkActive = false)}
	onfocus={() => (artworkActive = true)}
	onblur={() => (artworkActive = false)}
>
	<!-- Artwork -->
	<figure class="relative aspect-square w-full md:col-start-1">
		<DitherShader {...ditherPreset} active={artworkActive} />
		<span
			class="pointer-events-none absolute inset-0 ring ring-neutral-300 ring-inset"
			aria-hidden="true"
		></span>
	</figure>
	<!-- Title + Description -->
	<div
		class="dec-border-t grid grid-cols-2 p-3 before:border-t before:border-neutral-300 md:col-start-2"
	>
		<div class="col-span-2 flex justify-between pb-3 type-eyebrow text-neutral-600">
			<p>[ {status} ]</p>
			<p>{meta} ↗</p>
		</div>
		<h3 class="col-span-2 type-card-title">{name}</h3>
		<p class="col-span-2 type-compact text-neutral-700">{shortDescription}</p>
		<!-- Extended Metadata -->
		<dl
			class="hidden grid-cols-2
			*:p-2 sm:grid"
		>
			{#each details as detail (detail.label)}
				<div>
					<dt class="type-eyebrow">{detail.label}</dt>
					<dd class="type-caption text-neutral-700">{detail.value}</dd>
				</div>
			{/each}
		</dl>
	</div>
</a>
