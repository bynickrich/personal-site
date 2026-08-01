<script lang="ts">
	import { page } from '$app/state';
	import logo from '$lib/assets/mark.svg';

	let mobileMenuIsOpen = $state(true);

	// TODO: Animate logo on hover/focus
	// TODO: Add current focus state
	// TODO: Hambuger menu for additional links

	const links = [
		{ name: 'About', href: '/about' },
		{ name: 'Contact', href: '/contact' },
		{ name: 'Field Notes', href: '/field-notes' },
		{ name: 'Assignments', href: '/assignments' }
	];
</script>

<nav
	class="fixed right-0 bottom-0 left-0 z-20 flex h-10 w-svw items-center justify-between border-t border-neutral-300 bg-neutral-100 px-1"
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
			class="i fixed right-0 bottom-10 left-0 z-10 h-fit w-svw border-t border-neutral-300 bg-neutral-100 p-3 uppercase"
		>
			<ul
				class="*:border-r *:border-b *:border-l *:border-neutral-300 last:border-t last:border-neutral-300"
			>
				{#each links as link}
					<li>
						<a
							href={link.href}
							class="grid h-10 place-items-center font-medium"
							onclick={() => (mobileMenuIsOpen = !mobileMenuIsOpen)}>{link.name}</a
						>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</nav>
