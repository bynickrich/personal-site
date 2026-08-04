<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<section class="mb-4 flex flex-col gap-2 border border-neutral-300 bg-neutral-100 p-3">
	{@render children()}
</section>
