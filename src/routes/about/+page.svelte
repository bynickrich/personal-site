<script lang="ts">
	import { buttonVariants } from '$lib/components/button/Button.variants';

	const strengths = [
		{
			id: '01',
			title: 'Product judgment',
			description:
				'I help teams frame the problem, clarify the experience, and make decisions that connect customer needs to product direction.'
		},
		{
			id: '02',
			title: 'Systems leverage',
			description:
				'I turn recurring decisions into reusable language, components, and workflows that help design and engineering move together.'
		},
		{
			id: '03',
			title: 'Frontend finish',
			description:
				'I work in production code to carry interaction quality, accessibility, responsive behavior, and visual detail through the last mile.'
		}
	];

	const experience = [
		{
			period: '2024–Present',
			role: 'Design Engineer',
			organization: 'Project Management Institute',
			description:
				'Building polished interactive experiences and closing the gap between product designers and frontend developers.'
		},
		{
			period: '2023–2024',
			role: 'Product Designer, Design Systems',
			organization: 'Project Management Institute',
			description:
				'Led the next generation of the Catalyst design system across Figma, React, Tailwind CSS, and Radix UI.'
		},
		{
			period: '2022–2023',
			role: 'Senior UI Designer',
			organization: 'Allegion',
			description:
				'Shaped the Zentra brand, web, and mobile platform while leading visual design and company-wide system work.'
		},
		{
			period: '2021–2022',
			role: 'UI/UX Designer',
			organization: 'Quality Counts',
			description:
				'Rebuilt DataPoint around a new brand and design system, supported its go-to-market, and helped establish a software team.'
		},
		{
			period: '2020–2021',
			role: 'Selected product engagements',
			organization: 'Thermo Fisher / Amazon AWS / Wells Fargo / OKCoin',
			description:
				'Designed systems and complex product experiences across biotech, cloud finance, commercial banking, and crypto.'
		},
		{
			period: '2016–2020',
			role: 'Product Designer',
			organization: 'Allegion',
			description:
				'Co-founded the digital product design team, created its first design system and web standards, and supported digital transformation.'
		}
	];

	const focusAreas = [
		'Design systems',
		'Product strategy',
		'Interaction design',
		'Frontend implementation',
		'Accessibility',
		'Design-to-code workflows'
	];
</script>

<svelte:head>
	<title>About — Nick Richardson</title>
	<meta
		name="description"
		content="Nick Richardson is a Design Engineer with a decade of product-design experience spanning product strategy, design systems, and frontend implementation."
	/>
</svelte:head>

<div class="flex flex-col gap-3 sm:gap-4">
	<header class="bg-neutral-100 ring ring-neutral-300 ring-inset">
		<div
			class="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 border-b border-neutral-300 p-3 type-eyebrow text-neutral-700"
		>
			<p class="whitespace-nowrap">02 //// Service Record</p>
			<p class="ms-auto whitespace-nowrap">Status / Active</p>
		</div>

		<div class="p-3 sm:p-6">
			<div class="max-w-4xl">
				<h1 class="type-page-title text-balance text-neutral-800">
					Design engineer with product-design depth.
				</h1>
				<p class="mt-2 max-w-3xl type-intro text-pretty text-neutral-700">
					I work from early product direction through design systems and production frontend—closing
					the gaps where intent, interaction quality, and implementation tend to drift.
				</p>
			</div>
		</div>

		<dl class="grid grid-cols-2 border-t border-neutral-300 lg:grid-cols-4">
			<div class="border-r border-b border-neutral-300 p-3 lg:border-b-0">
				<dt class="type-eyebrow">Experience</dt>
				<dd class="mt-1 type-caption text-neutral-700">10 years</dd>
			</div>
			<div class="border-b border-neutral-300 p-3 lg:border-r lg:border-b-0">
				<dt class="type-eyebrow">Current</dt>
				<dd class="mt-1 type-caption text-neutral-700">Project Management Institute</dd>
			</div>
			<div class="border-r border-neutral-300 p-3">
				<dt class="type-eyebrow">Scope</dt>
				<dd class="mt-1 type-caption text-neutral-700">Product / Systems / Frontend</dd>
			</div>
			<div class="p-3">
				<dt class="type-eyebrow">Base</dt>
				<dd class="mt-1 type-caption text-neutral-700">Greater Indianapolis</dd>
			</div>
		</dl>
	</header>

	<section class="bg-neutral-100 ring ring-neutral-300 ring-inset" aria-labelledby="working-range">
		<div class="border-b border-neutral-300 p-3">
			<p class="type-eyebrow text-neutral-700">Operating Range</p>
			<h2 id="working-range" class="mt-1 type-section-title text-balance">
				What I bring to a team
			</h2>
		</div>

		<div class="grid md:grid-cols-3">
			{#each strengths as strength, index (strength.id)}
				<article
					class={[
						'p-3 sm:p-4 md:min-h-48',
						index < strengths.length - 1 && 'border-b border-neutral-300 md:border-r md:border-b-0'
					]}
				>
					<p class="type-eyebrow text-accent-700">{strength.id}</p>
					<div class="mt-4 md:mt-8">
						<h3 class="type-card-title text-balance">{strength.title}</h3>
						<p class="mt-1 type-caption text-pretty text-neutral-700">{strength.description}</p>
					</div>
				</article>
			{/each}
		</div>
	</section>

	<section class="bg-neutral-100 ring ring-neutral-300 ring-inset" aria-labelledby="experience">
		<header class="flex items-end justify-between gap-4 border-b border-neutral-300 p-3">
			<div>
				<p class="type-eyebrow text-neutral-700">Selected Record</p>
				<h2 id="experience" class="mt-1 type-section-title text-balance">Experience</h2>
			</div>
			<p class="type-eyebrow whitespace-nowrap text-neutral-700">2016–Present</p>
		</header>

		<ol>
			{#each experience as item, index (item.period + item.role)}
				<li
					class={[
						'grid grid-cols-[6.5rem_minmax(0,1fr)] gap-x-3 gap-y-2 p-3 sm:p-4 md:grid-cols-[8rem_minmax(0,1fr)_minmax(16rem,1fr)] md:gap-3',
						index < experience.length - 1 && 'border-b border-neutral-300'
					]}
				>
					<p class="type-eyebrow whitespace-nowrap text-neutral-700">{item.period}</p>
					<div>
						<h3 class="type-label text-balance">{item.role}</h3>
						<p class="type-caption wrap-break-word text-neutral-700">{item.organization}</p>
					</div>
					<p class="col-start-2 type-caption text-pretty text-neutral-700 md:col-start-auto">
						{item.description}
					</p>
				</li>
			{/each}
		</ol>
	</section>

	<section
		class="grid bg-neutral-100 ring ring-neutral-300 ring-inset md:grid-cols-[minmax(0,3fr)_minmax(18rem,2fr)]"
		aria-labelledby="focus"
	>
		<div class="p-3 sm:p-4 md:border-r md:border-neutral-300">
			<p class="type-eyebrow text-neutral-700">Working Set</p>
			<h2 id="focus" class="mt-1 type-section-title text-balance">Focus areas</h2>
			<ul class="mt-4 flex flex-wrap gap-2">
				{#each focusAreas as area (area)}
					<li
						class="border border-neutral-300 px-2 py-1 type-caption whitespace-nowrap text-neutral-700"
					>
						{area}
					</li>
				{/each}
			</ul>
		</div>

		<div class="border-t border-neutral-300 p-3 sm:p-4 md:border-t-0">
			<p class="type-eyebrow text-neutral-700">Education</p>
			<p class="mt-4 type-label">Bachelor of Science</p>
			<p class="type-caption text-pretty text-neutral-700">
				Media Arts and Sciences / Human-Computer Interaction
			</p>
			<p class="mt-2 type-caption text-neutral-700">Indiana University Indianapolis</p>
		</div>
	</section>

	<section
		class="grid gap-6 bg-neutral-800 p-3 text-neutral-50 sm:p-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-end"
		aria-labelledby="next-step"
	>
		<div>
			<p class="type-eyebrow text-neutral-300">Next Step</p>
			<h2 id="next-step" class="mt-2 type-section-title text-balance">
				See how the work holds together.
			</h2>
			<p class="mt-1 max-w-xl type-caption text-pretty text-neutral-300">
				The case studies cover the decisions, systems, and implementation behind selected projects.
			</p>
		</div>
		<div class="flex w-full gap-3 md:w-auto">
			<a
				href="/work"
				class={buttonVariants({ class: 'w-full bg-neutral-50 text-neutral-900 md:w-auto' })}
			>
				View work
			</a>
			<a
				href="/contact"
				class={buttonVariants({
					color: 'outline',
					class: 'w-full text-neutral-50 ring-neutral-50 md:w-auto'
				})}>Contact</a
			>
		</div>
	</section>
</div>
