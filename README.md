# Nick Richardson — Personal Site

My personal site and portfolio. It is where I document selected product-design and design-engineering work, and where I experiment with the site itself.

Built with SvelteKit, Svelte 5, TypeScript, Tailwind CSS, and MDsveX. The project uses pnpm and Oxfmt.

## Local development

Install dependencies and start the development server:

```sh
pnpm install
pnpm run dev
```

The local URL will be printed in the terminal. Pass `--open` if you want Vite to open it automatically:

```sh
pnpm run dev --open
```

## Checks

```sh
pnpm run lint
pnpm run check
pnpm run build
```

After Action Reports live in `src/lib/content/case-studies`, Field Notes live in
`src/lib/content/field-notes`, and their public routes live under `src/routes`.
