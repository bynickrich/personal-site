<script lang="ts">
	import { buttonVariants } from './button/Button.variants';
	import Mark3D from './Mark3D.svelte';
</script>

<section
	class="flex flex-col bg-neutral-100 ring ring-neutral-300 ring-inset sm:flex-row-reverse sm:items-center sm:gap-4 sm:p-6 md:justify-center"
>
	<figure class="sm:aspect-unset grid aspect-square place-items-center sm:size-80 lg:size-100">
		<Mark3D class="size-full" />
	</figure>
	<div class="flex flex-col gap-4 px-3 pt-4 pb-3 md:max-w-xl">
		<!-- Copy -->
		<div class="flex flex-col gap-2 md:gap-4">
			<p class="type-metadata text-neutral-700">Design Engineer</p>
			<div class="flex flex-col md:gap-1">
				<h1 class="type-page-title">Nick Richardson</h1>
				<p class="max-w-3xl pl-px type-reading text-neutral-700 md:type-intro md:text-balance">
					I’m a product designer who works in Figma and code. For the past decade, I’ve helped teams
					turn complicated workflows into clear, functioning software.
				</p>
			</div>
		</div>
		<!-- Actions -->
		<div class="flex w-full gap-3 sm:max-w-sm">
			<a href="/work/datapoint" class={buttonVariants({ class: 'w-full' })}>View DataPoint</a>
			<a href="/about" class={buttonVariants({ color: 'outline', class: 'w-full' })}>About</a>
		</div>
	</div>
</section>
