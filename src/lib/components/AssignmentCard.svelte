<script lang="ts">
	type Props = {
		href: string;
		name: string;
		projectType: string;
		summary: string;
		role: string;
		year: string;
		status: 'IN PROGRESS' | 'PUBLISHED';
	};

	let { href, name, projectType, summary, role, year, status }: Props = $props();
</script>

<a class="block border border-neutral-300 bg-neutral-100" {href}>
	<div class="flex min-h-52 flex-col justify-between gap-6 p-3">
		<p class="font-mono text-xs font-medium tracking-wide text-neutral-700 uppercase">
			{projectType}
		</p>
		<div class="flex flex-col gap-2">
			<h3 class="font-display text-2xl font-medium">{name}</h3>
			<p class="max-w-2xl text-neutral-700">{summary}</p>
		</div>
	</div>
	<div
		class="flex min-h-8 items-center justify-between gap-3 border-t border-neutral-300 px-2 py-1.5 text-xs font-medium text-neutral-700 uppercase"
	>
		<p><span aria-hidden="true">&gt;</span> {role} / {year}</p>
		<p>{status}</p>
	</div>
</a>
