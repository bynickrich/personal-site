<script lang="ts">
	import Allegion from '$lib/icons/Allegion.svelte';
	import Amazon from '$lib/icons/Amazon.svelte';
	import OkCoin from '$lib/icons/OkCoin.svelte';
	import PMI from '$lib/icons/PMI.svelte';
	import ThermoFisher from '$lib/icons/ThermoFisher.svelte';
	import WellsFargo from '$lib/icons/WellsFargo.svelte';
</script>

<div
	class="h-14 overflow-hidden border border-neutral-300 bg-neutral-100 px-3"
	role="img"
	aria-label="Selected clients: Allegion, Amazon, Wells Fargo, PMI, OKCoin, and Thermo Fisher"
>
	<div
		class="flex h-full w-max items-center motion-safe:animate-marquee md:hidden"
		aria-hidden="true"
	>
		{#each [0, 1] as copy (copy)}
			<div class="flex shrink-0 items-center gap-8 pr-8">
				<Allegion />
				<Amazon />
				<WellsFargo />
				<PMI />
				<OkCoin />
				<ThermoFisher />
			</div>
		{/each}
	</div>
	<div class="hidden h-14 items-center justify-center gap-6 md:flex" aria-hidden="true">
		<Allegion />
		<Amazon />
		<WellsFargo />
		<PMI />
		<OkCoin />
		<ThermoFisher />
	</div>
</div>
