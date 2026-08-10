<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<article
	class="flex flex-col gap-3 overflow-clip prose-headings:font-display prose-headings:uppercase prose-h2:text-2xl prose-p:mb-3 prose-p:text-neutral-700 prose-a:font-medium prose-a:text-accent-600 prose-a:underline"
>
	{@render children()}
</article>
