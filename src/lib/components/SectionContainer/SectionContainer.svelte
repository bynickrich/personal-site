<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<section class="flex flex-col gap-2 bg-neutral-100 p-2 ring ring-neutral-300 ring-inset sm:p-6">
	{@render children()}
</section>
