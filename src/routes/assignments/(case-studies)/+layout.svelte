<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<article class="overflow-clip border border-neutral-300 bg-neutral-100 p-3">
	{@render children()}
</article>
