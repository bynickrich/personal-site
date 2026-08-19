<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>Field Notes | Nick Richardson</title>
	<meta
		name="description"
		content="Notes from Nick Richardson on design systems, frontend work, accessibility, and interface details."
	/>
</svelte:head>

<section class="bg-neutral-100 ring ring-neutral-300 ring-inset">
	<header class="grid md:grid-cols-[minmax(0,1fr)_18rem]">
		<div class="p-3">
			<p class="type-eyebrow text-neutral-700">04 //// Field Notes</p>
			<div class="mt-3 flex flex-col gap-1">
				<h1 class="type-page-title">Field Notes</h1>
				<p class="max-w-3xl type-reading text-neutral-700">
					Notes on design systems, frontend work, accessibility, and the small details that make
					interfaces feel right.
				</p>
			</div>
		</div>
		<dl class="grid grid-cols-2 border-t border-neutral-300 md:border-t-0 md:border-l">
			<div class="border-r border-neutral-300 p-3">
				<dt class="type-eyebrow">Entries</dt>
				<dd class="mt-1 type-caption text-neutral-700">
					{String(data.notes.length).padStart(2, '0')}
				</dd>
			</div>
			<div class="p-3">
				<dt class="type-eyebrow">Status</dt>
				<dd class="mt-1 type-caption text-neutral-700">
					{data.notes.length ? 'Active' : 'In Preparation'}
				</dd>
			</div>
		</dl>
	</header>

	{#if data.notes.length}
		<ul class="border-t border-neutral-300">
			{#each data.notes as note (note.slug)}
				<li class="border-b border-neutral-300 last:border-b-0">
					<a
						class="grid gap-2 p-3 transition-colors hover:bg-neutral-200 md:grid-cols-[8rem_1fr_auto]"
						href={note.href}
					>
						<p class="type-eyebrow text-neutral-700">{note.id}</p>
						<div>
							<h2 class="type-card-title">{note.title}</h2>
							<p class="type-caption text-neutral-700">{note.summary}</p>
						</div>
						<p class="type-eyebrow text-neutral-700">
							{note.topic} / {note.updated ?? note.issued} ↗
						</p>
					</a>
				</li>
			{/each}
		</ul>
	{:else}
		<p class="border-t border-neutral-300 p-3 type-reading text-neutral-700">
			No Field Notes are published yet.
		</p>
	{/if}
</section>
