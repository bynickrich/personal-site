<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children, id }: { children: Snippet; id?: string } = $props();
</script>

<section
	{id}
	class="report-block bg-neutral-100 p-3 ring ring-neutral-300 ring-inset sm:p-6 lg:p-8"
>
	{@render children()}
</section>

<style>
	.report-block {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	:global(.report-block > p),
	:global(.report-block > ul),
	:global(.report-block > ol) {
		max-width: 68ch;
	}

	:global(.report-block > h2) {
		max-width: 20ch;
		text-wrap: balance;
	}

	:global(.report-block > h3) {
		margin-block-start: 1rem;
		max-width: 36ch;
		text-wrap: balance;
	}

	:global(.report-block > p > strong:first-child) {
		display: block;
		margin-block-end: 0.25rem;
		font-family: var(--font-mono);
		font-size: 0.75rem;
		font-weight: 600;
		line-height: 1rem;
		letter-spacing: 0.04em;
		text-transform: uppercase;
	}

	@media (min-width: 48rem) {
		.report-block {
			display: grid;
			grid-template-columns: minmax(12rem, 0.9fr) minmax(0, 2fr);
			column-gap: 2rem;
			row-gap: 1rem;
		}

		:global(.report-block > h2) {
			grid-row: 1;
			grid-column: 1;
		}

		:global(.report-block > :not(h2)) {
			grid-column: 2;
		}
	}
</style>
