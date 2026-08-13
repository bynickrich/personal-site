<script lang="ts">
	import type { WorkItem } from '$lib/content/work';

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
		status,
		outcome
	}: WorkItem = $props();

	let details = $derived([
		{ label: 'Platforms', value: platforms },
		{ label: 'Role', value: role },
		{ label: 'Timeline', value: timeline },
		{ label: 'Stack', value: stack },
		{ label: 'Status', value: status }
	]);
</script>

<a
	class="grid before:border-t before:border-neutral-300"
	{href}
	data-order={order}
	data-featured={featured || undefined}
>
	<!-- Animation -->
	<figure
		class="aspect-square h-full w-full bg-accent-300 md:col-start-1 md:row-span-3 md:aspect-[unset]"
	></figure>
	<!-- Title + Description -->
	<div class="dec-border-t grid grid-cols-2 p-3 before:border-t before:border-neutral-300">
		<div class="col-span-2 flex justify-between pb-3 type-eyebrow text-neutral-600">
			<p>[ {status} ]</p>
			<p>cords | {meta}</p>
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
