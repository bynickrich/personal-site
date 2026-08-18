<script lang="ts">
	import type { AfterActionReport } from '$lib/content/case-studies';

	import DitherShader from './DitherShader.svelte';

	let {
		id,
		title,
		summary,
		role,
		organization,
		period,
		scope,
		outcome,
		projectStatus,
		publicationState,
		featured,
		order,
		cover,
		href
	}: AfterActionReport = $props();

	let hoverActive = $state(false);

	const cardClass =
		'bg-neutral-100 ring ring-neutral-300 ring-inset md:grid md:grid-cols-[1fr_2fr]';
</script>

{#snippet reportContent()}
	<figure
		class="relative aspect-square w-full md:col-start-1 md:aspect-auto md:border-r md:border-neutral-300"
	>
		<DitherShader
			class="absolute inset-0"
			image={cover.src}
			hoverImage={cover.hoverSrc ?? cover.src}
			separation={cover.separation ?? 0.1}
			active={href ? hoverActive : false}
		/>
	</figure>

	<div
		class="dec-border-t flex flex-col before:border-t before:border-neutral-300 md:before:border-t-0"
	>
		<div class="flex justify-between gap-3 px-3 pt-3 type-eyebrow text-neutral-700">
			<p>{id} //// {projectStatus}</p>
			<p>
				Access / {publicationState === 'locked' ? 'Locked' : 'Open'}
				{#if href}<span aria-hidden="true">↗</span>{/if}
			</p>
		</div>

		<div class="px-3 pt-3 pb-3 md:mt-auto md:flex md:flex-col md:gap-1 md:py-12">
			<h3 class="type-card-title md:type-section-title">{title}</h3>
			<p class="type-compact text-neutral-700 md:type-intro">{summary}</p>
		</div>

		<dl class="hidden grid-cols-3 border-t border-neutral-300 md:grid">
			<div class="col-span-3 border-b border-neutral-300 px-3 py-2">
				<dt class="type-eyebrow">Outcome</dt>
				<dd class="type-caption text-neutral-700">{outcome}</dd>
			</div>
			<div class="border-r border-b border-neutral-300 px-3 py-2">
				<dt class="type-eyebrow">Role</dt>
				<dd class="type-caption text-neutral-700">{role}</dd>
			</div>
			<div class="border-r border-b border-neutral-300 px-3 py-2">
				<dt class="type-eyebrow">Organization</dt>
				<dd class="type-caption text-neutral-700">{organization}</dd>
			</div>
			<div class="border-b border-neutral-300 px-3 py-2">
				<dt class="type-eyebrow">Period</dt>
				<dd class="type-caption text-neutral-700">{period}</dd>
			</div>
			<div class="col-span-3 px-3 py-2">
				<dt class="type-eyebrow">Scope</dt>
				<dd class="type-caption text-neutral-700">{scope.join(' / ')}</dd>
			</div>
		</dl>
	</div>
{/snippet}

{#if href}
	<a
		class={cardClass}
		{href}
		data-order={order}
		data-featured={featured || undefined}
		onpointerenter={() => (hoverActive = true)}
		onpointerleave={() => (hoverActive = false)}
		onpointercancel={() => (hoverActive = false)}
		onfocus={() => (hoverActive = true)}
		onblur={() => (hoverActive = false)}
	>
		{@render reportContent()}
	</a>
{:else}
	<article
		class={cardClass}
		data-order={order}
		data-featured={featured || undefined}
		data-publication-state="locked"
	>
		{@render reportContent()}
	</article>
{/if}
