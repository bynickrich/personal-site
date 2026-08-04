<script lang="ts">
	type Props = {
		href: string;
		name: string;
		status: 'ACTIVE' | 'COMPLETE';
	};
	let { href, name, status }: Props = $props();
</script>

<a class="block border border-neutral-300 bg-neutral-100" {href}>
	<figure class="grid min-h-52 place-items-center font-medium uppercase">
		Isometric illustration here
	</figure>
	<div
		class="flex h-8 items-center justify-between border-t border-neutral-300 px-2 text-sm font-medium text-neutral-700 uppercase"
	>
		<p>>{name}</p>
		<p>{status}</p>
		<!-- TODO: Add square with color that reflects status. If active us tailwind pulse animation -->
	</div>
</a>
