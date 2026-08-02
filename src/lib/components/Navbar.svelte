<script lang="ts">
	import { page } from '$app/state';
	import logo from '$lib/assets/mark.svg';

	function closePopover(event: MouseEvent) {
		const link = event.currentTarget as HTMLAnchorElement;
		const popover = link.closest<HTMLElement>('[popover]');
		popover?.hidePopover();
	}

	// TODO: Animate logo on hover/focus
	// TODO: Add current focus state
	// TODO: Hambuger icon
	// TODO: Replace popover with div, track state, use svelte tranisition fly, and on click of overlay close menu instead of listening for outside clicks

	const links = [
		{ name: 'Home', href: '/' },
		{ name: 'About', href: '/about' },
		{ name: 'Contact', href: '/contact' },
		{ name: 'Field Notes', href: '/field-notes' },
		{ name: 'Assignments', href: '/assignments' }
	];
</script>

<!-- Navbar -->
<nav
	class="fixed right-0 bottom-0 left-0 z-20 flex h-10 w-svw items-center justify-between border-t border-neutral-300 bg-neutral-100 px-1"
>
	<a
		href="/"
		aria-label="Navigate home"
		class="flex h-8 w-fit items-center gap-1.5 p-1.5 font-display text-lg font-medium hover:bg-neutral-200"
		><img src={logo} alt="Logo" class="size-5" />Nick Richardson</a
	>
	<button popovertarget="mobile-nav-popover">BUR</button>
</nav>

<!-- Mobile Nav Popover -->
<nav
	class="transition-transform] fixed inset-x-0 top-auto bottom-10 z-10 h-fit w-svw translate-y-full border-t border-neutral-300 bg-neutral-100 p-3 uppercase transition-discrete duration-150 ease-in open:translate-y-0 open:opacity-100 motion-reduce:transition-none starting:open:translate-y-full"
	id="mobile-nav-popover"
	popover="auto"
>
	<ul
		class="*:border-r *:border-b *:border-l *:border-neutral-300 last:border-t last:border-neutral-300"
	>
		{#each links as link}
			<li>
				<a
					href={link.href}
					class="flex h-10 items-center justify-center font-medium"
					onclick={closePopover}
					aria-current={page.url.pathname === link.href}>{link.name}</a
				>
			</li>
		{/each}
	</ul>
</nav>
