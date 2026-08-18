<script lang="ts">
	import { page } from '$app/state';
	import logo from '$lib/assets/mark.svg';
	import menu from '$lib/assets/menu.svg';
	import close from '$lib/assets/x.svg';
	import { onMount } from 'svelte';
	import { on } from 'svelte/events';
	import { fly, fade } from 'svelte/transition';

	let isOpen = $state(false);
	let currentPage = $derived(page.url.pathname);

	// Auto close mobile extended nav if viewport is larger than sm: variant
	onMount(() => {
		const desktop = window.matchMedia('(min-width: 40rem)');

		return on(desktop, 'change', (event) => {
			if (event.matches) closeMobileNav();
		});
	});

	function handleEscape(event: KeyboardEvent) {
		if (event.key !== 'Escape') return;

		isOpen = false;
	}

	function closeMobileNav() {
		isOpen = false;
	}

	// TODO: Animate logo on hover/focus

	const links = [
		{ name: 'Home', href: '/' },
		{ name: 'About', href: '/about' },
		{ name: 'Contact', href: '/contact' }
	];
</script>

<svelte:window onkeydown={handleEscape} />

<!-- Navbar -->
<nav
	class="dec-border-t fixed right-0 bottom-0 left-0 z-20 flex h-10 w-full items-center justify-between bg-neutral-100 px-1 before:border-t before:border-neutral-300 sm:relative sm:inset-auto sm:mb-4 sm:max-w-300 sm:pr-2 sm:pl-0.5 sm:ring sm:ring-neutral-300 sm:ring-inset"
	aria-label="Primary"
>
	<a
		href="/"
		aria-label="Home"
		onclick={closeMobileNav}
		class="flex h-8 w-fit items-center gap-2 p-2 type-brand transition-colors hover:bg-neutral-200"
		><img src={logo} alt="" class="size-5" />Nick Richardson</a
	>
	<button
		onclick={() => (isOpen = !isOpen)}
		aria-controls="mobile-nav"
		aria-expanded={isOpen}
		aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
		class="grid size-8 place-items-center sm:hidden"
		><img src={isOpen ? close : menu} alt={isOpen ? 'Close icon' : 'Menu icon'} /></button
	>
	<ul class="hidden type-label uppercase sm:flex sm:gap-2">
		{#each links as link (link.href)}
			{#if link.name !== 'Home'}
				<li>
					<a
						href={link.href}
						aria-current={currentPage === link.href ? 'page' : undefined}
						class={[
							'relative inline-flex h-5 items-center px-2 transition-colors hover:text-accent-600',
							currentPage === link.href &&
								"text-accent-600 before:pointer-events-none before:absolute before:inset-y-0 before:left-0 before:w-1.5 before:border-y before:border-l before:border-accent-600 before:content-[''] after:pointer-events-none after:absolute after:inset-y-0 after:right-0 after:w-1.5 after:border-y after:border-r after:border-accent-600 after:content-['']"
						]}>{link.name}</a
					>
				</li>
			{/if}
		{/each}
	</ul>
</nav>

<!-- Mobile Nav Popover -->
{#if isOpen}
	<div
		class="dec-border-t fixed inset-x-0 bottom-10 z-10 h-fit bg-neutral-100 p-2 before:border-t before:border-neutral-300"
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
						class="flex h-10 items-center justify-center type-button"
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
		class="fixed inset-0 z-1 bg-neutral-800/40"
		transition:fade={{ duration: 150 }}
		onclick={closeMobileNav}
	></button>
{/if}
