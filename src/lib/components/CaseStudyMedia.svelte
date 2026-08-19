<script lang="ts">
	let {
		src,
		alt,
		caption,
		label = 'Visual evidence',
		width,
		height,
		eager = false,
		preview = 'full'
	}: {
		src: string;
		alt: string;
		caption: string;
		label?: string;
		width: number;
		height: number;
		eager?: boolean;
		preview?: 'full' | 'top-crop';
	} = $props();
</script>

<figure class="overflow-hidden bg-neutral-950 ring ring-neutral-300 ring-inset">
	<div class={preview === 'top-crop' ? 'aspect-[4/3] overflow-hidden' : undefined}>
		<img
			{src}
			{alt}
			{width}
			{height}
			loading={eager ? 'eager' : 'lazy'}
			fetchpriority={eager ? 'high' : 'auto'}
			class={[
				'w-full bg-neutral-200 ring ring-neutral-300 ring-inset',
				preview === 'top-crop' ? 'h-full object-cover object-top' : 'h-auto'
			]}
		/>
	</div>
	<figcaption
		class="grid gap-2 border-t border-neutral-700 bg-neutral-900 p-3 text-neutral-100 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start"
	>
		<div>
			<p class="type-eyebrow text-neutral-400">{label}</p>
			<p class="mt-1 max-w-[70ch] type-caption text-pretty text-neutral-200">{caption}</p>
		</div>
		<a
			href={src}
			target="_blank"
			rel="noreferrer"
			class="type-button whitespace-nowrap text-accent-300 underline decoration-from-font underline-offset-4"
		>
			Open full size ↗
		</a>
	</figcaption>
</figure>
