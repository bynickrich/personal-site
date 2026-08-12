<script lang="ts">
	const year = new Date().getFullYear();
	import src from '$lib/assets/mark.svg';
	import Bluesky from '$lib/icons/Bluesky.svelte';
	import Github from '$lib/icons/Github.svelte';
	import LinkedIn from '$lib/icons/LinkedIn.svelte';
	import Twitter from '$lib/icons/Twitter.svelte';
</script>

<footer
	class="relative mt-3 mb-20 max-w-300 border border-neutral-300 bg-neutral-100 sm:grid sm:h-fit sm:grid-cols-2 sm:grid-rows-1"
>
	<!-- Legal Disclosure -->
	<div
		class="flex gap-2 border-b border-neutral-300 p-3 sm:col-start-1 sm:border-r sm:border-neutral-300"
	>
		<div class="flex flex-col gap-0.5">
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
		class="type-label grid h-fit grid-cols-2 gap-1.5 border-b border-neutral-300 p-3 text-neutral-700 uppercase sm:col-start-2 sm:h-full"
	>
		<a href="/work">Work</a>
		<a href="/about">About</a>
		<a href="/contact">Contact</a>
		<a href="/field-notes">Field Notes</a>
	</div>
	<!-- Social Icons -->
	<div class="flex h-10 justify-center sm:col-span-2 sm:row-start-2">
		<div class="flex items-center gap-4 px-4 text-neutral-700 sm:w-fit sm:justify-center">
			<a href="https://x.com/bynickrich" aria-label="Nick Richardson on X">
				<Twitter />
			</a>
			<a href="https://github.com/bynickrich" aria-label="Nick Richardson on GitHub">
				<Github />
			</a>
			<a href="https://www.linkedin.com/in/bynickrich/" aria-label="Nick Richardson on LinkedIn">
				<LinkedIn />
			</a>
			<a href="https://bsky.app/profile/bynickrich" aria-label="Nick Richardson on Bluesky">
				<Bluesky />
			</a>
		</div>
	</div>
</footer>
