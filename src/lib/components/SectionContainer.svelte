<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<section class="flex flex-col gap-2 border border-neutral-300 bg-neutral-100 p-3">
	{@render children()}
</section>
