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
		{ label: 'Peroid', value: period },
		{ label: 'Status', value: status }
	]);
</script>

<a class="flex flex-col justify-end border border-neutral-300 bg-neutral-100" {href}>
	<figure class="aspect-square h-full w-full bg-accent-600/30 p-2"></figure>
	<div class="flex flex-col border-t border-neutral-300 p-2">
		<p class="text-sm font-medium uppercase">{meta}</p>
		<h3 class="font-display text-lg uppercase">{name}</h3>
		<p class="leading-5 text-neutral-700">{summary}</p>
	</div>
	<dl
		class="grid grid-cols-2 gap-px border-t border-neutral-300 bg-neutral-300
		*:bg-neutral-100 *:p-2
		[&_dd]:leading-5 [&_dd]:text-neutral-700
		[&_dt]:font-display [&_dt]:uppercase"
	>
		{#each details as detail (detail.label)}
			<div>
				<dt>{detail.label}</dt>
				<dd>{detail.value}</dd>
			</div>
		{/each}
	</dl>
</a>
