<script lang="ts">
	interface Props {
		title: string;
		description: string;
		role: string;
		organization: string;
		dateRange: string;
		disciplines: string;
		status?: string;
	}

	let {
		title,
		description,
		role,
		organization,
		dateRange,
		disciplines,
		status = 'Published'
	}: Props = $props();
</script>

<header class="flex flex-col gap-6 border border-neutral-300 bg-neutral-100 p-3">
	<div class="flex flex-col gap-2">
		<p class="font-mono text-xs font-medium tracking-wide text-neutral-700 uppercase">
			Project brief
		</p>
		<h1 class="font-display text-4xl font-semibold uppercase">{title}</h1>
		<p class="max-w-3xl text-lg text-neutral-700">{description}</p>
	</div>
	<dl class="grid gap-3 border-t border-neutral-300 pt-3 text-sm sm:grid-cols-2 lg:grid-cols-5">
		<div>
			<dt class="font-mono text-xs text-neutral-600 uppercase">Role</dt>
			<dd>{role}</dd>
		</div>
		<div>
			<dt class="font-mono text-xs text-neutral-600 uppercase">Organization</dt>
			<dd>{organization}</dd>
		</div>
		<div>
			<dt class="font-mono text-xs text-neutral-600 uppercase">Period</dt>
			<dd>{dateRange}</dd>
		</div>
		<div>
			<dt class="font-mono text-xs text-neutral-600 uppercase">Scope</dt>
			<dd>{disciplines}</dd>
		</div>
		<div>
			<dt class="font-mono text-xs text-neutral-600 uppercase">Status</dt>
			<dd>{status}</dd>
		</div>
	</dl>
</header>
