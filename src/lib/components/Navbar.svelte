<script lang="ts">
	import { page } from '$app/state';
	import logo from '$lib/assets/mark.svg';
	import { fly, fade } from 'svelte/transition';

	let isOpen = $state(false);
	let currentPage = $derived(page.url.pathname);

	function handleEscape(event: KeyboardEvent) {
		if (event.key !== 'Escape') return;

		isOpen = false;
	}

	function closeMobileNav() {
		isOpen = false;
	}

	// TODO: Animate logo on hover/focus
	// TODO: Add current focus state
	// TODO: Hamburger icon

	const links = [
		{ name: 'Home', href: '/' },
		{ name: 'About', href: '/about' },
		{ name: 'Contact', href: '/contact' },
		{ name: 'Field Notes', href: '/field-notes' },
		{ name: 'Assignments', href: '/assignments' }
	];
</script>

<svelte:window onkeydown={handleEscape} />

<!-- Navbar -->
<nav
	class="fixed right-0 bottom-0 left-0 z-20 flex h-10 w-full items-center justify-between border-t border-neutral-300 bg-neutral-100 px-1 sm:relative sm:inset-auto sm:mb-4 sm:border"
	aria-label="Primary"
>
	<a
		href="/"
		aria-label="Navigate home"
		onclick={closeMobileNav}
		class="flex h-8 w-fit items-center gap-1.5 p-1.5 font-display text-lg font-medium hover:bg-neutral-200"
		><img src={logo} alt="Logo" class="size-5" />Nick Richardson</a
	>
	<button
		onclick={() => (isOpen = !isOpen)}
		aria-controls="mobile-nav"
		aria-expanded={isOpen}
		aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
		class="rounded bg-accent-500 px-2 py-1 font-medium text-white sm:hidden">BUR</button
	>
	<ul class="hidden sm:flex sm:gap-3 sm:text-sm sm:font-medium sm:text-neutral-800 sm:uppercase">
		{#each links as link (link.href)}
			<li>
				<a href={link.href} aria-current={currentPage === link.href ? 'page' : undefined}
					>{link.name}</a
				>
			</li>
		{/each}
	</ul>
</nav>

<!-- Mobile Nav Popover -->
{#if isOpen}
	<div
		class="fixed inset-x-0 bottom-10 z-10 h-fit border-t border-neutral-300 bg-neutral-100 p-3"
		id="mobile-nav"
		transition:fly={{ duration: 150, y: '100%', opacity: 1 }}
	>
		<ul
			class="*:border-r *:border-b *:border-l *:border-neutral-300 last:border-t last:border-neutral-300"
		>
			{#each links as link (link.href)}
				<li>
					<a
						href={link.href}
						class="flex h-10 items-center justify-center font-medium uppercase"
						aria-current={currentPage === link.href ? 'page' : undefined}
						onclick={closeMobileNav}
						><span class="relative">
							{#if currentPage === link.href}
								<span
									aria-hidden="true"
									class="absolute top-1/2 right-full mr-1.5 -translate-y-1/2 text-accent-600"
								>
									&gt;
								</span>
							{/if}

							{link.name}
						</span></a
					>
				</li>
			{/each}
		</ul>
	</div>

	<!-- Overlay -->
	<button
		type="button"
		aria-label="Close navigation menu"
		class="fixed inset-0 z-0 bg-neutral-800/40"
		transition:fade={{ duration: 150 }}
		onclick={closeMobileNav}
	></button>
{/if}
