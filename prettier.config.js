/** @type {import("prettier").Config} */
const config = {
	useTabs: true,
	singleQuote: true,
	trailingComma: 'none',
	printWidth: 100,
	plugins: [
		'prettier-plugin-svelte',
		'@ianvs/prettier-plugin-sort-imports',
		'prettier-plugin-tailwindcss'
	],
	importOrder: ['<BUILTIN_MODULES>', '<THIRD_PARTY_MODULES>', '^\\$app/', '^\\$lib/', '^[.]'],
	importOrderTypeScriptVersion: '6.0.0',
	overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }],
	tailwindStylesheet: './src/routes/layout.css'
};

export default config;
