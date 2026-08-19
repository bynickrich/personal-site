<script lang="ts">
	import { buttonVariants } from '#lib/components/button/Button.variants.js';
	import LinkedIn from '#lib/icons/LinkedIn.svelte';

	const linkedInUrl = 'https://www.linkedin.com/in/bynickrich/';
</script>

<svelte:head>
	<title>Contact | Nick Richardson</title>
	<meta
		name="description"
		content="Get in touch with Nick Richardson about design engineering roles, product work, or design systems."
	/>
</svelte:head>

<section class="bg-neutral-100 ring ring-neutral-300 ring-inset" aria-labelledby="contact-title">
	<header
		class="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 border-b border-neutral-300 p-3 type-eyebrow text-neutral-700"
	>
		<p class="whitespace-nowrap">03 //// Contact</p>
		<p class="ms-auto whitespace-nowrap">Channel / LinkedIn</p>
	</header>

	<div class="grid md:grid-cols-[minmax(0,3fr)_minmax(18rem,2fr)]">
		<div>
			<div class="max-w-3xl p-3 sm:p-6">
				<p class="type-eyebrow text-accent-700">Open to a good conversation</p>
				<h1 id="contact-title" class="mt-2 type-page-title text-balance text-neutral-800">
					Let’s talk about what you’re building.
				</h1>
				<p class="mt-2 max-w-2xl type-intro text-pretty text-neutral-700">
					If you’re hiring for a design engineering role, have a product project in mind, or want to
					ask about the work, LinkedIn is the easiest way to reach me.
				</p>
			</div>

			<div class="border-t border-neutral-300 p-3 sm:px-6">
				<p class="max-w-2xl type-eyebrow text-neutral-700">A useful first message</p>
				<p class="mt-1 max-w-2xl type-caption text-pretty text-neutral-700">
					Include the product, team, and problem you’re working on. That gives me enough context to
					respond thoughtfully.
				</p>
			</div>
		</div>

		<aside
			class="flex flex-col justify-between gap-12 border-t border-neutral-300 bg-neutral-800 p-3 text-neutral-50 sm:p-6 md:border-t-0 md:border-l"
			aria-labelledby="linkedin-heading"
		>
			<div>
				<div class="grid size-10 place-items-center border border-neutral-600" aria-hidden="true">
					<LinkedIn width={18} height={18} />
				</div>
				<p class="mt-8 type-eyebrow text-neutral-300">Preferred channel</p>
				<h2 id="linkedin-heading" class="mt-1 type-section-title text-balance">
					Connect on LinkedIn
				</h2>
				<p class="mt-1 max-w-sm type-caption text-pretty text-neutral-300">
					Send a note with your connection request and I’ll pick it up there.
				</p>
			</div>

			<a
				href={linkedInUrl}
				target="_blank"
				rel="noreferrer"
				class={buttonVariants({
					class: 'w-fit auto-cols-max grid-flow-col gap-2 bg-neutral-50 text-neutral-900'
				})}
			>
				<span>Open LinkedIn</span>
				<span aria-hidden="true">↗</span>
			</a>
		</aside>
	</div>
</section>
