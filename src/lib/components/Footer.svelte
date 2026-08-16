<script lang="ts">
	import src from '$lib/assets/mark.svg';
	import Bluesky from '$lib/icons/Bluesky.svelte';
	import Github from '$lib/icons/Github.svelte';
	import LinkedIn from '$lib/icons/LinkedIn.svelte';
	import Twitter from '$lib/icons/Twitter.svelte';

	const year = new Date().getFullYear();
</script>

<footer
	class="relative mt-3 mb-20 w-full max-w-300 bg-neutral-100 ring ring-neutral-300 ring-inset sm:mt-4 sm:mb-0"
>
	<!-- Document record -->
	<dl class="grid grid-cols-2 border-b border-neutral-300 sm:grid-cols-4">
		<div class="border-r border-b border-neutral-300 p-3 sm:border-b-0">
			<dt class="type-eyebrow">Document</dt>
			<dd class="type-caption text-neutral-700">NR / Portfolio</dd>
		</div>
		<div class="border-b border-neutral-300 p-3 sm:border-r sm:border-b-0">
			<dt class="type-eyebrow">Status</dt>
			<dd class="type-caption text-neutral-700">Active</dd>
		</div>
		<div class="border-r border-neutral-300 p-3">
			<dt class="type-eyebrow">Issued</dt>
			<dd class="type-caption text-neutral-700">{year}</dd>
		</div>
		<div class="p-3">
			<dt class="type-eyebrow">Scope</dt>
			<dd class="type-caption text-neutral-700">Design Engineering</dd>
		</div>
	</dl>

	<div class="grid sm:grid-cols-[minmax(0,3fr)_minmax(18rem,2fr)]">
		<!-- Identity and disclosure -->
		<section class="flex min-w-0 flex-col justify-between gap-6 p-3 sm:p-4">
			<div class="flex items-start justify-between gap-6">
				<div class="flex flex-col gap-4">
					<p class="type-eyebrow text-neutral-600">APPX. A //// Site Record</p>
					<div>
						<h2 class="type-section-title">Nick Richardson</h2>
						<p class="type-caption text-neutral-700">Design Engineer / Product Design</p>
					</div>
				</div>
				<img {src} alt="" class="size-10 shrink-0 sm:size-12" />
			</div>

			<div class="flex flex-col gap-4">
				<nav aria-label="Social links">
					<p class="mb-2 type-eyebrow text-neutral-600">Channels</p>
					<ul class="flex gap-2">
						<li>
							<a
								href="https://www.linkedin.com/in/bynickrich/"
								class="grid size-9 place-items-center border border-neutral-300 text-neutral-700 transition-colors hover:bg-neutral-200 hover:text-neutral-900"
								aria-label="LinkedIn"
							>
								<LinkedIn width={16} height={16} />
							</a>
						</li>
						<li>
							<a
								href="https://github.com/bynickrich"
								class="grid size-9 place-items-center border border-neutral-300 text-neutral-700 transition-colors hover:bg-neutral-200 hover:text-neutral-900"
								aria-label="GitHub"
							>
								<Github width={16} height={16} />
							</a>
						</li>
						<li>
							<a
								href="https://bsky.app/profile/bynickrich"
								class="grid size-9 place-items-center border border-neutral-300 text-neutral-700 transition-colors hover:bg-neutral-200 hover:text-neutral-900"
								aria-label="Bluesky"
							>
								<Bluesky width={16} height={16} />
							</a>
						</li>
						<li>
							<a
								href="https://x.com/bynickrich"
								class="grid size-9 place-items-center border border-neutral-300 text-neutral-700 transition-colors hover:bg-neutral-200 hover:text-neutral-900"
								aria-label="X"
							>
								<Twitter width={16} height={16} />
							</a>
						</li>
					</ul>
				</nav>

				<p class="max-w-2xl type-caption text-neutral-700">
					Nick Richardson ©{year}. Brand names, trademarks, and assets belong to their respective
					owners. Work is shown for portfolio purposes only.
				</p>
			</div>
		</section>

		<!-- Site index -->
		<nav aria-label="Footer" class="border-t border-neutral-300 sm:border-t-0 sm:border-l">
			<p class="border-b border-neutral-300 p-3 type-eyebrow text-neutral-600">
				Site Index / 04 Routes
			</p>
			<ul class="grid grid-cols-2 md:border-b md:border-neutral-300">
				<li class="border-r border-b border-neutral-300">
					<a
						href="/work"
						class="flex min-h-16 flex-col justify-between p-3 transition-colors hover:bg-neutral-200"
					>
						<span class="type-eyebrow text-neutral-500">01</span>
						<span class="flex items-center justify-between type-label uppercase"
							>Work <span aria-hidden="true">→</span></span
						>
					</a>
				</li>
				<li class="border-b border-neutral-300">
					<a
						href="/about"
						class="flex min-h-16 flex-col justify-between p-3 transition-colors hover:bg-neutral-200"
					>
						<span class="type-eyebrow text-neutral-500">02</span>
						<span class="flex items-center justify-between type-label uppercase"
							>About <span aria-hidden="true">→</span></span
						>
					</a>
				</li>
				<li class="border-r border-neutral-300">
					<a
						href="/contact"
						class="flex min-h-16 flex-col justify-between p-3 transition-colors hover:bg-neutral-200"
					>
						<span class="type-eyebrow text-neutral-500">03</span>
						<span class="flex items-center justify-between type-label uppercase"
							>Contact <span aria-hidden="true">→</span></span
						>
					</a>
				</li>
				<li>
					<a
						href="/field-notes"
						class="flex min-h-16 flex-col justify-between p-3 transition-colors hover:bg-neutral-200"
					>
						<span class="type-eyebrow text-neutral-500">04</span>
						<span class="flex items-center justify-between type-label uppercase"
							>Field Notes <span aria-hidden="true">→</span></span
						>
					</a>
				</li>
			</ul>
		</nav>
	</div>

	<!-- Calibration band -->
	<div class="border-t border-neutral-300" aria-hidden="true">
		<div class="calibration-track h-2 border-b border-neutral-300"></div>
		<div class="flex justify-between px-3 py-1 type-eyebrow text-neutral-500">
			<span>00</span>
			<span>25</span>
			<span>50</span>
			<span>75</span>
			<span>100</span>
		</div>
	</div>
</footer>

<style>
	.calibration-track {
		background-image: repeating-linear-gradient(
			to right,
			var(--color-neutral-300) 0 1px,
			transparent 1px 1rem
		);
	}
</style>
