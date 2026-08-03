import { tv } from 'tailwind-variants';

export const buttonVariants = tv({
	base: 'font-semibold uppercase grid place-items-center px-3 h-10 text-sm',
	variants: {
		color: {
			default: 'bg-neutral-800 text-neutral-50',
			outline: 'border-2 border-neutral-800 text-neutral-800'
		}
	},
	defaultVariants: {
		color: 'default'
	}
});
