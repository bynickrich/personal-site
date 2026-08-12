<script lang="ts">
	const year = new Date().getFullYear();
	import src from '$lib/assets/mark.svg';
	import Bluesky from '$lib/icons/Bluesky.svelte';
	import Github from '$lib/icons/Github.svelte';
	import LinkedIn from '$lib/icons/LinkedIn.svelte';
	import Twitter from '$lib/icons/Twitter.svelte';
</script>

<footer
	class="relative mt-3 mb-20 max-w-300 bg-neutral-100 ring ring-neutral-300 ring-inset sm:grid sm:h-fit sm:grid-cols-2 sm:grid-rows-1"
>
	<!-- Legal Disclosure -->
	<div class="flex gap-2 p-3 sm:col-start-1">
		<div class="flex flex-col gap-1">
			<p class="type-compact font-medium">Nick Richardson ©{year}</p>
			<p class="type-caption text-neutral-700">
				Brand names, trademarks, and assets belong to their respective owners. Work is shown for
				portfolio purposes only.
			</p>
		</div>
		<img {src} alt="" class="size-12" />
	</div>
	<!-- Site Links -->
	<div
		class="dec-border-t grid h-fit grid-cols-2 gap-1.5 p-3 type-label text-neutral-700 uppercase before:border-t before:border-neutral-300 sm:col-start-2 sm:h-full"
	>
		<a href="/work">Work</a>
		<a href="/about">About</a>
		<a href="/contact">Contact</a>
		<a href="/field-notes">Field Notes</a>
	</div>
</footer>
