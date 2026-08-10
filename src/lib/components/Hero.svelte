<script>
	import logo from '$lib/assets/mark.svg';

	import { buttonVariants } from './button/Button.variants';
</script>

<section
	class="flex flex-col bg-neutral-100 ring ring-neutral-300 ring-inset sm:flex-row-reverse sm:items-center sm:gap-4 sm:p-6 md:justify-center"
>
	<figure
		class="sm:aspect-unset grid aspect-square place-items-center bg-accent-300 sm:size-80 lg:size-100"
	></figure>
	<div class="flex flex-col gap-4 px-2 pt-3.5 pb-2 md:max-w-xl">
		<!-- Copy -->
		<div class="flex flex-col gap-4">
			<p
				class="flex items-center gap-1 font-mono text-sm leading-5 font-medium text-neutral-700 uppercase"
			>
				<img src={logo} alt="" class="inline size-3 translate-y-[-0.5px]" />Design Engineer
			</p>
			<div class="flex flex-col gap-1.5">
				<h1 class="font-display text-3xl leading-8 tracking-tight">Nick Richardson</h1>
				<p class="max-w-3xl pl-px leading-5.5 text-neutral-700">
					I combine a decade of product-design experience with frontend implementation to build
					polished, accessible, system-driven software.
				</p>
			</div>
		</div>
		<!-- Actions -->
		<div class="flex w-full gap-2 sm:max-w-sm">
			<a href="/work" class={buttonVariants({ class: 'w-full' })}>View work</a>
			<a href="/contact" class={buttonVariants({ color: 'outline', class: 'w-full' })}>Contact</a>
		</div>
	</div>
</section>
