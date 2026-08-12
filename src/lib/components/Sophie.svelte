<script lang="ts">
	import sophie from '$lib/assets/sophie.webp';
	import type { Attachment } from 'svelte/attachments';
	import { prefersReducedMotion } from 'svelte/motion';
	import { innerHeight, scrollY } from 'svelte/reactivity/window';

	let sectionElement = $state<HTMLElement>();

	const trackSection: Attachment<HTMLElement> = (element) => {
		sectionElement = element;

		return () => {
			if (sectionElement === element) {
				sectionElement = undefined;
			}
		};
	};

	let progress = $derived.by(() => {
		const y = scrollY.current;
		const viewportHeight = innerHeight.current;

		if (y === undefined || viewportHeight === undefined || !sectionElement) {
			return 0;
		}

		const distanceIntoView = viewportHeight - sectionElement.getBoundingClientRect().top;

		return Math.min(1, Math.max(0, distanceIntoView / sectionElement.offsetHeight));
	});

	let scale = $derived(prefersReducedMotion.current ? 1 : 0.35 + progress * 0.65);
</script>

<section
	{@attach trackSection}
	class="pointer-events-none h-48 overflow-hidden"
	aria-label="Meet Sophie"
>
	<div class="flex h-full flex-col items-center justify-end gap-2 pb-14 sm:pb-4">
		<img
			src={sophie}
			alt="Sophie the Pomeranian"
			class="size-24 origin-bottom object-contain"
			style:opacity={Math.min(1, progress * 3)}
			style:transform={`scale(${scale})`}
		/>
		{#if progress > 0.75}
			<p class="type-caption rounded-full bg-white px-3 py-2 shadow-md">Hi, I’m Sophie.</p>
		{/if}
	</div>
</section>
