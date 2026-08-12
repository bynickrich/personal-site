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
		<p class="type-eyebrow text-neutral-700">Project brief</p>
		<h1 class="type-page-title uppercase">{title}</h1>
		<p class="type-intro max-w-3xl text-neutral-700">{description}</p>
	</div>
	<dl class="type-caption grid gap-3 border-t border-neutral-300 pt-3 sm:grid-cols-2 lg:grid-cols-5">
		<div>
			<dt class="type-eyebrow text-neutral-600">Role</dt>
			<dd>{role}</dd>
		</div>
		<div>
			<dt class="type-eyebrow text-neutral-600">Organization</dt>
			<dd>{organization}</dd>
		</div>
		<div>
			<dt class="type-eyebrow text-neutral-600">Period</dt>
			<dd>{dateRange}</dd>
		</div>
		<div>
			<dt class="type-eyebrow text-neutral-600">Scope</dt>
			<dd>{disciplines}</dd>
		</div>
		<div>
			<dt class="type-eyebrow text-neutral-600">Status</dt>
			<dd>{status}</dd>
		</div>
	</dl>
</header>
