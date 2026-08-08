<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import type { ComponentProps } from 'svelte';

	import WorkCard from './WorkCard.svelte';

	const workCardProps = {
		meta: '01 / work',
		href: '/work/zentra',
		name: 'Zentra',
		type: 'Product Design',
		summary: 'Redefining retrofit access control',
		role: 'UI Designer',
		period: '2024–2025',
		status: 'PUBLISHED'
	} satisfies ComponentProps<typeof WorkCard>;

	const { Story } = defineMeta({
		title: 'WorkCard',
		component: WorkCard
	});
</script>

<Story name="WorkCard" args={workCardProps}></Story>
