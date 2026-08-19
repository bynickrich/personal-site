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
	<div class="flex flex-col gap-4 px-3 pt-4 pb-3 md:max-w-xl">
		<!-- Copy -->
		<div class="flex flex-col gap-2 md:gap-6">
			<p class="flex items-center gap-1 type-metadata text-neutral-700">
				<img src={logo} alt="" class="inline size-3 translate-y-[-0.5px]" />Design Engineer
			</p>
			<div class="flex flex-col md:gap-1">
				<h1 class="type-page-title">Nick Richardson</h1>
				<p class="max-w-3xl pl-px type-reading text-neutral-700 md:type-intro md:text-balance">
					I’m a product designer who works in code. For the past decade, I’ve helped teams turn
					complicated workflows into clear, accessible software.
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
