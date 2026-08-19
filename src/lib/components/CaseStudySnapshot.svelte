<script lang="ts">
	type SnapshotItem = {
		label: string;
		value: string;
	};

	let {
		id = 'snapshot',
		title = 'At a glance',
		items
	}: {
		id?: string;
		title?: string;
		items: SnapshotItem[];
	} = $props();
</script>

<section
	{id}
	class="bg-neutral-100 ring ring-neutral-300 ring-inset"
	aria-labelledby={`${id}-title`}
>
	<header class="border-b border-neutral-300 p-3">
		<p class="type-eyebrow text-accent-700">Executive read</p>
		<h2 id={`${id}-title`} class="mt-1 type-section-title text-balance">{title}</h2>
	</header>

	<dl class="grid md:grid-cols-3">
		{#each items as item, index (item.label)}
			<div
				class={[
					'min-w-0 p-3',
					index < items.length - 1 && 'border-b border-neutral-300 md:border-r md:border-b-0'
				]}
			>
				<dt class="type-eyebrow text-neutral-700">{item.label}</dt>
				<dd class="mt-2 max-w-[40ch] type-reading text-pretty text-neutral-800">{item.value}</dd>
			</div>
		{/each}
	</dl>
</section>
