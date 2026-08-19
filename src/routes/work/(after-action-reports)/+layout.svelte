<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<article
	class="report-content flex min-w-0 flex-col gap-3 overflow-clip type-reading text-neutral-800 sm:gap-4 prose-h1:type-page-title prose-h2:type-section-title prose-h3:type-card-title prose-a:text-accent-700 prose-a:underline prose-a:decoration-from-font prose-a:underline-offset-4"
>
	{@render children()}
</article>

<style>
	:global(.report-content .report-block ul) {
		list-style: disc;
		padding-inline-start: 1.25rem;
	}

	:global(.report-content .report-block ol) {
		list-style: decimal;
		padding-inline-start: 1.25rem;
	}

	:global(.report-content .report-block li + li) {
		margin-block-start: 0.5rem;
	}

	:global(.report-content .report-block p) {
		margin-block-end: 0;
		color: var(--color-neutral-700);
	}

	:global(.report-content .report-block strong) {
		font-weight: 600;
		color: var(--color-neutral-800);
	}
</style>
