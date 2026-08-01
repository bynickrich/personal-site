<script lang="ts">
	import logo from '$lib/assets/mark.svg';

	let mobileMenuIsOpen = $state(false);

	// TODO: Animate logo on hover/focus
	// TODO: Add current focus state
	// TODO: Hambuger menu for additional links

	const links = [
		{ name: 'Home', href: '/' },
		{ name: 'About', href: '/about' },
		{ name: 'Contact', href: '/contact' },
		{ name: 'Field Notes', href: '/field-notes' },
		{ name: 'Assignments', href: '/assignments' }
	];
</script>

<nav
	class="mb-4 flex h-10 items-center justify-between border border-neutral-300 bg-neutral-100 px-1"
>
	<a
		href="/"
		aria-label="Navigate home"
		class="flex h-8 w-fit items-center gap-1.5 p-1.5 font-display text-lg font-medium hover:bg-neutral-200"
		><img src={logo} alt="Logo" class="size-5" />Nick Richardson</a
	>
	<button onclick={() => (mobileMenuIsOpen = !mobileMenuIsOpen)}>BUR</button>
	{#if mobileMenuIsOpen}
		<div
			class="fixed top-0 left-0 h-svh w-svw bg-neutral-100 p-3 transition-opacity starting:opacity-0"
		>
			<ul>
				{#each links as link}
					<li>
						<a href={link.href} onclick={() => (mobileMenuIsOpen = !mobileMenuIsOpen)}
							>{link.name}</a
						>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</nav>
