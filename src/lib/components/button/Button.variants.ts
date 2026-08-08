import { tv } from 'tailwind-variants';

export const buttonVariants = tv({
	base: 'font-semibold uppercase grid place-items-center px-3 h-10 text-sm tracking-wide',
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
