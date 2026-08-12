<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<article
	class="type-reading flex flex-col gap-3 overflow-clip prose-headings:uppercase prose-h1:type-page-title prose-h2:type-section-title prose-h3:type-card-title prose-p:mb-3 prose-p:text-neutral-700 prose-a:font-medium prose-a:text-accent-600 prose-a:underline"
>
	{@render children()}
</article>
