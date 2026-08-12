<script lang="ts">
	type Props = {
		meta: string;
		href: string;
		name: string;
		type: string;
		summary: string;
		role: string;
		period: string;
		status: 'IN PROGRESS' | 'PUBLISHED';
	};

	let { meta, href, name, type, summary, role, period, status }: Props = $props();

	let details = $derived([
		{ label: 'Type', value: type },
		{ label: 'Role', value: role },
		{ label: 'Period', value: period },
		{ label: 'Status', value: status }
	]);
</script>

<a class="grid bg-neutral-100 ring ring-neutral-300 ring-inset" {href}>
	<!-- Animation -->
	<figure
		class="aspect-square h-full w-full p-2 md:col-start-1 md:row-span-3 md:aspect-[unset]"
	></figure>
	<!-- Title + Description -->
	<div class="dec-border-t grid grid-cols-2 p-2 before:border-t before:border-neutral-300">
		<p class="type-metadata col-span-2 text-neutral-700">{meta}</p>
		<h3 class="type-card-title col-span-2 pt-2.5">{name}</h3>
		<p class="type-compact col-span-2 text-neutral-700">{summary}</p>
		<!-- Extended Metadata -->
		<dl
			class="hidden grid-cols-2 gap-px
			*:p-2 sm:grid
			md:ring md:ring-neutral-300 md:ring-inset"
		>
			{#each details as detail (detail.label)}
				<div>
					<dt class="type-eyebrow text-neutral-600">{detail.label}</dt>
					<dd class="type-caption text-neutral-700">{detail.value}</dd>
				</div>
			{/each}
		</dl>
	</div>
</a>
