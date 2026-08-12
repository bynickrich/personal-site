import { tv } from 'tailwind-variants';

export const buttonVariants = tv({
	base: 'type-button grid h-10 place-items-center px-3',
	variants: {
		color: {
			default: 'bg-neutral-800 text-neutral-50',
			outline: 'ring-2 ring-neutral-800 ring-inset text-neutral-800'
		}
	},
	defaultVariants: {
		color: 'default'
	}
});
